"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/mocks/categories";

export function ContentCategories() {
  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="flex flex-col items-center gap-y-2"
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={category.photo}
              alt={category.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-center">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

