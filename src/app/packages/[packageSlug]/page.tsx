import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { getPackageDetailsMock, PackagePhoto } from "@/mocks/package-details";

import ComposeHeader from "./ComposeHeader";
import Slider from "@/components/Slider";
import Notes from "@/aseets/icons/Notes";
import People from "@/aseets/icons/People";
import { ContentTestimonial } from "@/components/testimonial";
import Star from "@/aseets/icons/Star";
import ThumbsUp from "@/aseets/icons/ThumbsUp";
import PinPoint from "@/aseets/icons/PinPoint";
import BadgeCheckmark from "@/aseets/icons/badge-checkmark";
import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";

type Props = {
  params: Promise<{
    packageSlug: string;
  }>;
};

export default async function PackageDetailsPage({ params }: Props) {
  const { packageSlug } = await params;

  const pkg = getPackageDetailsMock(packageSlug);

  if (!pkg) return notFound();

  const currentTier = pkg.tiers.length
    ? pkg.tiers.reduce((min, curr) =>
      curr.price < min.price ? curr : min
    )
    : null;

  return (
    <div className="bg-gray-50 pb-24">
      <ComposeHeader />

      {/* IMAGE */}
      <section>
        <Slider swipeClassName="!h-[270px]">
          {pkg.photos.map((photo: PackagePhoto) => (
            <Image
              key={photo.id}
              src={photo.photo}
              alt={pkg.name}
              fill
              className="object-cover"
              priority
            />
          ))}
        </Slider>
      </section>

      {/* INFO */}
      <section className="bg-white rounded-t-3xl -mt-4 pt-6">
        <div className="px-4">
          <h1 className="font-bold text-black text-xl">{pkg.name}</h1>

          <div className="flex gap-x-4 text-gray-500 mt-2">
            <span className="flex gap-x-1 items-center">
              <Notes /> {pkg.category.name}
            </span>
            <span className="flex gap-x-1 items-center">
              <People /> {currentTier?.quantity ?? 0} pax
            </span>
          </div>
        </div>

        {/* VENDOR */}
        <div className="px-4 mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src={pkg.kitchen.photo}
                  alt={pkg.kitchen.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h2 className="font-bold text-black text-lg truncate">
                  {pkg.kitchen.name}
                </h2>
                <div className="flex items-center gap-x-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-x-1 whitespace-nowrap">
                    <Star /> 4.5
                  </span>
                  <span className="truncate">(1.5k reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <div className="p-2.5 rounded-full bg-gray-100 text-gray-500">
                <ThumbsUp />
              </div>
              <div className="p-2.5 rounded-full bg-gray-100 text-gray-500">
                <PinPoint />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        {/* ABOUT */}
        <div className="px-4">
          <h2 className="font-bold text-black text-lg mb-2">About Package</h2>
          <p className="text-gray-600">
            Paket catering {pkg.name} terbaik untuk acara Anda.
          </p>
        </div>
      </section>

      {/* BONUSES */}
      <section className="bg-white mt-4 py-6">
        <div className="px-4">
          <h2 className="font-bold text-black text-lg mb-4">What’s Included</h2>

          <ul className="grid grid-cols-2 gap-4">
            {pkg.bonuses.map((bonus) => (
              <li
                key={bonus.id}
                className="flex items-center text-gray-500 gap-x-2.5"
              >
                <BadgeCheckmark />
                <span>{bonus.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white mt-4 py-6">
        <div className="px-4 mb-4">
          <h2 className="font-bold text-black text-lg">Gallery</h2>
          <p className="text-gray-500">Beberapa foto dari vendor</p>
        </div>

        <Slider
          swipeClassName="!pl-4"
          swipeSlideClassName="!w-[160px] !h-[120px]"
        >
          {pkg.photos.map((photo: PackagePhoto) => (
            <div key={photo.id} className="relative w-full h-full rounded-xl">
              <Image
                src={photo.photo}
                alt="gallery"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white mt-4 py-6">
        <h2 className="font-bold text-black text-lg px-4 mb-3">Testimonials</h2>
        <Slider swipeClassName="!px-4" swipeSlideClassName="!w-[320px]">
          {pkg.testimonials.map((item) => (
            <ContentTestimonial key={item.id} data={item} />
          ))}
        </Slider>
      </section>

      {/* BOOKING */}
      <section className="sticky bottom-0 bg-white py-4 shadow-[0_-4px_20px_0_#0000000D] z-20">
        <div className="px-4">
          <Link
            href={`/packages/${packageSlug}/tiers`}
            className="bg-amber-500 text-white rounded-full flex justify-between items-center p-4 font-bold"
          >
            <span>
              Rp{currentTier?.price.toLocaleString("id-ID") ?? 0}
            </span>
            <div className="flex items-center gap-x-2">
              <span>Booking Now</span>
              <ArrowCircleLeft />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
