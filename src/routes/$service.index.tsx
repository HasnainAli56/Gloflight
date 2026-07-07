import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES_BY_SLUG } from "@/data/services";
import { AIRLINES } from "@/data/airlines";
import { CallCard } from "@/components/site/CallCTA";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/$service/")({
  beforeLoad: ({ params }) => {
    if (!SERVICES_BY_SLUG[params.service]) throw notFound();
  },
  head: ({ params }) => {
    const s = SERVICES_BY_SLUG[params.service];
    if (!s) return { meta: [] };
    return { links: [{ rel: "canonical", href: `/${params.service}` }] };
  },
  component: ServiceIndex,
});

function ServiceIndex() {
  const { service } = Route.useParams();
  const s = SERVICES_BY_SLUG[service]!;
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: s.name }]} />
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-balance max-w-3xl">
            {s.name} help for every airline
          </h1>
          <p className="mt-3 max-w-2xl opacity-90">{s.hero}</p>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-5 py-3 rounded-full shadow-cta"
          >
            Call {SITE.phoneDisplay}
          </a>
          <p className="mt-3 text-[11px] opacity-75">{SITE.disclosureShort}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold">Choose your airline</h2>
        <p className="mt-2 text-muted-foreground">Get a dedicated {s.name.toLowerCase()} guide for your carrier.</p>
        <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {AIRLINES.map((a) => (
            <Link
              key={a.slug}
              to="/$service/$airline"
              params={{ service: s.slug, airline: a.slug }}
              className="group rounded-xl bg-card border border-border p-4 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="font-mono bg-brand-navy text-primary-foreground rounded px-1.5 py-0.5">{a.iata}</span>
                <span>{a.country}</span>
              </div>
              <div className="mt-2 font-semibold text-sm leading-tight">{a.name}</div>
              <div className="mt-3 text-[12px] text-accent font-semibold inline-flex items-center gap-1">
                {s.name} guide <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <CallCard context={`Need ${s.name.toLowerCase()} help right now?`} />
        </div>
      </section>
    </div>
  );
}
