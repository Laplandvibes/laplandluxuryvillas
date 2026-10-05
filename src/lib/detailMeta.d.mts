// Types for detailMeta.mjs (the /destinations/<slug> and /villas/<slug> title and description composer shared
// with scripts/generate-prerender-meta.mjs).
export function ownParagraphs(
  lang: string,
  base: readonly string[] | null | undefined,
  overlay: readonly string[] | null | undefined,
): readonly string[];
export function inWindow(text: string): boolean;
export function fitDescription(text: string, more?: readonly string[], lang?: string): string;
export function destinationTitle(name: string, suffix: string): string;
export function destinationDescription(o: {
  position: string;
  auroraNote: string;
  more?: readonly string[];
  lang: string;
}): string;
export function villaDescription(o: {
  hotel?: string | null;
  destination: string;
  tagline: string;
  more?: readonly string[];
  lang: string;
}): string;
