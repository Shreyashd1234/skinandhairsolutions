import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function StickyCTAs() {
  return (
    <>
      <a
        href="https://wa.me/919000000000?text=Hi%20SHS%2C%20I%27d%20like%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp consultation"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <Link
        to="/contact"
        aria-label="Book appointment"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_-8px_color-mix(in_oklab,var(--burgundy)_60%,transparent)] md:hidden"
      >
        <Calendar className="h-4 w-4" /> Book
      </Link>
    </>
  );
}
