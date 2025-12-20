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
    <div className="bg-gray-50 min-h-screen">
      <ComposeHeader />
      <br />
      <br />
      <br />

      <main className="relative z-10 -mt-20 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* INFO CARD */}
          <section className="mb-8">
            <div className="flex items-center gap-x-5 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-lg backdrop-blur-xl">
              <figure className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={pkg.thumbnail}
                  alt={pkg.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 96px"
                  className="object-cover"
                />
              </figure>

              <div className="flex flex-col gap-y-1.5">
                <h1 className="text-xl font-bold leading-tight text-gray-900">
                  {pkg.name}
                </h1>

                <span className="flex items-center gap-x-2 text-sm text-gray-600">
                  <Notes  />
                  {pkg.category.name}
                </span>

                <span className="flex items-center gap-x-2 text-sm text-gray-600">
                  <People  />
                  {lowestTier?.quantity ?? 0} – {highestTier?.quantity ?? 0} People
                </span>
              </div>
            </div>
          </section>

          {/* TIERS LIST */}
          <section>
            <div className="flex flex-col gap-y-5">
              {tiers.map((tier) => (
                <ContentTier
                  key={tier.id}
                  data={tier}
                  packageSlug={packageSlug}
                  isPriceShown
                  cta={
                    <Link
                      href={`/packages/${packageSlug}/informations?tierId=${tier.id}&quantity=${tier.quantity}`}
                      className="group inline-block w-full rounded-full bg-gray-300 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Choose Package
                    </Link>
                  }
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
