/**
 * "Luksus & yksityiset" — the premium GetYourGuide products for
 * laplandluxuryvillas.com.
 *
 * Curated by hand in `shared/activities/heroes.ts` (Vesa 2026-07-30: this site
 * must lead with the private and the expensive; a 13 € museum ticket is the
 * wrong card here even when the category is right). This file is that bucket
 * joined to the catalogue paths and, unlike the bucket, VERIFIED.
 *
 * ── Verification, 2026-08-01 ──────────────────────────────────────────────
 * Every path below was opened in a real browser and passed the canonical gate:
 * HTTP 200, no redirect away from `-t<id>`, the page title names this product,
 * and a "Check availability" control is present.
 *
 * 🔴 It took a real browser to do it. `node fetch` and even a CDP-driven Chrome
 * both got HTTP 403 on all 17 from this machine, with an identical
 * "GetYourGuide – Error" page. That uniformity is the tell: a blanket block
 * looks exactly like "every id is broken", and acting on it would have been
 * wrong in both directions — first deleting good ids, then, if trusted the
 * other way, shipping unverified ones. A wrong GetYourGuide id does not 404;
 * it serves a complete, plausible page for another product in another country.
 *
 * ── Re-verified 2026-10-18 ───────────────────────────────────────────────
 * Vesa 18.10.2026 (laplandluxuryvillas): "miksi edelleen nämä ei mene suoraan
 * varaukseen?" Every id fetched in the in-app browser, all locales:
 *   1073872  Lake Inari boat cruise   → location page in every locale (removed)
 *   889294   Santa visit, Levi        → location page in every locale (removed)
 *   504004   Icebreaker Sampo, Kemi   → EMPTY at the bare English URL only
 *   885747   7 h snowmobile, Rovaniemi→ EMPTY at the bare English URL only
 * A location redirect also drops partner_id and cmp, so such a booking was
 * never ours. Both are seasonal and may return: re-measure before re-adding.
 * The two "empty in English" rows stay: they open normally under fi-fi, de-de,
 * ja-jp … Callers MUST filter with gygAvailable(path, lang) (picks.ts,
 * GYG_UNAVAILABLE), which hides them on English pages only.
 *
 * ── Three products from the bucket are NOT here ───────────────────────────
 *   1138926  "Tromsø: Northern Lights Tour with Sámi Guide & Stay" — the
 *            catalogue files it under Kilpisjärvi, but the product itself is
 *            sold as a Tromsø departure. Norway, on a Finnish Lapland site.
 *   1384809  Kuusamo Finnhorse sleigh — Kuusamo is Koillismaa, NOT Lapland
 *            (standing network rule).
 * Kept, deliberately: 1158887 King Crab Safari to Kirkenes. It crosses into
 * Norway but GetYourGuide sells it as "Saariselkä: …", i.e. it is a departure
 * a guest staying in Saariselkä can actually take, and the card says Saariselkä.
 *
 * ── Prices ────────────────────────────────────────────────────────────────
 * `price` is GetYourGuide's own "from" figure as it stood on `PRICE_AS_OF`. It
 * is NOT our price and must never render without the source and the date beside
 * it. Re-verify with `node scripts/gyg-verify-luxury.mjs`; a delisted row is a
 * broken promise, not a warning.
 */

import { isGygPriceFresh } from './picks';

export interface LuxuryPick {
  /** GetYourGuide path `<place-lNNN>/<slug-tNNN>`, no leading or trailing slash. */
  path: string;
  /** Title as GetYourGuide renders it, minus their "City: " prefix. */
  title: string;
  /** The place shown to the visitor. */
  place: string;
  /** GetYourGuide's "from" price in euros on PRICE_AS_OF. */
  price: number;
  /** Duration as the catalogue states it. Omitted when the source was unclear. */
  duration?: string;
  /**
   * Mihin sivun osioon tuote kuuluu. 🔴 Lisatty 21.9.2026, kun
   * laplandluxuryvillasin elamyssivu rakennettiin naiden OIKEIDEN tuotteiden
   * varaan: sita ennen sivulla oli kuusi kasin kirjoitettua "elamysta", joista
   * yksikaan ei ollut varattava (nelja vei sahkopostiin, kaksi GetYourGuiden
   * hakuun) ja joiden yksityiskohdat oli keksitty. Vesa 21.9.: "onhan namakin
   * tekstit ihan puuta heinaa, eika aitoa kirjoittamista?"
   * Huom: 'culinary' ja 'arrival' EIVAT ole vaihtoehtoja, koska niihin ei ole
   * yhtaan varattavaa tuotetta. Niista kerrotaan sivulla suoraan.
   */
  category: 'aurora' | 'wilderness' | 'other';
}

