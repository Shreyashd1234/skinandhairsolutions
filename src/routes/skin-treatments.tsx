import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-skin.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import laser from "@/assets/laser-tech.jpg";
import pharma from "@/assets/pharma-products.jpg";

export const Route = createFileRoute("/skin-treatments")({
  head: () => ({
    meta: [
      { title: "Skin Specialist in Belagavi — Dermatology Clinic | SHS" },
      { name: "description", content: "Acne, pigmentation, melasma, psoriasis, eczema, vitiligo, scars and rejuvenation. Premium dermatology treatments in Belagavi by SHS specialists." },
      { property: "og:title", content: "Skin Treatments — SHS Belagavi" },
      { property: "og:description", content: "Advanced dermatology treatments for every skin concern." },
      { property: "og:url", content: "/skin-treatments" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/skin-treatments" }],
  }),
  component: Skin,
});

const TREATMENTS = [
  { t: "Acne Treatment", d: "Medical-grade protocols for active acne and post-acne marks.", img: hero },
  { t: "Pigmentation", d: "Advanced topical and laser therapies for uneven tone.", img: laser },
  { t: "Melasma", d: "Specialist multi-modal care for stubborn melasma.", img: hero },
  { t: "Psoriasis", d: "Long-term medical management and biologics.", img: clinic },
  { t: "Eczema", d: "Calming, restoring protocols for sensitive skin.", img: pharma },
  { t: "Vitiligo", d: "Phototherapy and surgical options for re-pigmentation.", img: laser },
  { t: "Scar Treatment", d: "Microneedling, lasers and fillers for visible scars.", img: clinic },
  { t: "Skin Rejuvenation", d: "Hydrafacial, mesotherapy and glow protocols.", img: hero },
];

function Skin() {
  return (
    <>
      <PageHero
        eyebrow="Dermatology · Belagavi"
        title={<>Healthy skin, beautifully <em className="text-primary not-italic">restored.</em></>}
        lede="From medical dermatology to aesthetic rejuvenation — every protocol is built on diagnosis, science and your individual goals."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Book Skin Consultation</Link>
          <a href="https://wa.me/919000000000" className="btn-outline">WhatsApp</a>
        </div>
      </PageHero>

      <section className="bg-background py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TREATMENTS.map((t, i) => (
              <article key={t.t} className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={t.img} alt={t.t} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <h2 className="mt-3 font-display text-xl">{t.t}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Enquire <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">Belagavi's Trusted Dermatology Clinic</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Quietly confident. Clinically rigorous.</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">Whether you're managing a long-term condition or seeking elective rejuvenation, you'll work with a specialist who genuinely listens — and a clinic equipped to deliver.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-card p-8 shadow-xl">
              <p className="font-display text-3xl">Not sure where to start?</p>
              <p className="mt-3 text-sm text-muted-foreground">Share your concern via WhatsApp and our team will recommend the right consultation.</p>
              <a href="https://wa.me/919000000000" className="btn-primary mt-8 w-full">Talk to us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
