"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";

type Props = {
  children: React.ReactNode;
  packageSlug: string;
  tierId: string;
  price: number;
};

export default function FormWrapper({
  children,
  packageSlug,
  tierId,
  price,
}: Props) {
  const searchParams = useSearchParams();
  const quantity = searchParams.get("quantity") ?? "0";

  const total = (price ?? 0) * parseInt(quantity);
  const tax = total * 0.11;
  const grandTotal = total + tax;

  return (
    <form>
      <div className="pb-6">{children}</div>

      {/* CTA */}
      <section className="sticky bottom-0 bg-white py-4 shadow-[0_-4px_20px_0_#0000000D]">
        <div className="px-4">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-full">
            <div>
              <p className="text-sm text-gray-500">Grand Total</p>
              <p className="font-bold text-lg">
                Rp{grandTotal.toLocaleString("id-ID")}
              </p>
            </div>
            <Link
              href={{
                pathname: `/packages/${packageSlug}/success`,
                query: { tier: tierId, quantity },
              }}
              className="bg-amber-500 text-white rounded-full flex items-center gap-x-2 p-4 font-bold"
            >
              <span>Continue</span>
              <ArrowCircleLeft className="w-6 h-6 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </form>
  );
}
