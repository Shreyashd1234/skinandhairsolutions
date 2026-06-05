import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The SHS Journal — Skin & Hair Care Insights" },
      {
        name: "description",
        content:
          "Expert-written guides on skin care, hair care, seasonal protocols and dermatology education from SHS specialists.",
      },
      { property: "og:title", content: "The SHS Journal" },
      { property: "og:description", content: "Skin and hair insights from SHS specialists." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  {
    c: "Skin Care",
    t: "How to build a minimalist routine for acne-prone skin",
    d: "5 min read",
    e: "The fewer the actives, the clearer the results — a dermatology-led approach to acne.",
  },
  {
    c: "Hair Care",
    t: "Understanding hair fall: when to worry, when to act",
    d: "7 min read",
    e: "Daily shedding is normal — until it isn't. Here's how trichologists think about hair loss.",
  },
  {
    c: "Treatment Guides",
    t: "What to expect from PRP: a complete patient guide",
    d: "8 min read",
    e: "Sessions, downtime, results — everything you should know before your first session.",
  },
  {
    c: "Seasonal",
    t: "Monsoon skin care for South Indian humidity",
    d: "4 min read",
    e: "Humidity, fungal flares and the simple changes that protect your skin.",
  },
  {
    c: "Dermatology",
    t: "Pigmentation 101: melasma, PIH and sun damage",
    d: "6 min read",
    e: "Why pigmentation looks similar but needs very different treatment.",
  },
  {
    c: "Skin Care",
    t: "Sunscreen, decoded: SPF, PA and what really matters",
    d: "5 min read",
    e: "How to choose a sunscreen that works for Indian skin.",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Considered writing on <em className="text-primary not-italic">skin & hair.</em>
          </>
        }
        lede="Expert-written, evidence-based guidance from the specialists at SHS."
      />
      <section className="bg-background py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.t} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary" />
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                {p.c} · {p.d}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug group-hover:text-primary">
                {p.t}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.e}</p>
              <Link
                to="/blog"
                className="mt-5 link-underline self-start text-sm font-medium text-primary"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
