import { services } from "@/content/services";
import { useReveal } from "@/hooks/use-reveal";

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          data-reveal
          className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
              The Treatment
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Unrivaled mobile care
            </h2>
          </div>
          <p className="max-w-md text-brand-silver">
            Custom-built trailers with industrial pressure washers, purified water, and pro-grade
            chemicals. Everything we need, delivered to your door.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                data-reveal
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-20px_rgba(46,121,255,0.35)]"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-brand-silver">{s.description}</p>
                <div className="text-lg font-bold">
                  {s.from}
                  <span className="ml-1 text-xs font-normal text-brand-silver">/ from</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
