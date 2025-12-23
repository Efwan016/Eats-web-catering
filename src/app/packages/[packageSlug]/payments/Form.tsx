"use client"

import "@/libs/thousands";
import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { format } from "date-fns";

import { toast } from "react-toastify";
import SubmitButton from "@/components/SubmitButton";
import { PackageDetails } from "@/mocks/package-details";
import ArrowCircleDown from "@/aseets/icons/Arrow-circle-down";
import CalenderBox from "@/aseets/icons/Calender-box";
import Clock from "@/aseets/icons/clock";
import PinPoint from "@/aseets/icons/PinPoint";
import OfficerBuildingIcon from "@/aseets/icons/Officer-building";
import PackageIcon from "@/aseets/icons/PackageIcon";
import People from "@/aseets/icons/People";
import Truck from "@/aseets/icons/Truck";
import PromoIcon from "@/aseets/icons/Promo";
import User from "@/aseets/icons/User";
import Mailbox from "@/aseets/icons/Mailbox";
import PhoneIcon from "@/aseets/icons/Phone";
import MapIcon from "@/aseets/icons/MapIcon";
import Notes from "@/aseets/icons/Notes";
import BcaIcon from "@/aseets/icons/BCAIcon";
import BadgeCheckmark from "@/aseets/icons/badge-checkmark";
import MandiriIcon from "@/aseets/icons/MandiriIcon";
import ReceiptIcon from "@/aseets/icons/ReceiptIcon";


export type Props = {
  data: PackageDetails;
  tierId: string;
  quantity: string;
}

type Shipping = {
  address: string;
  post_code: string;
  notes: string;
};

type CheckoutItem = {
  name: string;
  email: string;
  phone: string;
  started_at?: string;
  shipping?: Shipping;
  proof?: string;
};

type TCheckoutStore = Record<string, CheckoutItem>;

const generateTrxId = () => `ADZ-${Date.now()}`;

const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

/* ================= COMPONENT ================= */

export default function Form({ data, tierId }: Props) {
  const router = useRouter();
   const searchParams = useSearchParams();
    const quantity = searchParams.get("quantity") ?? "0";
    const numericQuantity = Number(quantity);

  /* ---------- init localStorage ---------- */
  const getInitialCheckoutState = (): TCheckoutStore => {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem("checkout");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  };

  const [checkout, setCheckout] = useState<TCheckoutStore>(
    getInitialCheckoutState
  );

  const checkoutSet = useCallback(
    (cb: (prev: TCheckoutStore) => TCheckoutStore) => {
      setCheckout((prev) => {
        const next = cb(prev);
        localStorage.setItem("checkout", JSON.stringify(next));
        return next;
      });
    },
    []
  );

  /* ---------- data ---------- */
  const saved = checkout[data.slug] ?? {};
  const savedShipping: Shipping = saved.shipping ?? {
    address: "",
    post_code: "",
    notes: "",
  };

 const tier = data.tiers?.find((t) => String(t.id) === tierId) ?? null;
 const subtotal = (tier?.price ?? 0) * numericQuantity;
 const tax = subtotal * 0.11;
 const grandTotal = (tier?.price ?? 0) * numericQuantity + tax;



  /* ---------- submit ---------- */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!tier) {
      toast.error("Tier not found");
      return;
    }

    const payload = {
      slug: data.slug,
      packageId: data.id,
      tierId,
      name: saved.name,
      email: saved.email,
      phone: saved.phone,
      started_at: saved.started_at,
      price:  tier.price,
      quantity: tier.quantity,
      duration: tier.duration,
      tax,
      grandTotal,
      shipping: savedShipping,
      proof: saved.proof,
    };

    console.log("PAYLOAD", payload);

    const newTrxId = generateTrxId();

    const updatedCheckout = {
      ...checkout,
      [data.slug]: {
        ...checkout[data.slug],
        booking_trx_id: newTrxId,
      },
    };

    localStorage.setItem("checkout", JSON.stringify(updatedCheckout));
    setCheckout(updatedCheckout);

    router.push(
      `/packages/${data.slug}/success?phone=${saved.phone}&trx-id=${newTrxId}`
);
  };

  const updateShipping = (
  field: keyof Shipping,
  value: string
) => {
  checkoutSet((prev) => ({
    ...prev,
    [data.slug]: {
      ...prev[data.slug],
      shipping: {
        ...(prev[data.slug]?.shipping ?? {
          address: "",
          post_code: "",
          notes: "",
        }),
        [field]: value,
      },
    },
  }));
};

