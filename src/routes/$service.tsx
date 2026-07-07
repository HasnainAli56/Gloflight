import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { SERVICES_BY_SLUG } from "@/data/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/$service")({
  beforeLoad: ({ params }) => {
    if (!SERVICES_BY_SLUG[params.service]) throw notFound();
  },
  head: ({ params }) => {
    const s = SERVICES_BY_SLUG[params.service];
    if (!s) return { meta: [{ title: "Service" }] };
    const title = `${s.name} Help for Every Airline | ${SITE.name}`;
    const desc = `${s.short} Step-by-step guidance, eligibility, fees, and 24/7 travel support across 40+ airlines.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.service}` },
      ],
    };
  },
  component: () => <Outlet />,
});
