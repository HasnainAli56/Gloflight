export interface Airline {
  slug: string;
  name: string;
  country: string;
  hub: string;
  iata: string;
  founded: number;
  alliance?: string;
  blurb: string;
}

export const AIRLINES: Airline[] = [
  { slug: "american-airlines", name: "American Airlines", country: "United States", hub: "Dallas/Fort Worth", iata: "AA", founded: 1930, alliance: "Oneworld", blurb: "One of the world's largest airlines, operating an extensive domestic and international network from major hubs across the United States." },
  { slug: "delta-air-lines", name: "Delta Air Lines", country: "United States", hub: "Atlanta", iata: "DL", founded: 1924, alliance: "SkyTeam", blurb: "A major U.S. legacy carrier known for premium service, a vast SkyTeam network, and one of the youngest fleets in the industry." },
  { slug: "united-airlines", name: "United Airlines", country: "United States", hub: "Chicago O'Hare", iata: "UA", founded: 1926, alliance: "Star Alliance", blurb: "United operates a global route map with strong transpacific and transatlantic service, anchored by Star Alliance partnerships." },
  { slug: "southwest-airlines", name: "Southwest Airlines", country: "United States", hub: "Dallas Love Field", iata: "WN", founded: 1967, blurb: "America's largest low-cost carrier, famous for its two-free-checked-bags policy, point-to-point network, and no change fees." },
  { slug: "jetblue-airways", name: "JetBlue Airways", country: "United States", hub: "New York JFK", iata: "B6", founded: 1998, blurb: "A New York–based low-cost carrier known for spacious legroom, free Fly-Fi, and the premium transcontinental Mint cabin." },
  { slug: "alaska-airlines", name: "Alaska Airlines", country: "United States", hub: "Seattle", iata: "AS", founded: 1932, alliance: "Oneworld", blurb: "Seattle-based carrier with a strong West Coast presence, the Mileage Plan program, and a growing international partner network." },
  { slug: "spirit-airlines", name: "Spirit Airlines", country: "United States", hub: "Fort Lauderdale", iata: "NK", founded: 1983, blurb: "An ultra-low-cost carrier offering Bare Fare pricing across the U.S., Caribbean, and Latin America with à-la-carte add-ons." },
  { slug: "frontier-airlines", name: "Frontier Airlines", country: "United States", hub: "Denver", iata: "F9", founded: 1994, blurb: "Denver-based ultra-low-cost carrier focused on leisure routes with the Discount Den membership and an A320neo-family fleet." },
  { slug: "hawaiian-airlines", name: "Hawaiian Airlines", country: "United States", hub: "Honolulu", iata: "HA", founded: 1929, blurb: "Hawaii's flagship carrier with inter-island, mainland, and long-haul Pacific service, known for warm onboard hospitality." },
  { slug: "air-canada", name: "Air Canada", country: "Canada", hub: "Toronto Pearson", iata: "AC", founded: 1937, alliance: "Star Alliance", blurb: "Canada's flag carrier, serving six continents with a strong transborder, transatlantic, and transpacific network." },
  { slug: "westjet", name: "WestJet", country: "Canada", hub: "Calgary", iata: "WS", founded: 1996, blurb: "A Calgary-based carrier offering a mix of low-cost and full-service flights across Canada, the U.S., Caribbean, and Europe." },
  { slug: "british-airways", name: "British Airways", country: "United Kingdom", hub: "London Heathrow", iata: "BA", founded: 1974, alliance: "Oneworld", blurb: "The UK's flag carrier, headquartered at Heathrow, with extensive long-haul service and the Executive Club loyalty program." },
  { slug: "virgin-atlantic", name: "Virgin Atlantic", country: "United Kingdom", hub: "London Heathrow", iata: "VS", founded: 1984, alliance: "SkyTeam", blurb: "A British long-haul airline known for its premium Upper Class cabin, Clubhouse lounges, and distinctive brand experience." },
  { slug: "lufthansa", name: "Lufthansa", country: "Germany", hub: "Frankfurt", iata: "LH", founded: 1953, alliance: "Star Alliance", blurb: "Germany's flag carrier and a Star Alliance founding member, with major hubs in Frankfurt and Munich." },
  { slug: "air-france", name: "Air France", country: "France", hub: "Paris Charles de Gaulle", iata: "AF", founded: 1933, alliance: "SkyTeam", blurb: "France's flag carrier, offering global service from Paris-CDG and renowned for its La Première and Business cabins." },
  { slug: "klm", name: "KLM", country: "Netherlands", hub: "Amsterdam Schiphol", iata: "KL", founded: 1919, alliance: "SkyTeam", blurb: "The world's oldest operating airline, KLM connects Amsterdam to a wide international network as part of the Air France–KLM group." },
  { slug: "emirates", name: "Emirates", country: "United Arab Emirates", hub: "Dubai", iata: "EK", founded: 1985, blurb: "Dubai-based long-haul giant operating the world's largest A380 fleet, known for luxury cabins and global reach." },
  { slug: "qatar-airways", name: "Qatar Airways", country: "Qatar", hub: "Doha Hamad", iata: "QR", founded: 1993, alliance: "Oneworld", blurb: "A multi-award-winning carrier from Doha with industry-leading Qsuite Business Class and a vast global route network." },
  { slug: "etihad-airways", name: "Etihad Airways", country: "United Arab Emirates", hub: "Abu Dhabi", iata: "EY", founded: 2003, blurb: "Abu Dhabi's flag carrier, known for premium cabins and a refined onboard experience across long-haul routes." },
  { slug: "turkish-airlines", name: "Turkish Airlines", country: "Turkey", hub: "Istanbul", iata: "TK", founded: 1933, alliance: "Star Alliance", blurb: "Flying to more countries than any other airline, Turkish Airlines connects the world through its mega-hub in Istanbul." },
  { slug: "singapore-airlines", name: "Singapore Airlines", country: "Singapore", hub: "Singapore Changi", iata: "SQ", founded: 1947, alliance: "Star Alliance", blurb: "Consistently ranked among the world's best, Singapore Airlines is celebrated for service excellence and its Suites cabin." },
  { slug: "cathay-pacific", name: "Cathay Pacific", country: "Hong Kong", hub: "Hong Kong", iata: "CX", founded: 1946, alliance: "Oneworld", blurb: "Hong Kong's flagship carrier with a strong Asia-Pacific and global long-haul presence and the Cathay loyalty program." },
  { slug: "ana", name: "ANA", country: "Japan", hub: "Tokyo Haneda", iata: "NH", founded: 1952, alliance: "Star Alliance", blurb: "All Nippon Airways, Japan's largest carrier, known for award-winning service and a modern wide-body fleet." },
  { slug: "japan-airlines", name: "Japan Airlines", country: "Japan", hub: "Tokyo Haneda", iata: "JL", founded: 1951, alliance: "Oneworld", blurb: "JAL is Japan's legacy flag carrier, offering refined service across domestic and international routes." },
  { slug: "qantas", name: "Qantas", country: "Australia", hub: "Sydney", iata: "QF", founded: 1920, alliance: "Oneworld", blurb: "Australia's flag carrier and one of the world's oldest airlines, known for ultra-long-haul service from Sydney and Perth." },
  { slug: "ryanair", name: "Ryanair", country: "Ireland", hub: "Dublin", iata: "FR", founded: 1984, blurb: "Europe's largest low-cost carrier, serving hundreds of airports across the continent with bare-bones fares and add-ons." },
  { slug: "easyjet", name: "EasyJet", country: "United Kingdom", hub: "London Luton", iata: "U2", founded: 1995, blurb: "A leading European low-cost airline operating short-haul flights to over 150 airports across Europe and beyond." },
  { slug: "vueling", name: "Vueling", country: "Spain", hub: "Barcelona", iata: "VY", founded: 2004, blurb: "A Barcelona-based low-cost carrier and IAG group member with a wide European short-haul network." },
  { slug: "iberia", name: "Iberia", country: "Spain", hub: "Madrid Barajas", iata: "IB", founded: 1927, alliance: "Oneworld", blurb: "Spain's flag carrier and Oneworld member, offering strong service between Europe and Latin America from Madrid." },
  { slug: "tap-air-portugal", name: "TAP Air Portugal", country: "Portugal", hub: "Lisbon", iata: "TP", founded: 1945, alliance: "Star Alliance", blurb: "Portugal's flag carrier with a strong Brazil and Africa network and convenient Lisbon stopovers." },
  { slug: "air-india", name: "Air India", country: "India", hub: "Delhi", iata: "AI", founded: 1932, alliance: "Star Alliance", blurb: "India's flag carrier, undergoing a major transformation under the Tata Group with a renewed long-haul fleet." },
  { slug: "indigo", name: "IndiGo", country: "India", hub: "Delhi", iata: "6E", founded: 2006, blurb: "India's largest airline by market share, operating an all-Airbus fleet across a vast domestic and growing international network." },
  { slug: "spicejet", name: "SpiceJet", country: "India", hub: "Delhi", iata: "SG", founded: 2005, blurb: "An Indian low-cost carrier serving domestic routes and select international destinations across Asia and the Middle East." },
  { slug: "vistara", name: "Vistara", country: "India", hub: "Delhi", iata: "UK", founded: 2013, blurb: "A premium full-service Indian carrier (now merging with Air India) known for its three-cabin service and onboard quality." },
  { slug: "akasa-air", name: "Akasa Air", country: "India", hub: "Mumbai", iata: "QP", founded: 2022, blurb: "One of India's newest carriers, operating a modern 737 MAX fleet with a focus on reliability and a sustainable route map." },
  { slug: "saudia", name: "Saudia", country: "Saudi Arabia", hub: "Jeddah", iata: "SV", founded: 1945, alliance: "SkyTeam", blurb: "The flag carrier of Saudi Arabia, serving a global network from Jeddah and Riyadh with a modern wide-body fleet." },
  { slug: "oman-air", name: "Oman Air", country: "Oman", hub: "Muscat", iata: "WY", founded: 1993, blurb: "Oman's flag carrier, offering full-service flights between Muscat and key destinations across the Middle East, Europe, and Asia." },
  { slug: "kuwait-airways", name: "Kuwait Airways", country: "Kuwait", hub: "Kuwait City", iata: "KU", founded: 1954, blurb: "Kuwait's national airline, operating regional and long-haul routes to Europe, Asia, and North America." },
  { slug: "gulf-air", name: "Gulf Air", country: "Bahrain", hub: "Bahrain", iata: "GF", founded: 1950, blurb: "Bahrain's national carrier with a refined onboard product and a network spanning the Middle East, Europe, Asia, and Africa." },
  { slug: "egyptair", name: "EgyptAir", country: "Egypt", hub: "Cairo", iata: "MS", founded: 1932, alliance: "Star Alliance", blurb: "Africa's first airline and Egypt's flag carrier, with extensive service across Africa, the Middle East, Europe, and beyond." },
];

export const AIRLINES_BY_SLUG: Record<string, Airline> = Object.fromEntries(
  AIRLINES.map((a) => [a.slug, a]),
);

export function getAirline(slug: string): Airline | undefined {
  return AIRLINES_BY_SLUG[slug];
}
