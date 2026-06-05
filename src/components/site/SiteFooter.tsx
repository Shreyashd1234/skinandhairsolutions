import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div>
              <div className="font-display text-2xl">Skin & Hair Solutions</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-background/60">
                Belagavi
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
              North Karnataka's premium destination for dermatology, trichology and aesthetic
              medicine — combining scientific expertise with personalised, results-driven care.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--gold)]">
              Care
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-background/80">
              <li>
                <Link to="/skin-treatments" className="link-underline">
                  Skin Treatments
                </Link>
              </li>
              <li>
                <Link to="/hair-treatments" className="link-underline">
                  Hair Treatments
                </Link>
              </li>
              <li>
                <Link to="/aesthetic-treatments" className="link-underline">
                  Aesthetic
                </Link>
              </li>
              <li>
                <Link to="/pharma" className="link-underline">
                  SHS Pharma
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="link-underline">
                  Before & After
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--gold)]">
              Visit
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-background/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" /> Tilakwadi,
                Belagavi, Karnataka 590006
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" /> +91 90000 00000
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />{" "}
                care@skinandhairsolutions.in
              </li>
            </ul>
            <p className="mt-6 text-xs text-background/50">
              Mon – Sat · 10:00 — 19:30 · Sun by appointment
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Skin & Hair Solutions. All rights reserved.</p>
          <p>Designed for trust, built for results.</p>
        </div>
      </div>
    </footer>
  );
}
