import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/data/services";
import { AIRLINES } from "@/data/airlines";
import { BLOG_POSTS } from "@/data/blog";

const BASE_URL = process.env.SITE_URL || "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = ["/", "/airlines", "/about", "/contact", "/blog"];
        for (const s of SERVICES) {
          paths.push(`/${s.slug}`);
          for (const a of AIRLINES) paths.push(`/${s.slug}/${a.slug}`);
        }
        for (const p of BLOG_POSTS) paths.push(`/blog/${p.slug}`);

        const urls = paths
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
