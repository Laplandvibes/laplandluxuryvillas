/**
 * Autoplaying background clips, keyed by the surface that uses them.
 *
 * Vesa 19.9.2026 on /experiences: "molemmat aivan fake. eikö täällä olisi ehkä
 * Pexelsistä jotain aitoja revontulivideoita jotka alkaisi itsestään pyöriin?"
 * Pexels is stock on every surface since 17.9.2026 with per-clip checks
 * (no identifiable person, real not AI, no logos, Lapland or placeless); the
 * receipts live in `src/data/photoCredits.ts` under the same path keys.
 *
 * Files are self-hosted in public/videos/ (never hotlinked), H.264 MP4 at or
 * below 1920 px, under 12 MB. A missing entry means the still stays.
 */
export const HERO_CLIPS: Record<string, string> = {
  // T Honkamies (Finland), Pexels 28492331, uploaded 2024-09-18, tagged Lapland /
  // Finland: aurora curtain over a spruce line, no person, no building, no logo.
  experiences: '/videos/aurora-forest-honkamies.mp4',
}

export const EXPERIENCE_CLIPS: Record<string, string> = {
  // Utkarsh Malviya, Pexels 31401354, uploaded 2025-03-30, tagged Lapland: aurora
  // over snow-covered cabins, lit windows, no person. Upload is after 2023, so the
  // "clearly real" check was done by eye on the frames (grain, star field, cabin
  // detail consistent across the loop).
  'private-aurora-photography-night': '/videos/aurora-cabins-malviya.mp4',
  // Distill, Pexels 852435, uploaded 2016-07-04 (pre-AI), tagged Lapland: aurora
  // arc over a bay with distant shore lights, the view a flight would give.
  'helicopter-aurora-flight': '/videos/aurora-arc-distill.mp4',
}
