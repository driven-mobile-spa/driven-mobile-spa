import { site } from "@/config/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/about", label: "About", hash: undefined },
  { to: "/", label: "Fleet", hash: "fleet" },
  { to: "/", label: "Services", hash: "services" },
  { to: "/", label: "Pricing", hash: "pricing" },
  { to: "/", label: "Gallery", hash: "gallery" },
  { to: "/", label: "Reviews", hash: "reviews" },
  { to: "/", label: "FAQ", hash: "faq" },
  { to: "/", label: "Contact", hash: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-brand-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand-blue text-sm font-black italic tracking-tighter text-white">
            D
          </span>
          <span className="truncate text-base font-extrabold uppercase italic tracking-tight sm:text-lg">
            {site.businessName.split(" ")[0]}{" "}
            <span className="text-brand-blue">{site.businessName.split(" ").slice(1).join(" ")}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-brand-silver md:flex">
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                activeProps={{ className: "text-white" }}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="rounded-full bg-brand-blue px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white shadow-[0_0_24px_rgba(46,121,255,0.35)] transition-all hover:brightness-110 sm:px-6 sm:py-2.5"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-brand-black/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) =>
              l.hash ? (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-brand-silver transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-brand-silver transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
