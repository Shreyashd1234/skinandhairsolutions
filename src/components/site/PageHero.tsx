import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: ReactNode; lede?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-secondary pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--gold)]/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="reveal mt-5 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lede}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
