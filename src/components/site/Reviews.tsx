import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal className="max-w-xl">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
              What clients say
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Rated 4.9★ across Cape Town.
            </h2>
          </div>
          <div data-reveal className="flex flex-col gap-3 sm:flex-row">
            {site.googleReviewsUrl && (
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10"
              >
                <Star className="size-3.5 fill-brand-blue text-brand-blue" />
                Read on Google
              </a>
            )}
            {site.googleWriteReviewUrl && (
              <a
                href={site.googleWriteReviewUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:brightness-110"
              >
                Leave a Review
              </a>
            )}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              data-reveal
              className="flex flex-col rounded-3xl border border-white/10 bg-brand-black/60 p-8 transition-all hover:-translate-y-1 hover:border-brand-blue/40"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/90">"{r.quote}"</p>
              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="text-sm font-bold">{r.name}</div>
                <div className="text-xs text-brand-silver">{r.suburb}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
