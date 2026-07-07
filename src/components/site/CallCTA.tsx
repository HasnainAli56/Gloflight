import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="md:hidden fixed bottom-4 inset-x-4 z-50 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-3.5 rounded-full shadow-cta active:scale-95 transition"
    >
      <Phone className="h-4 w-4" />
      Call Travel Help · {SITE.phoneDisplay}
    </a>
  );
}

export function CallCard({ context }: { context?: string }) {
  return (
    <div className="rounded-2xl bg-gradient-brand text-primary-foreground p-6 sm:p-8 shadow-elevated">
      <div className="text-xs uppercase tracking-widest opacity-80">Need Travel Assistance?</div>
      <div className="mt-2 font-display text-2xl sm:text-3xl font-bold text-balance">
        {context ?? "Talk to a live travel support agent now"}
      </div>
      <p className="mt-2 text-sm opacity-85 max-w-prose">
        Our independent travel assistance line is open 24/7 to help with refunds, changes,
        cancellations, seat upgrades, and rebooking on any airline.
      </p>
      <a
        href={SITE.phoneHref}
        className="mt-5 inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-6 py-3 rounded-full shadow-cta hover:scale-[1.02] transition"
      >
        <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
      </a>
      <p className="mt-3 text-[11px] opacity-75">{SITE.disclosureShort}</p>
    </div>
  );
}
