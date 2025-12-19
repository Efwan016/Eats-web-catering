"use client";

import { TCity } from "@/components/cities/type";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { Category } from "@/mocks/categories";

type Props = {
  categorySlug: string;
  citySlug: string;
  categories: Category[];
  cities: TCity[];
};

export default function FormFilterCategories({
  categorySlug,
  citySlug,
  categories,
  cities,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const category = formData.get("category") as string | null;
    const city = formData.get("city") as string | null;

    const params = new URLSearchParams(searchParams.toString());

    if (category) params.set("category", category);
    if (city) params.set("city", city);

 
    params.delete("modal");
    params.delete("modal-pos");

    router.push(`?${params.toString()}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-5 w-full"
    >
      <h6 className="text-sm font-semibold mb-2">Set Filter (2)</h6>

      {/* Category */}
      <div className="flex flex-col gap-y-3">
        <h6 className="text-sm font-semibold">Category</h6>

        {categories.map((category) => {
          const id = `category-${category.id}`;
          return (
            <label
              key={id}
              htmlFor={id}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                id={id}
                className="hidden peer"
                defaultChecked={categorySlug === category.slug}
                value={category.slug}
              />

              <span className="radio p-1 rounded-full border border-blue-600 w-6 aspect-square peer-checked:[&>span]:opacity-100">
                <span className="aspect-square h-full block rounded-full opacity-0 bg-blue-600 transition-all duration-300"></span>
              </span>

              <span>{category.name}</span>
            </label>
          );
        })}
      </div>

      {/* Cities */}
      <div className="flex flex-col gap-y-3">
        <h6 className="text-sm font-semibold">Cities</h6>

        {cities.map((city) => {
          const id = `city-${city.id}`;
          return (
            <label
              key={id}
              htmlFor={id}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="city"
                id={id}
                className="hidden peer"
                defaultChecked={citySlug === city.slug}
                value={city.slug}
              />

              <span className="radio p-1 rounded-full border border-blue-600 w-6 aspect-square peer-checked:[&>span]:opacity-100">
                <span className="aspect-square h-full block rounded-full opacity-0 bg-blue-600 transition-all duration-300"></span>
              </span>

              <span>{city.name}</span>
            </label>
          );
        })}
      </div>

      <button
        type="submit"
        className="bg-amber-600 text-white px-5 py-3 rounded-full font-semibold mt-4"
      >
        View Results
      </button>
    </form>
  );
}
