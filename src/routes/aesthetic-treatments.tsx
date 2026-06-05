import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import laser from "@/assets/laser-tech.jpg";

export const Route = createFileRoute("/aesthetic-treatments")({
  head: () => ({
    meta: [
      { title: "Aesthetic Treatments — Laser, Anti-Aging, Hydrafacial | SHS Belagavi" },
      {
        name: "description",
        content:
          "Laser hair reduction, anti-aging, skin tightening, chemical peels and Hydrafacial at Belagavi's premium aesthetic clinic.",
      },
      { property: "og:title", content: "Aesthetic Treatments — SHS Belagavi" },
      {
        property: "og:description",
        content: "Advanced aesthetic medicine — laser, anti-aging and rejuvenation.",
      },
      { property: "og:url", content: "/aesthetic-treatments" },
      { property: "og:image", content: laser },
      { name: "twitter:image", content: laser },
    ],
    links: [{ rel: "canonical", href: "/aesthetic-treatments" }],
  }),
  component: Aesthetic,
});

const PROCEDURES = [
  { t: "Laser Hair Reduction", d: "FDA-cleared diode and Nd:YAG lasers, safe for Indian skin." },
  { t: "Anti-Aging", d: "Botulinum toxin, fillers and biostimulators." },
  { t: "Skin Tightening", d: "RF, microfocused ultrasound and Profhilo protocols." },
  { t: "Chemical Peels", d: "Medical-grade peels for tone, texture and pigmentation." },
  { t: "Hydrafacial", d: "Signature multi-step cleanse, exfoliation and infusion." },
  { t: "Advanced Rejuvenation", d: "Mesotherapy, exosomes and combination protocols." },
];

function Aesthetic() {
  return (
    <>
      <PageHero
        eyebrow="Aesthetic Medicine"
        title={
          <>
            Refined results. <em className="text-primary not-italic">Never overdone.</em>
          </>
        }
        lede="Aesthetic medicine should look like nothing — just a better, brighter, more rested version of you."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            Book Consultation
          </Link>
          <a href="https://wa.me/919000000000" className="btn-outline">
            WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="bg-background py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCEDURES.map((p, i) => (
              <article
                key={p.t}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={laser}
                    alt={p.t}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <h2 className="mt-3 font-display text-xl">{p.t}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-secondary p-6">
            <p className="font-display text-2xl">Safe for Indian skin.</p>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Our protocols are selected and calibrated specifically for South Asian skin types.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
