type SimpleItem = { title: string; body: string }
type ReasonItem = { title: string; body: string }
type SectionItem = { title: string; intro: string }
type SummerCard = { title: string; copy: string }

export type SiteCopy = {
  nav: {
    villas: string
    suites: string
    destinations: string
    experiences: string
    midnightSun: string
    about: string
    privateInquiry: string
    openMenu: string
    closeMenu: string
  }
  cta: {
    browseCollection: string
    beginPrivateInquiry: string
    fullCollection: string
    readProfile: string
    inquire: string
    viewRates: string
    viewOptions: string
    viewPublicRates: string
    orSendPrivateInquiry: string
    seeTheCollection: string
    inquireAboutJune: string
    inquireAboutJuneShort: string
    seeSummerCollection: string
    fullVillaCollection: string
    sendPrivateInquiry: string
    sendAnother: string
    home: string
    theCollection: string
    sending: string
    subscribe: string
    subscribed: string
  }
  badges: {
    onRequest: string
    fromPerNight: string
    fromPerPerson: string
    fromPerGroup: string
    rate: string
    bedroom: string
    bedrooms: string
    sleeps: string
    arrival: string
    aurora: string
    highlights: string
    villas: (n: number) => string
    villasIn: (name: string) => string
    villasInH2: (n: number, _name: string) => string
    alsoInCollection: string
    threeOthers: string
    signatureDetails: string
    sixVerifyOnArrival: string
    theDestination: string
    fullCollectionShort: string
  }
  /**
   * The earned editorial pick mark and the Google rating rows around it
   * (2026-07-26). NOT PURCHASABLE — the surface at the head of each
   * named-property grid is the sellable "Esittelykumppani" slot
   * (`FeaturedPartnerSlot` / `src/data/adSlots.ts`), and this mark is
   * deliberately the part money cannot buy. Never reword these strings into
   * anything that could read as sponsored, and never add a paid tier to them.
   *
   * The pick is derived, not written here: `bestGoogleRated()` in
   * `src/data/properties.ts` returns the surface's highest real Google rating
   * (ties broken by review count). Every card on such a surface prints its own
   * rating and links to Google's review list, so `pickReason` is a claim the
   * reader can check against the cards next to it.
   *
   * HONESTY CONTRACT. The rating is GOOGLE'S verdict, not ours: `ratingLine`
   * must name Google and must never be reworded into a first-person
   * recommendation ("our score", "we rate"). The data is a gitted snapshot
   * from `scripts/sync-villas.mjs`, not a live feed, so `verifiedOn` must
   * never imply real time ("live", "updated now").
   *
   * Ad-marking copy ("Mainos" / "Esittelykumppani") is deliberately NOT here:
   * the paid slot is `adLocaleEnabled`-gated to fi/en/sv and carries its own
   * three-language strings in `FeaturedPartnerSlot`. This mark is editorial, so
   * it must exist in all twelve locales.
   */
  editorial: {
    /** Mark label, e.g. "Toimituksen valinta". */
    pickLabel: string
    /** Why this card has the mark — the derivation stated in words. */
    pickReason: string
    /**
     * One card's Google score. `{r}` = rating, `{n}` = review count, both
     * pre-formatted for the locale by `Intl` (fi/sv "4,5" and "1 415"; en
     * "4.5", "1,415"). Must attribute the number to Google.
     */
    ratingLine: string
    /** Accessible name for the rating link (it opens Google's review list). */
    ratingAria: string
    /** Snapshot date marker. `{d}` = locale-formatted date. Never "live". */
    verifiedOn: string
    /**
     * 🔴 REQUIRED, and specific to this site. Cards here name ROOM TYPES
     * ("Nellim Aurora Bubble", "Apukka Aurora Wagon") while Google rates the
     * PROPERTY containing the room, so the rating is rendered with its scope
     * spelled out. `{p}` = the property's real-world name. Without this line
     * the number claims that hundreds of people reviewed one suite, which is
     * false. Never drop it, and never soften it into "about {p}".
     */
    ratingScope: string
  }
  tier: {
    signature: string
    private: string
    reserve: string
  }
  category: {
    'glass-roof': string
    'log-estate': string
    'designer-suite': string
    'alpine-chalet': string
    'lakeside-retreat': string
  }
  inquiry: {
    eyebrow: string
    defaultTitle: string
    defaultBody: string
    inquireBtn: string
    emailLabel: string
    badges: { anonymous: string; reply: string; rates: string }
  }
  midnightSunBand: {
    eyebrow: string
    h2: string
    body: string
    primary: string
    secondary: string
  }
  newsletter: {
    eyebrow: string
    h2: string
    lede: string
    emailPlaceholder: string
    footnote: string
    welcome: string
    already: string
    invalidEmail: string
    networkError: string
    genericError: string
  }
  affiliateDisclosure: {
    compact: string
    full: string
  }
  hero: {
    home: { eyebrow: string; title: string; lede: string; primary: string; secondary: string }
    villas: { eyebrow: string; title: string; lede: string }
    suites: { eyebrow: string; title: string; lede: string }
    destinations: { eyebrow: string; title: string; lede: string }
    experiences: { eyebrow: string; title: string; lede: string }
    midnightSun: { eyebrow: string; title: string; lede: string; primary: string; secondary: string }
    inquiry: { eyebrow: string; title: string; lede: string }
    about: { eyebrow: string; title: string; lede: string }
  }
  home: {
    philosophy: {
      eyebrow: string
      h2: string
      items: [SimpleItem, SimpleItem, SimpleItem]
    }
    signature: {
      eyebrow: string
      h2: string
      lede: string
    }
    destinations: {
      eyebrow: string
      h2: string
    }
  }
  villasPage: {
    filters: { all: string; glassRoof: string; logEstate: string; designerSuite: string; alpineChalet: string; lakeside: string }
    noVillas: string
    inquiryTitle: string
    inquiryBody: string
  }
  suitesPage: {
    intro: { p1Pre: string; designerSuite: string; p1Mid: string; glassRoof: string; p1Post: string }
    inquiryTitle: string
    inquiryBody: string
  }
  destinationsPage: {
    destinationLabel: (i: number) => string
    readTheProfile: (name: string) => string
  }
  destinationPage: {
    backLink: string
    eyebrow: string
    arrival: string
    aurora: string
    highlights: string
    villasHere: (n: number) => string
    villasHereH2: (n: number) => string
    fullCollection: string
    inquiryTitle: (name: string) => string
    inquiryBody: string
  }
  experiencesPage: {
    sections: { aurora: SectionItem; wilderness: SectionItem; culinary: SectionItem; arrival: SectionItem }
  }
  midnightSunPage: {
    facts: { value: string; label: string }[]
    fourReasons: string
    h2: string
    reasons: [ReasonItem, ReasonItem, ReasonItem, ReasonItem]
    summerCollection: {
      eyebrow: string
      h2: string
      lede: string
      cards: [SummerCard, SummerCard, SummerCard, SummerCard]
    }
    planning: {
      h2: string
      p1: string
      p2: string
      quoting: string
    }
    inquiryTitle: string
    inquiryBody: string
  }
  inquiryPage: {
    eyebrow: string
    h2: string
    intro: string
    fields: {
      headcount: string
      tripIntent: string
      budget: string
      datesLabel: string
      datesHint: string
      datesPlaceholder: string
      messageLabel: string
      messageHint: string
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailHint: string
      emailPlaceholder: string
    }
    options: {
      headcount: string[]
      intent: string[]
      budget: string[]
    }
    submit: string
    sending: string
    successH2: string
    successBody: string
    successFollowUp: string
    errorFallback: string
    fallbackNotice: string
    fineprint: string
    trustStrip: { title: string; body: string }[]
  }
  aboutPage: {
    sections: { title: string; paragraphs: (string | { type: 'link'; pre: string; label: string; href: string; post: string })[] }[]
  }
  villaDetailPage: {
    backLink: string
    bedroom: string
    bedrooms: string
    sleeps: string
    fromPerNight: string
    nightlyHint: string
    rate: string
    onRequest: string
    reserveHint: string
    beginInquiry: string
    viewRates: string
    orSendInquiry: string
    signatureEyebrow: string
    signatureH2: string
    destinationEyebrow: string
    readProfile: (name: string) => string
    inquiryTitle: (dest: string) => string
    inquiryBody: string
    alsoEyebrow: string
    alsoH2: string
  }
  notFound: {
    eyebrow: string
    body: string
    home: string
    collection: string
  }
  contactPage: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    h1: string
    cards: {
      private: { eyebrow: string; body: string }
      press: { eyebrow: string; body: string }
      deals: { eyebrow: string; body: string }
      general: { eyebrow: string; body: string }
    }
    privateCta: string
    operatorEyebrow: string
    location: string
    aboutPre: string
    aboutLabel: string
    aboutPost: string
  }
  footerNote: string
  footerPillars: { name: string; href: string }[]
}
