import { useState } from "react";
import { site } from "@/config/site";
import {
  bookingSchema,
  hasGoogleFormConfigured,
  mailtoUrl,
  submitToGoogleForm,
  whatsappUrl,
  type BookingValues,
} from "@/lib/booking";
import { Mail, MapPin, MessageCircle, Phone, Clock, CheckCircle2 } from "lucide-react";

const emptyValues: BookingValues = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  size: "Sedan",
  service: "Full Valet",
  date: "",
  location: "",
  notes: "",
};

export function Contact() {
  const [values, setValues] = useState<BookingValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingValues, string>>>({});
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof BookingValues>(k: K, v: BookingValues[K]) {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof BookingValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof BookingValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setState("submitting");
    setErrorMsg("");
    try {
      if (hasGoogleFormConfigured()) {
        await submitToGoogleForm(parsed.data);
      } else {
        // Fallback: open the user's mail client pre-filled
        window.location.href = mailtoUrl(parsed.data);
      }
      setState("success");
      setValues(emptyValues);
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-black px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-14 max-w-2xl">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">
            Book a detail
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Ready for a showroom finish?
          </h2>
          <p className="mt-4 text-brand-silver">
            Fill in the form and we'll confirm your booking on WhatsApp within 30 minutes during
            business hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Form */}
          <form
            data-reveal
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  className={inputCls}
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  autoComplete="name"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  className={inputCls}
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </Field>
              <Field label="Email" error={errors.email} className="sm:col-span-2">
                <input
                  type="email"
                  className={inputCls}
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                />
              </Field>
              <Field label="Vehicle make & model" error={errors.vehicle}>
                <input
                  className={inputCls}
                  placeholder="e.g. BMW X5"
                  value={values.vehicle}
                  onChange={(e) => update("vehicle", e.target.value)}
                />
              </Field>
              <Field label="Vehicle size" error={errors.size}>
                <select
                  className={inputCls}
                  value={values.size}
                  onChange={(e) => update("size", e.target.value as BookingValues["size"])}
                >
                  {["Sedan", "SUV", "Bakkie", "Other"].map((o) => (
                    <option key={o} className="bg-brand-black">
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Service" error={errors.service}>
                <select
                  className={inputCls}
                  value={values.service}
                  onChange={(e) => update("service", e.target.value as BookingValues["service"])}
                >
                  {[
                    "Exterior Wash",
                    "Full Valet",
                    "Interior Detail",
                    "Paint Correction & Ceramic",
                    "Fleet / Corporate",
                    "Collect & Return",
                  ].map((o) => (
                    <option key={o} className="bg-brand-black">
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred date (optional)">
                <input
                  type="date"
                  className={inputCls}
                  value={values.date ?? ""}
                  onChange={(e) => update("date", e.target.value)}
                />
              </Field>
              <Field label="Suburb / address" error={errors.location} className="sm:col-span-2">
                <input
                  className={inputCls}
                  placeholder="Where should we come?"
                  value={values.location}
                  onChange={(e) => update("location", e.target.value)}
                />
              </Field>
              <Field label="Notes (optional)" error={errors.notes} className="sm:col-span-2">
                <textarea
                  className={`${inputCls} min-h-[100px] resize-y`}
                  value={values.notes ?? ""}
                  onChange={(e) => update("notes", e.target.value)}
                  maxLength={600}
                />
              </Field>
            </div>

            {state === "success" && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-blue/40 bg-brand-blue/10 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                <div>
                  <div className="font-semibold">Booking request sent.</div>
                  <div className="text-brand-silver">
                    We'll confirm on WhatsApp within 30 minutes during business hours.
                  </div>
                </div>
              </div>
            )}
            {state === "error" && (
              <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                {errorMsg}. Please WhatsApp us instead.
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-brand-blue px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:brightness-110 disabled:opacity-60"
              >
                {state === "submitting" ? "Sending…" : "Send booking request"}
              </button>
              <a
                href={whatsappUrl(values)}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10"
              >
                <MessageCircle className="size-4" />
                Book on WhatsApp
              </a>
            </div>
          </form>

          {/* Info + map */}
          <div className="space-y-6">
            <div
              data-reveal
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Get in touch
              </h3>
              <ul className="mt-6 space-y-5 text-sm">
                <InfoRow
                  icon={Phone}
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                />
                <InfoRow
                  icon={MessageCircle}
                  label="WhatsApp"
                  value={`+${site.whatsapp}`}
                  href={`https://wa.me/${site.whatsapp}`}
                />
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <InfoRow icon={MapPin} label="Based in" value={site.address} />
                <InfoRow icon={Clock} label="Hours" value={site.hours} />
              </ul>
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-silver">
                  Areas covered
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {site.serviceAreas.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-brand-silver"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              data-reveal
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
            >
              <iframe
                title="Driven Mobilespa service area"
                src={site.googleMapsEmbedSrc}
                width="100%"
                height="340"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-[30%] contrast-125"
                style={{ border: 0, colorScheme: "dark" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-brand-black/60 px-4 py-3 text-sm text-white outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30";

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-silver">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
        <Icon className="size-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-silver">
          {label}
        </div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 rounded-lg -m-2 p-2 transition-colors hover:bg-white/5"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
