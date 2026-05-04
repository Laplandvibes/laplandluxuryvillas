export interface Destination {
  slug: string
  name: string
  /** Editorial framing — the angle for our high-end audience, not a tourist board line. */
  position: string
  /** 2 paragraphs — what makes this destination land for a luxury guest. */
  copy: [string, string]
  /** 4 highlights, each one a specific verifiable thing. */
  highlights: string[]
  /** Nearest airport with private-charter capability. */
  arrival: string
  /** Aurora-statistic line — clear nights are the bottleneck, not the latitude. */
  auroraNote: string
  /** Image placeholder gradient (fallback when image unavailable). */
  imageGradient: string
  /** Local 4:5 portrait WebP. */
  image?: string
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'saariselka',
    name: 'Saariselkä',
    position: 'The luxury aurora hub of northern Finland — Kakslauttanen, Star Arctic, the wild edge of Urho Kekkonen.',
    copy: [
      'Saariselkä sits on the northern fringe of Urho Kekkonen National Park — Finland\'s wildest protected wilderness — and is the village that defined glass-roof aurora accommodation. Most of the country\'s flagship glass cabins (Kakslauttanen, Star Arctic, Northern Lights Village) are within 10 km of the village.',
      'The village itself is small and walkable, with one main road, three serious restaurants, and direct access to the national park. Ivalo airport — 30 minutes by private transfer — handles regional jets and private charters.',
    ],
    highlights: [
      'Kakslauttanen Arctic Resort — the original glass-roof property',
      'Star Arctic Hotel — summit suites on Kaunispää fell',
      'Direct access to Urho Kekkonen National Park (wilderness-grade)',
      'Ivalo airport — private charter capable, 30 min transfer',
    ],
    arrival: 'Ivalo (IVL) — 30 min by private transfer',
    auroraNote: 'Inland boreal forest, low light pollution. ~200 clear-sky aurora nights per season — Finland\'s second-best after Inari.',
    imageGradient: 'linear-gradient(135deg, #0F1F3A 0%, #1A2F4F 50%, #0A1628 100%)',
    image: '/images/dest-saariselka.webp',
  },
  {
    slug: 'inari',
    name: 'Inari',
    position: 'Statistically the most reliable aurora latitude in the European Union. Sami heartland, Lake Inari, dark skies.',
    copy: [
      'Inari is Finland\'s northernmost municipality and the cultural capital of the Finnish Sami. The village sits on Lake Inari — the third-largest lake in Finland, with 3,000 islands and the lowest light pollution south of the polar circle.',
      'For luxury travel this means two things. First: the auroras are statistically the most reliable in the European Union here, with the most ovally-overhead displays. Second: the lakeside log estates (some of which we hold privately) are the quietest accommodation in Lapland — no through traffic, no neighbouring villages on the visible horizon.',
    ],
    highlights: [
      'Aurora Village — purpose-built 30-hectare glass-cabin estate',
      'Wilderness Hotel Nellim — aurora bubbles on Lake Inari\'s east shore',
      'Sami museum SIIDA + cultural programmes year-round',
      'Private lakeside log estates available via concierge',
    ],
    arrival: 'Ivalo (IVL) — 45 min by private transfer',
    auroraNote: 'Highest aurora frequency in continental EU. ~220 clear-sky aurora nights per season — the statistical winner.',
    imageGradient: 'linear-gradient(135deg, #0E1B2E 0%, #1B2A45 50%, #0B1424 100%)',
    image: '/images/dest-inari.webp',
  },
  {
    slug: 'rovaniemi',
    name: 'Rovaniemi',
    position: 'The arrival city. Architect-built suites, Octola wilderness reserve, daily direct flights from major hubs.',
    copy: [
      'Rovaniemi is the regional capital of Lapland and the easiest aurora destination to reach — multiple daily direct flights from Helsinki, plus seasonal direct flights from London, Frankfurt, Paris, Vienna and the Gulf. The airport is six minutes from the city centre.',
      'The luxury inventory here splits into two: architect-built designer suites within ten minutes of the airport (Arctic TreeHouse, Apukka), and the private Octola reserve forty minutes south — a 100 km² single-villa wilderness. Helicopter transfers from the airport to Octola are common.',
    ],
    highlights: [
      'Arctic TreeHouse Hotel — Studio Puisto-designed cantilevered suites',
      'Octola Private Wilderness — a single villa on a 100 km² reserve',
      'Apukka Resort — heritage aurora wagons on Apukkajärvi lake',
      'Direct flights from London / Frankfurt / Vienna / Doha (seasonal)',
    ],
    arrival: 'Rovaniemi (RVN) — 6 min from city centre, 40 min to Octola',
    auroraNote: 'Lower aurora latitude than Inari/Saariselkä but still ~150 clear-sky aurora nights. Best paired with at least one fell-village night.',
    imageGradient: 'linear-gradient(135deg, #1A1A28 0%, #25243C 50%, #10101C 100%)',
    image: '/images/dest-rovaniemi.webp',
  },
  {
    slug: 'levi',
    name: 'Levi',
    position: 'Finland\'s premier ski resort. Luxury chalets on the south slope, ski-in / ski-out from Levi gondola.',
    copy: [
      'Levi is the most developed fell resort in Lapland — a complete winter-sports village with 43 lifts, multiple Michelin-recommended kitchens, and a designer chalet rental market that\'s grown serious in the last decade. The gondola runs from the village centre to the summit; the south slope is where the private chalets sit.',
      'Aurora visibility from Levi is south-facing and dramatic — rare for Lapland, since the lit village skyline becomes part of the photograph. Best paired with one or two nights further north (Inari or Saariselkä) for true wilderness aurora before returning here for the skiing.',
    ],
    highlights: [
      'Levin Iglut — south-facing glass igloos above the fell-village',
      'Designer architect-built chalets — south slope, ski-in/out',
      '43 ski lifts, longest run 2.5 km, season Nov–May',
      'Kittilä airport (KTT) handles seasonal direct intl. flights',
    ],
    arrival: 'Kittilä (KTT) — 20 min by private transfer',
    auroraNote: 'South-facing aurora panorama (rare). ~150 clear-sky nights, but the lit village provides foreground composition uncommon further north.',
    imageGradient: 'linear-gradient(135deg, #1F1A2E 0%, #2A2240 50%, #14101F 100%)',
    image: '/images/dest-levi.webp',
  },
  {
    slug: 'yllas',
    name: 'Ylläs',
    position: 'The quiet alternative to Levi. Pallas-Yllästunturi national park, fewer crowds, deeper forest.',
    copy: [
      'Ylläs is the second-largest fell resort in Finland but feels like a fifth of the size — the village is dispersed across two settlements (Äkäslompolo and Ylläsjärvi), separated by 15 km of fell, with Pallas-Yllästunturi National Park between them. The skiing inventory matches Levi; the visitor density does not.',
      'For luxury travel the appeal is space. Architect-built chalets here sit alone on the fell-side; the national park trails leave from the property; the silence is what people actually pay for. Aurora visibility is excellent thanks to the very low local light pollution.',
    ],
    highlights: [
      'Pallas-Yllästunturi National Park — Finland\'s 3rd-largest',
      'Two ski villages on opposite sides of Ylläs fell',
      'Lower light pollution than any other ski resort',
      'Dedicated cross-country trails (250 km total)',
    ],
    arrival: 'Kittilä (KTT) — 50 min by private transfer',
    auroraNote: 'Inside the national park boundary — among the lowest light-pollution readings in continental Europe. ~180 clear-sky nights.',
    imageGradient: 'linear-gradient(135deg, #1A2A1F 0%, #243A2E 50%, #0F1A14 100%)',
    image: '/images/dest-yllas.webp',
  },
]

export const destinationBySlug = (slug: string) => DESTINATIONS.find((d) => d.slug === slug)
