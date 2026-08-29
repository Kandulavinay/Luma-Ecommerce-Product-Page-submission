"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import Reviews from "@/components/Reviews";
import RelatedProducts from "@/components/RelatedProducts";
import CartDrawer from "@/components/CartDrawer";

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState(false);

  function handleAdded() {
    setNotice(true);
    setCartOpen(true);
    window.setTimeout(() => setNotice(false), 2500);
  }

  return (
    <div id="top" className="min-h-screen bg-white text-neutral-950">
      <Header onCart={() => setCartOpen(true)} />
      <main>
        <section id="product" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pt-14">
          <ProductGallery />
          <ProductInfo onAdded={handleAdded} />
        </section>
        <section id="details" className="mx-auto max-w-7xl px-5 pb-4 lg:px-8"><div className="grid gap-4 rounded-2xl bg-neutral-950 p-7 text-white md:grid-cols-3"><div><p className="text-sm text-white/50">Built for</p><p className="mt-1 font-bold">Daily movement</p></div><div><p className="text-sm text-white/50">Upper</p><p className="mt-1 font-bold">Breathable knit</p></div><div><p className="text-sm text-white/50">Sole</p><p className="mt-1 font-bold">Lightweight EVA</p></div></div></section>
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><Reviews /><RelatedProducts /></div>
      </main>
      {notice && <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white shadow-lg" role="status">Added to cart ✓</div>}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
