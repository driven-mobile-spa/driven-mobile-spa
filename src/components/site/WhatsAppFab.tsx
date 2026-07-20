import { site } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] grid size-14 place-items-center rounded-full bg-brand-blue text-white shadow-[0_10px_40px_-5px_rgba(46,121,255,0.6)] transition-transform hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span className="driven-pulse absolute inset-0 rounded-full opacity-40" />
      <MessageCircle className="relative size-6" />
    </a>
  );
}
