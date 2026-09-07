/**
 * Seasonal image switch — summer 1 May–30 Sep, winter 1 Oct–30 Apr.
 *
 * Evaluated at module load in the VISITOR'S browser, so the imagery flips itself every year
 * with no rebuild. Same rule and the same dates as the rest of the network and as the seasonal
 * share card served from `/og.jpg`, so the front page and the WhatsApp preview change together.
 *
 * 🔴 This site sells private aurora villas and its own tagline says so, but the home hero was a
 * summer log cabin on open water for all twelve months. Measured on 2026-09-06: in January the
 * share card promised aurora over a green summer shore.
 */
export const isSummerSeason = (): boolean => {
  const m = new Date().getMonth() + 1; // 1–12
  return m >= 5 && m <= 9;
};

export const seasonal = <T,>(winter: T, summer: T): T => (isSummerSeason() ? summer : winter);
