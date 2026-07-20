import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-md bg-brand-blue text-sm font-black italic text-white">
              D
            </span>
            <div>
              <div className="text-sm font-extrabold uppercase italic tracking-tight">{site.businessName}</div>
              <div className="text-xs text-brand-silver">Premium mobile car care · Cape Town</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-widest text-brand-silver">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-3 border-t border-white/5 pt-6 text-[10px] uppercase tracking-widest text-brand-silver sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.businessName}. All rights reserved.</p>
          <div className="flex gap-5">
            {site.socials.instagram && <a href={site.socials.instagram} className="hover:text-white">Instagram</a>}
            {site.socials.facebook && <a href={site.socials.facebook} className="hover:text-white">Facebook</a>}
            {site.googleReviewsUrl && <a href={site.googleReviewsUrl} className="hover:text-white">Google</a>}
          </div>
        </div>
      </div>
    </footer>
  );
}
