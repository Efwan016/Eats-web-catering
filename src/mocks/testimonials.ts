
export interface Testimonial {
  id: number;
  name: string;
  message: string;
  photo: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kim Jiwon",
    message: "Cateringnya enak banget!",
    photo: "/images/user1.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Park Bo-Young",
    message: "Pelayanannya cepat dan rapi",
    photo: "/images/user2.jpeg",
    rating: 4,
  },
  {
    id: 3,
    name: "Kim Jiso",
    message: "Puas banget sama Paketnya ",
    photo: "/images/user3.jpeg",
    rating: 4,
  },
];
