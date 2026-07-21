import { beforeAfterPairs, galleryTiles } from "@/lib/gallery";

export function Gallery() {
  const hasBeforeAfter = beforeAfterPairs.length > 0;
  const hasTiles = galleryTiles.length > 0;

  return (
    <section id="gallery" className="scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-14 max-w-2xl">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
            Before & After
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Real results, real cars.
          </h2>
          <p className="mt-4 text-brand-silver">
            Every job documented. Drop new photos into{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">src/assets/gallery/</code>{" "}
            and they appear here automatically on the next deploy.
          </p>
        </div>

        {hasBeforeAfter && (
          <div className="grid gap-6 sm:grid-cols-2">
            {beforeAfterPairs.map((pair) => (
              <div
                key={pair.id}
                data-reveal
                className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-transform hover:-translate-y-1"
              >
                <figure className="relative">
                  <img
                    src={pair.before}
                    alt="Before detail"
                    loading="lazy"
                    className="aspect-[4/3] size-full object-cover grayscale"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-brand-black/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative">
                  <img
                    src={pair.after}
                    alt="After detail"
                    loading="lazy"
                    className="aspect-[4/3] size-full object-cover"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-brand-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                    After
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        )}

        {hasTiles && (
          <div
            className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${hasBeforeAfter ? "mt-6" : ""}`}
          >
            {galleryTiles.map((tile) => (
              <figure
                key={tile.id}
                data-reveal
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <img
                  src={tile.url}
                  alt={tile.label}
                  loading="lazy"
                  className="aspect-square size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        )}

        {!hasBeforeAfter && !hasTiles && (
          <div className="rounded-3xl border border-dashed border-white/15 p-16 text-center text-brand-silver">
            Add photos to{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">src/assets/gallery/</code>{" "}
            to populate this section.
          </div>
        )}
      </div>
    </section>
  );
}
