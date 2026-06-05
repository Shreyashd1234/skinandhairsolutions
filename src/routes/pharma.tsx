import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ShoppingBag, Heart, Star, Plus, Minus, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import pharma from "@/assets/pharma-products.jpg";

export const Route = createFileRoute("/pharma")({
  head: () => ({
    meta: [
      { title: "SHS Pharma — Clinical Skincare & Haircare Products" },
      {
        name: "description",
        content:
          "Shop SHS Pharma — a curated range of dermaceutical cleansers, serums, sunscreens and hair tonics formulated by SHS specialists.",
      },
      { property: "og:title", content: "Shop SHS Pharma — Clinical Skincare" },
      { property: "og:description", content: "Dermaceutical actives by SHS specialists." },
      { property: "og:url", content: "/pharma" },
      { property: "og:image", content: pharma },
      { name: "twitter:image", content: pharma },
    ],
    links: [{ rel: "canonical", href: "/pharma" }],
  }),
  component: Pharma,
});

type Product = {
  id: string;
  t: string;
  c: "Skin" | "Hair";
  b: string;
  u: string;
  i: string;
  price: number;
  mrp?: number;
  rating: number;
  reviews: number;
  badge?: string;
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    t: "Gentle Cleanser",
    c: "Skin",
    b: "Hydrating, non-stripping daily cleanse.",
    u: "AM / PM",
    i: "Glycerin, Panthenol",
    price: 690,
    mrp: 790,
    rating: 4.7,
    reviews: 128,
    badge: "Bestseller",
  },
  {
    id: "p2",
    t: "Brightening Serum",
    c: "Skin",
    b: "Fades dark spots, evens skin tone.",
    u: "AM",
    i: "Vitamin C, Niacinamide",
    price: 1490,
    mrp: 1690,
    rating: 4.8,
    reviews: 214,
  },
  {
    id: "p3",
    t: "Retinol Renewal",
    c: "Skin",
    b: "Smooths texture, refines pores.",
    u: "PM",
    i: "Encapsulated Retinol 0.3%",
    price: 1890,
    rating: 4.6,
    reviews: 96,
    badge: "New",
  },
  {
    id: "p4",
    t: "Mineral Sunscreen",
    c: "Skin",
    b: "Broad spectrum, no white cast.",
    u: "AM",
    i: "Zinc Oxide, Titanium Dioxide",
    price: 990,
    mrp: 1190,
    rating: 4.9,
    reviews: 342,
    badge: "Bestseller",
  },
  {
    id: "p5",
    t: "Hair Density Tonic",
    c: "Hair",
    b: "Strengthens follicles, reduces fall.",
    u: "Nightly",
    i: "Peptides, Biotin",
    price: 1690,
    rating: 4.5,
    reviews: 78,
  },
  {
    id: "p6",
    t: "Scalp Restore Shampoo",
    c: "Hair",
    b: "Balances oil, calms scalp.",
    u: "3× weekly",
    i: "Salicylic Acid, Zinc PCA",
    price: 890,
    mrp: 990,
    rating: 4.6,
    reviews: 154,
  },
];

const FILTERS = ["All", "Skin", "Hair"] as const;

function Pharma() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const add = (p: Product) => {
    setCart((c) => ({ ...c, [p.id]: (c[p.id] ?? 0) + 1 }));
    toast.success(`Added to cart — ${p.t}`);
  };
  const dec = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  const toggleWish = (id: string) => setWishlist((w) => ({ ...w, [id]: !w[id] }));

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);

  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.c === filter);

  return (
    <>
      <PageHero
        eyebrow="SHS Pharma · Shop"
        title={
          <>
            Clinical formulations, <em className="text-primary not-italic">designed in-house.</em>
          </>
        }
        lede="A focused range of dermaceutical actives, formulated to complement your in-clinic care."
      />

      <section className="bg-background pt-10 pb-24">
        <div className="container-x">
          {/* Filter + cart bar */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex rounded-full bg-secondary p-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-full border border-foreground/10 bg-card px-5 py-2.5 text-sm">
              <ShoppingBag className="h-4 w-4 text-primary" />
              <span className="font-medium">
                {cartCount} item{cartCount === 1 ? "" : "s"}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="font-display text-base text-primary">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mb-10 grid gap-3 rounded-2xl bg-secondary p-5 text-xs text-foreground/70 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" /> Free shipping over ₹1,499
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> 100% authentic, clinic-grade
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-primary" /> 7-day easy returns
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => {
              const qty = cart[p.id] ?? 0;
              const off = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
              return (
                <article
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={pharma}
                      alt={p.t}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-4 top-4 flex gap-2">
                      {p.badge && (
                        <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                          {p.badge}
                        </span>
                      )}
                      {off > 0 && (
                        <span className="rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal">
                          -{off}%
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => toggleWish(p.id)}
                      aria-label="Wishlist"
                      className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground/70 backdrop-blur transition-colors hover:text-primary"
                    >
                      <Heart
                        className={`h-4 w-4 ${wishlist[p.id] ? "fill-primary text-primary" : ""}`}
                      />
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                      {p.c}
                    </p>
                    <h2 className="mt-2 font-display text-xl">{p.t}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-foreground/70">
                      <span className="flex items-center gap-0.5 text-[var(--gold)]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${i < Math.round(p.rating) ? "fill-current" : ""}`}
                          />
                        ))}
                      </span>
                      <span className="font-medium">{p.rating}</span>
                      <span className="text-muted-foreground">({p.reviews})</span>
                    </div>

                    <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-foreground/10 pt-4 text-xs">
                      <div>
                        <dt className="text-muted-foreground">Use</dt>
                        <dd className="mt-0.5 font-medium">{p.u}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Actives</dt>
                        <dd className="mt-0.5 font-medium">{p.i}</dd>
                      </div>
                    </dl>

                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div>
                        <p className="font-display text-2xl text-primary">
                          ₹{p.price.toLocaleString("en-IN")}
                        </p>
                        {p.mrp && (
                          <p className="text-xs text-muted-foreground line-through">
                            ₹{p.mrp.toLocaleString("en-IN")}
                          </p>
                        )}
                      </div>
                      {qty === 0 ? (
                        <button
                          onClick={() => add(p)}
                          className="btn-primary !px-5 !py-2.5 text-xs"
                        >
                          <ShoppingBag className="h-4 w-4" /> Add to Cart
                        </button>
                      ) : (
                        <div className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground">
                          <button
                            onClick={() => dec(p.id)}
                            aria-label="Decrease"
                            className="grid h-10 w-10 place-items-center hover:bg-[var(--wine)] rounded-l-full"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-6 text-center text-sm font-medium">{qty}</span>
                          <button
                            onClick={() => add(p)}
                            aria-label="Increase"
                            className="grid h-10 w-10 place-items-center hover:bg-[var(--wine)] rounded-r-full"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
