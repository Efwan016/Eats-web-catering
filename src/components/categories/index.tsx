"use client";

import Link from "next/link";
import Image from "next/image";
import { categories, Category } from "@/mocks/categories";

type Props = {
  title: string;
};

/* -----------------------------
   ITEM
----------------------------- */
export function ContentCategory({ data }: { data: Category }) {
  return (
    <div className="flex flex-col items-center gap-y-2 relative">
      <figure className="w-16 aspect-square relative overflow-hidden rounded-full">
        <Image
          src={data.photo}
          alt={data.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </figure>

      <span className="text-sm font-medium">{data.name}</span>

      <Link
        href={`/categories/${data.slug}`}
        className="absolute inset-0"
        aria-label={data.name}
      />
    </div>
  );
}

/* -----------------------------
   SECTION (DEFAULT EXPORT)
----------------------------- */
export default function Categories({ title }: Props) {
  return (
    <section className="px-4">
      <h2 className="font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <ContentCategory key={category.id} data={category} />
        ))}
      </div>
    </section>
  );
}
