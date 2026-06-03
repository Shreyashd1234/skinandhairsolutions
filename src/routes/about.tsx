import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import doctor from "@/assets/doctor.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import laser from "@/assets/laser-tech.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SHS — Belagavi's Premium Skin & Hair Specialists" },
      { name: "description", content: "Meet the specialists, technology and philosophy behind Skin & Hair Solutions — a modern dermatology and trichology clinic in Belagavi." },
      { property: "og:title", content: "About Skin & Hair Solutions" },
      { property: "og:description", content: "Specialist-led dermatology and trichology in Belagavi." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: doctor },
      { name: "twitter:image", content: doctor },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { t: "Integrity", d: "Honest, evidence-based recommendations — never upselling." },
  { t: "Expertise", d: "A team trained in modern dermatology and trichology." },
  { t: "Care", d: "Treatment plans built around you, not around protocols." },
  { t: "Innovation", d: "Globally certified equipment and current best practice." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About SHS"
        title={<>Belagavi's home for <em className="text-primary not-italic">trusted skin & hair care.</em></>}
        lede="A modern medical practice built on dermatology expertise, advanced technology and quiet, considered design — for patients who expect more."
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <img src={doctor} alt="Lead dermatologist at SHS" width={1100} height={1400} className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A clinic founded on the belief that good medicine deserves great design.</h2>
            <p className="mt-6 text-muted-foreground">Skin & Hair Solutions was founded to bring metro-grade dermatology and trichology to Belagavi — combining medical rigour with the warmth, comfort and discretion of a premium hospitality experience.</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">To deliver dermatology and trichology of the highest international standard, accessible to every patient in North Karnataka.</p>
              </div>
              <div>
                <h3 className="font-display text-2xl">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">To be the most trusted name in skin and hair medicine across the region — defined by results, integrity and refinement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige py-24">
        <div className="container-x">
          <p className="eyebrow">Our Values</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">Four principles shape every consultation.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.t} className="bg-card p-8">
                <p className="font-display text-3xl text-primary">0{i + 1}</p>
                <p className="mt-8 font-display text-xl">{v.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Infrastructure</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A clinic engineered for clinical precision.</h2>
            <p className="mt-5 text-muted-foreground">Globally certified lasers, sterile procedure rooms, dermatoscopy, trichoscopy and a curated patient experience from arrival to aftercare.</p>
            <ul className="mt-10 space-y-3 text-sm">
              {["Globally certified medical lasers", "High-resolution dermatoscopy & trichoscopy", "Dedicated sterile procedure suites", "Specialist consultation rooms"].map((x) => (
                <li key={x} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 lg:col-span-7 lg:grid-cols-2">
            <img src={clinic} alt="Clinic interior" width={1600} height={1100} className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
            <img src={laser} alt="Advanced laser equipment" width={1200} height={1400} className="aspect-square w-full rounded-2xl object-cover lg:mt-12" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
