"use client";

import ReceiptIcon from "@/aseets/icons/ReceiptIcon";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  packageSlug: string;
  trxId?: string;
  phone?: string;
};

interface BookingData {
  phone: string;
  proof?: string | StaticImageData;
  booking_trx_id?: string;
}

export default function SuccessClient({
  packageSlug,
  trxId,
  phone,
}: Props) {
  const [booking] = useState<BookingData | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const raw = localStorage.getItem("checkout");
      if (!raw) return null;

      const store = JSON.parse(raw);
      const data = store?.[packageSlug];

      const paramPhone = phone === "undefined" ? undefined : phone;

      if (data && (!paramPhone || data.phone === paramPhone)) {
        return {
          ...data,
          booking_trx_id: trxId || data.booking_trx_id,
        };
      }
    } catch (e) {
      console.error("Failed to initialize booking state from localStorage:", e);
    }

    return null;
  });

  if (!booking) {
    return (
      <section className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
          <h2 className="font-bold text-2xl text-slate-900 mb-2">Booking Not Found</h2>
          <p className="text-slate-500 mb-6">We couldnt find the transaction details. Please check your link or try again.</p>
          <Link href="/" className="inline-flex justify-center w-full bg-amber-600 text-white font-bold rounded-full px-6 py-3 hover:bg-amber-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8">
        
        {/* Header Section */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
            <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Booking Success!
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Your reservation has been successfully recorded.
          </p>
        </div>

        {/* Card Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Transaction ID Box */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 border-dashed flex items-center justify-between gap-4">
              <div className="flex items-center gap-x-3 overflow-hidden">
                <div className="shrink-0 p-2.5 bg-white rounded-full shadow-sm text-amber-500">
                  <ReceiptIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Transaction ID</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 truncate">
                    {booking.booking_trx_id}
                  </p>
                </div>
              </div>
            </div>

            {/* Proof Image */}
            {booking.proof && (
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-3/4 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                  <Image
                    src={booking.proof}
                    alt="Proof of Payment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-slate-400 font-medium">Payment Proof Attached</p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 px-6 py-6 sm:px-8 flex flex-col gap-3">
            <Link
              href="/orders"
              className="w-full inline-flex justify-center items-center bg-gray-600 hover:bg-amber-700 text-white font-bold rounded-full px-6 py-4 text-base transition-all duration-200 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/30 transform hover:-translate-y-0.5"
            >
              View My Booking
            </Link>

            <Link
              href="/"
              className="w-full inline-flex justify-center items-center bg-white hover:bg-gray-500 text-slate-700 font-bold border border-gray-200 rounded-full px-6 py-4 text-base transition-all duration-200 hover:border-gray-300"
            >
              Book Another Package
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
