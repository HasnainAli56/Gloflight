import { Link } from "@tanstack/react-router";
import { Plane, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logoMark from "@/assets/logo-mark.png";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-gradient-brand text-primary-foreground shadow-elevated">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={logoMark} alt="Flight Reservation Support logo" width={36} height={36} className="rounded-lg" />
            <div className="leading-tight min-w-0">
              <div className="font-display font-bold text-sm sm:text-base truncate">Flight Reservation Support</div>
              <div className="text-[10px] sm:text-xs opacity-80 truncate">Travel Assistance · 24/7</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-6 text-sm font-medium">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-white/10">Home</Link>
            <div className="group relative">
              <button className="px-3 py-2 rounded-md hover:bg-white/10">Services</button>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="bg-card text-card-foreground rounded-lg shadow-elevated p-2 min-w-[240px] grid">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/$service"
                      params={{ service: s.slug }}
                      className="px-3 py-2 rounded-md hover:bg-secondary text-sm"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/airlines" className="px-3 py-2 rounded-md hover:bg-white/10">Airlines</Link>
            <Link to="/blog" className="px-3 py-2 rounded-md hover:bg-white/10">Blog</Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-white/10">About</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-white/10">Contact</Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={SITE.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-4 py-2 rounded-full shadow-cta text-sm hover:scale-[1.02] transition"
            >
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-brand-navy border-t border-white/10">
            <div className="px-4 py-3 grid gap-1 text-sm">
              <Link to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Home</Link>
              <Link to="/airlines" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Airlines</Link>
              <Link to="/blog" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Blog</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">About</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Contact</Link>
              <div className="mt-2 grid grid-cols-2 gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/$service"
                    params={{ service: s.slug }}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 flex items-center gap-2"
                  >
                    <Plane className="h-3 w-3" /> {s.name}
                  </Link>
                ))}
              </div>
              <a
                href={SITE.phoneHref}
                className="mt-3 inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-semibold px-4 py-2 rounded-full"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
  );
}
