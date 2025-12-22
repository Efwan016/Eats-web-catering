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
  name: string;
  slug?: string;
  tagline: string;
  price: number;
  quantity: number;
  duration: string;
  photo: string;
  benefits: string[];
}

export interface Package {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  about: string;
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
    about: "Premium catering package for events and weddings",
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
  {
    id: 1,
    name: "Silver Package",
    tagline: "Best for small events",
    price: 25000,
    quantity: 50,
    duration: "4 Hours",
    photo: "/images/tier/tier-silver.jpg",
    benefits: [
      "Free delivery",
      "Free mineral water",
      "Standard cutlery",
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    tagline: "Perfect for medium events",
    price: 35000,
    quantity: 100,
    duration: "6 Hours",
    photo: "/images/tier/tier-gold.jpg",
    benefits: [
      "Free delivery",
      "Premium cutlery",
      "Free dessert",
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    tagline: "Luxury catering experience",
    price: 50000,
    quantity: 200,
    duration: "8 Hours",
    photo: "/images/tier/tier-platinum.jpg",
    benefits: [
      "Free delivery",
      "VIP service",
      "Live cooking",
    ],
  },
  {
    id: 4,
    name: "Diamond Package",
    tagline: "Luxury catering for VIP events",
    price: 75000,
    quantity: 300,
    duration: "8 Hours",
    photo: "/images/tier/tier-diamond.jpg",
    benefits: [
      "Free Delivery",
      "Custom Menu",
      "Dessert & Premium Drinks",
      "Professional Service Crew",
      "Full Decoration",
      "Event Coordinator",
    ]
  },
]

  },
  {
    id: 2,
    name: "Snack Box Meeting",
    slug: "snack-box-meeting",
    thumbnail: "/images/categories/snack.png",
    about: "Premium catering package for events and weddings",
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
  {
    id: 1,
    name: "Silver Package",
    tagline: "Best for small events",
    price: 25000,
    quantity: 50,
    duration: "4 Hours",
    photo: "/images/jpg/tier-silver.jpg",
    benefits: [
      "Free delivery",
      "Free mineral water",
      "Standard cutlery",
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    tagline: "Perfect for medium events",
    price: 35000,
    quantity: 100,
    duration: "6 Hours",
    photo: "/images/tier/tier-gold.jpg",
    benefits: [
      "Free delivery",
      "Premium cutlery",
      "Free dessert",
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    tagline: "Luxury catering experience",
    price: 50000,
    quantity: 200,
    duration: "8 Hours",
    photo: "/images/tier/tier-platinum.jpg",
    benefits: [
      "Free delivery",
      "VIP service",
      "Live cooking",
    ],
  },
  {
    id: 4,
    name: "Diamond Package",
    tagline: "Luxury catering for VIP events",
    price: 75000,
    quantity: 300,
    duration: "8 Hours",
    photo: "/images/tier/tier-diamond.jpg",
    benefits: [
      "Free Delivery",
      "Custom Menu",
      "Dessert & Premium Drinks",
      "Professional Service Crew",
      "Full Decoration",
      "Event Coordinator",
    ]
  },
]

  },
  {
    id: 3,
    name: "Tumpeng Mini",
    slug: "tumpeng-mini",
    thumbnail: "/images/categories/tumpeng.png",
    about: "Premium catering package for events and weddings",
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
  {
    id: 1,
    name: "Silver Package",
    tagline: "Best for small events",
    price: 25000,
    quantity: 50,
    duration: "4 Hours",
    photo: "/images/tier/tier-silver.jpg",
    benefits: [
      "Free delivery",
      "Free mineral water",
      "Standard cutlery",
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    tagline: "Perfect for medium events",
    price: 35000,
    quantity: 100,
    duration: "6 Hours",
    photo: "/images/tier/tier-gold.jpg",
    benefits: [
      "Free delivery",
      "Premium cutlery",
      "Free dessert",
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    tagline: "Luxury catering experience",
    price: 50000,
    quantity: 200,
    duration: "8 Hours",
    photo: "/images/tier/tier-platinum.jpg",
    benefits: [
      "Free delivery",
      "VIP service",
      "Live cooking",
    ],
  },
  {
    id: 4,
    name: "Diamond Package",
    tagline: "Luxury catering for VIP events",
    price: 75000,
    quantity: 300,
    duration: "8 Hours",
    photo: "/images/tier/tier-diamond.jpg",
    benefits: [
      "Free Delivery",
      "Custom Menu",
      "Dessert & Premium Drinks",
      "Professional Service Crew",
      "Full Decoration",
      "Event Coordinator",
    ]
  },
]
  },
  {
    id: 4,
    name: "Prasmanan",
    slug: "prasmanan",
    thumbnail: "/images/categories/prasmanan.png",
    about: "Premium catering package for events and weddings",
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
  {
    id: 1,
    name: "Silver Package",
    tagline: "Best for small events",
    price: 25000,
    quantity: 50,
    duration: "4 Hours",
    photo: "/images/tier/tier-silver.jpg",
    benefits: [
      "Free delivery",
      "Free mineral water",
      "Standard cutlery",
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    tagline: "Perfect for medium events",
    price: 35000,
    quantity: 100,
    duration: "6 Hours",
    photo: "/images/tier/tier-gold.jpg",
    benefits: [
      "Free delivery",
      "Premium cutlery",
      "Free dessert",
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    tagline: "Luxury catering experience",
    price: 50000,
    quantity: 200,
    duration: "8 Hours",
    photo: "/images/tier/tier-platinum.jpg",
    benefits: [
      "Free delivery",
      "VIP service",
      "Live cooking",
    ],
  },
  {
    id: 4,
    name: "Diamond Package",
    tagline: "Luxury catering for VIP events",
    price: 75000,
    quantity: 300,
    duration: "8 Hours",
    photo: "/images/tier/tier-diamond.jpg",
    benefits: [
      "Free Delivery",
      "Custom Menu",
      "Dessert & Premium Drinks",
      "Professional Service Crew",
      "Full Decoration",
      "Event Coordinator",
    ]
  },
]

  },
  {
    id: 5,
    name: "Desserts Box",
    slug: "desserts-box",
    thumbnail: "/images/categories/dessert.png",
    about: "Premium catering package for events and weddings",
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
  {
    id: 1,
    name: "Silver Package",
    tagline: "Best for small events",
    price: 25000,
    quantity: 50,
    duration: "4",
    photo: "/images/tier/tier-silver.jpg",
    benefits: [
      "Free delivery",
      "Free mineral water",
      "Standard cutlery",
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    tagline: "Perfect for medium events",
    price: 35000,
    quantity: 100,
    duration: "6 Hours",
    photo: "/images/tier/tier-gold.jpg",
    benefits: [
      "Free delivery",
      "Premium cutlery",
      "Free dessert",
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    tagline: "Luxury catering experience",
    price: 50000,
    quantity: 200,
    duration: "8 Hours",
    photo: "/images/tier/tier-platinum.jpg",
    benefits: [
      "Free delivery",
      "VIP service",
      "Live cooking",
    ],
  },
  {
    id: 4,
    name: "Diamond Package",
    tagline: "Luxury catering for VIP events",
    price: 75000,
    quantity: 300,
    duration: "8 Hours",
    photo: "/images/tier/tier-diamond.jpg",
    benefits: [
      "Free Delivery",
      "Custom Menu",
      "Dessert & Premium Drinks",
      "Professional Service Crew",
      "Full Decoration",
      "Event Coordinator",
    ]
  },
]
  },
];

