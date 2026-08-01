/**
 * Canonical per-destination FACTS for the whole LaplandVibes network.
 *
 * ── Why this file exists (Vesa 2026-08-01) ────────────────────────────────
 * Vesa asked the obvious question: with a destination page on so many sites,
 * why is there no one place per municipality where the research lives, so every
 * site gives the same answer? There wasn't. Measured the same day, across the
 * monorepo: Levi is defined in 54 files, Rovaniemi 55, Ylläs 48, Saariselkä 44,
 * Inari 31. Each site wrote its own numbers, and they drifted — laplandvibes'
 * `shared/resortHubs/levi.ts` had the verified "44 slopes / 26 lifts" while
 * laplandluxuryvillas printed "43 lifts", and its Ylläs page said 250 km of
 * cross-country track where the registry said ~300.
 *
 * ── What belongs here, and what does not ──────────────────────────────────
 * NUMBERS AND NAMES, each with the URL it was read from and the date it was
 * read. Never sentences: a shared prose string cannot carry a site's voice or
 * its 12 locales, and that is exactly how the per-site copies started. Sites
 * import the number and write their own sentence around it.
 *
 * `shared/resortHubs/*.ts` stays the RESORT LANDING-PAGE model (sections,
 * cards, partner spots). It should cite this file for its hard numbers rather
 * than keeping a second copy of them; until it does, the two are kept equal by
 * hand and the resortHubs header comments are the other half of the audit
 * trail.
 *
 * ── Adding or changing a fact ─────────────────────────────────────────────
 * 🔴 A number without `source` and `verified` does not belong in this file.
 * That is the whole point of it. Re-verify seasonally: lifts get built, trail
 * networks get re-measured, airports change their published distances.
 */

/** A number we can defend, with where it came from and when. */
export interface SourcedNumber {
  value: number;
  /** Official page the value was read from. Not a blog, not our own site. */
  source: string;
  /** YYYY-MM-DD the value was last read from `source`. */
  verified: string;
  /** Anything a reader needs so the number is not misleading on its own. */
  note?: string;
}

/**
 * The Finnish Meteorological Institute's own aurora-frequency scale.
 *
 * 🔴 This replaced a per-village invention. laplandluxuryvillas printed "~200 /
 * ~220 / ~150 / ~180 clear-sky aurora nights per season" for its five
 * destinations, in 12 languages, with no source — and the phrasing conflated
 * two different things: how often the aurora is ACTIVE (what FMI measures) and
 * how often the sky is CLEAR (which FMI does not publish per village).
 *
 * FMI publishes frequency for named reference points, so that is what the
 * network quotes, and a destination is placed in the band its latitude sits in
 * rather than given a number of its own.
 *
 * Source: ilmatieteenlaitos.fi/missa-ja-milloin, read 2026-08-01. Exact
 * wording: Kilpisjärvi "keskimäärin kolmena yönä neljästä (75 % öistä)",
 * Sodankylä "keskimäärin joka toisena yönä nähdään revontulia", Oulu-Kuusamo
 * "joka neljäntenä", Helsinki region "ainoastaan yksi yö kuukaudessa on
 * tilastollisesti mahdollinen revontulten havaitsemiseen".
 */
export type AuroraBand = 'far-north' | 'northern-lapland' | 'southern-lapland';

export const AURORA_SOURCE = 'https://www.ilmatieteenlaitos.fi/missa-ja-milloin';
export const AURORA_VERIFIED = '2026-08-01';

export const AURORA_BANDS: Record<AuroraBand, {
  /** FMI's reference location for this band. */
  reference: string;
  /** Nights in N on which the aurora is observed, as FMI states it. */
  nightsIn: [number, number];
}> = {
  // Kilpisjärvi and the northernmost municipalities.
  'far-north': { reference: 'Kilpisjärvi', nightsIn: [3, 4] },
  // Sodankylä's latitude: the fell resorts and the Inari/Saariselkä belt.
  'northern-lapland': { reference: 'Sodankylä', nightsIn: [1, 2] },
  // Oulu-Kuusamo's latitude: Rovaniemi and south.
  'southern-lapland': { reference: 'Oulu-Kuusamo', nightsIn: [1, 4] },
};

export interface SkiFacts {
  slopes: SourcedNumber;
  lifts: SourcedNumber;
  /** Total groomed downhill length, km. */
  groomedKm?: SourcedNumber;
  /** Maintained cross-country track network, km. */
  crossCountryKm?: SourcedNumber;
  /** Fell summit above sea level, m. */
  summitM?: SourcedNumber;
}

export interface DestinationFacts {
  slug: string;
  /** Proper noun — never translated. */
  name: string;
  /** The municipality it belongs to, for anyone joining on administrative data. */
  municipality: string;
  /** Decimal degrees north. Determines the aurora band; also a sanity check. */
  latitude: number;
  auroraBand: AuroraBand;
  airport: {
    iata: string;
    name: string;
    /** Road distance from the airport to the destination, km. */
    distanceKm: SourcedNumber;
  };
  ski?: SkiFacts;
  /** Nearby national park, when one genuinely borders the destination. */
  nationalPark?: { name: string; source: string; verified: string; note?: string };
}

