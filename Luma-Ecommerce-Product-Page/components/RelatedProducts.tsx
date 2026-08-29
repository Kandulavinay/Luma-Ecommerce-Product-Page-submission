import { relatedProducts } from "@/data/product";

export default function RelatedProducts() {
  return (
    <section className="border-t border-black/10 py-20" aria-labelledby="related-title">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">You may also like</p>
      <h2 id="related-title" className="mt-2 text-3xl font-black">More from Luma.</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {relatedProducts.map((item) => (
          <a href="#product" key={item.id} className="group">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100"><img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /></div>
            <div className="mt-3 flex items-center justify-between"><h3 className="font-bold">{item.name}</h3><span>${item.price}</span></div>
          </a>
        ))}
      </div>
    </section>
  );
}
