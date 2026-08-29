import type { Lang } from './affiliate'
import { overlayDestination } from './villaI18n'

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
  /**
   * What the aurora is actually like HERE — horizon, light pollution, the shape
   * of the sky. Never a frequency number.
   *
   * 🔴 Until 2026-08-01 every entry ended in an invented statistic ("~200 /
   * ~220 / ~150 / ~180 clear-sky aurora nights per season"), written at launch
   * with no source and translated into eleven more languages. The phrasing also
   * conflated two different things: how often the aurora is ACTIVE, which the
   * Finnish Meteorological Institute does publish, and how often the sky is
   * CLEAR, which it does not publish per village.
   *
   * The frequency claim now comes from `shared/destinations/facts.ts`, which
   * quotes FMI's own scale for its own reference points and places each
   * destination in the band its latitude sits in. This field says the part that
   * is genuinely local and checkable.
   */
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
    position: 'The luxury aurora hub of northern Finland, Kakslauttanen, Star Arctic, the wild edge of Urho Kekkonen.',
    copy: [
      'Saariselkä sits on the northern fringe of Urho Kekkonen National Park, Finland\'s second-largest national park at 2,550 km², and is the village that defined glass-roof aurora accommodation. Most of the country\'s flagship glass cabins (Kakslauttanen, Star Arctic, Northern Lights Village) are within 10 km of the village.',
      'The village itself is small and walkable, with one main road, three serious restaurants, and direct access to the national park. Ivalo airport, 30 minutes by private transfer, handles regional jets and private charters.',
    ],
    highlights: [
      'Kakslauttanen Arctic Resort, the original glass-roof property',
      'Star Arctic Hotel, summit suites on Kaunispää fell',
      'Direct access to Urho Kekkonen National Park (wilderness-grade)',
      'Ivalo airport, private charter capable, 30 min transfer',
    ],
    arrival: 'Ivalo (IVL), 27 km, about 30 min by private transfer',
    auroraNote: 'Inland boreal forest with almost no settlement light for tens of kilometres in any direction. The fells give you a high, open horizon, which matters on nights when the arc sits low in the north.',
    imageGradient: 'linear-gradient(135deg, #0F1F3A 0%, #1A2F4F 50%, #0A1628 100%)',
    image: '/images/dest-saariselka.webp',
  },
  {
    slug: 'inari',
    name: 'Inari',
    position: 'Our northernmost destination, where the aurora is observed on about three nights in four. Sami heartland, Lake Inari, dark skies.',
    copy: [
      'Inari is Finland\'s northernmost municipality and the cultural capital of the Finnish Sami. The village sits on Lake Inari, the third-largest lake in Finland, with some 3,000 islands, more than 200 km north of the Arctic Circle and with no city light anywhere on the horizon.',
      'For luxury travel this means two things. First: at this latitude the Finnish Meteorological Institute observes the aurora on roughly three nights in four, and it stands overhead rather than low in the north. Second: the lakeside log estates are among the quietest accommodation in Lapland, with no through traffic and no neighbouring villages on the visible horizon.',
    ],
    highlights: [
      'Aurora Village, purpose-built 30-hectare glass-cabin estate',
      'Wilderness Hotel Nellim, aurora bubbles on Lake Inari\'s east shore',
      'Sami museum SIIDA + cultural programmes year-round',
      'Lake Inari, Finland\'s third-largest lake, around 3,000 islands',
    ],
    arrival: 'Ivalo (IVL), 40 km, about 40 min by private transfer',
    auroraNote: 'The northernmost of our destinations, and the one where the aurora most often stands directly overhead rather than low in the north. Lake Inari gives an unbroken horizon and there is no town light on it.',
    imageGradient: 'linear-gradient(135deg, #0E1B2E 0%, #1B2A45 50%, #0B1424 100%)',
    image: '/images/dest-inari.webp',
  },
  {
    slug: 'rovaniemi',
    name: 'Rovaniemi',
    position: 'The arrival city. Architect-built suites, daily direct flights from major hubs.',
    copy: [
      'Rovaniemi is the regional capital of Lapland and the easiest aurora destination to reach: multiple daily direct flights from Helsinki, plus seasonal direct flights from London, Frankfurt, Paris, Vienna and the Gulf. The airport is about 10 km north of the city centre, ten to fifteen minutes by road.',
      'The luxury inventory here is built around architect-designed suites within ten minutes of the airport (Arctic TreeHouse, Apukka). Helicopter transfers from the airport to remote reserves are common.',
    ],
    highlights: [
      'Arctic TreeHouse Hotel, Studio Puisto-designed cantilevered suites',
      'Apukka Resort, heritage aurora wagons on Apukkajärvi lake',
      'Direct flights from London / Frankfurt / Vienna / Doha (seasonal)',
    ],
    arrival: 'Rovaniemi (RVN), 10 km, 10 to 15 min from the city centre',
    auroraNote: 'The southernmost of our destinations and the only one with a city\'s light on the horizon, so the aurora is both less frequent here and harder to see when it comes. Best paired with at least one fell-village night further north.',
    imageGradient: 'linear-gradient(135deg, #1A1A28 0%, #25243C 50%, #10101C 100%)',
    image: '/images/dest-rovaniemi.webp',
  },
  {
    slug: 'levi',
    name: 'Levi',
    position: 'Finland\'s premier ski resort. Luxury chalets on the south slope, ski-in / ski-out from Levi gondola.',
    copy: [
      'Levi is the most developed fell resort in Lapland, a complete winter-sports village with 44 slopes and 26 lifts, two of them gondolas, and a designer chalet rental market that has grown serious in the last decade. The gondola runs from the village centre to the 531-metre summit; the south slope is where the private chalets sit, and a new chairlift opens on that side for the 2026-2027 season.',
      'Aurora viewing from Levi often faces south over the village, so the lit skyline becomes part of the photograph. Best paired with one or two nights further north (Inari or Saariselkä) for true wilderness aurora before returning here for the skiing.',
    ],
    highlights: [
      'Levin Iglut, south-facing glass igloos above the fell-village',
      'Designer architect-built chalets, south slope, ski-in/out',
      '44 slopes, 26 lifts including two gondolas, 38.5 km of groomed piste',
      'Kittilä airport (KTT) handles seasonal direct international flights',
    ],
    arrival: 'Kittilä (KTT), 15 km, about 20 min by private transfer',
    auroraNote: 'A south-facing panorama, which is rare in Lapland: the lit fell-village becomes the foreground of the photograph. The trade is the village light itself, so the darkest viewing is a short drive out.',
    imageGradient: 'linear-gradient(135deg, #1F1A2E 0%, #2A2240 50%, #14101F 100%)',
    image: '/images/dest-levi.webp',
  },
  {
    slug: 'yllas',
    name: 'Ylläs',
    position: 'The quiet alternative to Levi. Pallas-Yllästunturi national park, fewer crowds, deeper forest.',
    copy: [
      'Ylläs has 62 slopes, more than any other ski area in Finland, and the longest downhill runs in the country at over three kilometres from the treeless 719-metre top. It still feels a fraction of Levi\'s size, because the village is dispersed across two settlements (Äkäslompolo and Ylläsjärvi) separated by 15 km of fell, with Pallas-Yllästunturi National Park between them.',
      'For luxury travel the appeal is space. Architect-built chalets here sit alone on the fell-side; the national park trails leave from the property; the silence is what people actually pay for. Aurora visibility is excellent thanks to the very low local light pollution.',
    ],
    highlights: [
      'Pallas-Yllästunturi National Park, Finland\'s 3rd-largest',
      'Two ski villages on opposite sides of Ylläs fell',
      'At the edge of the national park, so no resort light on the fell side',
      'Around 300 km of maintained cross-country track, over 30 km of it lit',
    ],
    arrival: 'Kittilä (KTT), 40 km, about 45 min by private transfer',
    auroraNote: 'The chalets sit against the national park rather than in a resort centre, so you step out of the door into the dark instead of driving to find it.',
    imageGradient: 'linear-gradient(135deg, #1A2A1F 0%, #243A2E 50%, #0F1A14 100%)',
    image: '/images/dest-yllas.webp',
  },
]

export const getDestinations = (lang: Lang = 'en'): Destination[] => DESTINATIONS.map((d) => overlayDestination(d, lang))
export const destinationBySlug = (slug: string, lang: Lang = 'en') => getDestinations(lang).find((d) => d.slug === slug)
