# `sync-villas.mjs` — real Google review data for the collection

Pulls rating + review count + Place ID for every entry in the canonical
registry `src/data/properties.ts` and writes exactly one file,
`src/data/generated/villas-from-maps.json` (gitted).

```bash
cd laplandluxuryvillas-new
node scripts/sync-villas.mjs
```

Needs `GOOGLE_MAPS_API_KEY=...` in `.env.local` (gitignored). The script never
prints the key, never writes it to any output, and never touches
`src/data/properties.ts` or `src/lib/villas.ts` — those are the hand-maintained
editorial layers, merged with this snapshot at module load, so a re-sync can't
clobber editorial work.

## 🔴 Scope: the cards name rooms, Google rates properties

`villas.ts` entries are ROOM TYPES — "Kakslauttanen Kelo-Glass Suite", "Nellim
Aurora Bubble", "Apukka Aurora Wagon". Google rates the property that contains
the room. The registry is therefore keyed by PROPERTY, and every rating
rendered on the site carries a visible scope line
(`copy.editorial.ratingScope`, e.g. "Arvio koskee koko kohdetta Kakslauttanen
Arctic Resort"). Without it, "4.1 · 1 415 reviews" under a suite headline is a
false claim. Do not remove that line.

## Cost

Places API (New) Text Search, **Pro** SKU (`rating` and `userRatingCount` are
Pro fields): **$0.032 per request**, one request per registry entry.
7 entries ≈ **$0.22 per full run**, against Google's $200/month Maps credit.

Do not add `reviews`, `regularOpeningHours`, `websiteUri`, `photos` or
`priceLevel` to `FIELD_MASK`. Each is an **Enterprise**-tier field class and
would multiply the bill for data this site never renders.

## Fail closed

A score attached to the wrong property is worse than no score: it is a
fabricated recommendation that looks exactly like a correct one. A candidate is
accepted only if the **name**, the **locality** in Google's `formattedAddress`
and the **Finnish Lapland bounding box** all agree. Anything else is listed as
UNMATCHED and renders no rating.

The name gate carries two refinements inherited from laplandstays, where each
caught a real wrong match rather than a hypothetical one (chain siblings share
long prefixes, and one name was a literal prefix of another). Neither binds on
today's registry, but Lapland's resort brands are exactly what an editor adds
next. Read `nameGate` / `chainSiblingGate` / `boundaryContains` before touching
them, and never loosen a gate to force a match.

## Run of 2026-07-26

**7 / 7 matched, 0 wrong, 0 unmatched.** ≈ $0.22.

| | min | median | max |
|---|---|---|---|
| rating | 4.1 | 4.5 | 4.7 |
| reviews | 173 | 637 | 1 415 |

Ratings sorted: 4.1, 4.3, 4.4, 4.5, 4.5, 4.6, 4.7

Thresholds in `src/data/properties.ts` are derived from THIS field, not copied
from a sibling site:

- `PICK_MIN_RATING = 4.3` — the field's lower quartile at Google's own 0.1
  display granularity. Disqualifies exactly one entry: Kakslauttanen Arctic
  Resort, 4.1 from 1 415 reviews, simultaneously the most prominent property in
  the collection and by far the most reviewed. That is the case the floor
  exists for.
- `PICK_MIN_REVIEWS = 100` — currently excludes **nothing** (min n = 173). An
  honest forward guard, not a filter on today's data: at n = 100 the standard
  error of the mean is ≈ 0.1 star, i.e. Google's display granularity.

  The commissioning brief expected luxury villas to be small businesses with
  tens of reviews or none, which would have made a 100 floor unusable. That is
  not this site's inventory: every entry is a suite inside an established
  resort. The floor was kept on evidence, not assumption.

Two collection entries are **deliberately absent** from the registry:
`private-lakeside-log-estate` and `designer-mountain-chalet-levi`. Both are
`conciergeOnly` house inventory whose `bookingUrl` points at a city search, not
at a property. There is no business to rate, so they show no rating and can
never take the editorial mark.
