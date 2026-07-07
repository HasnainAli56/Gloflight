// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { SERVICES } from "./src/data/services";
import { AIRLINES } from "./src/data/airlines";
import { BLOG_POSTS } from "./src/data/blog";

// Build the full list of routes to prerender to static HTML for Netlify hosting.
const prerenderRoutes: string[] = [
  "/",
  "/airlines",
  "/about",
  "/contact",
  "/blog",
  "/sitemap.xml",
];
for (const s of SERVICES) {
  prerenderRoutes.push(`/${s.slug}`);
  for (const a of AIRLINES) prerenderRoutes.push(`/${s.slug}/${a.slug}`);
}
for (const p of BLOG_POSTS) prerenderRoutes.push(`/blog/${p.slug}`);

// The Lovable sandbox forces a Cloudflare preset and uses its own output
// layout. Vercel needs Nitro's Vercel preset and should not use TanStack
// prerendering; Netlify/static hosts use the static preset with prerendering.
const isLovableSandbox = !!process.env.LOVABLE_SANDBOX || !!process.env.DEV_SERVER__PROJECT_PATH;
const isVercel = !!process.env.VERCEL;
const shouldPrerenderStatic = !isLovableSandbox && !isVercel;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(shouldPrerenderStatic
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            routes: prerenderRoutes,
          },
          pages: prerenderRoutes.map((path) => ({ path, prerender: { enabled: true } })),
        }
      : {}),
  },
  nitro: isLovableSandbox ? undefined : { preset: isVercel ? "vercel" : "static" },
});
