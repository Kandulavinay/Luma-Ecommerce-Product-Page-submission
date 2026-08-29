export type ProductImage = {
  id: number;
  src: string;
  alt: string;
};

export type Review = {
  id: number;
  name: string;
  rating: number;
  date: string;
  title: string;
  body: string;
};

export const product = {
  id: "luma-runner",
  name: "Luma Everyday Runner",
  category: "Performance Sneakers",
  description:
    "A lightweight everyday sneaker built for city walks, commutes, and comfortable weekend miles.",
  price: 89,
  originalPrice: 120,
  discount: 26,
  stock: 18,
  rating: 4.7,
  reviewCount: 248,
  colors: [
    { name: "Midnight", value: "#171717" },
    { name: "Stone", value: "#d6d0c4" },
    { name: "Ocean", value: "#315d7d" }
  ],
  sizes: ["6", "7", "8", "9", "10", "11", "12"],
  images: [
    { id: 1, src: "https://images.unsplash.com/photo-1675625500632-2d276bd51920?auto=format&fit=crop&fm=jpg&q=80&w=1400", alt: "Red sneakers on a white studio background" },
    { id: 2, src: "https://images.unsplash.com/photo-1755194758076-4deccefe6649?auto=format&fit=crop&fm=jpg&q=80&w=1400", alt: "Neutral sneaker photographed from above" },
    { id: 3, src: "https://images.unsplash.com/photo-1770029606852-38309868b4ee?auto=format&fit=crop&fm=jpg&q=80&w=1400", alt: "Red casual sneakers on a dark background" },
    { id: 4, src: "https://images.unsplash.com/photo-1577982886439-c25dc08b0c01?auto=format&fit=crop&fm=jpg&q=80&w=1400", alt: "White sneakers product photograph" }
  ] as ProductImage[]
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Maya R.",
    rating: 5,
    date: "2 weeks ago",
    title: "Comfortable from day one",
    body: "The cushioning is excellent and the shoe feels light even after a full day on my feet."
  },
  {
    id: 2,
    name: "Daniel K.",
    rating: 5,
    date: "1 month ago",
    title: "Great everyday sneaker",
    body: "Clean design, good grip, and the sizing matched the chart perfectly."
  },
  {
    id: 3,
    name: "Priya S.",
    rating: 4,
    date: "2 months ago",
    title: "Stylish and easy to wear",
    body: "I like how easily these work with casual outfits. The upper also feels breathable."
  }
];

export const relatedProducts = [
  { id: 1, name: "Luma Street Knit", price: 79, image: "https://images.unsplash.com/photo-1577982886439-c25dc08b0c01?auto=format&fit=crop&fm=jpg&q=80&w=1000" },
  { id: 2, name: "Luma Trail Flex", price: 109, image: "https://images.unsplash.com/photo-1755194758076-4deccefe6649?auto=format&fit=crop&fm=jpg&q=80&w=1000" },
  { id: 3, name: "Luma Court Low", price: 84, image: "https://images.unsplash.com/photo-1770029606852-38309868b4ee?auto=format&fit=crop&fm=jpg&q=80&w=1000" }
];
