// Curated villa + suite collection. The descriptions are editorial.
//
// 🔴 PRICES — READ `src/lib/rate.ts` BEFORE ADDING ONE
// ----------------------------------------------------
// Never write a bare number here. `fromPerNight` is a `VerifiedRate`: an
// amount, its currency, the OFFICIAL URL it was read from, and the date it was
// read. All four or nothing, enforced by the type — a hand-written estimate
// does not compile. That is deliberate.
//
// Until 2026-07-26 all eight entries below carried invented four- and
// three-figure nightly rates, written in the launch commit (880fbf1) with no
// source. They rendered on every card and detail page AND were sent to Google
// as `priceRange` structured data. They are gone. No entry sets a rate today,
// because a 2026-07-26 check of all seven named properties found that none of
// them publishes a stable, citable "from €X/night" — see `rate.ts` for the
// evidence and for what does and does not count as a source.
//
// When a rate is unset the card and the detail page render the existing "on
// request" / private-enquiry branch, which is already translated into all 12
// locales. That branch is the correct answer, not a degraded one. Anything new
// lives behind the private enquiry until a rate is genuinely verified.
//
// Never invent a star rating either. Ratings come from real Google data via
// `src/data/properties.ts`, and are always rendered with their scope stated.
//
// Where a property has a bookable listing we deep-link through the redirect
// Worker (`go.laplandvibes.com`; fi -> Sembo, other locales -> Trip.com).

import { PROPERTY_SEARCH, type Lang } from './affiliate'
import type { VerifiedRate } from './rate'
import { overlayVilla } from './villaI18n'

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
  /**
   * Verified published nightly rate. Unset = the "on request" / enquiry
   * branch renders and no `priceRange` is emitted to structured data.
   * 🔴 Never a hand-written estimate. See `src/lib/rate.ts`.
   */
  fromPerNight?: VerifiedRate
  /**
   * 🔴 OPTIONAL SINCE 2026-08-02, and that is the point. Not every property
   * publishes a bedroom count — Lapland Hotels Saaga publishes "holiday
   * apartments accommodating 1 to 8 people" and nothing more, and its
   * apartments genuinely differ. A required field here forced a number to
   * exist, and the only way to satisfy it for such a property is to make one
   * up. Unset renders no bedroom chip and emits no `numberOfRooms`.
   */
  bedrooms?: number
  sleeps: number
  /** External Hotels.com search URL via go.lv (already built in lib/affiliate). */
  bookingUrl?: string
  /** Treat as "private enquiry" — no public listing, route to /private-inquiry. */
  inquiryOnly?: boolean
  /** Local image path (1600×1066) — placeholder gradient until generated. */
  image?: string
  imageGradient: string
}

