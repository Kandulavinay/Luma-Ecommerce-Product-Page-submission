"use client";

import { useState } from "react";
import { product } from "@/data/product";
import { useCart } from "@/context/CartContext";
import { MinusIcon, PlusIcon, StarIcon } from "./Icon";

export default function ProductInfo({ onAdded }: { onAdded: () => void }) {
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState(product.sizes[3]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  function addToCart() {
    addItem(color, size, quantity);
    onAdded();
  }

  return (
    <div className="flex flex-col">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{product.category}</p>
      <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{product.name}</h1>
      <div className="mt-4 flex items-center gap-2" aria-label={`${product.rating} out of 5 stars`}>
        <span className="flex gap-1">{[1,2,3,4,5].map((n) => <StarIcon key={n} filled={n <= Math.round(product.rating)} />)}</span>
        <span className="text-sm font-semibold">{product.rating}</span>
        <a href="#reviews" className="text-sm text-neutral-500 underline">{product.reviewCount} reviews</a>
      </div>
      <div className="mt-7 flex items-end gap-3">
        <span className="text-3xl font-black">${product.price}</span>
        <span className="pb-1 text-lg text-neutral-400 line-through">${product.originalPrice}</span>
        <span className="rounded-full bg-black px-2.5 py-1 text-xs font-bold text-white">-{product.discount}%</span>
      </div>
      <p className="mt-5 max-w-xl leading-7 text-neutral-600">{product.description}</p>

      <div className="mt-8 border-t border-black/10 pt-7">
        <div className="flex items-center justify-between"><h2 className="font-bold">Color: {color}</h2><span className="text-sm text-neutral-500">3 options</span></div>
        <div className="mt-3 flex gap-3">
          {product.colors.map((item) => (
            <button key={item.name} onClick={() => setColor(item.name)} className={`h-10 w-10 rounded-full border-2 p-1 ${color === item.name ? "border-black" : "border-transparent"}`} aria-label={`Select ${item.name} color`} aria-pressed={color === item.name}>
              <span className="block h-full w-full rounded-full border border-black/10" style={{ backgroundColor: item.value }} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between"><h2 className="font-bold">Size</h2><button className="text-sm underline">Size guide</button></div>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
          {product.sizes.map((item) => <button key={item} onClick={() => setSize(item)} className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${size === item ? "border-black bg-black text-white" : "border-black/15 hover:border-black"}`} aria-pressed={size === item}>US {item}</button>)}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <div className="flex h-12 items-center justify-between rounded-xl border border-black/15 px-3 sm:w-36">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity" className="rounded p-2 hover:bg-black/5"><MinusIcon /></button>
          <span className="font-bold" aria-live="polite">{quantity}</span>
          <button onClick={() => setQuantity(Math.min(10, quantity + 1))} aria-label="Increase quantity" className="rounded p-2 hover:bg-black/5"><PlusIcon /></button>
        </div>
        <button onClick={addToCart} className="h-12 flex-1 rounded-xl bg-black px-6 font-bold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Add to cart — ${product.price * quantity}</button>
      </div>
      <p className="mt-4 text-sm font-semibold"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />{product.stock} in stock — ships within 24 hours</p>
    </div>
  );
}
