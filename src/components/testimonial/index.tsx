import Image from "next/image";

import { Testimonial } from "@/mocks/testimonials";
import Star from "@/aseets/icons/Star";

type Props = {
  data: Testimonial;
};

export function ContentTestimonial({ data }: Props) {
  return (
    <div className="bg-white h-full rounded-2xl p-4 flex flex-col justify-between">
      <div>
        <div className="flex gap-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < data.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="italic text-gray-600 mt-2">“{data.message}”</p>
      </div>

      <div className="flex gap-x-3 items-center mt-4">
        <figure className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
            src={data.photo}
            alt={data.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </figure>
        <div>
          <p className="font-bold text-black">{data.name}</p>
        </div>
      </div>
    </div>
  );
}

