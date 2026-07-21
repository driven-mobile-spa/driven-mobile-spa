import heroImg from "@/assets/hero-melkbos.jpg";
import { site } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Driven Mobilespa branded trailer and pickup on Melkbosstrand beach with Table Mountain in the distance"
          className="size-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl" data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-blue backdrop-blur-md">
            <span className="relative grid size-2 place-items-center">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-blue" />
            </span>
            Serving all of Cape Town
          </div>

          <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
            PREMIUM DETAILING.
            <br />
            <span className="bg-gradient-to-r from-white via-brand-silver to-brand-blue bg-clip-text text-transparent">
              WE COME TO YOU.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-silver sm:text-lg">
            Mobile car wash & detailing for homes, corporates, and fleets across Cape Town. From
            Melkbosstrand to Constantia — we bring the studio to your driveway.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-brand-black transition-all hover:bg-brand-blue hover:text-white active:scale-95"
            >
              Book Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-brand-silver sm:mt-16 sm:gap-8">
            <Stat value="500+" label="Vehicles detailed" />
            <Stat value="4.9★" label="Google rated" />
            <Stat value="100%" label="Fully mobile" />
          </div>
        </div>
      </div>
    </section>
  );

  function Stat({ value, label }: { value: string; label: string }) {
    void site;
    return (
      <div>
        <div className="text-2xl font-extrabold text-white sm:text-3xl">{value}</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest sm:text-xs">
          {label}
        </div>
      </div>
    );
  }
}
