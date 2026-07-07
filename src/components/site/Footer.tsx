import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { AIRLINES } from "@/data/airlines";
import { BLOG_CATEGORIES } from "@/data/blog";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-primary-foreground mt-24">
      <div className="bg-black/20 text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center text-center gap-2">
          <span className="hidden sm:inline">⚠</span>
          <span className="text-balance">{SITE.disclosureShort}</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display font-bold text-xl">{SITE.name}</div>
          <p className="mt-3 text-sm opacity-80 max-w-md">
            {SITE.disclosureLong}
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-5 inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-full shadow-cta"
          >
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
        </div>

        <div>
          <div className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-80">Services</div>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/$service" params={{ service: s.slug }} className="hover:underline opacity-90">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-80">Top Airlines</div>
          <ul className="space-y-2 text-sm">
            {AIRLINES.slice(0, 10).map((a) => (
              <li key={a.slug}>
                <Link
                  to="/$service/$airline"
                  params={{ service: "refund", airline: a.slug }}
                  className="hover:underline opacity-90"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs opacity-80">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3" /> support@flightreservation.help</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> Worldwide travel assistance</span>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/blog" className="hover:underline">Blog · {BLOG_CATEGORIES.length} topics</Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-6 text-[11px] opacity-60">
          © {new Date().getFullYear()} {SITE.name}. All trademarks belong to their respective owners.
        </div>
      </div>
    </footer>
  );
}
