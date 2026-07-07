import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost, BLOG_POSTS } from "@/data/blog";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CallCard } from "@/components/site/CallCTA";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!getBlogPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const p = getBlogPost(params.slug);
    if (!p) return { meta: [] };
    const title = `${p.title} | ${SITE.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          datePublished: p.date,
          articleSection: p.category,
        }),
      }],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const p = getBlogPost(slug)!;
  const related = BLOG_POSTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  return (
    <article>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: p.category }]} />
          <div className="mt-4 text-xs uppercase tracking-widest opacity-80">{p.category} · {p.date}</div>
          <h1 className="mt-2 font-display text-3xl md:text-5xl font-extrabold text-balance">{p.title}</h1>
          <p className="mt-3 max-w-2xl opacity-90">{p.excerpt}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 prose-content">
        <p className="text-lg leading-relaxed">
          {p.excerpt} In this guide, the Flight Reservation Support team breaks down the topic in plain language,
          highlights what most travelers get wrong, and points you to the resources you need to act today.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Travel changes constantly — fares, fees, baggage rules, and airline policies move every quarter. The
          fundamentals stay the same: know your fare rules, document everything, and ask for help early rather
          than late. If you have a specific reservation in mind, our 24/7 travel assistance line can talk you
          through your options in minutes.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Bookmark this page, share it with a fellow traveler, and check back as we expand each guide with new
          examples and step-by-step screenshots. Full editorial coverage is rolling out across all six categories.
        </p>

        <div className="mt-10"><CallCard /></div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-bold">More in {p.category}</h2>
            <ul className="mt-3 grid gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/blog/$slug" params={{ slug: r.slug }} className="text-accent hover:underline">{r.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
