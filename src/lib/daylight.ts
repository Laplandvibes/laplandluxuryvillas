/**
 * Daylight, midnight sun and true night, DERIVED from latitude.
 *
 * ── Why this is computed and not written down ─────────────────────────────
 * "When should I come?" is the question every destination page was missing,
 * and the honest way to answer it here is the same principle the facts
 * registry already runs on: no per-month numbers were invented for our five
 * destinations, because none are published for them. What IS published is each
 * destination's latitude (`shared/destinations/facts.ts`, with its source), and
 * day length follows from latitude by astronomy. So the page derives it.
 *
 * 🔴 The alternative — hand-writing "aurora season Sep–Mar, midnight sun in
 * June" into twelve locale files for five destinations — is 720 places for a
 * claim to drift, which is precisely the failure this site spent 2026-08-01
 * cleaning up. A derived answer cannot drift from its input.
 *
 * ── Method ────────────────────────────────────────────────────────────────
 * Solar declination via the standard low-precision series (accurate to well
 * under a degree, i.e. under a minute of day length at these latitudes), then
 * the sunrise equation for the hour angle. Refraction and solar radius are
 * handled by the conventional −0.833° sunrise altitude.
 *
 * Validated against a published figure rather than trusted: Rovaniemi's
 * midnight sun is 32 days. See `midnightSunDays` and the check in
 * `scripts/check-daylight.mjs`.
 */

const RAD = Math.PI / 180;

/**
 * Solar declination in degrees for day-of-year `n` (1 = 1 January).
 *
 * 🔴 The leading minus is not decoration. Without it the whole year is
 * mirrored: the first version of this file put Helsinki's midsummer day at
 * 5.8 hours and gave Levi a "polar night" in late June. Both are absurd on
 * sight, which is the only reason it was caught — the numbers looked plausible
 * per-month in isolation.
 */
export function declination(n: number): number {
  // NOAA low-precision form. The 0.98565°/day term is the mean motion, the
  // 1.914° term the equation-of-centre correction for Earth's eccentricity.
  const a = 0.98565 * (n - 2) * RAD;
  const b = (0.98565 * (n + 10) + 1.914 * Math.sin(a)) * RAD;
  return -Math.asin(0.39779 * Math.cos(b)) / RAD;
}

/**
 * Hours the sun is above `altitude` degrees on day `n` at latitude `lat`.
 * 24 when it never drops below (midnight sun), 0 when it never rises above.
 *
 * `altitude` = −0.833 gives day length; −12 gives the end of nautical twilight,
 * which is the usable threshold for "is it actually dark".
 */
export function hoursAbove(lat: number, n: number, altitude: number): number {
  const d = declination(n) * RAD;
  const p = lat * RAD;
  const cosH =
    (Math.sin(altitude * RAD) - Math.sin(p) * Math.sin(d)) /
    (Math.cos(p) * Math.cos(d));
  if (cosH <= -1) return 24;
  if (cosH >= 1) return 0;
  return (2 * Math.acos(cosH)) / RAD / 15;
}

/** Day length in hours on day-of-year `n`. */
export const dayLength = (lat: number, n: number): number =>
  hoursAbove(lat, n, -0.833);

/** Day-of-year for the 15th of `month` (1-12), non-leap year. */
const CUM = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
export const midMonthDay = (month: number): number => CUM[month - 1] + 15;

export interface MonthLight {
  /** 1-12. */
  month: number;
  /** Day length on the 15th, hours. */
  hours: number;
  /** The sun does not set on at least one day this month. */
  midnightSun: boolean;
  /** The sun does not rise on at least one day this month. */
  polarNight: boolean;
  /**
   * True night — sun below −12° — occurs on the 15th. Aurora is visible only
   * against a dark sky, so this is the honest "can you see it at all" gate.
   * It is NOT a forecast: how often the aurora is ACTIVE is the separate,
   * sourced figure in the facts registry.
   */
  trueNight: boolean;
}

const daysInMonth = (m: number): number =>
  (m === 12 ? 365 : CUM[m]) - CUM[m - 1];

/** The twelve months at this latitude. */
export function yearOfLight(lat: number): MonthLight[] {
  return Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    let midnightSun = false;
    let polarNight = false;
    for (let d = 0; d < daysInMonth(month); d++) {
      const n = CUM[i] + 1 + d;
      const h = dayLength(lat, n);
      if (h >= 24) midnightSun = true;
      if (h <= 0) polarNight = true;
    }
    const n15 = midMonthDay(month);
    return {
      month,
      hours: dayLength(lat, n15),
      midnightSun,
      polarNight,
      trueNight: hoursAbove(lat, n15, -12) < 24,
    };
  });
}

/** Number of days per year on which the sun does not set. */
export function midnightSunDays(lat: number): number {
  let n = 0;
  for (let d = 1; d <= 365; d++) if (dayLength(lat, d) >= 24) n++;
  return n;
}

/** Number of days per year on which the sun does not rise. */
export function polarNightDays(lat: number): number {
  let n = 0;
  for (let d = 1; d <= 365; d++) if (dayLength(lat, d) <= 0) n++;
  return n;
}
