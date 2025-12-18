import Image from "next/image";
import { notFound } from "next/navigation";

import { categories } from "@/mocks/categories";
import { packages } from "@/mocks/packages";

import ComposeHeader from "./ComposeHeader";
import People from "@/aseets/icons/People";
import { ContentPackage } from "@/components/packages";

type Props = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export default async function PageCategoryDetails({ params }: Props) {
  const { categorySlug } = await params;

  const category = categories.find(
    (c) => c.slug === categorySlug
  );

  if (!category) return notFound();

  const cateringPackages = packages;
  const popularPackages = cateringPackages.filter((p) => p.is_popular === 1);

  return (
    <main className="min-h-screen bg-gray-50">
      <ComposeHeader />

      {/* CATEGORY CARD */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-12 z-10">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="flex items-center gap-x-4">
            <figure className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
              <Image
                src={category.photo}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </figure>

            <div className="flex flex-col gap-y-1">
              <h1 className="font-bold text-xl text-gray-800">
                {category.name}
              </h1>

              <div className="flex items-center gap-x-2 text-gray-500">
                <People />
                <span className="text-sm font-medium">
                  {cateringPackages.length} packages
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR */}
      <section className="pt-8 sm:pt-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Most Popular Choices
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {popularPackages.map((pkg) => (
              <ContentPackage key={pkg.id} data={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWEST */}
      <section className="py-8 sm:py-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Fresh From Our Kitchen
          </h2>
          <div className="grid gap-4">
            {cateringPackages.map((pkg) => (
              <ContentPackage key={pkg.id} data={pkg} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
