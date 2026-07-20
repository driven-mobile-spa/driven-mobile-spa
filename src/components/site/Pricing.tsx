import { pricingTiers } from "@/content/pricing";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-black px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-14 max-w-2xl sm:mb-16">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
            Transparent Pricing
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Priced by vehicle. No surprises.
          </h2>
          <p className="mt-4 text-brand-silver">
            Choose the plan that fits your vehicle class. Fleet and corporate packages priced on request.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              data-reveal
              className={
                tier.featured
                  ? "relative flex flex-col rounded-3xl border-2 border-brand-blue bg-white/[0.04] p-8 shadow-[0_0_60px_-15px_rgba(46,121,255,0.4)] sm:p-10 md:scale-[1.03]"
                  : "flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
              }
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-silver">
                {tier.name}
              </div>
              <div className="mt-1 text-sm text-brand-silver/80">{tier.vehicle}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="text-sm text-brand-silver">/ wash</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-brand-silver">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-blue" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  tier.featured
                    ? "mt-10 inline-flex items-center justify-center rounded-xl bg-brand-blue px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:brightness-110"
                    : "mt-10 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-brand-black"
                }
              >
                Book {tier.name.split(" ")[0]}
              </a>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-brand-blue/15 to-transparent p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
              Fleet & Corporate
            </div>
            <h3 className="mt-2 text-2xl font-bold">Weekly plans for company vehicles.</h3>
            <p className="mt-2 max-w-xl text-sm text-brand-silver">
              Recurring service for office parks, dealership stock, and executive fleets. Volume
              pricing, monthly invoicing.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-black transition-all hover:bg-brand-blue hover:text-white"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
