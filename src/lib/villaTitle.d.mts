export function villaTitleBase(name: string, destination: string, lang: string): string;
export function villaTitle(name: string, destination: string, lang: string, brand?: string): string;

/** Villan nimi ilman hotellin nimen kanssa yhteisiä sanoja. */
export function roomType(villaName: string, hotelName?: string | null): string;

/**
 * "Kakslauttanen Arctic Resort: Kelo-Glass Suite" — hotellin virallinen nimi
 * ensin, koska se on se mitä haetaan (LV-BRAND-TITLE 20.9.2026).
 */
export function villaBrandTitle(
  villaName: string,
  hotelName: string | null | undefined,
  destination: string,
  lang: string,
): string;
