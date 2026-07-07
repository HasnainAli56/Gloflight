export type ServiceSlug =
  | "refund"
  | "seat-upgrade"
  | "cancellation"
  | "new-booking"
  | "exchange"
  | "flight-status"
  | "cancel-rebook";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  verb: string; // e.g. "request a refund"
  icon: string; // lucide icon name
  hero: string;
  steps: string[];
  eligibility: string[];
  processing: string;
  fees: string;
  terms: string[];
  tips: string[];
  faqs: { q: (airline: string) => string; a: (airline: string) => string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "refund",
    name: "Refund",
    short: "Request a refund for cancelled or eligible flights.",
    verb: "request a refund",
    icon: "RotateCcw",
    hero: "Get help requesting a refund for your ticket — fast, clear, and stress-free.",
    steps: [
      "Locate your booking confirmation email and 6-character record locator (PNR).",
      "Check your fare rules to confirm whether the ticket is refundable, non-refundable, or eligible for credit.",
      "Sign in to the airline's website or app and open Manage My Booking.",
      "Select the flight you want to refund and choose the Refund option if available.",
      "Submit any required documentation (medical letter, military orders, schedule change notice).",
      "Receive a refund reference number and track its status by email.",
    ],
    eligibility: [
      "Refundable fare class (typically Flex, Y, J, or premium tickets).",
      "Flight cancelled by the airline or significantly delayed (per airline policy).",
      "Schedule change of 2+ hours that you did not accept.",
      "Cancellation within the 24-hour risk-free booking window (where applicable).",
      "Bereavement, military deployment, or documented medical emergencies (case-by-case).",
    ],
    processing: "Most refunds are processed back to the original form of payment within 7–20 business days. Credit card refunds typically appear faster than bank transfers. Travel credits or vouchers are usually issued within 1–3 business days.",
    fees: "Refundable fares are usually returned in full. Non-refundable fares may carry cancellation fees, or only the unused taxes and fees portion may be refunded. Some airlines now waive change fees on main cabin and above for domestic and short-haul international flights, but basic economy is generally non-refundable.",
    terms: [
      "Refunds are processed to the original form of payment only.",
      "Third-party bookings (OTAs, travel agents) must be refunded through the original seller.",
      "Award tickets are refunded as miles plus any taxes paid in cash.",
      "Refund eligibility is determined by the fare rules at time of purchase.",
    ],
    tips: [
      "Always screenshot your cancellation confirmation and refund reference number.",
      "If the airline cancels your flight, you are typically entitled to a full cash refund — not just a voucher.",
      "Use your credit card's travel protection as a secondary option if the airline denies a valid request.",
    ],
    faqs: [
      { q: (a) => `Can I get a cash refund from ${a} instead of a travel credit?`, a: (a) => `Yes — if ${a} cancels your flight or makes a significant schedule change, you are generally entitled to a refund to your original form of payment. For voluntary cancellations on non-refundable tickets, you'll usually receive a travel credit.` },
      { q: (a) => `How long do ${a} refunds take?`, a: () => "Most refunds are completed within 7–20 business days, with credit card refunds typically arriving faster than refunds to bank accounts." },
      { q: (a) => `Are basic economy fares refundable on ${a}?`, a: (a) => `Basic economy and similar entry-level fares on ${a} are typically non-refundable outside the 24-hour risk-free window, unless the airline cancels or significantly changes your flight.` },
      { q: () => `What if I booked through a travel agency?`, a: () => "Refunds for tickets purchased through a third party must be requested through that travel agency or OTA — the airline cannot process the refund directly." },
    ],
  },
  {
    slug: "seat-upgrade",
    name: "Seat Upgrade",
    short: "Upgrade to extra legroom, premium economy, business, or first.",
    verb: "request a seat upgrade",
    icon: "ArrowUpCircle",
    hero: "Move up to extra legroom, premium economy, business, or first class with confidence.",
    steps: [
      "Open your booking and check current upgrade availability for your flight.",
      "Choose your upgrade type: paid upgrade, miles + co-pay, elite complimentary, or bid-for-upgrade.",
      "Submit your upgrade request through Manage My Booking or at check-in.",
      "Confirm payment, mileage debit, or bid amount.",
      "Watch for a confirmation email and updated boarding pass.",
      "If on a waitlist, monitor your status — many upgrades clear at the gate.",
    ],
    eligibility: [
      "Eligible fare class (most deeply discounted fares are not upgradeable).",
      "Sufficient miles in your loyalty account, if using miles.",
      "Available premium inventory on your specific flight.",
      "Elite status (for complimentary or priority upgrades).",
      "Bid-for-upgrade offer accepted by the airline's revenue system.",
    ],
    processing: "Paid upgrades and miles upgrades typically confirm instantly when inventory is available. Waitlisted upgrades may clear anywhere from a few days out to minutes before boarding. Bid-for-upgrade offers are usually decided 48–72 hours before departure.",
    fees: "Upgrade costs vary widely by route, cabin, and demand: extra-legroom seats can start around $30, premium economy upgrades from $99, and business or first class upgrades may range from a few hundred to several thousand dollars or a similar value in miles plus a co-pay.",
    terms: [
      "Upgrades are subject to availability and may be revoked due to aircraft swaps.",
      "Some upgrades do not earn mileage at the higher cabin level.",
      "Upgrade certificates and elite instruments must be used per published rules.",
    ],
    tips: [
      "Check seat maps the day before — premium availability often opens up close to departure.",
      "Polite, well-timed gate requests still work, especially on full economy flights.",
      "If you have elite status, make sure your account is correctly attached to the reservation.",
    ],
    faqs: [
      { q: (a) => `How can I upgrade my ${a} seat after booking?`, a: (a) => `Sign in to ${a}'s website or app, open your trip, and look for an Upgrade option. You can usually pay with cash, miles, or a combination, depending on the route and fare class.` },
      { q: () => "Are upgrades guaranteed when I pay?", a: () => "Confirmed paid upgrades are guaranteed once you receive a new boarding pass. Waitlisted, bid-based, or complimentary elite upgrades are subject to availability." },
      { q: (a) => `Can I use miles to upgrade on ${a}?`, a: (a) => `Most ${a} fare classes allow mileage upgrades into premium cabins, often with a cash co-pay. Deep discount fares may be excluded.` },
      { q: () => "Will I be refunded if the upgrade doesn't clear?", a: () => "Yes — if your upgrade is paid or charged in miles and does not clear, the airline refunds the cost back to your original form of payment or miles balance." },
    ],
  },
  {
    slug: "cancellation",
    name: "Cancellation",
    short: "Cancel a flight and understand your refund or credit options.",
    verb: "cancel a flight",
    icon: "XCircle",
    hero: "Cancel a flight the right way — protect your fare and understand your options.",
    steps: [
      "Locate your booking reference and ticket number.",
      "Review the fare rules attached to your ticket.",
      "Sign in to Manage My Booking and select Cancel Flight.",
      "Choose between refund (if eligible) or travel credit for future use.",
      "Confirm the cancellation and save the email confirmation.",
      "If cancelling within 24 hours of booking, request a full refund where applicable.",
    ],
    eligibility: [
      "Most tickets can be cancelled at any time before departure.",
      "Refund eligibility depends on fare type (refundable vs non-refundable).",
      "24-hour risk-free cancellation rule applies to most U.S. tickets.",
      "Schedule changes and airline-initiated cancellations unlock additional protections.",
    ],
    processing: "Cancellations are usually processed instantly. Travel credit appears within minutes to a few hours. Cash refunds, when due, are returned to the original payment method within 7–20 business days.",
    fees: "Many major carriers have permanently eliminated change and cancel fees on main cabin and above for domestic and short-haul international flights. Basic economy and ultra-low-cost carrier fares are typically non-refundable, though you may still receive partial taxes back.",
    terms: [
      "Cancelling does not automatically rebook you — you'll need to use the credit on a new ticket.",
      "Travel credits usually expire 12 months from issuance or original travel date.",
      "Same-name traveler restrictions often apply to travel credits.",
    ],
    tips: [
      "Cancel before the flight departs — no-shows often forfeit the entire fare and any travel credit.",
      "If you're unsure, cancelling preserves more value than letting the flight go.",
      "Check whether your credit card or travel insurance covers cancellation reasons.",
    ],
    faqs: [
      { q: (a) => `Can I cancel my ${a} flight for free?`, a: (a) => `If you cancel within 24 hours of booking and your flight is 7+ days out, ${a} typically refunds the full ticket. Outside that window, refundability depends on your fare type.` },
      { q: () => "What happens to my taxes and fees if I cancel a non-refundable ticket?", a: () => "Government taxes and certain fees are often refundable even on non-refundable tickets. The base fare is usually converted to a travel credit." },
      { q: (a) => `How long is a ${a} travel credit valid?`, a: () => "Travel credits are typically valid for 12 months from the date of issue, though this can vary by fare and promotion." },
      { q: () => "Can I cancel just one leg of a multi-segment trip?", a: () => "Partial cancellations can sometimes recalculate your fare upward. Contact support before cancelling a single leg to avoid unexpected fees." },
    ],
  },
  {
    slug: "new-booking",
    name: "New Booking",
    short: "Plan and book a new flight with confidence.",
    verb: "book a new flight",
    icon: "PlaneTakeoff",
    hero: "Plan your next trip and book the right fare for your travel needs.",
    steps: [
      "Decide on your route, dates, and number of travelers.",
      "Compare cabins: basic economy, main cabin, premium economy, business, first.",
      "Review baggage and change-fee policies before purchase.",
      "Apply any promo codes, travel credits, or eligible discounts.",
      "Enter passenger details exactly as they appear on government-issued ID.",
      "Pay, save your confirmation, and add your loyalty number for credit.",
    ],
    eligibility: [
      "Valid government-issued ID for all travelers.",
      "Passport with sufficient validity for international travel.",
      "Visa or travel authorization for the destination, if required.",
    ],
    processing: "Most bookings are confirmed instantly with an e-ticket emailed within minutes. International itineraries with multi-carrier segments may take slightly longer to ticket.",
    fees: "Base fares vary by route, demand, and timing. Expect optional fees for checked bags, seat selection, and onboard upgrades. Booking through the airline directly usually avoids OTA service fees.",
    terms: [
      "Name on the ticket must exactly match government ID.",
      "Travel credits and promo codes have usage windows and restrictions.",
      "Award bookings follow separate routing and capacity rules.",
    ],
    tips: [
      "Booking 3–8 weeks out typically yields the best domestic fares.",
      "Tuesday and Wednesday departures are often cheaper than Friday or Sunday.",
      "Avoid basic economy if you need bag flexibility or seat selection.",
    ],
    faqs: [
      { q: (a) => `What's the best way to book a ${a} flight?`, a: (a) => `Booking directly on ${a}'s website or app gives you full access to loyalty earning, easy changes, and 24-hour risk-free cancellation.` },
      { q: () => "Do I need a passport for domestic flights?", a: () => "No — a valid government-issued photo ID is sufficient for U.S. domestic flights. REAL ID requirements apply at TSA checkpoints." },
      { q: () => "Can I hold a fare without paying immediately?", a: () => "Some carriers offer a paid fare-hold for up to 7 days. Others rely on the 24-hour risk-free cancellation rule instead." },
      { q: () => "How do I add my loyalty number after booking?", a: () => "Most airlines let you add your frequent flyer number in Manage My Booking or at check-in. Always do this before flying to earn miles and elite credit." },
    ],
  },
  {
    slug: "exchange",
    name: "Exchange",
    short: "Change dates, times, or routing on an existing ticket.",
    verb: "exchange a ticket",
    icon: "Repeat",
    hero: "Change your travel plans — switch dates, times, or routing on your existing ticket.",
    steps: [
      "Open your reservation and select the segment you want to change.",
      "Search for new flights with the same origin, destination, or routing.",
      "Compare the fare difference (and any applicable change fee).",
      "Confirm the new itinerary and pay any additional collection.",
      "Receive a reissued e-ticket and updated boarding details.",
    ],
    eligibility: [
      "Most tickets above basic economy can be exchanged.",
      "Same passenger name must remain on the ticket.",
      "Routing changes may require revalidation by the airline.",
    ],
    processing: "Exchanges are usually completed instantly online. Complex itineraries with multiple carriers may need manual reissue and can take a few hours.",
    fees: "Change fees are widely waived on main cabin and above for domestic and short-haul international flights. You're still responsible for any fare difference between the original and new flights.",
    terms: [
      "Exchanges are subject to fare availability in the original or higher fare class.",
      "Award tickets follow separate change rules.",
      "International tickets may have stricter exchange conditions.",
    ],
    tips: [
      "Search the new flight first to confirm the fare difference is acceptable.",
      "If fares have dropped, ask whether you can rebook into the lower fare and bank the residual.",
      "Be flexible by a day or two — small shifts can save significant fare collection.",
    ],
    faqs: [
      { q: (a) => `Does ${a} charge a fee to change my flight?`, a: (a) => `${a} has eliminated change fees on most main cabin and above tickets. You'll still pay any fare difference between the original and new flight.` },
      { q: () => "Can I change a basic economy ticket?", a: () => "Basic economy fares are generally non-changeable, with limited exceptions for airline-initiated schedule changes." },
      { q: () => "What is fare difference?", a: () => "It's the gap between your original ticket price and the cost of the new flight in the same fare class today. You pay the difference if higher; some carriers offer a credit if lower." },
      { q: () => "How many times can I exchange a ticket?", a: () => "Multiple exchanges are allowed in most fare types, but each exchange may incur a new fare difference." },
    ],
  },
  {
    slug: "flight-status",
    name: "Flight Status",
    short: "Check live status, delays, and gate information.",
    verb: "check flight status",
    icon: "Radar",
    hero: "Stay ahead of delays — check live flight status, gate updates, and arrival info.",
    steps: [
      "Open the airline's flight status tool on its website or app.",
      "Search by flight number, route, or city pair plus date.",
      "Review departure and arrival times, gate, and terminal info.",
      "Enable push notifications for live updates.",
      "If delayed or cancelled, review your rebooking options immediately.",
    ],
    eligibility: [
      "Flight status is available to anyone — no booking required.",
      "Push notifications require login or app installation.",
    ],
    processing: "Status data is updated in near real time, typically every 1–2 minutes during active operations.",
    fees: "Checking flight status is always free. Some third-party tools may require a subscription for advanced alerts.",
    terms: [
      "Posted gate and time information can change without notice.",
      "Always confirm at the airport monitors before heading to your gate.",
    ],
    tips: [
      "Sign up for the airline's text alerts the moment you book.",
      "Track inbound aircraft for a more accurate prediction of your departure.",
      "Severe weather hubs (DFW, ORD, ATL, JFK) ripple delays nationwide — plan buffers.",
    ],
    faqs: [
      { q: (a) => `How do I check the status of a ${a} flight?`, a: (a) => `Visit ${a}'s flight status page on the website or app and search by flight number, route, or date for live departure and arrival info.` },
      { q: () => "What does Delayed vs Boarding mean on the status board?", a: () => "Delayed means the flight will depart later than scheduled. Boarding means passengers are actively being boarded — usually 30–45 minutes before departure." },
      { q: () => "If my flight is delayed, am I entitled to compensation?", a: () => "It depends on the cause, the carrier, and the jurisdiction. EU/UK rules (EC 261/UK 261) often apply to qualifying long delays." },
      { q: () => "How accurate are posted gate numbers?", a: () => "Gates can change due to operational needs. Always reconfirm at the airport monitors or in-app within an hour of boarding." },
    ],
  },
  {
    slug: "cancel-rebook",
    name: "Cancel & Rebook",
    short: "Cancel your current flight and rebook a better option.",
    verb: "cancel and rebook",
    icon: "RefreshCw",
    hero: "Cancel your current itinerary and rebook a more convenient flight, fare, or routing.",
    steps: [
      "Compare your current ticket value to the new flight's cost.",
      "Cancel your existing booking to bank a travel credit (or refund, if eligible).",
      "Search for the new flight and confirm fare and availability.",
      "Apply your travel credit at checkout for the new booking.",
      "Save the new confirmation and check baggage/seat selections.",
    ],
    eligibility: [
      "Available on most fare types that allow cancellation.",
      "Travel credit recipient name often must match for rebooking.",
      "Award and partner tickets follow separate cancellation rules.",
    ],
    processing: "Cancellation credit is typically issued within minutes. Rebooking with that credit is instant once applied at checkout.",
    fees: "If your fare type carries a cancellation fee, that fee is deducted from the credit. Fare difference between old and new flights still applies on rebooking.",
    terms: [
      "Credits issued from a cancelled ticket may not be combinable across multiple bookings.",
      "Some credits are restricted to the original traveler.",
      "Promotional fares and bundles may not be eligible for cancel-and-rebook.",
    ],
    tips: [
      "Cancel and rebook makes the most sense when fares drop significantly.",
      "Watch for change-fee waivers during weather or schedule disruptions — they often unlock better rebooking options.",
      "Hold your new flight in another tab before cancelling, so you don't lose availability.",
    ],
    faqs: [
      { q: (a) => `Should I cancel and rebook my ${a} ticket if fares dropped?`, a: (a) => `If the new fare (plus any change fee) is lower than your current ticket, cancel-and-rebook can save money. Confirm the new flight availability first before cancelling on ${a}.` },
      { q: () => "Will I lose my seat assignment when I rebook?", a: () => "Yes — seat selections are tied to the original ticket. You'll need to reselect seats on the new booking, which may carry a fee." },
      { q: () => "Can I rebook on a different airline using my credit?", a: () => "Generally no — travel credits are restricted to the issuing airline and its partner network." },
      { q: () => "Is cancel-and-rebook the same as a free change?", a: () => "Not always. A direct change keeps your record locator and protections. Cancel-and-rebook creates a new ticket and may reset some protections." },
    ],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export function getService(slug: string): Service | undefined {
  return SERVICES_BY_SLUG[slug];
}
