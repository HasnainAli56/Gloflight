import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `Travel Blog | ${SITE.name}` },
      { name: "description", content: "Travel tips, airline news, refund guides, seat upgrade strategies, and booking help from the Flight Reservation Support editorial team." },
      { property: "og:title", content: `Travel Blog | ${SITE.name}` },
      { property: "og:description", content: "Travel tips, airline news, refund guides, and more — updated regularly." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold">The Travel Support Blog</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Practical guides, airline news, and traveler-first advice — refreshed regularly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-wrap gap-2 mb-8">
          {BLOG_CATEGORIES.map((c) => (
            <a key={c} href={`#${c.replace(/\s+/g, "-").toLowerCase()}`} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-brand-navy hover:text-primary-foreground transition">
              {c}
            </a>
          ))}
        </div>

        {BLOG_CATEGORIES.map((c) => {
          const posts = BLOG_POSTS.filter((p) => p.category === c);
          return (
            <div key={c} id={c.replace(/\s+/g, "-").toLowerCase()} className="mb-12 scroll-mt-24">
              <h2 className="font-display text-2xl font-bold border-b border-border pb-2">{c}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group rounded-xl bg-card border border-border p-5 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition"
                  >
                    <div className="text-[11px] text-accent uppercase tracking-widest font-semibold">{p.category}</div>
                    <div className="mt-1 font-semibold group-hover:text-accent">{p.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <div className="mt-3 text-xs text-muted-foreground">{p.date} · {p.readMins} min read</div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
