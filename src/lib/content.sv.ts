import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Uppvärmt termoglas ovanför en handbyggd stuga i kelotall, det ursprungliga norrskenssovrummet.',
      copy: [
        'En fristående timmerstuga med eget sovrum under glastak, privat kök, lounge med öppen spis och finsk bastu. Termoglaset förblir klart vid −30 °C, så att du ser norrskenet från en kingsize-säng utan att lämna täcket.',
        'Ligger på Kakslauttanens område nära Urho Kekkonens nationalpark, 35 minuters privat transfer från Ivalo flygplats. Halvpension via resortens restaurang finns; privatkock på begäran.',
      ],
      signature: [
        'Uppvärmt glastak ovanför sovrummet (klart vid −30 °C)',
        'Egen vedeldad bastu + vedeldad badtunna utomhus',
        'Två sovrum, fullt kök, lounge med öppen spis',
        'Privat transfer ingår från Ivalo flygplats',
        'Norrskensväckning på rummet via receptionen',
        'Möjlighet till halvpension via resortens kök',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Utkragande svit ritad av Studio Puisto med helt glasad fasad riktad mot norrskenet.',
      copy: [
        'En penthouse-svit på 73 m² på pelare, med glas från golv till tak i full bredd. Ritad av Studio Puisto. Privat terrass med badtunna. Byggnaden är rest kring en enda tall, varje inredningsdetalj är vald för att försvinna, så att skogen förblir det enda objektet i rummet.',
        'Fem minuter från Santa Claus Village, praktiskt som bas för familjer som reser under julsäsongen och vill ha en lugn tillflykt på kvällen med enkel tillgång till Rovaniemi på dagen.',
      ],
      signature: [
        'Svit på 73 m², helt glasad fasad mot norr',
        'Privat terrass med badtunna + utomhusbastu',
        'Inredning av Studio Puisto, finska designikoner överallt',
        'Golvvärme, mörkläggningsgardiner för sömn på dagen',
        'Restaurang Rakas på området',
        'Fem minuter till Santa Claus Village',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Tjugofyra glasstugor med utsikt över inget annat än skog och norrskensovalen.',
      copy: [
        'Inari ligger rakt under norrskensovalen, på den breddgrad där Meteorologiska institutet observerar norrsken ungefär tre nätter av fyra. Aurora Village är ett område med 24 stugor utan genomfartstrafik och utan grannbyar vid den synliga horisonten. Stugorna står med avstånd för avskildhet, med sängen under glaset och soffan riktad mot det.',
        'Den samiskt ledda restaurangen på området serverar en avsmakningsmeny kring ren, arktisk röding och hjortron. Norrskensväckningar skickas från stuga till stuga via radio, så att ingen väcker villan bredvid.',
      ],
      signature: [
        'Stuga med glastak och sängen under nocken',
        '24 stugor på ett område på 30 hektar, glest placerade',
        'Samiskt ledd restaurang på området, avsmakningsmeny varje kväll',
        'Norrskensväckning via radio i stugan',
        'Norrsken ungefär 3 nätter av 4 på denna breddgrad (FMI)',
        'Gratis privat led för snöskovandring från området',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Glasigloor högt över Levifjället, vänd söderut mot dalen i stället för norrut in i skogen.',
      copy: [
        'Fyrtiotvå glasigloor på Levifjällets södra sluttning. De flesta norrskensstugor vetter mot norr, in i en tom skog; Levin Iglut är en av mycket få som ramar in ljuset ovanför den upplysta silhuetten av fjällbyn nedanför, bättre för fotografer, mer dramatiskt i skymningen.',
        'Gångavstånd till Levi by (gondol, restauranger, ski-in/ski-out), men igloorna själva är lugna. Restaurang Aurora på området, med en kock som handlar inom 100 km.',
      ],
      signature: [
        'Norrskenspanorama mot söder (ovanligt för Lappland)',
        'Gångavstånd till gondolen + Levi by',
        'Restaurang Aurora på området, inköpsradie på 100 km',
        'Premiumsviter har egen badtunna på terrassen',
        'Ski-in / ski-out under vintersäsongen',
        'Norrskensväckning på rummet',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'En glasbubbelsvit vid kanten av den boreala skogen, tjugo minuter från ryska gränsen.',
      copy: [
        'Nellim är en levande vildmarksby (220 invånare) på Enaresjöns östra strand. Norrskensbubblorna står skilda från huvudlodgen på en egen glänta, var och en med en panoramaklar kupol ovanför sängen och en vedeldad badtunna på verandan.',
        'Lodgen ordnar samiska kulturkvällar, pimpelfiske på sjön och ett av få certifierade guidade program för norrskensfotografering i Finland. Rummen är fullbokade ett år i förväg för toppen i februari.',
      ],
      signature: [
        'Genomskinlig panoramakupol ovanför sängen',
        'Egen vedeldad badtunna på verandan',
        'Läge i en vildmarksby, 20 min från ryska gränsen',
        'Certifierat guidat program för norrskensfotografering',
        'Samiskt kulturprogram flera kvällar i veckan',
        'Fiske på Enaresjön + traditionell rökbastu',
      ],
    },
    'star-arctic-suite': {
      tagline: 'En svit med glasväggar på toppen av fjället Kaunispää, ovanför trädgränsen och ovanför byns ljus.',
      copy: [
        'Star Arctic ligger på den allra högsta punkten på Kaunispää, fjället som reser sig direkt ur byn Saariselkä. Skyview-sviterna har glasväggar från golv till tak på tre sidor, inga gardiner, och ligger tillräckligt högt för att nå ovanför den lokala trädgränsen, vilket ger en verklig 270°-panorama från sängen.',
        'Vägen till toppen är privat och upplyst på natten, så att gäster kan köra dit själva. Hotellet har ett eget observatorium, en restaurang och en flotta fatbikes för sommaren.',
      ],
      signature: [
        '270° glas på toppen, ovanför trädgränsen',
        'Egen väg till toppen, upplyst på natten',
        'Observatorium under mörk himmel på området (teleskopkvällar)',
        'Bastu med fjällutsikt från golv till tak',
        'Premiumsviter, hörnglas, separat lounge',
        'Fem minuters bilfärd till byn Saariselkä',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Norrskensvagnar i heritagestil vid stranden av en frusen sjö, tio minuter från Rovaniemi flygplats.',
      copy: [
        'En handfull restaurerade historiska tågvagnar, ombyggda till norrskensstugor med glastak, precis vid kanten av sjön Apukkajärvi. Praktiskt om du bara har två nätter och vill landa, transferera och ligga i din säng under glaset inom en timme.',
        'Egen huskygård, renar, pimpelfiske och en snöskoterled ut i vildmarken. Vagnarna själva är intima (ett sovrum, ett badrum, lounge); resorten sköter all logistik kring aktiviteterna.',
      ],
      signature: [
        'Utformning av en historisk tågvagn, sovrum med glastak',
        'Vid stranden av sjön Apukkajärvi',
        'Transfer på 10 minuter från Rovaniemi flygplats',
        'Huskyar + renar + pimpelfiske på området',
        'Snöskoterspår från området',
        'Norrskensväckning + badtunna bredvid stugan',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Norra Finlands lyxiga norrskenshubb, Kakslauttanen, Star Arctic, den vilda kanten av Urho Kekkonen.',
      copy: [
        'Saariselkä ligger vid den norra kanten av Urho Kekkonens nationalpark, ett av Finlands största vildmarksområden, och är byn som definierade norrskensboendet med glastak. De flesta av landets mest kända glasstugor (Kakslauttanen, Star Arctic, Northern Lights Village) ligger inom 10 km från byn.',
        'Byn själv är liten och lättgången: en huvudgata, några restauranger och direkt tillgång till nationalparken. Till Ivalo flygplats är det 27 km, alltså ungefär en halvtimme med privat transfer, och den hanterar både reguljärflyg och privata charter.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, det ursprungliga boendet med glastak',
        'Star Arctic Hotel, toppsviter på fjället Kaunispää',
        'Direkt tillgång till Urho Kekkonens nationalpark (vildmarksnivå)',
        'Ivalo flygplats, lämplig för privata charter, transfer på 30 min',
      ],
      arrival: 'Ivalo (IVL), 27 km, cirka 30 min med privat transfer',
      auroraNote: 'Boreal skog i inlandet, utan bebyggelseljus på tiotals kilometer åt något håll. Fjällen ger en hög och öppen horisont, vilket avgör de nätter då bågen står lågt i norr.',
    },
    'inari': {
      position: 'Vårt nordligaste resmål, där norrsken observeras ungefär tre nätter av fyra. Samiskt kärnland, Enaresjön, mörk himmel.',
      copy: [
        'Inari är Finlands nordligaste kommun och de finska samernas kulturella huvudstad. Byn ligger vid Enaresjön, Finlands tredje största sjö, med omkring 3 000 öar, mer än 200 km norr om polcirkeln och utan stadsljus vid horisonten.',
        'För lyxresor betyder det två saker. För det första: på den här breddgraden observerar Meteorologiska institutet norrsken i genomsnitt tre nätter av fyra, och det står rakt ovanför i stället för lågt i norr. För det andra: de strandnära timmergårdarna hör till Lapplands lugnaste boenden: ingen genomfartstrafik, inga grannbyar vid den synliga horisonten.',
      ],
      highlights: [
        'Aurora Village, specialbyggt glasstugeområde på 30 hektar',
        'Wilderness Hotel Nellim, norrskensbubblor på Enaresjöns östra strand',
        'Samemuseet SIIDA + kulturprogram året runt',
        'Enare träsk, Finlands tredje största sjö, omkring 3 000 öar',
      ],
      arrival: 'Ivalo (IVL), 40 km, cirka 40 min med privat transfer',
      auroraNote: 'Vårt nordligaste resmål och det där norrskenet oftast står rakt ovanför i stället för lågt i norr. Enaresjön ger en obruten horisont, och inget byljus ligger på den.',
    },
    'rovaniemi': {
      position: 'Ankomststaden. Arkitektbyggda sviter, dagliga direktflyg från stora hubbar.',
      copy: [
        'Rovaniemi är Lapplands regionala huvudstad och det lättast nåbara norrskensresmålet, flera direktflyg per dag från Helsingfors, plus säsongsbetonade direktflyg från London, Frankfurt, Paris, Wien och Gulfregionen. Flygplatsen ligger cirka 10 km norr om stadskärnan, tio till femton minuter med bil.',
        'Lyxutbudet här kretsar kring arkitektbyggda designsviter inom tio minuter från flygplatsen (Arctic TreeHouse, Apukka). Helikoptertransfer från flygplatsen till avlägsna reservat är vanliga.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, utkragande sviter ritade av Studio Puisto',
        'Apukka Resort, historiska norrskensvagnar vid sjön Apukkajärvi',
        'Direktflyg från London / Frankfurt / Wien / Doha (säsongsbetonat)',
      ],
      arrival: 'Rovaniemi (RVN), 10 km, 10–15 min från stadskärnan',
      auroraNote: 'Vårt sydligaste resmål och det enda med en stads ljus vid horisonten, så norrskenet syns här mer sällan och är svårare att se när det kommer. Kombinera med minst en natt i en fjällby längre norrut.',
    },
    'levi': {
      position: 'Finlands ledande skidort. Lyxstugor på södra sluttningen, ski-in / ski-out från Levis gondol.',
      copy: [
        'Levi är Lapplands mest utvecklade fjällort, en komplett vintersportby med 44 backar och 26 liftar, varav två gondoler. Uthyrningsmarknaden för designstugor har vuxit rejält det senaste decenniet. Gondolen går från byns centrum till toppen på 531 meter, och på södra sluttningen står privatstugorna. Dit kommer en ny stollift till säsongen 2026-2027.',
        'Norrskenssikten från Levi är riktad mot söder och dramatisk, ovanligt för Lappland, eftersom den upplysta bysilhuetten blir en del av bilden. Bäst i kombination med en eller två nätter längre norrut (Inari eller Saariselkä) för äkta vildmarksnorrsken, innan du återvänder hit för att åka skidor.',
      ],
      highlights: [
        'Levin Iglut, glasigloor mot söder ovanför fjällbyn',
        'Arkitektbyggda designstugor, södra sluttningen, ski-in/out',
        '44 backar, 26 liftar (två gondoler), 38,5 km preparerad backe',
        'Kittilä flygplats (KTT) hanterar säsongsbetonade direkta internationella flyg',
      ],
      arrival: 'Kittilä (KTT), 15 km, cirka 20 min med privat transfer',
      auroraNote: 'Ett panorama mot söder, vilket är ovanligt i Lappland: den upplysta fjällbyn blir bildens förgrund. Priset är byns eget ljus, så den mörkaste utsikten ligger en kort bilfärd bort.',
    },
    'yllas': {
      position: 'Det lugna alternativet till Levi. Pallas-Yllästunturi nationalpark, mindre trängsel, djupare skog.',
      copy: [
        'Ylläs har 62 backar, fler än någon annan skidort i Finland, och landets längsta utförsåkning: över tre kilometer från den kala toppen på 719 meter ner till dalen. Ändå känns orten som en bråkdel av Levi, eftersom byn är utspridd över två orter (Äkäslompolo och Ylläsjärvi), åtskilda av 15 km fjäll och Pallas-Yllästunturi nationalpark.',
        'För lyxresor sitter dragningskraften i rymligheten. Arkitektbyggda stugor står här ensamma på fjällsluttningen, nationalparkens leder utgår från boendet, och tystnaden är det folk faktiskt betalar för. Spårnätet omfattar omkring 300 kilometer, varav över 30 kilometer är belysta.',
      ],
      highlights: [
        'Pallas-Yllästunturi nationalpark, Finlands tredje största',
        'Två skidbyar på var sin sida om Ylläsfjället',
        'Lägre ljusförorening än någon annan skidort',
        'Omkring 300 km preparerade spår, över 30 km belysta',
      ],
      arrival: 'Kittilä (KTT), 40 km, cirka 45 min med privat transfer',
      auroraNote: 'Stugorna ligger mot nationalparken i stället för mitt i en skidort, så du kliver ut genom dörren rakt in i mörkret i stället för att köra och leta efter det.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'En guide, ditt sällskap och ett uppvärmt fotofordon som följer prognosen vart den än pekar.',
      copy: [
        'En privat norrskensjakt på sex timmar med en certifierad finsk naturfotograferingsguide. Fordonet är uppvärmt och utrustat; stativ, kabelutlösare och arktiskt anpassade kameror lånas ut om du inte tar med egen. Rutten bestäms samma eftermiddag utifrån Kp-index och molnprognosen.',
        'Varm mat och renfällar att sitta på ingår som standard. Guidningen tar upp exponering för norrskenet självt, komposition av förgrunden och efterbearbetning samma kväll.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, sep–apr',
    },
    'helicopter-aurora-flight': {
      hook: 'En 45 minuter lång helikopterflygning på natten ovanför molntäcket, ända upp till norrskenet självt.',
      copy: [
        'Utförs av Finlands enda helikopteroperatör certifierad för natt-VFR, från Rovaniemi och Ivalo. Flygningen bryter igenom det lokala molntäcket och cirklar inom den aktiva norrskensovalen, ett perspektiv som är omöjligt från marken.',
        'Fotografering på marken ingår på ömse sidor om flygningen; delen i luften är för själva upplevelsen, inte för kameran. Högst fyra passagerare per AS350. Beroende av väderfönstret: operatören följer prognosen och meddelar dagen innan.',
      ],
      available: 'Rovaniemi, Ivalo, okt–mars (väderberoende)',
    },
    'private-chef-arctic-tasting': {
      hook: 'En finsk-samisk avsmakningsmeny i nio rätter, tillagad i ditt villakök av en yrkesverksam Lapplandskock.',
      copy: [
        'En yrkesverksam kock från ett av Lapplands seriösa kök kommer till din villa för en kväll. Menyn byggs kring det som verkligen är i säsong den veckan: kallvattenröding, hjortron, rökt ren, färsk skogssvamp, havtorn, en.',
        'Ingår gör en vinmatchning avstämd mot menyn, ingredienser, förberedelse, servering och diskning. Högst tio gäster. Vegetariska, glutenfria och skaldjursfria menyer på begäran, med minst 72 timmars framförhållning.',
      ],
      available: 'Alla villor i kollektionen, året runt',
    },
    'private-husky-safari': {
      hook: 'Ditt eget slädspann, din egen kennelguide, ut i den boreala skogen i första dagsljuset.',
      copy: [
        'Ett privat spann på sexton slädhundar och en kennelguide. Rutten går in i en seriös slädhundskennels arbetande ledsystem, vanligtvis 35 km, med en paus vid elden halvvägs för varm lingondricka och grillad korv.',
        'Du kör din egen släde (först en genomgång på 20 minuter). Ylleoveraller, vantar och arktiska stövlar tillhandahålls. Sällskap på två till sex, inga delade grupper, aldrig kombinerat med främlingar.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, dec–apr',
    },
    'private-snowmobile-wilderness': {
      hook: 'En guidad snöskoterrutt på 80 km över frusna sjöar och orörd skog, med en lunch tillagad över öppen eld.',
      copy: [
        'En guidad snöskoterrutt på en hel dag över de höga fjällederna, nätverket de lokala guiderna använder, inte turistslingan. Lunchen tillagas av guiden över en eld längs rutten (rengryta, eldbakat bröd, varm dricka).',
        'BRP-maskiner, hjälmar, balaklavor och ylleoveraller ingår. Tvåmansslädar finns. Körkort krävs för föraren; passagerarplatsen kräver inget. Högst fyra slädar per grupp.',
      ],
      available: 'Saariselkä, Inari, Levi, dec–apr',
    },
    'private-reindeer-sami-evening': {
      hook: 'Åka rensläde på en levande gård, sedan en kväll i en privat kåta med en samisk värd.',
      copy: [
        'Två timmars renslädeåkning på en levande renskötargård, följt av en privat kväll i en uppvärmd kåta (tält med öppen eld). Värden är en samisk renskötare som driver gården, samtalet, inget manus, är upplevelsen.',
        'Middagen är sauterad ren med potatismos och lingon, tillagad över öppen eld. Berättelser om hjorden, flyttningsåret och jojktraditionen. Högst tolv gäster.',
      ],
      available: 'Inari, Saariselkä, året runt (släde dec–mars)',
    },
    'private-jet-arrival': {
      hook: 'Direkt privatjettransfer till Ivalo, Kittilä eller Rovaniemi, ingen kommersiell incheckning, ingen bytenhubb.',
      copy: [
        'Koordineras via våra jetpartner i Helsingfors, Genève och Doha. Direktflyg till Ivalo (närmast villorna i Saariselkä / Inari), Kittilä (närmast villorna i Levi / Ylläs) eller Rovaniemi (bäst för Arctic TreeHouse).',
        'Fullständig hantering: marktransfer till din villa med ett uppvärmt fordon av arktisk specifikation, bagage vidarebefordrat, tull utan kö. Operatören lämnar in slottiden och stämmer av ankomsten mot villans incheckningstid.',
      ],
      available: 'Alla resmål, året runt',
    },
    'helicopter-villa-transfer': {
      hook: 'Upphämtning från den regionala flygplatsen direkt till din villas landningsplats, ingen vägtransfer.',
      copy: [
        'Används oftast för ankomster till de privata strandnära timmergårdarna vid Enaresjön. Farkosten är samma AS350 som används för norrskensflygningarna; en sträcka tar 20 till 45 minuter.',
        'Högst fem passagerare + bagage. Operatören stämmer av upphämtningen mot villans incheckning och dagsljusfönstret, mitt i vintern går solen ner redan klockan 15:00.',
      ],
      available: 'Rovaniemi, Ivalo → gårdarna vid Enaresjön',
    },
  },
};

export default overlay;
