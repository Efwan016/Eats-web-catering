import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { packages } from "@/mocks/packages";
import { getPackageDetailsMock } from "@/mocks/package-details";

import ComposeHeader from "./ComposeHeader";
import Notes from "@/aseets/icons/Notes";
import People from "@/aseets/icons/People";
import BadgeCheckmark from "@/aseets/icons/badge-checkmark";
import ArrowCircleLeft from "@/aseets/icons/Arrow-circle-left";

type Props = {
  params: {
    packageSlug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function PackageTiersPage({ params, searchParams }: Props) {
  const { packageSlug } = params;
  const tierId = searchParams.tier;

  const pkg = packages.find(
    (p) => p.slug === packageSlug
  );

  if (!pkg) return notFound();

  const pkgDetails = getPackageDetailsMock(packageSlug);

  const tiers = pkg.tiers;

  const lowestTier =
    tiers.length > 0
      ? tiers.reduce((min, curr) => (curr.price < min.price ? curr : min))
      : null;

  const highestTier =
    tiers.length > 0
      ? tiers.reduce((max, curr) => (curr.price > max.price ? curr : max))
      : null;

  return (
    <div className="bg-gray-50">
      <ComposeHeader />

      {/* INFO */}
      <section className="relative px-4 -mt-20 z-10">
        <div className="flex gap-x-4 bg-white shadow-lg p-4 rounded-2xl items-center border border-gray-100">
          <figure className="w-24 h-24 relative flex-none rounded-xl overflow-hidden">
            <Image
              src={pkg.thumbnail}
              alt={pkg.name}
              fill
              priority
              className="object-cover"
            />
          </figure>
          <div className="flex flex-col gap-y-1">
            <h1 className="font-bold text-lg text-gray-800">{pkg.name}</h1>
            <span className="flex items-center gap-x-2 text-sm text-gray-500">
              <Notes />
              <span>{pkg.category.name}</span>
            </span>

            <span className="flex items-center gap-x-2 text-sm text-gray-500">
              <People />
              <span>
                {lowestTier?.quantity || 0} - {highestTier?.quantity || 0}{" "}
                People
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative z-0 bg-white pt-10 pb-20">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 px-4">
          Choose Your Package
        </h2>

        {tiers.length > 0 ? (
          <div className="flex flex-col relative gap-y-6 px-4">
            {pkg.tiers.map((tier) => {
              const isSelected = tierId === String(tier.id);

              return (
                <Link
                  href={{
                    pathname: `/packages/${packageSlug}/tiers`,
                    query: { tier: tier.id },
                  }}
                  key={tier.id}
                  className={`p-4 rounded-xl border-2 ${
                    isSelected
                      ? "bg-amber-50 border-amber-500"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{tier.name}</h3>
                      <p className="text-gray-500">{tier.quantity} pax</p>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="font-bold text-lg text-amber-500">
                        Rp{tier.price.toLocaleString("id-ID")}
                      </p>
                      <p className="text-gray-500">/pax</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <ul className="grid gap-y-3">
                    {pkgDetails?.bonuses
                      .slice(0, tier.id + 1)
                      .map((bonus, i) => (
                        <li key={i} className="flex items-center gap-x-2.5">
                          <BadgeCheckmark />
                          <span>{bonus.name}</span>
                        </li>
                      ))}
                  </ul>

                  <button className="text-amber-500 font-bold mt-4">
                    Show all menus
                  </button>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center px-4">
            <p className="text-gray-600">
              No tiers are available for this package at the moment.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="sticky bottom-0 bg-white py-4 shadow-[0_-4px_20px_0_#0000000D]">
        <div className="px-4">
          <Link
            href={{
              pathname: `/packages/${packageSlug}/shipping`,
              query: { tier: tierId },
            }}
            className="w-full py-3 mt-auto rounded-full font-semibold text-center text-white bg-amber-500 hover:bg-amber-600 transition-colors duration-300 flex justify-center items-center gap-x-2"
          >
            <span>Continue</span>
            <ArrowCircleLeft className="w-6 h-6 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}