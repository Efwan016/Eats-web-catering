import Image from "next/image"
import Link from "next/link"

import { notFound } from "next/navigation"

import ComposeHeader from "./ComposeHeader"

import { ContentTier } from "@/components/tiers"
import { getPackageDetailsMock } from "@/mocks/package-details"
import Notes from "@/aseets/icons/Notes"
import People from "@/aseets/icons/People"
import { TTier } from "@/components/tiers/type"

type Props = {
  params: {
    packageSlug: string
  }
}

export type PackageTier = TTier;

export default async function PackageTiersPage({ params }: Props) {
  const { packageSlug } = await params

  const pkg = getPackageDetailsMock(packageSlug)

  if (!pkg) return notFound()

  const tiers = pkg.tiers ?? []



  const lowestTier =
    tiers.length > 0
      ? tiers.reduce((min, curr) =>
        curr.price < min.price ? curr : min
      )
      : null

  const highestTier =
    tiers.length > 0
      ? tiers.reduce((max, curr) =>
        curr.price > max.price ? curr : max
      )
      : null


  return (
    <>
      <ComposeHeader />
      <br/>
      <br/>
      <br/>

      <section className="relative px-4 -mt-24 z-10">
        <div className="flex gap-x-4 bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] p-5 rounded-3xl border border-gray-100">
          <figure className="w-24 h-24 relative rounded-2xl overflow-hidden shrink-0">
            <Image
              src={pkg.thumbnail}
              alt={pkg.name}
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </figure>

          <div className="flex flex-col gap-y-2 justify-center">
            <h1 className="font-semibold text-xl text-gray-900 leading-tight">
              {pkg.name}
            </h1>

            <span className="flex items-center gap-x-2 text-gray-500 text-sm">
              <Notes />
              {pkg.category.name}
            </span>

            <span className="flex items-center gap-x-2 text-gray-500 text-sm">
              <People />
              {lowestTier?.quantity ?? 0} – {highestTier?.quantity ?? 0} People
            </span>
          </div>
        </div>
      </section>


      <section className="bg-linear-to-b from-white to-gray-50 pt-12 pb-28 px-4">
  <div className="flex flex-col gap-y-6">
    {tiers.map((tier) => (
      <ContentTier
        key={tier.id}
        data={tier}
        packageSlug={packageSlug}
        isPriceShown
        cta={
          <Link
            href={`/packages/${packageSlug}/informations?tier=${tier.id}`}
            className="group w-full py-3 rounded-full border border-gray-200 text-center font-semibold
              hover:bg-amber-500 hover:text-white transition-all"
          >
            Choose Package →
          </Link>
        }
      />
    ))}
  </div>
</section>



    </>
  )
}
