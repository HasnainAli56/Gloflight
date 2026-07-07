import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, SERVICES_BY_SLUG } from "@/data/services";
import { AIRLINES, AIRLINES_BY_SLUG } from "@/data/airlines";
import { SITE } from "@/lib/site";
import { CallCard } from "@/components/site/CallCTA";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CheckCircle2, Clock, Wallet, AlertTriangle, Lightbulb, Phone, ListChecks } from "lucide-react";

export const Route = createFileRoute("/$service/$airline")({
  beforeLoad: ({ params }) => {
    if (!SERVICES_BY_SLUG[params.service] || !AIRLINES_BY_SLUG[params.airline]) throw notFound();
  },
  head: ({ params }) => {
    const s = SERVICES_BY_SLUG[params.service];
    const a = AIRLINES_BY_SLUG[params.airline];
    if (!s || !a) return { meta: [] };
    const title = `${a.name} ${s.name} Guide | ${SITE.name}`;
    const desc = `How to ${s.verb} on ${a.name} — step-by-step process, eligibility, fees, processing time, FAQs and 24/7 travel support assistance.`;
    const url = `/${params.service}/${params.airline}`;
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q(a.name),
        acceptedAnswer: { "@type": "Answer", text: f.a(a.name) },
      })),
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: s.name, item: `/${s.slug}` },
        { "@type": "ListItem", position: 3, name: a.name, item: url },
      ],
    };
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faq) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      ],
    };
  },
  component: ServiceAirlinePage,
});

function Section({ id, title, icon: Icon, children }: { id: string; title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-brand text-primary-foreground grid place-items-center shadow-cta">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      <div className="mt-5 text-[15px] leading-relaxed text-foreground/90 space-y-4">{children}</div>
    </section>
  );
}

