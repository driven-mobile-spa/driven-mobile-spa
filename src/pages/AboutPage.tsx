import { Link } from "react-router-dom";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AboutOwner } from "@/components/site/AboutOwner";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Nav />
      <main>
        <div className="px-4 pb-8 pt-28 sm:px-6 sm:pt-36">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-silver transition-colors hover:text-white"
            >
              ← Back home
            </Link>
          </div>
        </div>
        <AboutOwner />
        <StoryValues />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function StoryValues() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
            Our story
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Built on passion, polished with pride.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-6 text-4xl font-extrabold text-brand-blue">01</div>
            <h3 className="mb-3 text-xl font-bold">The spark</h3>
            <p className="text-sm leading-relaxed text-brand-silver">
              Lucky&apos;s obsession with clean cars began long before Driven Mobilespa existed.
              Friends and family kept asking him to detail their vehicles because they knew he would
              not stop until every surface was perfect.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-6 text-4xl font-extrabold text-brand-blue">02</div>
            <h3 className="mb-3 text-xl font-bold">The trailer</h3>
            <p className="text-sm leading-relaxed text-brand-silver">
              To bring that same studio-quality finish anywhere, Lucky built a custom mobile
              detailing trailer — water tank, pressure washer, generator, and pro-grade chemicals on
              board. The workshop now goes wherever it is needed.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-6 text-4xl font-extrabold text-brand-blue">03</div>
            <h3 className="mb-3 text-xl font-bold">The promise</h3>
            <p className="text-sm leading-relaxed text-brand-silver">
              Today, Driven Mobilespa serves homes, offices, and fleets across Cape Town. The goal
              is simple: treat every vehicle with care, respect your time, and leave it looking
              better than the day it left the showroom.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
