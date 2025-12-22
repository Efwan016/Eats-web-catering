import React from 'react'
import ComposeHeader from '@/app/packages/[packageSlug]/payments/ComposeHeader'
import Image from 'next/image'

import { Metadata, ResolvingMetadata } from 'next';
import FormPaymentWrapper from './FormWrapper';

import Notes from '@/aseets/icons/Notes';
import People from '@/aseets/icons/People';
import { getPackageDetailsMock} from '@/mocks/package-details';
import { notFound } from 'next/navigation';


type Props = {
    params: Promise<{
        packageSlug: string;
    }>;
    searchParams: Promise<{
        tierId?: string;
        quantity?: string;
    }>;
};



{/*Generate Metadata*/ }
export async function generateMetadata(
  props: { params: Promise<{ packageSlug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const { packageSlug } = params;
    const previous = await parent;
    
  const pkg = getPackageDetailsMock(packageSlug);

  if (!pkg) {
    return {
         title: `Package Not Found | ${previous.title ?? "App"}`,
      description: "This package does not exist.",
    };
  };
  return {
    title: `Payments | ${pkg.name} — Package | ${previous.title ?? "App"}`,
    description:
      pkg.about ?? `Payment page for ${pkg.name} catering package.`,
  };

  
}

async function PackagePaymentsPage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { packageSlug } = params;
  const { tierId, quantity = "0" } = searchParams;

 const pkg = getPackageDetailsMock(packageSlug);

  if (!pkg) return notFound();

  const tiers = pkg.tiers ?? [];
  if (tiers.length === 0) return notFound();

  const lowestTier = tiers.reduce((min, curr) =>
    curr.price < min.price ? curr : min
  );

  const highestTier = tiers.reduce((max, curr) =>
    curr.price > max.price ? curr : max
  );

  const resolvedTier =
    tiers.find((t) => String(t.id) === String(tierId)) ?? lowestTier;

  if (!resolvedTier) return notFound();


    return (
        <>

            <ComposeHeader />
            <br/>
            <br/>
            <br/>

              <section className="relative px-4 -mt-20 z-10">
        <div className="flex flex-col gap-y-5 bg-white shadow-lg p-4 rounded-2xl">
          <div className="flex gap-x-3 items-center">
            <figure className="w-24 h-24 relative rounded-xl overflow-hidden">
              <Image
                src={pkg.thumbnail}
                alt={pkg.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </figure>

            <div className="flex flex-col gap-y-1">
              <h1 className="font-bold text-lg">{pkg.name}</h1>

              <span className="flex items-center gap-x-2 text-sm text-gray-500">
                <Notes />
                {pkg.category.name}
              </span>

              <span className="flex items-center gap-x-2 text-sm text-gray-500">
                <People />
                {lowestTier.quantity} - {highestTier.quantity} People
              </span>
            </div>
          </div>

          {/* TIER */}
          <div>
            <h2 className="font-semibold mb-2">Tier Package</h2>

            <div className="flex items-center gap-x-3 border-2 border-dashed p-3 rounded-xl">
              <figure className="w-20 h-20 relative rounded-lg overflow-hidden">
                <Image
                  src={resolvedTier.photo}
                  alt={resolvedTier.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </figure>

              <div>
                <h3 className="font-semibold">{resolvedTier.name}</h3>
                <p className="text-sm text-gray-500">
                  {quantity} people
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br/>
      <br/>

      {/* FORM */}
      <FormPaymentWrapper
        data={pkg}
        tierId={String(resolvedTier.id)}
        quantity={quantity}
      />
    </>
  );
}

export default PackagePaymentsPage;