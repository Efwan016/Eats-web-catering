"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";
import { PackageTier } from "@/mocks/packages";
import { formatCurrency } from "./formatCurrency";
import Form from "./Form";

type Props = {
  tier: PackageTier;
  packageSlug: string;
};

export default function FormWrapper({
  tier,
  packageSlug,
}: Props) {
  const searchParams = useSearchParams();
  const quantity = searchParams.get("quantity") ?? "0";
  const numericQuantity = Number(quantity);

  const subtotal = tier.price * numericQuantity;
  const tax = subtotal * 0.11;
  const grandTotal = subtotal + tax;


  return (
    <form>
      <Form packageSlug={packageSlug} tier={tier} tax={tax} grandTotal={grandTotal} />

      {/* CTA */}
      <section className="sticky bottom-0 bg-white py-4 shadow-[0_-4px_20px_0_#0000000D]">
        <div className="px-4">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-full">
            <div>
              <p className="text-sm text-gray-500">Grand Total</p>
              <p className="font-bold text-lg">{formatCurrency(grandTotal)}</p>
            </div>
            <Link
              href={{
                pathname: `/packages/${packageSlug}/payments`,
                query: { // Use tierId for consistency
                  tierId: tier.id,
                  quantity,
                },
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
