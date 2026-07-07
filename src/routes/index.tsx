import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ShieldCheck, Clock, Headphones, Globe2, CheckCircle2 } from "lucide-react";
import heroJet from "@/assets/hero-jet.jpg";
import { SERVICES } from "@/data/services";
import { AIRLINES } from "@/data/airlines";
import { SITE } from "@/lib/site";
import { CallCard } from "@/components/site/CallCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | Refunds, Cancellations, Seat Upgrades & More` },
      { name: "description", content: "Independent 24/7 travel assistance for 40+ airlines. Get help with refunds, cancellations, seat upgrades, exchanges, new bookings, and live flight status." },
      { property: "og:title", content: `${SITE.name} | Independent Travel Assistance` },
      { property: "og:description", content: "24/7 help with airline refunds, cancellations, seat upgrades, exchanges and rebooking — for every major airline." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroJet} alt="Airliner above clouds at sunset" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/70 to-brand-sky/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium">
            <ShieldCheck className="h-3.5 w-3.5" /> Independent travel assistance · open 24/7
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-balance max-w-3xl">
            Refunds, changes, and upgrades — handled, on any airline.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90 text-balance">
            Whether your flight was cancelled, you need to rebook, or you're chasing a seat upgrade, our travel
            support specialists guide you through it — fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3.5 rounded-full shadow-cta hover:scale-[1.02] transition"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
            <Link
              to="/airlines"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-primary-foreground font-medium px-6 py-3.5 rounded-full"
            >
              Browse airlines <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-[11px] opacity-75 max-w-xl">{SITE.disclosureShort}</p>

          {/* Trust strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {[
              { icon: Clock, label: "24/7 Support" },
              { icon: Globe2, label: "40+ Airlines" },
              { icon: Headphones, label: "Live Agents" },
              { icon: CheckCircle2, label: "Easy Process" },
            ].map((b) => (
              <div key={b.label} className="rounded-xl bg-white/10 backdrop-blur px-4 py-3 flex items-center gap-2 text-sm">
                <b.icon className="h-4 w-4" /> {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Our Services</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">What can we help you with today?</h2>
          </div>
          <Link to="/airlines" className="text-sm font-semibold text-brand-navy hover:underline">
            See airline directory →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/$service"
              params={{ service: s.slug }}
              className="group rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elevated transition"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-brand text-primary-foreground grid place-items-center font-display text-lg shadow-cta">
                ✈
              </div>
              <div className="mt-4 font-display text-xl font-bold">{s.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <div className="mt-4 text-sm font-semibold text-accent inline-flex items-center gap-1">
                Get help <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Airline grid */}
      <section className="bg-gradient-sky border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">Airlines we support</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">40+ global carriers covered</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Pick your airline to see dedicated guides for refunds, cancellations, seat upgrades, exchanges, and more.
          </p>
          <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {AIRLINES.map((a) => (
              <Link
                key={a.slug}
                to="/$service/$airline"
                params={{ service: "refund", airline: a.slug }}
                className="group rounded-xl bg-card border border-border p-4 shadow-card hover:-translate-y-0.5 hover:shadow-elevated transition"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] bg-brand-navy text-primary-foreground rounded px-1.5 py-0.5">{a.iata}</span>
                  <span className="text-[11px] text-muted-foreground truncate">{a.country}</span>
                </div>
                <div className="mt-2 font-semibold text-sm leading-tight">{a.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Why travelers choose us</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Travel support without the hold music</h2>
            <p className="mt-4 text-muted-foreground">
              Our independent travel assistance specialists work alongside major airlines' policies so you don't
              have to decipher fare rules alone. One call, real answers, real options.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                "Live human agents, 24 hours a day",
                "Guidance for 40+ global airlines",
                "Clear breakdown of fees, timelines, and your rights",
                "Help with refunds, rebooking, exchanges, and seat upgrades",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <CallCard context="One call. Any airline. Real travel help." />
        </div>
      </section>
    </div>
  );
}
