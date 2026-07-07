import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallCard } from "@/components/site/CallCTA";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About | ${SITE.name}` },
      { name: "description", content: "Flight Reservation Support is an independent 24/7 travel assistance service helping travelers with refunds, cancellations, seat upgrades, and rebooking across 40+ airlines." },
      { property: "og:title", content: `About | ${SITE.name}` },
      { property: "og:description", content: "An independent travel assistance team helping travelers navigate airline policies and reservations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold">Independent travel assistance, 24/7</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            {SITE.name} is a third-party travel support service helping travelers across 40+ airlines
            with refunds, cancellations, seat upgrades, exchanges, new bookings, and live flight status.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 space-y-6 text-[15px] leading-relaxed">
        <p>
          Modern airline policies have become more flexible — but also more confusing. Fare classes, change-fee
          waivers, basic economy rules, and 24-hour cancellation windows vary across every carrier. Our team
          translates those rules into clear, actionable steps and stays on the line with you until your request
          is resolved.
        </p>
        <p>
          We are an independent service. We are not affiliated with any airline mentioned on this site. Airline
          names, logos, and trademarks belong to their respective owners and are used here only for identification
          and educational purposes.
        </p>
        <p>
          Reach our travel assistance specialists any time at <a className="text-accent font-semibold" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
        </p>
        <CallCard />
      </section>
    </div>
  );
}
