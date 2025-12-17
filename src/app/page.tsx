import Image from "next/image";

import Slider from "@/components/Slider";
import Categories from "@/components/categories";
import Packages from "@/components/packages";
import Testimonials from "@/components/testimonial";
import BottomBar from "@/components/bottomBar";
import LogoKaterina from "@/aseets/icons/LogoKaterina";
import FlagIdn from "@/aseets/icons/FlagIdn";

type SlideItemProps = {
  image: string;
  alt: string;
  priority?: boolean;
};

const SlideItem = ({ image, alt, priority = false }: SlideItemProps) => (
  <div className="h-full rounded-3xl overflow-hidden relative border">
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

    <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/0" />

    <div className="absolute inset-y-0 left-0 px-4 md:px-6 w-full max-w-sm flex flex-col justify-center font-bold">
      <span className="text-white text-lg md:text-xl">Sale</span>
      <span className="text-amber-600 text-4xl md:text-5xl">50%</span>
      <span className="text-white text-lg md:text-xl">Potongan</span>
    </div>
  </div>
);

// -----------------------------
// MAIN HOME COMPONENT
// -----------------------------
export default function Home() {
  const slides = [
    { image: "/images/asset/slide1.png", alt: "Promo 50% Potongan" },
    { image: "/images/asset/slide2.png", alt: "Promo 50% Potongan" },
    { image: "/images/asset/slide3.png", alt: "Promo 50% Potongan" },
  ];

  return (
    <div className="antialiased bg-slate-50 text-slate-800">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <header
          className="
            top-4 z-50
            flex items-center justify-between
            p-2
            bg-amber-600/90
            shadow-xl shadow-amber-600/10
            backdrop-blur-md
            border border-amber-200/30
            mx-4
          "
        >
          {/* Left Section */}
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <LogoKaterina/>
            <span className="font-semibold text-lg md:text-xl tracking-wide text-white drop-shadow">
              Adzani
            </span>
          </div>

          {/* Language Button */}
          <button
            className="
            flex items-center gap-x-2
            border border-white/30
            rounded-full
            py-1.5 px-3
            text-white
            backdrop-blur-lg
            hover:bg-white/30 transition-colors
          "
          >
            <FlagIdn />
            <span className="text-sm font-medium">IDN</span>
          </button>
        </header>

        {/* MAIN CONTENT */}
        <main className="py-6 md:py-8 space-y-12">
          {/* SLIDER SECTION */}
          <section className="relative px-4">
            <Slider
              spaceBetween={20}
              swipeClassName="h-[200px] md:h-[250px]"
              swipeSlideClassName="max-w-md"
            >
              {slides.map((s, i) => (
                <SlideItem key={i} image={s.image} alt={s.alt} priority={i === 0} />
              ))}
            </Slider>
          </section>

          {/* CATEGORIES */}
          <Categories title="Browse Categories" />

          {/* POPULAR SECTION */}
          <section className="relative space-y-4">
            <h2 className="font-semibold text-xl md:text-2xl px-4">Most People Love It</h2>
            <Packages show="popular" />
          </section>

          {/* TESTIMONIALS SECTION */}
          <section className="relative space-y-4">
            <h2 className="font-semibold text-xl md:text-2xl px-4">People Love It</h2>
            <Testimonials />
          </section>

          {/* NEWEST SECTION */}
          <section className="relative space-y-4">
            <h2 className="font-semibold text-xl md:text-2xl px-4">Fresh From Kitchen</h2>
            <Packages show="newest" />
          </section>
        </main>
      </div>

      {/* BOTTOM BAR SECTION */}
      <BottomBar />
    </div>
  );
}
