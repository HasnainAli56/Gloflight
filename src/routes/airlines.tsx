import { createFileRoute, Link } from "@tanstack/react-router";
import { AIRLINES } from "@/data/airlines";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import { CallCard } from "@/components/site/CallCTA";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/airlines")({
  head: () => ({
    meta: [
      { title: `Airlines Directory | ${SITE.name}` },
      { name: "description", content: "Browse 40+ airlines for refund, cancellation, seat upgrade, exchange, new booking, flight status, and rebooking guides." },
      { property: "og:title", content: `Airlines Directory | ${SITE.name}` },
      { property: "og:description", content: "40+ global airlines with dedicated travel support guides for every common request." },
      { property: "og:url", content: "/airlines" },
    ],
    links: [{ rel: "canonical", href: "/airlines" }],
  }),
  component: AirlinesPage,
});

function AirlinesPage() {
  const byCountry = AIRLINES.reduce<Record<string, typeof AIRLINES>>((acc, a) => {
    (acc[a.country] ||= []).push(a);
    return acc;
  }, {});
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Airlines" }]} />
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-balance max-w-3xl">
            Travel support guides for 40+ airlines
          </h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Pick your carrier to access refund, cancellation, seat upgrade, exchange, new booking,
            flight status, and cancel-and-rebook guides.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 space-y-12">
        {Object.entries(byCountry).map(([country, list]) => (
          <div key={country}>
            <h2 className="font-display text-xl md:text-2xl font-bold border-b border-border pb-2">{country}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((a) => (
                <div key={a.slug} className="rounded-xl bg-card border border-border p-5 shadow-card">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono bg-brand-navy text-primary-foreground rounded px-1.5 py-0.5">{a.iata}</span>
                    <span className="text-muted-foreground">Hub: {a.hub}</span>
                  </div>
                  <div className="mt-2 font-semibold">{a.name}</div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{a.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/$service/$airline"
                        params={{ service: s.slug, airline: a.slug }}
                        className="text-[11px] px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-brand-navy hover:text-primary-foreground transition"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <CallCard />
      </section>
    </div>
  );
}