const handleProofUpload = (file?: File) => {
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64 = reader.result as string;

    checkoutSet((prev) => ({
      ...prev,
      [data.slug]: {
        ...prev[data.slug],
        proof: base64,
      },
    }));
  };

  reader.readAsDataURL(file);
};



  return (

    <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
      <input type="hidden" value={data.slug} name="slug" />
      <input type="hidden" value={data.id} name="catering_package_id" />
      <input type="hidden" value={tierId} name="catering_tier_id" />
      <input type="hidden" value={saved?.started_at ?? ""} name="started_at" />

      <div className="flex flex-col gap-y-6 px-4 md:px-0">

        <div
          className="flex flex-col bg-white border border-gray-100 shadow-sm rounded-3xl p-5 transition-all duration-300 hover:shadow-md"
        >
          <input
            type="checkbox"
            name="accordion"
            id="customer-information"
            className="peer hidden"
          /><label
            htmlFor="customer-information"
            className="flex justify-between items-center cursor-pointer [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
          >
            <h6 className="text-lg font-bold text-slate-900">Customer Information</h6>
            <span
              className="text-blue-600 flex items-center justify-center transition-all duration-300 rotate-(--state-rotate) bg-gray-50 border border-gray-100 rounded-full p-2"
            >
              <ArrowCircleDown />
            </span>
          </label>
          <div
            className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen"
          >
            <div className="flex relative group">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <User />
              </span>
              <input
                readOnly
                type="text"
                className="pl-12 w-full pt-6 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl peer placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white"
                name="name"
                id="name"
                placeholder="Full Name"
                defaultValue={saved.name}
              />
              <label
                htmlFor="fullname"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base transition-all duration-300"
              >Full Name
              </label>
            </div>

            <div className="flex relative group">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <Mailbox />
              </span>
              <input
                readOnly
                type="email"
                className="pl-12 w-full pt-6 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl peer placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white"
                name="email"
                id="email"
                placeholder="Email"
                defaultValue={saved.email}
              />
              <label
                htmlFor="email"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base transition-all duration-300"
              >Email
              </label>
            </div>

            <div className="flex relative group">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <PhoneIcon />
              </span>
              <input
                readOnly
                type="tel"
                className="pl-12 w-full pt-6 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl peer placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white"
                name="phone"
                id="phone"
                placeholder="Phone"
                defaultValue={saved.phone}
              />
              <label
                htmlFor="phone"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base transition-all duration-300"
              >Phone
              </label>
            </div>

            <div className="flex relative group">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <CalenderBox />
              </span>
             <input
             type="date"
             className="pl-12 w-full pt-6 pb-2 pr-4 border-gray-400 rounded-xl"
             name="started_at"
             id="started_at"
             value={saved.started_at ?? ""}
             onChange={(e) =>
               checkoutSet((prev) => ({
                 ...prev,
                 [data.slug]: {
                   ...prev[data.slug],
                   started_at: e.target.value,
                 },
               }))
             }
           />
              <label
                htmlFor="started_at"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base transition-all duration-300"
              >Start At
              </label>
            </div>
          </div>
        </div>


        <div
          className="flex flex-col bg-white border border-gray-100 shadow-sm rounded-3xl p-5 transition-all duration-300 hover:shadow-md"
        >
          <input
            type="checkbox"
            name="accordion"
            id="Shipping-address"
            className="peer hidden"
          /><label
            htmlFor="Shipping-address"
            className="flex justify-between items-center cursor-pointer [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
          >
            <h6 className="text-lg font-bold text-slate-900">Shipping Address</h6>
            <span
              className="text-blue-600 flex items-center justify-center transition-all duration-300 rotate-(--state-rotate) bg-gray-50 border border-gray-100 rounded-full p-2"
            >
              <ArrowCircleDown />
            </span>
          </label>
          <div
            className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen"
          >
            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <CalenderBox />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">Started At</span>
                <span className="font-semibold text-slate-900">
                  {format
                    (saved?.started_at ? new Date
                      (saved?.started_at) : new Date(),
                      'dd MMMM yyyy'
                    )}
                </span>
              </div>
            </div>

            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <Clock />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">Time</span>
                <span className="font-semibold text-slate-900">Lunch Time</span>
              </div>
            </div>

            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <PinPoint />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">City</span>
                <span className="font-semibold text-slate-900">
                  {data.city.name}
                </span>
              </div>
            </div>

            <div className="flex relative group">
              <span
                className="absolute left-4 top-4 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <OfficerBuildingIcon />
              </span>
              <textarea
                className="pl-12 w-full pt-8 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl peer placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white"
                name="address"
                id="address"
                rows={3}
                placeholder="Address"
                value={savedShipping.address}
  onChange={(e) =>
    updateShipping("address", e.target.value)
  }
              ></textarea>
              <label
                htmlFor="address"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300"
              >Address
              </label >
            </div>

            <div className="flex relative group">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <MapIcon />
              </span>
              <input
                className="pl-12 w-full pt-6 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl peer placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white appearance-none"
                name="post_code"
                id="post_code"
                value={savedShipping.post_code}
                onChange={(e) => updateShipping("post_code",e.target.value)}
              />
              <label
                htmlFor="post_code"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base transition-all duration-300"
              >Post code
              </label>
            </div>

            <div className="flex relative group">
              <span
                className="absolute left-4 top-4 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              ><Notes />
              </span>
              <textarea
                className="pl-12 w-full pt-8 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl peer placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white"
                name="notes"
                id="notes"
                rows={3}
                placeholder="Notes"
                value={savedShipping.notes}
                onChange={(e) => updateShipping("notes",e.target.value)}
              />
              <label
                htmlFor="notes"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300"
              >Notes
              </label>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col bg-white border border-gray-100 shadow-sm rounded-3xl p-5 transition-all duration-300 hover:shadow-md"
        >
          <input

            type="checkbox"
            name="accordion"
            id="payment-details"
            className="peer hidden"
          /><label
            htmlFor="payment-details"
            className="flex justify-between items-center cursor-pointer [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
          >
            <h6 className="text-lg font-bold text-slate-900">Payment Details</h6>
            <span
              className="text-blue-600 flex items-center justify-center transition-all duration-300 rotate-(--state-rotate) bg-gray-50 border border-gray-100 rounded-full p-2"
            >
              <ArrowCircleDown />
            </span>
          </label>
          <div
            className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen"
          >
            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <PackageIcon />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">Package Catering</span>
                <span className="font-semibold text-slate-900">{formatCurrency(tier?.price || 0)}</span>
              </div>
            </div>

            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <Clock />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">Duration</span>
                <span className="font-semibold text-slate-900">{`${tier?.duration} day${Number(tier?.duration || 0) > 1 ? "s" : ""}`}Regular</span>
              </div>
            </div>

            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <People />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">Quantity</span>
                <span className="font-semibold text-slate-900">{(tier?.quantity || 0)} People</span>
              </div>
            </div>

            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <Truck />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">Delivery</span>
                <span className="font-semibold text-slate-900">{formatCurrency(0)} (Free)</span>
              </div>
            </div>

            <div className="flex relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-600"
              >
                <PromoIcon />
              </span>
              <div
                className="pl-12 flex flex-col w-full justify-center pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span className="text-xs text-slate-500">PPN 11%</span>
                <span className="font-semibold text-slate-900">{tax}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="relative flex flex-col gap-y-4">
          <h2 className="font-bold text-lg text-slate-900">Send Payment to</h2>
          <div
            className="flex items-center gap-x-4 bg-white border border-gray-100 shadow-sm p-5 rounded-3xl transition-all hover:shadow-md"
          >
            <BcaIcon />

            <span className="flex flex-col">
              <span className="flex gap-x-2">
                <h3 className="font-bold text-slate-900">{data.kitchen.name}</h3>
                <span className="text-blue-600">
                  <BadgeCheckmark />
                </span>
              </span>
              <span className="text-sm text-slate-500">8008129839</span>
            </span>
          </div>

          <div
            className="flex items-center gap-x-4 bg-white border border-gray-100 shadow-sm p-5 rounded-3xl transition-all hover:shadow-md"
          >
            <MandiriIcon />

            <span className="flex flex-col">
              <span className="flex gap-x-2">
                <h3 className="font-bold text-slate-900">{data.kitchen.name}</h3>
                <span className="text-blue-600">
                  <BadgeCheckmark />
                </span>
              </span>
              <span className="text-sm text-slate-500">12379834983281</span>
            </span>
          </div>
        </section>

        <div
          className="flex flex-col bg-white border border-gray-100 shadow-sm rounded-3xl p-5 transition-all duration-300 hover:shadow-md"
        >
          <input
            type="checkbox"
            name="accordion"
            id="proof"
            className="peer hidden"
            defaultChecked
          /><label
            htmlFor="proof"
            className="flex justify-between items-center cursor-pointer [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
          >
            <h6 className="text-lg font-bold text-slate-900">Upload Proof of Payment</h6>
            <span
              className="text-blue-600 flex items-center justify-center transition-all duration-300 rotate-(--state-rotate) bg-gray-50 border border-gray-100 rounded-full p-2"
            >
              <ArrowCircleDown />
            </span>
          </label>
          <div
            className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen"
          >
            <div className="flex relative group">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 transition-colors"
              >
                <ReceiptIcon />
              </span>
              <input
                accept="image/*"
                type="file"
                className="pl-12 w-full pt-6 pb-2 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 rounded-xl placeholder:opacity-0 font-semibold text-slate-900 transition-all bg-white appearance-none file:hidden"
                name="proof"
                id="proof"
                placeholder="Add an attachment"
                onChange={(e) => handleProofUpload(e.target.files?.[0])}
              />
              <label
                htmlFor="proof"
                className="absolute pointer-events-none text-slate-500 left-12 top-2 text-xs transition-all duration-300"
              >Add an attachment
              </label>
            </div>
          </div>
        </div>

        <div className="sticky bottom-6 z-50">
          <div
            className="rounded-full flex justify-between items-center gap-x-3 bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl shadow-slate-200/50 p-2 pl-6 pr-2 ring-1 ring-gray-200"
          >
            <span className="flex flex-col">
              <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">Grand Total</span>
              <span className="font-bold text-xl text-slate-900">{formatCurrency(grandTotal)}</span>
            </span>
            <SubmitButton>Continue</SubmitButton>
          </div>
        </div>
      </div>
    </form>
  )
}
