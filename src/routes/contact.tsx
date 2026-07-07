import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallCard } from "@/components/site/CallCTA";
import { SITE } from "@/lib/site";
import { Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Travel Support | ${SITE.name}` },
      { name: "description", content: `Reach Flight Reservation Support 24/7 at ${SITE.phoneDisplay} for refunds, cancellations, seat upgrades, exchanges, and new bookings.` },
      { property: "og:title", content: `Contact | ${SITE.name}` },
      { property: "og:description", content: `Call ${SITE.phoneDisplay} for 24/7 independent travel assistance.` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold">Contact travel support</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            One number, 24 hours a day. Speak with an independent travel assistance specialist about any airline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3 text-accent"><Phone className="h-5 w-5" /> Phone</div>
            <a href={SITE.phoneHref} className="mt-2 block font-display text-2xl font-bold text-brand-navy">
              {SITE.phoneDisplay}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">Available 24/7 · Holidays included</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3 text-accent"><Mail className="h-5 w-5" /> Email</div>
            <a href="mailto:support@flightreservation.help" className="mt-2 block font-semibold">support@flightreservation.help</a>
            <p className="mt-1 text-sm text-muted-foreground">Typical reply within 4 business hours</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3 text-accent"><Clock className="h-5 w-5" /> Hours</div>
            <div className="mt-2 font-semibold">Open 24/7</div>
            <p className="mt-1 text-sm text-muted-foreground">Independent travel assistance, every day of the year.</p>
          </div>
          <p className="text-[11px] text-muted-foreground">{SITE.disclosureLong}</p>
        </div>
        <CallCard context="Call now — we're online" />
      </section>
    </div>
  );
}
