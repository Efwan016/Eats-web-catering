"use client";

import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";
import { useRouter } from "next/navigation";


export default function ComposeHeader() {
  const router = useRouter();

  return (
    <header className="bg-gray-50 pt-16 pb-24">
      <div className="px-4">
        <div className="flex items-center gap-x-3">
          <button onClick={() => router.back()}>
            <ArrowCircleLeft />
          </button>
          <h1 className="text-xl font-bold">Your Information</h1>
        </div>
      </div>
    </header>
  );
}