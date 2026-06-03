import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SHS — Book an Appointment in Belagavi" },
      { name: "description", content: "Book a consultation at Skin & Hair Solutions, Belagavi. Phone, email, WhatsApp, location and clinic hours." },
      { property: "og:title", content: "Contact SHS — Belagavi" },
      { property: "og:description", content: "Book an appointment." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20).regex(/^[+\d\s-]+$/),
  email: z.string().trim().email().max(160),
  concern: z.string().trim().min(2).max(120),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      setStatus("err");
      return;
    }
    setStatus("ok");
    setError(null);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title={<>Begin your <em className="text-primary not-italic">consultation.</em></>}
        lede="Share a few details and our team will confirm your appointment within working hours."
      />
      <section className="bg-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl border border-foreground/10 bg-card p-8 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" type="text" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Primary concern" name="concern" type="text" placeholder="e.g. Hair fall, Acne" required />
              </div>
              <label className="mt-5 block">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</span>
                <textarea name="message" rows={4} className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary">Request Appointment</button>
                <a href="https://wa.me/919000000000" className="btn-outline"><MessageCircle className="h-4 w-4" /> WhatsApp Instead</a>
              </div>
              {status === "ok" && <p className="mt-5 text-sm text-emerald-700">Thank you — we'll be in touch shortly.</p>}
              {status === "err" && <p className="mt-5 text-sm text-destructive">{error}</p>}
            </form>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-secondary p-8">
              <h2 className="font-display text-2xl">Clinic</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Tilakwadi, Belagavi, Karnataka 590006</li>
                <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 90000 00000</li>
                <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /> care@skinandhairsolutions.in</li>
                <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 text-primary" /> Mon – Sat · 10:00 – 19:30</li>
              </ul>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <iframe
                  title="SHS Belagavi"
                  src="https://www.google.com/maps?q=Tilakwadi%20Belagavi&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-xs text-muted-foreground">For medical emergencies, please call your nearest hospital.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      <input {...props} className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
    </label>
  );
}
