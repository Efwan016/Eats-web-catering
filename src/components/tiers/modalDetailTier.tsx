import React from "react";
import { getPackageDetailsMock } from "@/mocks/package-details";
import { ContentTier } from ".";

type Props = {
  packageSlug: string;
  tierId: string;
};

function ModalDetailTier({ packageSlug, tierId }: Props) {
  const pkg = getPackageDetailsMock(packageSlug);

  if (!pkg) return "Package not found.";

  const currentTier = pkg.tiers.find(
    (tier) => String(tier.id) === tierId
  );

  if (!currentTier) return "Tier not found.";

  return (
    <ContentTier
      data={currentTier}
      packageSlug={packageSlug}
      isPriceShown
      ctaIsBack
    />
  );
}

export default ModalDetailTier;
