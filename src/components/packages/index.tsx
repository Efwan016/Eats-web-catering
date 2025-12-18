import Link from "next/link";
import Image from "next/image";

import { Package } from "@/mocks/packages";
import Notes from "@/aseets/icons/Notes";
import People from "@/aseets/icons/People";
import Star from "@/aseets/icons/Star";

type Props = {
  data: Package;
};

export function ContentPackage({ data }: Props) {
  const currentTier = data.tiers.length
    ? data.tiers.reduce((min, curr) => (curr.price < min.price ? curr : min))
    : null;

  return (
    <Link
      href={`/packages/${data.slug}`}
      className="bg-white rounded-2xl p-3 shadow-md transition-all hover:shadow-lg"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Image
          src={data.thumbnail}
          alt={data.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          priority
          className="object-cover"
        />

        <div className="absolute top-2 left-2 flex items-center gap-x-1 bg-black/50 text-white px-2 py-1 rounded-full">
          <Star />

        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
          {data.name}
        </h3>

        <div className="flex items-start justify-between gap-x-3 mt-1">
          <div className="flex gap-x-3 text-gray-500 text-sm min-w-0">
            <span className="flex gap-x-1 items-center truncate">
              <Notes  />
              <span className="truncate">{data.category.name}</span>
            </span>

            <span className="flex gap-x-1 items-center whitespace-nowrap">
              <People  />
              {currentTier?.quantity ?? 0} pax
            </span>
          </div>

         
          <p className="font-bold text-amber-500 whitespace-nowrap shrink-0">
            Rp{currentTier?.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
     

    </Link>
  );
}

