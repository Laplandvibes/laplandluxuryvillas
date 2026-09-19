/**
 * Provenance and licence receipt for every photograph on this site that is
 * not the site's own.
 *
 * Vesa 2026-09-19, looking at the four villa cards on the front page:
 * *"onko aidot kuvat?"* They were not. All eight villa images, the winter
 * hero and the old home hero were AI renders written in the launch commit
 * (880fbf1). Each card names a real business, and CLAUDE.md (Images,
 * 2026-09-11 and 2026-09-17) says a named property is never shown with an
 * AI picture: the order is the property's own file, then LV's own photo,
 * then a frame confirmed to be of that place, and a generated image never.
 *
 * Two sources are used, and the receipt for each is kept here:
 *
 *  `sembo`   The property's OWN photograph from its Sembo.fi hotel page, the
 *            same page the fi booking button sends the reader to. Same line
 *            as the app (2026-09-04), laplandhoteldeals (10.9.) and
 *            laplandwellness (15.9.): the affiliate programme grants links,
 *            not photos; the photos are hotel-supplied and the files come
 *            from the hotel image CDN behind Sembo's gallery. Credited
 *            "Photo: Sembo" on the card. If Sembo or Adtraction objects,
 *            delete public/images/villas/*-sembo.webp and the cards fall
 *            back to their gradient, nothing else changes.
 *            Fetched with scripts/fetch-sembo-media.mjs; the candidate list
 *            and the page text as read are in src/data/semboMedia.json and
 *            src/data/evidence/. The pick per property was made by eye from
 *            a contact sheet so that the same frame is not the one another
 *            LV site already shows (hoteldeals: kakslauttanen #4,
 *            arcticTreeHouse #1, levinIglut #1; wellness: arcticTreeHouse #1
 *            — measured as pixel signatures 19.9.2026, no collision).
 *
 *  `commons` Wikimedia Commons, CC licence, author and licence rendered on
 *            the image by `PhotoCredit`. Used where no partner file exists:
 *            the Nellim card (Wilderness Hotel Nellim has no Sembo or
 *            Trip.com page) shows the VILLAGE, captioned as such, never the
 *            hotel; and the winter home hero, which names no business.
 *            Both files are cropped to the frame the layout needs, and the
 *            crop is declared in `changes` and shown as "cropped" next to
 *            the licence, which is what CC BY-SA asks of an adaptation.
 *
 * Receipt fields (CLAUDE.md): source, asset id, licence, date, price (0 €).
 */

export type PhotoCredit = {
  kind: 'sembo' | 'commons'
  /** Displayed author. For hotel-supplied photos this is the source, "Sembo". */
  author: string
  license?: 'CC BY 2.0' | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0 1.0'
  licenseUrl?: string
  /** Commons file page, or the property's Sembo hotel page. */
  sourceUrl: string
  /** Commons file title, or the CDN URL the file was read from. */
  sourceId: string
  /** Date the photograph was taken, when the source states it. */
  taken?: string
  retrieved: string
  /** What was done to the file: crop, resize, format. */
  changes: string
  cropped: boolean
  /**
   * Set when the picture is NOT the business the card names, so the card
   * prints "In the picture: …" from `copy.photo.<key>` in the reader's
   * language. A card that names a hotel and shows something else must say so.
   */
  inPictureKey?: 'nellim' | 'heroWinter'
}

const SEMBO_PAGE = (code: string) => `https://www.sembo.fi/travel/plan/hotel-selection/h0/hotel-details/${code}`
const CDN = 'https://i.travelapi.com/lodging'
const RETRIEVED = '2026-09-19'
const sembo = (code: string, id: string, orig: string): PhotoCredit => ({
  kind: 'sembo',
  author: 'Sembo',
  sourceUrl: SEMBO_PAGE(code),
  sourceId: `${CDN}/${id}`,
  retrieved: RETRIEVED,
  changes: `Read at ${orig}, cropped to 3:2 from the centre, resized to 1600x1066, WebP q82.`,
  cropped: true,
})

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  '/images/villas/kakslauttanen-sembo.webp': sembo('1679682', '13000000/12320000/12318200/12318138/e2076748.jpg', '3008x2000'),
  '/images/villas/arcticTreeHouse-sembo.webp': sembo('922953', '30000000/29970000/29968600/29968502/d0e31fd7.jpg', '2456x3072'),
  '/images/villas/auroraVillage-sembo.webp': sembo('422560', '18000000/17460000/17452700/17452695/75aadb0f.jpg', '3840x2559'),
  '/images/villas/levinIglut-sembo.webp': sembo('2512109', '3000000/2310000/2303900/2303825/c21e9696.jpg', '3840x2160'),
  '/images/villas/starArctic-sembo.webp': sembo('1595634', '20000000/19370000/19362400/19362341/38382b00.jpg', '3840x2560'),
  '/images/villas/apukka-sembo.webp': sembo('656849', '21000000/20060000/20059200/20059117/04f8e245.jpg', '2000x1125'),
  '/images/villas/laplandHotelsSaaga-sembo.webp': sembo('1741117', '8000000/7770000/7760900/7760823/6e2ab2d8.jpg', '3840x2105'),

  '/images/villas/nellim-commons.webp': {
    kind: 'commons',
    author: 'BishkekRocks',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nellim.JPG',
    sourceId: 'File:Nellim.JPG',
    taken: '2007-08-30',
    retrieved: RETRIEVED,
    changes: 'Cropped to 3:2 from the centre (2304x1728 -> 2304x1536), resized to 1600x1066, WebP q82.',
    cropped: true,
    inPictureKey: 'nellim',
  },
  '/images/commons/hero-winter-saariselka-aurora.webp': {
    kind: 'commons',
    author: 'Nicolas Buffler',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aurore_bor%C3%A9ale_%C3%A0_Saariselk%C3%A4,_Laponie_2019_(46344165225).jpg',
    sourceId: 'File:Aurore boréale à Saariselkä, Laponie 2019 (46344165225).jpg',
    taken: '2019-02-20',
    retrieved: RETRIEVED,
    changes: 'Cropped to 16:9 from the centre (2643x1762 -> 2643x1487), resized to 2000x1125, WebP q80.',
    cropped: true,
    inPictureKey: 'heroWinter',
  },
}

export const creditFor = (image: string | undefined): PhotoCredit | undefined =>
  image ? PHOTO_CREDITS[image.split('?')[0]] : undefined
