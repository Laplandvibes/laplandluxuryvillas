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
 *            Trip.com page) shows Lake Inari, captioned as such, never the
 *            hotel; plus the page heroes and destination cards. The winter
 *            home hero is Pexels since 26.9.2026: it is the share-card source.
 *            🔴 CC BY-SA files are RESIZED ONLY, never cropped (26.9.2026): a
 *            crop is an adapted work and would carry the ShareAlike duty. The
 *            file is the whole photograph and object-cover frames it on screen
 *            (destinations.ts `imagePosition` for an off-centre subject). Until
 *            26.9. the BY-SA files here were cut to 16:9, 3:2 and 1:1; each was
 *            re-derived from the Commons original (sha1 = API). CC BY and CC0
 *            files may stay cropped: the crop is declared in `changes` and
 *            printed as "cropped" next to the licence.
 *
 *  `pexels`  Pexels video, Pexels licence (free for commercial use, no
 *            attribution required, irrevocable, ToS 15.11.2024 §5). Stock on
 *            every surface since 17.9.2026 with three per-clip checks the
 *            licence does not make: no identifiable person, real not AI
 *            (upload date or frame inspection), subject Lapland or placeless.
 *            Credited anyway, with a link to the clip page. Used on
 *            /experiences (Vesa 19.9.2026: "molemmat aivan fake. eikö täällä
 *            olisi ehkä Pexelsistä jotain aitoja revontulivideoita jotka
 *            alkaisi itsestään pyöriin?"). Files self-hosted in public/videos.
 *
 *  `own`     LaplandVibes' own photograph, July 2026 road trip (master pool
 *            D:\_puhelin_staging\kuvat, 4000x3000, registered in
 *            _reissu-2026-07/KUVA-INVENTAARIO.md §6b). No licence line is
 *            needed; the card prints "Photo: LaplandVibes" so the reader can
 *            tell it from the partner and Commons material.
 *
 * Receipt fields (CLAUDE.md): source, asset id, licence, date, price (0 €).
 */

