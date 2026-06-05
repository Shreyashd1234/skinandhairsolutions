import { Link, useMatchRoute } from "@tanstack/react-router";
import { Home, Sparkles, Scissors, BookOpen, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  isPrimary?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/skin-treatments", label: "Skin", icon: Sparkles },
  { to: "/contact", label: "Book", icon: Phone, isPrimary: true },
  { to: "/hair-treatments", label: "Hair", icon: Scissors },
  { to: "/blog", label: "Blog", icon: BookOpen },
];

function NavTab({ to, label, icon: Icon }: NavItem) {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to, fuzzy: to === "/" ? false : true });

  return (
    <li>
      <Link to={to} className="group flex flex-col items-center gap-0.5 py-2 px-3">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
            isActive ? "bg-primary/10 scale-110" : "group-active:scale-95"
          }`}
        >
          <Icon
            className={`h-[19px] w-[19px] transition-all duration-200 ${
              isActive ? "text-primary" : "text-foreground/45"
            }`}
            strokeWidth={isActive ? 2.2 : 1.6}
          />
        </span>
        <span
          className={`text-[10px] font-medium transition-colors duration-200 ${
            isActive ? "text-primary" : "text-foreground/45"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

function PrimaryTab({ to, label, icon: Icon }: NavItem) {
  return (
    <li className="flex flex-col items-center -mt-5">
      <Link
        to={to}
        aria-label="Book Appointment"
        className="flex h-14 w-14 flex-col items-center justify-center rounded-full transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          background: "var(--burgundy)",
          boxShadow: "0 8px 32px -6px color-mix(in oklab, var(--burgundy) 60%, transparent)",
        }}
      >
        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
      </Link>
      <span className="mt-1 mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
        {label}
      </span>
    </li>
  );
}

export function MobileBottomBar() {
  return (
    <nav aria-label="Mobile bottom navigation" className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div
        className="border-t border-foreground/8 px-2"
        style={{
          background: "color-mix(in oklab, white 85%, transparent)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          paddingBottom: "env(safe-area-inset-bottom, 8px)",
        }}
      >
        <ul className="flex items-end justify-around">
          {NAV_ITEMS.map((item) =>
            item.isPrimary ? (
              <PrimaryTab key={item.to} {...item} />
            ) : (
              <NavTab key={item.to} {...item} />
            ),
          )}
        </ul>
      </div>
    </nav>
  );
}
