/**
 * Every photograph we hold of each property, in the partner's own order.
 *
 * Vesa 2026-09-20, on the collection: *"saadaanko per kohde useampi kuva että
 * niitä voisi selata?"* and, comparing /villas with /suites: *"tämä on huono
 * kun sviiteissä on melkein samat kohteet kuin huviloissa. edes kuvat voisi
 * olla erit."* Both come from the same shortage: one frame per property. The
 * hotels publish five or six each through Sembo, so the card can carry a
 * gallery, and two surfaces showing the same property can open on different
 * frames.
 *
 * Source and licence are the same as the single card image before it: the
 * property's OWN photograph from its Sembo.fi page, the page the fi booking
 * button sends the reader to. Credited "Photo: Sembo" on every frame; the
 * receipts are generated into `photoCredits.ts` from the same list.
 *
 * Generated 2026-09-20 by scratchpad/gallery.py from `semboMedia.json`:
 * full-size original from the hotel image CDN (1 920–3 840 px), centre 3:2,
 * 1600x1066 WebP q80. Frames under 1 200 px wide are left out rather than
 * upscaled. Order is the hotel's own, which puts its best frame first.
 */
export const VILLA_IMAGES: Record<string, readonly string[]> = {
  apukka: ['/images/villas/apukka-sembo-1.webp', '/images/villas/apukka-sembo-2.webp', '/images/villas/apukka-sembo-3.webp', '/images/villas/apukka-sembo-4.webp', '/images/villas/apukka-sembo-5.webp'],
  arcticTreeHouse: ['/images/villas/arcticTreeHouse-sembo-1.webp', '/images/villas/arcticTreeHouse-sembo-2.webp', '/images/villas/arcticTreeHouse-sembo-3.webp', '/images/villas/arcticTreeHouse-sembo-5.webp', '/images/villas/arcticTreeHouse-sembo-6.webp'],
  auroraVillage: ['/images/villas/auroraVillage-sembo-1.webp', '/images/villas/auroraVillage-sembo-2.webp', '/images/villas/auroraVillage-sembo-3.webp', '/images/villas/auroraVillage-sembo-4.webp', '/images/villas/auroraVillage-sembo-5.webp'],
  kakslauttanen: ['/images/villas/kakslauttanen-sembo-1.webp', '/images/villas/kakslauttanen-sembo-2.webp', '/images/villas/kakslauttanen-sembo-3.webp', '/images/villas/kakslauttanen-sembo-4.webp', '/images/villas/kakslauttanen-sembo-5.webp'],
  laplandHotelsSaaga: ['/images/villas/laplandHotelsSaaga-sembo-1.webp', '/images/villas/laplandHotelsSaaga-sembo-2.webp', '/images/villas/laplandHotelsSaaga-sembo-3.webp', '/images/villas/laplandHotelsSaaga-sembo-4.webp', '/images/villas/laplandHotelsSaaga-sembo-5.webp'],
  levinIglut: ['/images/villas/levinIglut-sembo-4.webp', '/images/villas/levinIglut-sembo-5.webp', '/images/villas/levinIglut-sembo-6.webp'],
  starArctic: ['/images/villas/starArctic-sembo-1.webp', '/images/villas/starArctic-sembo-2.webp', '/images/villas/starArctic-sembo-3.webp', '/images/villas/starArctic-sembo-4.webp', '/images/villas/starArctic-sembo-5.webp', '/images/villas/starArctic-sembo-6.webp'],
  villaHellita: ['/images/villas/villaHellita-sembo-1.webp', '/images/villas/villaHellita-sembo-2.webp', '/images/villas/villaHellita-sembo-3.webp', '/images/villas/villaHellita-sembo-4.webp', '/images/villas/villaHellita-sembo-5.webp'],
  villaNoelB: ['/images/villas/villaNoelB-sembo-1.webp', '/images/villas/villaNoelB-sembo-2.webp', '/images/villas/villaNoelB-sembo-3.webp', '/images/villas/villaNoelB-sembo-4.webp', '/images/villas/villaNoelB-sembo-5.webp'],
}

/**
 * The frame a surface opens on. `/villas` shows the property's first frame and
 * `/suites` its second, so the two pages do not look like the same page twice.
 * Falls back to the first frame for a property with only one.
 */
export const villaGallery = (key: string | undefined): readonly string[] =>
  (key && VILLA_IMAGES[key]) || []
