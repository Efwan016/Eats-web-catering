export interface PackageCategory {
  id: number;
  name: string;
  slug: string;
}

export interface PackageCity {
  id: number;
  name: string;
  slug: string;
}

export interface PackageTier {
  id: number;
  price: number;
  quantity: number;
}

export interface Package {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  is_popular: 0 | 1;
  category: PackageCategory;
  city: PackageCity;
  tiers: PackageTier[];
}
 

export const packages: Package[] = [
  {
    id: 1,
    name: "Nasi Box Premium",
    slug: "nasi-box-premium",
    thumbnail: "/images/categories/nasi-box.png",
    is_popular: 1,
    category: {
      id: 1,
      name: "Nasi Box",
      slug: "nasi-box",
    },
    city: {
      id: 1,
      name: "Jakarta",
      slug: "jakarta",
    },
    tiers: [
      { id:1, price: 25000, quantity: 20 },
      { id:2,price: 22000, quantity: 50 },
    ],
  },
  {
    id: 2,
    name: "Snack Box Meeting",
    slug: "snack-box-meeting",
    thumbnail: "/images/categories/snack.png",
    is_popular: 0,
    category: {
      id: 2,
      name: "Snack",
      slug: "snack",
    },
    city: {
      id: 2,
      name: "Bandung",
      slug: "bandung",
    },
    tiers: [
      { id:1, price: 15000, quantity: 30 },
      { id:2, price: 13000, quantity: 60 },
    ],
  },
  {
    id: 3,
    name: "Tumpeng Mini",
    slug: "tumpeng-mini",
    thumbnail: "/images/categories/tumpeng.png",
    is_popular: 1,
    category: {
      id: 3,
      name: "Tumpeng",
      slug: "tumpeng",
    },
    city: {
      id: 3,
      name: "Surabaya",
      slug: "surabaya",
    },
    tiers: [
      { id:1, price: 350000, quantity: 10 },
      { id:2, price: 300000, quantity: 20 },
    ],
  },
  {
    id: 4,
    name: "Prasmanan",
    slug: "prasmanan",
    thumbnail: "/images/categories/prasmanan.png",
    is_popular: 1,
    category: {
      id: 4,
      name: "Prasmanan",
      slug: "prasmanan",
    },
    city: {
      id: 1,
      name: "Jakarta",
      slug: "jakarta",
    },
    tiers: [
      { id:1, price: 50000, quantity: 100 },
      { id:2, price: 45000, quantity: 200 },
    ],
  },
  {
    id: 5,
    name: "Desserts Box",
    slug: "desserts-box",
    thumbnail: "/images/categories/dessert.png",
    is_popular: 1,
    category: {
      id: 5,
      name: "Dessert",
      slug: "dessert",
    },
    city: {
      id: 4,
      name: "Bogor",
      slug: "bogor",
    },
    tiers: [
      { id:1, price: 18000, quantity: 25 },
      { id:2, price: 16000, quantity: 50 },
    ],
  },
];

