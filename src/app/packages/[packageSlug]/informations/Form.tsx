"use client";

import ArrowCircleDown from "@/aseets/icons/Arrow-circle-down";
import Mailbox from "@/aseets/icons/Mailbox";
import Notes from "@/aseets/icons/Notes";
import PackageIcon from "@/aseets/icons/PackageIcon";
import People from "@/aseets/icons/People";
import Phone from "@/aseets/icons/Phone";
import Promo from "@/aseets/icons/Promo";
import Truck from "@/aseets/icons/Truck";
import User from "@/aseets/icons/User";
import { formatCurrency } from "./formatCurrency"; // Import formatCurrency
import { PackageTier } from "@/mocks/packages";
import { useEffect, useState } from "react";

type Props = {
  tier: PackageTier;
  tax: number; // Injected by FormWrapper
  grandTotal: number; // Injected by FormWrapper
};
type CustomerForm = {
  name: string;
  email: string;
  phone: string;
};
const defaultForm: CustomerForm = {
  name: "",
  email: "",
  phone: "",
};




export default function Form({ tier, tax, grandTotal }: Props) {
  const STORAGE_KEY = `catering_customer_information_${tier.id}`;

  const [form, setForm] = useState<CustomerForm>(() => {
    if (typeof window === "undefined") return defaultForm;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultForm;
    } catch {
      return defaultForm;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form, STORAGE_KEY]);



  return (
    <>
      <div className="divide-y divide-gray-200">
        {/* CUSTOMER INFORMATION */}
        <div className="p-6">
          <input
            type="checkbox"
            name="accordion"
            id="customer-information"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="customer-information"
            className="flex cursor-pointer items-center justify-between"
          >
            <h2 className="text-lg font-bold text-gray-900">
              Customer Information
            </h2>
            <ArrowCircleDown className="text-gray-400 transition-transform peer-checked:rotate-180" />
          </label>
          <div className="grid h-full max-h-0 grid-cols-1 gap-y-5 overflow-hidden transition-all duration-500 ease-in-out peer-checked:mt-6 peer-checked:max-h-screen">
            {/* Full Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <User className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-800 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Mailbox className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-800 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Phone
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Phone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-800 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={form.phone} 
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT DETAILS */}
        <div className="p-6">
          <input
            type="checkbox"
            name="accordion"
            id="payment-details"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="payment-details"
            className="flex cursor-pointer items-center justify-between"
          >
            <h2 className="text-lg font-bold text-gray-900">Payment Details</h2>
            <ArrowCircleDown className="text-gray-400 transition-transform peer-checked:rotate-180" />
          </label>

          <div className="grid h-full max-h-0 grid-cols-1 gap-y-4 overflow-hidden transition-all duration-500 ease-in-out peer-checked:mt-6 peer-checked:max-h-screen">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3 text-gray-500">
                <PackageIcon />
                <span>Package Catering</span>
              </div>
              <span className="font-semibold text-gray-800">{formatCurrency(tier?.price ?? 0)} </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3 text-gray-500">
                <People />
                <span>Quantity</span>
              </div>
              <span className="font-semibold text-gray-800">{tier?.quantity} people</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3 text-gray-500">
                <Truck />
                <span>Delivery</span>
              </div>
              <span className="font-semibold text-gray-800">Rp0 (Free)</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3 text-gray-500">
                <Promo />
                <span className="text-sm text-gray-800">PPN 11%</span>
              </div>
              <span className="font-semibold">{formatCurrency(tax)}</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3 text-gray-500">
                <Notes />
                <span className="text-gray-800 text-sm">Grand Total</span>
              </div>
              <span className="font-semibold text-gray-800">{formatCurrency(grandTotal)} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
