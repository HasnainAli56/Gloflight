export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readMins: number;
}

const CATEGORIES = [
  "Airline News",
  "Travel Tips",
  "Flight Changes",
  "Refund Guides",
  "Seat Upgrade Guides",
  "Booking Help",
];

const TITLES: Record<string, string[]> = {
  "Airline News": [
    "Major Carriers Roll Out New Premium Cabins for 2026",
    "How New Slot Rules Are Reshaping Transatlantic Routes",
    "What Airline Mergers Mean for Your Frequent Flyer Miles",
    "Why Long-Haul Low-Cost Carriers Are Making a Comeback",
    "Inside the Push Toward Sustainable Aviation Fuel",
    "Pilot Shortages: What Travelers Should Know",
    "Airlines Are Quietly Raising Award Chart Prices",
    "Why More Carriers Are Adding Premium Economy",
    "How Airline Loyalty Programs Are Changing in 2026",
    "The Rise of Direct-to-Consumer Airline Booking",
    "How Airlines Are Modernizing the Boarding Experience",
    "Codeshare Confusion: How to Spot the Operating Carrier",
    "What the Latest Fleet Orders Tell Us About 2027 Routes",
    "Airline Hub Strategies for the Next Decade",
    "Why Wi-Fi Is About to Get Much Better Onboard",
  ],
  "Travel Tips": [
    "Carry-On Packing Hacks That Actually Save Space",
    "How to Sleep Better on a Red-Eye Flight",
    "The Best Day of the Week to Buy Flights",
    "Beating Jet Lag: A Realistic 7-Step Plan",
    "TSA PreCheck vs Global Entry: Which One Wins?",
    "How to Survive a Long Layover Without Losing Your Mind",
    "Smart Strategies for Flying With Kids",
    "The 90-Minute Airport Rule: When to Arrive Early",
    "How to Get Through Customs in Under 15 Minutes",
    "Packing Essentials for Business Class Travelers",
    "Best Airport Lounges You Can Access Without Status",
    "How to Travel Carry-On Only for Two Weeks",
    "The Hidden Benefits of Travel Credit Cards",
    "What to Do When Your Bag Is Lost",
    "How to Stay Healthy on Back-to-Back Flights",
  ],
  "Flight Changes": [
    "What to Do the Moment Your Flight Is Cancelled",
    "Schedule Change Rights: A Plain-English Guide",
    "How to Rebook During Weather Disruptions",
    "Same-Day Flight Changes: Rules by Airline",
    "How Misconnections Are Handled Across Carriers",
    "Why You Should Always Track Your Inbound Aircraft",
    "Best Apps for Real-Time Flight Disruption Alerts",
    "Diverted Flight? Here's What You're Entitled To",
    "How to Use EC 261 / UK 261 for Compensation",
    "Mechanical Delays vs Weather Delays: Why It Matters",
    "How to Reroute Through a Different Hub for Free",
    "Strategies for Handling a Last-Minute Aircraft Swap",
    "What Happens When Your Premium Cabin Downgrades",
    "Standby Travel: How It Actually Works",
    "How to Talk to a Gate Agent When You Need a Reroute",
  ],
  "Refund Guides": [
    "How to Claim a Cash Refund When Your Flight Is Cancelled",
    "Refundable vs Non-Refundable Tickets: Side-by-Side",
    "The 24-Hour Rule: How to Use It Correctly",
    "Refund Timelines by Payment Method",
    "Why Travel Credits Aren't Always Worse Than Cash",
    "Step-by-Step Refund Documentation for Medical Cases",
    "Bereavement Fares and Refund Options",
    "Refund Rights for EU and UK Departures",
    "How to Escalate a Stuck Airline Refund",
    "Credit Card Chargebacks for Travel: When They Work",
    "Travel Insurance vs Airline Refunds: When to Use Which",
    "Why Award Ticket Refunds Are Often the Easiest",
    "How to Calculate Refundable Taxes and Fees",
    "What to Do If the Airline Offers a Voucher Only",
    "Schedule Change Refunds: The 2-Hour Rule Explained",
  ],
  "Seat Upgrade Guides": [
    "How to Score a Last-Minute Business Class Upgrade",
    "Mileage Upgrades: The Smartest Use of Your Points",
    "Bid-for-Upgrade Strategies That Actually Work",
    "Best Seats in Economy on Popular Wide-Body Jets",
    "Extra Legroom vs Premium Economy: Worth the Money?",
    "How Elite Status Changes Your Upgrade Odds",
    "When to Use a Systemwide Upgrade Certificate",
    "Are Bulkhead Seats Worth It?",
    "Window vs Aisle on a Red-Eye Flight",
    "The Math of Upgrading With Cash vs Miles",
    "Hidden Upgrade Tricks for Solo Travelers",
    "How to Find the Best Seat on a 787",
    "Couple Strategies for Coordinated Upgrades",
    "Why Some Upgrades Don't Earn Mileage",
    "Last-Minute Upgrade Etiquette at the Gate",
  ],
  "Booking Help": [
    "How to Search for the Cheapest Flights Like a Pro",
    "Hidden City Ticketing: Risks and Realities",
    "How to Book Multi-City Itineraries Smartly",
    "Open-Jaw Tickets Explained",
    "When to Book One-Way vs Round-Trip",
    "Award Booking 101: Sweet Spots Worth Knowing",
    "How to Use Companion Certificates Effectively",
    "Group Travel: The Right Way to Book 10+ Passengers",
    "How to Book Flights for Unaccompanied Minors",
    "Pet Travel: Booking and Onboard Rules",
    "Booking Wheelchair and Mobility Assistance",
    "How to Apply a Travel Credit at Checkout",
    "Why You Should Always Add Your Loyalty Number",
    "When to Book Through an OTA vs the Airline",
    "Holding a Fare: Which Carriers Still Offer It",
  ],
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const BLOG_POSTS: BlogPost[] = (() => {
  const posts: BlogPost[] = [];
  let i = 0;
  for (const [category, titles] of Object.entries(TITLES)) {
    for (const title of titles) {
      const date = new Date(2026, 5 - (i % 6), 28 - (i % 27)).toISOString().slice(0, 10);
      posts.push({
        slug: slugify(title),
        title,
        category,
        excerpt:
          title +
          " — a practical, traveler-first guide from the Flight Reservation Support editorial team, covering what matters most and the steps you can take today.",
        date,
        readMins: 4 + (i % 6),
      });
      i++;
    }
  }
  return posts;
})();

export const BLOG_CATEGORIES = CATEGORIES;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
