"use client";

import { useCart } from "@/context/CartContext";
import { MinusIcon, PlusIcon, XIcon } from "./Icon";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, total, removeItem } = useCart();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <button className="absolute inset-0 bg-black/40" aria-label="Close cart" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between"><h2 id="cart-title" className="text-2xl font-black">Your cart</h2><button onClick={onClose} className="rounded-full p-2 hover:bg-black/5" aria-label="Close cart"><XIcon /></button></div>
        {items.length === 0 ? <div className="py-20 text-center"><p className="text-lg font-bold">Your cart is empty.</p><p className="mt-2 text-sm text-neutral-500">Add a pair to get started.</p></div> : <>
          <div className="mt-8 space-y-5">
            {items.map((item) => <div key={item.id} className="border-b border-black/10 pb-5"><div className="flex justify-between gap-4"><div><h3 className="font-bold">{item.name}</h3><p className="mt-1 text-sm text-neutral-500">{item.color} · US {item.size}</p></div><button onClick={() => removeItem(item.id)} className="text-sm underline">Remove</button></div><div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-3 rounded-lg border px-3 py-1 text-sm"><button disabled aria-label="Decrease quantity" className="opacity-40"><MinusIcon /></button><span>{item.quantity}</span><button disabled aria-label="Increase quantity" className="opacity-40"><PlusIcon /></button></div><span className="font-bold">${item.price * item.quantity}</span></div></div>)}
          </div>
          <div className="mt-8 flex items-center justify-between text-lg font-black"><span>Total</span><span>${total}</span></div>
          <button className="mt-5 h-12 w-full rounded-xl bg-black font-bold text-white hover:bg-neutral-800" onClick={() => alert("Demo checkout — your cart is ready!")}>Checkout</button>
        </>}
      </aside>
    </div>
  );
}
