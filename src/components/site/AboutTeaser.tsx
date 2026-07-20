import ownerImg from "@/assets/owner-lucky-dawood.jpg";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AboutTeaser() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] lg:grid-cols-2">
          <div ref={ref} data-reveal className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src={ownerImg}
              alt="Lucky Dawood, owner of Driven Mobilespa"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          <div className="p-8 sm:p-12 lg:p-16" data-reveal>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
              Meet the owner
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Lucky Dawood
            </h2>
            <p className="mt-3 text-lg font-medium text-brand-silver">
              Founder & lead detailer
            </p>

            <p className="mt-6 text-brand-silver">
              Lucky is a passionate car cleaner who loves what he does. From a simple wash to a
              full restoration, he treats every vehicle with care and pride — giving your car an
              experience, not just a clean.
            </p>

            <p className="mt-4 text-brand-silver">
              Based in Melkbosstrand and serving all of Cape Town, Lucky and his mobile team bring
              the detailing studio to your driveway, office park, or fleet yard.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand-black transition-all hover:bg-brand-blue hover:text-white"
              >
                Read our story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
