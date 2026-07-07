import type { Lang } from '../i18n/useLang'

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

const en: SiteCopy = {
  nav: {
    villas: 'Villas',
    suites: 'Suites',
    destinations: 'Destinations',
    experiences: 'Experiences',
    midnightSun: 'Midnight Sun',
    about: 'About',
    privateInquiry: 'Private Inquiry',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  cta: {
    browseCollection: 'Browse the collection',
    beginPrivateInquiry: 'Private Inquiry',
    fullCollection: 'Full collection',
    readProfile: 'Read profile',
    inquire: 'Inquire',
    viewRates: 'View rates',
    viewOptions: 'View options',
    viewPublicRates: 'View public rates',
    orSendPrivateInquiry: 'Or send a private inquiry',
    seeTheCollection: 'Browse the collection',
    inquireAboutJune: 'Inquire about June dates',
    inquireAboutJuneShort: 'Inquire for June dates',
    seeSummerCollection: 'See the summer collection',
    fullVillaCollection: 'Full villa collection',
    sendPrivateInquiry: 'Send private inquiry',
    sendAnother: 'Send another inquiry',
    home: 'Home',
    theCollection: 'The Collection',
    sending: 'Sending…',
    subscribe: 'Subscribe',
    subscribed: 'Subscribed',
  },
  badges: {
    onRequest: 'On request',
    fromPerNight: 'From / night',
    fromPerPerson: 'From / person',
    fromPerGroup: 'From / group',
    rate: 'Rate',
    bedroom: 'bedroom',
    bedrooms: 'bedroom',
    sleeps: 'Sleeps',
    arrival: 'Arrival',
    aurora: 'Aurora',
    highlights: 'Highlights',
    villas: (n) => (n === 1 ? 'One villa anchored here.' : `${n} villas anchored here.`),
    villasIn: (name) => `Villas in ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'One villa anchored here.' : `${n} villas anchored here.`),
    alsoInCollection: 'Also in the collection',
    threeOthers: 'Three other villas worth considering.',
    signatureDetails: 'Signature details',
    sixVerifyOnArrival: 'Six things you can verify on arrival.',
    theDestination: 'The destination',
    fullCollectionShort: 'Full collection',
  },
  tier: {
    signature: 'Signature',
    private: 'Private Collection',
    reserve: 'Reserve · Concierge Only',
  },
  category: {
    'glass-roof': 'Glass-roof Villa',
    'log-estate': 'Private Log Estate',
    'designer-suite': 'Designer Suite',
    'alpine-chalet': 'Alpine Chalet',
    'lakeside-retreat': 'Lakeside Retreat',
  },
  concierge: {
    eyebrow: 'The Private Concierge',
    defaultTitle: 'A quieter way to plan your Lapland trip.',
    defaultBody: 'Send us one message with your preferences, your dates and how many of you there are. You get a private shortlist back within one working day. No public profile, no shared calendars, no account to set up.',
    inquireBtn: 'Private Inquiry',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Anonymous trip-planning',
      reply: 'Reply within one working day',
      rates: 'Direct rates on request',
    },
  },
  midnightSunBand: {
    eyebrow: 'Jun 6 – Jul 7',
    h2: 'The same villas, in 32 days of unbroken light.',
    body: 'Same houses, completely different season. The glass roof that framed the aurora now holds a sun that never sets, the lake is open water, the forest fills with cloudberry. Demand is roughly half what it is in winter, and it is the one stretch of the year when private chefs, helicopter charters and the reserve villas quietly open the rest of their calendar.',
    primary: 'See the summer collection',
    secondary: 'Inquire about June dates',
  },
  newsletter: {
    eyebrow: 'The #LaplandVibes newsletter',
    h2: 'A quiet note when villas open new dates, or a private one comes free.',
    lede: 'Direct rates, last-minute concierge openings, and the aurora forecast the week before each new moon. No spam. We write it from Finland and only send when we genuinely have something for you.',
    emailPlaceholder: 'your@email.com',
    footnote: 'Unsubscribe in one click.',
    welcome: 'Welcome aboard. The first note lands within a week.',
    already: 'You are already on the list. See you in the next one.',
    invalidEmail: 'That email address looks invalid.',
    networkError: 'Network error. Please try again.',
    genericError: 'Something went wrong. Try again in a moment.',
  },
  affiliateDisclosure: {
    compact: 'Affiliate link. We earn a small commission at no extra cost to you when you book.',
    full: 'This page contains affiliate links. If you book through these links, LaplandLuxuryVillas may receive a commission at no extra cost to you.',
  },
  hero: {
    home: {
      eyebrow: 'The Private Collection',
      title: 'Finnish Lapland, quietly at the top of the market.',
      lede: 'A small, hand-picked collection of private luxury villas across Lapland. Concierge-led, prices on request.',
      primary: 'Browse the collection',
      secondary: 'Private Inquiry',
    },
    villas: {
      eyebrow: 'The Collection',
      title: 'Nine villas. Five destinations. One private inquiry.',
      lede: 'Every property below is vetted against the operator\'s own published information and recent guest reviews. Filter by the kind of building you have in mind, or send a private inquiry and we will shortlist around your dates.',
    },
    suites: {
      eyebrow: 'Designer Suites',
      title: 'When you do not need a whole villa, just the glass roof.',
      lede: 'A short list of one-bedroom suites and aurora cabins where the building itself is the reason you came. Room for two, the same panoramic ceiling.',
    },
    destinations: {
      eyebrow: 'Destinations',
      title: 'Five places, each with a clear reason to be there.',
      lede: 'Lapland is not one interchangeable place. How often the aurora shows, how you actually get there, and how many villas you can choose from all shift noticeably every 50 km north of the Arctic Circle.',
    },
    experiences: {
      eyebrow: 'Bespoke Experiences',
      title: 'The day, before the night under the glass.',
      lede: 'Eight private experiences we pair with the villas. Each one is booked around the weather, the daylight and your villa check-in, so the timing actually works.',
    },
    midnightSun: {
      eyebrow: 'Jun 6 – Jul 7',
      title: 'The 32-day window when the sun never sets.',
      lede: 'The same villas in the midnight-sun season. Fewer guests, soft endless light.',
      primary: 'Inquire about June dates',
      secondary: 'Browse the collection',
    },
    concierge: {
      eyebrow: 'Private Concierge',
      title: 'One private message, one shortlist made for you.',
      lede: 'Tell us your dates, how many of you there are, and the kind of trip you have in mind. We reply within one working day, and where it fits we include the reserve villas that never show up publicly.',
    },
    about: {
      eyebrow: 'About',
      title: 'A short list, kept short on purpose.',
      lede: 'A private collection of Lapland\'s finest villas and suites. Anonymous concierge, direct rates where they exist, no platform in between.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'How we work',
      h2: 'The opposite of a booking platform.',
      items: [
        { title: 'A short list, not a directory.', body: 'Nine villas and suites, in the places that actually earn the journey north. We turn properties down more often than we add them, so every villa here is one a careful traveller could book without second-guessing it.' },
        { title: 'Anonymous trip-planning.', body: 'One private inbox. No public profile, no shared calendars with anyone else. Send your dates, how many of you there are and what you are after, and a shortlist made for you comes back within one working day.' },
        { title: 'Direct rates, where they exist.', body: 'Where a villa has a public listing we link you straight to the verified rate. The ones held privately, including reserve villas you will not find listed anywhere, we quote directly. The reply tells you which is which.' },
      ],
    },
    signature: {
      eyebrow: 'Signature villas',
      h2: 'Four anchors of the Lapland collection.',
      lede: 'The four we recommend most. Every detail below is checked against the operator\'s published information and recent guest reviews, not lifted from a brochure.',
    },
    destinations: {
      eyebrow: 'Destinations',
      h2: 'Five places, each with a clear reason.',
    },
  },
  villasPage: {
    filters: { all: 'All', glassRoof: 'Glass-roof', logEstate: 'Log Estate', designerSuite: 'Designer Suite', alpineChalet: 'Alpine Chalet', lakeside: 'Lakeside' },
    noVillas: 'No villas in that category yet.',
    conciergeTitle: 'Don\'t see the right fit?',
    conciergeBody: 'What you see above is what is currently published. We hold more villas privately, including reserve properties with no public listing at all, and quote those directly when you inquire.',
  },
  suitesPage: {
    intro: {
      p1Pre: '"Suite" in Lapland means two quite different things, and both are worth knowing. The first is the ',
      designerSuite: 'designer-suite',
      p1Mid: ', where a leading Finnish studio (Studio Puisto, ALA, Avanto) has built a single bedroom around a single view. The second is the ',
      glassRoof: 'glass-roof cabin',
      p1Post: ', where the ceiling is the headline detail. Both are listed below.',
    },
    conciergeTitle: 'A two-suite booking, or a private floor?',
    conciergeBody: 'Several of these properties release a multi-suite floor for exclusive use during shoulder weeks. Share your dates and headcount.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Destination 0${i + 1}`,
    readTheProfile: (name) => `Read the ${name} profile`,
  },
  destinationPage: {
    backLink: 'Destinations',
    eyebrow: 'Destination · Finnish Lapland',
    arrival: 'Arrival',
    aurora: 'Aurora',
    highlights: 'Highlights',
    villasHere: (n) => (n === 1 ? 'One villa anchored here.' : `${n} villas anchored here.`),
    villasHereH2: (n) => (n === 1 ? 'One villa anchored here.' : `${n} villas anchored here.`),
    fullCollection: 'Full collection',
    conciergeTitle: (name) => `Plan a private ${name} trip.`,
    conciergeBody: 'Send dates, headcount and any preferences (private chef, helicopter arrival, exclusive use). We reply with a shortlist within one working day.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurora', intro: 'The auroras themselves are free. What you are paying for is the access: the right vehicle, the right guide, and the right night under a clear sky.' },
      wilderness: { title: 'Wilderness', intro: 'Private versions of the things everyone comes to Lapland for, husky and snowmobile and reindeer, without the shared bus and the same loop everyone else does.' },
      culinary: { title: 'Culinary', intro: 'A working chef from one of Lapland\'s serious kitchens, in your villa, for the evening. Or the tasting menu on-site when the kitchen is the reason you came.' },
      arrival: { title: 'Arrival', intro: 'Private jet, helicopter transfer, arctic-spec ground vehicles. Booked around your slot, the daylight, and the villa check-in.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Days the sun never sets' },
      { value: '24h', label: 'Daylight at peak, Jun 21' },
      { value: '+18°C', label: 'Average daytime in late June' },
      { value: '50%', label: 'Lower demand than aurora-season' },
    ],
    fourReasons: 'Four reasons',
    h2: 'Lapland in summer is a separate place.',
    reasons: [
      { title: 'The architecture changes character.', body: 'The glass roofs built for the aurora now hold an unbroken sun. Skylight over the bed, sun on the lake, and no reason to draw a curtain, because there is no night to hide from.' },
      { title: 'The wilderness becomes accessible.', body: 'Lakes thaw, the boreal forest opens, the canoe routes appear. The same villa reached by snowmobile in February is now a five-minute boat ride from the dock.' },
      { title: 'The reserve villas open.', body: 'The private lakeside log estates and the architect chalets release the rest of their calendar. The 32-day window is the one time of year private chefs and helicopter charters quote shoulder rates.' },
      { title: 'No queues, no neighbours.', body: 'Lapland in summer sees a fraction of the winter crowd. The footpath through the forest and the lookout up on the fell are, in practice, yours.' },
    ],
    summerCollection: {
      eyebrow: 'The summer collection',
      h2: 'Four villa characters, in summer light.',
      lede: 'The same kinds of building as the winter collection (glass-roof cabins, lakeside log estates, alpine chalets, forest villas), shot in late-June midnight-sun light so you can see the other half of the story.',
      cards: [
        { title: 'Glass-roof cabin in the green', copy: 'The aurora architecture in 23:00 golden light, surrounded by lush forest instead of snow.' },
        { title: 'Lakeside log estate', copy: 'A private bay on Lake Inari, open water again, canoe at the dock and smoke rising from the wood-fired sauna.' },
        { title: 'Designer chalet on the fell', copy: 'Cotton-grass and wildflowers where the ski slope was, behind the same panoramic glass.' },
        { title: 'Modern forest villa', copy: 'Cantilevered timber building deep in green boreal pine, golden midnight-sun warmth on the facade.' },
      ],
    },
    planning: {
      h2: 'A note on planning a midnight-sun trip.',
      p1: 'The 32-day window is short, and the villas are individually owned, so the calendar fills unevenly rather than neatly. We hold a small allocation in the reserve estates each summer.',
      p2: 'For a given June, the time to ask is between January and March of that same year. Later is still worth a message, because dates do come free, but the very top of the list usually goes first.',
      quoting: 'Currently quoting summer 2026 + 2027',
    },
    conciergeTitle: 'Inquire about a midnight-sun trip.',
    conciergeBody: 'Send your dates, how many of you there are and any preferences. A reply lands within one working day with what is free across the summer collection, including reserve villas not listed publicly.',
  },
  conciergePage: {
    eyebrow: 'The inquiry form',
    h2: 'Tell us what you\'re picturing.',
    intro: 'Five short fields. The more specific you can be about what you want and what you need, the more useful the shortlist. Name and email stay optional, and replies go to whatever address you write from.',
    fields: {
      headcount: 'Headcount',
      tripIntent: 'Trip intent',
      budget: 'Indicative nightly budget',
      datesLabel: 'Dates (or window)',
      datesHint: 'e.g. \'Feb 14–21\' or \'first half of March, 5 nights\'',
      datesPlaceholder: 'Optional',
      messageLabel: 'Anything specific',
      messageHint: 'Private chef, helicopter arrival, exclusive use, accessibility, dietary needs, a focus on photography. Anything that shapes the shortlist.',
      nameLabel: 'Name (optional)',
      namePlaceholder: 'Anonymous if blank',
      emailLabel: 'Reply-to email',
      emailHint: 'If blank, replies go to your own outbound address.',
      emailPlaceholder: 'optional',
    },
    options: {
      headcount: ['1–2 guests', '3–4 guests', '5–6 guests', '7–10 guests', 'Larger group'],
      intent: ['Aurora season, first visit', 'Aurora season, been before', 'Midnight sun (Jun–Jul)', 'Christmas / New Year', 'Family group', 'Private celebration', 'Honeymoon / retreat for two', 'Something else (tell us below)'],
      budget: ['Under €1,000 / night', '€1,000 – €2,500 / night', '€2,500 – €5,000 / night', '€5,000+ / night', 'Reserve property, exclusive use', 'Prefer not to say'],
    },
    submit: 'Send private inquiry',
    sending: 'Sending…',
    successH2: 'Inquiry received.',
    successBody: 'A reply will land within one working day. If you\'d like to follow up directly, you can also reach us at',
    successFollowUp: '.',
    errorFallback: 'You can also email us directly at',
    fallbackNotice: 'Opening your mail client to send the inquiry directly.',
    fineprint: 'Submissions are forwarded over an encrypted connection to a single private inbox in Finland. No third-party CRM, no advertising attribution on the message body.',
    trustStrip: [
      { title: 'Anonymous', body: 'Name and email are optional. Inquiry sent over an encrypted form to a single inbox.' },
      { title: 'private@laplandvibes.com', body: 'Monitored Mon–Fri. Replies within one working day, written by a person in Finland.' },
      { title: 'Discrete by default', body: 'No third-party CRM, no shared calendars. The shortlist is built privately for each inquiry.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Why this collection exists',
        paragraphs: [
          'Lapland\'s luxury accommodation is a small world. The same handful of villas and a few dozen suites turn up on every booking platform, often with the same stock photos and the same vague price range. Once you have done the obvious trips, the questions get sharper: which villa would you actually book, where do you put a family of nine, what is the place nobody writes about?',
          'This site is a short, considered answer to those questions. A hand-picked shortlist of the villas and suites we think are genuinely worth the journey.',
        ],
      },
      {
        title: 'What this site does not do',
        paragraphs: [
          'We do not operate the villas, and we are not a booking agency. There is no directory here, and no plan to build one. We keep the collection deliberately small.',
          'We are independent. Where a property can be booked online we link to its public listing, for example through Hotels.com; those links may earn us a small commission at no extra cost to you, and they never influence which villas we recommend. Properties cannot pay to be featured.',
        ],
      },
      {
        title: 'Who runs it',
        paragraphs: [
          {
            type: 'link',
            pre: 'A small, Finland-based team that also runs the ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ' ecosystem, an editorial hub and a network of Lapland travel sites. This is the part of that work focused on Lapland\'s most distinctive villas and suites.',
          },
          'Your inquiry reaches one inbox and is answered by a person, not a chatbot or an outsourced call centre. If something is not the right fit for this collection, a group too large or a place we do not cover, we will tell you honestly and, where we can, point you somewhere better.',
        ],
      },
      {
        title: 'Two kinds of trip we don\'t take',
        paragraphs: [
          'Weddings of more than thirty guests, and full-estate buy-outs for brand events, sit outside what these properties were built for. We\'re glad to point you to operators who handle that kind of event properly.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'The Collection',
    bedroom: 'bedroom',
    bedrooms: 'bedroom',
    sleeps: 'Sleeps',
    fromPerNight: 'From / night',
    nightlyHint: 'Indicative low-season rate. Actual nightly rate depends on dates, length of stay and inclusions.',
    rate: 'Rate',
    onRequest: 'On request',
    reserveHint: 'Reserve property. Quoted privately on inquiry, never on a public listing.',
    beginInquiry: 'Begin private inquiry',
    viewRates: 'View public rates',
    orSendInquiry: 'Or send a private inquiry',
    signatureEyebrow: 'Signature details',
    signatureH2: 'Six things you can verify on arrival.',
    destinationEyebrow: 'The destination',
    readProfile: (name) => `Read the ${name} profile →`,
    conciergeTitle: (dest) => `Begin a ${dest} inquiry.`,
    conciergeBody: 'Send dates, headcount, preferences. A reply lands within one working day with availability, the actual nightly rate, and any reserve villas worth pairing with this one.',
    alsoEyebrow: 'Also in the collection',
    alsoH2: 'Three other villas worth considering.',
  },
  notFound: {
    eyebrow: 'Error',
    body: 'That page isn\'t part of the collection. The villas, suites and destinations are listed below.',
    home: 'Home',
    collection: 'The Collection',
  },
  contactPage: {
    seoTitle: 'Contact · LaplandLuxuryVillas',
    seoDescription: 'Single private inbox: private@laplandvibes.com. Operated by Lapeso Oy from Finnish Lapland. Press, partnership and direct-deal contacts below.',
    eyebrow: 'Contact',
    h1: 'One inbox, one operator.',
    cards: {
      private: {
        eyebrow: 'Private inquiries',
        body: 'Anonymous trip-planning, villa shortlists, direct-rate questions. Reply within one working day.',
      },
      press: {
        eyebrow: 'Press & partnerships',
        body: 'Editorial requests, partnership proposals from properties, journalist inquiries.',
      },
      deals: {
        eyebrow: 'Direct deals (properties)',
        body: 'Villa owners and operators interested in being represented in the collection. We turn down most submissions, so please read the About page first.',
      },
      general: {
        eyebrow: 'General editorial',
        body: 'Anything else. Slower turn-around than private@; for trip-planning use the concierge inbox above.',
      },
    },
    privateCta: 'Send a private inquiry',
    operatorEyebrow: 'Operator',
    location: 'Finnish Lapland. Registered company in Finland.',
    aboutPre: 'See the ',
    aboutLabel: 'About',
    aboutPost: ' page for the broader LaplandVibes ecosystem context.',
  },
  footerNote:
    'A private collection curated in Finnish Lapland, last reviewed May 2026. Some bookings earn an affiliate commission, which never shapes which villas we recommend. The reserve and concierge-only properties pay nothing.',
  footerPillars: [
    { name: 'The Collection', href: '/villas' },
    { name: 'Designer Suites', href: '/suites' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Midnight Sun', href: '/midnight-sun' },
    { name: 'Private Concierge', href: '/concierge' },
  ],
}

// JA block, chrome translated; long-form prose left in EN with TODO
// for native translator. Phase 3B (2026-05-17).
const ja: SiteCopy = {
  nav: {
    villas: 'ヴィラ',
    suites: 'スイート',
    destinations: '目的地',
    experiences: '体験',
    midnightSun: '白夜',
    about: '当コレクションについて',
    privateInquiry: 'プライベートお問い合わせ',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
  },
  cta: {
    browseCollection: 'コレクションを見る',
    beginPrivateInquiry: 'プライベートお問い合わせを開始',
    fullCollection: 'コレクション全体',
    readProfile: 'プロフィールを読む',
    inquire: 'お問い合わせ',
    viewRates: '料金を見る',
    viewOptions: 'オプションを見る',
    viewPublicRates: '公開料金を見る',
    orSendPrivateInquiry: 'またはプライベートお問い合わせを送信',
    seeTheCollection: 'コレクションを見る',
    inquireAboutJune: '6月の日程についてお問い合わせ',
    inquireAboutJuneShort: '6月の日程を問い合わせる',
    seeSummerCollection: '夏のコレクションを見る',
    fullVillaCollection: 'ヴィラコレクション全体',
    sendPrivateInquiry: 'プライベートお問い合わせを送信',
    sendAnother: '別のお問い合わせを送信',
    home: 'ホーム',
    theCollection: 'コレクション',
    sending: '送信中…',
    subscribe: '購読する',
    subscribed: '登録済み',
  },
  badges: {
    onRequest: 'お問い合わせください',
    fromPerNight: '1泊あたり〜',
    fromPerPerson: '1名あたり〜',
    fromPerGroup: '1グループあたり〜',
    rate: '料金',
    bedroom: 'ベッドルーム',
    bedrooms: 'ベッドルーム',
    sleeps: '定員',
    arrival: 'アクセス',
    aurora: 'オーロラ',
    highlights: 'ハイライト',
    villas: (n) => (n === 1 ? 'こちらに1棟のヴィラがございます。' : `こちらに${n}棟のヴィラがございます。`),
    villasIn: (name) => `${name}のヴィラ`,
    villasInH2: (n, _name) => (n === 1 ? 'こちらに1棟のヴィラがございます。' : `こちらに${n}棟のヴィラがございます。`),
    alsoInCollection: 'コレクションの他のヴィラ',
    threeOthers: 'ご検討いただきたい他の3棟のヴィラ。',
    signatureDetails: '署名すべき細部',
    sixVerifyOnArrival: 'チェックイン時に実際に確認できる6つのポイント。',
    theDestination: '目的地について',
    fullCollectionShort: 'コレクション全体',
  },
  tier: {
    signature: 'シグネチャー',
    private: 'プライベートコレクション',
    reserve: 'リザーブ · コンシェルジュ限定',
  },
  category: {
    'glass-roof': 'ガラスルーフ・ヴィラ',
    'log-estate': 'プライベート・ログエステート',
    'designer-suite': 'デザイナーズ・スイート',
    'alpine-chalet': 'アルパイン・シャレー',
    'lakeside-retreat': 'レイクサイド・リトリート',
  },
  concierge: {
    eyebrow: 'プライベート・コンシェルジュ',
    defaultTitle: 'ラップランド旅行を、もっと静かに計画する方法。',
    defaultBody: 'ご希望、日程、人数を一通のメッセージにまとめてお送りください。コンシェルジュが1営業日以内に、非公開のショートリストを添えてご返信いたします。公開プロフィールも、第三者と共有するカレンダーもございません。',
    inquireBtn: 'プライベートお問い合わせ',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: '匿名で旅行を計画',
      reply: '1営業日以内にご返信',
      rates: 'リクエストに応じて直接料金をご案内',
    },
  },
  midnightSunBand: {
    eyebrow: '6月6日 – 7月7日',
    h2: '同じヴィラ、太陽が沈まない32日間。',
    body: '建築は同じで、季節だけが変わります。ガラスの屋根は沈まない太陽を映すトップライトとなり、湖は氷を溶かし、森にはクラウドベリーが実ります。需要は冬の半分,そしてこの期間だけ、専用シェフ、ヘリコプターチャーター、リザーブヴィラがその年の残りのカレンダーを開放します。',
    primary: '夏のコレクションを見る',
    secondary: '6月の日程についてお問い合わせ',
  },
  newsletter: {
    eyebrow: '#LaplandVibes ニュースレター',
    h2: 'ヴィラが新しい日程を開放したとき、非公開のリリース情報を耳にしたときだけ、静かにお知らせします。',
    lede: '直接料金。直前のコンシェルジュ枠。各新月の前週にはオーロラの観測好機を予報。ニュースレターのスパムは送りません,フィンランドで執筆し、本当にお伝えする価値があるときだけ配信します。',
    emailPlaceholder: 'your@email.com',
    footnote: 'ワンクリックで配信解除できます。',
    welcome: 'ご登録ありがとうございます。最初のお便りは1週間以内に届きます。',
    already: 'すでに登録済みです,次のお便りでお目にかかりましょう。',
    invalidEmail: 'メールアドレスが正しくないようです。',
    networkError: 'ネットワークエラーが発生しました。もう一度お試しください。',
    genericError: '問題が発生しました。少し時間をおいて再度お試しください。',
  },
  affiliateDisclosure: {
    compact: 'アフィリエイトリンク,ご予約いただくと追加費用なしで少額の手数料を受け取ります。',
    full: 'このページにはアフィリエイトリンクが含まれます。こちらのリンク経由でご予約いただいた場合、追加費用なしでLaplandLuxuryVillasに手数料が支払われることがあります。',
  },
  hero: {
    home: {
      eyebrow: 'プライベートコレクション',
      title: 'フィンランド・ラップランド,市場の頂点で、静かに。',
      lede: 'ラップランド各地のプライベート・ラグジュアリーヴィラを厳選した小さなコレクション,コンシェルジュ対応、料金はお問い合わせにて。',
      primary: 'コレクションを見る',
      secondary: 'プライベートお問い合わせ',
    },
    villas: {
      eyebrow: 'コレクション',
      title: '9棟のヴィラ、5つの目的地、1つのプライベートお問い合わせ。',
      lede: '以下のヴィラはすべて、運営者の公式情報と最新の宿泊者レビューをもとに検証しています。ご希望の建築タイプで絞り込んでいただくか、プライベートお問い合わせをお送りいただければ、ご希望の日程に合わせてショートリストをご用意します。',
    },
    suites: {
      eyebrow: 'デザイナーズ・スイート',
      title: 'ヴィラほど大きくはないけれど、ガラスの屋根は外せない方へ。',
      lede: '建築そのものが体験となるワンベッドルームのスイートとオーロラキャビンの厳選リスト。人数を抑えつつ、同じパノラマの天井をお楽しみいただけます。',
    },
    destinations: {
      eyebrow: '目的地',
      title: '5つの場所、それぞれにはっきりとした理由があります。',
      lede: 'ラップランドはどこも同じというわけではありません。オーロラの観測頻度、アクセス、宿泊施設の密度は、北極圏より50キロ進むごとに大きく変わります。',
    },
    experiences: {
      eyebrow: 'オーダーメイド体験',
      title: 'ガラスの下で過ごす夜の、その前の日中の過ごし方。',
      lede: 'ヴィラと組み合わせる8つのプライベート体験をご用意しています。それぞれ、天候の合間、日照時間、ヴィラのチェックイン時刻に合わせて手配します。',
    },
    midnightSun: {
      eyebrow: '6月6日 – 7月7日',
      title: '太陽が沈まない32日間の窓。',
      lede: '白夜の季節に巡る、同じヴィラ,訪れる人は少なく、果てしない光はやわらかく。',
      primary: '6月の日程についてお問い合わせ',
      secondary: 'コレクションを見る',
    },
    concierge: {
      eyebrow: 'プライベート・コンシェルジュ',
      title: '一通のプライベートメッセージ、一つの厳選されたショートリスト。',
      lede: '日程、人数、お考えの旅のスタイルをお送りください。1営業日以内にご返信します,ご希望に合致する場合は、公開されていないリザーブヴィラを含むご提案もいたします。',
    },
    about: {
      eyebrow: '当コレクションについて',
      title: '意図して短く保たれた、選び抜かれたリスト。',
      lede: 'ラップランドの最高峰のヴィラとスイートだけを集めたプライベートコレクション,匿名コンシェルジュ、可能な限りの直接料金、間にプラットフォームを挟みません。',
    },
  },
  home: {
    philosophy: {
      eyebrow: '私たちの仕事の進め方',
      h2: '予約プラットフォームとは対極にあるサービス。',
      items: [
        { title: 'ディレクトリではなく、厳選されたリスト。', body: '旅をする価値が確かにある目的地に絞った9棟のヴィラとスイート。新しい物件の追加よりも、お断りすることの方が多くなっています,このページに掲載されているのは、慎重な旅人が迷うことなく予約できる物件だけです。' },
        { title: '匿名で旅行を計画。', body: '一つのプライベート受信箱だけ。公開プロフィールも、第三者と共有するカレンダーもありません。日程、人数、ご希望をお送りください, 1営業日以内に厳選されたショートリストをお届けします。' },
        { title: '可能な限り直接料金で。', body: '公開リスティングは認証済みの料金にリンクしています。リザーブヴィラなど、公開在庫を持たない物件は直接お見積もりします。ご返信でどちらかを明確にお伝えします。' },
      ],
    },
    signature: {
      eyebrow: 'シグネチャーヴィラ',
      h2: 'ラップランド・コレクションの中核となる4棟。',
      lede: '最も頻繁にお勧めしている物件です。以下の詳細はすべて運営者の公式情報と最新レビューで確認済みで、パンフレットからの転載ではありません。',
    },
    destinations: {
      eyebrow: '目的地',
      h2: '5つの場所、それぞれに明確な理由があります。',
    },
  },
  villasPage: {
    filters: { all: 'すべて', glassRoof: 'ガラスルーフ', logEstate: 'ログエステート', designerSuite: 'デザイナーズ・スイート', alpineChalet: 'アルパイン・シャレー', lakeside: 'レイクサイド' },
    noVillas: 'このカテゴリーには現在ヴィラがございません。',
    conciergeTitle: 'ぴったりのヴィラが見つかりませんか?',
    conciergeBody: '上記のコレクションは現在公開中の物件です。リザーブヴィラを含む追加の物件は非公開で運営しており、お問い合わせいただいた際に直接お見積もりします。',
  },
  suitesPage: {
    intro: {
      p1Pre: 'ラップランドでの「スイート」には、知っておくべき2つの建築的方向性があります。1つ目は',
      designerSuite: 'デザイナーズ・スイート',
      p1Mid: '。フィンランドを代表する建築事務所(Studio Puisto、ALA、Avantoなど)が、たった一つの眺望のためにワンベッドルームを設計したもの。2つ目は',
      glassRoof: 'ガラスルーフ・キャビン',
      p1Post: '。天井そのものが主役の建築です。どちらも以下に掲載しています。',
    },
    conciergeTitle: '2スイートまとめての予約、または1フロア貸切は可能ですか?',
    conciergeBody: 'これらの物件のいくつかは、ショルダーシーズンに複数スイートのフロアを貸切利用に開放しています。日程と人数をお知らせください。',
  },
  destinationsPage: {
    destinationLabel: (i) => `目的地 0${i + 1}`,
    readTheProfile: (name) => `${name}のプロフィールを読む`,
  },
  destinationPage: {
    backLink: '目的地一覧',
    eyebrow: '目的地 · フィンランド・ラップランド',
    arrival: 'アクセス',
    aurora: 'オーロラ',
    highlights: 'ハイライト',
    villasHere: (n) => (n === 1 ? 'こちらに1棟のヴィラがございます。' : `こちらに${n}棟のヴィラがございます。`),
    villasHereH2: (n) => (n === 1 ? 'こちらに1棟のヴィラがございます。' : `こちらに${n}棟のヴィラがございます。`),
    fullCollection: 'コレクション全体',
    conciergeTitle: (name) => `プライベートな${name}の旅を計画する。`,
    conciergeBody: '日程、人数、ご希望(専用シェフ、ヘリコプター到着、貸切利用など)をお送りください。1営業日以内にショートリストを添えてご返信します。',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'オーロラ', intro: 'オーロラそのものは無料です。ここでお手配するのはアクセス,適切な車両、適切なガイド、そして適切な雲の合間の適切な夜です。' },
      wilderness: { title: 'ウィルダネス', intro: 'ハスキー、スノーモービル、トナカイ,多くの旅行者が目指す体験を、相乗りのバスや周遊コースなしのプライベート版でご提供します。' },
      culinary: { title: '美食', intro: 'ラップランドの本格的なキッチンの現役シェフをヴィラに招いて一夜のディナーを,または、キッチンこそが訪れる理由となる施設で、コース料理を味わっていただきます。' },
      arrival: { title: 'アクセス', intro: 'プライベートジェット、ヘリコプター送迎、北極仕様の地上車両。発着枠、日照時間、ヴィラのチェックインに合わせて手配します。' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: '太陽が沈まない日数' },
      { value: '24時間', label: 'ピーク時の日照時間, 6月21日' },
      { value: '+18°C', label: '6月下旬の平均日中気温' },
      { value: '50%', label: 'オーロラシーズンと比較した需要減' },
    ],
    fourReasons: '4つの理由',
    h2: '夏のラップランドは、まったく別の場所です。',
    reasons: [
      { title: '建築の表情が変わります。', body: 'オーロラのために設計されたガラスの屋根が、今度は沈まない太陽を切り取ります。ベッドの上は光に満ち、湖は陽を浴び、カーテンを引く必要はありません,隠すべき夜がないからです。' },
      { title: '大自然へのアクセスが開けます。', body: '湖は溶け、ボレアル森林は開かれ、カヌーのルートが現れます。2月にスノーモービルで辿り着いたヴィラへは、今度は桟橋からボートで5分です。' },
      { title: 'リザーブヴィラが開放されます。', body: '湖畔のプライベート・ログエステート、建築家の手によるシャレーがその年の残りのカレンダーを開放します。32日間の窓は、専用シェフやヘリコプターチャーターがショルダー料金で対応する、1年で唯一の時期です。' },
      { title: '行列なし、隣人なし。', body: '夏のラップランドの来訪者数は、冬のごく一部です。森を抜ける小道、山の上の展望台,実質的にあなただけのものとなります。' },
    ],
    summerCollection: {
      eyebrow: '夏のコレクション',
      h2: '4種類のヴィラの個性を、夏の光のなかで。',
      lede: '冬のコレクションと同じ建築カテゴリー,ガラスルーフ・キャビン、湖畔のログエステート、アルパイン・シャレー、フォレストヴィラ,を6月下旬の白夜の光のもとで撮影し、物語の後半をお見せします。',
      cards: [
        { title: '緑のなかのガラスルーフ・キャビン', copy: 'オーロラのための建築を、23時のゴールデンアワーの光のなかで。雪の代わりに、豊かな森に囲まれています。' },
        { title: '湖畔のログエステート', copy: 'イナリ湖のプライベートベイは氷を解き,桟橋にはカヌー、薪サウナからは煙が立ちのぼります。' },
        { title: '山の上のデザイナーズ・シャレー', copy: 'スキー斜面の代わりに、ワタスゲと野花が広がります,同じパノラマのガラスファサードはそのままに。' },
        { title: '森のモダンヴィラ', copy: 'ボレアルマツの深い緑のなかに延びる木造のキャンチレバー建築、ファサードには白夜の黄金の暖かみ。' },
      ],
    },
    planning: {
      h2: '白夜の旅の計画にあたって。',
      p1: '32日間の窓は短く、各ヴィラは個別所有のため、カレンダーは均等にではなく機会次第で埋まっていきます。コンシェルジュは毎夏、リザーブエステートの少数枠を確保しています。',
      p2: 'ある年の6月のお問い合わせに最適な時期は、その年の1〜3月です。それ以降のお問い合わせも価値はあります,直前リリースは発生します,が、上位帯の在庫はより早い段階で埋まる傾向にあります。',
      quoting: '現在、2026年夏と2027年夏のお見積もりを承っています',
    },
    conciergeTitle: '白夜の旅についてお問い合わせ。',
    conciergeBody: '日程、人数、ご希望をお送りください。1営業日以内に、公開されていないリザーブヴィラを含む夏のコレクション全体の空き状況を添えてご返信します。',
  },
  conciergePage: {
    eyebrow: 'お問い合わせフォーム',
    h2: 'お考えの旅をお聞かせください。',
    intro: '5つの短い項目です。ご希望や条件が具体的であるほど、ショートリストの精度が上がります。お名前とメールアドレスは任意です,ご返信は受信したメールアドレスに送ります。',
    fields: {
      headcount: '人数',
      tripIntent: '旅の目的',
      budget: '1泊あたりの目安予算',
      datesLabel: '日程(または希望期間)',
      datesHint: '例:「2月14日〜21日」または「3月前半に5泊」',
      datesPlaceholder: '任意',
      messageLabel: 'ご希望や条件',
      messageHint: '専用シェフ、ヘリコプター到着、貸切利用、バリアフリー、食事制限、写真撮影重視,ショートリストに反映したい条件をお書きください。',
      nameLabel: 'お名前(任意)',
      namePlaceholder: '未記入の場合は匿名で承ります',
      emailLabel: '返信先メールアドレス',
      emailHint: '未記入の場合、送信元のメールアドレスにご返信します。',
      emailPlaceholder: '任意',
    },
    options: {
      headcount: ['1〜2名', '3〜4名', '5〜6名', '7〜10名', '10名以上のグループ'],
      intent: ['オーロラシーズン,初訪問', 'オーロラシーズン,リピート訪問', '白夜(6〜7月)', 'クリスマス / 年末年始', 'ファミリーグループ', 'プライベートなお祝い', '新婚旅行 / お二人のリトリート', 'その他,メッセージにてご記入'],
      budget: ['€1,000未満 / 泊', '€1,000 – €2,500 / 泊', '€2,500 – €5,000 / 泊', '€5,000以上 / 泊', 'リザーブ物件,貸切利用', '回答を控える'],
    },
    submit: 'プライベートお問い合わせを送信',
    sending: '送信中…',
    successH2: 'お問い合わせを受け付けました。',
    successBody: '1営業日以内にご返信いたします。直接ご連絡いただく場合は、こちらのアドレスもご利用ください:',
    successFollowUp: '。',
    errorFallback: 'こちらのアドレスにも直接ご連絡いただけます:',
    fallbackNotice: 'メールクライアントを起動して直接お問い合わせを送信します。',
    fineprint: 'お問い合わせは暗号化された接続で、フィンランドの単一のプライベート受信箱へ転送されます。第三者CRMも、メッセージ本文への広告アトリビューションも一切ありません。',
    trustStrip: [
      { title: '匿名性', body: 'お名前とメールアドレスは任意です。お問い合わせは暗号化フォームから単一の受信箱へ送信されます。' },
      { title: 'private@laplandvibes.com', body: '月〜金で監視。1営業日以内に、フィンランドで人の手によって書かれた返信をお送りします。' },
      { title: '既定で控えめに', body: '第三者CRMも、共有カレンダーもなし。ショートリストはお問い合わせごとに個別に作成します。' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'なぜこのコレクションが存在するのか',
        paragraphs: [
          'ラップランドのラグジュアリー宿泊在庫は限られています。同じ5〜6棟のヴィラと20余りのスイートが、どの予約プラットフォームにも同じストック写真と曖昧な料金帯で掲載されています。モルディブの水上スイート、南極の船、ブータンのトレッキングといった定番をすでに体験した方々が、ラップランドについてもより具体的に尋ねるようになります,実際にどのヴィラを予約すべきか、9名のファミリーグループはどこに泊めるのか、誰も書かない場所はどこか、と。',
          'このサイトは、そうした問いへの答えを構造化したものです,短く、意見をもって、訪れる価値のある場所の名前を具体的に挙げています。',
        ],
      },
      {
        title: 'このサイトが行わないこと',
        paragraphs: [
          'ヴィラの運営はこちらでは行っていません。カウンターでツアーを販売することもありません。ディレクトリ化を目指していませんし、その意図もありません,コレクションは12〜15棟を超えることはありません。新しいヴィラが基準を満たした場合は、古いものを引退させます。',
          '物件が掲載料を支払うことはありません。アフィリエイトリンクはHotels.comの公開リスティング(手数料約4〜8%)を経由し、専用料金をもたらすものではありません。リザーブヴィラは何も支払いません,適切なお問い合わせに対する適切な答えだからこそ掲載しています。',
        ],
      },
      {
        title: '運営者',
        paragraphs: [
          {
            type: 'link',
            pre: 'フィンランドを拠点とする小規模な運営で、すでに',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: 'のラップランド旅行サイトエコシステム,編集ハブと20余りのカテゴリー専門サイト,を運営しています。当サイトは、私たちが信頼できる方々にお勧めできるヴィラを公開する部門です。',
          },
          'コンシェルジュからのご返信は、人の手で直接監視される一つの受信箱から届きます,チャットボットなし、新人アカウントエグゼクティブなし、外注プランナーなし。当コレクションに合わないお問い合わせ(対応していない価格帯や目的地など)には、丁寧な定型文ではなく、「これはご縁ではないと思います、ふさわしい先はこちらです」と正直にご返信します。',
        ],
      },
      {
        title: '直接取引',
        paragraphs: [
          'コレクション内のいくつかのヴィラは、現在直接お見積もりに対応しています。今後12ヶ月でこれを拡大する見込みです,物件と直接の関係を結び、仲介手数料なしの認証済み料金でゲストに予約していただけるようにします。それまでは、公開料金のヴィラはHotels.comにリンクし、コンシェルジュ限定のヴィラは直接お見積もりします。',
        ],
      },
      {
        title: '対応しない2種類のご旅行',
        paragraphs: [
          '30名を超えるウェディングパーティー。単一ブランドのイベントのために、ツアーオペレーターが施設全体を貸切る案件。どちらもこれらの物件が想定する滞在の枠外です,適切にこうした案件を扱う運営者をご紹介できますので、お気軽にお知らせください。',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'コレクション',
    bedroom: 'ベッドルーム',
    bedrooms: 'ベッドルーム',
    sleeps: '定員',
    fromPerNight: '1泊あたり〜',
    nightlyHint: 'ローシーズンの目安料金です。実際の1泊料金は日程、滞在日数、含まれる内容によって変わります。',
    rate: '料金',
    onRequest: 'お問い合わせください',
    reserveHint: 'リザーブ物件,お問い合わせ時に直接お見積もりし、公開リスティングには掲載しません。',
    beginInquiry: 'プライベートお問い合わせを開始',
    viewRates: '公開料金を見る',
    orSendInquiry: 'またはプライベートお問い合わせを送信',
    signatureEyebrow: '署名すべき細部',
    signatureH2: 'チェックイン時に実際に確認できる6つのポイント。',
    destinationEyebrow: '目的地について',
    readProfile: (name) => `${name}のプロフィールを読む →`,
    conciergeTitle: (dest) => `${dest}についてお問い合わせを開始。`,
    conciergeBody: '日程、人数、ご希望をお送りください。1営業日以内に、空き状況、実際の1泊料金、組み合わせる価値のあるリザーブヴィラの情報を添えてご返信します。',
    alsoEyebrow: 'コレクションの他のヴィラ',
    alsoH2: 'ご検討いただきたい他の3棟のヴィラ。',
  },
  notFound: {
    eyebrow: 'エラー',
    body: 'このページはコレクションには含まれていません。ヴィラ、スイート、目的地は以下に掲載しています。',
    home: 'ホーム',
    collection: 'コレクション',
  },
  contactPage: {
    seoTitle: 'お問い合わせ · LaplandLuxuryVillas',
    seoDescription: 'プライベート専用窓口: private@laplandvibes.com。フィンランド・ラップランドのLapeso Oyが運営。報道・提携・直接取引の連絡先は以下のとおりです。',
    eyebrow: 'お問い合わせ',
    h1: '窓口はひとつ、運営者もひとり。',
    cards: {
      private: {
        eyebrow: 'プライベートのお問い合わせ',
        body: '匿名での旅行プランニング、ヴィラの候補選び、直接料金に関するご質問。1営業日以内にご返信します。',
      },
      press: {
        eyebrow: '報道・提携',
        body: '編集に関するご依頼、施設からの提携のご提案、ジャーナリストの方からのお問い合わせ。',
      },
      deals: {
        eyebrow: '直接取引(施設の方)',
        body: 'コレクションへの掲載をご希望のヴィラのオーナー・運営者の方へ。ほとんどのお申し込みはお断りしております,まずはAboutページをご覧ください。',
      },
      general: {
        eyebrow: '一般・編集',
        body: 'その他のお問い合わせ。private@ よりご返信に時間をいただきます。旅行プランニングは上記のコンシェルジュ窓口をご利用ください。',
      },
    },
    privateCta: 'プライベートのお問い合わせを送る',
    operatorEyebrow: '運営者',
    location: 'フィンランド・ラップランド,フィンランド登記の会社です。',
    aboutPre: 'LaplandVibesエコシステム全体の背景については',
    aboutLabel: 'サイトについて',
    aboutPost: 'ページをご覧ください。',
  },
  footerNote:
    'フィンランド・ラップランドで厳選したプライベートコレクション,最終確認 2026年5月。一部のご予約はアフィリエイト手数料の対象となりますが、どのヴィラを推薦するかには一切影響しません。リザーブおよびコンシェルジュ限定の物件は何も支払いません。',
  footerPillars: [
    { name: 'コレクション', href: '/villas' },
    { name: 'デザイナーズ・スイート', href: '/suites' },
    { name: '目的地', href: '/destinations' },
    { name: '体験', href: '/experiences' },
    { name: '白夜', href: '/midnight-sun' },
    { name: 'プライベート・コンシェルジュ', href: '/concierge' },
  ],
}

const fi: SiteCopy = {
  nav: {
    villas: 'Huvilat',
    suites: 'Sviitit',
    destinations: 'Kohteet',
    experiences: 'Elämykset',
    midnightSun: 'Yötön yö',
    about: 'Tietoa',
    privateInquiry: 'Yksityinen tiedustelu',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
  },
  cta: {
    browseCollection: 'Selaa kokoelmaa',
    beginPrivateInquiry: 'Aloita yksityinen tiedustelu',
    fullCollection: 'Koko kokoelma',
    readProfile: 'Lue profiili',
    inquire: 'Tiedustele',
    viewRates: 'Katso hinnat',
    viewOptions: 'Katso vaihtoehdot',
    viewPublicRates: 'Katso julkiset hinnat',
    orSendPrivateInquiry: 'Tai lähetä yksityinen tiedustelu',
    seeTheCollection: 'Katso kokoelma',
    inquireAboutJune: 'Tiedustele kesäkuun päiviä',
    inquireAboutJuneShort: 'Tiedustele kesäkuulle',
    seeSummerCollection: 'Katso kesän kokoelma',
    fullVillaCollection: 'Koko huvilakokoelma',
    sendPrivateInquiry: 'Lähetä yksityinen tiedustelu',
    sendAnother: 'Lähetä uusi tiedustelu',
    home: 'Etusivu',
    theCollection: 'Kokoelma',
    sending: 'Lähetetään…',
    subscribe: 'Tilaa',
    subscribed: 'Tilattu',
  },
  badges: {
    onRequest: 'Pyynnöstä',
    fromPerNight: 'Alkaen / yö',
    fromPerPerson: 'Alkaen / henkilö',
    fromPerGroup: 'Alkaen / ryhmä',
    rate: 'Hinta',
    bedroom: 'makuuhuone',
    bedrooms: 'makuuhuonetta',
    sleeps: 'Nukkuu',
    arrival: 'Saapuminen',
    aurora: 'Revontulet',
    highlights: 'Kohokohdat',
    villas: (n) => (n === 1 ? 'Yksi huvila tässä kohteessa.' : `${n} huvilaa tässä kohteessa.`),
    villasIn: (name) => `Huvilat · ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Yksi huvila tässä kohteessa.' : `${n} huvilaa tässä kohteessa.`),
    alsoInCollection: 'Myös kokoelmassa',
    threeOthers: 'Kolme muuta harkitsemisen arvoista huvilaa.',
    signatureDetails: 'Kohteen tunnusmerkit',
    sixVerifyOnArrival: 'Kuusi yksityiskohtaa, jotka voit todentaa paikan päällä.',
    theDestination: 'Kohde',
    fullCollectionShort: 'Koko kokoelma',
  },
  tier: {
    signature: 'Signature',
    private: 'Private Collection',
    reserve: 'Reserve · Vain concierge-kanavan kautta',
  },
  category: {
    'glass-roof': 'Lasikattohuvila',
    'log-estate': 'Yksityinen hirsihuvila',
    'designer-suite': 'Designer-sviitti',
    'alpine-chalet': 'Tunturichalet',
    'lakeside-retreat': 'Rantahuvila',
  },
  concierge: {
    eyebrow: 'Yksityinen concierge',
    defaultTitle: 'Rauhallisempi tapa suunnitella Lapin-reissu.',
    defaultBody: 'Lähetä meille yksi viesti: toiveet, päivämäärät ja montako teitä on. Saat takaisin sinulle kootun lyhytlistan yhden työpäivän sisällä. Ei julkista profiilia, ei jaettuja kalentereita, ei tunnusta jota luoda.',
    inquireBtn: 'Aloita yksityinen tiedustelu',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Anonyymi matkasuunnittelu',
      reply: 'Vastaus yhden työpäivän kuluessa',
      rates: 'Suorat hinnat pyynnöstä',
    },
  },
  midnightSunBand: {
    eyebrow: '6.6.–7.7.',
    h2: 'Samat huvilat, 32 päivää katkeamatonta valoa.',
    body: 'Samat talot, täysin eri vuodenaika. Lasikatto, joka kehysti revontulia, pitää nyt aurinkoa joka ei laske, järvi on sula ja metsä täyttyy lakoista. Kysyntää on noin puolet talvesta, ja tämä on vuoden ainoa jakso, jolloin yksityiset kokit, helikopterikuljetukset ja reserve-huvilat avaavat hiljaa loppukalenterinsa.',
    primary: 'Katso kesän kokoelma',
    secondary: 'Tiedustele kesäkuun päiviä',
  },
  newsletter: {
    eyebrow: '#LaplandVibes-uutiskirje',
    h2: 'Hiljainen viesti, kun huviloihin vapautuu päiviä tai joku yksityinen tulee saataville.',
    lede: 'Suorat hinnat, concierge-viime hetken paikat ja revontuliennuste viikkoa ennen uutta kuuta. Ei roskapostia. Kirjoitamme tämän Suomesta ja lähetämme vain, kun meillä on sinulle oikeasti jotain.',
    emailPlaceholder: 'sinä@sähköposti.fi',
    footnote: 'Peru tilaus yhdellä klikkauksella.',
    welcome: 'Tervetuloa mukaan. Ensimmäinen viesti saapuu viikon sisään.',
    already: 'Olet jo listalla. Nähdään seuraavassa viestissä.',
    invalidEmail: 'Sähköpostiosoite näyttää virheelliseltä.',
    networkError: 'Verkkovirhe. Yritä uudelleen.',
    genericError: 'Jotain meni vikaan. Yritä hetken kuluttua uudelleen.',
  },
  affiliateDisclosure: {
    compact: 'Kumppanuuslinkki. Saamme pienen provision ilman lisäkustannuksia sinulle, kun varaat.',
    full: 'Tämä sivu sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandLuxuryVillas saa pienen provision ilman lisäkustannuksia sinulle.',
  },
  hero: {
    home: {
      eyebrow: 'Yksityinen kokoelma',
      title: 'Suomen Lappi, hiljaisesti markkinan huipulla.',
      lede: 'Pieni, käsin valittu kokoelma yksityisiä luksushuviloita ympäri Lappia. Concierge hoitaa, hinnat pyynnöstä.',
      primary: 'Selaa kokoelmaa',
      secondary: 'Aloita yksityinen tiedustelu',
    },
    villas: {
      eyebrow: 'Kokoelma',
      title: 'Yhdeksän huvilaa. Viisi kohdetta. Yksi yksityinen tiedustelu.',
      lede: 'Jokainen alla oleva kohde on käyty läpi kohteen omien julkaistujen tietojen ja tuoreiden vieraspalautteiden pohjalta. Suodata sen mukaan, millaista taloa mietit, tai lähetä yksityinen tiedustelu, niin kokoamme lyhytlistan päivämääriesi ympärille.',
    },
    suites: {
      eyebrow: 'Designer-sviitit',
      title: 'Kun et tarvitse koko huvilaa, vain lasikaton.',
      lede: 'Lyhyt lista yhden makuuhuoneen sviittejä ja revontulimökkejä, joissa itse rakennus on se syy tulla. Tilaa kahdelle, sama panoraamakatto.',
    },
    destinations: {
      eyebrow: 'Kohteet',
      title: 'Viisi paikkaa, jokaisella selkeä syy olla siellä.',
      lede: 'Lappi ei ole yksi ja sama paikka kaikkialla. Se, miten usein revontulet näkyvät, miten sinne käytännössä pääsee ja kuinka monesta huvilasta voi valita, muuttuu selvästi joka 50 kilometrillä napapiiriltä pohjoiseen.',
    },
    experiences: {
      eyebrow: 'Räätälöidyt elämykset',
      title: 'Päivä, ennen yötä lasin alla.',
      lede: 'Kahdeksan yksityistä elämystä, jotka sovitamme huviloiden rinnalle. Jokainen varataan sään, päivänvalon ja huvilan sisäänkirjautumisen mukaan, jotta ajoitus oikeasti toimii.',
    },
    midnightSun: {
      eyebrow: '6.6.–7.7.',
      title: '32 päivän jakso, jolloin aurinko ei laske.',
      lede: 'Samat huvilat yöttömän yön aikaan. Vähemmän vieraita, pehmeä loputon valo.',
      primary: 'Tiedustele kesäkuun päiviä',
      secondary: 'Katso kokoelma',
    },
    concierge: {
      eyebrow: 'Yksityinen concierge',
      title: 'Yksi yksityinen viesti, yksi sinulle koottu lyhytlista.',
      lede: 'Kerro päivämäärät, montako teitä on ja millaista matkaa mietit. Vastaus tulee yhden työpäivän sisällä, ja kun se sopii, mukana ovat myös reserve-huvilat, jotka eivät koskaan näy julkisesti.',
    },
    about: {
      eyebrow: 'Tietoa',
      title: 'Lyhyt lista, joka pidetään lyhyenä tarkoituksella.',
      lede: 'Yksityinen kokoelma Lapin hienoimpia luksushuviloita ja sviittejä. Anonyymi concierge, suorat hinnat siellä missä niitä on, ei välittäjää välissä.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Näin toimimme',
      h2: 'Varausalustan vastakohta.',
      items: [
        { title: 'Lyhyt lista, ei hakemisto.', body: 'Yhdeksän huvilaa ja sviittiä niissä paikoissa, jotka oikeasti ovat matkan arvoisia. Käännytämme kohteita useammin kuin lisäämme niitä, joten jokainen tämän listan huvila on sellainen, jonka tarkka matkailija voisi varata epäröimättä.' },
        { title: 'Anonyymi matkasuunnittelu.', body: 'Yksi yksityinen postilaatikko. Ei julkista profiilia, ei kenenkään muun kanssa jaettuja kalentereita. Kerro päivämäärät, montako teitä on ja mitä haette, niin sinulle koottu lyhytlista tulee yhden työpäivän sisällä.' },
        { title: 'Suorat hinnat siellä missä niitä on.', body: 'Kun huvilalla on julkinen listaus, linkitämme suoraan varmistettuun hintaan. Yksityisesti pidetyt, mukaan lukien reserve-huvilat joita et löydä listattuna mistään, hinnoittelemme suoraan. Vastauksessa kerrotaan kumpi on kyseessä.' },
      ],
    },
    signature: {
      eyebrow: 'Signature-huvilat',
      h2: 'Neljä Lapin kokoelman ankkuria.',
      lede: 'Ne neljä, joita suosittelemme useimmin. Jokainen yksityiskohta on tarkistettu kohteen omista julkaistuista tiedoista ja tuoreista vieraspalautteista, ei napattu esitteestä.',
    },
    destinations: {
      eyebrow: 'Kohteet',
      h2: 'Viisi paikkaa, jokaisella selkeä syy.',
    },
  },
  villasPage: {
    filters: { all: 'Kaikki', glassRoof: 'Lasikatto', logEstate: 'Hirsihuvila', designerSuite: 'Designer-sviitti', alpineChalet: 'Tunturichalet', lakeside: 'Rantakohde' },
    noVillas: 'Tässä kategoriassa ei ole vielä huviloita.',
    conciergeTitle: 'Etkö löydä oikeaa?',
    conciergeBody: 'Tämä on se mitä on nyt julkaistu. Pidämme lisää huviloita yksityisesti, mukaan lukien reserve-kohteet joilla ei ole julkista listausta lainkaan, ja hinnoittelemme ne suoraan kun tiedustelet.',
  },
  suitesPage: {
    intro: {
      p1Pre: '"Sviitti" tarkoittaa Lapissa kahta varsin eri asiaa, ja molemmat on hyvä tietää. Ensimmäinen on ',
      designerSuite: 'designer-sviitti',
      p1Mid: ', jossa johtava suomalainen studio (Studio Puisto, ALA, Avanto) on rakentanut yksittäisen makuuhuoneen yksittäisen näkymän ympärille. Toinen on ',
      glassRoof: 'lasikattomökki',
      p1Post: ', jossa katto on otsikkoyksityiskohta. Molemmat on listattu alla.',
    },
    conciergeTitle: 'Kahden sviitin varaus tai yksityinen kerros?',
    conciergeBody: 'Useat näistä kohteista vapauttavat monisviittisen kerroksen yksinomaiseen käyttöön rauhallisempina viikkoina. Kerro päivämääräsi ja vieraslukumääräsi.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Kohde 0${i + 1}`,
    readTheProfile: (name) => `Lue ${name}n profiili`,
  },
  destinationPage: {
    backLink: 'Kohteet',
    eyebrow: 'Kohde · Suomen Lappi',
    arrival: 'Saapuminen',
    aurora: 'Revontulet',
    highlights: 'Kohokohdat',
    villasHere: (n) => (n === 1 ? 'Yksi huvila tässä kohteessa.' : `${n} huvilaa tässä kohteessa.`),
    villasHereH2: (n) => (n === 1 ? 'Yksi huvila tässä kohteessa.' : `${n} huvilaa tässä kohteessa.`),
    fullCollection: 'Koko kokoelma',
    conciergeTitle: (name) => `Suunnittele yksityinen ${name}-matka.`,
    conciergeBody: 'Lähetä päivämäärät, vieraat ja toiveet (yksityinen kokki, helikopterisaapuminen, eksklusiivinen käyttö). Saat lyhytlistan yhden työpäivän kuluessa.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Revontulet', intro: 'Revontulet ovat itsessään ilmaisia. Maksat pääsystä: oikeasta kyydistä, oikeasta oppaasta ja oikeasta yöstä kirkkaan taivaan alla.' },
      wilderness: { title: 'Erämaa', intro: 'Yksityiset versiot niistä, joiden takia kaikki Lappiin tulevat: husky, moottorikelkka ja poro, ilman jaettua bussia ja samaa lenkkiä kuin kaikki muutkin.' },
      culinary: { title: 'Ruoka', intro: 'Oikea kokki yhdestä Lapin vakavasti otettavasta keittiöstä, sinun huvilallasi, illan ajan. Tai talon tasting-menu silloin kun keittiö on se syy tulla.' },
      arrival: { title: 'Saapuminen', intro: 'Yksityinen suihkukone, helikopterikuljetus, arktinen ajoneuvokalusto. Varataan slot-ikkunan, päivänvalon ja huvilan sisäänkirjautumisen mukaan.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Päivää aurinko ei laske' },
      { value: '24h', label: 'Päivänvaloa huipulla, 21.6.' },
      { value: '+18°C', label: 'Päivälämpötila kesäkuun lopulla' },
      { value: '50%', label: 'Pienempi kysyntä kuin revontulikaudella' },
    ],
    fourReasons: 'Neljä syytä',
    h2: 'Lappi kesällä on erillinen paikka.',
    reasons: [
      { title: 'Arkkitehtuuri muuttuu luonteeltaan.', body: 'Revontulia varten rakennetut lasikatot pitävät nyt katkeamatonta aurinkoa. Kattoikkuna sängyn yllä, aurinko järvellä, eikä syytä vetää verhoa, koska ei ole yötä jolta piiloutua.' },
      { title: 'Erämaasta tulee saavutettavaa.', body: 'Järvet sulavat, boreaalinen metsä avautuu, kanoottireitit ilmestyvät. Sama huvila johon pääsit moottorikelkalla helmikuussa on nyt viiden minuutin venematkan päässä laiturilta.' },
      { title: 'Reserve-huvilat avautuvat.', body: 'Yksityiset järvenrantaiset hirsihuvilat ja arkkitehtuurichaletit vapauttavat loppukalenterinsa. 32 päivän ikkuna on vuoden ainoa aika, jolloin yksityiset kokit ja helikopterikuljetukset hinnoittelevat shoulder-hinnoin.' },
      { title: 'Ei jonoja, ei naapureita.', body: 'Lapissa on kesällä murto-osa talven väkimäärästä. Polku metsän halki ja tunturin näköalapaikka ovat käytännössä omasi.' },
    ],
    summerCollection: {
      eyebrow: 'Kesän kokoelma',
      h2: 'Neljä huvilan luonnetta kesäisessä valossa.',
      lede: 'Samat talotyypit kuin talvikokoelmassa (lasikattomökit, järvenrantaiset hirsihuvilat, tunturichaletit, metsähuvilat), kuvattuna kesäkuun lopun yöttömän yön valossa, jotta näet tarinan toisenkin puoliskon.',
      cards: [
        { title: 'Lasikattomökki vihreässä', copy: 'Revontulten arkkitehtuuri kello 23 kultaisessa valossa, ympärillä rehevä metsä lumen sijaan.' },
        { title: 'Järvenrantainen hirsihuvila', copy: 'Yksityinen poukama Inarinjärvellä, taas sulana: kanootti laiturilla ja savua nousemassa puulämmitteisestä saunasta.' },
        { title: 'Designer-chalet tunturilla', copy: 'Tupasvilla ja niittykukat laskettelurinteen tilalla, saman panoraamalasin takana.' },
        { title: 'Moderni metsähuvila', copy: 'Konsolimainen puurakennus syvällä vihreässä boreaalisessa männikössä, kultainen yöttömän yön lämpö julkisivulla.' },
      ],
    },
    planning: {
      h2: 'Huomio yöttömän yön matkan suunnittelusta.',
      p1: '32 päivän jakso on lyhyt, ja huvilat ovat yksittäisten omistajien hallinnassa, joten kalenteri täyttyy epätasaisesti eikä siististi. Pidämme pienen allokaation reserve-kohteissa joka kesä.',
      p2: 'Tiettyä kesäkuuta kannattaa tiedustella saman vuoden tammi–maaliskuussa. Myöhemminkin kannattaa laittaa viestiä, koska päiviä vapautuu, mutta listan kärki menee yleensä ensin.',
      quoting: 'Tarjoamme parhaillaan kesän 2026 ja 2027 hintoja',
    },
    conciergeTitle: 'Tiedustele yöttömän yön matkaa.',
    conciergeBody: 'Kerro päivämäärät, montako teitä on ja toiveet. Vastaus tulee yhden työpäivän sisällä, ja siinä näkyy mitä kesän kokoelmasta on vapaana, myös reserve-huvilat joita ei ole julkisesti listattu.',
  },
  conciergePage: {
    eyebrow: 'Tiedustelulomake',
    h2: 'Kerro mitä mietit.',
    intro: 'Viisi lyhyttä kenttää. Mitä tarkemmin kerrot mitä haluat ja mitä tarvitset, sitä hyödyllisempi lyhytlista on. Nimi ja sähköposti pysyvät vapaaehtoisina, ja vastaus menee siihen osoitteeseen, josta kirjoitat.',
    fields: {
      headcount: 'Vieraita',
      tripIntent: 'Matkan tarkoitus',
      budget: 'Suuntaa-antava yöhinta',
      datesLabel: 'Päivämäärät (tai ikkuna)',
      datesHint: 'esim. \'14.–21.2.\' tai \'maaliskuun alkupuoli, 5 yötä\'',
      datesPlaceholder: 'Vapaaehtoinen',
      messageLabel: 'Mitä erityistä',
      messageHint: 'Yksityinen kokki, helikopterisaapuminen, koko paikka omaan käyttöön, esteettömyys, ruokavalio, painotus valokuvaukseen. Ihan mikä tahansa, joka muokkaa lyhytlistaa.',
      nameLabel: 'Nimi (vapaaehtoinen)',
      namePlaceholder: 'Anonyymi jos tyhjä',
      emailLabel: 'Vastausosoite',
      emailHint: 'Jos tyhjä, vastaus menee omaan lähtöosoitteeseesi.',
      emailPlaceholder: 'vapaaehtoinen',
    },
    options: {
      headcount: ['1–2 vierasta', '3–4 vierasta', '5–6 vierasta', '7–10 vierasta', 'Suurempi ryhmä'],
      intent: ['Revontulikausi, ensimmäinen kerta', 'Revontulikausi, on käyty ennenkin', 'Yötön yö (kesä–heinä)', 'Joulu / uusi vuosi', 'Perheryhmä', 'Yksityinen juhla', 'Häämatka / retriitti kahdelle', 'Jokin muu (kerro alla)'],
      budget: ['Alle 1 000 € / yö', '1 000 – 2 500 € / yö', '2 500 – 5 000 € / yö', 'Yli 5 000 € / yö', 'Reserve-kohde, koko paikka omaan käyttöön', 'En halua kertoa'],
    },
    submit: 'Lähetä yksityinen tiedustelu',
    sending: 'Lähetetään…',
    successH2: 'Tiedustelu vastaanotettu.',
    successBody: 'Vastaus saapuu yhden työpäivän kuluessa. Voit myös ottaa yhteyttä suoraan osoitteeseen',
    successFollowUp: '.',
    errorFallback: 'Voit myös laittaa meille suoraan sähköpostia osoitteeseen',
    fallbackNotice: 'Avataan sähköpostiohjelmasi, jotta voit lähettää tiedustelun suoraan.',
    fineprint: 'Lähetykset välitetään salatun yhteyden yli yhteen yksityiseen postilaatikkoon Suomessa. Ei kolmannen osapuolen CRM:ää, ei mainosattribuutiota viestissä.',
    trustStrip: [
      { title: 'Anonyymi', body: 'Nimi ja sähköposti ovat vapaaehtoisia. Tiedustelu lähetetään salatun lomakkeen kautta yhteen postilaatikkoon.' },
      { title: 'private@laplandvibes.com', body: 'Seurataan ma–pe. Vastaus yhden työpäivän kuluessa, kirjoitettu Suomesta käsin.' },
      { title: 'Hienovarainen oletuksena', body: 'Ei kolmannen osapuolen CRM:ää, ei jaettuja kalentereita. Lyhytlista rakennetaan jokaiselle tiedustelulle yksityisesti.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Miksi tämä kokoelma on olemassa',
        paragraphs: [
          'Lapin luksusmajoitus on pieni maailma. Samat muutamat huvilat ja parikymmentä sviittiä toistuvat jokaisella varausalustalla, usein samoilla kuvapankkikuvilla ja samalla epämääräisellä hintahaarukalla. Kun ne ilmeisimmät reissut on jo tehty, kysymykset tarkentuvat: minkä huvilan itse oikeasti varaisit, mihin majoitat yhdeksänhenkisen perheen, mikä on se paikka josta kukaan ei kirjoita?',
          'Tämä sivusto on lyhyt, harkittu vastaus noihin kysymyksiin. Käsin valittu lista huviloista ja sviiteistä, jotka mielestämme ovat aidosti matkan arvoisia.',
        ],
      },
      {
        title: 'Mitä tämä sivusto ei tee',
        paragraphs: [
          'Emme operoi huviloita emmekä ole varaustoimisto. Täällä ei ole hakemistoa, eikä sellaista ole tarkoituskaan rakentaa. Pidämme kokoelman tarkoituksella pienenä.',
          'Olemme riippumattomia. Kun kohteen voi varata verkossa, linkitämme sen julkiseen ilmoitukseen, esimerkiksi Hotels.comin kautta; nämä linkit voivat tuottaa meille pienen palkkion ilman lisäkustannuksia sinulle, eivätkä ne koskaan vaikuta siihen, mitä huviloita suosittelemme. Kohteet eivät voi maksaa päästäkseen esille.',
        ],
      },
      {
        title: 'Kuka pyörittää sivustoa',
        paragraphs: [
          {
            type: 'link',
            pre: 'Pieni, Suomesta käsin toimiva tiimi, joka pyörittää myös ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ' -ekosysteemiä, toimituksellista keskusta ja Lapin matkasivustojen verkostoa. Tämä on se osa työstä, joka keskittyy Lapin omaleimaisimpiin huviloihin ja sviitteihin.',
          },
          'Tiedustelusi päätyy yhteen postilaatikkoon ja siihen vastaa ihminen, ei chatbotti eikä ulkoistettu puhelinpalvelu. Jos jokin ei sovi tähän kokoelmaan, ryhmä on liian iso tai kohde sellainen jota emme kata, sanomme sen rehellisesti ja ohjaamme sinut mahdollisuuksien mukaan parempaan suuntaan.',
        ],
      },
      {
        title: 'Kaksi matkatyyppiä, joita emme ota',
        paragraphs: [
          'Yli kolmenkymmenen hengen häät ja koko kiinteistön vuokraukset brändi-tapahtumiin ovat sen ulkopuolella, mihin nämä kohteet on rakennettu. Ohjaamme mielellämme operaattoreille, jotka hoitavat tällaiset tilaisuudet kunnolla.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'Kokoelma',
    bedroom: 'makuuhuone',
    bedrooms: 'makuuhuonetta',
    sleeps: 'Nukkuu',
    fromPerNight: 'Alkaen / yö',
    nightlyHint: 'Suuntaa-antava matalan sesongin hinta. Todellinen yöhinta riippuu päivämääristä, oleskelun pituudesta ja sisällytetyistä palveluista.',
    rate: 'Hinta',
    onRequest: 'Pyynnöstä',
    reserveHint: 'Reserve-kohde. Hinnoitellaan yksityisesti tiedustelun perusteella, ei koskaan julkisesti.',
    beginInquiry: 'Aloita yksityinen tiedustelu',
    viewRates: 'Katso julkiset hinnat',
    orSendInquiry: 'Tai lähetä yksityinen tiedustelu',
    signatureEyebrow: 'Kohteen tunnusmerkit',
    signatureH2: 'Kuusi yksityiskohtaa, jotka voit todentaa paikan päällä.',
    destinationEyebrow: 'Kohde',
    readProfile: (name) => `Lue ${name}n profiili →`,
    conciergeTitle: (dest) => `Aloita ${dest}-tiedustelu.`,
    conciergeBody: 'Lähetä päivämäärät, vieraat ja toiveet. Vastaus saapuu yhden työpäivän kuluessa saatavuudella, todellisella yöhinnalla ja mahdollisilla reserve-huviloilla joita kannattaa harkita rinnalle.',
    alsoEyebrow: 'Myös kokoelmassa',
    alsoH2: 'Kolme muuta harkitsemisen arvoista huvilaa.',
  },
  notFound: {
    eyebrow: 'Virhe',
    body: 'Tämä sivu ei ole osa kokoelmaa. Huvilat, sviitit ja kohteet on listattu alla.',
    home: 'Etusivu',
    collection: 'Kokoelma',
  },
  contactPage: {
    seoTitle: 'Yhteystiedot · LaplandLuxuryVillas',
    seoDescription: 'Yksi yksityinen sähköposti: private@laplandvibes.com. Toiminnasta vastaa Lapeso Oy Suomen Lapista. Media-, kumppanuus- ja suorakauppayhteydet alla.',
    eyebrow: 'Yhteystiedot',
    h1: 'Yksi osoite, yksi toimija.',
    cards: {
      private: {
        eyebrow: 'Yksityiset tiedustelut',
        body: 'Anonyymi matkasuunnittelu, huvilakoosteet ja suorahintakysymykset. Vastaamme yhden arkipäivän kuluessa.',
      },
      press: {
        eyebrow: 'Media ja kumppanuudet',
        body: 'Toimitukselliset pyynnöt, kohteiden kumppanuusehdotukset ja toimittajien yhteydenotot.',
      },
      deals: {
        eyebrow: 'Suorakaupat (kohteet)',
        body: 'Huvilanomistajille ja -operaattoreille, jotka haluavat kokoelmaan mukaan. Hylkäämme valtaosan ehdotuksista, joten lue ensin Tietoa-sivu.',
      },
      general: {
        eyebrow: 'Yleiset ja toimitukselliset',
        body: 'Kaikki muu. Vastaus kestää kauemmin kuin private@-osoitteessa; matkasuunnitteluun käytä yllä olevaa concierge-osoitetta.',
      },
    },
    privateCta: 'Lähetä yksityinen tiedustelu',
    operatorEyebrow: 'Toimija',
    location: 'Suomen Lappi. Suomeen rekisteröity yritys.',
    aboutPre: 'Katso laajempi LaplandVibes-ekosysteemin tausta ',
    aboutLabel: 'Tietoa',
    aboutPost: '-sivulta.',
  },
  footerNote:
    'Yksityinen kokoelma, koottu Suomen Lapissa, viimeksi katselmoitu toukokuussa 2026. Jotkin varaukset tuottavat kumppanuusprovision, joka ei koskaan vaikuta siihen mitä huviloita suosittelemme. Reserve- ja concierge-only-kohteet eivät maksa mitään.',
  footerPillars: [
    { name: 'Kokoelma', href: '/villas' },
    { name: 'Designer-sviitit', href: '/suites' },
    { name: 'Kohteet', href: '/destinations' },
    { name: 'Elämykset', href: '/experiences' },
    { name: 'Yötön yö', href: '/midnight-sun' },
    { name: 'Yksityinen concierge', href: '/concierge' },
  ],
}

const de: SiteCopy = {
  nav: {
    villas: 'Villen',
    suites: 'Suiten',
    destinations: 'Reiseziele',
    experiences: 'Erlebnisse',
    midnightSun: 'Mitternachtssonne',
    about: 'Über uns',
    privateInquiry: 'Private Anfrage',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  cta: {
    browseCollection: 'Kollektion entdecken',
    beginPrivateInquiry: 'Private Anfrage starten',
    fullCollection: 'Gesamte Kollektion',
    readProfile: 'Profil lesen',
    inquire: 'Anfragen',
    viewRates: 'Preise ansehen',
    viewOptions: 'Optionen ansehen',
    viewPublicRates: 'Öffentliche Preise ansehen',
    orSendPrivateInquiry: 'Oder senden Sie eine private Anfrage',
    seeTheCollection: 'Kollektion ansehen',
    inquireAboutJune: 'Juni-Termine anfragen',
    inquireAboutJuneShort: 'Für Juni anfragen',
    seeSummerCollection: 'Sommerkollektion ansehen',
    fullVillaCollection: 'Vollständige Villenkollektion',
    sendPrivateInquiry: 'Private Anfrage senden',
    sendAnother: 'Weitere Anfrage senden',
    home: 'Startseite',
    theCollection: 'Die Kollektion',
    sending: 'Wird gesendet…',
    subscribe: 'Abonnieren',
    subscribed: 'Abonniert',
  },
  badges: {
    onRequest: 'Auf Anfrage',
    fromPerNight: 'Ab / Nacht',
    fromPerPerson: 'Ab / Person',
    fromPerGroup: 'Ab / Gruppe',
    rate: 'Preis',
    bedroom: 'Schlafzimmer',
    bedrooms: 'Schlafzimmer',
    sleeps: 'Schläft',
    arrival: 'Anreise',
    aurora: 'Polarlichter',
    highlights: 'Höhepunkte',
    villas: (n) => (n === 1 ? 'Eine Villa hier verankert.' : `${n} Villen hier verankert.`),
    villasIn: (name) => `Villen in ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Eine Villa hier verankert.' : `${n} Villen hier verankert.`),
    alsoInCollection: 'Ebenfalls in der Kollektion',
    threeOthers: 'Drei weitere Villen, die einen Blick wert sind.',
    signatureDetails: 'Signature-Details',
    sixVerifyOnArrival: 'Sechs Details, die Sie bei der Ankunft prüfen können.',
    theDestination: 'Das Reiseziel',
    fullCollectionShort: 'Gesamte Kollektion',
  },
  tier: {
    signature: 'Signature',
    private: 'Private Collection',
    reserve: 'Reserve · Nur Concierge',
  },
  category: {
    'glass-roof': 'Glasiglu-Villa',
    'log-estate': 'Privates Blockhausgut',
    'designer-suite': 'Designer-Suite',
    'alpine-chalet': 'Alpenchalet',
    'lakeside-retreat': 'Seerefugium',
  },
  concierge: {
    eyebrow: 'Der private Concierge',
    defaultTitle: 'Eine ruhigere Art, eine Lappland-Reise zu planen.',
    defaultBody: 'Senden Sie uns eine einzige Nachricht, Wünsche, Termine, Gästezahl, und unser Concierge antwortet mit einer privaten Auswahl innerhalb eines Werktags. Kein öffentliches Profil, keine geteilten Kalender.',
    inquireBtn: 'Private Anfrage starten',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Anonyme Reiseplanung',
      reply: 'Antwort innerhalb eines Werktags',
      rates: 'Direktpreise auf Anfrage',
    },
  },
  midnightSunBand: {
    eyebrow: '6. Juni – 7. Juli',
    h2: 'Die Villen, in 32 Tagen ununterbrochenen Lichts.',
    body: 'Dieselbe Architektur, andere Jahreszeit. Das Glasdach wird zum Oberlicht für eine Sonne, die nicht untergeht, der See taut auf, der Wald füllt sich mit Moltebeeren. Die Hälfte der Winternachfrage, und das einzige Fenster im Jahr, in dem private Köche, Hubschraubercharter und die Reserve-Villen den Rest ihres Kalenders öffnen.',
    primary: 'Sommerkollektion ansehen',
    secondary: 'Juni-Termine anfragen',
  },
  newsletter: {
    eyebrow: 'Der #LaplandVibes-Newsletter',
    h2: 'Eine ruhige Nachricht, wenn Villen neue Termine öffnen und wir von einer privaten Freigabe erfahren.',
    lede: 'Direktpreise. Last-Minute-Concierge-Öffnungen. Polarlicht-Fenster-Prognosen in der Woche vor jedem Neumond. Kein Newsletter-Spam, geschrieben in Finnland, nur versendet, wenn es etwas Konkretes zu berichten gibt.',
    emailPlaceholder: 'sie@e-mail.de',
    footnote: 'Abmeldung mit einem Klick.',
    welcome: 'Willkommen an Bord. Die erste Nachricht erreicht Sie binnen einer Woche.',
    already: 'Sie sind bereits auf der Liste, bis zum nächsten Versand.',
    invalidEmail: 'Diese E-Mail-Adresse erscheint ungültig.',
    networkError: 'Netzwerkfehler. Bitte erneut versuchen.',
    genericError: 'Etwas ist schiefgelaufen. Bitte in einem Moment erneut versuchen.',
  },
  affiliateDisclosure: {
    compact: 'Partner-Links, bei einer Buchung erhalten wir eine kleine Provision ohne Mehrkosten für Sie.',
    full: 'Diese Seite enthält Partner-Links. Wenn Sie über diese Links buchen, erhält LaplandLuxuryVillas möglicherweise eine Provision ohne Mehrkosten für Sie.',
  },
  hero: {
    home: {
      eyebrow: 'Die private Kollektion',
      title: 'Finnisch-Lappland, leise, an der Spitze des Marktes.',
      lede: 'Eine kleine, handverlesene Kollektion privater Luxusvillen in ganz Lappland, Concierge-Service, Preise auf Anfrage.',
      primary: 'Kollektion entdecken',
      secondary: 'Private Anfrage starten',
    },
    villas: {
      eyebrow: 'Die Kollektion',
      title: 'Neun Villen. Fünf Reiseziele. Eine private Anfrage.',
      lede: 'Jedes der unten aufgeführten Anwesen ist anhand der veröffentlichten Angaben des Betreibers und aktueller Gästebewertungen geprüft. Filtern Sie nach Bauart, oder senden Sie eine private Anfrage und Sie erhalten eine Auswahl für Ihre Termine.',
    },
    suites: {
      eyebrow: 'Designer-Suiten',
      title: 'Wenn Sie keine Villa brauchen, aber das Glasdach.',
      lede: 'Eine kurze Liste von Ein-Schlafzimmer-Suiten und Polarlicht-Hütten, bei denen die Architektur selbst das Erlebnis ist. Geringere Gästezahl, dieselbe Panoramadecke.',
    },
    destinations: {
      eyebrow: 'Reiseziele',
      title: 'Fünf Orte, jeder mit einem klaren Grund, dort zu sein.',
      lede: 'Lappland ist nicht austauschbar. Polarlichtfrequenz, Anreiselogistik und Unterkunftsdichte ändern sich alle 50 km nördlich des Polarkreises bedeutend.',
    },
    experiences: {
      eyebrow: 'Maßgeschneiderte Erlebnisse',
      title: 'Der Tag, vor der Nacht unter dem Glas.',
      lede: 'Acht private Erlebnisse, die wir mit den Villen kombinieren, jedes gebucht im Hinblick auf Wetterfenster, Tageslicht und Villa-Check-in-Zeit.',
    },
    midnightSun: {
      eyebrow: '6. Juni – 7. Juli',
      title: 'Das 32-Tage-Fenster, in dem die Sonne nie untergeht.',
      lede: 'Dieselben Villen, in der Zeit der Mitternachtssonne, weniger Gäste, sanftes endloses Licht.',
      primary: 'Juni-Termine anfragen',
      secondary: 'Kollektion ansehen',
    },
    concierge: {
      eyebrow: 'Privater Concierge',
      title: 'Eine private Nachricht, eine kuratierte Auswahl.',
      lede: 'Senden Sie uns Termine, Gästezahl und die Art der Reise, die Sie sich vorstellen. Wir antworten innerhalb eines Werktags, auch, wo passend, mit den Reserve-Villen, die nie öffentlich auftauchen.',
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Eine kurze Liste, absichtlich kurz gehalten.',
      lede: 'Eine private Kollektion der feinsten Villen und Suiten Lapplands, anonymer Concierge, Direktpreise wo verfügbar, keine Plattform dazwischen.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'So arbeiten wir',
      h2: 'Das Gegenteil einer Buchungsplattform.',
      items: [
        { title: 'Eine kurze Liste, kein Verzeichnis.', body: 'Neun Villen und Suiten in den Reisezielen, die die Reise wirklich rechtfertigen. Anwesen werden öfter abgelehnt als hinzugefügt, jeder Eintrag auf dieser Seite ist einer, den ein sorgfältiger Reisender ohne Zögern buchen könnte.' },
        { title: 'Anonyme Reiseplanung.', body: 'Ein einziger privater Posteingang, kein öffentliches Profil, keine geteilten Kalender mit Dritten. Senden Sie Termine, Gästezahl, Wünsche, und erhalten Sie eine kuratierte Auswahl innerhalb eines Werktags.' },
        { title: 'Direktpreise, wo möglich.', body: 'Öffentliche Listings verweisen auf verifizierte Preise. Privat geführte Anwesen, einschließlich Reserve-Villen ohne öffentliche Verfügbarkeit, werden direkt bepreist. Die Antwort sagt Ihnen, welches welches ist.' },
      ],
    },
    signature: {
      eyebrow: 'Signature-Villen',
      h2: 'Vier Anker der Lappland-Kollektion.',
      lede: 'Die am häufigsten empfohlenen Anwesen. Jedes Detail unten ist anhand der Betreiberangaben und aktueller Gästebewertungen verifiziert, nicht aus einer Broschüre übernommen.',
    },
    destinations: {
      eyebrow: 'Reiseziele',
      h2: 'Fünf Orte, jeder mit einem klaren Grund.',
    },
  },
  villasPage: {
    filters: { all: 'Alle', glassRoof: 'Glasdach', logEstate: 'Blockhaus-Gut', designerSuite: 'Designer-Suite', alpineChalet: 'Alpenchalet', lakeside: 'Am See' },
    noVillas: 'In dieser Kategorie sind noch keine Villen.',
    conciergeTitle: 'Nicht das Richtige gefunden?',
    conciergeBody: 'Die obige Kollektion ist das, was derzeit veröffentlicht ist. Weitere Villen werden privat geführt, einschließlich Reserve-Anwesen ohne öffentliches Listing, und werden direkt auf Anfrage bepreist.',
  },
  suitesPage: {
    intro: {
      p1Pre: '„Suite" in Lappland umfasst zwei deutlich verschiedene architektonische Ansätze, beide sind kennenswert. Der erste ist die ',
      designerSuite: 'Designer-Suite',
      p1Mid: ', bei der ein führendes finnisches Studio (Studio Puisto, ALA, Avanto) ein einzelnes Schlafzimmer um eine einzelne Aussicht herum gebaut hat. Der zweite ist die ',
      glassRoof: 'Glasdach-Hütte',
      p1Post: ', bei der die Decke das Schlagzeilendetail ist. Beide sind unten aufgeführt.',
    },
    conciergeTitle: 'Eine Zwei-Suiten-Buchung oder eine private Etage?',
    conciergeBody: 'Mehrere dieser Anwesen geben in den Schulterwochen eine Mehrsuiten-Etage zur ausschließlichen Nutzung frei. Teilen Sie uns Termine und Gästezahl mit.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Reiseziel 0${i + 1}`,
    readTheProfile: (name) => `${name}-Profil lesen`,
  },
  destinationPage: {
    backLink: 'Reiseziele',
    eyebrow: 'Reiseziel · Finnisch-Lappland',
    arrival: 'Anreise',
    aurora: 'Polarlichter',
    highlights: 'Höhepunkte',
    villasHere: (n) => (n === 1 ? 'Eine Villa hier verankert.' : `${n} Villen hier verankert.`),
    villasHereH2: (n) => (n === 1 ? 'Eine Villa hier verankert.' : `${n} Villen hier verankert.`),
    fullCollection: 'Gesamte Kollektion',
    conciergeTitle: (name) => `Planen Sie eine private ${name}-Reise.`,
    conciergeBody: 'Senden Sie Termine, Gästezahl und etwaige Wünsche (privater Koch, Hubschrauberanreise, exklusive Nutzung). Eine Antwort mit Auswahl erreicht Sie innerhalb eines Werktags.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Polarlichter', intro: 'Die Polarlichter selbst sind kostenlos. Was hier verkauft wird, ist der Zugang, das richtige Fahrzeug, der richtige Guide und die richtige Nacht unter dem richtigen Wolkenfenster.' },
      wilderness: { title: 'Wildnis', intro: 'Private Versionen der Erlebnisse, für die alle nach Lappland kommen, Husky, Schneemobil, Rentier, ohne den geteilten Bus und den Rundweg.' },
      culinary: { title: 'Kulinarik', intro: 'Ein aktiver Koch aus einer der ernsthaften Küchen Lapplands, in Ihrer Villa, für einen Abend, oder das hauseigene Tasting-Menü, wenn die Küche der Grund Ihrer Reise ist.' },
      arrival: { title: 'Anreise', intro: 'Privatjet, Hubschraubertransfer, arktisch ausgerüstete Bodenfahrzeuge. Gebucht im Hinblick auf Slot, Tageslichtfenster und Villa-Check-in.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Tage, an denen die Sonne nicht untergeht' },
      { value: '24h', label: 'Tageslicht am Höhepunkt, 21. Juni' },
      { value: '+18°C', label: 'Durchschnittstemperatur tagsüber Ende Juni' },
      { value: '50%', label: 'Geringere Nachfrage als in der Polarlichtsaison' },
    ],
    fourReasons: 'Vier Gründe',
    h2: 'Lappland im Sommer ist ein eigenständiger Ort.',
    reasons: [
      { title: 'Die Architektur verändert ihren Charakter.', body: 'Die Glasdächer, die für die Polarlichter existieren, rahmen nun eine ununterbrochene Sonne. Oberlicht über dem Bett, Sonne auf dem See, kein Vorhang zu schließen, es gibt keine Nacht zum Verbergen.' },
      { title: 'Die Wildnis wird zugänglich.', body: 'Seen tauen, der boreale Wald öffnet sich, die Kanurouten erscheinen. Dieselbe Villa, die Sie im Februar per Schneemobil erreichten, ist nun eine fünfminütige Bootsfahrt vom Steg entfernt.' },
      { title: 'Die Reserve-Villen öffnen.', body: 'Die privaten Seeufer-Blockhaus-Güter und die Architektenchalets geben den Rest ihres Kalenders frei. Das 32-Tage-Fenster ist die einzige Zeit im Jahr, in der private Köche und Hubschraubercharter Schulterpreise bieten.' },
      { title: 'Keine Schlangen, keine Nachbarn.', body: 'Lappland im Sommer sieht einen Bruchteil der Besucherdichte des Winters. Der Wildnispfad durch den Wald, der Aussichtspunkt vom Fjell, sie gehören praktisch Ihnen.' },
    ],
    summerCollection: {
      eyebrow: 'Die Sommerkollektion',
      h2: 'Vier Villencharaktere im Sommerlicht.',
      lede: 'Dieselben architektonischen Kategorien wie die Winterkollektion, Glasdach-Hütten, Seeufer-Blockhaus-Güter, Alpenchalets, Waldvillen, aufgenommen im Mitternachtssonnenlicht des späten Juni, um die zweite Hälfte der Geschichte zu zeigen.',
      cards: [
        { title: 'Glasdach-Hütte im Grünen', copy: 'Die Polarlicht-Architektur im 23-Uhr-Goldlicht, umgeben von üppigem Wald statt Schnee.' },
        { title: 'Blockhaus-Gut am See', copy: 'Private Bucht am eisfreien Inari-See, Kanu am Steg, Rauch aus der holzbefeuerten Sauna.' },
        { title: 'Designer-Chalet auf dem Fjell', copy: 'Wollgras und Wildblumen ersetzen die Skipiste, dieselbe Panorama-Glasfassade.' },
        { title: 'Moderne Waldvilla', copy: 'Auskragender Holzbau tief im grünen borealen Kiefernwald, goldene Mitternachtssonnen-Wärme an der Fassade.' },
      ],
    },
    planning: {
      h2: 'Eine Notiz zur Planung einer Mitternachtssonnen-Reise.',
      p1: 'Das 32-Tage-Fenster ist kurz und die Villen sind im Einzelbesitz, der Kalender füllt sich daher opportunistisch, nicht gleichmäßig. Der Concierge hält jeden Sommer ein kleines Kontingent in den Reserve-Anwesen.',
      p2: 'Der richtige Zeitpunkt, für einen bestimmten Juni anzufragen, liegt zwischen Januar und März desselben Jahres. Spätere Anfragen sind weiterhin sinnvoll, Freigaben kommen vor, aber das High-End des Inventars geht oft früher.',
      quoting: 'Wir bepreisen derzeit Sommer 2026 + 2027',
    },
    conciergeTitle: 'Eine Mitternachtssonnen-Reise anfragen.',
    conciergeBody: 'Senden Sie Termine, Gästezahl und Wünsche. Eine Antwort erreicht Sie innerhalb eines Werktags mit der Verfügbarkeit der Sommerkollektion, einschließlich Reserve-Villen, die nicht öffentlich gelistet sind.',
  },
  conciergePage: {
    eyebrow: 'Das Anfrageformular',
    h2: 'Erzählen Sie uns, was Sie sich vorstellen.',
    intro: 'Fünf kurze Felder. Je konkreter Wünsche und Rahmenbedingungen, desto hilfreicher die Auswahl. Name und E-Mail bleiben optional, wir antworten an die Adresse, von der die Nachricht kommt.',
    fields: {
      headcount: 'Gästezahl',
      tripIntent: 'Reisezweck',
      budget: 'Richtwert Nächtigungsbudget',
      datesLabel: 'Termine (oder Zeitraum)',
      datesHint: 'z. B. „14.–21. Februar" oder „erste Hälfte März, 5 Nächte"',
      datesPlaceholder: 'Optional',
      messageLabel: 'Etwas Spezifisches',
      messageHint: 'Privater Koch, Hubschrauberanreise, exklusive Nutzung, Barrierefreiheit, Ernährung, Fotografiefokus, was auch immer die Auswahl prägt.',
      nameLabel: 'Name (optional)',
      namePlaceholder: 'Anonym, falls leer',
      emailLabel: 'Antwort-E-Mail',
      emailHint: 'Wenn leer, antworten wir an Ihre eigene Absenderadresse.',
      emailPlaceholder: 'optional',
    },
    options: {
      headcount: ['1–2 Gäste', '3–4 Gäste', '5–6 Gäste', '7–10 Gäste', 'Größere Gruppe'],
      intent: ['Polarlichtsaison, erster Besuch', 'Polarlichtsaison, wiederholter Besuch', 'Mitternachtssonne (Juni–Juli)', 'Weihnachten / Neujahr', 'Familiengruppe', 'Private Feier', 'Hochzeitsreise / Rückzug zu zweit', 'Anderes, in der Nachricht erläutern'],
      budget: ['Unter 1.000 € / Nacht', '1.000 – 2.500 € / Nacht', '2.500 – 5.000 € / Nacht', 'Über 5.000 € / Nacht', 'Reserve-Anwesen, exklusive Nutzung', 'Keine Angabe'],
    },
    submit: 'Private Anfrage senden',
    sending: 'Wird gesendet…',
    successH2: 'Anfrage erhalten.',
    successBody: 'Eine Antwort erreicht Sie innerhalb eines Werktags. Bei direktem Anliegen erreichen Sie uns ebenso unter',
    successFollowUp: '.',
    errorFallback: 'Sie können uns auch direkt eine E-Mail senden an',
    fallbackNotice: 'Ihr E-Mail-Programm wird geöffnet, um die Anfrage direkt zu versenden.',
    fineprint: 'Übermittlungen werden über eine verschlüsselte Verbindung an einen einzigen privaten Posteingang in Finnland weitergeleitet. Kein Drittanbieter-CRM, keine Werbeattribution im Nachrichtenkörper.',
    trustStrip: [
      { title: 'Anonym', body: 'Name und E-Mail sind optional. Anfrage über ein verschlüsseltes Formular an einen einzigen Posteingang.' },
      { title: 'private@laplandvibes.com', body: 'Überwacht Mo–Fr. Antworten innerhalb eines Werktags, geschrieben von einer Person in Finnland.' },
      { title: 'Diskret als Standard', body: 'Kein Drittanbieter-CRM, keine geteilten Kalender. Die Auswahl wird für jede Anfrage privat erstellt.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Warum diese Kollektion existiert',
        paragraphs: [
          'Luxusunterkünfte in Lappland sind eine kleine Welt. Dieselbe Handvoll Villen und ein paar Dutzend Suiten tauchen auf jeder Buchungsplattform auf, oft mit denselben Stockfotos und derselben vagen Preisspanne. Reisende, die die naheliegenden Reisen bereits hinter sich haben, fragen genauer nach Lappland: Welche Villa würden Sie wirklich buchen? Wo bringen Sie eine neunköpfige Familie unter? Wo ist der Ort, über den niemand schreibt?',
          'Diese Seite ist eine kurze, durchdachte Antwort auf diese Fragen, eine handverlesene Auswahl der Villen und Suiten, die unserer Überzeugung nach die Reise wert sind.',
        ],
      },
      {
        title: 'Was diese Seite nicht macht',
        paragraphs: [
          'Wir betreiben die Villen nicht und sind keine Buchungsagentur. Es gibt hier kein Verzeichnis und keinen Plan, eines aufzubauen, die Kollektion bleibt bewusst klein.',
          'Wir sind unabhängig. Wo sich ein Anwesen online buchen lässt, verlinken wir auf sein öffentliches Listing, etwa über Hotels.com; diese Links können uns eine kleine Provision einbringen, ohne Mehrkosten für Sie, und sie beeinflussen niemals, welche Villen wir empfehlen. Anwesen können sich keinen Platz erkaufen.',
        ],
      },
      {
        title: 'Wer dahintersteht',
        paragraphs: [
          {
            type: 'link',
            pre: 'Ein kleines, in Finnland ansässiges Team, das auch das ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: '-Ökosystem betreibt, einen redaktionellen Hub und ein Netzwerk von Lappland-Reisewebsites. Diese Seite ist der Teil dieser Arbeit, der sich auf Lapplands eigenständigste Villen und Suiten konzentriert.',
          },
          'Anfragen landen in einem einzigen Posteingang und werden persönlich beantwortet, kein Chatbot, kein ausgelagertes Callcenter. Passt eine Anfrage nicht zu dieser Kollektion (eine zu große Gruppe, ein Reiseziel, das wir nicht abdecken), sagen wir das ehrlich und verweisen Sie, wo möglich, an eine bessere Adresse.',
        ],
      },
      {
        title: 'Zwei Reisetypen, die wir nicht annehmen',
        paragraphs: [
          'Hochzeiten mit mehr als dreißig Gästen sowie die komplette Anmietung eines Anwesens für Markenveranstaltungen liegen außerhalb dessen, wofür diese Anwesen gebaut wurden. Gerne verweisen wir Sie an Anbieter, die solche Veranstaltungen fachgerecht abwickeln.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'Die Kollektion',
    bedroom: 'Schlafzimmer',
    bedrooms: 'Schlafzimmer',
    sleeps: 'Schläft',
    fromPerNight: 'Ab / Nacht',
    nightlyHint: 'Richtwert Nebensaisonpreis. Der tatsächliche Nächtigungspreis hängt von Terminen, Aufenthaltsdauer und Einschlüssen ab.',
    rate: 'Preis',
    onRequest: 'Auf Anfrage',
    reserveHint: 'Reserve-Anwesen, auf Anfrage privat bepreist, nie auf einem öffentlichen Listing.',
    beginInquiry: 'Private Anfrage starten',
    viewRates: 'Öffentliche Preise ansehen',
    orSendInquiry: 'Oder eine private Anfrage senden',
    signatureEyebrow: 'Signature-Details',
    signatureH2: 'Sechs Details, die Sie bei der Ankunft prüfen können.',
    destinationEyebrow: 'Das Reiseziel',
    readProfile: (name) => `${name}-Profil lesen →`,
    conciergeTitle: (dest) => `Eine ${dest}-Anfrage starten.`,
    conciergeBody: 'Senden Sie Termine, Gästezahl und Wünsche. Eine Antwort erreicht Sie innerhalb eines Werktags mit Verfügbarkeit, tatsächlichem Nächtigungspreis und etwaigen Reserve-Villen, die als Ergänzung geeignet sind.',
    alsoEyebrow: 'Ebenfalls in der Kollektion',
    alsoH2: 'Drei weitere Villen, die einen Blick wert sind.',
  },
  notFound: {
    eyebrow: 'Fehler',
    body: 'Diese Seite gehört nicht zur Kollektion. Die Villen, Suiten und Reiseziele sind unten aufgeführt.',
    home: 'Startseite',
    collection: 'Die Kollektion',
  },
  contactPage: {
    seoTitle: 'Kontakt · LaplandLuxuryVillas',
    seoDescription: 'Ein privates Postfach: private@laplandvibes.com. Betrieben von Lapeso Oy aus Finnisch-Lappland. Presse-, Partnerschafts- und Direktkontakt unten.',
    eyebrow: 'Kontakt',
    h1: 'Ein Postfach, ein Betreiber.',
    cards: {
      private: {
        eyebrow: 'Private Anfragen',
        body: 'Anonyme Reiseplanung, Villen-Auswahllisten, Fragen zu Direktraten. Antwort innerhalb eines Werktags.',
      },
      press: {
        eyebrow: 'Presse & Partnerschaften',
        body: 'Redaktionelle Anfragen, Partnerschaftsvorschläge von Anwesen, Anfragen von Journalistinnen und Journalisten.',
      },
      deals: {
        eyebrow: 'Direktverträge (Anwesen)',
        body: 'Für Villenbesitzer und -betreiber, die in die Kollektion aufgenommen werden möchten. Wir lehnen die meisten Anfragen ab, bitte lesen Sie zuerst die Seite Über uns.',
      },
      general: {
        eyebrow: 'Allgemeines & Redaktion',
        body: 'Alles Weitere. Längere Bearbeitungszeit als bei private@; für die Reiseplanung nutzen Sie bitte das Concierge-Postfach oben.',
      },
    },
    privateCta: 'Private Anfrage senden',
    operatorEyebrow: 'Betreiber',
    location: 'Finnisch-Lappland, in Finnland eingetragenes Unternehmen.',
    aboutPre: 'Den weiteren Kontext zum LaplandVibes-Ökosystem finden Sie auf der Seite ',
    aboutLabel: 'Über uns',
    aboutPost: '.',
  },
  footerNote:
    'Eine private Kollektion, kuratiert in Finnisch-Lappland, zuletzt überprüft im Mai 2026. Einige Buchungen bringen eine Partnerprovision, die nie beeinflusst, welche Villen empfohlen werden. Die Reserve- und Concierge-only-Anwesen zahlen nichts.',
  footerPillars: [
    { name: 'Die Kollektion', href: '/villas' },
    { name: 'Designer-Suiten', href: '/suites' },
    { name: 'Reiseziele', href: '/destinations' },
    { name: 'Erlebnisse', href: '/experiences' },
    { name: 'Mitternachtssonne', href: '/midnight-sun' },
    { name: 'Privater Concierge', href: '/concierge' },
  ],
}

// ES/PT-BR/ZH-CN: deep clone of EN as safe fallback with selective overlay for
// the most visible top-of-page strings (nav, cta). Deeper pages fall back to EN.

const es: SiteCopy = {
  nav: {
    villas: 'Villas',
    suites: 'Suites',
    destinations: 'Destinos',
    experiences: 'Experiencias',
    midnightSun: 'Sol de medianoche',
    about: 'Quiénes somos',
    privateInquiry: 'Consulta privada',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  cta: {
    browseCollection: 'Ver la colección',
    beginPrivateInquiry: 'Iniciar consulta privada',
    fullCollection: 'Colección completa',
    readProfile: 'Leer el perfil',
    inquire: 'Consultar',
    viewRates: 'Ver tarifas',
    viewOptions: 'Ver opciones',
    viewPublicRates: 'Ver tarifas públicas',
    orSendPrivateInquiry: 'O envíe una consulta privada',
    seeTheCollection: 'Ver la colección',
    inquireAboutJune: 'Consultar fechas de junio',
    inquireAboutJuneShort: 'Consultar para junio',
    seeSummerCollection: 'Ver la colección de verano',
    fullVillaCollection: 'Colección completa de villas',
    sendPrivateInquiry: 'Enviar consulta privada',
    sendAnother: 'Enviar otra consulta',
    home: 'Inicio',
    theCollection: 'La colección',
    sending: 'Enviando…',
    subscribe: 'Suscribirse',
    subscribed: 'Suscrito',
  },
  badges: {
    onRequest: 'Bajo solicitud',
    fromPerNight: 'Desde / noche',
    fromPerPerson: 'Desde / persona',
    fromPerGroup: 'Desde / grupo',
    rate: 'Tarifa',
    bedroom: 'dormitorio',
    bedrooms: 'dormitorios',
    sleeps: 'Capacidad',
    arrival: 'Llegada',
    aurora: 'Aurora',
    highlights: 'Lo más destacado',
    villas: (n) => (n === 1 ? 'Una villa en este destino.' : `${n} villas en este destino.`),
    villasIn: (name) => `Villas en ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Una villa en este destino.' : `${n} villas en este destino.`),
    alsoInCollection: 'También en la colección',
    threeOthers: 'Otras tres villas que merece la pena considerar.',
    signatureDetails: 'Detalles distintivos',
    sixVerifyOnArrival: 'Seis detalles que podrá comprobar al llegar.',
    theDestination: 'El destino',
    fullCollectionShort: 'Colección completa',
  },
  tier: {
    signature: 'Signature',
    private: 'Colección privada',
    reserve: 'Reserve · Solo por conserjería',
  },
  category: {
    'glass-roof': 'Villa con techo de cristal',
    'log-estate': 'Propiedad privada de troncos',
    'designer-suite': 'Suite de autor',
    'alpine-chalet': 'Chalet alpino',
    'lakeside-retreat': 'Refugio junto al lago',
  },
  concierge: {
    eyebrow: 'La conserjería privada',
    defaultTitle: 'Una forma más serena de planificar un viaje a Laponia.',
    defaultBody: 'Envíe un solo mensaje, preferencias, fechas, número de personas, y nuestra conserjería le responde con una preselección privada en un día laborable. Sin perfil público, sin calendarios compartidos.',
    inquireBtn: 'Consulta privada',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Planificación anónima del viaje',
      reply: 'Respuesta en un día laborable',
      rates: 'Tarifas directas bajo solicitud',
    },
  },
  midnightSunBand: {
    eyebrow: '6 jun – 7 jul',
    h2: 'Las mismas villas, en 32 días de luz ininterrumpida.',
    body: 'La misma arquitectura, otra estación. El techo de cristal se convierte en una claraboya sobre un sol que nunca se pone, el lago se deshiela, el bosque se llena de moras árticas. La mitad de la demanda del invierno, y la única ventana del año en que los chefs privados, los vuelos en helicóptero y las villas reserve abren el resto de su calendario.',
    primary: 'Ver la colección de verano',
    secondary: 'Consultar fechas de junio',
  },
  newsletter: {
    eyebrow: 'El boletín de #LaplandVibes',
    h2: 'Un aviso discreto cuando las villas abren nuevas fechas y sabemos de una disponibilidad privada.',
    lede: 'Tarifas directas. Plazas de conserjería de última hora. Previsiones de la ventana de auroras la semana anterior a cada luna nueva. Sin spam, escrito en Finlandia, enviado solo cuando hay algo concreto que contar.',
    emailPlaceholder: 'tu@email.com',
    footnote: 'Cancele la suscripción con un clic.',
    welcome: 'Bienvenido a bordo. El primer aviso llega en menos de una semana.',
    already: 'Ya está en la lista, nos vemos en el próximo aviso.',
    invalidEmail: 'Esa dirección de correo no parece válida.',
    networkError: 'Error de red. Inténtelo de nuevo.',
    genericError: 'Algo ha salido mal. Inténtelo de nuevo en un momento.',
  },
  affiliateDisclosure: {
    compact: 'Enlaces de afiliado, recibimos una pequeña comisión sin coste adicional cuando reserva.',
    full: 'Esta página contiene enlaces de afiliado. Si reserva a través de estos enlaces, LaplandLuxuryVillas puede recibir una comisión sin coste adicional para usted.',
  },
  hero: {
    home: {
      eyebrow: 'La colección privada',
      title: 'Laponia finlandesa, discreta, en lo más alto del mercado.',
      lede: 'Una pequeña colección de villas privadas de lujo seleccionadas a mano por toda Laponia, con conserjería, precios bajo solicitud.',
      primary: 'Ver la colección',
      secondary: 'Consulta privada',
    },
    villas: {
      eyebrow: 'La colección',
      title: 'Nueve villas. Cinco destinos. Una consulta privada.',
      lede: 'Cada propiedad listada a continuación está verificada con la información publicada por el operador y reseñas recientes de huéspedes. Filtre por el tipo de edificio que tiene en mente, o envíe una consulta privada y elaboraremos una preselección según sus fechas.',
    },
    suites: {
      eyebrow: 'Suites de autor',
      title: 'Cuando no necesita una villa, pero sí el techo de cristal.',
      lede: 'Una breve lista de suites de un dormitorio y cabañas para la aurora donde la propia arquitectura es la experiencia. Menos personas, el mismo techo panorámico.',
    },
    destinations: {
      eyebrow: 'Destinos',
      title: 'Cinco lugares, cada uno con una razón clara para estar allí.',
      lede: 'Laponia no es intercambiable. La frecuencia de las auroras, la logística de llegada y la densidad de alojamiento cambian de forma notable cada 50 km al norte del Círculo Polar Ártico.',
    },
    experiences: {
      eyebrow: 'Experiencias a medida',
      title: 'El día, antes de la noche bajo el cristal.',
      lede: 'Ocho experiencias privadas que combinamos con las villas, cada una reservada según la ventana meteorológica, las horas de luz y la hora de entrada a la villa.',
    },
    midnightSun: {
      eyebrow: '6 jun – 7 jul',
      title: 'La ventana de 32 días en que el sol no se pone.',
      lede: 'Las mismas villas, en la temporada del sol de medianoche, menos huéspedes, una luz infinita y suave.',
      primary: 'Consultar fechas de junio',
      secondary: 'Ver la colección',
    },
    concierge: {
      eyebrow: 'Conserjería privada',
      title: 'Un mensaje privado, una preselección curada.',
      lede: 'Envíe fechas, número de personas y el tipo de viaje que tiene en mente. Respondemos en un día laborable, incluyendo, cuando encaja, las villas reserve que nunca aparecen públicamente.',
    },
    about: {
      eyebrow: 'Quiénes somos',
      title: 'Una lista corta, breve a propósito.',
      lede: 'Una colección privada de las mejores villas y suites de Laponia, conserjería anónima, tarifas directas allí donde existen, sin plataforma de por medio.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Cómo trabajamos',
      h2: 'Lo contrario de una plataforma de reservas.',
      items: [
        { title: 'Una lista corta, no un directorio.', body: 'Nueve villas y suites en los destinos que de verdad justifican el viaje. Rechazamos propiedades más a menudo de las que añadimos, cada entrada de esta página es una que un viajero exigente podría reservar sin dudar.' },
        { title: 'Planificación anónima del viaje.', body: 'Una sola bandeja de entrada privada, sin perfil público, sin calendarios compartidos con terceros. Envíe fechas, número de personas y preferencias, reciba una preselección curada en un día laborable.' },
        { title: 'Tarifas directas, allí donde existen.', body: 'Los anuncios públicos enlazan con tarifas verificadas. Las propiedades reservadas en privado, incluidas las villas reserve sin disponibilidad pública, se cotizan directamente. La respuesta le dice cuál es cuál.' },
      ],
    },
    signature: {
      eyebrow: 'Villas signature',
      h2: 'Cuatro pilares de la colección de Laponia.',
      lede: 'Las propiedades que más recomendamos. Cada detalle que sigue está verificado con la información del operador y reseñas recientes de huéspedes, no copiado de un folleto.',
    },
    destinations: {
      eyebrow: 'Destinos',
      h2: 'Cinco lugares, cada uno con una razón clara.',
    },
  },
  villasPage: {
    filters: { all: 'Todas', glassRoof: 'Techo de cristal', logEstate: 'Propiedad de troncos', designerSuite: 'Suite de autor', alpineChalet: 'Chalet alpino', lakeside: 'Junto al lago' },
    noVillas: 'Todavía no hay villas en esa categoría.',
    conciergeTitle: '¿No encuentra lo que busca?',
    conciergeBody: 'La colección de arriba es lo que está publicado actualmente. Hay villas adicionales reservadas en privado, incluidas propiedades reserve sin anuncio público, que se cotizan directamente tras la consulta.',
  },
  suitesPage: {
    intro: {
      p1Pre: '«Suite» en Laponia abarca dos gestos arquitectónicos distintos, ambos vale la pena conocerlos. El primero es la ',
      designerSuite: 'suite de autor',
      p1Mid: ', donde un destacado estudio finlandés (Studio Puisto, ALA, Avanto) ha construido un único dormitorio en torno a una única vista. El segundo es la ',
      glassRoof: 'cabaña con techo de cristal',
      p1Post: ', donde el techo es el detalle protagonista. Ambas se listan a continuación.',
    },
    conciergeTitle: '¿Una reserva de dos suites o una planta privada?',
    conciergeBody: 'Varias de estas propiedades liberan una planta de varias suites para uso exclusivo en semanas de temporada media. Indíquenos sus fechas y el número de personas.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Destino 0${i + 1}`,
    readTheProfile: (name) => `Leer el perfil de ${name}`,
  },
  destinationPage: {
    backLink: 'Destinos',
    eyebrow: 'Destino · Laponia finlandesa',
    arrival: 'Llegada',
    aurora: 'Aurora',
    highlights: 'Lo más destacado',
    villasHere: (n) => (n === 1 ? 'Una villa en este destino.' : `${n} villas en este destino.`),
    villasHereH2: (n) => (n === 1 ? 'Una villa en este destino.' : `${n} villas en este destino.`),
    fullCollection: 'Colección completa',
    conciergeTitle: (name) => `Planifique un viaje privado a ${name}.`,
    conciergeBody: 'Envíe fechas, número de personas y cualquier preferencia (chef privado, llegada en helicóptero, uso exclusivo). Respondemos con una preselección en un día laborable.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurora', intro: 'Las auroras en sí son gratuitas. Lo que se ofrece aquí es el acceso, el vehículo adecuado, el guía adecuado y la noche adecuada bajo la ventana de cielo despejado adecuada.' },
      wilderness: { title: 'Naturaleza salvaje', intro: 'Versiones privadas de las experiencias por las que todos vienen a Laponia, huskies, motonieve, renos, sin el autobús compartido ni la ruta circular.' },
      culinary: { title: 'Gastronomía', intro: 'Un chef en activo de una de las cocinas serias de Laponia, en su villa, durante una velada, o el menú degustación en la propiedad cuando la cocina es la razón por la que vino.' },
      arrival: { title: 'Llegada', intro: 'Jet privado, traslado en helicóptero, vehículos terrestres preparados para el Ártico. Reservados según la franja, la ventana de luz y la entrada a la villa.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Días en que el sol no se pone' },
      { value: '24 h', label: 'Luz diurna en el punto álgido, 21 jun' },
      { value: '+18 °C', label: 'Temperatura diurna media a finales de junio' },
      { value: '50 %', label: 'Menor demanda que en temporada de auroras' },
    ],
    fourReasons: 'Cuatro razones',
    h2: 'Laponia en verano es otro lugar.',
    reasons: [
      { title: 'La arquitectura cambia de carácter.', body: 'Los techos de cristal que existen para las auroras enmarcan ahora un sol ininterrumpido. Claraboya sobre la cama, sol sobre el lago, sin necesidad de correr una cortina, no hay noche que esconder.' },
      { title: 'La naturaleza salvaje se vuelve accesible.', body: 'Los lagos se deshielan, el bosque boreal se abre, aparecen las rutas en canoa. La misma villa a la que se llegaba en motonieve en febrero queda ahora a cinco minutos en barca desde el embarcadero.' },
      { title: 'Las villas reserve se abren.', body: 'Las propiedades privadas de troncos junto al lago y los chalets de arquitecto liberan el resto de su calendario. La ventana de 32 días es la única época del año en que chefs privados y vuelos en helicóptero cotizan tarifas de temporada media.' },
      { title: 'Sin colas, sin vecinos.', body: 'Laponia en verano recibe una fracción de la densidad de visitantes del invierno. El sendero por el bosque, el mirador en el fjell, son prácticamente suyos.' },
    ],
    summerCollection: {
      eyebrow: 'La colección de verano',
      h2: 'Cuatro caracteres de villa, bajo la luz del verano.',
      lede: 'Las mismas categorías arquitectónicas que la colección de invierno, cabañas con techo de cristal, propiedades de troncos junto al lago, chalets alpinos, villas en el bosque, fotografiadas bajo la luz del sol de medianoche de finales de junio para mostrar la segunda mitad de la historia.',
      cards: [
        { title: 'Cabaña con techo de cristal en el verde', copy: 'La arquitectura de la aurora bajo la luz dorada de las 23:00, rodeada de bosque frondoso en lugar de nieve.' },
        { title: 'Propiedad de troncos junto al lago', copy: 'Bahía privada en el lago Inari deshelada, canoa en el embarcadero, humo de la sauna de leña.' },
        { title: 'Chalet de autor en el fjell', copy: 'Algodón de pantano y flores silvestres sustituyen la pista de esquí, la misma fachada panorámica de cristal.' },
        { title: 'Villa moderna en el bosque', copy: 'Edificio de madera en voladizo en lo profundo del pino boreal verde, calidez dorada del sol de medianoche sobre la fachada.' },
      ],
    },
    planning: {
      h2: 'Una nota sobre cómo planificar un viaje de sol de medianoche.',
      p1: 'La ventana de 32 días es corta y las villas son de propiedad individual, por eso el calendario se llena de forma oportunista, no uniforme. La conserjería reserva una pequeña asignación en las propiedades reserve cada verano.',
      p2: 'El momento adecuado para consultar por un junio concreto es entre enero y marzo de ese año. Las consultas posteriores también merece la pena enviarlas, hay liberaciones, pero la gama alta del inventario suele irse antes.',
      quoting: 'Cotizando actualmente verano de 2026 y 2027',
    },
    conciergeTitle: 'Consulte por un viaje de sol de medianoche.',
    conciergeBody: 'Envíe fechas, número de personas y cualquier preferencia. La respuesta llega en un día laborable con disponibilidad en toda la colección de verano, incluidas villas reserve no listadas públicamente.',
  },
  conciergePage: {
    eyebrow: 'El formulario de consulta',
    h2: 'Cuéntenos qué imagina.',
    intro: 'Cinco campos breves. Cuanto más concretas sean las preferencias y las restricciones, más útil será la preselección. El nombre y el correo son opcionales, las respuestas van a la dirección desde la que llega el mensaje.',
    fields: {
      headcount: 'Número de personas',
      tripIntent: 'Tipo de viaje',
      budget: 'Presupuesto orientativo por noche',
      datesLabel: 'Fechas (o periodo)',
      datesHint: 'p. ej. «14–21 feb» o «primera mitad de marzo, 5 noches»',
      datesPlaceholder: 'Opcional',
      messageLabel: 'Algo concreto',
      messageHint: 'Chef privado, llegada en helicóptero, uso exclusivo, accesibilidad, dieta, enfoque fotográfico, lo que sea que dé forma a la preselección.',
      nameLabel: 'Nombre (opcional)',
      namePlaceholder: 'Anónimo si se deja en blanco',
      emailLabel: 'Correo de respuesta',
      emailHint: 'Si se deja en blanco, las respuestas van a su propia dirección de envío.',
      emailPlaceholder: 'opcional',
    },
    options: {
      headcount: ['1–2 huéspedes', '3–4 huéspedes', '5–6 huéspedes', '7–10 huéspedes', 'Grupo más grande'],
      intent: ['Temporada de auroras, primera visita', 'Temporada de auroras, visita recurrente', 'Sol de medianoche (jun–jul)', 'Navidad / Año Nuevo', 'Grupo familiar', 'Celebración privada', 'Luna de miel / retiro para dos', 'Otro, explíquelo en el mensaje'],
      budget: ['Menos de 1.000 € / noche', '1.000 – 2.500 € / noche', '2.500 – 5.000 € / noche', 'Más de 5.000 € / noche', 'Propiedad reserve, uso exclusivo', 'Prefiero no decirlo'],
    },
    submit: 'Enviar consulta privada',
    sending: 'Enviando…',
    successH2: 'Consulta recibida.',
    successBody: 'Recibirá respuesta en un día laborable. Si desea contactarnos directamente, también puede escribirnos a',
    successFollowUp: '.',
    errorFallback: 'También puede escribirnos directamente a',
    fallbackNotice: 'Abriendo su cliente de correo para enviar la consulta directamente.',
    fineprint: 'Los envíos se reenvían por una conexión cifrada a una única bandeja de entrada privada en Finlandia. Sin CRM de terceros, sin atribución publicitaria en el cuerpo del mensaje.',
    trustStrip: [
      { title: 'Anónimo', body: 'El nombre y el correo son opcionales. La consulta se envía por un formulario cifrado a una única bandeja de entrada.' },
      { title: 'private@laplandvibes.com', body: 'Atendido de lunes a viernes. Respuestas en un día laborable, escritas por una persona en Finlandia.' },
      { title: 'Discreto por defecto', body: 'Sin CRM de terceros, sin calendarios compartidos. La preselección se construye en privado para cada consulta.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Por qué existe esta colección',
        paragraphs: [
          'El alojamiento de lujo en Laponia es un mundo pequeño. El mismo puñado de villas y unas pocas docenas de suites aparecen en todas las plataformas de reservas, a menudo con las mismas fotos de stock y el mismo rango de precios impreciso. Quienes ya han hecho los viajes obvios empiezan a preguntar por Laponia con más precisión: qué villa reservarías tú de verdad, dónde alojas a una familia de nueve, cuál es el lugar del que nadie escribe.',
          'Este sitio es una respuesta breve y meditada a esas preguntas, una selección hecha a mano de las villas y suites que creemos que merecen el viaje.',
        ],
      },
      {
        title: 'Lo que este sitio no hace',
        paragraphs: [
          'No gestionamos las villas y no somos una agencia de reservas. Aquí no hay directorio ni intención de crear uno, la colección se mantiene deliberadamente pequeña.',
          'Somos independientes. Cuando una propiedad se puede reservar en línea, enlazamos a su anuncio público, por ejemplo a través de Hotels.com; esos enlaces pueden generarnos una pequeña comisión sin coste adicional para usted, y nunca influyen en qué villas recomendamos. Las propiedades no pueden pagar para aparecer.',
        ],
      },
      {
        title: 'Quién lo lleva',
        paragraphs: [
          {
            type: 'link',
            pre: 'Un pequeño equipo con base en Finlandia que además gestiona el ecosistema ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ', un centro editorial y una red de sitios de viajes por Laponia. Este sitio es la parte de ese trabajo centrada en las villas y suites más singulares de Laponia.',
          },
          'Las consultas llegan a una sola bandeja de entrada y se responden personalmente, sin chatbot, sin centro de llamadas externalizado. Si una solicitud no encaja con esta colección (un grupo demasiado grande, un destino que no cubrimos), lo decimos con honestidad y, cuando podemos, le orientamos hacia un lugar mejor.',
        ],
      },
      {
        title: 'Dos tipos de viaje que no aceptamos',
        paragraphs: [
          'Las bodas de más de treinta invitados y el alquiler íntegro de una propiedad para eventos de marca quedan fuera de aquello para lo que se construyeron estas propiedades. Con gusto le orientamos hacia operadores que gestionan ese tipo de evento como es debido.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'La colección',
    bedroom: 'dormitorio',
    bedrooms: 'dormitorios',
    sleeps: 'Capacidad',
    fromPerNight: 'Desde / noche',
    nightlyHint: 'Tarifa orientativa de temporada baja. La tarifa real por noche depende de las fechas, la duración de la estancia y lo incluido.',
    rate: 'Tarifa',
    onRequest: 'Bajo solicitud',
    reserveHint: 'Propiedad reserve, se cotiza en privado tras la consulta, nunca en un anuncio público.',
    beginInquiry: 'Iniciar consulta privada',
    viewRates: 'Ver tarifas públicas',
    orSendInquiry: 'O envíe una consulta privada',
    signatureEyebrow: 'Detalles distintivos',
    signatureH2: 'Seis detalles que podrá comprobar al llegar.',
    destinationEyebrow: 'El destino',
    readProfile: (name) => `Leer el perfil de ${name} →`,
    conciergeTitle: (dest) => `Inicie una consulta sobre ${dest}.`,
    conciergeBody: 'Envíe fechas, número de personas y preferencias. La respuesta llega en un día laborable con disponibilidad, la tarifa real por noche y cualquier villa reserve que merezca la pena combinar con esta.',
    alsoEyebrow: 'También en la colección',
    alsoH2: 'Otras tres villas que merece la pena considerar.',
  },
  notFound: {
    eyebrow: 'Error',
    body: 'Esa página no forma parte de la colección. Las villas, suites y destinos se listan a continuación.',
    home: 'Inicio',
    collection: 'La colección',
  },
  contactPage: {
    seoTitle: 'Contacto · LaplandLuxuryVillas',
    seoDescription: 'Una única bandeja privada: private@laplandvibes.com. Gestionada por Lapeso Oy desde la Laponia finlandesa. Contactos de prensa, colaboraciones y trato directo más abajo.',
    eyebrow: 'Contacto',
    h1: 'Una bandeja, un operador.',
    cards: {
      private: {
        eyebrow: 'Consultas privadas',
        body: 'Planificación anónima del viaje, preselección de villas, preguntas sobre tarifas directas. Respondemos en un día laborable.',
      },
      press: {
        eyebrow: 'Prensa y colaboraciones',
        body: 'Solicitudes editoriales, propuestas de colaboración de propiedades y consultas de periodistas.',
      },
      deals: {
        eyebrow: 'Trato directo (propiedades)',
        body: 'Propietarios y operadores de villas interesados en figurar en la colección. Rechazamos la mayoría de las propuestas; lea antes la página Acerca de.',
      },
      general: {
        eyebrow: 'Editorial general',
        body: 'Cualquier otra cosa. Más lenta que private@; para planificar el viaje use la bandeja de conserjería de arriba.',
      },
    },
    privateCta: 'Enviar una consulta privada',
    operatorEyebrow: 'Operador',
    location: 'Laponia finlandesa, empresa registrada en Finlandia.',
    aboutPre: 'Consulte la página ',
    aboutLabel: 'Acerca de',
    aboutPost: ' para conocer el contexto más amplio del ecosistema LaplandVibes.',
  },
  footerNote:
    'Una colección privada curada en la Laponia finlandesa, última revisión en mayo de 2026. Algunas reservas generan una comisión de afiliado, que nunca influye en qué villas se recomiendan. Las propiedades reserve y solo por conserjería no pagan nada.',
  footerPillars: [
    { name: 'La colección', href: '/villas' },
    { name: 'Suites de autor', href: '/suites' },
    { name: 'Destinos', href: '/destinations' },
    { name: 'Experiencias', href: '/experiences' },
    { name: 'Sol de medianoche', href: '/midnight-sun' },
    { name: 'Conserjería privada', href: '/concierge' },
  ],
}

const ptBR: SiteCopy = {
  nav: {
    villas: 'Vilas',
    suites: 'Suítes',
    destinations: 'Destinos',
    experiences: 'Experiências',
    midnightSun: 'Sol da meia-noite',
    about: 'Sobre',
    privateInquiry: 'Consulta privada',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  cta: {
    browseCollection: 'Ver a coleção',
    beginPrivateInquiry: 'Iniciar consulta privada',
    fullCollection: 'Coleção completa',
    readProfile: 'Ler o perfil',
    inquire: 'Consultar',
    viewRates: 'Ver tarifas',
    viewOptions: 'Ver opções',
    viewPublicRates: 'Ver tarifas públicas',
    orSendPrivateInquiry: 'Ou envie uma consulta privada',
    seeTheCollection: 'Ver a coleção',
    inquireAboutJune: 'Consultar datas de junho',
    inquireAboutJuneShort: 'Consultar para junho',
    seeSummerCollection: 'Ver a coleção de verão',
    fullVillaCollection: 'Coleção completa de vilas',
    sendPrivateInquiry: 'Enviar consulta privada',
    sendAnother: 'Enviar outra consulta',
    home: 'Início',
    theCollection: 'A coleção',
    sending: 'Enviando…',
    subscribe: 'Inscrever-se',
    subscribed: 'Inscrito',
  },
  badges: {
    onRequest: 'Sob consulta',
    fromPerNight: 'A partir de / noite',
    fromPerPerson: 'A partir de / pessoa',
    fromPerGroup: 'A partir de / grupo',
    rate: 'Tarifa',
    bedroom: 'quarto',
    bedrooms: 'quartos',
    sleeps: 'Acomoda',
    arrival: 'Chegada',
    aurora: 'Aurora',
    highlights: 'Destaques',
    villas: (n) => (n === 1 ? 'Uma vila neste destino.' : `${n} vilas neste destino.`),
    villasIn: (name) => `Vilas em ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Uma vila neste destino.' : `${n} vilas neste destino.`),
    alsoInCollection: 'Também na coleção',
    threeOthers: 'Outras três vilas que vale a pena considerar.',
    signatureDetails: 'Detalhes que distinguem',
    sixVerifyOnArrival: 'Seis detalhes que você pode conferir ao chegar.',
    theDestination: 'O destino',
    fullCollectionShort: 'Coleção completa',
  },
  tier: {
    signature: 'Signature',
    private: 'Coleção privada',
    reserve: 'Reserve · Apenas por concierge',
  },
  category: {
    'glass-roof': 'Vila com teto de vidro',
    'log-estate': 'Propriedade privada de troncos',
    'designer-suite': 'Suíte de autor',
    'alpine-chalet': 'Chalé alpino',
    'lakeside-retreat': 'Refúgio à beira do lago',
  },
  concierge: {
    eyebrow: 'O concierge privado',
    defaultTitle: 'Um jeito mais tranquilo de planejar uma viagem à Lapônia.',
    defaultBody: 'Envie uma única mensagem, preferências, datas, número de pessoas, e nosso concierge responde com uma pré-seleção privada em um dia útil. Sem perfil público, sem calendários compartilhados.',
    inquireBtn: 'Consulta privada',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Planejamento anônimo da viagem',
      reply: 'Resposta em um dia útil',
      rates: 'Tarifas diretas sob consulta',
    },
  },
  midnightSunBand: {
    eyebrow: '6 jun – 7 jul',
    h2: 'As mesmas vilas, em 32 dias de luz ininterrupta.',
    body: 'A mesma arquitetura, outra estação. O teto de vidro vira uma claraboia sobre um sol que nunca se põe, o lago degela, a floresta se enche de amoras-árticas. Metade da demanda do inverno, e a única janela do ano em que chefs particulares, voos de helicóptero e as vilas reserve abrem o restante de seu calendário.',
    primary: 'Ver a coleção de verão',
    secondary: 'Consultar datas de junho',
  },
  newsletter: {
    eyebrow: 'O boletim da #LaplandVibes',
    h2: 'Um aviso discreto quando as vilas abrem novas datas e ficamos sabendo de uma disponibilidade privada.',
    lede: 'Tarifas diretas. Vagas de concierge de última hora. Previsões da janela de auroras na semana anterior a cada lua nova. Sem spam, escrito na Finlândia, enviado apenas quando há algo concreto a contar.',
    emailPlaceholder: 'seu@email.com',
    footnote: 'Cancele a inscrição com um clique.',
    welcome: 'Bem-vindo a bordo. O primeiro aviso chega em menos de uma semana.',
    already: 'Você já está na lista, até o próximo aviso.',
    invalidEmail: 'Esse endereço de e-mail parece inválido.',
    networkError: 'Erro de rede. Tente novamente.',
    genericError: 'Algo deu errado. Tente novamente em instantes.',
  },
  affiliateDisclosure: {
    compact: 'Links de afiliado, recebemos uma pequena comissão sem custo adicional quando você reserva.',
    full: 'Esta página contém links de afiliado. Se você reservar por estes links, a LaplandLuxuryVillas pode receber uma comissão sem custo adicional para você.',
  },
  hero: {
    home: {
      eyebrow: 'A coleção privada',
      title: 'Lapônia finlandesa, discreta, no topo do mercado.',
      lede: 'Uma pequena coleção de vilas privadas de luxo selecionadas a dedo por toda a Lapônia, com concierge, preços sob consulta.',
      primary: 'Ver a coleção',
      secondary: 'Consulta privada',
    },
    villas: {
      eyebrow: 'A coleção',
      title: 'Nove vilas. Cinco destinos. Uma consulta privada.',
      lede: 'Cada propriedade listada abaixo é verificada com as informações publicadas pelo operador e avaliações recentes de hóspedes. Filtre pelo tipo de edifício que tem em mente, ou envie uma consulta privada e faremos uma pré-seleção conforme suas datas.',
    },
    suites: {
      eyebrow: 'Suítes de autor',
      title: 'Quando você não precisa de uma vila, mas precisa do teto de vidro.',
      lede: 'Uma lista enxuta de suítes de um quarto e cabanas para a aurora onde a própria arquitetura é a experiência. Menos pessoas, o mesmo teto panorâmico.',
    },
    destinations: {
      eyebrow: 'Destinos',
      title: 'Cinco lugares, cada um com um motivo claro para estar ali.',
      lede: 'A Lapônia não é intercambiável. A frequência das auroras, a logística de chegada e a densidade de hospedagem mudam de forma significativa a cada 50 km ao norte do Círculo Polar Ártico.',
    },
    experiences: {
      eyebrow: 'Experiências sob medida',
      title: 'O dia, antes da noite sob o vidro.',
      lede: 'Oito experiências privadas que combinamos com as vilas, cada uma reservada conforme a janela do tempo, as horas de luz e o horário de check-in da vila.',
    },
    midnightSun: {
      eyebrow: '6 jun – 7 jul',
      title: 'A janela de 32 dias em que o sol não se põe.',
      lede: 'As mesmas vilas, na temporada do sol da meia-noite, menos hóspedes, uma luz infinita e suave.',
      primary: 'Consultar datas de junho',
      secondary: 'Ver a coleção',
    },
    concierge: {
      eyebrow: 'Concierge privado',
      title: 'Uma mensagem privada, uma pré-seleção curada.',
      lede: 'Envie datas, número de pessoas e o tipo de viagem que tem em mente. Respondemos em um dia útil, incluindo, quando faz sentido, as vilas reserve que nunca aparecem publicamente.',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Uma lista curta, breve de propósito.',
      lede: 'Uma coleção privada das melhores vilas e suítes da Lapônia, concierge anônimo, tarifas diretas onde existem, sem plataforma no meio.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Como trabalhamos',
      h2: 'O oposto de uma plataforma de reservas.',
      items: [
        { title: 'Uma lista curta, não um diretório.', body: 'Nove vilas e suítes nos destinos que de fato justificam a viagem. Recusamos propriedades com mais frequência do que adicionamos, cada item desta página é um que um viajante criterioso reservaria sem hesitar.' },
        { title: 'Planejamento anônimo da viagem.', body: 'Uma única caixa de entrada privada, sem perfil público, sem calendários compartilhados com terceiros. Envie datas, número de pessoas e preferências, receba uma pré-seleção curada em um dia útil.' },
        { title: 'Tarifas diretas, onde existem.', body: 'Os anúncios públicos levam a tarifas verificadas. As propriedades mantidas em sigilo, incluindo vilas reserve sem disponibilidade pública, são cotadas diretamente. A resposta diz qual é qual.' },
      ],
    },
    signature: {
      eyebrow: 'Vilas signature',
      h2: 'Quatro pilares da coleção da Lapônia.',
      lede: 'As propriedades que mais recomendamos. Cada detalhe abaixo é verificado com as informações do operador e avaliações recentes, não copiado de um folheto.',
    },
    destinations: {
      eyebrow: 'Destinos',
      h2: 'Cinco lugares, cada um com um motivo claro.',
    },
  },
  villasPage: {
    filters: { all: 'Todas', glassRoof: 'Teto de vidro', logEstate: 'Propriedade de troncos', designerSuite: 'Suíte de autor', alpineChalet: 'Chalé alpino', lakeside: 'À beira do lago' },
    noVillas: 'Ainda não há vilas nessa categoria.',
    conciergeTitle: 'Não encontrou o que procura?',
    conciergeBody: 'A coleção acima é o que está publicado no momento. Há vilas adicionais mantidas em sigilo, incluindo propriedades reserve sem anúncio público, cotadas diretamente após a consulta.',
  },
  suitesPage: {
    intro: {
      p1Pre: '«Suíte» na Lapônia abrange dois gestos arquitetônicos distintos, ambos vale a pena conhecer. O primeiro é a ',
      designerSuite: 'suíte de autor',
      p1Mid: ', em que um renomado estúdio finlandês (Studio Puisto, ALA, Avanto) construiu um único quarto em torno de uma única vista. O segundo é a ',
      glassRoof: 'cabana com teto de vidro',
      p1Post: ', em que o teto é o detalhe protagonista. Ambas estão listadas abaixo.',
    },
    conciergeTitle: 'Uma reserva de duas suítes ou um andar privativo?',
    conciergeBody: 'Várias dessas propriedades liberam um andar de várias suítes para uso exclusivo em semanas de baixa temporada. Informe suas datas e o número de pessoas.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Destino 0${i + 1}`,
    readTheProfile: (name) => `Ler o perfil de ${name}`,
  },
  destinationPage: {
    backLink: 'Destinos',
    eyebrow: 'Destino · Lapônia finlandesa',
    arrival: 'Chegada',
    aurora: 'Aurora',
    highlights: 'Destaques',
    villasHere: (n) => (n === 1 ? 'Uma vila neste destino.' : `${n} vilas neste destino.`),
    villasHereH2: (n) => (n === 1 ? 'Uma vila neste destino.' : `${n} vilas neste destino.`),
    fullCollection: 'Coleção completa',
    conciergeTitle: (name) => `Planeje uma viagem privada a ${name}.`,
    conciergeBody: 'Envie datas, número de pessoas e quaisquer preferências (chef particular, chegada de helicóptero, uso exclusivo). Respondemos com uma pré-seleção em um dia útil.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurora', intro: 'As auroras em si são gratuitas. O que se oferece aqui é o acesso, o veículo certo, o guia certo e a noite certa sob a janela de céu limpo certa.' },
      wilderness: { title: 'Natureza selvagem', intro: 'Versões privadas das experiências pelas quais todos vêm à Lapônia, husky, snowmobile, rena, sem o ônibus compartilhado e o trajeto circular.' },
      culinary: { title: 'Gastronomia', intro: 'Um chef em atividade de uma das cozinhas sérias da Lapônia, na sua vila, por uma noite, ou o menu-degustação na propriedade quando a cozinha é o motivo da sua vinda.' },
      arrival: { title: 'Chegada', intro: 'Jato particular, traslado de helicóptero, veículos terrestres preparados para o Ártico. Reservados conforme o horário, a janela de luz e o check-in da vila.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Dias em que o sol não se põe' },
      { value: '24 h', label: 'Luz do dia no pico, 21 jun' },
      { value: '+18 °C', label: 'Temperatura diurna média no fim de junho' },
      { value: '50 %', label: 'Demanda menor que na temporada de auroras' },
    ],
    fourReasons: 'Quatro motivos',
    h2: 'A Lapônia no verão é outro lugar.',
    reasons: [
      { title: 'A arquitetura muda de caráter.', body: 'Os tetos de vidro que existem para as auroras agora emolduram um sol ininterrupto. Claraboia sobre a cama, sol sobre o lago, sem precisar fechar uma cortina, não há noite para esconder.' },
      { title: 'A natureza selvagem fica acessível.', body: 'Os lagos degelam, a floresta boreal se abre, surgem as rotas de canoa. A mesma vila alcançada de snowmobile em fevereiro fica agora a cinco minutos de barco do ancoradouro.' },
      { title: 'As vilas reserve se abrem.', body: 'As propriedades privadas de troncos à beira do lago e os chalés de arquiteto liberam o restante de seu calendário. A janela de 32 dias é a única época do ano em que chefs particulares e voos de helicóptero cotam tarifas de baixa temporada.' },
      { title: 'Sem filas, sem vizinhos.', body: 'A Lapônia no verão recebe uma fração da densidade de visitantes do inverno. A trilha pela floresta, o mirante no fjell, são praticamente seus.' },
    ],
    summerCollection: {
      eyebrow: 'A coleção de verão',
      h2: 'Quatro caracteres de vila, sob a luz do verão.',
      lede: 'As mesmas categorias arquitetônicas da coleção de inverno, cabanas com teto de vidro, propriedades de troncos à beira do lago, chalés alpinos, vilas na floresta, fotografadas sob a luz do sol da meia-noite no fim de junho para mostrar a segunda metade da história.',
      cards: [
        { title: 'Cabana com teto de vidro no verde', copy: 'A arquitetura da aurora sob a luz dourada das 23h, cercada de floresta densa em vez de neve.' },
        { title: 'Propriedade de troncos à beira do lago', copy: 'Baía privativa no lago Inari sem gelo, canoa no ancoradouro, fumaça da sauna a lenha.' },
        { title: 'Chalé de autor no fjell', copy: 'Algodão-do-pântano e flores silvestres substituem a pista de esqui, a mesma fachada panorâmica de vidro.' },
        { title: 'Vila moderna na floresta', copy: 'Edifício de madeira em balanço no fundo do pinheiral boreal verde, calor dourado do sol da meia-noite na fachada.' },
      ],
    },
    planning: {
      h2: 'Uma nota sobre como planejar uma viagem de sol da meia-noite.',
      p1: 'A janela de 32 dias é curta e as vilas são de propriedade individual, por isso o calendário enche de forma oportunista, não uniforme. O concierge mantém uma pequena alocação nas propriedades reserve a cada verão.',
      p2: 'O momento certo para consultar sobre um junho específico é entre janeiro e março daquele ano. Consultas posteriores também valem a pena, surgem liberações, mas o topo do inventário costuma ir mais cedo.',
      quoting: 'Cotando atualmente verão de 2026 e 2027',
    },
    conciergeTitle: 'Consulte sobre uma viagem de sol da meia-noite.',
    conciergeBody: 'Envie datas, número de pessoas e quaisquer preferências. A resposta chega em um dia útil com disponibilidade em toda a coleção de verão, incluindo vilas reserve não listadas publicamente.',
  },
  conciergePage: {
    eyebrow: 'O formulário de consulta',
    h2: 'Conte-nos o que você imagina.',
    intro: 'Cinco campos curtos. Quanto mais específicas as preferências e restrições, mais útil a pré-seleção. Nome e e-mail seguem opcionais, as respostas vão para o endereço de onde a mensagem vem.',
    fields: {
      headcount: 'Número de pessoas',
      tripIntent: 'Tipo de viagem',
      budget: 'Orçamento indicativo por noite',
      datesLabel: 'Datas (ou período)',
      datesHint: 'ex.: «14–21 fev» ou «primeira metade de março, 5 noites»',
      datesPlaceholder: 'Opcional',
      messageLabel: 'Algo específico',
      messageHint: 'Chef particular, chegada de helicóptero, uso exclusivo, acessibilidade, dieta, foco em fotografia, o que der forma à pré-seleção.',
      nameLabel: 'Nome (opcional)',
      namePlaceholder: 'Anônimo se em branco',
      emailLabel: 'E-mail de resposta',
      emailHint: 'Se em branco, as respostas vão para o seu próprio endereço de envio.',
      emailPlaceholder: 'opcional',
    },
    options: {
      headcount: ['1–2 hóspedes', '3–4 hóspedes', '5–6 hóspedes', '7–10 hóspedes', 'Grupo maior'],
      intent: ['Temporada de auroras, primeira visita', 'Temporada de auroras, visita recorrente', 'Sol da meia-noite (jun–jul)', 'Natal / Ano-Novo', 'Grupo familiar', 'Celebração privada', 'Lua de mel / retiro a dois', 'Outro, explique na mensagem'],
      budget: ['Abaixo de € 1.000 / noite', '€ 1.000 – € 2.500 / noite', '€ 2.500 – € 5.000 / noite', 'Acima de € 5.000 / noite', 'Propriedade reserve, uso exclusivo', 'Prefiro não dizer'],
    },
    submit: 'Enviar consulta privada',
    sending: 'Enviando…',
    successH2: 'Consulta recebida.',
    successBody: 'Você receberá resposta em um dia útil. Se quiser nos contatar diretamente, também pode nos escrever em',
    successFollowUp: '.',
    errorFallback: 'Você também pode nos escrever diretamente em',
    fallbackNotice: 'Abrindo seu cliente de e-mail para enviar a consulta diretamente.',
    fineprint: 'Os envios são encaminhados por uma conexão criptografada a uma única caixa de entrada privada na Finlândia. Sem CRM de terceiros, sem atribuição publicitária no corpo da mensagem.',
    trustStrip: [
      { title: 'Anônimo', body: 'Nome e e-mail são opcionais. A consulta é enviada por um formulário criptografado a uma única caixa de entrada.' },
      { title: 'private@laplandvibes.com', body: 'Monitorado de seg. a sex. Respostas em um dia útil, escritas por uma pessoa na Finlândia.' },
      { title: 'Discreto por padrão', body: 'Sem CRM de terceiros, sem calendários compartilhados. A pré-seleção é montada em sigilo para cada consulta.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Por que esta coleção existe',
        paragraphs: [
          'A hospedagem de luxo na Lapônia é um mundo pequeno. O mesmo punhado de vilas e algumas dezenas de suítes aparecem em toda plataforma de reservas, muitas vezes com as mesmas fotos de banco de imagens e a mesma faixa de preço vaga. Quem já fez as viagens óbvias começa a perguntar sobre a Lapônia com mais precisão: que vila você de fato reservaria, onde acomoda uma família de nove pessoas, qual é o lugar sobre o qual ninguém escreve.',
          'Este site é uma resposta curta e ponderada a essas perguntas, uma seleção feita à mão das vilas e suítes que acreditamos valerem a viagem.',
        ],
      },
      {
        title: 'O que este site não faz',
        paragraphs: [
          'Não operamos as vilas e não somos uma agência de reservas. Aqui não há diretório nem intenção de criar um, a coleção é mantida deliberadamente pequena.',
          'Somos independentes. Quando uma propriedade pode ser reservada on-line, criamos um link para o seu anúncio público, por exemplo pela Hotels.com; esses links podem nos render uma pequena comissão, sem custo adicional para você, e nunca influenciam quais vilas recomendamos. As propriedades não podem pagar para aparecer.',
        ],
      },
      {
        title: 'Quem toca o projeto',
        paragraphs: [
          {
            type: 'link',
            pre: 'Uma pequena equipe sediada na Finlândia que também administra o ecossistema ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ', um hub editorial e uma rede de sites de viagem pela Lapônia. Este site é a parte desse trabalho voltada às vilas e suítes mais singulares da Lapônia.',
          },
          'As consultas chegam a uma única caixa de entrada e são respondidas pessoalmente, sem chatbot, sem central de atendimento terceirizada. Se um pedido não se encaixa nesta coleção (um grupo grande demais, um destino que não cobrimos), dizemos isso com honestidade e, quando possível, indicamos um lugar melhor.',
        ],
      },
      {
        title: 'Dois tipos de viagem que não aceitamos',
        paragraphs: [
          'Casamentos com mais de trinta convidados e a locação integral de uma propriedade para eventos de marca ficam fora daquilo para o qual estas propriedades foram construídas. Com prazer indicamos operadoras que cuidam desse tipo de evento como deve ser.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'A coleção',
    bedroom: 'quarto',
    bedrooms: 'quartos',
    sleeps: 'Acomoda',
    fromPerNight: 'A partir de / noite',
    nightlyHint: 'Tarifa indicativa de baixa temporada. A tarifa real por noite depende das datas, da duração da estadia e do que está incluído.',
    rate: 'Tarifa',
    onRequest: 'Sob consulta',
    reserveHint: 'Propriedade reserve, cotada em sigilo após a consulta, nunca em anúncio público.',
    beginInquiry: 'Iniciar consulta privada',
    viewRates: 'Ver tarifas públicas',
    orSendInquiry: 'Ou envie uma consulta privada',
    signatureEyebrow: 'Detalhes que distinguem',
    signatureH2: 'Seis detalhes que você pode conferir ao chegar.',
    destinationEyebrow: 'O destino',
    readProfile: (name) => `Ler o perfil de ${name} →`,
    conciergeTitle: (dest) => `Inicie uma consulta sobre ${dest}.`,
    conciergeBody: 'Envie datas, número de pessoas e preferências. A resposta chega em um dia útil com disponibilidade, a tarifa real por noite e quaisquer vilas reserve que valha a pena combinar com esta.',
    alsoEyebrow: 'Também na coleção',
    alsoH2: 'Outras três vilas que vale a pena considerar.',
  },
  notFound: {
    eyebrow: 'Erro',
    body: 'Essa página não faz parte da coleção. As vilas, suítes e destinos estão listados abaixo.',
    home: 'Início',
    collection: 'A coleção',
  },
  contactPage: {
    seoTitle: 'Contato · LaplandLuxuryVillas',
    seoDescription: 'Uma única caixa de entrada privada: private@laplandvibes.com. Operada pela Lapeso Oy, na Lapônia finlandesa. Contatos de imprensa, parcerias e negócios diretos abaixo.',
    eyebrow: 'Contato',
    h1: 'Uma caixa de entrada, um operador.',
    cards: {
      private: {
        eyebrow: 'Consultas privadas',
        body: 'Planejamento de viagem anônimo, pré-seleção de vilas, dúvidas sobre tarifas diretas. Respondemos em um dia útil.',
      },
      press: {
        eyebrow: 'Imprensa e parcerias',
        body: 'Solicitações editoriais, propostas de parceria de propriedades e contatos de jornalistas.',
      },
      deals: {
        eyebrow: 'Negócios diretos (propriedades)',
        body: 'Proprietários e operadores de vilas interessados em integrar a coleção. Recusamos a maioria das propostas, leia antes a página Sobre.',
      },
      general: {
        eyebrow: 'Editorial geral',
        body: 'Qualquer outro assunto. Resposta mais lenta que a private@; para planejar a viagem, use a caixa do concierge acima.',
      },
    },
    privateCta: 'Enviar uma consulta privada',
    operatorEyebrow: 'Operador',
    location: 'Lapônia finlandesa, empresa registrada na Finlândia.',
    aboutPre: 'Veja a página ',
    aboutLabel: 'Sobre',
    aboutPost: ' para o contexto mais amplo do ecossistema LaplandVibes.',
  },
  footerNote:
    'Uma coleção privada curada na Lapônia finlandesa, última revisão em maio de 2026. Algumas reservas geram comissão de afiliado, que nunca influencia quais vilas são recomendadas. As propriedades reserve e apenas por concierge não pagam nada.',
  footerPillars: [
    { name: 'A coleção', href: '/villas' },
    { name: 'Suítes de autor', href: '/suites' },
    { name: 'Destinos', href: '/destinations' },
    { name: 'Experiências', href: '/experiences' },
    { name: 'Sol da meia-noite', href: '/midnight-sun' },
    { name: 'Concierge privado', href: '/concierge' },
  ],
}

const zhCN: SiteCopy = {
  nav: {
    villas: '别墅',
    suites: '套房',
    destinations: '目的地',
    experiences: '体验',
    midnightSun: '午夜阳光',
    about: '关于我们',
    privateInquiry: '私人咨询',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },
  cta: {
    browseCollection: '浏览精选',
    beginPrivateInquiry: '开始私人咨询',
    fullCollection: '完整精选',
    readProfile: '阅读简介',
    inquire: '咨询',
    viewRates: '查看价格',
    viewOptions: '查看选项',
    viewPublicRates: '查看公开价格',
    orSendPrivateInquiry: '或发送私人咨询',
    seeTheCollection: '浏览精选',
    inquireAboutJune: '咨询六月日期',
    inquireAboutJuneShort: '咨询六月',
    seeSummerCollection: '浏览夏季精选',
    fullVillaCollection: '完整别墅精选',
    sendPrivateInquiry: '发送私人咨询',
    sendAnother: '再发一条咨询',
    home: '首页',
    theCollection: '精选系列',
    sending: '发送中…',
    subscribe: '订阅',
    subscribed: '已订阅',
  },
  badges: {
    onRequest: '应需报价',
    fromPerNight: '起 / 每晚',
    fromPerPerson: '起 / 每人',
    fromPerGroup: '起 / 每团',
    rate: '价格',
    bedroom: '间卧室',
    bedrooms: '间卧室',
    sleeps: '可住',
    arrival: '抵达',
    aurora: '极光',
    highlights: '亮点',
    villas: (n) => (n === 1 ? '此目的地有一座别墅。' : `此目的地有 ${n} 座别墅。`),
    villasIn: (name) => `${name}的别墅`,
    villasInH2: (n, _name) => (n === 1 ? '此目的地有一座别墅。' : `此目的地有 ${n} 座别墅。`),
    alsoInCollection: '精选中的其他别墅',
    threeOthers: '另外三座值得考虑的别墅。',
    signatureDetails: '标志性细节',
    sixVerifyOnArrival: '六处您抵达时即可亲自验证的细节。',
    theDestination: '目的地',
    fullCollectionShort: '完整精选',
  },
  tier: {
    signature: '臻选',
    private: '私人精选',
    reserve: 'Reserve · 仅限礼宾渠道',
  },
  category: {
    'glass-roof': '玻璃屋顶别墅',
    'log-estate': '私人原木庄园',
    'designer-suite': '设计师套房',
    'alpine-chalet': '高山木屋',
    'lakeside-retreat': '湖畔静居',
  },
  concierge: {
    eyebrow: '私人礼宾',
    defaultTitle: '一种更从容的拉普兰行程规划方式。',
    defaultBody: '只需发送一条信息,偏好、日期、人数,礼宾团队将在一个工作日内回复一份私人精选名单。没有公开档案,也不与第三方共享日历。',
    inquireBtn: '私人咨询',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: '匿名行程规划',
      reply: '一个工作日内回复',
      rates: '应需提供直接价格',
    },
  },
  midnightSunBand: {
    eyebrow: '6月6日 – 7月7日',
    h2: '同一批别墅,32天不灭的阳光。',
    body: '建筑相同,季节不同。玻璃屋顶化作迎向不落之日的天窗,湖面解冻,森林缀满云莓。需求仅为冬季的一半,也是一年中唯一一段时间,私人主厨、直升机包机与 reserve 别墅会开放当年余下的日程。',
    primary: '浏览夏季精选',
    secondary: '咨询六月日期',
  },
  newsletter: {
    eyebrow: '#LaplandVibes 通讯',
    h2: '当别墅开放新日期、或我们获悉私下释出的房源时,才会悄然通知您。',
    lede: '直接价格。礼宾临时空房。每逢新月前一周的极光观测窗口预报。绝无垃圾邮件,由芬兰执笔,仅在确有值得分享之事时才发送。',
    emailPlaceholder: 'your@email.com',
    footnote: '一键即可退订。',
    welcome: '欢迎加入。第一封通讯将在一周内送达。',
    already: '您已在名单之中,下封通讯再会。',
    invalidEmail: '该电子邮箱地址似乎无效。',
    networkError: '网络错误。请重试。',
    genericError: '出了点问题。请稍后再试。',
  },
  affiliateDisclosure: {
    compact: '联盟链接,您预订时我们将收取少量佣金,您无需额外付费。',
    full: '本页含联盟链接。若您通过这些链接预订,LaplandLuxuryVillas 可能获得佣金,您无需额外付费。',
  },
  hero: {
    home: {
      eyebrow: '私人精选',
      title: '芬兰拉普兰,低调而处于市场顶端。',
      lede: '一份精挑细选的私人奢华别墅小型珍藏,遍布拉普兰各地,礼宾主导,价格应需奉告。',
      primary: '浏览精选',
      secondary: '私人咨询',
    },
    villas: {
      eyebrow: '精选系列',
      title: '九座别墅。五个目的地。一次私人咨询。',
      lede: '以下每处物业的信息均依据运营方公布的资料及近期住客评价核实。按您心目中的建筑类型筛选，或发送私人咨询，我们会依您的日期为您拟定推荐名单。',
    },
    suites: {
      eyebrow: '设计师套房',
      title: '当您无需一整座别墅,却舍不得那片玻璃屋顶。',
      lede: '一份精简的单卧套房与极光小屋名单,建筑本身即是体验。人数更少,同样的全景天顶。',
    },
    destinations: {
      eyebrow: '目的地',
      title: '五处地方,各有前往的明确理由。',
      lede: '拉普兰并非处处相同。每向北极圈以北推进 50 公里,极光出现的频率、抵达的方式与住宿的密度都会明显改变。',
    },
    experiences: {
      eyebrow: '定制体验',
      title: '玻璃下的夜晚之前,先过好这一天。',
      lede: '我们为别墅搭配八项私人体验,每一项都依天气窗口、日照时长与别墅入住时间来安排。',
    },
    midnightSun: {
      eyebrow: '6月6日 – 7月7日',
      title: '太阳不落山的 32 天窗口。',
      lede: '白夜时节里的同一批别墅,宾客更少,无尽天光更显柔和。',
      primary: '咨询六月日期',
      secondary: '浏览精选',
    },
    concierge: {
      eyebrow: '私人礼宾',
      title: '一条私人信息,一份精选名单。',
      lede: '请告知日期、人数与您心中所想的旅程类型。我们将在一个工作日内回复,若契合,也包括从不公开的 reserve 别墅。',
    },
    about: {
      eyebrow: '关于我们',
      title: '一份刻意保持简短的名单。',
      lede: '一份汇集拉普兰顶尖别墅与套房的私人精选,匿名礼宾、尽可能提供直接价格,中间不经任何平台。',
    },
  },
  home: {
    philosophy: {
      eyebrow: '我们的做法',
      h2: '与预订平台恰恰相反。',
      items: [
        { title: '一份精选名单,而非目录。', body: '九座别墅与套房,坐落在真正值得专程前往的目的地。我们婉拒物业的次数多于收录,本页每一项,都是讲究的旅人可以毫不犹豫预订的。' },
        { title: '匿名行程规划。', body: '只有一个私人收件箱,没有公开档案,也不与第三方共享日历。发送日期、人数与偏好,一个工作日内即可收到精选名单。' },
        { title: '尽可能提供直接价格。', body: '公开房源链接至已核实的价格。私下保留的物业,包括没有公开空房的 reserve 别墅,则直接报价。回复中会明确告知属于哪一种。' },
      ],
    },
    signature: {
      eyebrow: '臻选别墅',
      h2: '拉普兰精选的四大基石。',
      lede: '我们最常推荐的物业。以下每处细节均依据运营方资料及近期住客评价核实，并非照搬宣传册。',
    },
    destinations: {
      eyebrow: '目的地',
      h2: '五处地方,各有明确理由。',
    },
  },
  villasPage: {
    filters: { all: '全部', glassRoof: '玻璃屋顶', logEstate: '原木庄园', designerSuite: '设计师套房', alpineChalet: '高山木屋', lakeside: '湖畔' },
    noVillas: '该类别暂无别墅。',
    conciergeTitle: '没找到合适的?',
    conciergeBody: '上方精选为当前已公开的物业。还有更多别墅私下保留,包括没有公开房源的 reserve 物业,在咨询时直接报价。',
  },
  suitesPage: {
    intro: {
      p1Pre: '在拉普兰,「套房」涵盖两种截然不同的建筑思路,都值得了解。第一种是',
      designerSuite: '设计师套房',
      p1Mid: ',由芬兰一流事务所(Studio Puisto、ALA、Avanto)围绕一处景致打造的单卧空间。第二种是',
      glassRoof: '玻璃屋顶小屋',
      p1Post: ',天顶本身才是主角。两者皆列于下方。',
    },
    conciergeTitle: '两间套房同订,还是整层私享?',
    conciergeBody: '其中数处物业会在淡旺交替的周次开放整层多套房供独享使用。请告知您的日期与人数。',
  },
  destinationsPage: {
    destinationLabel: (i) => `目的地 0${i + 1}`,
    readTheProfile: (name) => `阅读${name}介绍`,
  },
  destinationPage: {
    backLink: '目的地',
    eyebrow: '目的地 · 芬兰拉普兰',
    arrival: '抵达',
    aurora: '极光',
    highlights: '亮点',
    villasHere: (n) => (n === 1 ? '此目的地有一座别墅。' : `此目的地有 ${n} 座别墅。`),
    villasHereH2: (n) => (n === 1 ? '此目的地有一座别墅。' : `此目的地有 ${n} 座别墅。`),
    fullCollection: '完整精选',
    conciergeTitle: (name) => `规划一次私人的${name}之旅。`,
    conciergeBody: '发送日期、人数与任何偏好(私人主厨、直升机抵达、独享使用)。我们将在一个工作日内回复一份推荐名单。',
  },
  experiencesPage: {
    sections: {
      aurora: { title: '极光', intro: '极光本身是免费的。这里提供的是「门径」, 合适的车辆、合适的向导,以及合适云隙下的合适夜晚。' },
      wilderness: { title: '荒野', intro: '众人专程来拉普兰追寻的体验,哈士奇、雪地摩托、驯鹿,的私人版本,没有拼团巴士,也没有环线套路。' },
      culinary: { title: '美食', intro: '一位活跃于拉普兰认真厨房的主厨,在您的别墅里为您操办一晚,或当厨房本身就是您前来的理由时,在物业内品味套餐。' },
      arrival: { title: '抵达', intro: '私人飞机、直升机接送、北极规格的地面车辆。依时段、日照窗口与别墅入住时间安排。' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: '太阳不落山的天数' },
      { value: '24小时', label: '峰值日照, 6月21日' },
      { value: '+18°C', label: '六月下旬平均日间气温' },
      { value: '50%', label: '需求低于极光季' },
    ],
    fourReasons: '四个理由',
    h2: '夏天的拉普兰,是另一个地方。',
    reasons: [
      { title: '建筑换了气质。', body: '原为极光而设的玻璃屋顶,如今框住一轮不落的太阳。光洒床头,日照湖面,无需拉上窗帘,因为没有夜晚可供躲藏。' },
      { title: '荒野变得可达。', body: '湖泊解冻,北方针叶林敞开,独木舟航线浮现。二月里靠雪地摩托才能抵达的同一座别墅,如今从码头乘船五分钟即到。' },
      { title: 'reserve 别墅开放了。', body: '湖畔的私人原木庄园与建筑师木屋会释出当年余下的日程。这 32 天窗口,是一年里私人主厨与直升机包机按淡旺交替价报价的唯一时段。' },
      { title: '没有排队,没有邻居。', body: '夏天拉普兰的访客密度只是冬季的零头。穿林的步道、山岭上的观景点,几乎尽归您一人。' },
    ],
    summerCollection: {
      eyebrow: '夏季精选',
      h2: '四种别墅气质,沐于夏光之中。',
      lede: '与冬季精选相同的建筑类别,玻璃屋顶小屋、湖畔原木庄园、高山木屋、林间别墅,拍摄于六月下旬的午夜阳光下,呈现故事的后半段。',
      cards: [
        { title: '绿意中的玻璃屋顶小屋', copy: '极光建筑沐于晚上23点的金色光线里,四周是葱郁森林而非积雪。' },
        { title: '湖畔原木庄园', copy: '伊纳里湖上的私人湾区已解冻,码头停着独木舟,柴火桑拿升起袅袅炊烟。' },
        { title: '山岭上的设计师木屋', copy: '羊胡子草与野花取代了滑雪道,同样的全景玻璃立面。' },
        { title: '现代林间别墅', copy: '悬挑的木结构建筑深藏于翠绿的北方松林,立面映着午夜阳光的金色暖意。' },
      ],
    },
    planning: {
      h2: '关于规划午夜阳光之旅的几句提醒。',
      p1: '这 32 天窗口很短,而别墅皆为个人所有,因此日程是见缝插针地填满,而非均匀分布。礼宾每年夏天都会在 reserve 庄园中预留少量配额。',
      p2: '若想咨询某一年的六月,最佳时机是该年的一月至三月。之后再来咨询同样值得,总会有释出,但顶级房源往往更早被订走。',
      quoting: '目前受理 2026 与 2027 年夏季报价',
    },
    conciergeTitle: '咨询一次午夜阳光之旅。',
    conciergeBody: '发送日期、人数与任何偏好。一个工作日内即可收到回复,附上整个夏季精选的空房情况,包括未公开列出的 reserve 别墅。',
  },
  conciergePage: {
    eyebrow: '咨询表单',
    h2: '告诉我们您所设想的。',
    intro: '五个简短栏目。偏好与限制越具体,名单就越实用。姓名与邮箱皆可不填,回复将发往信息来源的那个地址。',
    fields: {
      headcount: '人数',
      tripIntent: '旅程类型',
      budget: '每晚预算参考',
      datesLabel: '日期(或时间段)',
      datesHint: '例如「2月14–21日」或「三月上半月,5晚」',
      datesPlaceholder: '可选填',
      messageLabel: '任何特别需求',
      messageHint: '私人主厨、直升机抵达、独享使用、无障碍设施、饮食、摄影侧重,凡是会影响名单的,都请写下。',
      nameLabel: '姓名(选填)',
      namePlaceholder: '留空即匿名',
      emailLabel: '回复邮箱',
      emailHint: '留空则回复至您本人的发件地址。',
      emailPlaceholder: '选填',
    },
    options: {
      headcount: ['1–2 位宾客', '3–4 位宾客', '5–6 位宾客', '7–10 位宾客', '更大团体'],
      intent: ['极光季,初次到访', '极光季,再度到访', '午夜阳光(6–7月)', '圣诞 / 新年', '家庭出行', '私人庆典', '蜜月 / 二人静修', '其他,请在信息中说明'],
      budget: ['每晚 €1,000 以下', '每晚 €1,000 – €2,500', '每晚 €2,500 – €5,000', '每晚 €5,000 以上', 'Reserve 物业,独享使用', '不便透露'],
    },
    submit: '发送私人咨询',
    sending: '发送中…',
    successH2: '咨询已收到。',
    successBody: '我们将在一个工作日内回复。若您想直接联系,也可发邮件至',
    successFollowUp: '。',
    errorFallback: '您也可以直接发邮件至',
    fallbackNotice: '正在打开您的邮件客户端以直接发送咨询。',
    fineprint: '提交内容经加密连接转发至芬兰一个私人收件箱。不经任何第三方 CRM,信息正文也不附带广告归因。',
    trustStrip: [
      { title: '匿名', body: '姓名与邮箱皆可不填。咨询经加密表单发往单一收件箱。' },
      { title: 'private@laplandvibes.com', body: '周一至周五查看。一个工作日内回复,由芬兰的真人执笔。' },
      { title: '默认低调', body: '不经第三方 CRM,不共享日历。每份名单都为各自的咨询私下拟定。' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: '这份精选为何存在',
        paragraphs: [
          '拉普兰的奢华住宿是个小圈子。同样那几座别墅和数十间套房出现在每个预订平台上,往往配着同一批图库照片和同样含糊的价格区间。那些已经走过显而易见之选的旅客,开始以更具体的方式打听拉普兰:你真正会订哪座别墅,九口之家该安排在哪儿,那个无人着墨的地方又在哪里?',
          '本站正是对这些问题的一份简短而审慎的回答,一份精心挑选的清单,收录我们认为值得专程前往的别墅与套房。',
        ],
      },
      {
        title: '本站不做的事',
        paragraphs: [
          '我们不运营这些别墅,也不是预订代理。这里没有目录,也无意建立目录,精选刻意保持小而精。',
          '我们保持独立。当某处物业可在线预订时,我们会链接到它的公开房源,例如经由 Hotels.com;这些链接可能为我们带来一笔小额佣金,而您无需额外付费,且它们绝不影响我们推荐哪些别墅。物业无法付费换取展示。',
        ],
      },
      {
        title: '由谁运营',
        paragraphs: [
          {
            type: 'link',
            pre: '一支立足芬兰的小团队,同时也运营 ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ' 生态,一个编辑枢纽与一个拉普兰旅行网站网络。本站正是这项工作中,专注于拉普兰最具特色的别墅与套房的那一部分。',
          },
          '咨询都汇入同一个收件箱,由真人亲自回复,没有聊天机器人,也没有外包的客服中心。若某项请求并不适合这份精选(团体过大,或目的地不在我们的覆盖范围内),我们会坦诚相告,并尽可能为您指引更合适的去处。',
        ],
      },
      {
        title: '两类我们不承接的旅程',
        paragraphs: [
          '逾三十位宾客的婚礼,以及为品牌活动整座包下物业,都超出了这些物业所为之而建的用途。我们乐于为您引荐能把这类活动办得妥帖的运营方。',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: '精选系列',
    bedroom: '间卧室',
    bedrooms: '间卧室',
    sleeps: '可住',
    fromPerNight: '起 / 每晚',
    nightlyHint: '淡季参考价。实际每晚价格取决于日期、入住天数与所含内容。',
    rate: '价格',
    onRequest: '应需报价',
    reserveHint: 'Reserve 物业,咨询时私下报价,绝不出现在公开房源上。',
    beginInquiry: '开始私人咨询',
    viewRates: '查看公开价格',
    orSendInquiry: '或发送私人咨询',
    signatureEyebrow: '标志性细节',
    signatureH2: '六处您抵达时即可亲自验证的细节。',
    destinationEyebrow: '目的地',
    readProfile: (name) => `阅读${name}介绍 →`,
    conciergeTitle: (dest) => `开始一次${dest}咨询。`,
    conciergeBody: '发送日期、人数与偏好。一个工作日内即可收到回复,附上空房情况、实际每晚价格,以及任何值得与这座别墅搭配的 reserve 别墅。',
    alsoEyebrow: '精选中的其他别墅',
    alsoH2: '另外三座值得考虑的别墅。',
  },
  notFound: {
    eyebrow: '错误',
    body: '该页面不属于本精选。别墅、套房与目的地列于下方。',
    home: '首页',
    collection: '精选系列',
  },
  contactPage: {
    seoTitle: '联系我们 · LaplandLuxuryVillas',
    seoDescription: '唯一的私人邮箱:private@laplandvibes.com。由芬兰拉普兰的 Lapeso Oy 运营。媒体、合作与直接洽谈联系方式见下方。',
    eyebrow: '联系我们',
    h1: '一个邮箱,一家运营方。',
    cards: {
      private: {
        eyebrow: '私人咨询',
        body: '匿名行程规划、别墅入选清单、直签房价咨询。我们将在一个工作日内回复。',
      },
      press: {
        eyebrow: '媒体与合作',
        body: '编辑采访请求、来自物业的合作提案、记者咨询。',
      },
      deals: {
        eyebrow: '直接洽谈(物业)',
        body: '欢迎希望入选本精选的别墅业主与运营方。我们会婉拒大多数申请,请先阅读“关于”页面。',
      },
      general: {
        eyebrow: '一般与编辑事务',
        body: '其他任何事宜。回复较 private@ 慢;行程规划请使用上方的礼宾邮箱。',
      },
    },
    privateCta: '发送私人咨询',
    operatorEyebrow: '运营方',
    location: '芬兰拉普兰,在芬兰注册的公司。',
    aboutPre: '有关 LaplandVibes 生态体系的更多背景,请参阅',
    aboutLabel: '关于',
    aboutPost: '页面。',
  },
  footerNote:
    '一份在芬兰拉普兰精心甄选的私人精选,最近一次复核于 2026 年 5 月。部分预订会带来联盟佣金,但绝不影响推荐哪些别墅。Reserve 与仅限礼宾的物业分文不付。',
  footerPillars: [
    { name: '精选系列', href: '/villas' },
    { name: '设计师套房', href: '/suites' },
    { name: '目的地', href: '/destinations' },
    { name: '体验', href: '/experiences' },
    { name: '午夜阳光', href: '/midnight-sun' },
    { name: '私人礼宾', href: '/concierge' },
  ],
}



// ─── KO / FR / IT / NL, chrome overlays on EN fallback ───────────────────
const ko: SiteCopy = {
  nav: {
    villas: '빌라', suites: '스위트', destinations: '여행지', experiences: '체험',
    midnightSun: '백야', about: '소개', privateInquiry: '비공개 문의',
    openMenu: '메뉴 열기', closeMenu: '메뉴 닫기',
  },
  cta: {
    browseCollection: '컬렉션 보기',
    beginPrivateInquiry: '비공개 문의 시작',
    fullCollection: '전체 컬렉션',
    readProfile: '프로필 보기',
    inquire: '문의하기',
    viewRates: '요금 보기',
    viewOptions: '옵션 보기',
    viewPublicRates: '공개 요금 보기',
    orSendPrivateInquiry: '또는 비공개 문의를 보내세요',
    seeTheCollection: '컬렉션 보기',
    inquireAboutJune: '6월 일정 문의',
    inquireAboutJuneShort: '6월 문의',
    seeSummerCollection: '여름 컬렉션 보기',
    fullVillaCollection: '전체 빌라 컬렉션',
    sendPrivateInquiry: '비공개 문의 보내기',
    sendAnother: '다른 문의 보내기',
    home: '홈',
    theCollection: '컬렉션',
    sending: '보내는 중…',
    subscribe: '구독',
    subscribed: '구독 완료',
  },
  badges: {
    onRequest: '요청 시 안내',
    fromPerNight: '1박 기준 ~',
    fromPerPerson: '1인 기준 ~',
    fromPerGroup: '그룹 기준 ~',
    rate: '요금',
    bedroom: '베드룸',
    bedrooms: '베드룸',
    sleeps: '수용 인원',
    arrival: '도착',
    aurora: '오로라',
    highlights: '하이라이트',
    villas: (n) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    villasIn: (name) => `${name}의 빌라`,
    villasInH2: (n, _name) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    alsoInCollection: '컬렉션의 다른 빌라',
    threeOthers: '함께 고려해 볼 만한 다른 빌라 3채.',
    signatureDetails: '시그니처 디테일',
    sixVerifyOnArrival: '도착하셔서 직접 확인하실 수 있는 여섯 가지.',
    theDestination: '여행지',
    fullCollectionShort: '전체 컬렉션',
  },
  tier: {
    signature: '시그니처',
    private: '프라이빗 컬렉션',
    reserve: 'Reserve · 컨시어지 전용',
  },
  category: {
    'glass-roof': '글래스 루프 빌라',
    'log-estate': '프라이빗 통나무 저택',
    'designer-suite': '디자이너 스위트',
    'alpine-chalet': '알파인 샬레',
    'lakeside-retreat': '호숫가 리트리트',
  },
  concierge: {
    eyebrow: '프라이빗 컨시어지',
    defaultTitle: '라플란드 여행을 더 차분하게 준비하는 방법.',
    defaultBody: '선호 사항, 날짜, 인원을 한 통의 메시지로 보내 주세요. 컨시어지가 영업일 기준 하루 안에 비공개 추천 목록과 함께 답장해 드립니다. 공개 프로필도, 공유 캘린더도 없습니다.',
    inquireBtn: '비공개 문의',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: '익명 여행 설계',
      reply: '영업일 기준 하루 내 답장',
      rates: '요청 시 직접 요금 안내',
    },
  },
  midnightSunBand: {
    eyebrow: '6월 6일 – 7월 7일',
    h2: '같은 빌라, 끊기지 않는 빛 속의 32일.',
    body: '건축은 그대로, 계절만 바뀝니다. 글래스 루프는 지지 않는 태양을 향한 천창이 되고, 호수는 녹고, 숲은 클라우드베리로 가득 찹니다. 겨울의 절반에 불과한 수요, 그리고 프라이빗 셰프, 헬리콥터 전세기, reserve 빌라가 그해 남은 일정을 여는 한 해의 유일한 창입니다.',
    primary: '여름 컬렉션 보기',
    secondary: '6월 일정 문의',
  },
  newsletter: {
    eyebrow: '#LaplandVibes 뉴스레터',
    h2: '빌라가 새 날짜를 열거나 비공개로 풀린 객실 소식을 접했을 때만 조용히 알려 드립니다.',
    lede: '직접 요금. 막판에 나온 컨시어지 자리. 새 달이 뜨기 한 주 전의 오로라 관측 창 예보. 스팸은 없습니다, 핀란드에서 직접 쓰고, 전할 만한 구체적인 소식이 있을 때만 보냅니다.',
    emailPlaceholder: 'your@email.com',
    footnote: '클릭 한 번으로 구독 해지.',
    welcome: '환영합니다. 첫 소식은 일주일 안에 도착합니다.',
    already: '이미 목록에 계십니다, 다음 소식에서 뵙겠습니다.',
    invalidEmail: '이메일 주소가 올바르지 않은 것 같습니다.',
    networkError: '네트워크 오류입니다. 다시 시도해 주세요.',
    genericError: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  },
  affiliateDisclosure: {
    compact: '제휴 링크, 예약하시면 추가 비용 없이 저희가 소액의 수수료를 받습니다.',
    full: '이 페이지에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 추가 비용 없이 LaplandLuxuryVillas가 수수료를 받을 수 있습니다.',
  },
  hero: {
    home: {
      eyebrow: '프라이빗 컬렉션',
      title: '핀란드 라플란드, 조용히, 시장의 최상단에서.',
      lede: '라플란드 곳곳의 프라이빗 럭셔리 빌라를 손수 고른 작은 컬렉션, 컨시어지가 응대하며, 요금은 요청 시 안내합니다.',
      primary: '컬렉션 보기', secondary: '비공개 문의',
    },
    villas: {
      eyebrow: '컬렉션',
      title: '빌라 9채. 여행지 5곳. 한 번의 비공개 문의.',
      lede: '아래의 모든 숙소는 운영사가 공개한 정보와 최근 투숙객 후기를 바탕으로 검증했습니다. 원하시는 건물 유형으로 필터링하시거나, 비공개 문의를 보내시면 날짜에 맞춰 추천 목록을 만들어 드립니다.',
    },
    suites: {
      eyebrow: '디자이너 스위트',
      title: '빌라까지는 필요 없지만, 그 글래스 루프만은 포기할 수 없을 때.',
      lede: '건축 그 자체가 경험이 되는 원베드룸 스위트와 오로라 캐빈의 짧은 목록. 인원은 줄이고, 파노라마 천장은 그대로.',
    },
    destinations: {
      eyebrow: '여행지',
      title: '다섯 곳, 저마다 그곳이어야 할 분명한 이유가 있습니다.',
      lede: '라플란드는 어디나 같지 않습니다. 북극권에서 북쪽으로 50km씩 올라갈 때마다 오로라 빈도, 도착 동선, 숙소 밀도가 뚜렷이 달라집니다.',
    },
    experiences: {
      eyebrow: '맞춤 체험',
      title: '유리 아래의 밤, 그 전에 보내는 하루.',
      lede: '빌라와 함께 엮는 여덟 가지 프라이빗 체험, 각각 날씨 창, 일조 시간, 빌라 체크인 시각에 맞춰 예약합니다.',
    },
    midnightSun: {
      eyebrow: '6월 6일 – 7월 7일',
      title: '해가 지지 않는 32일의 창.',
      lede: '백야의 계절에 머무는 바로 그 빌라들, 손님은 더 적고, 끝없는 빛은 더 부드럽습니다.',
      primary: '6월 일정 문의', secondary: '컬렉션 보기',
    },
    concierge: {
      eyebrow: '프라이빗 컨시어지',
      title: '한 통의 비공개 메시지, 한 건의 엄선된 추천 목록.',
      lede: '날짜, 인원, 그리고 마음에 두신 여행의 성격을 보내 주세요. 영업일 기준 하루 안에 답장해 드립니다, 잘 맞는 경우에는 공개되지 않는 reserve 빌라도 함께 제안합니다.',
    },
    about: {
      eyebrow: '소개',
      title: '일부러 짧게 유지하는 짧은 목록.',
      lede: '라플란드 최고의 빌라와 스위트를 모은 프라이빗 컬렉션, 익명 컨시어지, 가능한 곳에서는 직접 요금, 그 사이에 어떤 플랫폼도 두지 않습니다.',
    },
  },
  home: {
    philosophy: {
      eyebrow: '일하는 방식',
      h2: '예약 플랫폼의 정반대.',
      items: [
        { title: '디렉터리가 아닌 짧은 목록.', body: '여정을 떠날 만한 이유가 분명한 여행지에 자리한 빌라와 스위트 9채. 추가하기보다 거절하는 일이 더 많습니다, 이 페이지의 모든 항목은 안목 있는 여행자가 망설임 없이 예약할 수 있는 곳입니다.' },
        { title: '익명 여행 설계.', body: '하나의 비공개 받은편지함뿐, 공개 프로필도 제3자와 공유하는 캘린더도 없습니다. 날짜, 인원, 선호 사항을 보내시면 영업일 기준 하루 안에 엄선된 추천 목록을 받아 보십니다.' },
        { title: '가능한 곳에서는 직접 요금.', body: '공개 매물은 검증된 요금으로 연결됩니다. 비공개로 보유한 물건, 공개 예약이 없는 reserve 빌라 포함, 은 직접 견적을 드립니다. 답장에서 어느 쪽인지 분명히 알려 드립니다.' },
      ],
    },
    signature: {
      eyebrow: '시그니처 빌라',
      h2: '라플란드 컬렉션을 떠받치는 네 곳.',
      lede: '가장 자주 추천하는 숙소들입니다. 아래의 모든 디테일은 운영사 공식 정보와 최근 후기로 확인한 것이며, 브로슈어에서 옮긴 것이 아닙니다.',
    },
    destinations: {
      eyebrow: '여행지',
      h2: '다섯 곳, 저마다 분명한 이유가 있습니다.',
    },
  },
  villasPage: {
    filters: { all: '전체', glassRoof: '글래스 루프', logEstate: '통나무 저택', designerSuite: '디자이너 스위트', alpineChalet: '알파인 샬레', lakeside: '호숫가' },
    noVillas: '아직 이 카테고리에는 빌라가 없습니다.',
    conciergeTitle: '딱 맞는 곳을 못 찾으셨나요?',
    conciergeBody: '위 컬렉션은 현재 공개된 물건입니다. 추가 빌라는 비공개로 보유하고 있으며, 공개 매물이 없는 reserve 물건을 포함해, 문의 시 직접 견적을 드립니다.',
  },
  suitesPage: {
    intro: {
      p1Pre: '라플란드에서 「스위트」는 알아 둘 만한 두 가지 서로 다른 건축적 접근을 아우릅니다. 첫째는 ',
      designerSuite: '디자이너 스위트',
      p1Mid: '입니다. 핀란드의 손꼽히는 스튜디오(Studio Puisto, ALA, Avanto)가 단 하나의 풍경을 중심으로 원베드룸을 지은 곳이죠. 둘째는 ',
      glassRoof: '글래스 루프 캐빈',
      p1Post: '으로, 천장 그 자체가 주인공인 건축입니다. 둘 다 아래에 정리해 두었습니다.',
    },
    conciergeTitle: '스위트 두 개 예약, 아니면 프라이빗 한 개 층?',
    conciergeBody: '이 가운데 몇몇 물건은 비수기 사이 주간에 여러 스위트로 이루어진 한 개 층을 단독 사용으로 엽니다. 날짜와 인원을 알려 주세요.',
  },
  destinationsPage: {
    destinationLabel: (i) => `여행지 0${i + 1}`,
    readTheProfile: (name) => `${name} 프로필 보기`,
  },
  destinationPage: {
    backLink: '여행지',
    eyebrow: '여행지 · 핀란드 라플란드',
    arrival: '도착',
    aurora: '오로라',
    highlights: '하이라이트',
    villasHere: (n) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    villasHereH2: (n) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    fullCollection: '전체 컬렉션',
    conciergeTitle: (name) => `프라이빗 ${name} 여행을 설계해 보세요.`,
    conciergeBody: '날짜, 인원, 그리고 모든 선호 사항(프라이빗 셰프, 헬리콥터 도착, 단독 사용)을 보내 주세요. 영업일 기준 하루 안에 추천 목록과 함께 답장해 드립니다.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: '오로라', intro: '오로라 자체는 무료입니다. 여기서 제공하는 것은 접근입니다, 알맞은 차량, 알맞은 가이드, 그리고 알맞은 구름 사이로 맞이하는 알맞은 밤.' },
      wilderness: { title: '야생', intro: '모두가 라플란드를 찾는 이유인 체험, 허스키, 스노모빌, 순록, 의 프라이빗 버전. 합승 버스도, 순환 코스도 없습니다.' },
      culinary: { title: '미식', intro: '라플란드의 진지한 주방에서 활동하는 현역 셰프를 빌라로 모셔 보내는 하룻저녁, 또는 주방 그 자체가 방문의 이유가 되는 곳에서의 온프로퍼티 테이스팅 메뉴.' },
      arrival: { title: '도착', intro: '프라이빗 제트기, 헬리콥터 이동, 북극 사양 지상 차량. 시간대, 일조 창, 빌라 체크인에 맞춰 예약합니다.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: '해가 지지 않는 날수' },
      { value: '24시간', label: '절정의 일조, 6월 21일' },
      { value: '+18°C', label: '6월 말 평균 낮 기온' },
      { value: '50%', label: '오로라 시즌보다 낮은 수요' },
    ],
    fourReasons: '네 가지 이유',
    h2: '여름의 라플란드는 전혀 다른 곳입니다.',
    reasons: [
      { title: '건축의 표정이 바뀝니다.', body: '오로라를 위해 만든 글래스 루프가 이제는 끊기지 않는 태양을 담아냅니다. 침대 위로 쏟아지는 빛, 호수 위의 햇살, 커튼을 칠 필요도 없습니다, 숨길 밤이 없으니까요.' },
      { title: '야생이 가까워집니다.', body: '호수가 녹고, 한대림이 열리고, 카누 루트가 드러납니다. 2월에 스노모빌로 닿던 그 빌라가 이제는 선착장에서 배로 5분 거리입니다.' },
      { title: 'reserve 빌라가 열립니다.', body: '호숫가 프라이빗 통나무 저택, 건축가의 샬레가 그해 남은 일정을 엽니다. 이 32일의 창은 프라이빗 셰프와 헬리콥터 전세기가 비수기 사이 요금을 제시하는 한 해의 유일한 시기입니다.' },
      { title: '줄도, 이웃도 없습니다.', body: '여름의 라플란드는 겨울 방문객 밀도의 극히 일부만을 맞이합니다. 숲을 가로지르는 오솔길, 펠 위의 전망대, 사실상 당신만의 것입니다.' },
    ],
    summerCollection: {
      eyebrow: '여름 컬렉션',
      h2: '네 가지 빌라의 성격, 여름빛 속에서.',
      lede: '겨울 컬렉션과 같은 건축 카테고리, 글래스 루프 캐빈, 호숫가 통나무 저택, 알파인 샬레, 숲속 빌라, 를 6월 말 백야의 빛으로 촬영해 이야기의 후반부를 보여 드립니다.',
      cards: [
        { title: '초록 속의 글래스 루프 캐빈', copy: '오로라의 건축을 23시의 황금빛 속에서, 눈 대신 무성한 숲에 둘러싸여.' },
        { title: '호숫가 통나무 저택', copy: '얼음이 풀린 이나리 호수의 프라이빗 만, 선착장의 카누, 장작 사우나에서 피어오르는 연기.' },
        { title: '펠 위의 디자이너 샬레', copy: '스키 슬로프 대신 황새풀과 들꽃, 파노라마 유리 파사드는 그대로.' },
        { title: '모던 숲속 빌라', copy: '초록빛 한대림 깊숙이 뻗은 캔틸레버 목조 건물, 파사드에 내려앉은 백야의 황금빛 온기.' },
      ],
    },
    planning: {
      h2: '백야 여행 계획에 관한 한 가지 안내.',
      p1: '32일의 창은 짧고 빌라는 개인 소유이기에, 캘린더는 고르게가 아니라 기회가 닿는 대로 채워집니다. 컨시어지는 매년 여름 reserve 저택에 소량의 배정분을 확보해 둡니다.',
      p2: '특정 해의 6월을 문의하기 좋은 시기는 그해 1월에서 3월 사이입니다. 그 이후의 문의도 보낼 가치가 있습니다, 빈자리가 나기도 하니까요, 다만 상위 인벤토리는 더 일찍 빠지는 경우가 많습니다.',
      quoting: '현재 2026년 및 2027년 여름 견적을 받고 있습니다',
    },
    conciergeTitle: '백야 여행을 문의해 보세요.',
    conciergeBody: '날짜, 인원, 그리고 모든 선호 사항을 보내 주세요. 영업일 기준 하루 안에 여름 컬렉션 전체의 예약 가능 여부와 함께 답장해 드립니다, 공개되지 않은 reserve 빌라도 포함됩니다.',
  },
  conciergePage: {
    eyebrow: '문의 양식',
    h2: '머릿속에 그리고 계신 그림을 들려주세요.',
    intro: '짧은 항목 다섯 개입니다. 선호와 조건이 구체적일수록 추천 목록은 더 유용해집니다. 이름과 이메일은 선택입니다, 답장은 메시지가 온 주소로 보내 드립니다.',
    fields: {
      headcount: '인원',
      tripIntent: '여행 목적',
      budget: '1박 예산 가이드',
      datesLabel: '날짜(또는 기간)',
      datesHint: "예: '2월 14–21일' 또는 '3월 전반, 5박'",
      datesPlaceholder: '선택',
      messageLabel: '특별히 원하시는 점',
      messageHint: '프라이빗 셰프, 헬리콥터 도착, 단독 사용, 접근성, 식이, 사진 촬영 중심, 추천 목록에 반영할 점이라면 무엇이든.',
      nameLabel: '이름(선택)',
      namePlaceholder: '비워 두시면 익명',
      emailLabel: '회신 이메일',
      emailHint: '비워 두시면 보내신 주소로 답장이 갑니다.',
      emailPlaceholder: '선택',
    },
    options: {
      headcount: ['1–2명', '3–4명', '5–6명', '7–10명', '더 큰 그룹'],
      intent: ['오로라 시즌, 첫 방문', '오로라 시즌, 재방문', '백야(6–7월)', '크리스마스 / 새해', '가족 여행', '프라이빗 기념일', '허니문 / 두 사람의 리트리트', '기타, 메시지에 설명'],
      budget: ['1박 €1,000 미만', '1박 €1,000 – €2,500', '1박 €2,500 – €5,000', '1박 €5,000 이상', 'Reserve 물건, 단독 사용', '밝히지 않음'],
    },
    submit: '비공개 문의 보내기',
    sending: '보내는 중…',
    successH2: '문의가 접수되었습니다.',
    successBody: '영업일 기준 하루 안에 답장이 도착합니다. 직접 연락하고 싶으시면 다음 주소로도 연락하실 수 있습니다',
    successFollowUp: '.',
    errorFallback: '다음 주소로 직접 이메일을 보내실 수도 있습니다',
    fallbackNotice: '문의를 직접 보내실 수 있도록 메일 클라이언트를 엽니다.',
    fineprint: '제출 내용은 암호화된 연결을 통해 핀란드의 단일 비공개 받은편지함으로 전달됩니다. 제3자 CRM도, 메시지 본문에 대한 광고 어트리뷰션도 없습니다.',
    trustStrip: [
      { title: '익명', body: '이름과 이메일은 선택입니다. 문의는 암호화된 양식을 통해 단일 받은편지함으로 전송됩니다.' },
      { title: 'private@laplandvibes.com', body: '월–금 확인. 영업일 기준 하루 안에, 핀란드에 있는 사람이 직접 쓴 답장을 보내 드립니다.' },
      { title: '기본은 신중하게', body: '제3자 CRM도, 공유 캘린더도 없습니다. 추천 목록은 문의마다 비공개로 작성됩니다.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: '이 컬렉션이 존재하는 이유',
        paragraphs: [
          '라플란드의 럭셔리 숙소는 좁은 세계입니다. 같은 몇 채의 빌라와 수십 곳의 스위트가 모든 예약 플랫폼에 등장합니다, 흔히 같은 스톡 사진과 똑같이 모호한 가격대를 달고서. 뻔한 여행은 이미 다녀온 여행자들은 라플란드를 더 구체적으로 묻기 시작합니다. 당신이라면 실제로 어느 빌라를 예약하겠는가, 아홉 식구는 어디에 묵게 하겠는가, 아무도 쓰지 않는 그곳은 어디인가.',
          '이 사이트는 그 질문들에 대한 짧고 신중한 답입니다, 여정을 떠날 만하다고 우리가 믿는 빌라와 스위트를 손수 골라 추린 목록입니다.',
        ],
      },
      {
        title: '이 사이트가 하지 않는 일',
        paragraphs: [
          '우리는 빌라를 운영하지 않으며 예약 대행사도 아닙니다. 이곳에는 디렉터리가 없고, 만들 계획도 없습니다, 컬렉션은 의도적으로 작게 유지합니다.',
          '우리는 독립적입니다. 온라인으로 예약할 수 있는 숙소의 경우 그 공개 매물로 연결합니다. 예를 들어 Hotels.com을 통해서입니다. 이러한 링크는 추가 비용 없이 우리에게 소액의 수수료를 안겨 줄 수 있으나, 어느 빌라를 추천할지에는 결코 영향을 주지 않습니다. 숙소는 비용을 지불하고 소개될 수 없습니다.',
        ],
      },
      {
        title: '누가 운영하는가',
        paragraphs: [
          {
            type: 'link',
            pre: '핀란드에 기반을 둔 작은 팀으로, ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ' 생태계, 편집 허브와 라플란드 여행 사이트 네트워크, 도 함께 운영합니다. 이 사이트는 그 작업 가운데 라플란드의 가장 개성 있는 빌라와 스위트에 집중하는 부분입니다.',
          },
          '문의는 하나의 받은편지함으로 모이며 사람이 직접 답합니다, 챗봇도, 외주 콜센터도 없습니다. 요청이 이 컬렉션에 맞지 않으면(인원이 너무 많거나, 우리가 다루지 않는 여행지인 경우) 솔직하게 말씀드리고, 가능한 경우 더 나은 곳을 안내해 드립니다.',
        ],
      },
      {
        title: '받지 않는 두 가지 여행',
        paragraphs: [
          '서른 명을 넘는 하객의 결혼식, 그리고 브랜드 행사를 위해 숙소 전체를 빌리는 일은 이 숙소들이 지어진 목적의 밖에 있습니다. 그런 행사를 제대로 다루는 운영자를 기꺼이 소개해 드립니다.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: '컬렉션',
    bedroom: '베드룸',
    bedrooms: '베드룸',
    sleeps: '수용 인원',
    fromPerNight: '1박 기준 ~',
    nightlyHint: '비수기 가이드 요금입니다. 실제 1박 요금은 날짜, 숙박 일수, 포함 사항에 따라 달라집니다.',
    rate: '요금',
    onRequest: '요청 시 안내',
    reserveHint: 'Reserve 물건, 문의 시 비공개로 견적을 드리며, 공개 매물에는 올리지 않습니다.',
    beginInquiry: '비공개 문의 시작',
    viewRates: '공개 요금 보기',
    orSendInquiry: '또는 비공개 문의를 보내세요',
    signatureEyebrow: '시그니처 디테일',
    signatureH2: '도착하셔서 직접 확인하실 수 있는 여섯 가지.',
    destinationEyebrow: '여행지',
    readProfile: (name) => `${name} 프로필 보기 →`,
    conciergeTitle: (dest) => `${dest} 문의를 시작하세요.`,
    conciergeBody: '날짜, 인원, 선호 사항을 보내 주세요. 영업일 기준 하루 안에 예약 가능 여부, 실제 1박 요금, 그리고 이 빌라와 함께 고려할 만한 reserve 빌라와 함께 답장해 드립니다.',
    alsoEyebrow: '컬렉션의 다른 빌라',
    alsoH2: '함께 고려해 볼 만한 다른 빌라 3채.',
  },
  notFound: {
    eyebrow: '오류',
    body: '이 페이지는 컬렉션에 포함되어 있지 않습니다. 빌라, 스위트, 여행지는 아래에 정리해 두었습니다.',
    home: '홈',
    collection: '컬렉션',
  },
  contactPage: {
    seoTitle: '문의 · LaplandLuxuryVillas',
    seoDescription: '단일 프라이빗 메일함: private@laplandvibes.com. 핀란드 라플란드의 Lapeso Oy가 운영합니다. 언론·제휴·직접 거래 문의처는 아래에 있습니다.',
    eyebrow: '문의',
    h1: '하나의 메일함, 하나의 운영자.',
    cards: {
      private: {
        eyebrow: '프라이빗 문의',
        body: '익명 여행 계획, 빌라 후보 선정, 직접 요금 문의. 영업일 기준 1일 이내에 답변드립니다.',
      },
      press: {
        eyebrow: '언론 및 제휴',
        body: '편집 관련 요청, 숙소의 제휴 제안, 기자 문의.',
      },
      deals: {
        eyebrow: '직접 거래(숙소)',
        body: '컬렉션에 등재되기를 원하는 빌라 소유주 및 운영자를 위한 창구입니다. 대부분의 제안은 정중히 거절합니다, 먼저 소개 페이지를 읽어 주세요.',
      },
      general: {
        eyebrow: '일반 및 편집',
        body: '그 밖의 모든 문의. private@ 보다 답변이 느립니다. 여행 계획은 위의 컨시어지 메일함을 이용하세요.',
      },
    },
    privateCta: '프라이빗 문의 보내기',
    operatorEyebrow: '운영자',
    location: '핀란드 라플란드, 핀란드에 등록된 회사입니다.',
    aboutPre: 'LaplandVibes 생태계의 더 넓은 맥락은 ',
    aboutLabel: '소개',
    aboutPost: ' 페이지를 참고하세요.',
  },
  footerNote:
    '핀란드 라플란드에서 엄선한 프라이빗 컬렉션, 최종 검토 2026년 5월. 일부 예약은 제휴 수수료의 대상이 되지만, 어떤 빌라를 추천하는지에는 결코 영향을 주지 않습니다. reserve 및 컨시어지 전용 물건은 아무것도 내지 않습니다.',
  footerPillars: [
    { name: '컬렉션', href: '/villas' },
    { name: '디자이너 스위트', href: '/suites' },
    { name: '여행지', href: '/destinations' },
    { name: '체험', href: '/experiences' },
    { name: '백야', href: '/midnight-sun' },
    { name: '프라이빗 컨시어지', href: '/concierge' },
  ],
}

const fr: SiteCopy = {
  nav: {
    villas: 'Villas', suites: 'Suites', destinations: 'Destinations', experiences: 'Expériences',
    midnightSun: 'Soleil de minuit', about: 'À propos', privateInquiry: 'Demande privée',
    openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
  },
  cta: {
    browseCollection: 'Voir la collection',
    beginPrivateInquiry: 'Démarrer une demande privée',
    fullCollection: 'Collection complète',
    readProfile: 'Lire le profil',
    inquire: 'Demander',
    viewRates: 'Voir les tarifs',
    viewOptions: 'Voir les options',
    viewPublicRates: 'Voir les tarifs publics',
    orSendPrivateInquiry: 'Ou envoyez une demande privée',
    seeTheCollection: 'Voir la collection',
    inquireAboutJune: 'Demander les dates de juin',
    inquireAboutJuneShort: 'Demander pour juin',
    seeSummerCollection: 'Voir la collection d’été',
    fullVillaCollection: 'Collection complète de villas',
    sendPrivateInquiry: 'Envoyer une demande privée',
    sendAnother: 'Envoyer une autre demande',
    home: 'Accueil',
    theCollection: 'La collection',
    sending: 'Envoi…',
    subscribe: 'S’abonner',
    subscribed: 'Abonné',
  },
  badges: {
    onRequest: 'Sur demande',
    fromPerNight: 'À partir de / nuit',
    fromPerPerson: 'À partir de / personne',
    fromPerGroup: 'À partir de / groupe',
    rate: 'Tarif',
    bedroom: 'chambre',
    bedrooms: 'chambres',
    sleeps: 'Couchages',
    arrival: 'Arrivée',
    aurora: 'Aurore',
    highlights: 'Points forts',
    villas: (n) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    villasIn: (name) => `Villas à ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    alsoInCollection: 'Également dans la collection',
    threeOthers: 'Trois autres villas à considérer.',
    signatureDetails: 'Détails signature',
    sixVerifyOnArrival: 'Six détails que vous pourrez vérifier à votre arrivée.',
    theDestination: 'La destination',
    fullCollectionShort: 'Collection complète',
  },
  tier: {
    signature: 'Signature',
    private: 'Collection privée',
    reserve: 'Reserve · Conciergerie uniquement',
  },
  category: {
    'glass-roof': 'Villa à toit de verre',
    'log-estate': 'Domaine privé en rondins',
    'designer-suite': 'Suite design',
    'alpine-chalet': 'Chalet alpin',
    'lakeside-retreat': 'Retraite au bord du lac',
  },
  concierge: {
    eyebrow: 'La conciergerie privée',
    defaultTitle: 'Une façon plus sereine de préparer un voyage en Laponie.',
    defaultBody: 'Envoyez un seul message, préférences, dates, nombre de personnes, et notre conciergerie vous répond avec une présélection privée sous un jour ouvré. Aucun profil public, aucun calendrier partagé.',
    inquireBtn: 'Demande privée',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Préparation de voyage anonyme',
      reply: 'Réponse sous un jour ouvré',
      rates: 'Tarifs directs sur demande',
    },
  },
  midnightSunBand: {
    eyebrow: '6 juin – 7 juillet',
    h2: 'Les mêmes villas, dans 32 jours de lumière ininterrompue.',
    body: 'Même architecture, autre saison. Le toit de verre devient une verrière ouverte sur un soleil qui ne se couche jamais, le lac dégèle, la forêt se couvre de mûres arctiques. Moitié moins de demande qu’en hiver, et la seule fenêtre de l’année où chefs privés, vols en hélicoptère et villas reserve ouvrent le reste de leur calendrier.',
    primary: 'Voir la collection d’été',
    secondary: 'Demander les dates de juin',
  },
  newsletter: {
    eyebrow: 'La newsletter #LaplandVibes',
    h2: 'Un message discret quand les villas ouvrent de nouvelles dates et que nous apprenons une disponibilité privée.',
    lede: 'Tarifs directs. Créneaux de conciergerie de dernière minute. Prévisions de la fenêtre d’aurores la semaine précédant chaque nouvelle lune. Aucun spam, écrit en Finlande, envoyé seulement quand il y a quelque chose de concret à dire.',
    emailPlaceholder: 'votre@email.com',
    footnote: 'Désabonnement en un clic.',
    welcome: 'Bienvenue à bord. Le premier message arrive sous une semaine.',
    already: 'Vous êtes déjà sur la liste, à très bientôt pour le prochain message.',
    invalidEmail: 'Cette adresse e-mail semble invalide.',
    networkError: 'Erreur réseau. Veuillez réessayer.',
    genericError: 'Une erreur est survenue. Réessayez dans un instant.',
  },
  affiliateDisclosure: {
    compact: 'Liens affiliés, nous percevons une petite commission sans frais supplémentaires lorsque vous réservez.',
    full: 'Cette page contient des liens affiliés. Si vous réservez via ces liens, LaplandLuxuryVillas peut percevoir une commission sans frais supplémentaires pour vous.',
  },
  hero: {
    home: {
      eyebrow: 'La collection privée',
      title: 'Laponie finlandaise, discrète, au sommet du marché.',
      lede: 'Une petite collection de villas privées de luxe choisies à la main à travers la Laponie, conciergerie dédiée, tarifs sur demande.',
      primary: 'Voir la collection', secondary: 'Demande privée',
    },
    villas: {
      eyebrow: 'La collection',
      title: 'Neuf villas. Cinq destinations. Une demande privée.',
      lede: 'Chaque propriété listée ci-dessous est vérifiée à partir des informations publiées par l\'exploitant et d\'avis récents de voyageurs. Filtrez par type d\'édifice que vous avez en tête, ou envoyez une demande privée et nous composerons une présélection autour de vos dates.',
    },
    suites: {
      eyebrow: 'Suites design',
      title: 'Quand vous n’avez pas besoin d’une villa, mais bien du toit de verre.',
      lede: 'Une courte liste de suites d’une chambre et de cabanes à aurore où l’architecture elle-même est l’expérience. Moins de personnes, le même plafond panoramique.',
    },
    destinations: {
      eyebrow: 'Destinations',
      title: 'Cinq lieux, chacun avec une raison claire d’y être.',
      lede: 'La Laponie n’est pas interchangeable. La fréquence des aurores, la logistique d’arrivée et la densité d’hébergement changent sensiblement tous les 50 km au nord du cercle polaire.',
    },
    experiences: {
      eyebrow: 'Expériences sur mesure',
      title: 'La journée, avant la nuit sous le verre.',
      lede: 'Huit expériences privées que nous associons aux villas, chacune réservée en fonction de la fenêtre météo, des heures de lumière et de l’heure d’arrivée à la villa.',
    },
    midnightSun: {
      eyebrow: '6 juin – 7 juillet',
      title: 'La fenêtre de 32 jours où le soleil ne se couche pas.',
      lede: 'Les mêmes villas, à la saison du soleil de minuit, moins de voyageurs, une lumière infinie et douce.',
      primary: 'Demander les dates de juin', secondary: 'Voir la collection',
    },
    concierge: {
      eyebrow: 'Conciergerie privée',
      title: 'Un message privé, une présélection soignée.',
      lede: 'Envoyez vos dates, le nombre de personnes et le type de voyage que vous imaginez. Nous répondons sous un jour ouvré, y compris, lorsque cela convient, les villas reserve qui n’apparaissent jamais publiquement.',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une liste courte, gardée courte à dessein.',
      lede: 'Une collection privée des plus belles villas et suites de Laponie, conciergerie anonyme, tarifs directs là où ils existent, aucune plateforme entre vous et nous.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Notre façon de travailler',
      h2: 'L’exact opposé d’une plateforme de réservation.',
      items: [
        { title: 'Une liste courte, pas un annuaire.', body: 'Neuf villas et suites dans les destinations qui justifient vraiment le voyage. Nous refusons des propriétés plus souvent que nous n’en ajoutons, chaque entrée de cette page est une que l’on peut réserver sans hésiter.' },
        { title: 'Préparation de voyage anonyme.', body: 'Une seule boîte de réception privée, aucun profil public, aucun calendrier partagé avec des tiers. Envoyez vos dates, le nombre de personnes et vos préférences, recevez une présélection soignée sous un jour ouvré.' },
        { title: 'Tarifs directs, là où ils existent.', body: 'Les annonces publiques renvoient vers des tarifs vérifiés. Les propriétés tenues en privé, y compris les villas reserve sans disponibilité publique, sont chiffrées directement. La réponse vous précise laquelle est laquelle.' },
      ],
    },
    signature: {
      eyebrow: 'Villas signature',
      h2: 'Quatre piliers de la collection lapone.',
      lede: 'Les propriétés que nous recommandons le plus souvent. Chaque détail ci-dessous est vérifié à partir des informations de l\'exploitant et d\'avis récents, jamais recopié d\'une brochure.',
    },
    destinations: {
      eyebrow: 'Destinations',
      h2: 'Cinq lieux, chacun avec une raison claire.',
    },
  },
  villasPage: {
    filters: { all: 'Toutes', glassRoof: 'Toit de verre', logEstate: 'Domaine en rondins', designerSuite: 'Suite design', alpineChalet: 'Chalet alpin', lakeside: 'Au bord du lac' },
    noVillas: 'Aucune villa dans cette catégorie pour l’instant.',
    conciergeTitle: 'Vous ne trouvez pas le bon choix ?',
    conciergeBody: 'La collection ci-dessus correspond à ce qui est publié actuellement. D’autres villas sont tenues en privé, dont des propriétés reserve sans annonce publique, et chiffrées directement sur demande.',
  },
  suitesPage: {
    intro: {
      p1Pre: '« Suite » en Laponie recouvre deux gestes architecturaux distincts, tous deux dignes d’intérêt. Le premier est la ',
      designerSuite: 'suite design',
      p1Mid: ', où un grand studio finlandais (Studio Puisto, ALA, Avanto) a bâti une chambre unique autour d’une vue unique. Le second est la ',
      glassRoof: 'cabane à toit de verre',
      p1Post: ', où le plafond est le détail vedette. Les deux sont listées ci-dessous.',
    },
    conciergeTitle: 'Une réservation de deux suites, ou un étage privé ?',
    conciergeBody: 'Plusieurs de ces propriétés libèrent un étage de plusieurs suites en usage exclusif lors des semaines creuses. Indiquez-nous vos dates et le nombre de personnes.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Destination 0${i + 1}`,
    readTheProfile: (name) => `Lire le profil de ${name}`,
  },
  destinationPage: {
    backLink: 'Destinations',
    eyebrow: 'Destination · Laponie finlandaise',
    arrival: 'Arrivée',
    aurora: 'Aurore',
    highlights: 'Points forts',
    villasHere: (n) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    villasHereH2: (n) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    fullCollection: 'Collection complète',
    conciergeTitle: (name) => `Préparez un voyage privé à ${name}.`,
    conciergeBody: 'Envoyez vos dates, le nombre de personnes et toute préférence (chef privé, arrivée en hélicoptère, usage exclusif). Nous répondons avec une présélection sous un jour ouvré.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurore', intro: 'Les aurores en elles-mêmes sont gratuites. Ce qui se vend ici, c’est l’accès, le bon véhicule, le bon guide et la bonne nuit sous la bonne éclaircie.' },
      wilderness: { title: 'Nature sauvage', intro: 'Les versions privées des expériences pour lesquelles tout le monde vient en Laponie, husky, motoneige, renne, sans le bus partagé ni le circuit en boucle.' },
      culinary: { title: 'Gastronomie', intro: 'Un chef en activité issu de l’une des cuisines sérieuses de Laponie, dans votre villa, le temps d’une soirée, ou le menu dégustation sur place quand la cuisine est la raison de votre venue.' },
      arrival: { title: 'Arrivée', intro: 'Jet privé, transfert en hélicoptère, véhicules terrestres équipés pour l’Arctique. Réservés selon le créneau, la fenêtre de lumière et l’arrivée à la villa.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Jours où le soleil ne se couche pas' },
      { value: '24 h', label: 'Lumière au pic, 21 juin' },
      { value: '+18 °C', label: 'Température diurne moyenne fin juin' },
      { value: '50 %', label: 'Demande inférieure à la saison des aurores' },
    ],
    fourReasons: 'Quatre raisons',
    h2: 'La Laponie en été est un autre lieu.',
    reasons: [
      { title: 'L’architecture change de caractère.', body: 'Les toits de verre conçus pour les aurores encadrent désormais un soleil ininterrompu. Verrière au-dessus du lit, soleil sur le lac, nul besoin de tirer un rideau, il n’y a aucune nuit où se cacher.' },
      { title: 'La nature sauvage devient accessible.', body: 'Les lacs dégèlent, la forêt boréale s’ouvre, les routes de canoë apparaissent. La même villa atteinte en motoneige en février se trouve désormais à cinq minutes de bateau du ponton.' },
      { title: 'Les villas reserve s’ouvrent.', body: 'Les domaines privés en rondins au bord du lac et les chalets d’architecte libèrent le reste de leur calendrier. La fenêtre de 32 jours est le seul moment de l’année où chefs privés et vols en hélicoptère chiffrent à des tarifs de basse saison.' },
      { title: 'Ni files, ni voisins.', body: 'La Laponie en été ne voit qu’une fraction de la densité de visiteurs de l’hiver. Le sentier à travers la forêt, le belvédère sur le fjell, ils sont pour ainsi dire à vous.' },
    ],
    summerCollection: {
      eyebrow: 'La collection d’été',
      h2: 'Quatre caractères de villa, dans la lumière de l’été.',
      lede: 'Les mêmes catégories architecturales que la collection d’hiver, cabanes à toit de verre, domaines en rondins au bord du lac, chalets alpins, villas en forêt, photographiées dans la lumière du soleil de minuit de fin juin pour montrer la seconde moitié de l’histoire.',
      cards: [
        { title: 'Cabane à toit de verre dans la verdure', copy: 'L’architecture des aurores dans la lumière dorée de 23 h, entourée d’une forêt luxuriante plutôt que de neige.' },
        { title: 'Domaine en rondins au bord du lac', copy: 'Baie privée sur le lac Inari dégelée, canoë au ponton, fumée du sauna au feu de bois.' },
        { title: 'Chalet design sur le fjell', copy: 'La linaigrette et les fleurs sauvages remplacent la piste de ski, la même façade panoramique de verre.' },
        { title: 'Villa moderne en forêt', copy: 'Bâtiment de bois en porte-à-faux au cœur du pin boréal vert, chaleur dorée du soleil de minuit sur la façade.' },
      ],
    },
    planning: {
      h2: 'Une note sur la préparation d’un voyage au soleil de minuit.',
      p1: 'La fenêtre de 32 jours est courte et les villas appartiennent à des propriétaires individuels, le calendrier se remplit donc au gré des occasions, pas uniformément. La conciergerie réserve une petite allocation dans les domaines reserve chaque été.',
      p2: 'Le bon moment pour s’enquérir d’un juin donné se situe entre janvier et mars de la même année. Les demandes plus tardives valent tout de même la peine, des libérations surviennent, mais le haut de gamme part souvent plus tôt.',
      quoting: 'Nous chiffrons actuellement les étés 2026 et 2027',
    },
    conciergeTitle: 'Renseignez-vous sur un voyage au soleil de minuit.',
    conciergeBody: 'Envoyez vos dates, le nombre de personnes et toute préférence. Une réponse arrive sous un jour ouvré avec les disponibilités de toute la collection d’été, y compris des villas reserve non listées publiquement.',
  },
  conciergePage: {
    eyebrow: 'Le formulaire de demande',
    h2: 'Dites-nous ce que vous imaginez.',
    intro: 'Cinq champs courts. Plus les préférences et contraintes sont précises, plus la présélection est utile. Le nom et l’e-mail restent facultatifs, les réponses partent vers l’adresse d’où vient le message.',
    fields: {
      headcount: 'Nombre de personnes',
      tripIntent: 'Type de voyage',
      budget: 'Budget indicatif par nuit',
      datesLabel: 'Dates (ou période)',
      datesHint: 'ex. « 14–21 fév. » ou « première moitié de mars, 5 nuits »',
      datesPlaceholder: 'Facultatif',
      messageLabel: 'Quelque chose de précis',
      messageHint: 'Chef privé, arrivée en hélicoptère, usage exclusif, accessibilité, régime, intérêt pour la photographie, tout ce qui façonne la présélection.',
      nameLabel: 'Nom (facultatif)',
      namePlaceholder: 'Anonyme si vide',
      emailLabel: 'E-mail de réponse',
      emailHint: 'Si vide, les réponses partent vers votre propre adresse d’envoi.',
      emailPlaceholder: 'facultatif',
    },
    options: {
      headcount: ['1–2 personnes', '3–4 personnes', '5–6 personnes', '7–10 personnes', 'Groupe plus grand'],
      intent: ['Saison des aurores, première visite', 'Saison des aurores, visite répétée', 'Soleil de minuit (juin–juil.)', 'Noël / Nouvel An', 'Voyage en famille', 'Célébration privée', 'Lune de miel / retraite à deux', 'Autre, précisez dans le message'],
      budget: ['Moins de 1 000 € / nuit', '1 000 – 2 500 € / nuit', '2 500 – 5 000 € / nuit', 'Plus de 5 000 € / nuit', 'Propriété reserve, usage exclusif', 'Je préfère ne pas dire'],
    },
    submit: 'Envoyer une demande privée',
    sending: 'Envoi…',
    successH2: 'Demande reçue.',
    successBody: 'Une réponse arrivera sous un jour ouvré. Si vous souhaitez nous contacter directement, vous pouvez aussi nous écrire à',
    successFollowUp: '.',
    errorFallback: 'Vous pouvez aussi nous écrire directement à',
    fallbackNotice: 'Ouverture de votre messagerie pour envoyer la demande directement.',
    fineprint: 'Les envois sont transmis via une connexion chiffrée vers une seule boîte de réception privée en Finlande. Aucun CRM tiers, aucune attribution publicitaire dans le corps du message.',
    trustStrip: [
      { title: 'Anonyme', body: 'Le nom et l’e-mail sont facultatifs. La demande est envoyée via un formulaire chiffré vers une seule boîte de réception.' },
      { title: 'private@laplandvibes.com', body: 'Suivi du lundi au vendredi. Réponses sous un jour ouvré, écrites par une personne en Finlande.' },
      { title: 'Discret par défaut', body: 'Aucun CRM tiers, aucun calendrier partagé. La présélection est constituée en privé pour chaque demande.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Pourquoi cette collection existe',
        paragraphs: [
          'L’hébergement de luxe en Laponie est un petit monde. La même poignée de villas et quelques dizaines de suites se retrouvent sur chaque plateforme de réservation, souvent avec les mêmes photos de banque d’images et la même fourchette de prix vague. Les voyageurs qui ont déjà fait les voyages évidents commencent à interroger la Laponie plus précisément : quelle villa réserveriez-vous vraiment, où logez-vous une famille de neuf personnes, quel est l’endroit dont personne ne parle ?',
          'Ce site est une réponse brève et réfléchie à ces questions, une sélection faite main des villas et suites qui, selon nous, valent le voyage.',
        ],
      },
      {
        title: 'Ce que ce site ne fait pas',
        paragraphs: [
          'Nous n’exploitons pas les villas et nous ne sommes pas une agence de réservation. Il n’y a pas d’annuaire ici, ni l’intention d’en créer un, la collection est volontairement restreinte.',
          'Nous sommes indépendants. Lorsqu’une propriété peut être réservée en ligne, nous renvoyons vers son annonce publique, par exemple via Hotels.com ; ces liens peuvent nous rapporter une petite commission sans coût supplémentaire pour vous, et ils n’influencent jamais les villas que nous recommandons. Les propriétés ne peuvent pas payer pour être mises en avant.',
        ],
      },
      {
        title: 'Qui s’en occupe',
        paragraphs: [
          {
            type: 'link',
            pre: 'Une petite équipe basée en Finlande, qui anime également l’écosystème ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ', un hub éditorial et un réseau de sites de voyage sur la Laponie. Ce site est la partie de ce travail consacrée aux villas et suites les plus singulières de Laponie.',
          },
          'Les demandes arrivent dans une seule boîte de réception et reçoivent une réponse personnelle, pas de chatbot, pas de centre d’appels externalisé. Si une demande ne convient pas à cette collection (un groupe trop nombreux, une destination que nous ne couvrons pas), nous le disons honnêtement et, lorsque c’est possible, nous vous orientons vers une meilleure adresse.',
        ],
      },
      {
        title: 'Deux types de voyage que nous ne prenons pas',
        paragraphs: [
          'Les mariages de plus de trente invités, ainsi que la privatisation complète d’un domaine pour des événements de marque, sortent de ce pour quoi ces propriétés ont été conçues. Nous vous orientons volontiers vers des opérateurs qui gèrent ce type d’événement comme il faut.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'La collection',
    bedroom: 'chambre',
    bedrooms: 'chambres',
    sleeps: 'Couchages',
    fromPerNight: 'À partir de / nuit',
    nightlyHint: 'Tarif indicatif de basse saison. Le tarif réel par nuit dépend des dates, de la durée du séjour et des prestations incluses.',
    rate: 'Tarif',
    onRequest: 'Sur demande',
    reserveHint: 'Propriété reserve, chiffrée en privé sur demande, jamais sur une annonce publique.',
    beginInquiry: 'Démarrer une demande privée',
    viewRates: 'Voir les tarifs publics',
    orSendInquiry: 'Ou envoyez une demande privée',
    signatureEyebrow: 'Détails signature',
    signatureH2: 'Six détails que vous pourrez vérifier à votre arrivée.',
    destinationEyebrow: 'La destination',
    readProfile: (name) => `Lire le profil de ${name} →`,
    conciergeTitle: (dest) => `Démarrez une demande pour ${dest}.`,
    conciergeBody: 'Envoyez vos dates, le nombre de personnes, vos préférences. Une réponse arrive sous un jour ouvré avec les disponibilités, le tarif réel par nuit et toute villa reserve à associer à celle-ci.',
    alsoEyebrow: 'Également dans la collection',
    alsoH2: 'Trois autres villas à considérer.',
  },
  notFound: {
    eyebrow: 'Erreur',
    body: 'Cette page ne fait pas partie de la collection. Les villas, suites et destinations sont listées ci-dessous.',
    home: 'Accueil',
    collection: 'La collection',
  },
  contactPage: {
    seoTitle: 'Contact · LaplandLuxuryVillas',
    seoDescription: 'Une seule boîte privée : private@laplandvibes.com. Exploitée par Lapeso Oy depuis la Laponie finlandaise. Contacts presse, partenariats et accords directs ci-dessous.',
    eyebrow: 'Contact',
    h1: 'Une seule boîte, un seul opérateur.',
    cards: {
      private: {
        eyebrow: 'Demandes privées',
        body: 'Organisation de séjour anonyme, présélection de villas, questions sur les tarifs directs. Réponse sous un jour ouvré.',
      },
      press: {
        eyebrow: 'Presse & partenariats',
        body: 'Demandes éditoriales, propositions de partenariat émanant de propriétés, demandes de journalistes.',
      },
      deals: {
        eyebrow: 'Accords directs (propriétés)',
        body: 'Propriétaires et exploitants de villas souhaitant figurer dans la collection. Nous refusons la plupart des candidatures, veuillez d’abord lire la page À propos.',
      },
      general: {
        eyebrow: 'Éditorial général',
        body: 'Pour tout le reste. Délai de réponse plus long que private@ ; pour organiser un séjour, utilisez la boîte conciergerie ci-dessus.',
      },
    },
    privateCta: 'Envoyer une demande privée',
    operatorEyebrow: 'Opérateur',
    location: 'Laponie finlandaise, société immatriculée en Finlande.',
    aboutPre: 'Consultez la page ',
    aboutLabel: 'À propos',
    aboutPost: ' pour le contexte plus large de l’écosystème LaplandVibes.',
  },
  footerNote:
    'Une collection privée constituée en Laponie finlandaise, dernière revue en mai 2026. Certaines réservations génèrent une commission d’affiliation, qui n’influence jamais le choix des villas recommandées. Les propriétés reserve et réservées à la conciergerie ne paient rien.',
  footerPillars: [
    { name: 'La collection', href: '/villas' },
    { name: 'Suites design', href: '/suites' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Soleil de minuit', href: '/midnight-sun' },
    { name: 'Conciergerie privée', href: '/concierge' },
  ],
}

const it: SiteCopy = {
  nav: {
    villas: 'Ville', suites: 'Suite', destinations: 'Destinazioni', experiences: 'Esperienze',
    midnightSun: 'Sole di mezzanotte', about: 'Chi siamo', privateInquiry: 'Richiesta privata',
    openMenu: 'Apri il menù', closeMenu: 'Chiudi il menù',
  },
  cta: {
    browseCollection: 'Sfoglia la collezione',
    beginPrivateInquiry: 'Inizia una richiesta privata',
    fullCollection: 'Collezione completa',
    readProfile: 'Leggi il profilo',
    inquire: 'Richiedi',
    viewRates: 'Vedi le tariffe',
    viewOptions: 'Vedi le opzioni',
    viewPublicRates: 'Vedi le tariffe pubbliche',
    orSendPrivateInquiry: 'Oppure invia una richiesta privata',
    seeTheCollection: 'Sfoglia la collezione',
    inquireAboutJune: 'Richiedi le date di giugno',
    inquireAboutJuneShort: 'Richiedi per giugno',
    seeSummerCollection: 'Vedi la collezione estiva',
    fullVillaCollection: 'Collezione completa di ville',
    sendPrivateInquiry: 'Invia richiesta privata',
    sendAnother: 'Invia un’altra richiesta',
    home: 'Home',
    theCollection: 'La collezione',
    sending: 'Invio…',
    subscribe: 'Iscriviti',
    subscribed: 'Iscritto',
  },
  badges: {
    onRequest: 'Su richiesta',
    fromPerNight: 'Da / notte',
    fromPerPerson: 'Da / persona',
    fromPerGroup: 'Da / gruppo',
    rate: 'Tariffa',
    bedroom: 'camera',
    bedrooms: 'camere',
    sleeps: 'Posti letto',
    arrival: 'Arrivo',
    aurora: 'Aurora',
    highlights: 'Punti salienti',
    villas: (n) => (n === 1 ? 'Una villa in questa destinazione.' : `${n} ville in questa destinazione.`),
    villasIn: (name) => `Ville a ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Una villa in questa destinazione.' : `${n} ville in questa destinazione.`),
    alsoInCollection: 'Anche nella collezione',
    threeOthers: 'Altre tre ville che vale la pena considerare.',
    signatureDetails: 'Dettagli che fanno la differenza',
    sixVerifyOnArrival: 'Sei dettagli che potrai verificare all’arrivo.',
    theDestination: 'La destinazione',
    fullCollectionShort: 'Collezione completa',
  },
  tier: {
    signature: 'Signature',
    private: 'Collezione privata',
    reserve: 'Reserve · Solo tramite concierge',
  },
  category: {
    'glass-roof': 'Villa con tetto in vetro',
    'log-estate': 'Dimora privata in tronchi',
    'designer-suite': 'Suite d’autore',
    'alpine-chalet': 'Chalet alpino',
    'lakeside-retreat': 'Rifugio sul lago',
  },
  concierge: {
    eyebrow: 'Il concierge privato',
    defaultTitle: 'Un modo più sereno di organizzare un viaggio in Lapponia.',
    defaultBody: 'Invia un solo messaggio, preferenze, date, numero di persone, e il nostro concierge ti risponde con una short list privata entro un giorno lavorativo. Nessun profilo pubblico, nessun calendario condiviso.',
    inquireBtn: 'Richiesta privata',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Pianificazione anonima del viaggio',
      reply: 'Risposta entro un giorno lavorativo',
      rates: 'Tariffe dirette su richiesta',
    },
  },
  midnightSunBand: {
    eyebrow: '6 giu – 7 lug',
    h2: 'Le stesse ville, in 32 giorni di luce ininterrotta.',
    body: 'Stessa architettura, altra stagione. Il tetto in vetro diventa un lucernario su un sole che non tramonta mai, il lago si scioglie, il bosco si riempie di camemori. Metà della domanda dell’inverno, e l’unica finestra dell’anno in cui chef privati, voli in elicottero e le ville reserve aprono il resto del loro calendario.',
    primary: 'Vedi la collezione estiva',
    secondary: 'Richiedi le date di giugno',
  },
  newsletter: {
    eyebrow: 'La newsletter #LaplandVibes',
    h2: 'Un avviso discreto quando le ville aprono nuove date e veniamo a sapere di una disponibilità privata.',
    lede: 'Tariffe dirette. Posti concierge dell’ultimo minuto. Previsioni della finestra delle aurore la settimana prima di ogni novilunio. Niente spam, scritta in Finlandia, inviata solo quando c’è qualcosa di concreto da dire.',
    emailPlaceholder: 'tua@email.com',
    footnote: 'Disiscrizione con un clic.',
    welcome: 'Benvenuto a bordo. Il primo avviso arriva entro una settimana.',
    already: 'Sei già nella lista, ci vediamo al prossimo avviso.',
    invalidEmail: 'Questo indirizzo email non sembra valido.',
    networkError: 'Errore di rete. Riprova.',
    genericError: 'Qualcosa è andato storto. Riprova tra un momento.',
  },
  affiliateDisclosure: {
    compact: 'Link di affiliazione, riceviamo una piccola commissione senza costi aggiuntivi quando prenoti.',
    full: 'Questa pagina contiene link di affiliazione. Se prenoti tramite questi link, LaplandLuxuryVillas può ricevere una commissione senza costi aggiuntivi per te.',
  },
  hero: {
    home: {
      eyebrow: 'La collezione privata',
      title: 'Lapponia finlandese, discreta, al vertice del mercato.',
      lede: 'Una piccola collezione di ville private di lusso scelte a mano in tutta la Lapponia, con concierge, tariffe su richiesta.',
      primary: 'Sfoglia la collezione', secondary: 'Richiesta privata',
    },
    villas: {
      eyebrow: 'La collezione',
      title: 'Nove ville. Cinque destinazioni. Una richiesta privata.',
      lede: 'Ogni immobile elencato sotto è verificato sulla base delle informazioni pubblicate dal gestore e delle recensioni recenti degli ospiti. Filtra per la tipologia di edificio che hai in mente, oppure invia una richiesta privata e costruiremo una short list intorno alle tue date.',
    },
    suites: {
      eyebrow: 'Suite d’autore',
      title: 'Quando non ti serve una villa, ma ti serve quel tetto in vetro.',
      lede: 'Un breve elenco di suite con una camera e cabine per l’aurora dove l’architettura stessa è l’esperienza. Meno persone, lo stesso soffitto panoramico.',
    },
    destinations: {
      eyebrow: 'Destinazioni',
      title: 'Cinque luoghi, ciascuno con un motivo chiaro per esserci.',
      lede: 'La Lapponia non è intercambiabile. La frequenza delle aurore, la logistica di arrivo e la densità delle strutture cambiano in modo sensibile ogni 50 km a nord del Circolo Polare Artico.',
    },
    experiences: {
      eyebrow: 'Esperienze su misura',
      title: 'Il giorno, prima della notte sotto il vetro.',
      lede: 'Otto esperienze private che abbiniamo alle ville, ciascuna prenotata in base alla finestra meteo, alle ore di luce e all’orario di check-in della villa.',
    },
    midnightSun: {
      eyebrow: '6 giu – 7 lug',
      title: 'La finestra di 32 giorni in cui il sole non tramonta.',
      lede: 'Le stesse ville, nella stagione del sole di mezzanotte, meno ospiti, una luce infinita e morbida.',
      primary: 'Richiedi le date di giugno', secondary: 'Sfoglia la collezione',
    },
    concierge: {
      eyebrow: 'Concierge privato',
      title: 'Un messaggio privato, una short list curata.',
      lede: 'Invia date, numero di persone e il tipo di viaggio che hai in mente. Rispondiamo entro un giorno lavorativo, comprese, quando è la scelta giusta, le ville reserve che non compaiono mai pubblicamente.',
    },
    about: {
      eyebrow: 'Chi siamo',
      title: 'Un elenco breve, tenuto breve di proposito.',
      lede: 'Una collezione privata delle migliori ville e suite della Lapponia, concierge anonimo, tariffe dirette dove esistono, nessuna piattaforma in mezzo.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Come lavoriamo',
      h2: 'L’esatto contrario di una piattaforma di prenotazione.',
      items: [
        { title: 'Un elenco breve, non una directory.', body: 'Nove ville e suite nelle destinazioni che giustificano davvero il viaggio. Rifiutiamo immobili più spesso di quanto ne aggiungiamo, ogni voce di questa pagina è una che un viaggiatore attento prenoterebbe senza esitare.' },
        { title: 'Pianificazione anonima del viaggio.', body: 'Una sola casella di posta privata, nessun profilo pubblico, nessun calendario condiviso con terzi. Invia date, numero di persone e preferenze, ricevi una short list curata entro un giorno lavorativo.' },
        { title: 'Tariffe dirette, dove esistono.', body: 'Gli annunci pubblici rimandano a tariffe verificate. Gli immobili tenuti in privato, comprese le ville reserve senza disponibilità pubblica, vengono quotati direttamente. La risposta ti dice qual è quale.' },
      ],
    },
    signature: {
      eyebrow: 'Ville signature',
      h2: 'Quattro pilastri della collezione lappone.',
      lede: 'Gli immobili che consigliamo più spesso. Ogni dettaglio qui sotto è verificato con le informazioni del gestore e le recensioni recenti, non copiato da una brochure.',
    },
    destinations: {
      eyebrow: 'Destinazioni',
      h2: 'Cinque luoghi, ciascuno con un motivo chiaro.',
    },
  },
  villasPage: {
    filters: { all: 'Tutte', glassRoof: 'Tetto in vetro', logEstate: 'Dimora in tronchi', designerSuite: 'Suite d’autore', alpineChalet: 'Chalet alpino', lakeside: 'Sul lago' },
    noVillas: 'Ancora nessuna villa in questa categoria.',
    conciergeTitle: 'Non trovi la soluzione giusta?',
    conciergeBody: 'La collezione qui sopra è ciò che è pubblicato al momento. Altre ville sono tenute in privato, comprese proprietà reserve senza annuncio pubblico, e quotate direttamente su richiesta.',
  },
  suitesPage: {
    intro: {
      p1Pre: '«Suite» in Lapponia comprende due gesti architettonici distinti, entrambi da conoscere. Il primo è la ',
      designerSuite: 'suite d’autore',
      p1Mid: ', dove un importante studio finlandese (Studio Puisto, ALA, Avanto) ha costruito un’unica camera attorno a un’unica vista. Il secondo è la ',
      glassRoof: 'cabina con tetto in vetro',
      p1Post: ', dove il soffitto è il dettaglio protagonista. Entrambe sono elencate qui sotto.',
    },
    conciergeTitle: 'Una prenotazione di due suite, o un piano privato?',
    conciergeBody: 'Diversi di questi immobili liberano un piano con più suite a uso esclusivo nelle settimane di bassa stagione. Indicaci le tue date e il numero di persone.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Destinazione 0${i + 1}`,
    readTheProfile: (name) => `Leggi il profilo di ${name}`,
  },
  destinationPage: {
    backLink: 'Destinazioni',
    eyebrow: 'Destinazione · Lapponia finlandese',
    arrival: 'Arrivo',
    aurora: 'Aurora',
    highlights: 'Punti salienti',
    villasHere: (n) => (n === 1 ? 'Una villa in questa destinazione.' : `${n} ville in questa destinazione.`),
    villasHereH2: (n) => (n === 1 ? 'Una villa in questa destinazione.' : `${n} ville in questa destinazione.`),
    fullCollection: 'Collezione completa',
    conciergeTitle: (name) => `Organizza un viaggio privato a ${name}.`,
    conciergeBody: 'Invia date, numero di persone e qualsiasi preferenza (chef privato, arrivo in elicottero, uso esclusivo). Rispondiamo con una short list entro un giorno lavorativo.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurora', intro: 'Le aurore in sé sono gratuite. Ciò che si offre qui è l’accesso, il veicolo giusto, la guida giusta e la notte giusta sotto lo squarcio di cielo giusto.' },
      wilderness: { title: 'Natura selvaggia', intro: 'Le versioni private delle esperienze per cui tutti vengono in Lapponia, husky, motoslitta, renna, senza il bus condiviso e il percorso ad anello.' },
      culinary: { title: 'Cucina', intro: 'Uno chef in attività di una delle cucine serie della Lapponia, nella tua villa, per una sera, oppure il menù degustazione in loco quando è la cucina la ragione della tua venuta.' },
      arrival: { title: 'Arrivo', intro: 'Jet privato, transfer in elicottero, veicoli terrestri in versione artica. Prenotati in base allo slot, alla finestra di luce e al check-in della villa.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Giorni in cui il sole non tramonta' },
      { value: '24 h', label: 'Luce al culmine, 21 giu' },
      { value: '+18 °C', label: 'Temperatura diurna media a fine giugno' },
      { value: '50 %', label: 'Domanda inferiore alla stagione delle aurore' },
    ],
    fourReasons: 'Quattro motivi',
    h2: 'La Lapponia d’estate è un luogo a sé.',
    reasons: [
      { title: 'L’architettura cambia carattere.', body: 'I tetti in vetro pensati per le aurore ora incorniciano un sole ininterrotto. Lucernario sopra il letto, sole sul lago, nessun bisogno di tirare una tenda, non c’è notte da nascondere.' },
      { title: 'La natura selvaggia diventa accessibile.', body: 'I laghi si sciolgono, il bosco boreale si apre, compaiono i percorsi in canoa. La stessa villa raggiunta in motoslitta a febbraio è ora a cinque minuti di barca dal pontile.' },
      { title: 'Le ville reserve si aprono.', body: 'Le dimore private in tronchi sul lago e gli chalet d’architetto liberano il resto del loro calendario. La finestra di 32 giorni è l’unico periodo dell’anno in cui chef privati e voli in elicottero quotano tariffe di bassa stagione.' },
      { title: 'Niente code, niente vicini.', body: 'La Lapponia d’estate vede una frazione della densità di visitatori dell’inverno. Il sentiero nel bosco, il belvedere sul fjell, sono praticamente tuoi.' },
    ],
    summerCollection: {
      eyebrow: 'La collezione estiva',
      h2: 'Quattro caratteri di villa, nella luce dell’estate.',
      lede: 'Le stesse categorie architettoniche della collezione invernale, cabine con tetto in vetro, dimore in tronchi sul lago, chalet alpini, ville nel bosco, fotografate nella luce del sole di mezzanotte di fine giugno per mostrare la seconda metà della storia.',
      cards: [
        { title: 'Cabina con tetto in vetro nel verde', copy: 'L’architettura dell’aurora nella luce dorata delle 23:00, circondata da una foresta rigogliosa anziché dalla neve.' },
        { title: 'Dimora in tronchi sul lago', copy: 'Baia privata sul lago Inari libera dal ghiaccio, canoa al pontile, fumo dalla sauna a legna.' },
        { title: 'Chalet d’autore sul fjell', copy: 'Eriofori e fiori selvatici al posto della pista da sci, la stessa facciata panoramica in vetro.' },
        { title: 'Villa moderna nel bosco', copy: 'Edificio in legno a sbalzo nel folto del pino boreale verde, calore dorato del sole di mezzanotte sulla facciata.' },
      ],
    },
    planning: {
      h2: 'Una nota sull’organizzazione di un viaggio nel sole di mezzanotte.',
      p1: 'La finestra di 32 giorni è breve e le ville sono di proprietà individuale, perciò il calendario si riempie in modo opportunistico, non uniforme. Il concierge tiene una piccola allocazione nelle dimore reserve ogni estate.',
      p2: 'Il momento giusto per informarsi su un determinato giugno è tra gennaio e marzo dello stesso anno. Anche le richieste successive vale la pena inviarle, capitano dei rilasci, ma la fascia alta dell’offerta va spesso via prima.',
      quoting: 'Attualmente quotiamo le estati 2026 e 2027',
    },
    conciergeTitle: 'Informati su un viaggio nel sole di mezzanotte.',
    conciergeBody: 'Invia date, numero di persone e qualsiasi preferenza. Una risposta arriva entro un giorno lavorativo con le disponibilità di tutta la collezione estiva, comprese ville reserve non elencate pubblicamente.',
  },
  conciergePage: {
    eyebrow: 'Il modulo di richiesta',
    h2: 'Raccontaci cosa stai immaginando.',
    intro: 'Cinque campi brevi. Più le preferenze e i vincoli sono precisi, più utile è la short list. Nome ed email restano facoltativi, le risposte vanno all’indirizzo da cui arriva il messaggio.',
    fields: {
      headcount: 'Numero di persone',
      tripIntent: 'Tipo di viaggio',
      budget: 'Budget indicativo a notte',
      datesLabel: 'Date (o periodo)',
      datesHint: 'es. «14–21 feb» oppure «prima metà di marzo, 5 notti»',
      datesPlaceholder: 'Facoltativo',
      messageLabel: 'Qualcosa di specifico',
      messageHint: 'Chef privato, arrivo in elicottero, uso esclusivo, accessibilità, dieta, attenzione alla fotografia, tutto ciò che dà forma alla short list.',
      nameLabel: 'Nome (facoltativo)',
      namePlaceholder: 'Anonimo se vuoto',
      emailLabel: 'Email di risposta',
      emailHint: 'Se vuoto, le risposte vanno al tuo indirizzo di invio.',
      emailPlaceholder: 'facoltativo',
    },
    options: {
      headcount: ['1–2 ospiti', '3–4 ospiti', '5–6 ospiti', '7–10 ospiti', 'Gruppo più grande'],
      intent: ['Stagione delle aurore, prima visita', 'Stagione delle aurore, visita ripetuta', 'Sole di mezzanotte (giu–lug)', 'Natale / Capodanno', 'Gruppo famiglia', 'Celebrazione privata', 'Luna di miele / ritiro per due', 'Altro, spiega nel messaggio'],
      budget: ['Meno di 1.000 € / notte', '1.000 – 2.500 € / notte', '2.500 – 5.000 € / notte', 'Oltre 5.000 € / notte', 'Proprietà reserve, uso esclusivo', 'Preferisco non dirlo'],
    },
    submit: 'Invia richiesta privata',
    sending: 'Invio…',
    successH2: 'Richiesta ricevuta.',
    successBody: 'Riceverai una risposta entro un giorno lavorativo. Se desideri contattarci direttamente, puoi anche scriverci a',
    successFollowUp: '.',
    errorFallback: 'Puoi anche scriverci direttamente a',
    fallbackNotice: 'Apertura del tuo client di posta per inviare la richiesta direttamente.',
    fineprint: 'Gli invii vengono inoltrati tramite una connessione cifrata a un’unica casella di posta privata in Finlandia. Nessun CRM di terzi, nessuna attribuzione pubblicitaria nel corpo del messaggio.',
    trustStrip: [
      { title: 'Anonimo', body: 'Nome ed email sono facoltativi. La richiesta viene inviata tramite un modulo cifrato a un’unica casella di posta.' },
      { title: 'private@laplandvibes.com', body: 'Monitorata da lun a ven. Risposte entro un giorno lavorativo, scritte da una persona in Finlandia.' },
      { title: 'Discreto per impostazione', body: 'Nessun CRM di terzi, nessun calendario condiviso. La short list viene costruita in privato per ogni richiesta.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Perché esiste questa collezione',
        paragraphs: [
          'L’offerta di lusso della Lapponia è un piccolo mondo. La stessa manciata di ville e qualche decina di suite ricorrono su ogni piattaforma di prenotazione, spesso con le stesse foto d’archivio e la stessa vaga fascia di prezzo. Chi ha già fatto i viaggi più ovvi inizia a chiedere della Lapponia in modo più preciso: quale villa prenoteresti davvero, dove sistemi una famiglia di nove persone, qual è il posto di cui nessuno scrive?',
          'Questo sito è una risposta breve e ponderata a queste domande, una selezione curata a mano delle ville e suite che riteniamo valgano il viaggio.',
        ],
      },
      {
        title: 'Cosa non fa questo sito',
        paragraphs: [
          'Non gestiamo le ville e non siamo un’agenzia di prenotazioni. Qui non c’è una directory, né l’intenzione di crearne una, la collezione è tenuta volutamente piccola.',
          'Siamo indipendenti. Quando una proprietà può essere prenotata online, rimandiamo al suo annuncio pubblico, ad esempio tramite Hotels.com; questi link possono farci guadagnare una piccola commissione senza alcun costo aggiuntivo per Lei, e non influenzano mai quali ville consigliamo. Le proprietà non possono pagare per essere messe in evidenza.',
        ],
      },
      {
        title: 'Chi lo gestisce',
        paragraphs: [
          {
            type: 'link',
            pre: 'Una piccola squadra con base in Finlandia che gestisce anche l’ecosistema ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ', un hub editoriale e una rete di siti di viaggio sulla Lapponia. Questo sito è la parte di quel lavoro dedicata alle ville e suite più caratteristiche della Lapponia.',
          },
          'Le richieste arrivano in un’unica casella di posta e ricevono una risposta personale, niente chatbot, niente call center in outsourcing. Se una richiesta non è adatta a questa collezione (un gruppo troppo numeroso, una destinazione che non copriamo), lo diciamo con onestà e, dove possibile, La indirizziamo verso una scelta migliore.',
        ],
      },
      {
        title: 'Due tipi di viaggio che non accettiamo',
        paragraphs: [
          'I matrimoni con più di trenta invitati e l’affitto esclusivo di un’intera dimora per eventi di marca esulano da ciò per cui queste proprietà sono state costruite. Saremo lieti di indirizzarLa verso operatori che gestiscono questo tipo di evento come si deve.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'La collezione',
    bedroom: 'camera',
    bedrooms: 'camere',
    sleeps: 'Posti letto',
    fromPerNight: 'Da / notte',
    nightlyHint: 'Tariffa indicativa di bassa stagione. La tariffa reale a notte dipende dalle date, dalla durata del soggiorno e da ciò che è incluso.',
    rate: 'Tariffa',
    onRequest: 'Su richiesta',
    reserveHint: 'Proprietà reserve, quotata in privato su richiesta, mai su un annuncio pubblico.',
    beginInquiry: 'Inizia una richiesta privata',
    viewRates: 'Vedi le tariffe pubbliche',
    orSendInquiry: 'Oppure invia una richiesta privata',
    signatureEyebrow: 'Dettagli che fanno la differenza',
    signatureH2: 'Sei dettagli che potrai verificare all’arrivo.',
    destinationEyebrow: 'La destinazione',
    readProfile: (name) => `Leggi il profilo di ${name} →`,
    conciergeTitle: (dest) => `Inizia una richiesta per ${dest}.`,
    conciergeBody: 'Invia date, numero di persone, preferenze. Una risposta arriva entro un giorno lavorativo con le disponibilità, la tariffa reale a notte e qualsiasi villa reserve che valga la pena abbinare a questa.',
    alsoEyebrow: 'Anche nella collezione',
    alsoH2: 'Altre tre ville che vale la pena considerare.',
  },
  notFound: {
    eyebrow: 'Errore',
    body: 'Questa pagina non fa parte della collezione. Ville, suite e destinazioni sono elencate qui sotto.',
    home: 'Home',
    collection: 'La collezione',
  },
  contactPage: {
    seoTitle: 'Contatti · LaplandLuxuryVillas',
    seoDescription: 'Un’unica casella privata: private@laplandvibes.com. Gestita da Lapeso Oy dalla Lapponia finlandese. Contatti per stampa, partnership e accordi diretti qui sotto.',
    eyebrow: 'Contatti',
    h1: 'Una casella, un operatore.',
    cards: {
      private: {
        eyebrow: 'Richieste private',
        body: 'Pianificazione anonima del viaggio, rose di ville, domande sulle tariffe dirette. Rispondiamo entro un giorno lavorativo.',
      },
      press: {
        eyebrow: 'Stampa e partnership',
        body: 'Richieste editoriali, proposte di partnership da parte delle strutture, richieste di giornalisti.',
      },
      deals: {
        eyebrow: 'Accordi diretti (strutture)',
        body: 'Proprietari e gestori di ville interessati a entrare nella collezione. Rifiutiamo la maggior parte delle proposte, la preghiamo di leggere prima la pagina Chi siamo.',
      },
      general: {
        eyebrow: 'Editoriale generale',
        body: 'Tutto il resto. Tempi di risposta più lunghi rispetto a private@; per pianificare il viaggio usi la casella concierge qui sopra.',
      },
    },
    privateCta: 'Invia una richiesta privata',
    operatorEyebrow: 'Operatore',
    location: 'Lapponia finlandese, società registrata in Finlandia.',
    aboutPre: 'Veda la pagina ',
    aboutLabel: 'Chi siamo',
    aboutPost: ' per il contesto più ampio dell’ecosistema LaplandVibes.',
  },
  footerNote:
    'Una collezione privata curata nella Lapponia finlandese, ultima revisione a maggio 2026. Alcune prenotazioni generano una commissione di affiliazione, che non influisce mai sulle ville consigliate. Le proprietà reserve e solo concierge non pagano nulla.',
  footerPillars: [
    { name: 'La collezione', href: '/villas' },
    { name: 'Suite d’autore', href: '/suites' },
    { name: 'Destinazioni', href: '/destinations' },
    { name: 'Esperienze', href: '/experiences' },
    { name: 'Sole di mezzanotte', href: '/midnight-sun' },
    { name: 'Concierge privato', href: '/concierge' },
  ],
}

const nl: SiteCopy = {
  nav: {
    villas: 'Villa\'s', suites: 'Suites', destinations: 'Bestemmingen', experiences: 'Ervaringen',
    midnightSun: 'Middernachtzon', about: 'Over ons', privateInquiry: 'Privé-aanvraag',
    openMenu: 'Menu openen', closeMenu: 'Menu sluiten',
  },
  cta: {
    browseCollection: 'Bekijk de collectie',
    beginPrivateInquiry: 'Privé-aanvraag starten',
    fullCollection: 'Volledige collectie',
    readProfile: 'Profiel lezen',
    inquire: 'Aanvragen',
    viewRates: 'Tarieven bekijken',
    viewOptions: 'Opties bekijken',
    viewPublicRates: 'Publieke tarieven bekijken',
    orSendPrivateInquiry: 'Of stuur een privé-aanvraag',
    seeTheCollection: 'Bekijk de collectie',
    inquireAboutJune: 'Junidata aanvragen',
    inquireAboutJuneShort: 'Junidata',
    seeSummerCollection: 'Bekijk de zomercollectie',
    fullVillaCollection: 'Volledige villacollectie',
    sendPrivateInquiry: 'Privé-aanvraag versturen',
    sendAnother: 'Nog een aanvraag versturen',
    home: 'Home',
    theCollection: 'De collectie',
    sending: 'Versturen…',
    subscribe: 'Abonneren',
    subscribed: 'Geabonneerd',
  },
  badges: {
    onRequest: 'Op aanvraag',
    fromPerNight: 'Vanaf / nacht',
    fromPerPerson: 'Vanaf / persoon',
    fromPerGroup: 'Vanaf / groep',
    rate: 'Tarief',
    bedroom: 'slaapkamer',
    bedrooms: 'slaapkamers',
    sleeps: 'Slaapt',
    arrival: 'Aankomst',
    aurora: 'Aurora',
    highlights: 'Hoogtepunten',
    villas: (n) => (n === 1 ? 'Eén villa is hier verankerd.' : `${n} villa's zijn hier verankerd.`),
    villasIn: (name) => `Villa's in ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Eén villa is hier verankerd.' : `${n} villa's zijn hier verankerd.`),
    alsoInCollection: 'Ook in de collectie',
    threeOthers: 'Drie andere villa\'s die het overwegen waard zijn.',
    signatureDetails: 'Signature-details',
    sixVerifyOnArrival: 'Zes dingen die u bij aankomst kunt verifiëren.',
    theDestination: 'De bestemming',
    fullCollectionShort: 'Volledige collectie',
  },
  tier: {
    signature: 'Signature',
    private: 'Privécollectie',
    reserve: 'Reserve · Alleen via conciërge',
  },
  category: {
    'glass-roof': 'Villa met glazen dak',
    'log-estate': 'Privé blokhutlandgoed',
    'designer-suite': 'Designersuite',
    'alpine-chalet': 'Alpenchalet',
    'lakeside-retreat': 'Verblijf aan het meer',
  },
  concierge: {
    eyebrow: 'De privéconciërge',
    defaultTitle: 'Een rustigere manier om een reis naar Lapland te plannen.',
    defaultBody: 'Stuurt u één bericht, voorkeuren, data, gezelschap, en onze conciërge antwoordt binnen één werkdag met een persoonlijke shortlist. Geen publiek profiel, geen gedeelde agenda\'s.',
    inquireBtn: 'Privé-aanvraag',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Anonieme reisplanning',
      reply: 'Antwoord binnen één werkdag',
      rates: 'Directe tarieven op aanvraag',
    },
  },
  midnightSunBand: {
    eyebrow: '6 juni – 7 juli',
    h2: 'Dezelfde villa\'s, in 32 dagen ononderbroken licht.',
    body: 'Dezelfde architectuur, een ander seizoen. Het glazen dak wordt een dakvenster op een zon die nooit ondergaat, het meer ontdooit, het bos vult zich met moltebessen. De helft van de wintervraag, en het enige venster per jaar waarin privékoks, helikoptercharters en de reservevilla\'s de rest van hun kalender openen.',
    primary: 'Bekijk de zomercollectie',
    secondary: 'Junidata aanvragen',
  },
  newsletter: {
    eyebrow: 'De #LaplandVibes-nieuwsbrief',
    h2: 'Een rustig bericht wanneer villa\'s nieuwe data openen en wij van een onderhandse beschikbaarheid horen.',
    lede: 'Directe tarieven. Last-minute openingen via de conciërge. Aurora-voorspellingen in de week voor elke nieuwe maan. Geen nieuwsbriefspam, geschreven in Finland, alleen verstuurd wanneer er iets concreets te melden is.',
    emailPlaceholder: 'uw@email.com',
    footnote: 'Uitschrijven met één klik.',
    welcome: 'Welkom aan boord. Het eerste bericht arriveert binnen een week.',
    already: 'U staat al op de lijst, tot het volgende bericht.',
    invalidEmail: 'Dat e-mailadres lijkt ongeldig.',
    networkError: 'Netwerkfout. Probeert u het opnieuw.',
    genericError: 'Er ging iets mis. Probeert u het zo dadelijk nog eens.',
  },
  affiliateDisclosure: {
    compact: 'Affiliatielinks, wij ontvangen een kleine commissie zonder extra kosten wanneer u boekt.',
    full: 'Deze pagina bevat affiliatielinks. Als u via deze links boekt, kan LaplandLuxuryVillas een commissie ontvangen zonder extra kosten voor u.',
  },
  hero: {
    home: {
      eyebrow: 'De privécollectie',
      title: 'Fins Lapland, discreet, aan de top van de markt.',
      lede: 'Een kleine, met de hand samengestelde collectie privé-luxevilla\'s door heel Lapland, met conciërge, prijzen op aanvraag.',
      primary: 'Bekijk de collectie',
      secondary: 'Privé-aanvraag',
    },
    villas: {
      eyebrow: 'De collectie',
      title: 'Negen villa\'s. Vijf bestemmingen. Eén privé-aanvraag.',
      lede: 'Elk pand hieronder is geverifieerd aan de hand van de gepubliceerde informatie van de exploitant en recente gastbeoordelingen. Filter op het type gebouw dat u voor ogen heeft, of stuur een privé-aanvraag en wij stellen een shortlist samen rond uw data.',
    },
    suites: {
      eyebrow: 'Designersuites',
      title: 'Wanneer u geen villa nodig heeft, maar wel het glazen dak.',
      lede: 'Een korte lijst van eenkamersuites en aurora-cabines waar de architectuur zelf de ervaring is. Een kleiner gezelschap, hetzelfde panoramische plafond.',
    },
    destinations: {
      eyebrow: 'Bestemmingen',
      title: 'Vijf plekken, elk met een duidelijke reden om er te zijn.',
      lede: 'Lapland is niet uitwisselbaar. De aurorafrequentie, de aankomstlogistiek en de accommodatiedichtheid veranderen merkbaar om de 50 km ten noorden van de poolcirkel.',
    },
    experiences: {
      eyebrow: 'Ervaringen op maat',
      title: 'De dag, vóór de nacht onder het glas.',
      lede: 'Acht privé-ervaringen die wij koppelen aan de villa\'s, elk geboekt op het weervenster, het daglicht en het tijdstip van inchecken.',
    },
    midnightSun: {
      eyebrow: '6 juni – 7 juli',
      title: 'Het venster van 32 dagen waarin de zon nooit ondergaat.',
      lede: 'Dezelfde villa\'s, in het seizoen van de middernachtzon, minder gasten, zacht eindeloos licht.',
      primary: 'Junidata aanvragen',
      secondary: 'Bekijk de collectie',
    },
    concierge: {
      eyebrow: 'Privéconciërge',
      title: 'Eén privébericht, één samengestelde shortlist.',
      lede: 'Stuurt u uw data, uw gezelschap en het soort reis dat u voor ogen heeft. Wij antwoorden binnen één werkdag, inclusief, waar het past, de reservevilla\'s die nooit publiek verschijnen.',
    },
    about: {
      eyebrow: 'Over ons',
      title: 'Een korte lijst, met opzet kort gehouden.',
      lede: 'Een privécollectie van de mooiste villa\'s en suites van Lapland, anonieme conciërge, directe tarieven waar die bestaan, geen platform ertussen.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Hoe wij werken',
      h2: 'Het tegenovergestelde van een boekingsplatform.',
      items: [
        { title: 'Een korte lijst, geen gids.', body: 'Negen villa\'s en suites in de bestemmingen die de reis werkelijk rechtvaardigen. Panden worden vaker afgewezen dan toegevoegd, elk item op deze pagina is er een die een zorgvuldige reiziger zonder aarzeling kan boeken.' },
        { title: 'Anonieme reisplanning.', body: 'Eén privé-inbox, geen publiek profiel, geen agenda\'s die met derden worden gedeeld. Stuurt u uw data, gezelschap en voorkeuren, ontvang binnen één werkdag een samengestelde shortlist.' },
        { title: 'Directe tarieven, waar die bestaan.', body: 'Publieke aanbiedingen verwijzen naar geverifieerde tarieven. Panden die onderhands worden gehouden, waaronder reservevilla\'s zonder publieke beschikbaarheid, worden rechtstreeks geoffreerd. Het antwoord vertelt u welke welke is.' },
      ],
    },
    signature: {
      eyebrow: 'Signature-villa\'s',
      h2: 'Vier ankers van de Lapland-collectie.',
      lede: 'De panden die wij het vaakst aanbevelen. Elk detail hieronder is geverifieerd met de informatie van de exploitant en recente beoordelingen, niet overgenomen uit een brochure.',
    },
    destinations: {
      eyebrow: 'Bestemmingen',
      h2: 'Vijf plekken, elk met een duidelijke reden.',
    },
  },
  villasPage: {
    filters: { all: 'Alle', glassRoof: 'Glazen dak', logEstate: 'Blokhutlandgoed', designerSuite: 'Designersuite', alpineChalet: 'Alpenchalet', lakeside: 'Aan het meer' },
    noVillas: 'Nog geen villa\'s in deze categorie.',
    conciergeTitle: 'Niet de juiste optie gezien?',
    conciergeBody: 'De collectie hierboven is wat op dit moment is gepubliceerd. Aanvullende villa\'s worden onderhands gehouden, waaronder reservepanden zonder publieke aanbieding, en op aanvraag rechtstreeks geoffreerd.',
  },
  suitesPage: {
    intro: {
      p1Pre: '"Suite" dekt in Lapland twee verschillende architecturale keuzes, beide de moeite van het kennen waard. De eerste is de ',
      designerSuite: 'designersuite',
      p1Mid: ', waar een toonaangevende Finse studio (Studio Puisto, ALA, Avanto) één slaapkamer rond één uitzicht heeft gebouwd. De tweede is de ',
      glassRoof: 'cabine met glazen dak',
      p1Post: ', waar het plafond het belangrijkste detail is. Beide staan hieronder vermeld.',
    },
    conciergeTitle: 'Twee suites samen, of een privéverdieping?',
    conciergeBody: 'Verschillende van deze panden geven in de tussenseizoenen een verdieping met meerdere suites vrij voor exclusief gebruik. Deelt u uw data en gezelschap.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Bestemming 0${i + 1}`,
    readTheProfile: (name) => `Lees het profiel van ${name}`,
  },
  destinationPage: {
    backLink: 'Bestemmingen',
    eyebrow: 'Bestemming · Fins Lapland',
    arrival: 'Aankomst',
    aurora: 'Aurora',
    highlights: 'Hoogtepunten',
    villasHere: (n) => (n === 1 ? 'Eén villa is hier verankerd.' : `${n} villa's zijn hier verankerd.`),
    villasHereH2: (n) => (n === 1 ? 'Eén villa is hier verankerd.' : `${n} villa's zijn hier verankerd.`),
    fullCollection: 'Volledige collectie',
    conciergeTitle: (name) => `Plan een privéreis naar ${name}.`,
    conciergeBody: 'Stuurt u uw data, gezelschap en eventuele voorkeuren (privékok, aankomst per helikopter, exclusief gebruik). Wij antwoorden binnen één werkdag met een shortlist.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurora', intro: 'De aurora\'s zelf zijn gratis. Wat hier wordt verkocht is de toegang, het juiste voertuig, de juiste gids en de juiste nacht onder het juiste wolkenvenster.' },
      wilderness: { title: 'Wildernis', intro: 'Privéversies van de ervaringen waarvoor iedereen naar Lapland komt, husky, sneeuwscooter, rendier, zonder de gedeelde bus en het rondje langs de gebaande paden.' },
      culinary: { title: 'Culinair', intro: 'Een werkende chef uit een van de serieuze keukens van Lapland, bij u in de villa, voor één avond, of het proefmenu ter plaatse wanneer de keuken de reden van uw komst is.' },
      arrival: { title: 'Aankomst', intro: 'Privéjet, helikoptertransfer, voertuigen met arctische specificatie. Geboekt op het tijdslot, het daglichtvenster en het tijdstip van inchecken.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Dagen dat de zon niet ondergaat' },
      { value: '24 u', label: 'Daglicht op de piek, 21 juni' },
      { value: '+18 °C', label: 'Gemiddeld overdag eind juni' },
      { value: '50 %', label: 'Lagere vraag dan in het auroraseizoen' },
    ],
    fourReasons: 'Vier redenen',
    h2: 'Lapland in de zomer is een andere plek.',
    reasons: [
      { title: 'De architectuur krijgt een ander karakter.', body: 'De glazen daken die voor de aurora\'s bestaan, omlijsten nu een ononderbroken zon. Dakvenster boven het bed, zon op het meer, geen reden om een gordijn dicht te trekken, er is geen nacht om voor weg te kruipen.' },
      { title: 'De wildernis wordt toegankelijk.', body: 'De meren ontdooien, het boreale bos opent zich, de kanoroutes verschijnen. Dezelfde villa die u in februari per sneeuwscooter bereikte, ligt nu op vijf minuten varen van de steiger.' },
      { title: 'De reservevilla\'s openen.', body: 'De private blokhutlandgoederen aan het meer en de architectchalets geven de rest van hun kalender vrij. Het venster van 32 dagen is de enige periode in het jaar waarin privékoks en helikoptercharters tussenseizoentarieven offreren.' },
      { title: 'Geen rijen, geen buren.', body: 'Lapland in de zomer ziet een fractie van de bezoekersdichtheid van de winter. Het wildernispad door het bos, het uitkijkpunt op de fjell, ze zijn in wezen van u.' },
    ],
    summerCollection: {
      eyebrow: 'De zomercollectie',
      h2: 'Vier villakarakters, in zomerlicht.',
      lede: 'Dezelfde architecturale categorieën als de wintercollectie, cabines met glazen dak, blokhutlandgoederen aan het meer, alpenchalets, bosvilla\'s, gefotografeerd in het middernachtzonlicht van eind juni om de tweede helft van het verhaal te tonen.',
      cards: [
        { title: 'Cabine met glazen dak in het groen', copy: 'De aurora-architectuur in het gouden licht van 23 uur, omringd door weelderig bos in plaats van sneeuw.' },
        { title: 'Blokhutlandgoed aan het meer', copy: 'Een private baai aan het Inarimeer, ontdooid, een kano aan de steiger, rook uit de houtgestookte sauna.' },
        { title: 'Designerchalet op de fjell', copy: 'Veenpluis en wilde bloemen vervangen de skipiste, dezelfde panoramische glazen gevel.' },
        { title: 'Moderne bosvilla', copy: 'Een uitkragend houten gebouw diep in de groene boreale dennen, de gouden warmte van de middernachtzon op de gevel.' },
      ],
    },
    planning: {
      h2: 'Een opmerking over het plannen van een middernachtzonreis.',
      p1: 'Het venster van 32 dagen is kort en de villa\'s zijn in individueel bezit, de kalender vult zich daardoor naar gelegenheid in plaats van gelijkmatig. De conciërge houdt elke zomer een kleine reservering aan in de reservelandgoederen.',
      p2: 'Het juiste moment om naar een bepaalde juni te informeren ligt tussen januari en maart van dat jaar. Latere aanvragen zijn nog steeds de moeite waard, er komen plekken vrij, maar het topsegment van de voorraad is vaak eerder weg.',
      quoting: 'Momenteel offreren wij zomer 2026 + 2027',
    },
    conciergeTitle: 'Informeer naar een middernachtzonreis.',
    conciergeBody: 'Stuurt u uw data, gezelschap en eventuele voorkeuren. Een antwoord arriveert binnen één werkdag met de beschikbaarheid in de hele zomercollectie, inclusief reservevilla\'s die niet publiek staan vermeld.',
  },
  conciergePage: {
    eyebrow: 'Het aanvraagformulier',
    h2: 'Vertelt u ons wat u voor ogen heeft.',
    intro: 'Vijf korte velden. Hoe specifieker de voorkeuren en randvoorwaarden, hoe nuttiger de shortlist. Naam en e-mail blijven optioneel, antwoorden gaan naar het adres waarvandaan het bericht komt.',
    fields: {
      headcount: 'Gezelschap',
      tripIntent: 'Reisintentie',
      budget: 'Indicatief budget per nacht',
      datesLabel: 'Data (of periode)',
      datesHint: 'bijv. "14–21 feb." of "eerste helft maart, 5 nachten"',
      datesPlaceholder: 'Optioneel',
      messageLabel: 'Iets specifieks',
      messageHint: 'Privékok, aankomst per helikopter, exclusief gebruik, toegankelijkheid, dieet, focus op fotografie, alles wat de shortlist vormgeeft.',
      nameLabel: 'Naam (optioneel)',
      namePlaceholder: 'Anoniem indien leeg',
      emailLabel: 'Antwoord-e-mail',
      emailHint: 'Indien leeg gaan antwoorden naar uw eigen afzendadres.',
      emailPlaceholder: 'optioneel',
    },
    options: {
      headcount: ['1–2 gasten', '3–4 gasten', '5–6 gasten', '7–10 gasten', 'Grotere groep'],
      intent: ['Auroraseizoen, eerste bezoek', 'Auroraseizoen, terugkerend bezoek', 'Middernachtzon (juni–juli)', 'Kerst / Nieuwjaar', 'Gezinsgroep', 'Privéviering', 'Huwelijksreis / retraite met z\'n tweeën', 'Anders, leg uit in het bericht'],
      budget: ['Onder de € 1.000 / nacht', '€ 1.000 – € 2.500 / nacht', '€ 2.500 – € 5.000 / nacht', '€ 5.000+ / nacht', 'Reservepand, exclusief gebruik', 'Zeg ik liever niet'],
    },
    submit: 'Privé-aanvraag versturen',
    sending: 'Versturen…',
    successH2: 'Aanvraag ontvangen.',
    successBody: 'Een antwoord arriveert binnen één werkdag. Wilt u rechtstreeks contact opnemen, dan bereikt u ons ook op',
    successFollowUp: '.',
    errorFallback: 'U kunt ons ook rechtstreeks mailen op',
    fallbackNotice: 'Uw mailprogramma wordt geopend om de aanvraag rechtstreeks te versturen.',
    fineprint: 'Inzendingen worden via een versleutelde verbinding doorgestuurd naar één privé-inbox in Finland. Geen CRM van derden, geen advertentietracking in de berichttekst.',
    trustStrip: [
      { title: 'Anoniem', body: 'Naam en e-mail zijn optioneel. De aanvraag wordt via een versleuteld formulier naar één inbox gestuurd.' },
      { title: 'private@laplandvibes.com', body: 'Bewaakt van maandag tot vrijdag. Antwoorden binnen één werkdag, geschreven door een persoon in Finland.' },
      { title: 'Standaard discreet', body: 'Geen CRM van derden, geen gedeelde agenda\'s. De shortlist wordt voor elke aanvraag onderhands opgesteld.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Waarom deze collectie bestaat',
        paragraphs: [
          'Luxe accommodatie in Lapland is een kleine wereld. Dezelfde handvol villa\'s en een paar dozijn suites duiken op elk boekingsplatform op, vaak met dezelfde stockfoto\'s en dezelfde vage prijsklasse. Reizigers die de voor de hand liggende reizen al hebben gemaakt, beginnen specifieker naar Lapland te vragen: welke villa zou u werkelijk boeken, waar plaatst u een gezin van negen, wat is de plek waar niemand over schrijft?',
          'Deze site is een kort, doordacht antwoord op die vragen, een met de hand samengestelde selectie van de villa\'s en suites die volgens ons de reis waard zijn.',
        ],
      },
      {
        title: 'Wat deze site niet doet',
        paragraphs: [
          'Wij exploiteren de villa\'s niet en zijn geen boekingsbureau. Er is hier geen gids en geen plan om er een te bouwen, de collectie wordt bewust klein gehouden.',
          'Wij zijn onafhankelijk. Wanneer een pand online te boeken is, verwijzen we naar de publieke aanbieding ervan, bijvoorbeeld via Hotels.com; die links kunnen ons een kleine commissie opleveren, zonder extra kosten voor u, en ze beïnvloeden nooit welke villa\'s we aanbevelen. Panden kunnen niet betalen om te worden uitgelicht.',
        ],
      },
      {
        title: 'Wie het runt',
        paragraphs: [
          {
            type: 'link',
            pre: 'Een klein, in Finland gevestigd team dat ook het ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: '-ecosysteem runt, een redactionele hub en een netwerk van Lapland-reissites. Deze site is het deel van dat werk dat zich richt op Laplands meest karakteristieke villa\'s en suites.',
          },
          'Aanvragen komen in één inbox terecht en worden persoonlijk beantwoord, geen chatbot, geen uitbesteed callcenter. Past een verzoek niet bij deze collectie (een te grote groep, een bestemming die we niet dekken), dan zeggen we dat eerlijk en verwijzen we u, waar mogelijk, naar een beter adres.',
        ],
      },
      {
        title: 'Twee soorten reizen die wij niet aannemen',
        paragraphs: [
          'Bruiloften met meer dan dertig gasten en het volledig afhuren van een pand voor merkevenementen vallen buiten datgene waarvoor deze panden zijn gebouwd. Wij verwijzen u graag door naar operators die dat soort evenement naar behoren verzorgen.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'De collectie',
    bedroom: 'slaapkamer',
    bedrooms: 'slaapkamers',
    sleeps: 'Slaapt',
    fromPerNight: 'Vanaf / nacht',
    nightlyHint: 'Indicatief laagseizoentarief. Het werkelijke nachttarief hangt af van de data, de verblijfsduur en de inbegrepen diensten.',
    rate: 'Tarief',
    onRequest: 'Op aanvraag',
    reserveHint: 'Reservepand, onderhands geoffreerd op aanvraag, nooit via een publieke aanbieding.',
    beginInquiry: 'Privé-aanvraag starten',
    viewRates: 'Bekijk publieke tarieven',
    orSendInquiry: 'Of stuur een privé-aanvraag',
    signatureEyebrow: 'Signature-details',
    signatureH2: 'Zes dingen die u bij aankomst kunt verifiëren.',
    destinationEyebrow: 'De bestemming',
    readProfile: (name) => `Lees het profiel van ${name} →`,
    conciergeTitle: (dest) => `Start een aanvraag voor ${dest}.`,
    conciergeBody: 'Stuurt u uw data, gezelschap en voorkeuren. Een antwoord arriveert binnen één werkdag met de beschikbaarheid, het werkelijke nachttarief en eventuele reservevilla\'s die goed bij deze passen.',
    alsoEyebrow: 'Ook in de collectie',
    alsoH2: 'Drie andere villa\'s die het overwegen waard zijn.',
  },
  notFound: {
    eyebrow: 'Fout',
    body: 'Deze pagina maakt geen deel uit van de collectie. De villa\'s, suites en bestemmingen staan hieronder vermeld.',
    home: 'Home',
    collection: 'De collectie',
  },
  contactPage: {
    seoTitle: 'Contact · LaplandLuxuryVillas',
    seoDescription: 'Eén privépostvak: private@laplandvibes.com. Beheerd door Lapeso Oy vanuit Fins Lapland. Contact voor pers, partnerschappen en directe deals hieronder.',
    eyebrow: 'Contact',
    h1: 'Eén postvak, één exploitant.',
    cards: {
      private: {
        eyebrow: 'Privé-aanvragen',
        body: 'Anonieme reisplanning, shortlists van villa\'s, vragen over directe tarieven. Antwoord binnen één werkdag.',
      },
      press: {
        eyebrow: 'Pers & partnerschappen',
        body: 'Redactionele verzoeken, partnerschapsvoorstellen van panden, vragen van journalisten.',
      },
      deals: {
        eyebrow: 'Directe deals (panden)',
        body: 'Voor eigenaren en exploitanten van villa\'s die in de collectie willen worden opgenomen. We wijzen de meeste aanmeldingen af, lees eerst de pagina Over ons.',
      },
      general: {
        eyebrow: 'Algemeen & redactioneel',
        body: 'Al het overige. Tragere afhandeling dan private@; gebruik voor reisplanning het conciërgepostvak hierboven.',
      },
    },
    privateCta: 'Stuur een privé-aanvraag',
    operatorEyebrow: 'Exploitant',
    location: 'Fins Lapland, in Finland geregistreerd bedrijf.',
    aboutPre: 'Zie de pagina ',
    aboutLabel: 'Over ons',
    aboutPost: ' voor de bredere context van het LaplandVibes-ecosysteem.',
  },
  footerNote:
    'Een privécollectie, samengesteld in Fins Lapland, voor het laatst beoordeeld in mei 2026. Sommige boekingen leveren een affiliatiecommissie op, die nooit bepaalt welke villa\'s worden aanbevolen. De reserve- en uitsluitend via de conciërge geboekte panden betalen niets.',
  footerPillars: [
    { name: 'De collectie', href: '/villas' },
    { name: 'Designersuites', href: '/suites' },
    { name: 'Bestemmingen', href: '/destinations' },
    { name: 'Ervaringen', href: '/experiences' },
    { name: 'Middernachtzon', href: '/midnight-sun' },
    { name: 'Privéconciërge', href: '/concierge' },
  ],
}

// ============================================================================
// Body-level translation overlays for ko/fr/it/nl, editorial luxury tone
// ============================================================================

// KOREAN, formal polite (-니다/-습니다)
Object.assign(ko.cta, {
  inquireAboutJune: '6월 일정 문의', inquireAboutJuneShort: '6월 문의',
  seeSummerCollection: '여름 컬렉션 보기', fullVillaCollection: '전체 빌라 컬렉션',
  sendPrivateInquiry: '비공개 문의 보내기', sendAnother: '추가 문의 보내기',
  home: '홈', theCollection: '컬렉션', sending: '전송 중…',
  subscribe: '구독', subscribed: '구독 완료',
})
Object.assign(ko.badges, {
  onRequest: '요청 시', fromPerNight: '시작가 / 1박', fromPerPerson: '시작가 / 1인', fromPerGroup: '시작가 / 그룹',
  rate: '요금', bedroom: '침실', bedrooms: '침실', sleeps: '수용 인원',
  arrival: '도착', aurora: '오로라', highlights: '하이라이트',
  villas: (n: number) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  villasIn: (name: string) => `${name}의 빌라`,
  villasInH2: (n: number, _name: string) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  alsoInCollection: '컬렉션의 다른 빌라', threeOthers: '검토할 가치가 있는 세 개의 빌라.',
  signatureDetails: '시그니처 디테일', sixVerifyOnArrival: '도착 시 확인 가능한 여섯 가지.',
  theDestination: '여행지', fullCollectionShort: '전체 컬렉션',
})
Object.assign(ko.tier, { signature: '시그니처', private: '프라이빗 컬렉션', reserve: '리저브 · 컨시어지 전용' })
Object.assign(ko.category, { 'glass-roof': '글래스 루프 빌라', 'log-estate': '프라이빗 로그 저택', 'designer-suite': '디자이너 스위트', 'alpine-chalet': '알파인 샬레', 'lakeside-retreat': '호숫가 리트리트' })
Object.assign(ko.concierge, {
  eyebrow: '프라이빗 컨시어지',
  defaultTitle: '라플란드 여행을 더 조용히 계획하는 방법.',
  defaultBody: '단 하나의 메시지를 보내주세요, 선호 사항, 일정, 인원, 컨시어지가 영업일 1일 이내에 비공개 셔틀리스트로 답변드립니다. 공개 프로필도, 공유 캘린더도 없습니다.',
  inquireBtn: '비공개 문의',
  badges: { anonymous: '익명 여행 계획', reply: '영업일 1일 이내 답변', rates: '요청 시 직접 요금 안내' },
})
Object.assign(ko.midnightSunBand, {
  eyebrow: '6월 6일 – 7월 7일',
  h2: '빛이 끊이지 않는 32일, 그 빌라들.',
  body: '같은 건축, 다른 계절. 글래스 루프는 결코 지지 않는 태양을 향한 스카이라이트가 되고, 호수는 녹으며, 숲은 클라우드베리로 가득 찹니다. 겨울의 절반 수요, 그리고 프라이빗 셰프, 헬기 차터, 리저브 빌라가 나머지 캘린더를 여는 1년 중 단 하나의 창입니다.',
  primary: '여름 컬렉션 보기', secondary: '6월 일정 문의',
})
Object.assign(ko.newsletter, {
  eyebrow: '#LaplandVibes 뉴스레터',
  h2: '빌라가 새 일정을 열거나 비공개 출시 소식을 듣게 되면 조용히 전합니다.',
  lede: '직접 요금. 막판 컨시어지 가능 일정. 새 달이 뜨기 한 주 전의 오로라 예보. 스팸 없이, 핀란드에서 작성되어, 전할 만한 것이 있을 때에만 발송합니다.',
  emailPlaceholder: 'your@email.com', footnote: '클릭 한 번으로 구독 해지.',
  welcome: '환영합니다. 첫 발신은 일주일 이내에 도착합니다.',
  already: '이미 명단에 계십니다, 다음 발신에서 뵙겠습니다.',
  invalidEmail: '이메일 주소가 올바르지 않은 듯합니다.',
  networkError: '네트워크 오류. 다시 시도해 주세요.',
  genericError: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
})
Object.assign(ko.affiliateDisclosure, {
  compact: '제휴 링크, 예약 시 추가 비용 없이 소액의 수수료를 받습니다.',
  full: '이 페이지는 제휴 링크를 포함합니다. 이 링크를 통해 예약하시면 LaplandLuxuryVillas가 추가 비용 없이 수수료를 받을 수 있습니다.',
})
ko.hero.suites = { eyebrow: '디자이너 스위트', title: '빌라가 필요하지 않을 때, 그러나 글래스 루프는 필요할 때.', lede: '건축 자체가 경험인, 침실 하나 스위트와 오로라 캐빈의 짧은 목록. 더 적은 인원, 같은 파노라마 천장.' }
ko.hero.destinations = { eyebrow: '여행지', title: '다섯 곳, 각각 그곳에 있을 분명한 이유.', lede: '라플란드는 균질하지 않습니다. 오로라 빈도, 도착 동선, 숙박 밀도는 북극권 이북 50km마다 의미 있게 달라집니다.' }
ko.hero.experiences = { eyebrow: '비스포크 체험', title: '글래스 아래의 밤, 그 전의 낮.', lede: '빌라와 함께 매치하는 여덟 가지 프라이빗 체험, 각각 날씨 창, 일조 시간, 빌라 체크인에 맞춰 예약됩니다.' }
ko.hero.concierge = { eyebrow: '프라이빗 컨시어지', title: '하나의 비공개 메시지, 하나의 큐레이션된 셔틀리스트.', lede: '일정, 인원, 원하시는 여행의 성격을 보내주세요. 영업일 1일 이내에 답변 드립니다, 적합한 경우에는 공개되지 않는 리저브 빌라까지 포함하여.' }
ko.hero.about = { eyebrow: '소개', title: '의도적으로 짧게 유지된 짧은 목록.', lede: '라플란드 최고의 빌라와 스위트의 프라이빗 컬렉션, 익명 컨시어지, 가능한 곳에서는 직접 요금, 중간 플랫폼 없음.' }
ko.home = {
  philosophy: {
    eyebrow: '운영 방식',
    h2: '예약 플랫폼의 정반대.',
    items: [
      { title: '디렉터리가 아닌 짧은 목록.', body: '여정의 가치를 진정 정당화하는 여행지의 9개 빌라와 스위트. 추가되는 것보다 거절되는 경우가 더 많습니다, 이 페이지의 모든 항목은 신중한 여행자가 망설임 없이 예약할 수 있는 것입니다.' },
      { title: '익명 여행 계획.', body: '단 하나의 비공개 받은편지함, 공개 프로필 없음, 제3자와 공유되는 캘린더 없음. 일정, 인원, 선호를 보내주세요, 영업일 1일 이내에 큐레이션된 셔틀리스트를 받으실 수 있습니다.' },
      { title: '가능한 곳에서는 직접 요금.', body: '공개 리스팅은 검증된 요금으로 연결됩니다. 비공개로 보유되는 빌라, 공개 가용성이 없는 리저브 빌라 포함, 는 직접 견적됩니다. 답변에서 어느 쪽인지 알려드립니다.' },
    ],
  },
  signature: { eyebrow: '시그니처 빌라', h2: '라플란드 컬렉션의 네 가지 앵커.', lede: '가장 자주 추천되는 빌라들. 아래 모든 디테일은 운영사 공식 정보와 최근 후기로 검증된 정보입니다.' },
  destinations: { eyebrow: '여행지', h2: '다섯 곳, 각각 분명한 이유.' },
}
Object.assign(ko.villasPage, {
  filters: { all: '전체', glassRoof: '글래스 루프', logEstate: '로그 저택', designerSuite: '디자이너 스위트', alpineChalet: '알파인 샬레', lakeside: '호숫가' },
  noVillas: '아직 이 카테고리의 빌라가 없습니다.',
  conciergeTitle: '딱 맞는 것을 찾지 못하셨나요?',
  conciergeBody: '위 컬렉션은 현재 공개된 것입니다. 추가 빌라는 비공개로 보유되고 있습니다, 공개 리스팅이 없는 리저브 빌라를 포함하여, 문의 시 직접 견적해 드립니다.',
})
Object.assign(ko.suitesPage, {
  intro: { p1Pre: '라플란드의 "스위트"는 알아둘 만한 두 가지 건축적 접근을 포괄합니다. 첫째는 ', designerSuite: '디자이너 스위트', p1Mid: ', 핀란드 선두 스튜디오(Studio Puisto, ALA, Avanto)가 하나의 침실을 하나의 풍경에 맞춰 지은 것입니다. 둘째는 ', glassRoof: '글래스 루프 캐빈', p1Post: ', 천장이 헤드라인 디테일입니다. 두 가지 모두 아래에 정리되어 있습니다.' },
  conciergeTitle: '두 개의 스위트 예약, 또는 프라이빗 플로어?',
  conciergeBody: '몇몇 빌라는 비수기에 다중 스위트 플로어를 독점 사용으로 개방합니다. 일정과 인원을 공유해 주세요.',
})
Object.assign(ko.destinationsPage, { destinationLabel: (i: number) => `여행지 0${i + 1}`, readTheProfile: (name: string) => `${name} 프로필 읽기` })
Object.assign(ko.destinationPage, {
  backLink: '여행지', eyebrow: '여행지 · 핀란드 라플란드',
  arrival: '도착', aurora: '오로라', highlights: '하이라이트',
  villasHere: (n: number) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  villasHereH2: (n: number) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  fullCollection: '전체 컬렉션',
  conciergeTitle: (name: string) => `프라이빗 ${name} 여행 계획하기.`,
  conciergeBody: '일정, 인원, 선호 사항(프라이빗 셰프, 헬기 도착, 독점 사용)을 보내주세요. 영업일 1일 이내에 셔틀리스트로 답변드립니다.',
})
Object.assign(ko.experiencesPage, {
  sections: {
    aurora: { title: '오로라', intro: '오로라 자체는 무료입니다. 여기서 판매하는 것은 접근, 적합한 차량, 적합한 가이드, 적합한 구름 창 아래의 적합한 밤입니다.' },
    wilderness: { title: '야생', intro: '모두가 라플란드에 오는 이유의 프라이빗 버전, 허스키, 스노모빌, 순록, 단체 버스와 루프 코스 없이.' },
    culinary: { title: '식문화', intro: '라플란드 진지한 주방 출신의 현역 셰프가 저녁 시간에 빌라로, 또는 그 주방이 방문 이유 자체일 때의 온프로퍼티 테이스팅 메뉴.' },
    arrival: { title: '도착', intro: '프라이빗 제트, 헬기 이동, 북극 사양 지상 차량. 도착 슬롯, 일조 창, 빌라 체크인에 맞춰 예약됩니다.' },
  },
})
Object.assign(ko.midnightSunPage, {
  facts: [{ value: '32', label: '해가 지지 않는 일수' }, { value: '24h', label: '정점의 일조, 6월 21일' }, { value: '+18°C', label: '6월 말 평균 낮 기온' }, { value: '50%', label: '오로라 시즌 대비 낮은 수요' }],
  fourReasons: '네 가지 이유', h2: '여름의 라플란드는 별개의 장소입니다.',
  reasons: [
    { title: '건축의 성격이 바뀝니다.', body: '오로라를 위해 존재하던 글래스 루프가 이제는 결코 지지 않는 태양을 담는 프레임이 됩니다. 침대 위 스카이라이트, 호수 위 태양, 커튼을 칠 필요 없음, 숨을 밤이 없습니다.' },
    { title: '야생이 접근 가능해집니다.', body: '호수가 녹고, 북방림이 열리며, 카누 경로가 나타납니다. 2월에 스노모빌로 가던 같은 빌라가 이제는 부두에서 보트로 5분 거리입니다.' },
    { title: '리저브 빌라가 개방됩니다.', body: '프라이빗 호숫가 로그 저택과 건축가 샬레가 나머지 캘린더를 풉니다. 32일의 창은 프라이빗 셰프와 헬기 차터가 비수기 요금을 견적하는 1년 중 유일한 시기입니다.' },
    { title: '줄도, 이웃도 없습니다.', body: '여름의 라플란드는 겨울 방문자 밀도의 일부에 불과합니다. 숲을 가로지르는 야생 산책로, 산봉우리의 전망대, 사실상 당신의 것입니다.' },
  ],
  summerCollection: {
    eyebrow: '여름 컬렉션', h2: '네 가지 빌라 캐릭터, 여름빛 속에서.',
    lede: '겨울 컬렉션과 같은 건축 카테고리, 글래스 루프 캐빈, 호숫가 로그 저택, 알파인 샬레, 숲속 빌라, 6월 말 백야의 빛에서 촬영하여 이야기의 후반부를 보여줍니다.',
    cards: [
      { title: '녹음 속 글래스 루프 캐빈', copy: '오로라 건축이 23시의 황금빛 속에서, 눈 대신 무성한 숲에 둘러싸여.' },
      { title: '호숫가 로그 저택', copy: '얼어붙지 않은 이나리 호수의 프라이빗 만, 부두의 카누, 장작 사우나의 연기.' },
      { title: '산봉우리 디자이너 샬레', copy: '코튼그래스와 야생화가 스키 슬로프를 대신합니다, 같은 파노라마 글래스 파사드.' },
      { title: '현대 숲속 빌라', copy: '깊은 푸른 북방 소나무 속의 캔틸레버 목조 건물, 황금빛 백야가 파사드에 닿습니다.' },
    ],
  },
  planning: { h2: '백야 여행 계획에 대한 짧은 메모.', p1: '32일의 창은 짧고 빌라는 개별 소유이므로, 캘린더는 균등하기보다 기회적으로 채워집니다. 컨시어지는 매년 여름 리저브 저택에 소량의 할당을 보유합니다.', p2: '특정 6월 문의의 적기는 그 해 1~3월입니다. 그 이후의 문의도 보낼 가치가 있습니다, 출시가 발생하니까요, 그러나 고급 인벤토리는 종종 더 일찍 나갑니다.', quoting: '현재 2026 + 2027 여름 견적 중' },
  conciergeTitle: '백야 여행 문의하기.', conciergeBody: '일정, 인원, 선호 사항을 보내주세요. 영업일 1일 이내에 여름 컬렉션 전체의 가용성으로 답변드립니다, 공개되지 않는 리저브 빌라 포함.',
})
Object.assign(ko.conciergePage, {
  eyebrow: '문의 양식', h2: '그리고 계신 모습을 말씀해 주세요.',
  intro: '다섯 개의 짧은 필드. 선호와 제약이 구체적일수록 셔틀리스트가 더 유용해집니다. 이름과 이메일은 선택 사항, 답변은 메시지가 온 주소로 발송됩니다.',
  fields: {
    headcount: '인원 수', tripIntent: '여행 의도', budget: '예상 1박 예산',
    datesLabel: '날짜 (또는 기간)', datesHint: '예: "2월 14–21일" 또는 "3월 전반, 5박"', datesPlaceholder: '선택 사항',
    messageLabel: '구체적인 사항', messageHint: '프라이빗 셰프, 헬기 도착, 독점 사용, 접근성, 식이, 사진 촬영 중심, 셔틀리스트를 형성하는 무엇이든.',
    nameLabel: '이름 (선택)', namePlaceholder: '비워두시면 익명', emailLabel: '회신 이메일', emailHint: '비워두시면 발신 주소로 회신됩니다.', emailPlaceholder: '선택 사항',
  },
  options: {
    headcount: ['1–2명', '3–4명', '5–6명', '7–10명', '더 큰 그룹'],
    intent: ['오로라 시즌, 첫 방문', '오로라 시즌, 재방문', '백야 (6–7월)', '크리스마스 / 새해', '가족 그룹', '프라이빗 기념', '허니문 / 2인 리트리트', '기타, 메시지에서 설명'],
    budget: ['€1,000 / 박 미만', '€1,000 – €2,500 / 박', '€2,500 – €5,000 / 박', '€5,000+ / 박', '리저브, 독점 사용', '말씀하지 않겠습니다'],
  },
  submit: '비공개 문의 보내기', sending: '전송 중…',
  successH2: '문의가 접수되었습니다.', successBody: '영업일 1일 이내에 답변이 도착합니다. 직접 후속 문의를 원하시면 다음으로 연락하실 수 있습니다',
  successFollowUp: '.', errorFallback: '직접 이메일로 연락하실 수도 있습니다', fallbackNotice: '직접 문의 전송을 위해 메일 클라이언트를 엽니다.',
  fineprint: '제출물은 암호화된 연결을 통해 핀란드의 단일 비공개 받은편지함으로 전달됩니다. 제3자 CRM 없음, 메시지 본문에 광고 추적 없음.',
  trustStrip: [
    { title: '익명', body: '이름과 이메일은 선택 사항. 문의는 암호화된 양식을 통해 단일 받은편지함으로 전송됩니다.' },
    { title: 'private@laplandvibes.com', body: '월–금 모니터링. 영업일 1일 이내에 핀란드의 사람이 직접 작성한 답변.' },
    { title: '기본적으로 신중하게', body: '제3자 CRM 없음, 공유 캘린더 없음. 셔틀리스트는 각 문의를 위해 비공개로 구성됩니다.' },
  ],
})
Object.assign(ko.aboutPage, {
  sections: [
    { title: '이 컬렉션이 존재하는 이유', paragraphs: [
      '라플란드의 럭셔리 숙소는 좁은 세계입니다. 같은 몇 채의 빌라와 수십 곳의 스위트가 모든 예약 플랫폼에 등장합니다, 흔히 같은 스톡 사진과 똑같이 모호한 가격대를 달고서. 뻔한 여행은 이미 다녀온 여행자들은 라플란드를 더 구체적으로 묻기 시작합니다. 당신이라면 실제로 어느 빌라를 예약하겠는가, 아홉 식구는 어디에 묵게 하겠는가, 아무도 쓰지 않는 그곳은 어디인가.',
      '이 사이트는 그 질문들에 대한 짧고 신중한 답입니다, 여정을 떠날 만하다고 우리가 믿는 빌라와 스위트를 손수 골라 추린 목록입니다.',
    ]},
    { title: '이 사이트가 하지 않는 일', paragraphs: [
      '우리는 빌라를 운영하지 않으며 예약 대행사도 아닙니다. 이곳에는 디렉터리가 없고, 만들 계획도 없습니다, 컬렉션은 의도적으로 작게 유지합니다.',
      '우리는 독립적입니다. 온라인으로 예약할 수 있는 숙소의 경우 그 공개 매물로 연결합니다. 예를 들어 Hotels.com을 통해서입니다. 이러한 링크는 추가 비용 없이 우리에게 소액의 수수료를 안겨 줄 수 있으나, 어느 빌라를 추천할지에는 결코 영향을 주지 않습니다. 숙소는 비용을 지불하고 소개될 수 없습니다.',
    ]},
    { title: '누가 운영하나', paragraphs: [
      { type: 'link', pre: '핀란드에 기반을 둔 작은 팀으로, ', label: 'LaplandVibes', href: 'https://laplandvibes.com', post: ' 생태계, 편집 허브와 라플란드 여행 사이트 네트워크, 도 함께 운영합니다. 이 사이트는 그 작업 가운데 라플란드의 가장 개성 있는 빌라와 스위트에 집중하는 부분입니다.' },
      '문의는 하나의 받은편지함으로 모이며 사람이 직접 답합니다, 챗봇도, 외주 콜센터도 없습니다. 요청이 이 컬렉션에 맞지 않으면(인원이 너무 많거나, 우리가 다루지 않는 여행지인 경우) 솔직하게 말씀드리고, 가능한 경우 더 나은 곳을 안내해 드립니다.',
    ]},
    { title: '받지 않는 두 가지 여행', paragraphs: [
      '서른 명을 넘는 하객의 결혼식, 그리고 브랜드 행사를 위해 숙소 전체를 빌리는 일은 이 숙소들이 지어진 목적의 밖에 있습니다. 그런 행사를 제대로 다루는 운영자를 기꺼이 소개해 드립니다.',
    ]},
  ],
})
Object.assign(ko.villaDetailPage, {
  backLink: '컬렉션', bedroom: '침실', bedrooms: '침실', sleeps: '수용 인원',
  fromPerNight: '시작가 / 1박', nightlyHint: '비수기 참고 요금. 실제 1박 요금은 일정, 숙박 기간, 포함 사항에 따라 달라집니다.',
  rate: '요금', onRequest: '요청 시', reserveHint: '리저브 빌라, 공개 리스팅 없이 문의 시 비공개로 견적됩니다.',
  beginInquiry: '비공개 문의 시작', viewRates: '공개 요금 보기', orSendInquiry: '또는 비공개 문의 보내기',
  signatureEyebrow: '시그니처 디테일', signatureH2: '도착 시 확인 가능한 여섯 가지.',
  destinationEyebrow: '여행지', readProfile: (name: string) => `${name} 프로필 읽기 →`,
  conciergeTitle: (dest: string) => `${dest} 문의 시작하기.`,
  conciergeBody: '일정, 인원, 선호 사항을 보내주세요. 영업일 1일 이내에 가용성, 실제 1박 요금, 이 빌라와 함께 페어링할 가치가 있는 리저브 빌라를 포함한 답변이 도착합니다.',
  alsoEyebrow: '컬렉션의 다른 빌라', alsoH2: '검토할 가치가 있는 세 개의 빌라.',
})
Object.assign(ko.notFound, { eyebrow: '오류', body: '이 페이지는 컬렉션의 일부가 아닙니다. 빌라, 스위트, 여행지는 아래에 나열되어 있습니다.', home: '홈', collection: '컬렉션' })
ko.footerNote = '핀란드 라플란드에서 큐레이션된 프라이빗 컬렉션, 최종 검토 2026년 5월. 일부 예약은 제휴 수수료를 발생시키지만, 이는 결코 어느 빌라가 추천될지에 영향을 주지 않습니다. 리저브 및 컨시어지 전용 빌라는 아무것도 지불하지 않습니다.'

// FRENCH, vous, editorial luxury
Object.assign(fr.cta, {
  inquireAboutJune: 'Consulter les dates de juin', inquireAboutJuneShort: 'Dates de juin',
  seeSummerCollection: 'Voir la collection estivale', fullVillaCollection: 'Collection complète des villas',
  sendPrivateInquiry: 'Envoyer une demande privée', sendAnother: 'Envoyer une autre demande',
  home: 'Accueil', theCollection: 'La collection', sending: 'Envoi…', subscribe: 'S\'abonner', subscribed: 'Abonné',
})
Object.assign(fr.badges, {
  onRequest: 'Sur demande', fromPerNight: 'À partir de / nuit', fromPerPerson: 'À partir de / personne', fromPerGroup: 'À partir de / groupe',
  rate: 'Tarif', bedroom: 'chambre', bedrooms: 'chambres', sleeps: 'Capacité',
  arrival: 'Arrivée', aurora: 'Aurore', highlights: 'Points forts',
  villas: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  villasIn: (name: string) => `Villas à ${name}`,
  villasInH2: (n: number, _name: string) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  alsoInCollection: 'Également dans la collection', threeOthers: 'Trois autres villas à considérer.',
  signatureDetails: 'Détails signature', sixVerifyOnArrival: 'Six choses à vérifier à l\'arrivée.',
  theDestination: 'La destination', fullCollectionShort: 'Collection complète',
})
Object.assign(fr.tier, { signature: 'Signature', private: 'Collection privée', reserve: 'Réserve · Conciergerie uniquement' })
Object.assign(fr.category, { 'glass-roof': 'Villa à toit de verre', 'log-estate': 'Propriété privée en rondins', 'designer-suite': 'Suite design', 'alpine-chalet': 'Chalet alpin', 'lakeside-retreat': 'Retraite au bord du lac' })
Object.assign(fr.concierge, {
  eyebrow: 'La conciergerie privée',
  defaultTitle: 'Une façon plus discrète de planifier un voyage en Laponie.',
  defaultBody: 'Envoyez un seul message, préférences, dates, nombre de voyageurs, et notre conciergerie répond avec une présélection privée en un jour ouvré. Pas de profil public, pas de calendriers partagés.',
  inquireBtn: 'Demande privée',
  badges: { anonymous: 'Planification anonyme', reply: 'Réponse en un jour ouvré', rates: 'Tarifs directs sur demande' },
})
Object.assign(fr.midnightSunBand, {
  eyebrow: '6 juin – 7 juillet',
  h2: 'Les villas, en 32 jours de lumière ininterrompue.',
  body: 'Même architecture, autre saison. Le toit de verre devient une lucarne sur un soleil qui ne se couche jamais, le lac dégèle, la forêt se remplit de mûres arctiques. Demande divisée par deux par rapport à l\'hiver, et l\'unique fenêtre de l\'année où chefs privés, charters d\'hélicoptère et villas de réserve ouvrent le reste de leur calendrier.',
  primary: 'Voir la collection estivale', secondary: 'Consulter les dates de juin',
})
Object.assign(fr.newsletter, {
  eyebrow: 'La newsletter #LaplandVibes',
  h2: 'Une dépêche discrète lorsque les villas ouvrent de nouvelles dates et que nous entendons parler d\'une remise privée.',
  lede: 'Tarifs directs. Ouvertures conciergerie de dernière minute. Prévisions de fenêtres d\'aurore la semaine précédant chaque nouvelle lune. Pas de spam, rédigée en Finlande, envoyée uniquement quand il y a quelque chose de spécifique à dire.',
  emailPlaceholder: 'votre@email.com', footnote: 'Désabonnement en un clic.',
  welcome: 'Bienvenue à bord. La première dépêche arrive dans la semaine.',
  already: 'Vous êtes déjà sur la liste, rendez-vous dans la prochaine dépêche.',
  invalidEmail: 'Cette adresse e-mail semble invalide.',
  networkError: 'Erreur réseau. Veuillez réessayer.',
  genericError: 'Quelque chose s\'est mal passé. Réessayez dans un instant.',
})
Object.assign(fr.affiliateDisclosure, {
  compact: 'Liens d\'affiliation, nous percevons une petite commission sans coût supplémentaire pour vous.',
  full: 'Cette page contient des liens d\'affiliation. Si vous réservez via ces liens, LaplandLuxuryVillas peut percevoir une commission sans coût supplémentaire pour vous.',
})
fr.hero.suites = { eyebrow: 'Suites design', title: 'Quand vous n\'avez pas besoin d\'une villa, mais bien du toit de verre.', lede: 'Une courte liste de suites une-chambre et de cabines à aurore où l\'architecture est l\'expérience. Effectif réduit, même plafond panoramique.' }
fr.hero.destinations = { eyebrow: 'Destinations', title: 'Cinq lieux, chacun avec une raison claire d\'y être.', lede: 'La Laponie n\'est pas interchangeable. La fréquence d\'aurore, la logistique d\'arrivée et la densité d\'hébergement changent de façon significative tous les 50 km au nord du cercle polaire.' }
fr.hero.experiences = { eyebrow: 'Expériences sur mesure', title: 'La journée, avant la nuit sous le verre.', lede: 'Huit expériences privées que nous associons aux villas, chacune réservée selon la fenêtre météo, la lumière du jour et l\'horaire d\'enregistrement.' }
fr.hero.concierge = { eyebrow: 'Conciergerie privée', title: 'Un message privé, une présélection sur mesure.', lede: 'Envoyez dates, effectif et le type de voyage envisagé. Nous répondons en un jour ouvré, y compris, le cas échéant, avec les villas de réserve qui n\'apparaissent jamais publiquement.' }
fr.hero.about = { eyebrow: 'À propos', title: 'Une liste courte, gardée courte volontairement.', lede: 'Une collection privée des plus belles villas et suites de Laponie, conciergerie anonyme, tarifs directs quand ils existent, aucune plateforme intermédiaire.' }
fr.home = {
  philosophy: { eyebrow: 'Notre façon de travailler', h2: 'L\'opposé d\'une plateforme de réservation.',
    items: [
      { title: 'Une liste courte, pas un annuaire.', body: 'Neuf villas et suites dans les destinations qui justifient réellement le voyage. Les propriétés sont plus souvent refusées qu\'ajoutées, chaque entrée de cette page est une que le voyageur attentionné peut réserver sans hésitation.' },
      { title: 'Planification anonyme.', body: 'Une seule boîte de réception privée, aucun profil public, aucun calendrier partagé avec des tiers. Envoyez dates, effectif et préférences, recevez une présélection en un jour ouvré.' },
      { title: 'Tarifs directs, là où ils existent.', body: 'Les annonces publiques renvoient vers des tarifs vérifiés. Les propriétés détenues en privé, y compris les villas de réserve sans disponibilité publique, sont cotées directement. La réponse vous dit laquelle est laquelle.' },
    ] },
  signature: { eyebrow: 'Villas signature', h2: 'Quatre piliers de la collection lapone.', lede: 'Les propriétés les plus souvent recommandées. Chaque détail ci-dessous est vérifié à partir des informations de l\'exploitant et d\'avis récents, jamais copié d\'une brochure.' },
  destinations: { eyebrow: 'Destinations', h2: 'Cinq lieux, chacun avec une raison claire.' },
}
Object.assign(fr.villasPage, {
  filters: { all: 'Toutes', glassRoof: 'Toit de verre', logEstate: 'Rondins', designerSuite: 'Suite design', alpineChalet: 'Chalet alpin', lakeside: 'Bord du lac' },
  noVillas: 'Aucune villa dans cette catégorie pour l\'instant.',
  conciergeTitle: 'Vous ne trouvez pas la bonne adresse ?',
  conciergeBody: 'La collection ci-dessus est ce qui est actuellement publié. D\'autres villas sont détenues en privé, y compris des propriétés de réserve sans annonce publique, et cotées directement sur demande.',
})
Object.assign(fr.suitesPage, {
  intro: { p1Pre: '« Suite » en Laponie recouvre deux gestes architecturaux distincts, tous deux à connaître. Le premier est la ', designerSuite: 'suite design', p1Mid: ', où un studio finlandais de premier plan (Studio Puisto, ALA, Avanto) a bâti une chambre unique autour d\'une vue unique. Le second est la ', glassRoof: 'cabine à toit de verre', p1Post: ', où le plafond est le détail principal. Les deux sont listés ci-dessous.' },
  conciergeTitle: 'Une réservation deux-suites, ou un étage privé ?',
  conciergeBody: 'Plusieurs de ces propriétés libèrent un étage multi-suites en usage exclusif en mi-saison. Partagez vos dates et votre effectif.',
})
Object.assign(fr.destinationsPage, { destinationLabel: (i: number) => `Destination 0${i + 1}`, readTheProfile: (name: string) => `Lire le profil ${name}` })
Object.assign(fr.destinationPage, {
  backLink: 'Destinations', eyebrow: 'Destination · Laponie finlandaise',
  arrival: 'Arrivée', aurora: 'Aurore', highlights: 'Points forts',
  villasHere: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  villasHereH2: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  fullCollection: 'Collection complète',
  conciergeTitle: (name: string) => `Planifier un séjour privé à ${name}.`,
  conciergeBody: 'Envoyez dates, effectif et préférences (chef privé, arrivée en hélicoptère, usage exclusif). Nous répondons par une présélection en un jour ouvré.',
})
Object.assign(fr.experiencesPage, {
  sections: {
    aurora: { title: 'Aurore', intro: 'Les aurores elles-mêmes sont gratuites. Ce qui se vend ici est l\'accès, le bon véhicule, le bon guide et la bonne nuit sous la bonne fenêtre nuageuse.' },
    wilderness: { title: 'Nature sauvage', intro: 'Versions privées des expériences pour lesquelles tout le monde vient en Laponie, husky, motoneige, renne, sans le bus partagé ni le sentier en boucle.' },
    culinary: { title: 'Gastronomie', intro: 'Un chef en activité issu d\'une des cuisines sérieuses de la Laponie, dans votre villa, pour une soirée, ou la dégustation sur place quand la cuisine est la raison de la venue.' },
    arrival: { title: 'Arrivée', intro: 'Jet privé, transfert hélicoptère, véhicules au sol arctiques. Réservés selon le créneau, la fenêtre de lumière et l\'enregistrement.' },
  },
})
Object.assign(fr.midnightSunPage, {
  facts: [{ value: '32', label: 'Jours où le soleil ne se couche pas' }, { value: '24h', label: 'Lumière au pic, 21 juin' }, { value: '+18°C', label: 'Moyenne diurne fin juin' }, { value: '50%', label: 'Demande inférieure à la saison aurore' }],
  fourReasons: 'Quatre raisons', h2: 'La Laponie en été est un autre lieu.',
  reasons: [
    { title: 'L\'architecture change de caractère.', body: 'Les toits de verre qui existent pour les aurores encadrent désormais un soleil ininterrompu. Lucarne sur le lit, soleil sur le lac, aucune raison de tirer un rideau, il n\'y a pas de nuit pour se cacher.' },
    { title: 'La nature devient accessible.', body: 'Les lacs dégèlent, la forêt boréale s\'ouvre, les routes de canoë apparaissent. La même villa atteinte en motoneige en février est désormais à cinq minutes en bateau du ponton.' },
    { title: 'Les villas de réserve ouvrent.', body: 'Les propriétés privées au bord du lac et les chalets d\'architecte libèrent le reste de leur calendrier. La fenêtre de 32 jours est le seul moment de l\'année où chefs privés et charters d\'hélicoptère cotent en mi-saison.' },
    { title: 'Pas de files, pas de voisins.', body: 'La Laponie en été voit une fraction de la densité de visiteurs hivernale. Le sentier sauvage dans la forêt, le belvédère au sommet, ils sont essentiellement à vous.' },
  ],
  summerCollection: { eyebrow: 'La collection estivale', h2: 'Quatre caractères de villa, en lumière estivale.', lede: 'Mêmes catégories architecturales que la collection hivernale, cabines à toit de verre, propriétés en rondins au lac, chalets alpins, villas en forêt, photographiées en lumière de soleil de minuit pour montrer la seconde moitié de l\'histoire.',
    cards: [
      { title: 'Cabine à toit de verre dans la verdure', copy: 'L\'architecture aurorale en lumière dorée de 23 h, entourée d\'une forêt luxuriante au lieu de neige.' },
      { title: 'Propriété en rondins au bord du lac', copy: 'Baie privée sur le lac Inari dégelée, canoë au ponton, fumée du sauna à bois.' },
      { title: 'Chalet design sur le fjell', copy: 'Linaigrettes et fleurs sauvages remplacent la piste, même façade panoramique en verre.' },
      { title: 'Villa moderne en forêt', copy: 'Bâtiment en bois en porte-à-faux au cœur des pins boréaux verts, chaleur dorée du soleil de minuit sur la façade.' },
    ] },
  planning: { h2: 'Une note sur la planification d\'un voyage au soleil de minuit.', p1: 'La fenêtre de 32 jours est courte et les villas sont individuellement détenues, le calendrier se remplit donc de manière opportuniste plutôt qu\'uniforme. La conciergerie conserve une petite allocation chaque été dans les domaines de réserve.', p2: 'Le bon moment pour s\'enquérir d\'un mois de juin donné est entre janvier et mars de la même année. Les demandes ultérieures valent toujours la peine d\'être envoyées, des disponibilités apparaissent, mais le haut de gamme part souvent plus tôt.', quoting: 'Cotations actuelles : étés 2026 + 2027' },
  conciergeTitle: 'Demander un séjour au soleil de minuit.', conciergeBody: 'Envoyez dates, effectif et toute préférence. Une réponse arrive en un jour ouvré avec la disponibilité sur la collection estivale, y compris les villas de réserve non listées publiquement.',
})
Object.assign(fr.conciergePage, {
  eyebrow: 'Le formulaire de demande', h2: 'Dites-nous ce que vous imaginez.',
  intro: 'Cinq champs courts. Plus les préférences et contraintes sont précises, plus la présélection est utile. Nom et e-mail restent facultatifs, les réponses partent vers l\'adresse d\'origine du message.',
  fields: { headcount: 'Effectif', tripIntent: 'Intention de voyage', budget: 'Budget indicatif par nuit',
    datesLabel: 'Dates (ou fenêtre)', datesHint: 'p. ex. « 14–21 février » ou « première moitié de mars, 5 nuits »', datesPlaceholder: 'Facultatif',
    messageLabel: 'Quelque chose de spécifique', messageHint: 'Chef privé, arrivée en hélicoptère, usage exclusif, accessibilité, régime, photographie, tout ce qui façonne la présélection.',
    nameLabel: 'Nom (facultatif)', namePlaceholder: 'Anonyme si vide', emailLabel: 'E-mail de réponse', emailHint: 'Si vide, les réponses partent vers votre adresse d\'envoi.', emailPlaceholder: 'facultatif' },
  options: {
    headcount: ['1–2 voyageurs', '3–4 voyageurs', '5–6 voyageurs', '7–10 voyageurs', 'Groupe plus important'],
    intent: ['Saison aurore, première visite', 'Saison aurore, revisite', 'Soleil de minuit (juin–juil)', 'Noël / Nouvel An', 'Groupe familial', 'Célébration privée', 'Lune de miel / retraite à deux', 'Autre, précisez dans le message'],
    budget: ['Moins de 1 000 € / nuit', '1 000 – 2 500 € / nuit', '2 500 – 5 000 € / nuit', '5 000+ € / nuit', 'Propriété de réserve, usage exclusif', 'Préfère ne pas dire'],
  },
  submit: 'Envoyer la demande privée', sending: 'Envoi…',
  successH2: 'Demande reçue.', successBody: 'Une réponse arrivera en un jour ouvré. Pour un suivi direct, vous pouvez aussi nous joindre à',
  successFollowUp: '.', errorFallback: 'Vous pouvez aussi nous écrire directement à', fallbackNotice: 'Ouverture de votre client de messagerie pour envoyer la demande directement.',
  fineprint: 'Les soumissions sont transmises via une connexion chiffrée à une seule boîte privée en Finlande. Aucun CRM tiers, aucun suivi publicitaire sur le corps du message.',
  trustStrip: [
    { title: 'Anonyme', body: 'Nom et e-mail facultatifs. Demande transmise via un formulaire chiffré à une seule boîte.' },
    { title: 'private@laplandvibes.com', body: 'Surveillée lun–ven. Réponses en un jour ouvré, rédigées par une personne en Finlande.' },
    { title: 'Discrète par défaut', body: 'Aucun CRM tiers, aucun calendrier partagé. La présélection est construite en privé pour chaque demande.' },
  ],
})
Object.assign(fr.aboutPage, {
  sections: [
    { title: 'Pourquoi cette collection existe', paragraphs: [
      'L\'hébergement de luxe en Laponie est un petit monde. La même poignée de villas et quelques dizaines de suites se retrouvent sur chaque plateforme de réservation, souvent avec les mêmes photos de banque d\'images et la même fourchette de prix vague. Les voyageurs qui ont déjà fait les voyages évidents commencent à interroger la Laponie plus précisément : quelle villa réserveriez-vous vraiment, où logez-vous une famille de neuf personnes, quel est l\'endroit dont personne ne parle ?',
      'Ce site est une réponse brève et réfléchie à ces questions, une sélection faite main des villas et suites qui, selon nous, valent le voyage.',
    ] },
    { title: 'Ce que ce site ne fait pas', paragraphs: [
      'Nous n\'exploitons pas les villas et nous ne sommes pas une agence de réservation. Il n\'y a pas d\'annuaire ici, ni l\'intention d\'en créer un, la collection est volontairement restreinte.',
      'Nous sommes indépendants. Lorsqu\'une propriété peut être réservée en ligne, nous renvoyons vers son annonce publique, par exemple via Hotels.com ; ces liens peuvent nous rapporter une petite commission sans coût supplémentaire pour vous, et ils n\'influencent jamais les villas que nous recommandons. Les propriétés ne peuvent pas payer pour être mises en avant.',
    ] },
    { title: 'Qui s\'en occupe', paragraphs: [
      { type: 'link', pre: 'Une petite équipe basée en Finlande, qui anime également l\'écosystème ', label: 'LaplandVibes', href: 'https://laplandvibes.com', post: ', un hub éditorial et un réseau de sites de voyage sur la Laponie. Ce site est la partie de ce travail consacrée aux villas et suites les plus singulières de Laponie.' },
      'Les demandes arrivent dans une seule boîte de réception et reçoivent une réponse personnelle, pas de chatbot, pas de centre d\'appels externalisé. Si une demande ne convient pas à cette collection (un groupe trop nombreux, une destination que nous ne couvrons pas), nous le disons honnêtement et, lorsque c\'est possible, nous vous orientons vers une meilleure adresse.',
    ] },
    { title: 'Deux types de voyage que nous ne prenons pas', paragraphs: [
      'Les mariages de plus de trente invités, ainsi que la privatisation complète d\'un domaine pour des événements de marque, sortent de ce pour quoi ces propriétés ont été conçues. Nous vous orientons volontiers vers des opérateurs qui gèrent ce type d\'événement comme il faut.',
    ] },
  ],
})
Object.assign(fr.villaDetailPage, {
  backLink: 'La collection', bedroom: 'chambre', bedrooms: 'chambres', sleeps: 'Capacité',
  fromPerNight: 'À partir de / nuit', nightlyHint: 'Tarif basse saison indicatif. Le tarif réel dépend des dates, de la durée du séjour et des inclusions.',
  rate: 'Tarif', onRequest: 'Sur demande', reserveHint: 'Propriété de réserve, cotée en privé sur demande, jamais sur une annonce publique.',
  beginInquiry: 'Démarrer une demande privée', viewRates: 'Voir les tarifs publics', orSendInquiry: 'Ou envoyer une demande privée',
  signatureEyebrow: 'Détails signature', signatureH2: 'Six choses à vérifier à l\'arrivée.',
  destinationEyebrow: 'La destination', readProfile: (name: string) => `Lire le profil ${name} →`,
  conciergeTitle: (dest: string) => `Lancer une demande pour ${dest}.`,
  conciergeBody: 'Envoyez dates, effectif et préférences. Une réponse arrive en un jour ouvré avec la disponibilité, le tarif réel par nuit et les villas de réserve à associer.',
  alsoEyebrow: 'Également dans la collection', alsoH2: 'Trois autres villas à considérer.',
})
Object.assign(fr.notFound, { eyebrow: 'Erreur', body: 'Cette page ne fait pas partie de la collection. Les villas, suites et destinations sont listées ci-dessous.', home: 'Accueil', collection: 'La collection' })
fr.footerNote = 'Une collection privée curée en Laponie finlandaise, dernière revue mai 2026. Certaines réservations génèrent une commission d\'affiliation, qui n\'influence jamais le choix des villas recommandées. Les villas de réserve et conciergerie-uniquement ne paient rien.'

// ITALIAN, Lei, editorial luxury
Object.assign(it.cta, {
  inquireAboutJune: 'Richiedere date di giugno', inquireAboutJuneShort: 'Date di giugno',
  seeSummerCollection: 'Vedi collezione estiva', fullVillaCollection: 'Collezione completa di ville',
  sendPrivateInquiry: 'Invia richiesta privata', sendAnother: 'Invia un\'altra richiesta',
  home: 'Home', theCollection: 'La collezione', sending: 'Invio…', subscribe: 'Iscriviti', subscribed: 'Iscritto',
})
Object.assign(it.badges, {
  onRequest: 'Su richiesta', fromPerNight: 'Da / notte', fromPerPerson: 'Da / persona', fromPerGroup: 'Da / gruppo',
  rate: 'Tariffa', bedroom: 'camera', bedrooms: 'camere', sleeps: 'Capienza',
  arrival: 'Arrivo', aurora: 'Aurora', highlights: 'Punti salienti',
  villas: (n: number) => (n === 1 ? 'Una villa ancorata qui.' : `${n} ville ancorate qui.`),
  villasIn: (name: string) => `Ville a ${name}`,
  villasInH2: (n: number, _name: string) => (n === 1 ? 'Una villa ancorata qui.' : `${n} ville ancorate qui.`),
  alsoInCollection: 'Anche nella collezione', threeOthers: 'Tre altre ville da considerare.',
  signatureDetails: 'Dettagli firma', sixVerifyOnArrival: 'Sei cose da verificare all\'arrivo.',
  theDestination: 'La destinazione', fullCollectionShort: 'Collezione completa',
})
Object.assign(it.tier, { signature: 'Signature', private: 'Collezione privata', reserve: 'Riserva · Solo concierge' })
Object.assign(it.category, { 'glass-roof': 'Villa con tetto in vetro', 'log-estate': 'Dimora privata in tronchi', 'designer-suite': 'Suite d\'autore', 'alpine-chalet': 'Chalet alpino', 'lakeside-retreat': 'Rifugio sul lago' })
Object.assign(it.concierge, {
  eyebrow: 'Il concierge privato',
  defaultTitle: 'Un modo più discreto di pianificare un viaggio in Lapponia.',
  defaultBody: 'Invii un solo messaggio, preferenze, date, numero di ospiti, e il nostro concierge risponde con una shortlist privata entro un giorno lavorativo. Nessun profilo pubblico, nessun calendario condiviso.',
  inquireBtn: 'Richiesta privata',
  badges: { anonymous: 'Pianificazione anonima', reply: 'Risposta entro un giorno lavorativo', rates: 'Tariffe dirette su richiesta' },
})
Object.assign(it.midnightSunBand, {
  eyebrow: '6 giu – 7 lug',
  h2: 'Le stesse ville, in 32 giorni di luce ininterrotta.',
  body: 'Stessa architettura, stagione diversa. Il tetto in vetro diventa un lucernario su un sole che non tramonta mai, il lago si scioglie, la foresta si riempie di lamponi artici. Metà domanda dell\'inverno, e l\'unica finestra dell\'anno in cui chef privati, charter di elicotteri e ville di riserva aprono il resto del calendario.',
  primary: 'Vedi la collezione estiva', secondary: 'Richiedere date di giugno',
})
Object.assign(it.newsletter, {
  eyebrow: 'La newsletter #LaplandVibes',
  h2: 'Un dispaccio discreto quando le ville aprono nuove date e veniamo a sapere di un rilascio privato.',
  lede: 'Tariffe dirette. Aperture concierge dell\'ultimo minuto. Previsioni della finestra aurorale nella settimana precedente ogni novilunio. Niente spam, scritto in Finlandia, inviato solo quando c\'è qualcosa di specifico da raccontare.',
  emailPlaceholder: 'sua@email.com', footnote: 'Disiscrizione con un clic.',
  welcome: 'Benvenuto a bordo. Il primo dispaccio arriva entro una settimana.',
  already: 'È già in lista, ci vediamo nel prossimo dispaccio.',
  invalidEmail: 'Questo indirizzo email sembra non valido.',
  networkError: 'Errore di rete. Riprovi.',
  genericError: 'Qualcosa è andato storto. Riprovi tra un momento.',
})
Object.assign(it.affiliateDisclosure, {
  compact: 'Link di affiliazione, riceviamo una piccola commissione senza costi aggiuntivi.',
  full: 'Questa pagina contiene link di affiliazione. Se prenota tramite questi link, LaplandLuxuryVillas può ricevere una commissione senza costi aggiuntivi.',
})
it.hero.suites = { eyebrow: 'Suite d\'autore', title: 'Quando non Le serve una villa, ma il tetto in vetro sì.', lede: 'Un breve elenco di suite a una camera e cabine aurorali dove l\'architettura stessa è l\'esperienza. Capienza minore, stesso soffitto panoramico.' }
it.hero.destinations = { eyebrow: 'Destinazioni', title: 'Cinque luoghi, ognuno con una ragione precisa per esserci.', lede: 'La Lapponia non è intercambiabile. Frequenza dell\'aurora, logistica d\'arrivo e densità ricettiva cambiano in modo significativo ogni 50 km a nord del Circolo Polare.' }
it.hero.experiences = { eyebrow: 'Esperienze su misura', title: 'Il giorno, prima della notte sotto il vetro.', lede: 'Otto esperienze private abbinate alle ville, ciascuna prenotata in funzione della finestra meteo, della luce diurna e dell\'orario di check-in.' }
it.hero.concierge = { eyebrow: 'Concierge privato', title: 'Un messaggio privato, una shortlist curata.', lede: 'Invii date, numero di ospiti e il tipo di viaggio che ha in mente. Rispondiamo entro un giorno lavorativo, incluse, dove appropriato, le ville di riserva che non appaiono mai pubblicamente.' }
it.hero.about = { eyebrow: 'Chi siamo', title: 'Un elenco breve, tenuto breve di proposito.', lede: 'Una collezione privata delle migliori ville e suite della Lapponia, concierge anonimo, tariffe dirette dove esistono, nessuna piattaforma di mezzo.' }
it.home = {
  philosophy: { eyebrow: 'Come lavoriamo', h2: 'L\'opposto di una piattaforma di prenotazione.',
    items: [
      { title: 'Un elenco breve, non una directory.', body: 'Nove ville e suite nelle destinazioni che davvero giustificano il viaggio. Le proprietà vengono respinte più spesso che aggiunte, ogni voce in questa pagina è quella che un viaggiatore attento può prenotare senza esitazione.' },
      { title: 'Pianificazione anonima.', body: 'Una sola casella di posta privata, nessun profilo pubblico, nessun calendario condiviso con terzi. Invii date, numero di ospiti, preferenze, riceva una shortlist curata entro un giorno lavorativo.' },
      { title: 'Tariffe dirette, dove esistono.', body: 'Le inserzioni pubbliche rimandano a tariffe verificate. Le proprietà tenute privatamente, incluse le ville di riserva senza disponibilità pubblica, sono quotate direttamente. La risposta Le dice quale è quale.' },
    ] },
  signature: { eyebrow: 'Ville signature', h2: 'Quattro ancore della collezione lappone.', lede: 'Le proprietà raccomandate più spesso. Ogni dettaglio è verificato con le informazioni del gestore e le recensioni recenti, non copiato da una brochure.' },
  destinations: { eyebrow: 'Destinazioni', h2: 'Cinque luoghi, ognuno con una ragione precisa.' },
}
Object.assign(it.villasPage, {
  filters: { all: 'Tutte', glassRoof: 'Tetto in vetro', logEstate: 'Dimora in tronchi', designerSuite: 'Suite d\'autore', alpineChalet: 'Chalet alpino', lakeside: 'Sul lago' },
  noVillas: 'Nessuna villa in questa categoria al momento.',
  conciergeTitle: 'Non trova ciò che cerca?',
  conciergeBody: 'La collezione sopra è quella attualmente pubblicata. Altre ville sono tenute privatamente, incluse proprietà di riserva senza inserzione pubblica, e quotate direttamente su richiesta.',
})
Object.assign(it.suitesPage, {
  intro: { p1Pre: '"Suite" in Lapponia copre due gesti architettonici distinti, entrambi da conoscere. Il primo è la ', designerSuite: 'suite d\'autore', p1Mid: ', dove uno studio finlandese di primo piano (Studio Puisto, ALA, Avanto) ha costruito una camera intorno a una sola vista. Il secondo è la ', glassRoof: 'cabina con tetto in vetro', p1Post: ', dove il soffitto è il dettaglio principale. Entrambe sono elencate sotto.' },
  conciergeTitle: 'Prenotare due suite, o un piano privato?',
  conciergeBody: 'Diverse di queste proprietà liberano un piano multi-suite a uso esclusivo nelle settimane di spalla. Condivida date e numero di ospiti.',
})
Object.assign(it.destinationsPage, { destinationLabel: (i: number) => `Destinazione 0${i + 1}`, readTheProfile: (name: string) => `Leggi il profilo di ${name}` })
Object.assign(it.destinationPage, {
  backLink: 'Destinazioni', eyebrow: 'Destinazione · Lapponia finlandese',
  arrival: 'Arrivo', aurora: 'Aurora', highlights: 'Punti salienti',
  villasHere: (n: number) => (n === 1 ? 'Una villa ancorata qui.' : `${n} ville ancorate qui.`),
  villasHereH2: (n: number) => (n === 1 ? 'Una villa ancorata qui.' : `${n} ville ancorate qui.`),
  fullCollection: 'Collezione completa',
  conciergeTitle: (name: string) => `Pianifichi un viaggio privato a ${name}.`,
  conciergeBody: 'Invii date, numero di ospiti e preferenze (chef privato, arrivo in elicottero, uso esclusivo). Rispondiamo con una shortlist entro un giorno lavorativo.',
})
Object.assign(it.experiencesPage, {
  sections: {
    aurora: { title: 'Aurora', intro: 'Le aurore in sé sono gratuite. Ciò che si vende qui è l\'accesso, il veicolo giusto, la guida giusta, la notte giusta sotto la giusta finestra di nuvole.' },
    wilderness: { title: 'Natura selvaggia', intro: 'Versioni private delle esperienze per cui tutti vengono in Lapponia, husky, motoslitta, renne, senza bus condiviso né percorso ad anello.' },
    culinary: { title: 'Cucina', intro: 'Uno chef attivo proveniente da una delle cucine serie della Lapponia, nella Sua villa, per una serata, o il menù degustazione in loco quando la cucina è il motivo del viaggio.' },
    arrival: { title: 'Arrivo', intro: 'Jet privato, transfer in elicottero, mezzi di terra in spec artica. Prenotati in funzione dello slot, della finestra di luce e del check-in.' },
  },
})
Object.assign(it.midnightSunPage, {
  facts: [{ value: '32', label: 'Giorni senza tramonto' }, { value: '24h', label: 'Luce al picco, 21 giugno' }, { value: '+18°C', label: 'Media diurna fine giugno' }, { value: '50%', label: 'Domanda inferiore alla stagione aurorale' }],
  fourReasons: 'Quattro ragioni', h2: 'La Lapponia in estate è un altro luogo.',
  reasons: [
    { title: 'L\'architettura cambia carattere.', body: 'I tetti in vetro che esistono per le aurore ora incorniciano un sole ininterrotto. Lucernario sul letto, sole sul lago, nessun motivo di tirare una tenda, non c\'è notte in cui nascondersi.' },
    { title: 'La natura diventa accessibile.', body: 'I laghi si sciolgono, la foresta boreale si apre, le rotte in canoa appaiono. La stessa villa raggiunta in motoslitta a febbraio è ora a cinque minuti di barca dal pontile.' },
    { title: 'Le ville di riserva aprono.', body: 'Le dimore private sul lago e gli chalet d\'autore liberano il resto del calendario. La finestra di 32 giorni è l\'unico momento dell\'anno in cui chef privati e charter di elicotteri quotano tariffe di spalla.' },
    { title: 'Niente code, niente vicini.', body: 'La Lapponia in estate vede una frazione della densità invernale. Il sentiero selvaggio nel bosco, il punto panoramico sul fjell, sono essenzialmente Suoi.' },
  ],
  summerCollection: { eyebrow: 'La collezione estiva', h2: 'Quattro caratteri di villa, in luce estiva.', lede: 'Stesse categorie architettoniche della collezione invernale, cabine con tetto in vetro, dimore in tronchi sul lago, chalet alpini, ville in foresta, fotografate nella luce del sole di mezzanotte di fine giugno.',
    cards: [
      { title: 'Cabina con tetto in vetro nel verde', copy: 'L\'architettura aurorale in luce dorata delle 23, circondata da foresta lussureggiante invece di neve.' },
      { title: 'Dimora in tronchi sul lago', copy: 'Baia privata sul lago Inari disgelata, canoa al pontile, fumo dalla sauna a legna.' },
      { title: 'Chalet d\'autore sul fjell', copy: 'Eriofori e fiori selvatici sostituiscono la pista da sci, stessa facciata panoramica in vetro.' },
      { title: 'Villa moderna in foresta', copy: 'Edificio in legno a sbalzo nel verde dei pini boreali, calore dorato del sole di mezzanotte sulla facciata.' },
    ] },
  planning: { h2: 'Una nota sulla pianificazione di un viaggio al sole di mezzanotte.', p1: 'La finestra di 32 giorni è breve e le ville sono di proprietà individuale, il calendario si riempie quindi in modo opportunistico più che uniforme. Il concierge mantiene una piccola allocazione nelle tenute di riserva ogni estate.', p2: 'Il momento giusto per chiedere informazioni su un certo giugno è tra gennaio e marzo dello stesso anno. Le richieste successive valgono comunque l\'invio, succedono rilasci, ma la fascia alta dell\'inventario va spesso prima.', quoting: 'Attualmente quotiamo estate 2026 + 2027' },
  conciergeTitle: 'Richiedere un viaggio al sole di mezzanotte.', conciergeBody: 'Invii date, numero di ospiti e qualsiasi preferenza. Una risposta arriva entro un giorno lavorativo con la disponibilità sulla collezione estiva, incluse le ville di riserva non elencate pubblicamente.',
})
Object.assign(it.conciergePage, {
  eyebrow: 'Il modulo di richiesta', h2: 'Ci dica cosa sta immaginando.',
  intro: 'Cinque brevi campi. Più sono specifiche le preferenze e i vincoli, più utile è la shortlist. Nome ed email restano opzionali, le risposte vanno all\'indirizzo da cui arriva il messaggio.',
  fields: { headcount: 'Numero di ospiti', tripIntent: 'Intento del viaggio', budget: 'Budget indicativo per notte',
    datesLabel: 'Date (o finestra)', datesHint: 'es. "14–21 feb" o "prima metà di marzo, 5 notti"', datesPlaceholder: 'Opzionale',
    messageLabel: 'Qualcosa di specifico', messageHint: 'Chef privato, arrivo in elicottero, uso esclusivo, accessibilità, dieta, focus fotografia, qualsiasi cosa modelli la shortlist.',
    nameLabel: 'Nome (opzionale)', namePlaceholder: 'Anonimo se vuoto', emailLabel: 'Email di risposta', emailHint: 'Se vuoto, le risposte vanno all\'indirizzo di invio.', emailPlaceholder: 'opzionale' },
  options: {
    headcount: ['1–2 ospiti', '3–4 ospiti', '5–6 ospiti', '7–10 ospiti', 'Gruppo più ampio'],
    intent: ['Stagione aurora, prima visita', 'Stagione aurora, ritorno', 'Sole di mezzanotte (giu–lug)', 'Natale / Capodanno', 'Gruppo familiare', 'Celebrazione privata', 'Luna di miele / ritiro per due', 'Altro, spiegare nel messaggio'],
    budget: ['Sotto i 1.000 € / notte', '1.000 – 2.500 € / notte', '2.500 – 5.000 € / notte', '5.000+ € / notte', 'Riserva, uso esclusivo', 'Preferisco non dire'],
  },
  submit: 'Invia richiesta privata', sending: 'Invio…',
  successH2: 'Richiesta ricevuta.', successBody: 'Una risposta arriverà entro un giorno lavorativo. Per un seguito diretto, può scriverci a',
  successFollowUp: '.', errorFallback: 'Può anche scriverci direttamente a', fallbackNotice: 'Apertura del client di posta per inviare la richiesta direttamente.',
  fineprint: 'Le richieste vengono inoltrate tramite connessione cifrata a una sola casella privata in Finlandia. Nessun CRM di terzi, nessuna tracciatura pubblicitaria sul corpo.',
  trustStrip: [
    { title: 'Anonimo', body: 'Nome ed email opzionali. Richiesta inviata tramite modulo cifrato a una sola casella.' },
    { title: 'private@laplandvibes.com', body: 'Monitorata lun–ven. Risposte entro un giorno lavorativo, scritte da una persona in Finlandia.' },
    { title: 'Discreta per natura', body: 'Nessun CRM di terzi, nessun calendario condiviso. La shortlist è costruita privatamente per ogni richiesta.' },
  ],
})
Object.assign(it.aboutPage, {
  sections: [
    { title: 'Perché esiste questa collezione', paragraphs: [
      'L\'offerta di lusso della Lapponia è un piccolo mondo. La stessa manciata di ville e qualche decina di suite ricorrono su ogni piattaforma di prenotazione, spesso con le stesse foto d\'archivio e la stessa vaga fascia di prezzo. Chi ha già fatto i viaggi più ovvi inizia a chiedere della Lapponia in modo più preciso: quale villa prenoterebbe davvero, dove sistema una famiglia di nove persone, qual è il posto di cui nessuno scrive?',
      'Questo sito è una risposta breve e ponderata a queste domande, una selezione curata a mano delle ville e suite che riteniamo valgano il viaggio.',
    ] },
    { title: 'Cosa non fa questo sito', paragraphs: [
      'Non gestiamo le ville e non siamo un\'agenzia di prenotazioni. Qui non c\'è una directory, né l\'intenzione di crearne una, la collezione è tenuta volutamente piccola.',
      'Siamo indipendenti. Quando una proprietà può essere prenotata online, rimandiamo al suo annuncio pubblico, ad esempio tramite Hotels.com; questi link possono farci guadagnare una piccola commissione senza alcun costo aggiuntivo per Lei, e non influenzano mai quali ville consigliamo. Le proprietà non possono pagare per essere messe in evidenza.',
    ] },
    { title: 'Chi lo gestisce', paragraphs: [
      { type: 'link', pre: 'Una piccola squadra con base in Finlandia che gestisce anche l\'ecosistema ', label: 'LaplandVibes', href: 'https://laplandvibes.com', post: ', un hub editoriale e una rete di siti di viaggio sulla Lapponia. Questo sito è la parte di quel lavoro dedicata alle ville e suite più caratteristiche della Lapponia.' },
      'Le richieste arrivano in un\'unica casella di posta e ricevono una risposta personale, niente chatbot, niente call center in outsourcing. Se una richiesta non è adatta a questa collezione (un gruppo troppo numeroso, una destinazione che non copriamo), lo diciamo con onestà e, dove possibile, La indirizziamo verso una scelta migliore.',
    ] },
    { title: 'Due tipi di viaggio che non accettiamo', paragraphs: [
      'I matrimoni con più di trenta invitati e l\'affitto esclusivo di un\'intera dimora per eventi di marca esulano da ciò per cui queste proprietà sono state costruite. Saremo lieti di indirizzarLa verso operatori che gestiscono questo tipo di evento come si deve.',
    ] },
  ],
})
Object.assign(it.villaDetailPage, {
  backLink: 'La collezione', bedroom: 'camera', bedrooms: 'camere', sleeps: 'Capienza',
  fromPerNight: 'Da / notte', nightlyHint: 'Tariffa indicativa di bassa stagione. La tariffa effettiva dipende dalle date, durata del soggiorno e inclusioni.',
  rate: 'Tariffa', onRequest: 'Su richiesta', reserveHint: 'Proprietà di riserva, quotata privatamente su richiesta, mai in un\'inserzione pubblica.',
  beginInquiry: 'Inizia richiesta privata', viewRates: 'Vedi tariffe pubbliche', orSendInquiry: 'O invia una richiesta privata',
  signatureEyebrow: 'Dettagli firma', signatureH2: 'Sei cose da verificare all\'arrivo.',
  destinationEyebrow: 'La destinazione', readProfile: (name: string) => `Leggi il profilo di ${name} →`,
  conciergeTitle: (dest: string) => `Avvia una richiesta per ${dest}.`,
  conciergeBody: 'Invii date, numero di ospiti e preferenze. Una risposta arriva entro un giorno lavorativo con disponibilità, tariffa reale per notte e ville di riserva da abbinare.',
  alsoEyebrow: 'Anche nella collezione', alsoH2: 'Tre altre ville da considerare.',
})
Object.assign(it.notFound, { eyebrow: 'Errore', body: 'Questa pagina non fa parte della collezione. Le ville, suite e destinazioni sono elencate sotto.', home: 'Home', collection: 'La collezione' })
it.footerNote = 'Una collezione privata curata nella Lapponia finlandese, ultima revisione maggio 2026. Alcune prenotazioni generano una commissione di affiliazione, che non influisce mai sulla scelta delle ville raccomandate. Le proprietà di riserva e solo-concierge non pagano nulla.'

export const COPY: Record<Lang, SiteCopy> = { en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl }
