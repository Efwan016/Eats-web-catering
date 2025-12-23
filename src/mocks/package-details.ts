

import { packages, Package } from "./packages";
import { testimonials, Testimonial } from "./testimonials";

/* ================= TYPES ================= */

export interface PackagePhoto {
  id: number;
  photo: string;
}

export interface PackageBonus {
  id: number;
  name: string;
  icon: string;
}

export interface PackageKitchen {
  name: string;
  photo: string;
  year: number;
}

export interface PackageDetails extends Package {
  photos: PackagePhoto[];
  bonuses: PackageBonus[];
  testimonials: Testimonial[];
  kitchen: PackageKitchen;
}


/* ================= MOCK FETCH ================= */

export function getPackageDetailsMock(
  slug: string
): PackageDetails | null {
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) return null;

  return {
    ...pkg,
    photos: [
      { id: 1, photo: pkg.thumbnail },
      { id: 2, photo: "/images/asset/details1.jpg" },
      { id: 3, photo: "/images/asset/details2.jpg" },
      { id: 4, photo: "/images/asset/details3.jpg" },
    ],
    bonuses: [
      { id: 1, name: "Free Delivery", icon: "truck" },
      { id: 2, name: "Free Plate", icon: "plate" },
    ],
    testimonials,
    kitchen: {
      name: "Adzani Kitchen",
      photo: "/images/asset/vendor1.png",
      year: 2018,
    },
  };
}
