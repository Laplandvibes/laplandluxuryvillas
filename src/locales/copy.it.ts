import type { SiteCopy } from './types'

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
          'Siamo indipendenti. Quando una proprietà può essere prenotata online, rimandiamo al suo annuncio pubblico, ad esempio tramite Trip.com; questi link possono farci guadagnare una piccola commissione senza alcun costo aggiuntivo per Lei, e non influenzano mai quali ville consigliamo. Le proprietà non possono pagare per essere messe in evidenza.',
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
      'Siamo indipendenti. Quando una proprietà può essere prenotata online, rimandiamo al suo annuncio pubblico, ad esempio tramite Trip.com; questi link possono farci guadagnare una piccola commissione senza alcun costo aggiuntivo per Lei, e non influenzano mai quali ville consigliamo. Le proprietà non possono pagare per essere messe in evidenza.',
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

export default it