export const PRICE_AS_OF = '2026-07-29';
export const VERIFIED_ON = '2026-10-18';

/**
 * Same seven-day rule as GetYourGuide picks (Vesa 4.10.2026): after that the cards
 * render without a price and the dated price note is hidden. See picks.ts.
 */
export function isLuxuryPriceFresh(now?: number): boolean {
  return isGygPriceFresh(PRICE_AS_OF, now);
}

/** Ascending by price: the rail reads as a ladder, not a random shelf. */
export const LUXURY_PICKS: readonly LuxuryPick[] = [
  { path: 'sirkka-l139331/vip-northern-lights-aurora-chase-levi-finnish-lapland-t1202632', title: 'VIP Private Northern Lights Hunt', place: 'Levi', price: 360, duration: '4 h' , category: 'aurora' },
  { path: 'rovaniemi-l2653/lapland-exclusive-private-7h-snowmobile-tour-with-guide-t885747', title: 'Exclusive Private Snowmobile Tour with Guide', place: 'Rovaniemi', price: 399, duration: '7 h' , category: 'wilderness' },
  { path: 'kemi-l98127/kemi-afternoon-icebreaker-sampo-cruise-and-ice-floating-t504004', title: 'Icebreaker Sampo Cruise with Ice Floating', place: 'Kemi', price: 402, duration: '6.5 h' , category: 'wilderness' },
  { path: 'sirkka-l139331/levi-professional-engagement-or-after-wedding-shoot-t1176621', title: 'Professional Engagement or After-Wedding Shoot', place: 'Levi', price: 600, duration: '1 h' , category: 'other' },
  { path: 'sirkka-l139331/levi-private-northern-lights-hunt-t864972', title: 'Private Northern Lights Hunt in a 4x4 SUV', place: 'Levi', price: 684, duration: '5 h' , category: 'aurora' },
  { path: 'sirkka-l139331/levi-private-snow-village-tour-northern-lights-possibility-t1176434', title: 'Private Snow Village Tour', place: 'Levi', price: 777, duration: '3 h' , category: 'wilderness' },
  { path: 'kirkenes-l97740/saariselka-king-crab-safari-to-kirkenes-with-lunch-t1158887', title: 'King Crab Safari to Kirkenes with Lunch', place: 'Saariselkä', price: 780, duration: '11 h' , category: 'wilderness' },
  { path: 'ivalo-l187030/ivalo-private-snowmobile-safari-meetfeed-reindeers-lunch-t805097', title: 'Private Snowmobile Safari, Reindeer and Lunch', place: 'Ivalo', price: 950, duration: '3.5 h' , category: 'wilderness' },
  { path: 'saariselka-l181615/saariselka-private-photo-northern-lights-tour-t1120345', title: 'Private Photo Northern Lights Tour', place: 'Saariselkä', price: 1789, duration: '6 h' , category: 'aurora' },
  { path: 'posio-l253041/posio-private-northern-lights-tour-with-campfire-t1123969', title: 'Private Northern Lights Tour with Campfire', place: 'Posio', price: 1850, duration: '7 h' , category: 'aurora' },
  { path: 'saariselka-l181615/rovaniemi-private-aurora-tour-t1117488', title: 'Private Aurora Tour', place: 'Saariselkä', price: 2190, duration: '7 h' , category: 'aurora' },
  { path: 'kittila-l165074/levi-private-aurora-hunt-in-the-wilderness-t1116971', title: 'Private Northern Lights Hunt in the Wilderness', place: 'Levi', price: 2240, duration: '6 h' , category: 'aurora' },
  { path: 'rovaniemi-l2653/rovaniemi-to-sommaroy-private-arctic-tesla-expedition-t1283318', title: 'Private Arctic Tesla Expedition to Sommarøy', place: 'Rovaniemi', price: 5000, duration: '4 days' , category: 'other' },
];
