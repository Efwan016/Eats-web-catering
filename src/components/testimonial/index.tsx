"use client";

import Image from "next/image";
import Slider from "@/components/Slider";
import { testimonials, Testimonial } from "@/mocks/testimonials";
import Star from "@/aseets/icons/Star";

/* -----------------------------
   CARD ITEM
----------------------------- */
export function ContentTestimonial({ data }: { data: Testimonial }) {
  return (
    <div className="h-full rounded-3xl overflow-hidden relative border p-3 flex flex-col gap-y-3">
      <span className="text-amber-600 text-xs flex gap-x-1">
        <Star /><Star /><Star /><Star /><Star />
      </span>

      <p className="italic text-sm font-semibold leading-6">
        “{data.message}”
      </p>

      <div className="flex gap-x-3 items-center">
        <figure className="w-9 aspect-square relative rounded-full overflow-hidden">
          <Image
            src={data.photo}
            alt={data.name}
            fill
            sizes="36px"
            className="object-cover"
          />
        </figure>
        <span className="font-semibold">{data.name}</span>
      </div>
    </div>
  );
}

/* -----------------------------
   WRAPPER (DEFAULT EXPORT)
----------------------------- */
export default function Testimonials() {
  return (
    <Slider
      spaceBetween={20}
      swipeClassName="!h-[156px] !px-4"
      swipeSlideClassName="!w-[280px]"
    >
      {testimonials.map((item: Testimonial) => (
        <ContentTestimonial key={item.id} data={item} />
      ))}
    </Slider>
  );
}
