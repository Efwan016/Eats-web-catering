import Image from "next/image";
import Link from "next/link";

import { packages } from "@/mocks/packages";
import { testimonials } from "@/mocks/testimonials";

import Slider from "@/components/Slider";
import { ContentCategories } from "@/components/categories";
import { ContentPackage } from "@/components/packages";
import { ContentTestimonial } from "@/components/testimonial";
import BottomBar from "@/components/bottomBar";
import LogoKaterina from "@/aseets/icons/LogoKaterina";
import FlagIdn from "@/aseets/icons/FlagIdn";
import Dots4 from "@/aseets/icons/Dots4";

type SlideItemProps = {
  image: string;
  alt: string;
  priority?: boolean;
};

const SlideItem = ({ image, alt, priority = false }: SlideItemProps) => (
  <div className="h-full rounded-2xl overflow-hidden relative">
    <figure className="relative h-full">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </figure>
  </div>
);

export default function Home() {
  const slides = [
    { image: "/images/asset/slide1.png", alt: "Promo 50% Potongan" },
    { image: "/images/asset/slide2.png", alt: "Promo 50% Potongan" },
    { image: "/images/asset/slide3.png", alt: "Promo 50% Potongan" },
  ];

  const popularPackages = packages.filter((p) => p.is_popular === 1);

  return (
    <div className="bg-gray-50 text-slate-800">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <header className="top-4 z-50 flex items-center justify-between p-3 bg-amber-400 shadow-lg border-gray-200/80 backdrop-blur-md mx-4 rounded-full">
          <div className="flex items-center gap-x-2">
            <LogoKaterina />
            <span className="font-bold text-lg tracking-wide text-gray-800">
              Adzani
            </span>
          </div>

          <button className="flex items-center gap-x-2 border border-gray-200 rounded-full py-1.5 px-3 backdrop-blur-lg hover:bg-gray-100 transition-colors">
            <FlagIdn />
            <span className="text-sm font-medium">IDN</span>
          </button>
        </header>

        {/* MAIN CONTENT */}
        <main className="py-6 md:py-8 space-y-10">
          {/* SLIDER SECTION */}
          <section className="relative">
            <Slider
              spaceBetween={16}
              swipeClassName="h-[180px] md:h-[220px] !px-4"
              swipeSlideClassName="max-w-md"
            >
              {slides.map((s, i) => (
                <SlideItem
                  key={i}
                  image={s.image}
                  alt={s.alt}
                  priority={i === 0}
                />
              ))}
            </Slider>
          </section>

          {/* CATEGORIES */}
          <section className="relative space-y-4">
            <div className="flex justify-between items-center px-4">
              <h2 className="font-bold text-xl">Categories</h2>
              <Link
                href="/categories"
                className="flex items-center gap-x-1 text-amber-500"
              >
                <span>See all</span>
                <Dots4 />
              </Link>
            </div>
            <ContentCategories />
          </section>

          {/* POPULAR SECTION */}
          <section className="relative space-y-4">
            <div className="flex justify-between items-center px-4">
              <h2 className="font-bold text-xl">Most Popular</h2>
              <Link
                href="/packages"
                className="flex items-center gap-x-1 text-amber-500"
              >
                <span>See all</span>
                <Dots4 />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 px-4">
              {popularPackages.map((pkg) => (
                <ContentPackage key={pkg.id} data={pkg} />
              ))}
            </div>
          </section>

          {/* TESTIMONIALS SECTION */}
          <section className="relative space-y-4">
            <h2 className="font-bold text-xl px-4">Testimonials</h2>
            <Slider
              swipeClassName="!px-4"
              swipeSlideClassName="!w-[320px] !h-auto"
            >
              {testimonials.map((item) => (
                <ContentTestimonial key={item.id} data={item} />
              ))}
            </Slider>
          </section>

          {/* NEWEST SECTION */}
          <section className="relative space-y-4">
            <div className="flex justify-between items-center px-4">
              <h2 className="font-bold text-xl">Newest Packages</h2>
              <Link
                href="/packages"
                className="flex items-center gap-x-1 text-amber-500"
              >
                <span>See all</span>
                <Dots4 />
              </Link>
            </div>
            <div className="grid gap-4 px-4">
              {packages.map((pkg) => (
                <ContentPackage key={pkg.id} data={pkg} />
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* BOTTOM BAR SECTION */}
      <BottomBar />
    </div>
  );
}
