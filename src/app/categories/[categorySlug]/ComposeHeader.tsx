"use client";

import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";
import { useRouter } from "next/navigation";


export default function ComposeHeader() {
  const router = useRouter();

  return (
    <header className="bg-amber-500 pt-6 pb-20">
      <div className="px-4">
        <div className="flex items-center gap-x-3">
          <button onClick={() => router.back()}>
            <ArrowCircleLeft />
          </button>
          <h1 className="text-xl font-bold">By Category</h1>
        </div>
      </div>
    </header>
  );
}