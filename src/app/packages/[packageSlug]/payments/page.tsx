import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { packages } from "@/mocks/packages";

import ComposeHeader from "./ComposeHeader";
import Notes from "@/aseets/icons/Notes";
import People from "@/aseets/icons/People";
import Form from "./Form";
import FormWrapper from "./FormWrapper";

type Props = {
  params: {
    packageSlug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function PackagePaymentsPage({ params, searchParams }: Props) {
  const { packageSlug } = params;
  const tierId = searchParams.tier;
  const quantity = searchParams.quantity;

  const pkg = packages.find(
    (p) => p.slug === packageSlug
  );

  if (!pkg) return notFound();

  const tiers = pkg.tiers;

  const lowestTier =
    tiers.length > 0
      ? tiers.reduce((min, curr) => (curr.price < min.price ? curr : min))
      : null;

  const highestTier =
    tiers.length > 0
      ? tiers.reduce((max, curr) => (curr.price > max.price ? curr : max))
      : null;

  const currentTier = tiers.find((t) => String(t.id) === tierId);

  return (
    <div className="bg-gray-50">
      <ComposeHeader />

      {/* INFO */}
      <section className="relative px-4 -mt-20 z-10">
        <div className="flex flex-col gap-y-5 bg-white shadow-lg p-4 rounded-2xl border border-gray-100">
          <div className="flex gap-x-3 items-center">
            <figure className="w-20 h-20 relative flex-none rounded-xl overflow-hidden">
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

          {!!currentTier && (
            <div>
              <h2 className="font-bold mb-3">Tier Package</h2>
              <div className="flex justify-between items-center rounded-2xl border-2 border-dashed p-3">
                <div>
                  <h3 className="font-bold text-base text-gray-800">
                    {currentTier.name}
                  </h3>
                  <p className="text-sm text-gray-500">{quantity} people</p>
                </div>
                <Link
                  href={`/packages/${packageSlug}/tiers?tier=${tierId}`}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  Change
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white mt-4 py-6">
        <FormWrapper
          packageSlug={packageSlug}
          tierId={String(tierId)}
          price={currentTier?.price ?? 0}
        >
          <Form />
        </FormWrapper>
      </section>
    </div>
  );
}