export const getVillas = (lang: Lang = 'en'): Villa[] => {
  // Every villa deep-links to its own property page. A city-level
  // HOTEL_SEARCH fallback used to live here; it existed only for the two
  // unnamed house-inventory entries removed 2026-08-02, and its absence is
  // now the guard: a villa with no property to link is not a villa.
  const PS = PROPERTY_SEARCH(lang)
  const _list: Villa[] = [
  {
    slug: 'kakslauttanen-glass-igloo-suite',
    name: 'Kakslauttanen Kelo-Glass Suite',
    destination: 'Saariselkä',
    category: 'glass-roof',
    tier: 'signature',
    tagline: 'Heated thermal glass over a hand-crafted kelo-pine cabin, the original aurora bedroom.',
    copy: [
      'A self-contained log villa with its own glass-roof bedroom, private kitchen, fireplace lounge and Finnish sauna. The thermal glass stays clear at −30 °C, so you watch the auroras from a king bed without leaving the duvet.',
      'Located inside the Kakslauttanen estate near Urho Kekkonen National Park, a 35-minute private transfer from Ivalo airport. Half-board with the resort restaurant available; private chef on request.',
    ],
    signature: [
      'Heated glass roof over the bedroom (clear in −30 °C)',
      'Private wood-burning sauna + outdoor wood-fired hot tub',
      'Two bedrooms, full kitchen, fireplace lounge',
      'Private transfer included from Ivalo airport',
      'In-room aurora alarm via reception',
      'Half-board option through the resort kitchen',
    ],
    bedrooms: 2,
    sleeps: 4,
    bookingUrl: PS.kakslauttanen,
    image: '/images/villa-kakslauttanen.webp',
    imageGradient: 'linear-gradient(135deg, #0F1F3A 0%, #1A2F4F 45%, #0A1628 100%)',
  },
  {
    slug: 'arctic-treehouse-suite',
    name: 'Arctic TreeHouse Penthouse',
    destination: 'Rovaniemi',
    category: 'designer-suite',
    tier: 'signature',
    tagline: 'Studio Puisto-designed cantilevered suite with a full glass façade pointed at the auroras.',
    copy: [
      'A 73 m² penthouse suite on stilts, with floor-to-ceiling glass running the full width. Designed by Studio Puisto. Private terrace with hot tub. The building was built around a single pine, every interior detail picked to disappear so the forest stays the only object in the room.',
      'Five minutes from Santa Claus Village, useful as a base for Christmas-season family travellers who want a quiet retreat at night and easy access to Rovaniemi by day.',
    ],
    signature: [
      '73 m² suite, full-height glass façade north-facing',
      'Private terrace with hot tub + outdoor sauna',
      'Studio Puisto interior, Finnish design icons throughout',
      'Underfloor heating, blackout drapes for daytime sleep',
      'On-property Rakas restaurant',
      'Five minutes to Santa Claus Village',
    ],
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PS.arcticTreeHouse,
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
      'Inari sits under the auroral oval, at the latitude where the Finnish Meteorological Institute observes the aurora on about three nights in four. Aurora Village is a 24-cabin estate with no through traffic and no neighbouring villages on the visible horizon. The cabins are spaced for privacy, with the bed under the glass and the sofa facing it.',
      'The on-site Sami-led restaurant runs a tasting menu around reindeer, arctic char and cloudberry. Aurora alarms are radioed cabin-to-cabin so nobody wakes the villa next door.',
    ],
    signature: [
      'Glass-roof cabin with the bed under the apex',
      '24 cabins on a 30-hectare estate, generously spaced',
      'Sami-led restaurant on-site, tasting menu nightly',
      'Aurora alarm via in-cabin radio',
      'Aurora observed on about 3 nights in 4 at this latitude (FMI)',
      'Free private snowshoeing trail from the property',
    ],
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PS.auroraVillage,
    image: '/images/villa-aurora-village.webp',
    imageGradient: 'linear-gradient(135deg, #0E1B2E 0%, #1B2A45 50%, #0B1424 100%)',
  },
  {
    slug: 'levin-iglut-golden-crown',
    name: 'Levin Iglut Golden Crown',
    destination: 'Levi',
    category: 'glass-roof',
    tier: 'signature',
    tagline: 'Glass igloos perched above Levi fell, facing south over the valley rather than north into forest.',
    copy: [
      'Forty-two glass igloos arranged on the southern shoulder of Levi fell. Most aurora cabins point north into a blank forest; Levin Iglut is one of very few that frames the lights above the lit fell-village skyline below, better for photographers, more dramatic at dusk.',
      'Walking distance to Levi village (gondola, restaurants, ski-in/ski-out) but the igloos themselves are quiet. Restaurant Aurora on-site, with the chef sourcing within 100 km.',
    ],
    signature: [
      'South-facing aurora panorama (rare for Lapland)',
      'Walking distance to Levi gondola + village',
      'On-site Restaurant Aurora, 100 km sourcing radius',
      'Premium suites have a private hot tub on the deck',
      'Ski-in / ski-out access in winter season',
      'In-room aurora alarm',
    ],
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PS.levinIglut,
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
      'The lodge runs Sami cultural evenings, ice-fishing on the lake, and one of the few certified guided aurora-photography programmes in Finland. Rooms book out a year in advance for the February peak.',
    ],
    signature: [
      'Transparent panoramic dome over the bed',
      'Private wood-fired hot tub on the porch',
      'Wilderness village location, 20 min from Russian border',
      'Certified aurora-photography guided programme',
      'Sami cultural programme several nights weekly',
      'Lake Inari fishing + traditional smoke sauna',
    ],
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PS.nellim,
    image: '/images/villa-nellim.webp',
    imageGradient: 'linear-gradient(135deg, #1A2438 0%, #243153 50%, #101830 100%)',
  },
  {
    slug: 'star-arctic-suite',
    name: 'Star Arctic Skyview Suite',
    destination: 'Saariselkä',
    category: 'designer-suite',
    tier: 'signature',
    tagline: 'A glass-walled suite at the summit of Kaunispää fell, above the treeline and above the village lights.',
    copy: [
      'Star Arctic sits at the very top of Kaunispää, the fell that rises directly from Saariselkä village. The Skyview suites have full-height glass walls on three sides, no curtains, and an elevation high enough to clear the local treeline, meaning a true 270° panorama from the bed.',
      'The summit road is private and lit at night so guests can drive themselves. The hotel has its own observatory, restaurant, and a fleet of fat-bikes for the summer.',
    ],
    signature: [
      '270° glass at the summit, above the treeline',
      'Private summit road, lit at night',
      'On-site dark-sky observatory (telescope nights)',
      'Sauna with floor-to-ceiling fell view',
      'Premium suites, corner glass, separate lounge',
      'Five-minute drive to Saariselkä village',
    ],
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PS.starArctic,
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
    bedrooms: 1,
    sleeps: 2,
    bookingUrl: PS.apukka,
    image: '/images/villa-apukka.webp',
    imageGradient: 'linear-gradient(135deg, #1A1828 0%, #251F38 50%, #110E1C 100%)',
  },
  {
    // Ylläs, added 2026-08-02 (Vesa: "THERE IS VILLAS"). 🔴 EVERY LINE BELOW
    // COMES FROM THE PROPERTY'S OWN PUBLISHED PAGES (laplandhotels.com,
    // read 2026-08-02) OR FROM THE VERIFIED GOOGLE RECORD — nothing here is
    // inferred. Notably absent: a bedroom count and a named room type,
    // because the hotel publishes neither. It publishes "holiday apartments
    // accommodating 1 to 8 people", so that is exactly what this says.
    slug: 'lapland-hotels-saaga-apartment',
    name: 'Saaga Holiday Apartment',
    destination: 'Ylläs',
    category: 'alpine-chalet',
    tier: 'private',
    tagline: 'A self-contained apartment at the foot of Ylläs’ southern slopes, with the hotel’s spa attached.',
    copy: [
      'Lapland Hotels Saaga sits in Ylläsjärvi village, immediately below the southern slopes of the Ylläs ski resort. Alongside its hotel rooms it lets holiday apartments for one to eight guests, either inside the hotel grounds or about 300 metres from the main building, so a family or a small group gets its own space without leaving the resort.',
      'The apartments come with the hotel behind them: a spa with a pool area, whirlpools and steam saunas, a fitness room and treatments, and a private sauna for up to fifteen people with its own relaxation area. There are three restaurants on site, including the Biegga buffet, and breakfast is built on northern ingredients.',
    ],
    signature: [
      'Ylläsjärvi village, below the southern slopes of Ylläs',
      'Holiday apartments for 1–8 guests',
      'On the hotel grounds or about 300 m from the main building',
      'Spa: pool area, whirlpools, steam saunas, fitness room',
      'Private sauna for up to 15 with its own relaxation area',
      'Three restaurants on site, including the Biegga buffet',
    ],
    // 🔴 No `bedrooms`: the hotel publishes a guest range, not a room count,
    // and its apartments differ. `sleeps: 8` is the published upper bound.
    sleeps: 8,
    bookingUrl: PS.laplandHotelsSaaga,
    imageGradient: 'linear-gradient(135deg, #12212E 0%, #1D3242 50%, #0C1720 100%)',
  },
  ]
  return _list.map((v) => overlayVilla(v, lang))
}

// Backward-compat default export (EN). Components that need locale-aware
// URLs should call getVillas(lang) directly.
export const VILLAS: Villa[] = getVillas('en')

export const villaBySlug = (slug: string, lang: Lang = 'en') =>
  getVillas(lang).find((v) => v.slug === slug)

export const villasByDestination = (destination: string, lang: Lang = 'en') =>
  getVillas(lang).filter((v) => v.destination.toLowerCase() === destination.toLowerCase())

export const villasByCategory = (category: VillaCategory, lang: Lang = 'en') =>
  getVillas(lang).filter((v) => v.category === category)

export const signatureVillas = (lang: Lang = 'en') =>
  getVillas(lang).filter((v) => v.tier === 'signature').slice(0, 4)
