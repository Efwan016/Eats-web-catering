"use client"
import PhoneIcon from '@/aseets/icons/Phone';
import ReceiptIcon from '@/aseets/icons/ReceiptIcon';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';


function Form() {
  const route = useRouter();
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const phone = (form.phone as HTMLInputElement).value.trim();
  const trxId = (form.booking_trx_id as HTMLInputElement).value.trim();

  if (!phone || !trxId) {
    toast("Phone and Transaction ID are required");
    return;
  }

  try {
    const raw = localStorage.getItem("checkout");
    if (!raw) {
      toast("Order not found");
      return;
    }

    const store = JSON.parse(raw);

    const entries = Object.entries(store) as [
      string,
      {
        phone: string;
        booking_trx_id: string;
        proof?: string;
      }
    ][];

    const found = entries.find(
      ([, item]) =>
        item.phone === phone &&
        item.booking_trx_id === trxId
    );

    if (!found) {
      toast("Order not found");
      return;
    }

    const [slug] = found;

    route.push(`/orders/${slug}?phone=${phone}&booking_trx_id=${trxId}`);
  } catch (err) {
    console.error(err);
    toast("Something went wrong");
  }
};

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[380px] mx-auto">
      <section className="relative flex flex-col items-center gap-y-6 w-full px-4">
        <h2 className="font-bold text-2xl text-center text-slate-900">View Your Order</h2>

        {/* PHONE */}
        <div className="flex relative w-full group">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-amber-600 transition-colors duration-300">
            <PhoneIcon />
          </span>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="pl-12 w-full py-4 pr-4 border border-slate-200 rounded-full font-semibold focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all duration-300 placeholder:font-normal placeholder:text-slate-400"
            placeholder="Phone Number"
          />
        </div>

        {/* TRX ID */}
        <div className="flex relative w-full group">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 group-focus-within:text-amber-600 transition-colors duration-300">
            <ReceiptIcon />
          </span>
          <input
            type="text"
            name="booking_trx_id"
            id="booking_trx_id"
            className="pl-12 w-full py-4 pr-4 border border-slate-200 rounded-full font-semibold focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all duration-300 placeholder:font-normal placeholder:text-slate-400"
            placeholder="Booking Transaction ID"
          />
        </div>

        <button
          type="submit"
          className="bg-amber-600 text-white rounded-full px-5 py-4 w-full font-bold text-lg shadow-lg shadow-amber-600/30 hover:bg-amber-700 hover:shadow-amber-600/50 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Find My Order
        </button>
      </section>
    </form>
  );
}

export default Form;