export type PhotoCredit = {
  kind: 'sembo' | 'commons' | 'pexels' | 'own'
  /** Displayed author. For hotel-supplied photos this is the source, "Sembo". */
  author: string
  license?: 'CC BY 2.0' | 'CC BY 2.5' | 'CC BY 3.0' | 'CC BY 4.0' | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0 1.0' | 'Pexels'
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
  inPictureKey?: 'nellim' | 'heroWinter' | 'nellimLake'
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

const PHOTO_CREDIT_OF: Record<string, PhotoCredit> = {
  '/videos/aurora-forest-honkamies.mp4': {
    kind: 'pexels',
    author: 'T Honkamies',
    license: 'Pexels',
    licenseUrl: 'https://www.pexels.com/license/',
    sourceUrl: 'https://www.pexels.com/video/northern-lights-timelapse-28492331/',
    sourceId: 'pexels-video-28492331',
    taken: '2024-09-18',
    retrieved: RETRIEVED,
    changes: 'Pexels 1920x1080 24 fps file, trimmed to 16 s, re-encoded H.264 CRF 29 without audio (3.9 MB); poster = frame at 6 s, WebP.',
    cropped: false,
  },
  '/videos/aurora-cabins-malviya.mp4': {
    kind: 'pexels',
    author: 'Utkarsh Malviya',
    license: 'Pexels',
    licenseUrl: 'https://www.pexels.com/license/',
    sourceUrl: 'https://www.pexels.com/video/aurora-borealis-over-snowy-cabins-at-night-31401354/',
    sourceId: 'pexels-video-31401354',
    taken: '2025-03-30',
    retrieved: RETRIEVED,
    changes: 'Pexels 1920x1080 15 fps file, 11.9 s, re-encoded 1280x720 H.264 CRF 29 without audio (0.7 MB); poster = frame at 5 s, WebP.',
    cropped: false,
  },
  '/videos/aurora-arc-distill.mp4': {
    kind: 'pexels',
    author: 'Distill',
    license: 'Pexels',
    licenseUrl: 'https://www.pexels.com/license/',
    sourceUrl: 'https://www.pexels.com/video/time-lapse-video-of-aurora-borealis-852435/',
    sourceId: 'pexels-video-852435',
    taken: '2016-07-04',
    retrieved: RETRIEVED,
    changes: 'Pexels 1920x1080 30 fps file, 4.1 s, re-encoded 1280x720 H.264 CRF 29 without audio (0.4 MB); poster = frame at 2 s, WebP.',
    cropped: false,
  },
}

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  // A second frame of the same three hotels, for the "ready weeks" section:
  // one photograph may appear only once on a page (Vesa 2026-09-20).
  // /villas hero: aurora through the glass roof, seen from the bed.

  // ── Every partner photograph we hold, per property (VILLA_IMAGES) ──
  // Same source and licence as the single card frame they replace: the
  // property's own photo from its Sembo.fi page. Generated 2026-09-20.
  '/images/villas/apukka-sembo-1.webp': sembo('656849', '21000000/20060000/20059200/20059117/04f8e245.jpg', '2000x1125'),
  '/images/villas/apukka-sembo-2.webp': sembo('656849', '21000000/20060000/20059200/20059117/6d3f9877.jpg', '3840x2561'),
  '/images/villas/apukka-sembo-3.webp': sembo('656849', '21000000/20060000/20059200/20059117/62e82d55.jpg', '3840x2560'),
  '/images/villas/apukka-sembo-4.webp': sembo('656849', '21000000/20060000/20059200/20059117/47c27e27.jpg', '3840x2560'),
  '/images/villas/apukka-sembo-5.webp': sembo('656849', '21000000/20060000/20059200/20059117/93072e31.jpg', '3840x2520'),
  '/images/villas/arcticTreeHouse-sembo-1.webp': sembo('922953', '30000000/29970000/29968600/29968502/d0e31fd7.jpg', '2456x3072'),
  '/images/villas/arcticTreeHouse-sembo-2.webp': sembo('922953', '30000000/29970000/29968600/29968502/9bbd26a3.jpg', '2048x1366'),
  '/images/villas/arcticTreeHouse-sembo-3.webp': sembo('922953', '30000000/29970000/29968600/29968502/20db3d48.jpg', '2048x1366'),
  '/images/villas/arcticTreeHouse-sembo-5.webp': sembo('922953', '30000000/29970000/29968600/29968502/831b79fb.jpg', '2048x3072'),
  '/images/villas/arcticTreeHouse-sembo-6.webp': sembo('922953', '4000000/3500000/3498200/3498121/6e025d26.jpg', '3840x2558'),
  '/images/villas/auroraVillage-sembo-1.webp': sembo('422560', '18000000/17460000/17452700/17452695/75aadb0f.jpg', '3840x2559'),
  '/images/villas/auroraVillage-sembo-2.webp': sembo('422560', '18000000/17460000/17452700/17452695/325ab999.jpg', '3772x3603'),
  '/images/villas/auroraVillage-sembo-3.webp': sembo('422560', '18000000/17460000/17452700/17452695/484104b0.jpg', '3840x1980'),
  '/images/villas/auroraVillage-sembo-4.webp': sembo('422560', '18000000/17460000/17452700/17452695/75962ad5.jpg', '3840x2560'),
  '/images/villas/auroraVillage-sembo-5.webp': sembo('422560', '18000000/17460000/17452700/17452695/1440678b.jpg', '3840x2305'),
  '/images/villas/kakslauttanen-sembo-1.webp': sembo('1679682', '13000000/12320000/12318200/12318138/e2076748.jpg', '3008x2000'),
  '/images/villas/kakslauttanen-sembo-2.webp': sembo('1679682', '13000000/12320000/12318200/12318138/edac6273.jpg', '3840x2559'),
  '/images/villas/kakslauttanen-sembo-3.webp': sembo('1679682', '13000000/12320000/12318200/12318138/3dcec4b1.jpg', '3840x2559'),
  '/images/villas/kakslauttanen-sembo-4.webp': sembo('1679682', '13000000/12320000/12318200/12318138/8b7e9f97.jpg', '3840x2096'),
  '/images/villas/kakslauttanen-sembo-5.webp': sembo('1679682', '13000000/12320000/12318200/12318138/7cb4236f.jpg', '3240x2160'),
  '/images/villas/laplandHotelsSaaga-sembo-1.webp': sembo('1741117', '8000000/7770000/7760900/7760823/02099752.jpg', '3840x2394'),
  '/images/villas/laplandHotelsSaaga-sembo-2.webp': sembo('1741117', '8000000/7770000/7760900/7760823/6e2ab2d8.jpg', '3840x2105'),
  '/images/villas/laplandHotelsSaaga-sembo-3.webp': sembo('1741117', '8000000/7770000/7760900/7760823/dc0a420a.jpg', '3840x2560'),
  '/images/villas/laplandHotelsSaaga-sembo-4.webp': sembo('1741117', '8000000/7770000/7760900/7760823/dc29dc66.jpg', '3840x2559'),
  '/images/villas/laplandHotelsSaaga-sembo-5.webp': sembo('1741117', '8000000/7770000/7760900/7760823/641d75bb.jpg', '3840x2560'),
  '/images/villas/levinIglut-sembo-4.webp': sembo('2512109', '3000000/2280000/2271100/2271082/22c208e4.jpg', '3000x2000'),
  '/images/villas/levinIglut-sembo-5.webp': sembo('2512109', '3000000/2280000/2271100/2271082/4d10f764.jpg', '2980x1572'),
  '/images/villas/levinIglut-sembo-6.webp': sembo('2512109', '3000000/2310000/2303900/2303825/c21e9696.jpg', '3840x2160'),
  '/images/villas/starArctic-sembo-1.webp': sembo('1595634', '20000000/19370000/19362400/19362341/38382b00.jpg', '3840x2560'),
  '/images/villas/starArctic-sembo-2.webp': sembo('1595634', '20000000/19370000/19362400/19362341/4bce6f28.jpg', '2560x3840'),
  '/images/villas/starArctic-sembo-3.webp': sembo('1595634', '20000000/19370000/19362400/19362341/d46d27fd.jpg', '2560x3840'),
  '/images/villas/starArctic-sembo-4.webp': sembo('1595634', '20000000/19370000/19362400/19362341/669d3c25.jpg', '2880x2254'),
  '/images/villas/starArctic-sembo-5.webp': sembo('1595634', '1000000/530000/523600/523572/f91e6e4e.jpg', '1920x700'),
  '/images/villas/starArctic-sembo-6.webp': sembo('1595634', '1000000/530000/523600/523572/b7bdc03d.jpg', '3840x1589'),
  '/images/villas/villaHellita-sembo-1.webp': sembo('28767044', '133000000/132770000/132769100/132769065/b9be05c2.jpg', '3840x2699'),
  '/images/villas/villaHellita-sembo-2.webp': sembo('28767044', '133000000/132770000/132769100/132769065/94de2ba4.jpg', '3840x2561'),
  '/images/villas/villaHellita-sembo-3.webp': sembo('28767044', '133000000/132770000/132769100/132769065/7cb285b1.jpg', '3840x2561'),
  '/images/villas/villaHellita-sembo-4.webp': sembo('28767044', '133000000/132770000/132769100/132769065/46ac2ca2.jpg', '3840x2561'),
  '/images/villas/villaHellita-sembo-5.webp': sembo('28767044', '133000000/132770000/132769100/132769065/0e866412.jpg', '3840x2828'),
  '/images/villas/villaNoelB-sembo-1.webp': sembo('28744396', '133000000/132540000/132539900/132539810/fc351e0d.jpg', '3840x2561'),
  '/images/villas/villaNoelB-sembo-2.webp': sembo('28744396', '133000000/132540000/132539900/132539810/98fa1d4a.jpg', '3840x2561'),
  '/images/villas/villaNoelB-sembo-3.webp': sembo('28744396', '133000000/132540000/132539900/132539810/1002dead.jpg', '3840x2939'),
  '/images/villas/villaNoelB-sembo-4.webp': sembo('28744396', '133000000/132540000/132539900/132539810/170a740c.jpg', '3840x2561'),
  '/images/villas/villaNoelB-sembo-5.webp': sembo('28744396', '133000000/132540000/132539900/132539810/9d325566.jpg', '3840x2561'),

  // Nellim: the hotel has no partner page and no photograph of its own anywhere
  // free (Commons holds 30 Nellim files and not one is of the property — church,
  // cemetery, bridge, war memorial; checked 20.9.2026). Vesa asked for a better
  // picture of Inari rather than an empty card: the aurora over Lake Inari, the
  // thing the Aurora Bubble is built to look at. Captioned as the lake, not the
  // hotel, in all twelve languages.
  '/images/villas/nellim-inari-aurora.webp': {
    kind: 'commons',
    author: 'Manfred Werner - Tsui',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aurora_borealis_-_Inarij%C3%A4rvi_Finland_2013.03.10-11_031.jpg',
    sourceId: 'File:Aurora borealis - Inarijärvi Finland 2013.03.10-11 031.jpg',
    taken: '2013-03-10',
    retrieved: RETRIEVED,
    // 26.9.2026: the old line said "Cropped to 3:2", but the Commons original is itself
    // 3500x2333 and the file matches it whole (64x36 grey diff 0.6/255): a resize, not a crop.
    changes: 'Resized 3500x2333 -> 1600x1066, WebP q80. Not cropped.',
    cropped: false,
    inPictureKey: 'nellimLake',
  },
  // /images/villas/nellim-commons.webp (File:Nellim.JPG, BishkekRocks, CC BY-SA 3.0) was
  // deleted 26.9.2026: no page had used it since aeba35a, and the file was a 3:2 crop of a
  // BY-SA photograph that was still publicly downloadable.
  // Winter home hero. It is also the source of the site share card og-winter.jpg
  // (scripts/og/harvest_heroes.mjs takes the live home hero), and a card is an
  // adaptation, so the source may not be CC BY-SA (lv_permanent_rules §34.2).
  // Until 26.9.2026 this was Nicolas Buffler's Saariselkä aurora (CC BY-SA 2.0);
  // that file was deleted with the swap. Pexels tags this clip Finland, Sweden
  // and Norway at once, so the caption names no place. Checked against every
  // image in the network (64x36 grey, nearest 31.5 > 12). Real photograph:
  // sensor noise and motion blur, no generated detail at 100 %.
  '/images/hero-winter-aurora-cabins.webp': {
    kind: 'pexels',
    author: 'Lucien Schreiber',
    license: 'Pexels',
    licenseUrl: 'https://www.pexels.com/license/',
    sourceUrl: 'https://www.pexels.com/photo/northern-lights-over-snowy-lapland-forest-31430640/',
    sourceId: 'pexels-photo-31430640',
    retrieved: '2026-09-26',
    changes: 'Pexels 6000x4000 file resized to 2000x1333, WebP q80. Not cropped.',
    cropped: false,
    inPictureKey: 'heroWinter',
  },

  // ── Page heroes of /suites, /about, /destinations, /private-inquiry, winter + summer ──
  // Vesa 2026-09-21: "tekoälykuvat". The four launch-commit AI renders
  // (hero-suites/about/destinations/inquiry.webp, 4.5.2026) are archived under
  // _reissu-2026-07/_ai-originals-backup/laplandluxuryvillas-new/public/images/.
  // Every partner frame of the suite properties already sits in a /suites card
  // carousel, so the /suites hero is the sky those suites are built for, not a
  // property. Only CC BY (no SA), only resized: the file is the whole photograph,
  // object-cover crops it on screen and the file itself is not an adaptation.
  // Checked 23.9.2026 against every */src in the network: none of these eight
  // files is used on another LV site.
  '/images/commons/hero-suites-winter.webp': {
    kind: 'commons',
    author: 'Daniele57C',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aurora_ad_Inari_-_2.jpg',
    sourceId: 'File:Aurora ad Inari - 2.jpg',
    taken: '2025-03-19',
    retrieved: '2026-09-23',
    changes: 'Resized 6048x4024 -> 2000x1331, WebP q80. Not cropped.',
    cropped: false,
  },
  '/images/commons/hero-suites-summer.webp': {
    kind: 'commons',
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Midsummer_in_Kilpisj%C3%A4rvi,_Lapland_(52221834387).jpg',
    sourceId: 'File:Midsummer in Kilpisjärvi, Lapland (52221834387).jpg',
    taken: '2022-06-26',
    retrieved: '2026-09-23',
    changes: 'Resized 5989x3979 -> 1600x1063, WebP q64. Not cropped.',
    cropped: false,
  },
  '/images/commons/hero-about-winter.webp': {
    kind: 'commons',
    author: 'Tatiana Bashinskaya',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lapland,_Finland_-_panoramio_(2).jpg',
    sourceId: 'File:Lapland, Finland - panoramio (2).jpg',
    retrieved: '2026-09-23',
    changes: 'Resized 3872x2592 -> 2000x1339, WebP q80. Not cropped.',
    cropped: false,
  },
  '/images/commons/hero-about-summer.webp': {
    kind: 'commons',
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Midsummer_in_Kilpisj%C3%A4rvi,_Lapland_(52221808762).jpg',
    sourceId: 'File:Midsummer in Kilpisjärvi, Lapland (52221808762).jpg',
    taken: '2022-06-26',
    retrieved: '2026-09-23',
    changes: 'Resized 6131x4076 -> 1600x1064, WebP q64. Not cropped.',
    cropped: false,
  },
  '/images/commons/hero-destinations-winter.webp': {
    kind: 'commons',
    author: 'Ximonic (Simo Räsänen)',
    license: 'CC BY 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.5/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pallastunturi,_February_morning.JPG',
    sourceId: 'File:Pallastunturi, February morning.JPG',
    retrieved: '2026-09-23',
    changes: 'Resized 3264x1840 -> 2000x1127, WebP q80. Not cropped. (The file description says a February 2009 morning; its EXIF date 2009-12-25 contradicts it, so no date is stated.)',
    cropped: false,
  },
  '/images/commons/hero-destinations-summer.webp': {
    kind: 'commons',
    author: 'Heikki Immonen',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kilpisj%C3%A4rvi,_Fells_of_Norway_-_panoramio.jpg',
    sourceId: 'File:Kilpisjärvi, Fells of Norway - panoramio.jpg',
    retrieved: '2026-09-23',
    changes: 'Resized 3000x2250 -> 2000x1500, WebP q80. Not cropped.',
    cropped: false,
  },
  '/images/commons/hero-inquiry-winter.webp': {
    kind: 'commons',
    author: 'Htm',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Haltioletto_in_winter.jpg',
    sourceId: 'File:Haltioletto in winter.jpg',
    taken: '2021-03-28',
    retrieved: '2026-09-23',
    changes: 'Resized 4751x2672 -> 2000x1125, WebP q80. Not cropped.',
    cropped: false,
  },
  '/images/commons/hero-inquiry-summer.webp': {
    kind: 'commons',
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nuorgam,_Lapland_-_50215129291.jpg',
    sourceId: 'File:Nuorgam, Lapland - 50215129291.jpg',
    retrieved: '2026-09-23',
    changes: 'Resized 4893x3065 -> 2000x1253, WebP q80. Not cropped. People on the far bank are small and seen from behind; no one is identifiable.',
    cropped: false,
  },

  // ── Destination cards (Home 4:5, Destinations 5:4, detail 16:10) ──
  // CC BY / CC0 / own: square 1400 crops, declared. CC BY-SA: the whole photograph,
  // 1400 px tall (26.9.2026), framed on screen by object-cover + imagePosition().
  // Vesa 19.9.2026: "niihin varmaan löytyisi aidot tunnelmalliset kuvat?" The ten
  // AI renders (dest-<slug>-<season>.webp/avif) are archived under
  // _reissu-2026-07/_ai-originals-backup/laplandluxuryvillas-new/public/images/.
  '/images/destinations/saariselka-winter.webp': {
    kind: 'commons',
    author: 'Ninara from Helsinki, Finland',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Y1A9713_Lapland_(15620906338).jpg',
    sourceId: 'File:Y1A9713 Lapland (15620906338).jpg',
    taken: '2014-11-13',
    retrieved: RETRIEVED,
    changes: 'Cropped to 1:1 (5129x3121, box 1004,0 to 4125,3121), resized to 1400x1400, WebP.',
    cropped: true,
  },
  '/images/destinations/saariselka-summer.webp': {
    kind: 'commons',
    author: 'Ximonic (Simo Räsänen)',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Young_reindeer_on_Kaunisp%C3%A4%C3%A4_fell_in_Saariselk%C3%A4,_Inari,_Lapland,_Finland,_2021_September.jpg',
    sourceId: 'File:Young reindeer on Kaunispää fell in Saariselkä, Inari, Lapland, Finland, 2021 September.jpg',
    taken: '2021-09-18',
    retrieved: RETRIEVED,
    changes: 'Resized 5000x3333 -> 2100x1400, WebP q82. Not cropped (was a 1:1 crop until 26.9.2026).',
    cropped: false,
  },
  '/images/destinations/inari-winter.webp': {
    kind: 'commons',
    author: 'Ababamov',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aurora_Borealis_and_the_stars_2.jpg',
    sourceId: 'File:Aurora Borealis and the stars 2.jpg',
    taken: '2013-02-07',
    retrieved: RETRIEVED,
    changes: 'Resized 5184x3456 -> 2100x1400, WebP q82. Not cropped (was a 1:1 crop until 26.9.2026).',
    cropped: false,
  },
  '/images/destinations/inari-summer.webp': {
    kind: 'commons',
    author: 'Ximonic (Simo Räsänen)',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:J%C3%A4niskoski_rapids_of_Juutuanjoki_in_Inari,_Lapland,_Finland,_2022_August_-_4.jpg',
    sourceId: 'File:Jäniskoski rapids of Juutuanjoki in Inari, Lapland, Finland, 2022 August - 4.jpg',
    taken: '2022-08-13',
    retrieved: RETRIEVED,
    changes: 'Resized 5000x3477 -> 2013x1400, WebP q82. Not cropped (was a 1:1 crop until 26.9.2026).',
    cropped: false,
  },
  '/images/destinations/rovaniemi-winter.webp': {
    kind: 'commons',
    author: 'flightlog',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Santa_Claus_Village_in_Rovaniemi_20120209_01.jpg',
    sourceId: 'File:Santa Claus Village in Rovaniemi 20120209 01.jpg',
    taken: '2012-02-09',
    retrieved: RETRIEVED,
    changes: 'Cropped to 1:1 (3648x2432, box 826,0 to 3258,2432), resized to 1400x1400, WebP.',
    cropped: true,
  },
  '/images/destinations/levi-winter.webp': {
    kind: 'commons',
    author: 'DanielMichaelPerry',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sirkka_from_Levi,_Finland.jpg',
    sourceId: 'File:Sirkka from Levi, Finland.jpg',
    taken: '2023-01-13',
    retrieved: RETRIEVED,
    changes: 'Cropped to 1:1 (4032x3024, box 504,0 to 3528,3024), resized to 1400x1400, WebP.',
    cropped: true,
  },
  '/images/destinations/yllas-winter.webp': {
    kind: 'commons',
    author: 'Yllasjarvi',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yll%C3%A4stunturi_Yll%C3%A4sj%C3%A4rven_j%C3%A4%C3%A4lt%C3%A4.jpg',
    sourceId: 'File:Yllästunturi Ylläsjärven jäältä.jpg',
    taken: '2018-10-06',
    retrieved: RETRIEVED,
    changes: 'Resized 4272x2848 -> 2100x1400, WebP q82. Not cropped (was a 1:1 crop until 26.9.2026).',
    cropped: false,
  },

  // ── LaplandVibes' own photographs, July 2026 road trip (masters 4000x3000) ──
  '/images/destinations/rovaniemi-summer.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260720_115907.jpg',
    taken: '2026-07-20',
    retrieved: RETRIEVED,
    changes: 'Santa Claus Village main building, Rovaniemi, 11:59. Cropped (4000x3000, box 1150,90 to 3250,2190), resized to 1400x1400, WebP.',
    cropped: true,
  },
  '/images/destinations/levi-summer.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260720_161332.jpg',
    taken: '2026-07-20',
    retrieved: RETRIEVED,
    changes: 'Levi village and the lowland from the fell, 16:13. Cropped (4000x3000, box 500,0 to 3500,3000), resized to 1400x1400, WebP.',
    cropped: true,
  },
  '/images/destinations/yllas-summer.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260721_140157.jpg',
    taken: '2026-07-21',
    retrieved: RETRIEVED,
    changes: 'Reindeer at Äkäslompolo (Jänkä), 14:01. Cropped (4000x3000, box 980,0 to 3980,3000), resized to 1400x1400, WebP.',
    cropped: true,
  },
  '/images/midnight-sun/glass.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260720_122414.jpg',
    taken: '2026-07-20',
    retrieved: RETRIEVED,
    changes: 'Glass-fronted cabins in pine forest, Rovaniemi, 12:24; sun loungers cropped out. Cropped (4000x3000, box 1000,375 to 4000,2625), resized to 1200x900, WebP.',
    cropped: true,
  },
  '/images/midnight-sun/lakeside.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260719_222938.jpg',
    taken: '2026-07-19',
    retrieved: RETRIEVED,
    changes: 'Sun over Kemijärvi from a lakeside terrace, 22:29; railing cropped out. Cropped (4000x3000, box 400,0 to 3600,2400), resized to 1200x900, WebP.',
    cropped: true,
  },
  '/images/midnight-sun/fell.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260720_183723.jpg',
    taken: '2026-07-20',
    retrieved: RETRIEVED,
    changes: 'Gondola pylon, fireweed and the Levi road from the fell, 18:37. Cropped (4000x3000, box 0,0 to 4000,3000), resized to 1200x900, WebP.',
    cropped: true,
  },
  '/images/midnight-sun/forest.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260717_221203.jpg',
    taken: '2026-07-17',
    retrieved: RETRIEVED,
    changes: 'Dark timber cabin under pines at Ruka, 22:12. Cropped (4000x3000, box 800,450 to 4000,2850), resized to 1200x900, WebP.',
    cropped: true,
  },
  '/images/hero-villas-ruka.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260717_221203.jpg',
    taken: '2026-07-17',
    retrieved: RETRIEVED,
    changes: 'Dark timber cabin under pines at Ruka, 22:12; different crop from midnight-sun/forest, parked cars cropped out. Cropped (4000x3000, box 100,191 to 3900,2328), resized to 2000x1125, WebP.',
    cropped: true,
  },
  '/images/hero-midnight-sun-kemijarvi.webp': {
    kind: 'own',
    author: 'LaplandVibes',
    sourceUrl: '',
    sourceId: '20260718_221602.jpg',
    taken: '2026-07-18',
    retrieved: RETRIEVED,
    changes: 'Mirror-calm Kemijärvi at 22:16. Cropped (4000x3000, box 0,525 to 4000,2775), resized to 2000x1125, WebP.',
    cropped: true,
  },

  // ── Pexels aurora clips on /experiences (hero + two cards) and their poster frames ──
  '/videos/aurora-forest-honkamies.mp4': PHOTO_CREDIT_OF['/videos/aurora-forest-honkamies.mp4'],
  '/videos/aurora-cabins-malviya.mp4': PHOTO_CREDIT_OF['/videos/aurora-cabins-malviya.mp4'],
  '/videos/aurora-arc-distill.mp4': PHOTO_CREDIT_OF['/videos/aurora-arc-distill.mp4'],
  '/images/hero-experiences-poster.webp': PHOTO_CREDIT_OF['/videos/aurora-forest-honkamies.mp4'],
  '/images/experiences/private-aurora-photography-night.webp': PHOTO_CREDIT_OF['/videos/aurora-cabins-malviya.mp4'],
  '/images/experiences/helicopter-aurora-flight.webp': PHOTO_CREDIT_OF['/videos/aurora-arc-distill.mp4'],
}

/**
 * Lookup by image path, ignoring any `?v=` cache-bust on either side.
 *
 * 🔴 Measured live 19.9.2026 right after the first deploy: zero credits rendered in
 * production while the dev server showed all of them. `scripts/version-images.mjs`
 * stamps `?v=<hash>` on EVERY `/images/...webp` string in the bundle, including the
 * KEYS of the map above, so a lookup that stripped the query from the image but not
 * from the key never matched. The keys are normalised here at module load.
 */
const CREDITS_BY_PATH: Record<string, PhotoCredit> = Object.fromEntries(
  Object.entries(PHOTO_CREDITS).map(([k, v]) => [k.split('?')[0], v]),
)

export const creditFor = (image: string | undefined): PhotoCredit | undefined =>
  image ? CREDITS_BY_PATH[image.split('?')[0]] : undefined
