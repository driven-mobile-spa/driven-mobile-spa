# Driven Mobilespa

Premium mobile car wash & detailing website for Cape Town. Built with React, Vite, Tailwind CSS, and deployed to GitHub Pages.

## Quick Start

### Using npm

```bash
npm install
npm run dev
```

### Using bun

```bash
bun install
bun run dev
```

The site runs at **http://localhost:5173**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (http://localhost:5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your details:

```bash
cp .env.example .env.local
```

All variables use the `VITE_` prefix so they are bundled into the static site at build time.

### Business Identity

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BUSINESS_NAME` | Business name | `Driven Mobilespa` |
| `VITE_BUSINESS_PHONE` | Display phone number | `+27 82 000 0000` |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number (international, no +) | `27820000000` |
| `VITE_BUSINESS_EMAIL` | Contact email | `bookings@driven-mobilespa.com` |
| `VITE_BUSINESS_ADDRESS` | Business address | `Melkbosstrand, Cape Town, 7441` |

### Google Business Profile

| Variable | Description |
|----------|-------------|
| `VITE_GOOGLE_REVIEWS_URL` | Link to your Google reviews |
| `VITE_GOOGLE_WRITE_REVIEW_URL` | Deep link to leave a review |
| `VITE_GOOGLE_MAPS_EMBED_SRC` | Google Maps embed `src` URL |

### Socials

| Variable | Description |
|----------|-------------|
| `VITE_INSTAGRAM_URL` | Instagram profile URL |
| `VITE_FACEBOOK_URL` | Facebook page URL |

### Google Forms Booking Bridge

The booking form can submit to a Google Form. To set this up:

1. Create a Google Form with fields matching the booking form (name, phone, email, vehicle, size, service, date, location, notes)
2. Open the form in edit mode, view page source, and search for `formResponse` to get the form action URL
3. Each input has a `name="entry.NNNNNNNNN"` - note these entry IDs

| Variable | Description |
|----------|-------------|
| `VITE_GOOGLE_FORM_ACTION` | Full `formResponse` URL |
| `VITE_GF_FIELD_NAME` | Entry ID for name field |
| `VITE_GF_FIELD_PHONE` | Entry ID for phone field |
| `VITE_GF_FIELD_EMAIL` | Entry ID for email field |
| `VITE_GF_FIELD_VEHICLE` | Entry ID for vehicle field |
| `VITE_GF_FIELD_SIZE` | Entry ID for size field |
| `VITE_GF_FIELD_SERVICE` | Entry ID for service field |
| `VITE_GF_FIELD_DATE` | Entry ID for date field |
| `VITE_GF_FIELD_LOCATION` | Entry ID for location field |
| `VITE_GF_FIELD_NOTES` | Entry ID for notes field |

**When Google Forms is not configured**, the booking form falls back to:
- Opening the user's email client with a pre-filled booking request (`mailto:`)
- A "Book on WhatsApp" button that opens WhatsApp with a pre-filled message

## Booking Form Flow

The contact section provides three ways to submit a booking:

1. **Google Form** (if configured) - silently POSTs to your Google Form via hidden fetch
2. **Email fallback** - opens the user's mail client with a pre-filled booking request to your email
3. **WhatsApp** - opens WhatsApp with a pre-filled message to your business number

## Deploying to GitHub Pages

### Setup

1. Push the `main` branch to GitHub
2. Go to **Settings > Pages** and set the source to **GitHub Actions**
3. Add your environment variables as **Repository Variables** (Settings > Secrets and variables > Actions > Variables):
   - Add all `VITE_*` variables from `.env.example` with your real values

### How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`:

1. Checks out the code
2. Installs dependencies with `npm ci`
3. Builds the site with `npm run build` (which also generates `404.html` for SPA routing)
4. Deploys to GitHub Pages

The site will be available at: `https://<username>.github.io/driven-mobile-spa/`

### SPA Routing on GitHub Pages

GitHub Pages doesn't support client-side routing natively. This project handles it with:

- **`public/404.html`** - generated at build time as a copy of `index.html`, so any unknown route loads the SPA
- **`BrowserRouter` with `basename`** - React Router uses `/driven-mobile-spa` as the base path in production
- **Scroll-to-top** - handles hash navigation between sections

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (bundler & dev server)
- **Tailwind CSS 4** (styling)
- **React Router DOM 7** (client-side routing)
- **Zod** (form validation)
- **Lucide React** (icons)
- **shadcn/ui** components (Radix UI primitives)

## Project Structure

```
src/
  components/
    site/          # Site-specific components (Nav, Hero, Services, etc.)
    ui/            # shadcn/ui reusable primitives
  config/
    site.ts        # Central configuration (reads VITE_* env vars)
  content/
    faq.ts         # FAQ data
    pricing.ts     # Pricing tiers
    reviews.ts     # Customer reviews
    services.ts    # Service catalog
  hooks/
    use-reveal.ts  # Scroll-reveal animation hook
  layouts/
    AppLayout.tsx  # Global layout with IntersectionObserver
  lib/
    booking.ts     # Booking form schema + submission helpers
    gallery.ts     # Auto-scan gallery images
    utils.ts       # cn() utility
  pages/
    HomePage.tsx   # Home page (all sections)
    AboutPage.tsx  # About page
  styles.css       # Global styles + design tokens
  App.tsx          # Route definitions
  main.tsx         # App entry point
```

## Adding Gallery Photos

Drop images into `src/assets/gallery/`. Naming convention:

- **Before/After pairs**: `NN-before.jpg` + `NN-after.jpg` (e.g., `01-before.jpg`, `01-after.jpg`)
- **Standalone tiles**: any other filename (e.g., `ceramic-coating.jpg`)

They appear in the Gallery section automatically on the next build.
