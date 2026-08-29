"use client";

import { useCart } from "@/context/CartContext";
import { BagIcon, SearchIcon } from "./Icon";

export default function Header({ onCart }: { onCart: () => void }) {
  const { itemCount } = useCart();
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="text-xl font-black tracking-tight" aria-label="Luma home">LUMA</a>
        <nav className="hidden gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
          <a href="#product" className="hover:opacity-60">Shop</a>
          <a href="#details" className="hover:opacity-60">Details</a>
          <a href="#reviews" className="hover:opacity-60">Reviews</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden rounded-full p-2 hover:bg-black/5 sm:block" aria-label="Search"><SearchIcon /></button>
          <button onClick={onCart} className="relative rounded-full p-2 hover:bg-black/5" aria-label={`Open cart, ${itemCount} items`}>
            <BagIcon />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">{itemCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
