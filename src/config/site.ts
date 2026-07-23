/**
 * Single source of truth for site configuration.
 *
 * Locally: edit values below OR set them in `.env.local` (see `.env.example`).
 * On GitHub Pages: set the same VITE_* names as Repository Secrets/Variables;
 * the GitHub Actions build injects them into `import.meta.env` at build time.
 */

const env = import.meta.env;

export const site = {
  businessName: (env.VITE_BUSINESS_NAME as string) ?? "Driven Mobilespa",
  tagline: "Premium Mobile Car Wash & Detailing — Cape Town",

  phone: (env.VITE_BUSINESS_PHONE as string) ?? "+27 67 148 3241",
  /** International format, no leading + (e.g. "27821234567"). */
  whatsapp: (env.VITE_WHATSAPP_NUMBER as string) ?? "27832281437",
  email: (env.VITE_BUSINESS_EMAIL as string) ?? "contact@driven-mobilespa.com",
  address: (env.VITE_BUSINESS_ADDRESS as string) ?? "Melkbosstrand, Cape Town",
  hours: "Mon – Sat · 07:00 – 18:00",

  /** Paste from your Google Business Profile. */
  googleReviewsUrl: (env.VITE_GOOGLE_REVIEWS_URL as string) ?? "",
  /** Deep link from Google Business Profile → "Get more reviews". */
  googleWriteReviewUrl: (env.VITE_GOOGLE_WRITE_REVIEW_URL as string) ?? "",
  /**
   * From Google Maps → Share → Embed a map → copy the `src` value.
   * Free, no API key required.
   */
  googleMapsEmbedSrc:
    (env.VITE_GOOGLE_MAPS_EMBED_SRC as string) ??
    "https://www.google.com/maps?q=Melkbosstrand,Cape+Town&output=embed",

  socials: {
    instagram: (env.VITE_INSTAGRAM_URL as string) ?? "",
    facebook: (env.VITE_FACEBOOK_URL as string) ?? "",
  },

  booking: {
    /**
     * Your Google Form's `formResponse` URL. When empty, the booking form
     * falls back to `mailto:` so submissions still reach your inbox.
     * Find it: open your form in edit mode → view page source → search for
     * "formResponse".
     */
    googleFormAction: (env.VITE_GOOGLE_FORM_ACTION as string) ?? "",
    /**
     * Field IDs from your Google Form. In the form's HTML source, each
     * input has a `name="entry.NNNNNNNNN"` — paste those here.
     */
    fields: {
      name: (env.VITE_GF_FIELD_NAME as string) ?? "entry.0",
      phone: (env.VITE_GF_FIELD_PHONE as string) ?? "entry.0",
      email: (env.VITE_GF_FIELD_EMAIL as string) ?? "entry.0",
      vehicle: (env.VITE_GF_FIELD_VEHICLE as string) ?? "entry.0",
      size: (env.VITE_GF_FIELD_SIZE as string) ?? "entry.0",
      service: (env.VITE_GF_FIELD_SERVICE as string) ?? "entry.0",
      date: (env.VITE_GF_FIELD_DATE as string) ?? "entry.0",
      location: (env.VITE_GF_FIELD_LOCATION as string) ?? "entry.0",
      notes: (env.VITE_GF_FIELD_NOTES as string) ?? "entry.0",
    },
  },

  serviceAreas: [
    "Melkbosstrand",
    "Table View",
    "Bloubergstrand",
    "Century City",
    "Atlantic Seaboard",
    "Northern Suburbs",
    "Southern Suburbs",
    "Cape Town CBD",
  ],
};

export const siteUrl = "https://driven-mobilespa.com";