function ServiceAirlinePage() {
  const { service, airline } = Route.useParams();
  const s = SERVICES_BY_SLUG[service]!;
  const a = AIRLINES_BY_SLUG[airline]!;

  const otherServices = SERVICES.filter((x) => x.slug !== s.slug);
  const otherAirlines = AIRLINES.filter((x) => x.slug !== a.slug).slice(0, 8);

  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: s.name, to: "/$service", params: { service: s.slug } },
              { label: a.name },
            ]}
          />
          <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium">
                <span className="font-mono">{a.iata}</span> · {a.country} · {a.hub}
              </div>
              <h1 className="mt-3 font-display text-3xl md:text-5xl font-extrabold text-balance max-w-3xl">
                {a.name} {s.name} Guide
              </h1>
              <p className="mt-3 max-w-2xl opacity-90 text-balance">
                Everything you need to {s.verb} on {a.name} — clear steps, timelines, fees, and live travel
                support if you need a human.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-5 py-3 rounded-full shadow-cta"
                >
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
                <a href="#steps" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full font-medium">
                  See the steps
                </a>
              </div>
              <p className="mt-3 text-[11px] opacity-75 max-w-xl">{SITE.disclosureShort}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-14 min-w-0">
          {/* Overview */}
          <Section id="overview" title="Overview" icon={ListChecks}>
            <p>
              {a.blurb} For travelers needing to {s.verb}, {a.name} follows industry-standard policies along
              with a number of carrier-specific rules tied to fare class, route, and how the ticket was originally
              purchased. This guide walks you through the entire process — from gathering your booking details to
              confirming a successful outcome.
            </p>
            <p>
              {s.hero} Whether your trip departs from {a.hub} or connects through another hub, the steps below apply
              to most {a.name} reservations. If you're short on time or your situation is unusual, our independent
              travel assistance team can talk you through the fastest path at <a className="text-accent font-semibold" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
            </p>
            <p>
              Founded in {a.founded}{a.alliance ? ` and a member of the ${a.alliance} alliance` : ""}, {a.name}
              {" "}operates an extensive network and has invested heavily in self-service tools. That means many{" "}
              {s.name.toLowerCase()} requests can be completed online — but knowing exactly where to click, what to
              upload, and what to expect afterward makes the difference between a smooth result and days of back and forth.
            </p>
          </Section>

          {/* Steps */}
          <Section id="steps" title={`How to ${s.verb} on ${a.name}`} icon={CheckCircle2}>
            <ol className="grid gap-3">
              {s.steps.map((step, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                  <span className="h-7 w-7 shrink-0 rounded-full bg-brand-navy text-primary-foreground grid place-items-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-[15px]">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* Eligibility */}
          <Section id="eligibility" title="Eligibility requirements" icon={AlertTriangle}>
            <p>
              Before you submit your {s.name.toLowerCase()} request to {a.name}, confirm you meet the eligibility
              conditions below. Meeting one or more of these typically unlocks the smoothest path:
            </p>
            <ul className="grid gap-2 mt-2">
              {s.eligibility.map((e) => (
                <li key={e} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-success mt-0.5" /> {e}</li>
              ))}
            </ul>
          </Section>

          {/* Processing time */}
          <Section id="processing" title="Processing time" icon={Clock}>
            <p>{s.processing}</p>
            <p>
              {a.name} generally communicates progress by email to the address on the booking. If you used a travel
              agency or OTA, expect updates to come through them instead. Keep your reference number handy — it's
              the single fastest way to pull up your case.
            </p>
          </Section>

          {/* Fees */}
          <Section id="fees" title="Fees and charges" icon={Wallet}>
            <p>{s.fees}</p>
            <p>
              Always check the exact fare rules attached to your {a.name} ticket. Two passengers on the same flight
              can pay different amounts based on the fare class they purchased and the date of original ticketing.
            </p>
          </Section>

          {/* Terms */}
          <Section id="terms" title="Important terms" icon={AlertTriangle}>
            <ul className="grid gap-2">
              {s.terms.map((t) => (
                <li key={t} className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-warning mt-1" /> {t}</li>
              ))}
            </ul>
          </Section>

          {/* Tips */}
          <Section id="tips" title="Travel tips" icon={Lightbulb}>
            <ul className="grid gap-2">
              {s.tips.map((t) => (
                <li key={t} className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-warning mt-1" /> {t}</li>
              ))}
            </ul>
            <p>
              Hubs like {a.hub} run at high capacity, especially during peak season — building extra buffer time
              and reconfirming your booking 24 hours before departure dramatically reduces the chance of surprises.
            </p>
          </Section>

          {/* FAQs */}
          <Section id="faqs" title="Frequently asked questions" icon={ListChecks}>
            <div className="grid gap-3">
              {s.faqs.map((f, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card p-4 open:shadow-card">
                  <summary className="cursor-pointer font-semibold text-[15px] list-none flex items-start justify-between gap-3">
                    {f.q(a.name)}
                    <span className="text-accent transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a(a.name)}</p>
                </details>
              ))}
            </div>
          </Section>

          {/* Contact */}
          <Section id="contact" title="Contact travel support" icon={Phone}>
            <p>
              If you'd rather speak to a live travel support specialist about your {a.name} {s.name.toLowerCase()}{" "}
              request — including escalations, complex itineraries, or multi-passenger bookings — call our independent
              assistance line. We're available 24 hours a day, 7 days a week.
            </p>
            <div className="mt-4"><CallCard context={`Talk to a ${a.name} ${s.name.toLowerCase()} specialist now`} /></div>
          </Section>

          {/* Related airline services */}
          <Section id="related" title={`Other ${a.name} services`} icon={ListChecks}>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherServices.map((x) => (
                <Link
                  key={x.slug}
                  to="/$service/$airline"
                  params={{ service: x.slug, airline: a.slug }}
                  className="rounded-xl border border-border bg-card p-4 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition"
                >
                  <div className="font-semibold">{x.name} on {a.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{x.short}</div>
                </Link>
              ))}
            </div>
          </Section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">On this page</div>
            <ul className="mt-3 grid gap-2 text-sm">
              {[
                ["overview", "Overview"],
                ["steps", "Step-by-step"],
                ["eligibility", "Eligibility"],
                ["processing", "Processing time"],
                ["fees", "Fees & charges"],
                ["terms", "Important terms"],
                ["tips", "Travel tips"],
                ["faqs", "FAQs"],
                ["contact", "Contact support"],
                ["related", "Related services"],
              ].map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="hover:text-accent">{label}</a></li>
              ))}
            </ul>
          </div>

          <CallCard context={`${a.name} ${s.name} help, 24/7`} />

          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">More airlines</div>
            <ul className="mt-3 grid gap-1.5 text-sm">
              {otherAirlines.map((x) => (
                <li key={x.slug}>
                  <Link to="/$service/$airline" params={{ service: s.slug, airline: x.slug }} className="hover:text-accent">
                    {s.name} on {x.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
