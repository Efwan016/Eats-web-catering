"use client";

import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";
import { useRouter } from "next/navigation";

type Props = {};

export default function ComposeHeader({}: Props) {
  const router = useRouter();

  return (
    <header className="bg-gray-50 pt-6 pb-24">
      <div className="px-4">
        <div className="flex items-center gap-x-3">
          <button onClick={() => router.back()}>
            <ArrowCircleLeft />
          </button>
          <h1 className="text-xl font-bold">Tier Package</h1>
        </div>
      </div>
    </header>
  );
}