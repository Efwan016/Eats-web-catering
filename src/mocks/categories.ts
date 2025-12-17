export interface Category {
  id: number;
  name: string;
  slug: string;
  photo: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Rice Box",
    slug: "rice-box",
    photo: "/images/categories/nasi-box.png",
  },
  {
    id: 2,
    name: "Snack",
    slug: "snack",
    photo: "/images/categories/snack.png",
  },
  {
    id: 3,
    name: "Tumpeng",
    slug: "tumpeng",
    photo: "/images/categories/tumpeng.png",
  },
  {
    id: 4,
    name: "Prasmanan",
    slug: "prasmanan",
    photo: "/images/categories/prasmanan.png",
  },
  {
    id: 5,
    name: "Halal Packages",
    slug: "halal",
    photo: "/images/categories/halal.png",
  },
  {
    id: 6,
    name: "Healty Packages",
    slug: "healty-food",
    photo: "/images/categories/healty-food.png",
  },
  {
    id: 7,
    name: "Dessert",
    slug: "dessert",
    photo: "/images/categories/dessert.png",
  },
  {
    id: 8,
    name: "Buffed",
    slug: "buffed",
    photo: "/images/categories/buffed.png",
  },
];
