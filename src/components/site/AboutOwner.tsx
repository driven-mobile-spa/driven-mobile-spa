import ownerImg from "@/assets/owner-lucky-dawood.jpg";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";
import { Check, Heart, Shield, Sparkles } from "lucide-react";

export function AboutOwner() {
  const imageRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div ref={imageRef} data-reveal className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src={ownerImg}
                alt="Lucky Dawood, owner of Driven Mobilespa, in front of the mobile detailing trailer"
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-brand-black/90 p-5 shadow-2xl backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">500+</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-silver">
                    Vehicles detailed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={textRef} data-reveal>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
              Meet the owner
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Lucky Dawood
            </h2>
            <p className="mt-3 text-lg font-medium text-brand-silver">
              Founder & lead detailer at {site.businessName}
            </p>

            <div className="mt-8 space-y-5 text-brand-silver">
              <p>
                Lucky Dawood is a passionate car cleaner at heart. What started as a love for making
                vehicles look their best quickly grew into a mission: bringing a premium studio
                detailing experience right to your doorstep — anywhere in Cape Town.
              </p>
              <p>
                He believes every car deserves more than a quick wash. It deserves care, patience,
                and attention to detail. Whether it is a daily run-around, a luxury SUV, a fleet
                vehicle, or a vintage weekend ride, Lucky treats each one as if it were his own.
              </p>
              <p>
                Driven Mobilespa was built on that passion. With a custom-built mobile trailer,
                professional-grade equipment, and a small dedicated team, Lucky and his crew travel
                from Melkbosstrand to the Southern Suburbs delivering spotless finishes, restored
                leather, crystal-clear headlights, and that fresh-from-the-showroom feeling.
              </p>
              <p className="font-medium text-white">
                “I do not just clean cars — I give every vehicle an experience. When you love what
                you do, it shows in the shine.”
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Value icon={Heart} label="Passion-first service" />
              <Value icon={Shield} label="Trust & care guaranteed" />
              <Value icon={Sparkles} label="Showroom finish, every time" />
              <Value icon={Check} label="Fully mobile across Cape Town" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ icon: Icon, label }: { icon: typeof Heart; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon className="size-5" />
      </div>
      <div className="text-sm font-semibold text-white">{label}</div>
    </div>
  );
}