const FINAVIA_ROVANIEMI = 'https://www.finavia.fi/en/airports/rovaniemi/parking-access';
const LEVI_SLOPES = 'https://www.levi.fi/en/ski/slopes-and-lifts/';
const YLLAS_SLOPES = 'https://ski.yllas.fi/en/slopes-and-lifts/';

export const DESTINATION_FACTS: Record<string, DestinationFacts> = {
  saariselka: {
    slug: 'saariselka',
    name: 'Saariselkä',
    municipality: 'Inari',
    latitude: 68.42,
    auroraBand: 'northern-lapland',
    airport: {
      iata: 'IVL',
      name: 'Ivalo',
      distanceKm: {
        value: 27,
        source: 'https://www.finavia.fi/en/airports/ivalo',
        verified: '2026-08-01',
        note: 'Road distance Ivalo airport to Saariselkä village, about half an hour by car.',
      },
    },
    nationalPark: {
      name: 'Urho Kekkonen National Park',
      source: 'https://www.nationalparks.fi/urhokekkonennp',
      verified: '2026-08-01',
      note: 'Saariselkä sits on its northern edge; the park is one of the largest in Finland.',
    },
  },

  inari: {
    slug: 'inari',
    name: 'Inari',
    municipality: 'Inari',
    latitude: 68.9,
    // 🔴 Inari is NORTH of the Arctic Circle. The luxuryvillas page claimed the
    // lowest light pollution "south of the polar circle", which is both wrong
    // and meaningless for a village at 68.9 N. Removed 2026-08-01.
    auroraBand: 'far-north',
    airport: {
      iata: 'IVL',
      name: 'Ivalo',
      distanceKm: {
        value: 40,
        source: 'https://www.finavia.fi/en/airports/ivalo',
        verified: '2026-08-01',
        note: 'Road distance Ivalo airport to Inari village, roughly 40 minutes by car.',
      },
    },
  },

  rovaniemi: {
    slug: 'rovaniemi',
    name: 'Rovaniemi',
    municipality: 'Rovaniemi',
    latitude: 66.5,
    auroraBand: 'southern-lapland',
    airport: {
      iata: 'RVN',
      name: 'Rovaniemi',
      distanceKm: {
        value: 10,
        source: FINAVIA_ROVANIEMI,
        verified: '2026-08-01',
        // 🔴 laplandluxuryvillas printed "6 min from the city centre". Ten
        // kilometres in six minutes is 100 km/h through a city; the honest
        // figure is 10 to 15 minutes.
        note: 'About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).',
      },
    },
  },

  levi: {
    slug: 'levi',
    name: 'Levi',
    municipality: 'Kittilä',
    latitude: 67.8,
    auroraBand: 'northern-lapland',
    airport: {
      iata: 'KTT',
      name: 'Kittilä',
      distanceKm: {
        value: 15,
        source: 'https://www.finavia.fi/en/airports/kittila',
        verified: '2026-08-01',
        note: 'Road distance Kittilä airport to Levi village, about 20 minutes by car.',
      },
    },
    ski: {
      // 🔴 "43 lifts" was wrong on laplandluxuryvillas and "43 slopes / 28
      // lifts" was an older wrong pair elsewhere in the repo. 44/26 confirmed
      // twice: shared/resortHubs/levi.ts (2026-07-25) and independently
      // 2026-08-01 against levi.fi and ski.fi.
      slopes: { value: 44, source: LEVI_SLOPES, verified: '2026-08-01' },
      lifts: {
        value: 26,
        source: LEVI_SLOPES,
        verified: '2026-08-01',
        note: 'Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.',
      },
      groomedKm: { value: 38.5, source: LEVI_SLOPES, verified: '2026-08-01', note: 'Total length of groomed downhill slopes.' },
      crossCountryKm: { value: 230, source: 'https://www.levi.fi/en/winter/cross-country-skiing/', verified: '2026-07-25', note: 'Maintained tracks, about 28 km of them lit.' },
      summitM: { value: 531, source: LEVI_SLOPES, verified: '2026-07-25' },
    },
  },

  yllas: {
    slug: 'yllas',
    name: 'Ylläs',
    municipality: 'Kolari',
    latitude: 67.56,
    auroraBand: 'northern-lapland',
    airport: {
      iata: 'KTT',
      name: 'Kittilä',
      distanceKm: {
        value: 40,
        source: 'https://www.finavia.fi/en/airports/kittila',
        verified: '2026-08-01',
        note: 'Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.',
      },
    },
    ski: {
      slopes: { value: 62, source: YLLAS_SLOPES, verified: '2026-07-25' },
      lifts: { value: 26, source: YLLAS_SLOPES, verified: '2026-07-25' },
      // 🔴 laplandluxuryvillas printed 250 km. The resort's own figure is ~300.
      crossCountryKm: { value: 300, source: 'https://www.yllas.fi/en/activity/cross-country-skiing/', verified: '2026-07-25', note: 'Maintained tracks, more than 30 km lit.' },
      summitM: { value: 719, source: YLLAS_SLOPES, verified: '2026-07-25', note: 'Longest downhill runs in Finland, over 3 km, 464 m vertical drop.' },
    },
    nationalPark: {
      name: 'Pallas-Yllästunturi National Park',
      source: 'https://www.nationalparks.fi/pallas-yllastunturinp',
      verified: '2026-08-01',
      note: "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.",
    },
  },
};

export const destinationFacts = (slug: string): DestinationFacts | undefined =>
  DESTINATION_FACTS[slug];
