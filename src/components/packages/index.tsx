"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/Slider";


import { packages, Package } from "@/mocks/packages";
import Notes from "@/aseets/icons/Notes";
import People from "@/aseets/icons/People";
import PinPoint from "@/aseets/icons/PinPoint";

type Props = {
  show: "popular" | "newest";
};

/* -----------------------------
   POPULAR
----------------------------- */
export function ContentPopular({ data }: { data: Package[] }) {
  if (!data.length) return <p className="px-4">No Data</p>;

  return (
    <Slider
      spaceBetween={20}
      swipeClassName="!h-[260px] !px-4"
      swipeSlideClassName="!w-[240px]"
    >
      {data.map((item) => (
        <div key={item.id} className="h-full rounded-3xl overflow-hidden relative border">
          <figure className="absolute w-full h-full">
            <Image
              src={item.thumbnail}
              alt={item.name}
              fill
              sizes="240px"
              className="object-cover"
            />
          </figure>

          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-2xl p-3">
            <span className="font-semibold">{item.name}</span>

            <div className="flex gap-x-3 mt-1 text-sm text-gray-500">
              <div className="flex items-center gap-x-1">
                <Notes />
                <span>{item.category?.name}</span>
              </div>

              <div className="flex items-center gap-x-1">
                <People />
                <span>{item.tiers?.[0]?.quantity ?? 0}</span>
              </div>
            </div>
          </div>

          <Link href={`/packages/${item.slug}`} className="absolute inset-0" />
        </div>
      ))}
    </Slider>
  );
}

/* -----------------------------
   NEWEST
----------------------------- */
export function ContentNewest({
  data,
  withDetailsQuantity = false,
}: {
  data: Package[];
  withDetailsQuantity?: boolean;
}) {
  if (!data.length) return <p className="px-4">No Data</p>;

  return (
    <div className="flex flex-col gap-y-4 px-4">
      {data.map((item) => {
        const tiers = item.tiers ?? [];

        const lowest = tiers.reduce(
          (min, cur) => (cur.price < min.price ? cur : min),
          tiers[0] ?? { price: 0, quantity: 0 }
        );

        const highest = tiers.reduce(
          (max, cur) => (cur.price > max.price ? cur : max),
          tiers[0] ?? { price: 0, quantity: 0 }
        );

        return (
          <div key={item.id} className="flex relative gap-x-3">
            <figure className="w-30 h-40 rounded-2xl overflow-hidden relative">
              <Image
                src={item.thumbnail}
                alt={item.name}
                fill
                sizes="120px"
                className="object-cover"
              />
            </figure>

            <div className="flex flex-col gap-y-2 pt-3">
              <span className="font-semibold">{item.name}</span>

              <div className="flex items-center gap-x-1 text-sm text-gray-500">
                <Notes />
                <span>{item.category?.name}</span>
              </div>

              <div className="flex items-center gap-x-1 text-sm text-gray-500">
                <People />
                <span>
                  {lowest.quantity}
                  {withDetailsQuantity && ` - ${highest.quantity} people`}
                </span>
              </div>

              <div className="flex items-center gap-x-1 text-sm text-gray-500">
                <PinPoint />
                <span>{item.city?.name}</span>
              </div>
            </div>

            <Link href={`/packages/${item.slug}`} className="absolute inset-0" />
          </div>
        );
      })}
    </div>
  );
}

/* -----------------------------
   SECTION (DEFAULT EXPORT)
----------------------------- */
export default function Packages({ show }: Props) {
  const data = packages;

  if (show === "popular") {
    return <ContentPopular data={data.filter((i) => i.is_popular === 1)} />;
  }

  if (show === "newest") {
    return <ContentNewest data={data} />;
  }

  return null;
}
