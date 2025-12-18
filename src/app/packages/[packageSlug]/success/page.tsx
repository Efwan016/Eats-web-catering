import Link from "next/link";
import Image from "next/image";

import Home from "@/aseets/icons/Home";
import Order from "@/aseets/icons/Order";

type Props = {};

export default function PackageSuccessPage({}: Props) {
  return (
    <div className="bg-gray-50 text-center flex flex-col justify-between h-screen">
      <div className="pt-20">
        <Image
          src="/images/asset/proof.png"
          alt="proof"
          width={200}
          height={200}
          className="mx-auto"
        />

        <div className="mt-8">
          <h1 className="text-2xl font-bold">Booking Finished</h1>
          <p className="text-gray-500 mt-2">
            We will confirm your order within 1-2 hours.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 p-4">
        <Link
          href="/"
          className="bg-gray-200 text-gray-800 rounded-full flex items-center justify-center gap-x-2 p-4 font-bold"
        >
          <Home />
          <span>Home</span>
        </Link>
        <Link
          href="/orders"
          className="bg-amber-500 text-white rounded-full flex items-center justify-center gap-x-2 p-4 font-bold"
        >
          <Order />
          <span>My Order</span>
        </Link>
      </div>
    </div>
  );
}