"use client";

import ArrowCircleDown from "@/aseets/icons/Arrow-circle-down";
import Mailbox from "@/aseets/icons/Mailbox";
import Phone from "@/aseets/icons/Phone";
import User from "@/aseets/icons/User";
import CalenderBox from "@/aseets/icons/Calender-box";
import Clock from "@/aseets/icons/clock";
import PinPoint from "@/aseets/icons/PinPoint";
import OfficerBuildingIcon from "@/aseets/icons/Officer-building";
import MapIcon from "@/aseets/icons/MapIcon";
import Notes from "@/aseets/icons/Notes";
import PackageIcon from "@/aseets/icons/PackageIcon";
import People from "@/aseets/icons/People";
import Truck from "@/aseets/icons/Truck";
import Promo from "@/aseets/icons/Promo";
import BCAIcon from "@/aseets/icons/BCAIcon";
import MandiriIcon from "@/aseets/icons/MandiriIcon";
import BadgeCheckmark from "@/aseets/icons/badge-checkmark";
import ReceiptIcon from "@/aseets/icons/ReceiptIcon";

type Props = {};

export default function Form({}: Props) {
  return (
    <>
      <div className="px-4">
        {/* CUSTOMER INFORMATION */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-4">
          <input
            type="checkbox"
            name="accordion"
            id="customer-information"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="customer-information"
            className="flex justify-between items-center cursor-pointer"
          >
            <h6 className="text-lg font-bold">Customer Information</h6>
            <ArrowCircleDown className="text-gray-500 peer-checked:rotate-180 transition-transform" />
          </label>
          <div className="grid gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen">
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="John Doe"
                  disabled
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Email
              </label>
              <div className="relative">
                <Mailbox className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="johndoe@gmail.com"
                  disabled
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="081234567890"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        {/* SHIPPING ADDRESS */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-4 mt-5">
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
              <span className="font-bold">100 people</span>
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

        {/* SEND PAYMENT TO */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-4 mt-5">
          <h6 className="text-lg font-bold mb-4">Send Payment to</h6>

          <div className="grid gap-y-5">
            <div className="flex items-center gap-x-3 p-3 rounded-lg border border-gray-200">
              <BCAIcon />
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <h3 className="font-bold">Katerinda</h3>
                  <BadgeCheckmark />
                </div>
                <p className="text-gray-500">8008129839</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 p-3 rounded-lg border border-gray-200">
              <MandiriIcon />
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <h3 className="font-bold">Katerinda</h3>
                  <BadgeCheckmark />
                </div>
                <p className="text-gray-500">12379834983281</p>
              </div>
            </div>
          </div>
        </div>

        {/* UPLOAD PROOF OF PAYMENT */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-4 mt-5">
          <input
            type="checkbox"
            name="accordion"
            id="proof-of-payment"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="proof-of-payment"
            className="flex justify-between items-center cursor-pointer"
          >
            <h6 className="text-lg font-bold">Upload Proof of Payment</h6>
            <ArrowCircleDown className="text-gray-500 peer-checked:rotate-180 transition-transform" />
          </label>
          <div className="grid gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:mt-5 peer-checked:max-h-screen">
            <div className="relative">
              <label
                htmlFor="proof"
                className="absolute -top-2 left-4 px-2 bg-white text-gray-500 text-sm"
              >
                Attachment
              </label>
              <div className="relative">
                <ReceiptIcon className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
                <input
                  type="file"
                  id="proof"
                  name="proof"
                  placeholder="Add an attachment"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
