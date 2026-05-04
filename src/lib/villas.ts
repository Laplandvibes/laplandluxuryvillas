// Curated villa + suite collection. The descriptions are editorial — never
// invent a star rating or a price. Where a property has a known Hotels.com
// listing we deep-link via the property_card SID. Anything new lives in the
// concierge funnel until we have a verified rate.

import { PROPERTY_SEARCH, HOTEL_SEARCH } from './affiliate'

export type VillaCategory = 'glass-roof' | 'log-estate' | 'designer-suite' | 'alpine-chalet' | 'lakeside-retreat'
export type VillaTier = 'signature' | 'private' | 'reserve'

export interface Villa {
  slug: string
  name: string
  destination: string
  category: VillaCategory
  tier: VillaTier
  /** One-sentence editorial — what the place actually feels like, not a brochure line. */
  tagline: string
  /** Two short paragraphs for the card-detail / villa-page overview. */
  copy: [string, string]
  /** 5–8 specifics. No marketing adjectives — only things you can verify on arrival. */
  signature: string[]
  /** "From €X,XXX/night" — null when only available via concierge. */
  fromPerNight?: number
  bedrooms: number
  sleeps: number
  /** External Hotels.com search URL via go.lv (already built in lib/affiliate). */
  bookingUrl?: string
  /** Treat as "private inquiry" — no public listing, route through concierge. */
  conciergeOnly?: boolean
  /** Local image path (1600×1066) — placeholder gradient until generated. */
  image?: string
  imageGradient: string
}

