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
  concierge: {
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
    concierge: { eyebrow: string; title: string; lede: string }
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
    conciergeTitle: string
    conciergeBody: string
  }
  suitesPage: {
    intro: { p1Pre: string; designerSuite: string; p1Mid: string; glassRoof: string; p1Post: string }
    conciergeTitle: string
    conciergeBody: string
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
    conciergeTitle: (name: string) => string
    conciergeBody: string
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
    conciergeTitle: string
    conciergeBody: string
  }
  conciergePage: {
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
    conciergeTitle: (dest: string) => string
    conciergeBody: string
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
