import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import hair from "@/assets/hair-care.jpg";

export const Route = createFileRoute("/hair-treatments")({
  head: () => ({
    meta: [
      { title: "Hair Specialist in Belagavi — Hair Loss & PRP Treatment | SHS" },
      { name: "description", content: "Hair fall, baldness, PRP therapy, regrowth programmes and alopecia management — trichology-led care at SHS Belagavi." },
      { property: "og:title", content: "Hair Treatments — SHS Belagavi" },
      { property: "og:description", content: "Trichology-led hair fall and regrowth programmes." },
      { property: "og:url", content: "/hair-treatments" },
      { property: "og:image", content: hair },
      { name: "twitter:image", content: hair },
    ],
    links: [{ rel: "canonical", href: "/hair-treatments" }],
  }),
  component: Hair,
});

const SERVICES = [
  { t: "Hair Fall Treatment", d: "Diagnose root causes and arrest active shedding." },
  { t: "Baldness Solutions", d: "Medical, surgical and combination protocols." },
  { t: "PRP Therapy", d: "Autologous platelet-rich plasma for regrowth." },
  { t: "Hair Regrowth", d: "Multi-month structured regrowth programmes." },
  { t: "Alopecia Management", d: "Specialist care for autoimmune hair loss." },
  { t: "Scalp Analysis", d: "Trichoscopy-led diagnosis and monitoring." },
];

function Hair() {
  return (
    <>
      <PageHero
        eyebrow="Trichology · Belagavi"
        title={<>Stronger hair, <em className="text-primary not-italic">restored confidence.</em></>}
        lede="From your first scalp analysis to a structured regrowth journey — trichology-led care, designed around evidence and your goals."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Book Hair Consultation</Link>
          <a href="https://wa.me/919000000000" className="btn-outline">WhatsApp</a>
        </div>
      </PageHero>

      <section className="bg-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <img src={hair} alt="Healthy hair after trichology treatment" width={1200} height={1500} className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Hair Services</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Built around evidence, delivered with care.</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-foreground/10 sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <article key={s.t} className="group bg-card p-7">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">Enquire <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
