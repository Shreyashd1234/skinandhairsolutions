import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import pharma from "@/assets/pharma-products.jpg";

export const Route = createFileRoute("/pharma")({
  head: () => ({
    meta: [
      { title: "SHS Pharma — Clinical Skincare & Haircare Products" },
      { name: "description", content: "A curated range of dermaceutical actives — cleansers, serums, sunscreens and hair tonics formulated by SHS specialists." },
      { property: "og:title", content: "SHS Pharma — Clinical Skincare" },
      { property: "og:description", content: "Dermaceutical actives by SHS specialists." },
      { property: "og:url", content: "/pharma" },
      { property: "og:image", content: pharma },
      { name: "twitter:image", content: pharma },
    ],
    links: [{ rel: "canonical", href: "/pharma" }],
  }),
  component: Pharma,
});

const PRODUCTS = [
  { t: "Gentle Cleanser", c: "Skin", b: "Hydrating, non-stripping daily cleanse.", u: "AM / PM", i: "Glycerin, Panthenol" },
  { t: "Brightening Serum", c: "Skin", b: "Fades dark spots, evens skin tone.", u: "AM", i: "Vitamin C, Niacinamide" },
  { t: "Retinol Renewal", c: "Skin", b: "Smooths texture, refines pores.", u: "PM", i: "Encapsulated Retinol 0.3%" },
  { t: "Mineral Sunscreen", c: "Skin", b: "Broad spectrum, no white cast.", u: "AM", i: "Zinc Oxide, Titanium Dioxide" },
  { t: "Hair Density Tonic", c: "Hair", b: "Strengthens follicles, reduces fall.", u: "Nightly", i: "Peptides, Biotin" },
  { t: "Scalp Restore Shampoo", c: "Hair", b: "Balances oil, calms scalp.", u: "3× weekly", i: "Salicylic Acid, Zinc PCA" },
];

function Pharma() {
  return (
    <>
      <PageHero
        eyebrow="SHS Pharma"
        title={<>Clinical formulations, <em className="text-primary not-italic">designed in-house.</em></>}
        lede="A focused range of dermaceutical actives, formulated to complement your in-clinic care."
      />
      <section className="bg-background py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.t} className="group overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-shadow hover:shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={pharma} alt={p.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-7">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">{p.c}</p>
                  <h2 className="mt-3 font-display text-2xl">{p.t}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-foreground/10 pt-5 text-xs">
                    <div><dt className="text-muted-foreground">Use</dt><dd className="mt-1 font-medium">{p.u}</dd></div>
                    <div><dt className="text-muted-foreground">Key Actives</dt><dd className="mt-1 font-medium">{p.i}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
