"use client";

import ArrowCircleDown from "@/aseets/icons/Arrow-circle-down";
import Mailbox from "@/aseets/icons/Mailbox";
import PackageIcon from "@/aseets/icons/PackageIcon";
import People from "@/aseets/icons/People";
import Phone from "@/aseets/icons/Phone";
import Promo from "@/aseets/icons/Promo";
import Truck from "@/aseets/icons/Truck";
import User from "@/aseets/icons/User";

type Props = object;

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
                <Phone  />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg"
                  defaultValue="081234567890"
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
      </div>
    </>
  );
}
