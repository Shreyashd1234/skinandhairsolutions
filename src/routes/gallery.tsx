import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import hero from "@/assets/hero-skin.jpg";
import hair from "@/assets/hair-care.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import laser from "@/assets/laser-tech.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Results — SHS Belagavi" },
      { name: "description", content: "Real patient transformations from SHS — acne, pigmentation, hair loss and scar treatments. Drag to compare." },
      { property: "og:title", content: "Before & After Gallery — SHS" },
      { property: "og:description", content: "Real patient transformations." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const ITEMS = [
  { cat: "Acne", before: hero, after: hair, l: "Acne clearance — 12 weeks" },
  { cat: "Pigmentation", before: clinic, after: hero, l: "Melasma — 16 weeks" },
  { cat: "Hair Loss", before: hair, after: clinic, l: "PRP regrowth — 6 months" },
  { cat: "Scars", before: laser, after: hero, l: "Acne scars — 4 sessions" },
  { cat: "Acne", before: hair, after: hero, l: "Hormonal acne — 10 weeks" },
  { cat: "Pigmentation", before: laser, after: clinic, l: "Sun damage — 12 weeks" },
];

const FILTERS = ["All", "Acne", "Pigmentation", "Hair Loss", "Scars"] as const;

function Gallery() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Real Results"
        title={<>Transformations, <em className="text-primary not-italic">honestly shown.</em></>}
        lede="Every result is from a real patient on a real protocol. Drag the slider to compare."
      />
      <section className="bg-background py-24">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${active === f ? "border-primary bg-primary text-primary-foreground" : "border-foreground/15 hover:border-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((i, idx) => (
              <figure key={idx}>
                <BeforeAfter before={i.before} after={i.after} label={i.cat} />
                <figcaption className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-medium">{i.l}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{i.cat}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
