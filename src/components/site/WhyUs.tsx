import trailerImg from "@/assets/trailer-interior.jpg";
import { Check } from "lucide-react";

const points = [
  {
    title: "Fully Autonomous",
    body: "500L pure-water tank, generator, industrial pressure washer — no water or power required from you.",
  },
  {
    title: "Premium Products",
    body: "pH-neutral soaps, professional microfibres, ceramic-grade sealants. Nothing touches the ground twice.",
  },
  {
    title: "Fully Insured",
    body: "On-site care, collect-and-return — your asset is covered from the moment we take the keys.",
  },
  {
    title: "Trained Team",
    body: "Uniformed, courteous, background-checked detailers who treat every car like their own.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="relative">
          <img
            src={trailerImg}
            alt="Interior of the Driven Mobilespa detailing trailer with pressure washer, water tank, and chemical shelving"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-white/10 bg-brand-black/90 px-5 py-4 shadow-2xl backdrop-blur-md sm:block">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
              On-board
            </div>
            <div className="text-sm font-semibold">A pro detail studio</div>
          </div>
        </div>

        <div>
          <div
            data-reveal
            className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue"
          >
            Why Choose Us
          </div>
          <h2
            data-reveal
            className="mb-10 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            A professional studio
            <br />
            <span className="text-brand-blue">on wheels.</span>
          </h2>

          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.title} data-reveal className="flex gap-4">
                <div className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-brand-blue/40 bg-brand-blue/15 text-brand-blue">
                  <Check className="size-3.5" strokeWidth={3} />
                </div>
                <div>
                  <p className="font-bold">{p.title}</p>
                  <p className="mt-1 text-sm text-brand-silver">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
