## Driven Mobilespa — static premium site (GitHub Pages ready)

Single-page Midnight Cinematic Luxe site with **no backend**. All contact details, links, form endpoints, and gallery images come from config — no hardcoded placeholders scattered through components.

### Config layer (single source of truth)

`src/config/site.ts` is the only file you (or GitHub Actions) touch to configure the site. It reads from Vite build-time env vars (`import.meta.env.VITE_*`) and falls back to defaults in the file, so:

- **Locally / on your machine**: edit `src/config/site.ts` (or drop values into a git-ignored `.env.local`). Site works out of the box.
- **GitHub Pages via Actions**: set the same names as **Repository Secrets/Variables** (`VITE_BUSINESS_EMAIL`, `VITE_WHATSAPP_NUMBER`, `VITE_GOOGLE_FORM_ACTION`, etc.). The workflow injects them at `bun run build` and the values bake into the static bundle.

```ts
// src/config/site.ts
const env = import.meta.env;

export const site = {
  businessName: env.VITE_BUSINESS_NAME ?? "Driven Mobilespa",
  phone: env.VITE_BUSINESS_PHONE ?? "+27 00 000 0000",
  whatsapp: env.VITE_WHATSAPP_NUMBER ?? "27000000000", // intl, no +
  email: env.VITE_BUSINESS_EMAIL ?? "hello@driven-mobilespa.com",

  googleReviewsUrl: env.VITE_GOOGLE_REVIEWS_URL ?? "",
  googleWriteReviewUrl: env.VITE_GOOGLE_WRITE_REVIEW_URL ?? "",
  googleMapsEmbedSrc: env.VITE_GOOGLE_MAPS_EMBED_SRC ?? "",

  booking: {
    googleFormAction: env.VITE_GOOGLE_FORM_ACTION ?? "",
    fields: {
      name: env.VITE_GF_FIELD_NAME ?? "entry.0",
      phone: env.VITE_GF_FIELD_PHONE ?? "entry.0",
      email: env.VITE_GF_FIELD_EMAIL ?? "entry.0",
      vehicle: env.VITE_GF_FIELD_VEHICLE ?? "entry.0",
      size: env.VITE_GF_FIELD_SIZE ?? "entry.0",
      service: env.VITE_GF_FIELD_SERVICE ?? "entry.0",
      date: env.VITE_GF_FIELD_DATE ?? "entry.0",
      location: env.VITE_GF_FIELD_LOCATION ?? "entry.0",
      notes: env.VITE_GF_FIELD_NOTES ?? "entry.0",
    },
  },

  serviceAreas: [
    "Melkbosstrand",
    "Table View",
    "Bloubergstrand",
    "Century City",
    "Atlantic Seaboard",
    "Northern Suburbs",
  ],
};
```

A `.env.example` file lists every var with comments on where to find each value; `.env.local` is git-ignored.

### Booking form (no backend)

1. Custom-designed form → hidden `<iframe>` POST to `site.booking.googleFormAction` (your existing Google Form's `formResponse` URL). Google Forms auto-emails your Gmail on each submission.
2. If `googleFormAction` is empty at runtime → button switches to `mailto:site.email` with a pre-filled subject/body so bookings still land in Gmail.
3. Secondary "Book on WhatsApp" button → `https://wa.me/${site.whatsapp}?text=…` with form values pre-filled.
4. Client-side Zod validation, length caps, phone/email format, success + error states.

### Google Maps / Reviews

- Embedded iframe using `site.googleMapsEmbedSrc` (free, no API key).
- Reviews section: hardcoded featured quotes in `src/content/reviews.ts` (edit anytime), plus a "Read all reviews on Google" button → `site.googleReviewsUrl`, and "Leave a Review" → `site.googleWriteReviewUrl`.

### Image gallery (drop-in folder)

- `src/assets/gallery/` scanned with `import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })`.
- Drop a file, push to GitHub, Actions rebuilds → image appears. Zero code changes.
- Filename convention pairs Before/After: `01-before.jpg` + `01-after.jpg` render as split cards; solo files render as gallery tiles.

### Sections (Midnight Cinematic Luxe direction, locked)

Sticky nav → Hero (cinematic Melkbos + Table Mountain scene) → Services (6 cards) → Studio-on-Wheels split → Pricing (Sedan / SUV / Bakkie + Fleet card) → Before & After (folder-driven) → Gallery (folder-driven) → Reviews → FAQ → Contact (form + info + Map) → Footer → Floating WhatsApp button (brand blue).

### Technical

- Rewrite `src/routes/index.tsx` composing components from `src/components/site/`.
- Update `src/routes/__root.tsx` head with real SEO metadata + LocalBusiness JSON-LD (name/phone/email/areaServed all read from `site` config so metadata stays in sync).
- Add brand tokens to `src/styles.css` under `@theme`: `--color-brand-black #0A0A0B`, `--color-brand-blue #2E79FF`, `--color-brand-silver #94A3B8`; Inter loaded via `<link>` in root head.
- Smooth scroll + `IntersectionObserver` fade-and-rise reveal hook.
- Generate 3 images via imagegen → `src/assets/` (hero-melkbos.jpg, trailer-interior.jpg, plus a seed before/after pair in `src/assets/gallery/`).
- Fully mobile-first responsive; nav collapses to logo + Book Now pill on small screens.
- Accessibility: semantic sections with `aria-labelledby`, focus rings, alt text on every image.

### GitHub Pages deployment

The template currently builds for a server runtime (TanStack Start SSR). The site itself is 100% static in behavior. **When you're ready to deploy**, tell me and I'll add a GitHub Actions workflow (`.github/workflows/pages.yml`) that:

1. Sets Vite env vars from your Repo Secrets/Variables (`VITE_*`).
2. Runs a static prerender of `/`.
3. Publishes `dist/` to the `gh-pages` branch / GitHub Pages artifact.

This is a build-config change layered on top, not a rewrite — the app code stays the same.

### Files added

- `src/config/site.ts` — config with env fallbacks
- `.env.example` — documented env var list
- `.env.local` added to `.gitignore`
- `src/content/reviews.ts`, `src/content/services.ts`, `src/content/pricing.ts`, `src/content/faq.ts` — plain-text content you can edit
- `src/components/site/*` — Nav, Hero, Services, WhyUs, Pricing, BeforeAfter, Gallery, Reviews, FAQ, Contact, Footer, WhatsAppFab
- `src/hooks/use-reveal.ts` — scroll reveal
- `src/lib/booking.ts` — form → iframe/mailto/whatsapp helpers
- `src/assets/gallery/` — seeded with the generated before/after pair; drop more here anytime
