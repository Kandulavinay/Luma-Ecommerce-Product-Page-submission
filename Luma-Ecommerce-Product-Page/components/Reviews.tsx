import { reviews } from "@/data/product";
import { StarIcon } from "./Icon";

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-black/10 py-20" aria-labelledby="reviews-title">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Customer feedback</p><h2 id="reviews-title" className="mt-2 text-3xl font-black">Loved by everyday movers.</h2></div>
        <div className="rounded-2xl bg-stone-100 px-5 py-4"><div className="flex items-center gap-2"><span className="text-2xl font-black">4.7</span><span className="flex">{[1,2,3,4,5].map((n) => <StarIcon key={n} />)}</span></div><p className="text-sm text-neutral-500">Based on 248 reviews</p></div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.length === 0 ? <p className="text-neutral-500">No reviews yet.</p> : reviews.map((review) => (
          <article key={review.id} className="rounded-2xl border border-black/10 p-6">
            <div className="flex items-center justify-between"><span className="font-bold">{review.name}</span><span className="text-xs text-neutral-500">{review.date}</span></div>
            <div className="mt-3 flex" aria-label={`${review.rating} out of 5 stars`}>{[1,2,3,4,5].map((n) => <StarIcon key={n} filled={n <= review.rating} />)}</div>
            <h3 className="mt-4 font-bold">{review.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
