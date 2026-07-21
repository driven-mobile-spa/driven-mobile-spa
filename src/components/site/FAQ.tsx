import { faqs } from "@/content/faq";
import { Plus } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div data-reveal className="mb-14 text-center">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
            Frequently asked
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
          {faqs.map((f, i) => (
            <details
              key={i}
              data-reveal
              className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-base font-semibold sm:text-lg">{f.q}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-brand-blue transition-transform group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-4 pr-14 text-sm leading-relaxed text-brand-silver">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
