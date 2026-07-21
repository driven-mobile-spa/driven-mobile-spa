import fleetMelkbos from "@/assets/fleet-melkbos.jpg";
import fleetCorporate from "@/assets/fleet-corporate.jpg";
import trailerChapmans from "@/assets/trailer-chapmans.jpg";
import trailerInterior from "@/assets/trailer-interior.jpg";
import { useReveal } from "@/hooks/use-reveal";

const shots = [
  {
    src: fleetMelkbos,
    label: "Melkbosstrand",
    caption: "Sunrise details on the West Coast strip.",
    className: "md:col-span-2 md:row-span-2 aspect-[16/10]",
  },
  {
    src: trailerChapmans,
    label: "Chapman's Peak",
    caption: "Rolling to the next booking along the Atlantic Seaboard.",
    className: "aspect-[4/3]",
  },
  {
    src: fleetCorporate,
    label: "Century City",
    caption: "Fleet wash day at a corporate office park.",
    className: "aspect-[4/3]",
  },
  {
    src: trailerInterior,
    label: "Inside the trailer",
    caption: "Pressure washer, purified water, generator — everything on board.",
    className: "md:col-span-2 aspect-[16/9]",
  },
];

export function Fleet() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="fleet"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          data-reveal
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
              Our Fleet
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              A workshop on wheels — wherever you are.
            </h2>
          </div>
          <p className="max-w-md text-brand-silver">
            Our custom-built trailers carry industrial pressure washers, 400L purified-water tanks,
            steam extractors and pro-grade chemicals. Melkbosstrand to Muizenberg, we roll to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)]">
          {shots.map((s) => (
            <figure
              key={s.label}
              data-reveal
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black ${s.className}`}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                  {s.label}
                </div>
                <div className="mt-1 text-sm text-white/90">{s.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
