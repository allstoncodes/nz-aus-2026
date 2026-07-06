/*
 * trip-places.js — NZ/AUS July 1–13, 2026 trip map dataset.
 * PII-SAFE: place names + neighbourhood-level lodging only. No street addresses,
 * booking refs, phone numbers, or times-of-day. Coordinates are baked static
 * (geocoded offline via Nominatim + reused from full-itinerary.html's validated map);
 * no runtime geocoding.
 *
 * Schema per entry:
 *   name      display label
 *   leg       "Melbourne" | "Sydney" | "New Zealand"   (trip-leg filter key)
 *   category  "transit" | "lodging" | "activity" | "food" | "culture" | "wellness"
 *   city      coarse locality label (popup line)
 *   booked    true => confirmed reservation (rendered with a white ring)
 *   coords    [lat, lng]
 *   note      PII-safe one-liner (date-level only)
 *   origin    (optional) true for SFO — excluded from the default map bounds
 */
const TRIP_PLACES = [
  // ── Origin ───────────────────────────────────────────────
  { name: "San Francisco Airport (SFO)", leg: "Melbourne", category: "transit", city: "San Francisco", booked: false, coords: [37.6213, -122.3790], note: "Depart Jul 1 · UA60 → Melbourne", origin: true },

  // ── Melbourne (Jul 3–6) ──────────────────────────────────
  { name: "Melbourne Airport (MEL)", leg: "Melbourne", category: "transit", city: "Tullamarine", booked: false, coords: [-37.6690, 144.8410], note: "Arrive Jul 3 · depart Jul 6 (JQ534 → Sydney)" },
  { name: "Southbank stay", leg: "Melbourne", category: "lodging", city: "Southbank, Melbourne", booked: true, coords: [-37.82409, 144.96814], note: "Lodging · Jul 3–6" },
  { name: "Phillip Island Penguin Parade", leg: "Melbourne", category: "activity", city: "Phillip Island", booked: true, coords: [-38.5069, 145.1531], note: "Booked · Jul 4 · sunset ~5:31pm" },
  { name: "San Remo Pelican Feeding", leg: "Melbourne", category: "activity", city: "San Remo", booked: false, coords: [-38.5347, 145.3765], note: "Daily feeding ~12pm · Jul 4 lunch stop" },
  { name: "Koala Conservation Reserve", leg: "Melbourne", category: "activity", city: "Phillip Island", booked: false, coords: [-38.4886, 145.2211], note: "Jul 4 afternoon" },
  { name: "The Nobbies", leg: "Melbourne", category: "activity", city: "Phillip Island", booked: false, coords: [-38.5090, 145.1494], note: "Boardwalk · seal viewing · Jul 4 afternoon" },
  { name: "Firelight Festival, Docklands", leg: "Melbourne", category: "culture", city: "Docklands, Melbourne", booked: false, coords: [-37.8142, 144.9460], note: "Optional · Jul 4 evening, free, till ~10:30pm" },
  { name: "Great Ocean Road — Kennett River", leg: "Melbourne", category: "activity", city: "Kennett River", booked: false, coords: [-38.66770, 143.85892], note: "Koalas · scenic drive option" },
  { name: "Hosier Lane", leg: "Melbourne", category: "culture", city: "Melbourne CBD", booked: false, coords: [-37.8166, 144.9690], note: "Street art laneway" },
  { name: "Federation Square", leg: "Melbourne", category: "culture", city: "Melbourne CBD", booked: false, coords: [-37.8180, 144.9691], note: "Civic plaza" },
  { name: "Queen Victoria Market", leg: "Melbourne", category: "food", city: "Melbourne CBD", booked: false, coords: [-37.8007, 144.9570], note: "Market · food stalls" },
  { name: "South Melbourne Market", leg: "Melbourne", category: "food", city: "South Melbourne", booked: false, coords: [-37.83217, 144.95649], note: "Market" },
  { name: "Hardware Société", leg: "Melbourne", category: "food", city: "Melbourne CBD", booked: false, coords: [-37.81390, 144.96136], note: "Laneway brunch" },
  { name: "Gimlet", leg: "Melbourne", category: "food", city: "Melbourne CBD", booked: false, coords: [-37.81587, 144.96960], note: "Dinner · rec" },
  { name: "SOI 38", leg: "Melbourne", category: "food", city: "Melbourne CBD", booked: false, coords: [-37.81247, 144.97188], note: "Thai car-park hotpot · rec" },
  { name: "HeyTea", leg: "Melbourne", category: "food", city: "Melbourne CBD", booked: false, coords: [-37.81000, 144.96257], note: "Drink · rec" },
  { name: "Lune Croissanterie", leg: "Melbourne", category: "food", city: "Fitzroy", booked: false, coords: [-37.7984, 144.9788], note: "Croissants · rec" },

  // ── Sydney (Jul 6–10) ────────────────────────────────────
  { name: "Sydney Airport (SYD)", leg: "Sydney", category: "transit", city: "Mascot", booked: false, coords: [-33.9399, 151.1753], note: "Arrive Jul 6 · depart Jul 10 (QF141 → Auckland)" },
  { name: "Metro Aspire Hotel", leg: "Sydney", category: "lodging", city: "Ultimo, Sydney", booked: true, coords: [-33.87947, 151.19843], note: "Lodging · Jul 6–10" },
  { name: "Sydney Opera House", leg: "Sydney", category: "culture", city: "Sydney", booked: true, coords: [-33.8568, 151.2153], note: "SSO concert booked · Jul 9 eve" },
  { name: "Sydney Harbour Bridge", leg: "Sydney", category: "culture", city: "Sydney", booked: false, coords: [-33.85212, 151.21078], note: "Landmark · BridgeClimb option" },
  { name: "Royal Botanic Garden — Mrs Macquarie's Chair", leg: "Sydney", category: "culture", city: "Sydney", booked: false, coords: [-33.8641, 151.2175], note: "Opera House + Bridge vantage" },
  { name: "The Rocks", leg: "Sydney", category: "culture", city: "Sydney", booked: false, coords: [-33.8602, 151.2084], note: "Historic laneways · markets" },
  { name: "Queen Victoria Building (QVB)", leg: "Sydney", category: "culture", city: "Sydney CBD", booked: false, coords: [-33.8717, 151.2068], note: "Heritage shopping" },
  { name: "Paddington", leg: "Sydney", category: "culture", city: "Sydney", booked: false, coords: [-33.8847, 151.2263], note: "Oxford St · Sat markets" },
  { name: "Bondi Beach", leg: "Sydney", category: "activity", city: "Sydney", booked: false, coords: [-33.8915, 151.2767], note: "Start of coastal walk" },
  { name: "Coogee Beach", leg: "Sydney", category: "activity", city: "Sydney", booked: false, coords: [-33.9175, 151.2553], note: "End of coastal walk" },
  { name: "Manly Beach", leg: "Sydney", category: "activity", city: "Sydney", booked: false, coords: [-33.7977, 151.2873], note: "Via Circular Quay ferry" },
  { name: "Taronga Zoo", leg: "Sydney", category: "activity", city: "Mosman", booked: false, coords: [-33.84383, 151.24137], note: "Harbour-skyline backdrop" },
  { name: "Symbio Wildlife Park", leg: "Sydney", category: "activity", city: "Helensburgh", booked: false, coords: [-34.20528, 150.96880], note: "Quokka encounter · rec" },
  { name: "Surry Hills", leg: "Sydney", category: "food", city: "Sydney", booked: false, coords: [-33.88451, 151.21003], note: "Brunch district" },
  { name: "Circular Quay dining (Bennelong / Quay)", leg: "Sydney", category: "food", city: "Sydney", booked: false, coords: [-33.86136, 151.21072], note: "Waterfront fine dining" },
  { name: "Carriageworks", leg: "Sydney", category: "culture", city: "Eveleigh", booked: false, coords: [-33.89416, 151.19160], note: "NAIDOC events" },
  { name: "Whale-watching departure (Darling Harbour)", leg: "Sydney", category: "activity", city: "Darling Harbour", booked: false, coords: [-33.8683, 151.2010], note: "Peak-season cruise · King St Wharf" },
  { name: "BridgeMuseum (Pylon Lookout)", leg: "Sydney", category: "culture", city: "Sydney", booked: false, coords: [-33.8523, 151.2108], note: "Harbour Bridge vantage · part-indoor" },
  { name: "Wendy Whiteley's Secret Garden", leg: "Sydney", category: "culture", city: "Lavender Bay, Sydney", booked: false, coords: [-33.8430, 151.2100], note: "Hidden free garden · harbour views" },
  { name: "Barangaroo Reserve", leg: "Sydney", category: "culture", city: "Barangaroo, Sydney", booked: false, coords: [-33.8556, 151.2010], note: "Free harbour headland walk" },
  { name: "Art Gallery of NSW", leg: "Sydney", category: "culture", city: "The Domain, Sydney", booked: false, coords: [-33.8688, 151.2170], note: "Free entry · Archibald Prize" },
  { name: "SEA LIFE Sydney Aquarium", leg: "Sydney", category: "activity", city: "Darling Harbour", booked: false, coords: [-33.8696, 151.2020], note: "Indoor wildlife fallback" },
  { name: "Cockatoo Island", leg: "Sydney", category: "culture", city: "Sydney Harbour", booked: false, coords: [-33.8490, 151.1720], note: "UNESCO convict history · ferry" },
  { name: "Spice Alley", leg: "Sydney", category: "food", city: "Chippendale, Sydney", booked: false, coords: [-33.8836, 151.1985], note: "Hawker-style · walk from Ultimo" },
  { name: "Museum of Contemporary Art", leg: "Sydney", category: "culture", city: "Circular Quay, Sydney", booked: false, coords: [-33.8599, 151.2090], note: "Free indoor contemporary art · walking-tour pick" },
  { name: "Sydney Observatory", leg: "Sydney", category: "culture", city: "Millers Point, Sydney", booked: false, coords: [-33.8593, 151.2044], note: "Free hilltop · Harbour + Bridge views · walking-tour pick" },
  { name: "Chinese Garden of Friendship", leg: "Sydney", category: "culture", city: "Darling Harbour", booked: false, coords: [-33.8760, 151.2010], note: "Shaded quiet garden · walk from Ultimo · walking-tour pick" },
  { name: "WILD LIFE Sydney Zoo", leg: "Sydney", category: "activity", city: "Darling Harbour", booked: false, coords: [-33.8695, 151.2015], note: "Indoor wildlife (koalas) · pairs with SEA LIFE · walking-tour pick" },

  // ── New Zealand (Jul 10–13) ──────────────────────────────
  { name: "Auckland Airport (AKL)", leg: "New Zealand", category: "transit", city: "Auckland", booked: false, coords: [-37.0082, 174.7850], note: "Arrive Jul 10 · depart Jul 13 (UA916 → SFO)" },
  { name: "Hamilton stay", leg: "New Zealand", category: "lodging", city: "Rototuna, Hamilton", booked: true, coords: [-37.73023, 175.27281], note: "Lodging · Jul 10" },
  { name: "Rotorua stay", leg: "New Zealand", category: "lodging", city: "Springfield, Rotorua", booked: true, coords: [-38.16216, 176.23367], note: "Lodging · Jul 11–12" },
  { name: "Waitomo Glowworm Caves", leg: "New Zealand", category: "activity", city: "Waitomo", booked: true, coords: [-38.2614, 175.1003], note: "Booked · Jul 11 morning" },
  { name: "Hobbiton Movie Set", leg: "New Zealand", category: "activity", city: "Matamata", booked: true, coords: [-37.8721, 175.6836], note: "Booked · Jul 11 afternoon" },
  { name: "Zorb Rotorua", leg: "New Zealand", category: "activity", city: "Rotorua", booked: true, coords: [-38.08120, 176.21258], note: "Booked · Jul 12" },
  { name: "Polynesian Spa", leg: "New Zealand", category: "wellness", city: "Rotorua", booked: false, coords: [-38.1490, 176.2540], note: "Geothermal · walk-in Jul 12" },
  { name: "Te Puia", leg: "New Zealand", category: "culture", city: "Rotorua", booked: false, coords: [-38.16435, 176.25017], note: "Geothermal + Māori culture" },
  { name: "Wai-O-Tapu Thermal Wonderland", leg: "New Zealand", category: "activity", city: "Rotorua", booked: false, coords: [-38.35585, 176.36755], note: "Geothermal park" },
  { name: "Hamilton Gardens", leg: "New Zealand", category: "culture", city: "Hamilton", booked: false, coords: [-37.80507, 175.30110], note: "Free entry · themed gardens" },
];

if (typeof module !== "undefined" && module.exports) { module.exports = { TRIP_PLACES }; }
