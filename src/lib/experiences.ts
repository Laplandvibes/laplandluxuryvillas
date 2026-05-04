import { GYG_LINKS } from './affiliate'

export interface Experience {
  slug: string
  name: string
  category: 'aurora' | 'wilderness' | 'culinary' | 'arrival'
  /** One sentence — the actual experience, not the marketing version. */
  hook: string
  /** Two short paragraphs for the experience page or modal. */
  copy: [string, string]
  /** Where this is normally available (geographic / property constraint). */
  available: string
  /** "From €X / person" or "On request" — never invent a price. */
  fromPerPerson?: number
  fromPerGroup?: number
  /** Concierge-only = no public booking widget; goes straight to private@laplandvibes.com. */
  conciergeOnly?: boolean
  /** External booking URL (GYG affiliate-attributed) when available. */
  bookingUrl?: string
  imageGradient: string
}

export const EXPERIENCES: Experience[] = [
  {
    slug: 'private-aurora-photography-night',
    name: 'Private Aurora Photography Night',
    category: 'aurora',
    hook: 'A single guide, your group, and a heated photography vehicle that follows the forecast wherever it points.',
    copy: [
      'A six-hour private aurora chase with a certified Finnish nature photography guide. The vehicle is heated and stocked; tripods, cable releases and arctic-rated cameras are loaned if you don\'t bring your own. The route is decided that afternoon based on the kp-index and cloud-cover forecast.',
      'Hot food and reindeer-fur ground covers come standard. Coaching covers exposure for the aurora itself, foreground composition, and post-processing for the same evening.',
    ],
    available: 'Inari, Saariselkä, Levi, Rovaniemi — Sep–Apr',
    fromPerGroup: 1850,
    bookingUrl: GYG_LINKS.privateAurora,
    imageGradient: 'linear-gradient(135deg, #0A1A2E 0%, #14304A 50%, #061020 100%)',
  },
  {
    slug: 'helicopter-aurora-flight',
    name: 'Helicopter Aurora Flight',
    category: 'aurora',
    hook: 'A 45-minute night helicopter flight above the cloud layer to the auroras themselves.',
    copy: [
      'Operated by Finland\'s only night-VFR-certified helicopter operator out of Rovaniemi and Ivalo. The flight clears the local cloud layer and circles inside the active aurora oval — a perspective impossible from the ground.',
      'Ground photography is included on either side of the flight; the in-flight portion is for the experience itself, not the camera. Maximum four passengers per AS350. Weather-window dependent — concierge tracks the forecast and notifies the day before.',
    ],
    available: 'Rovaniemi, Ivalo — Oct–Mar (weather-dependent)',
    fromPerPerson: 1450,
    bookingUrl: GYG_LINKS.helicopter,
    imageGradient: 'linear-gradient(135deg, #1A0F2E 0%, #2A1A4A 50%, #100820 100%)',
  },
  {
    slug: 'private-chef-arctic-tasting',
    name: 'In-Villa Private Chef Tasting',
    category: 'culinary',
    hook: 'A nine-course Finnish-Sami tasting menu cooked in your villa kitchen by a working Lapland chef.',
    copy: [
      'A working chef from one of Lapland\'s serious kitchens — Nili, Aanaar, Northern Lights Ranch — comes to your villa for an evening. The menu is built around what\'s actually in season that week: cold-water arctic char, cloudberry, smoked reindeer, fresh forest mushrooms, sea-buckthorn, juniper.',
      'Includes a wine pairing curated to the menu, ingredients, prep, service, and cleanup. Ten guests maximum. Vegetarian, gluten-free and shellfish-free menus on request, with at least 72 hours notice.',
    ],
    available: 'Any villa in the collection — year-round',
    fromPerGroup: 2400,
    conciergeOnly: true,
    imageGradient: 'linear-gradient(135deg, #1F1813 0%, #2E2218 50%, #14100B 100%)',
  },
  {
    slug: 'private-husky-safari',
    name: 'Private Husky Safari',
    category: 'wilderness',
    hook: 'Your own sled team, your own kennel guide, into the boreal forest at first light.',
    copy: [
      'A private team of sixteen sled dogs and one kennel guide. The route runs into the working trail network of a serious sled-dog kennel — typically 35 km, with a fire-side break for hot lingonberry juice and grilled sausage at the halfway point.',
      'You drive your own sled (a 20-minute briefing first). Wool overalls, mittens, and arctic boots are provided. Group of two to six — no shared groups, never combined with strangers.',
    ],
    available: 'Rovaniemi, Levi, Saariselkä — Dec–Apr',
    fromPerPerson: 480,
    bookingUrl: GYG_LINKS.husky,
    imageGradient: 'linear-gradient(135deg, #1A2515 0%, #243321 50%, #0F1810 100%)',
  },
  {
    slug: 'private-snowmobile-wilderness',
    name: 'Private Snowmobile Wilderness Crossing',
    category: 'wilderness',
    hook: 'A guided 80-km snowmobile route through frozen lakes and untouched forest, with a wood-fired lunch.',
    copy: [
      'A full-day guided snowmobile route on the upper-fell trails — the network the local guides use, not the tourist loop. Lunch is cooked over a fire on the trail (reindeer stew, fire-baked bread, hot juice) by the guide.',
      'BRP machines, helmets, balaclavas and wool overalls included. Two-person sleds available. Driving license required for the driver; passenger seat needs no license. Maximum four sleds per group.',
    ],
    available: 'Saariselkä, Inari, Levi — Dec–Apr',
    fromPerPerson: 390,
    bookingUrl: GYG_LINKS.snowmobileVip,
    imageGradient: 'linear-gradient(135deg, #1A1F2A 0%, #232A3A 50%, #0F121A 100%)',
  },
  {
    slug: 'private-reindeer-sami-evening',
    name: 'Private Reindeer & Sami Evening',
    category: 'wilderness',
    hook: 'Reindeer sleighing on a working farm, then an evening in a private kota with a Sami host.',
    copy: [
      'Two hours of reindeer sledding on a working herding farm followed by a private evening in a heated kota (open-fire teepee). The host is a Sami reindeer herder who runs the farm — the conversation, not a script, is the experience.',
      'Dinner is sautéed reindeer with mashed potatoes and lingonberry, prepared on the open fire. Stories about the herd, the migration year, the joik singing tradition. Maximum twelve guests.',
    ],
    available: 'Inari, Saariselkä — year-round (sledding Dec–Mar)',
    fromPerPerson: 320,
    bookingUrl: GYG_LINKS.reindeer,
    imageGradient: 'linear-gradient(135deg, #2A1B12 0%, #3A2818 50%, #1A100A 100%)',
  },
  {
    slug: 'private-jet-arrival',
    name: 'Private Jet Arrival',
    category: 'arrival',
    hook: 'Direct private-jet transfer to Ivalo, Kittilä or Rovaniemi — no commercial check-in, no transit hub.',
    copy: [
      'Coordinated through our jet partners in Helsinki, Geneva and Doha. Direct flights into Ivalo (closest to Saariselkä / Inari villas), Kittilä (closest to Levi / Ylläs), or Rovaniemi (best for Octola / Arctic TreeHouse).',
      'Full handling: ground transfer to your villa with a heated arctic-spec vehicle, luggage forwarded, customs cleared without queue. Concierge files the slot and pairs the arrival with the villa check-in time.',
    ],
    available: 'All destinations — year-round',
    conciergeOnly: true,
    imageGradient: 'linear-gradient(135deg, #1A1F2A 0%, #283246 50%, #0F141C 100%)',
  },
  {
    slug: 'helicopter-villa-transfer',
    name: 'Helicopter Villa Transfer',
    category: 'arrival',
    hook: 'Lift from the regional airport directly to your villa landing pad — no road transfer.',
    copy: [
      'Used most often for arrivals into Octola (40 min from Rovaniemi by air) and the private lakeside log estates on Lake Inari. The aircraft is the same AS350 used for the aurora flights; a single sector takes 20–45 minutes.',
      'Maximum five passengers + luggage. Concierge times the lift to the villa check-in and the daylight window — winter sunset is 15:00 in deep season.',
    ],
    available: 'Rovaniemi → Octola, Ivalo → Lake Inari estates',
    fromPerGroup: 2900,
    conciergeOnly: true,
    imageGradient: 'linear-gradient(135deg, #1F1820 0%, #2D2230 50%, #100C12 100%)',
  },
]

export const experiencesByCategory = (cat: Experience['category']) =>
  EXPERIENCES.filter((e) => e.category === cat)

export const experienceBySlug = (slug: string) => EXPERIENCES.find((e) => e.slug === slug)