export const VILLAS: Villa[] = [
  {
    slug: 'kakslauttanen-glass-igloo-suite',
    name: 'Kakslauttanen Kelo-Glass Suite',
    destination: 'Saariselkä',
    category: 'glass-roof',
    tier: 'signature',
    tagline: 'Heated thermal glass over a hand-crafted kelo-pine cabin — the original aurora bedroom.',
    copy: [
      'A self-contained log villa with its own glass-roof bedroom, private kitchen, fireplace lounge and Finnish sauna. The thermal glass stays clear at −30 °C, so you watch the auroras from a king bed without leaving the duvet.',
      'Located inside the Kakslauttanen estate near Urho Kekkonen National Park — a 35-minute private transfer from Ivalo airport. Half-board with the resort restaurant available; private chef on request.',
    ],
    signature: [
      'Heated glass roof over the bedroom (clear in −30 °C)',
      'Private wood-burning sauna + outdoor wood-fired hot tub',
      'Two bedrooms, full kitchen, fireplace lounge',
      'Private transfer included from Ivalo airport',
      'In-room aurora alarm via reception',
      'Half-board option through the resort kitchen',
    ],
    fromPerNight: 1450,
    bedrooms: 2,
    sleeps: 4,
    bookingUrl: PROPERTY_SEARCH.kakslauttanen,
    image: '/images/villa-kakslauttanen.webp',
    imageGradient: 'linear-gradient(135deg, #0F1F3A 0%, #1A2F4F 45%, #0A1628 100%)',
  },
  {
    slug: 'octola-private-wilderness',
    name: 'Octola Private Wilderness',
    destination: 'Rovaniemi',
    category: 'log-estate',
    tier: 'reserve',
    tagline: 'A 100-square-kilometre private wilderness reserve. One villa, ten guests, full staff.',
    copy: [
      'Octola is a single hand-built timber lodge inside its own forest — booked exclusively, never shared. Five suites, full chef brigade, butler, private guides for husky, snowmobile, fat-bike, snowshoe.',
      'The lodge has its own aurora-watching deck with floor heating, a wood-fired sauna village by the lake, a dark-sky observatory, and a wine cellar specifically built around Nordic pairings.',
    ],
    signature: [
      'Exclusive-use only — never shared with other guests',
      'Five suites for up to ten guests + nanny rooms',
      '100 km² private forest reserve — no neighbours',
      'Resident chef brigade + butler + private guides',
      'Lake sauna village + dark-sky observation deck',
      'Helicopter transfer from Rovaniemi available',
    ],
    bedrooms: 5,
    sleeps: 10,
    conciergeOnly: true,
    bookingUrl: PROPERTY_SEARCH.octola,
    image: '/images/villa-octola.webp',
    imageGradient: 'linear-gradient(135deg, #1A2515 0%, #0F1A0E 50%, #0A1208 100%)',
  },
  {
    slug: 'arctic-treehouse-suite',
    name: 'Arctic TreeHouse Penthouse',
    destination: 'Rovaniemi',
    category: 'designer-suite',
    tier: 'signature',
    tagline: 'Rajakangas-designed cantilevered suite with a full glass façade pointed at the auroras.',
    copy: [
      'A 73 m² penthouse suite on stilts, with floor-to-ceiling glass running the full width. Designed by Studio Puisto. Private terrace with hot tub. The building was built around a single pine — every interior detail picked to disappear so the forest stays the only object in the room.',
      'Five minutes from Santa Claus Village — useful as a base for Christmas-season family travellers who want a quiet retreat at night and easy access to Rovaniemi by day.',
    ],
    signature: [
      '73 m² suite, full-height glass façade north-facing',
      'Private terrace with hot tub + outdoor sauna',
      'Studio Puisto interior — Finnish design icons throughout',
      'Underfloor heating, blackout drapes for daytime sleep',
      'On-property Rakas restaurant (chef Kari Aihinen)',
      'Five minutes to Santa Claus Village',
    ],
    fromPerNight: 980,
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PROPERTY_SEARCH.arcticTreeHouse,
    image: '/images/villa-arctic-treehouse.webp',
    imageGradient: 'linear-gradient(135deg, #2A1810 0%, #1A0F08 50%, #0F0805 100%)',
  },
  {
    slug: 'aurora-village-glass-cabin',
    name: 'Aurora Village Glass Cabin',
    destination: 'Inari',
    category: 'glass-roof',
    tier: 'private',
    tagline: 'Twenty-four glass cabins facing nothing but forest and the aurora oval.',
    copy: [
      'Inari sits squarely under the auroral oval — statistically the most reliable Northern Lights latitude in Europe. Aurora Village is a 24-cabin estate with no through traffic, no neighbouring villages on the visible horizon. The cabins are spaced for privacy, with the bed under the glass and the sofa facing it.',
      'The on-site Sami-led restaurant runs a tasting menu around reindeer, arctic char and cloudberry. Aurora alarms are radioed cabin-to-cabin so nobody wakes the villa next door.',
    ],
    signature: [
      'Glass-roof cabin with the bed under the apex',
      '24 cabins on a 30-hectare estate, generously spaced',
      'Sami-led restaurant on-site, tasting menu nightly',
      'Aurora alarm via in-cabin radio',
      'Inari is the most reliable aurora latitude in the EU',
      'Free private snowshoeing trail from the property',
    ],
    fromPerNight: 720,
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PROPERTY_SEARCH.auroraVillage,
    image: '/images/villa-aurora-village.webp',
    imageGradient: 'linear-gradient(135deg, #0E1B2E 0%, #1B2A45 50%, #0B1424 100%)',
  },
  {
    slug: 'levin-iglut-golden-crown',
    name: 'Levin Iglut Golden Crown',
    destination: 'Levi',
    category: 'glass-roof',
    tier: 'signature',
    tagline: 'Glass igloos perched above Levi fell — the only Lapland igloo cluster facing south to the valley.',
    copy: [
      'Forty-two glass igloos arranged on the southern shoulder of Levi fell. Most aurora cabins point north into a blank forest; Levin Iglut is one of very few that frames the lights above the lit fell-village skyline below — better for photographers, more dramatic at dusk.',
      'Walking distance to Levi village (gondola, restaurants, ski-in/ski-out) but the igloos themselves are quiet. Restaurant Aurora on-site, with the chef sourcing within 100 km.',
    ],
    signature: [
      'South-facing aurora panorama (rare for Lapland)',
      'Walking distance to Levi gondola + village',
      'On-site Restaurant Aurora — 100 km sourcing radius',
      'Premium suites have a private hot tub on the deck',
      'Ski-in / ski-out access in winter season',
      'In-room aurora alarm',
    ],
    fromPerNight: 690,
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PROPERTY_SEARCH.levinIglut,
    image: '/images/villa-levin-iglut.webp',
    imageGradient: 'linear-gradient(135deg, #1F1A2E 0%, #2A2240 50%, #14101F 100%)',
  },
  {
    slug: 'wilderness-hotel-nellim-aurora-bubble',
    name: 'Nellim Aurora Bubble',
    destination: 'Inari',
    category: 'glass-roof',
    tier: 'private',
    tagline: 'A glass bubble suite at the edge of the boreal forest, twenty minutes from the Russian border.',
    copy: [
      'Nellim is a working wilderness village (population 220) on the eastern shore of Lake Inari. The aurora bubbles are set apart from the main lodge in their own clearing, each with a panoramic transparent dome over the bed and a wood-fired hot tub on the porch.',
      'The lodge runs Sami cultural evenings, ice-fishing on the lake, and one of the few certified guided aurora-photography programmes in Finland. Rooms book out a year in advance for the February peak — concierge can sometimes find a release.',
    ],
    signature: [
      'Transparent panoramic dome over the bed',
      'Private wood-fired hot tub on the porch',
      'Wilderness village location — 20 min from Russian border',
      'Certified aurora-photography guided programme',
      'Sami cultural programme several nights weekly',
      'Lake Inari fishing + traditional smoke sauna',
    ],
    fromPerNight: 590,
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PROPERTY_SEARCH.nellim,
    image: '/images/villa-nellim.webp',
    imageGradient: 'linear-gradient(135deg, #1A2438 0%, #243153 50%, #101830 100%)',
  },
  {
    slug: 'star-arctic-suite',
    name: 'Star Arctic Skyview Suite',
    destination: 'Saariselkä',
    category: 'designer-suite',
    tier: 'signature',
    tagline: 'A glass-walled suite at the summit of Kaunispää fell — the highest aurora bedroom in the country.',
    copy: [
      'Star Arctic sits at the very top of Kaunispää, the fell that rises directly from Saariselkä village. The Skyview suites have full-height glass walls on three sides, no curtains, and an elevation high enough to clear the local treeline — meaning a true 270° panorama from the bed.',
      'The summit road is private and lit at night so guests can drive themselves. The hotel has its own observatory, restaurant, and a fleet of fat-bikes for the summer.',
    ],
    signature: [
      '270° glass on the highest fell summit in the area',
      'Private summit road, lit at night',
      'On-site dark-sky observatory (telescope nights)',
      'Sauna with floor-to-ceiling fell view',
      'Premium suites — corner glass, separate lounge',
      'Five-minute drive to Saariselkä village',
    ],
    fromPerNight: 540,
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PROPERTY_SEARCH.starArctic,
    image: '/images/villa-star-arctic.webp',
    imageGradient: 'linear-gradient(135deg, #142235 0%, #1F3050 50%, #0C1626 100%)',
  },
  {
    slug: 'apukka-resort-aurora-cabin',
    name: 'Apukka Aurora Wagon',
    destination: 'Rovaniemi',
    category: 'lakeside-retreat',
    tier: 'private',
    tagline: 'Heritage-style aurora wagons on the shore of a frozen lake, ten minutes from Rovaniemi airport.',
    copy: [
      'A handful of restored period rail wagons rebuilt as glass-roofed aurora cabins, set right on the edge of Apukkajärvi lake. Convenient if you only have two nights and want to land, transfer, and be in your bed under the glass within an hour.',
      'On-site husky farm, reindeer, ice-fishing, snowmobile route into the wilderness. The wagons themselves are intimate (one bedroom, one bath, lounge); the resort handles all activity logistics.',
    ],
    signature: [
      'Heritage rail-wagon design, glass-roofed bedroom',
      'On the shore of Apukkajärvi lake',
      '10-minute transfer from Rovaniemi airport',
      'On-site husky + reindeer + ice-fishing',
      'Snowmobile track from the property',
      'Aurora alarm + cabin-side hot tub',
    ],
    fromPerNight: 460,
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PROPERTY_SEARCH.apukka,
    image: '/images/villa-apukka.webp',
    imageGradient: 'linear-gradient(135deg, #1A1828 0%, #251F38 50%, #110E1C 100%)',
  },
  {
    slug: 'private-lakeside-log-estate',
    name: 'The Lakeside Log Estate',
    destination: 'Inari',
    category: 'log-estate',
    tier: 'reserve',
    tagline: 'A private hand-built log house on its own bay of Lake Inari. Concierge inquiry only.',
    copy: [
      'A four-bedroom log estate on its own private bay, accessed by a single road. Used by a small group of repeat guests — we hold a few weeks each season as a private allocation.',
      'Includes a smoke sauna, two wood-fired hot tubs, a boat shed, and a private chef brigade we coordinate when the property is booked. Snowmobile and husky access via the bay in winter; canoe and lake fishing in the midnight-sun season.',
    ],
    signature: [
      'Four bedrooms on a private bay of Lake Inari',
      'Smoke sauna + two wood-fired hot tubs',
      'Private chef brigade arranged on request',
      'Snowmobile / husky access via the lake in winter',
      'Boat + canoe + dock for the midnight-sun season',
      'Concierge allocation — never on public listings',
    ],
    bedrooms: 4,
    sleeps: 8,
    conciergeOnly: true,
    bookingUrl: HOTEL_SEARCH.privateLogEstate,
    image: '/images/villa-lakeside-log.webp',
    imageGradient: 'linear-gradient(135deg, #0F1820 0%, #1A2735 50%, #0A1018 100%)',
  },
  {
    slug: 'designer-mountain-chalet-levi',
    name: 'The Designer Mountain Chalet',
    destination: 'Levi',
    category: 'alpine-chalet',
    tier: 'private',
    tagline: 'A modern architect-built chalet on Levi south slope. Ski-in / ski-out, private wellness floor.',
    copy: [
      'Three-bedroom architect-built chalet on the south slope of Levi fell, with a wellness floor (sauna, steam, plunge, treatment room) on the ground level and the living space opening to a 12 m terrace facing the valley.',
      'A short ski down to the Levi gondola; a short walk back up via the heated path. Includes daily housekeeping, breakfast set-up, and an on-call ski concierge.',
    ],
    signature: [
      'Architect-built three-bedroom chalet, south slope',
      'Ski-in / ski-out via the heated path',
      'Private wellness floor: sauna, steam, plunge, treatment room',
      '12 m glass terrace facing the valley',
      'Daily housekeeping + breakfast set-up included',
      'On-call ski concierge throughout the stay',
    ],
    fromPerNight: 1180,
    bedrooms: 3,
    sleeps: 6,
    conciergeOnly: true,
    bookingUrl: HOTEL_SEARCH.alpineChalet,
    image: '/images/villa-mountain-chalet.webp',
    imageGradient: 'linear-gradient(135deg, #1B1623 0%, #261E36 50%, #110D1B 100%)',
  },
]

export const villaBySlug = (slug: string) => VILLAS.find((v) => v.slug === slug)

export const villasByDestination = (destination: string) =>
  VILLAS.filter((v) => v.destination.toLowerCase() === destination.toLowerCase())

export const villasByCategory = (category: VillaCategory) =>
  VILLAS.filter((v) => v.category === category)

export const signatureVillas = () => VILLAS.filter((v) => v.tier === 'signature').slice(0, 4)
