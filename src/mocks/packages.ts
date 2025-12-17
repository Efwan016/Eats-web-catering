export interface Package {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  is_popular: number;
  category?: {
    name: string;
  };
  city?: {
    name: string;
  };
  tiers?: {
    price: number;
    quantity: number;
  }[];
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Nasi Box Premium",
    slug: "nasi-box-premium",
    thumbnail: "/images/categories/nasi-box.png",
    is_popular: 1,
    category: { name: "Nasi Box" },
    city: { name: "Jakarta" },
    tiers: [
      { price: 25000, quantity: 20 },
      { price: 22000, quantity: 50 },
    ],
  },
  {
    id: 2,
    name: "Snack Box Meeting",
    slug: "snack-box-meeting",
    thumbnail: "/images/categories/snack.png",
    is_popular: 1,
    category: { name: "Snack" },
    city: { name: "Bandung" },
    tiers: [
      { price: 15000, quantity: 30 },
      { price: 13000, quantity: 60 },
    ],
  },
  {
    id: 3,
    name: "Tumpeng Mini",
    slug: "tumpeng-mini",
    thumbnail: "/images/categories/tumpeng.png",
    is_popular: 1,
    category: { name: "Tumpeng" },
    city: { name: "Surabaya" },
    tiers: [
      { price: 350000, quantity: 10 },
      { price: 300000, quantity: 20 },
    ],
  },
  {
    id: 4,
    name: "Prasmanan",
    slug: "prasmanan",
    thumbnail: "/images/categories/prasmanan.png",
    is_popular: 1,
    category: { name: "Prasmanan" },
    city: { name: "Jakarta" },
    tiers: [
      { price: 50000, quantity: 100 },
      { price: 45000, quantity: 200 },
    ],
  },
  {
    id: 5,
    name: "Desserts Box",
    slug: "dessert packages",
    thumbnail: "/images/categories/dessert.png",
    is_popular: 1,
    category: { name: "Dessert" },
    city: { name: "Bogor" },
    tiers: [
      { price: 18000, quantity: 25 },
      { price: 16000, quantity: 50 },
    ],
  },
];
