import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { site, siteUrl } from "../config/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold tracking-tight">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-brand-silver">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-brand-silver">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: site.businessName,
  description:
    "Premium mobile car wash and detailing across Cape Town. We come to your home, office, or fetch and return your vehicle.",
  telephone: site.phone,
  email: site.email,
  url: siteUrl,
  areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melkbosstrand",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  priceRange: "R450 – R3,500",
  openingHours: "Mo-Sa 07:00-18:00",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0b" },
      { title: "Driven Mobilespa — Premium Mobile Car Wash & Detailing · Cape Town" },
      {
        name: "description",
        content:
          "Driven Mobilespa brings professional car wash and detailing to your home, office, or fleet — anywhere in Cape Town. Book online, or let us collect and return your vehicle.",
      },
      {
        name: "keywords",
        content:
          "mobile car wash Cape Town, mobile detailing Cape Town, Melkbosstrand car wash, ceramic coating Cape Town, fleet detailing, collect and return car wash",
      },
      { property: "og:title", content: "Driven Mobilespa — We Come To You, Anywhere in Cape Town" },
      {
        property: "og:description",
        content:
          "Premium mobile car wash and detailing across Cape Town. Home, corporate, and fleet.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Driven Mobilespa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Driven Mobilespa — Cape Town Mobile Detailing" },
      {
        name: "twitter:description",
        content:
          "Premium mobile car wash and detailing across Cape Town. We come to you.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
