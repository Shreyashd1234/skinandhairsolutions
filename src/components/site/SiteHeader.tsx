import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/shs-logo.svg.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skin-treatments", label: "Skin" },
  { to: "/hair-treatments", label: "Hair" },
  { to: "/aesthetic-treatments", label: "Aesthetic" },
  { to: "/pharma", label: "Pharma" },
  { to: "/gallery", label: "Results" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-foreground/5 py-3" : "py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Skin & Hair Solutions home">
          <img
            src={logoAsset.url}
            alt="SHS"
            className="h-10 w-auto md:h-11"
            width={44}
            height={44}
          />
          <span className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-base text-primary">Skin & Hair Solutions</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Belagavi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.slice(0, -1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-primary">
            Book Appointment
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="container-x mt-3 lg:hidden">
          <div className="rounded-2xl bg-card p-5 shadow-xl">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                    activeProps={{ className: "text-primary" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
