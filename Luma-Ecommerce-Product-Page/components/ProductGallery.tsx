"use client";

import { useState } from "react";
import { product } from "@/data/product";

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const image = product.images[active];

  return (
    <div className="grid gap-3 md:grid-cols-[88px_1fr]">
      <div className="order-2 grid grid-cols-4 gap-2 md:order-1 md:grid-cols-1">
        {product.images.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(index)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-stone-100 ${index === active ? "border-black" : "border-transparent"}`}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={index === active}
          >
            <img src={item.src} alt={item.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
      <div className="group relative order-1 aspect-square overflow-hidden rounded-2xl bg-stone-100 md:order-2">
        <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="eager" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">NEW</span>
      </div>
    </div>
  );
}
