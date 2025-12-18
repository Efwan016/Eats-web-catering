"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ArrowCircleDown from "@/aseets/icons/Arrow-circle-down";
import CalenderBox from "@/aseets/icons/Calender-box";
import Clock from "@/aseets/icons/clock";
import OfficerBuildingIcon from "@/aseets/icons/Officer-building";
import PinPoint from "@/aseets/icons/PinPoint";
import MapIcon from "@/aseets/icons/MapIcon";
import Notes from "@/aseets/icons/Notes";
import PackageIcon from "@/aseets/icons/PackageIcon";
import People from "@/aseets/icons/People";
import Truck from "@/aseets/icons/Truck";
import Promo from "@/aseets/icons/Promo";
import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";

type Props = {};

export default function Form({}: Props) {
  const searchParams = useSearchParams();

  const quantity = searchParams.get("quantity");

  return (
    <>
      <div className="px-4">
        {/* SHIPPING ADDRESS */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-4">
          <input
            type="checkbox"
            name="accordion"
            id="shipping-address"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="shipping-address"
            className="flex justify-between items-center cursor-pointer"
          >
            <h6 className="text-lg font-bold">Shipping Address</h6>
            <ArrowCircleDown className="text-gray-500 peer-checked:rotate-180 transition-transform" />
          </label>
          <div className="grid gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen">
            <div className="relative">
              <label
                htmlFor="date"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Date
              </label>
              <div className="relative">
                <CalenderBox className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Select date"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="24 / 02 / 2024"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="time"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Time
              </label>
              <div className="relative">
                <Clock className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="Select time"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="12 : 00 PM"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="city"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                City
              </label>
              <div className="relative">
                <PinPoint className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Select city"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="Jakarta"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="address"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Address
              </label>
              <div className="relative">
                <OfficerBuildingIcon className="absolute top-5 left-4 text-gray-500" />
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  rows={3}
                  defaultValue="Jl. Jend. Sudirman No. 52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="postal-code"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Postal Code
              </label>
              <div className="relative">
                <MapIcon className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  placeholder="Enter postal code"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="12190"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="notes"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Notes
              </label>
              <div className="relative">
                <Notes className="absolute top-5 left-4 text-gray-500" />
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Enter notes"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  rows={3}
                  defaultValue="Please deliver to the receptionist"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT DETAILS */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-4 mt-5">
          <input
            type="checkbox"
            name="accordion"
            id="payment-details"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="payment-details"
            className="flex justify-between items-center cursor-pointer"
          >
            <h6 className="text-lg font-bold">Payment Details</h6>
            <ArrowCircleDown className="text-gray-500 peer-checked:rotate-180 transition-transform" />
          </label>

          <div className="grid gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 text-gray-600">
                <PackageIcon />
                <span>Package Catering</span>
              </div>
              <span className="font-bold">Rp10.000.000</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 text-gray-600">
                <People />
                <span>Quantity</span>
              </div>
              <span className="font-bold">{quantity ?? 0} people</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 text-gray-600">
                <Truck />
                <span>Delivery</span>
              </div>
              <span className="font-bold">Rp0 (Free)</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 text-gray-600">
                <Promo />
                <span>PPN 11%</span>
              </div>
              <span className="font-bold">Rp1.100.000</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="sticky bottom-0 bg-white py-4 shadow-[0_-4px_20px_0_#0000000D]">
        <div className="px-4">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-full">
            <div>
              <p className="text-sm text-gray-500">Grand Total</p>
              <p className="font-bold text-lg">Rp11.100.000</p>
            </div>
            <button className="bg-amber-500 text-white rounded-full flex items-center gap-x-2 p-4 font-bold">
              <span>Continue</span>
              <ArrowCircleLeft className="w-6 h-6 rotate-180" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
