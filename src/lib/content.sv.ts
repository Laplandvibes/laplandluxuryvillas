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
      tagline: 'Utkragande svit ritad av Rajakangas med helt glasad fasad riktad mot norrskenet.',
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
        'Inari ligger rakt under norrskensovalen, statistiskt sett den mest tillförlitliga breddgraden för norrsken i Europa. Aurora Village är ett område med 24 stugor utan genomfartstrafik och utan grannbyar vid den synliga horisonten. Stugorna står med avstånd för avskildhet, med sängen under glaset och soffan riktad mot det.',
        'Den samiskt ledda restaurangen på området serverar en avsmakningsmeny kring ren, arktisk röding och hjortron. Norrskensväckningar skickas från stuga till stuga via radio, så att ingen väcker villan bredvid.',
      ],
      signature: [
        'Stuga med glastak och sängen under nocken',
        '24 stugor på ett område på 30 hektar, glest placerade',
        'Samiskt ledd restaurang på området, avsmakningsmeny varje kväll',
        'Norrskensväckning via radio i stugan',
        'Inari är EU:s mest tillförlitliga norrskensbreddgrad',
        'Gratis privat led för snöskovandring från området',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Glasigloor högt över Levifjället, Lapplands enda igluklunga som vetter söderut mot dalen.',
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
        'Lodgen ordnar samiska kulturkvällar, pimpelfiske på sjön och ett av få certifierade guidade program för norrskensfotografering i Finland. Rummen är fullbokade ett år i förväg för toppen i februari, conciergen kan ibland hitta ett rum som blivit ledigt.',
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
      tagline: 'En svit med glasväggar på toppen av fjället Kaunispää, landets högst belägna norrskenssovrum.',
      copy: [
        'Star Arctic ligger på den allra högsta punkten på Kaunispää, fjället som reser sig direkt ur byn Saariselkä. Skyview-sviterna har glasväggar från golv till tak på tre sidor, inga gardiner, och ligger tillräckligt högt för att nå ovanför den lokala trädgränsen, vilket ger en verklig 270°-panorama från sängen.',
        'Vägen till toppen är privat och upplyst på natten, så att gäster kan köra dit själva. Hotellet har ett eget observatorium, en restaurang och en flotta fatbikes för sommaren.',
      ],
      signature: [
        '270° glas på den högsta fjälltoppen i området',
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
    'private-lakeside-log-estate': {
      tagline: 'En privat, handbyggd timmerstuga vid en egen vik av Enaresjön. Endast på begäran via concierge.',
      copy: [
        'En timmergård med fyra sovrum vid en egen privat vik, nåbar via en enda väg. Används av en liten grupp återkommande gäster, vi håller några veckor varje säsong som privat allokering.',
        'Ingår gör en rökbastu, två vedeldade badtunnor, ett båthus och en privat köksbrigad som vi koordinerar när boendet är bokat. På vintern snöskoter- och huskytillgång via viken; kanot och fiske på sjön under midnattssolens säsong.',
      ],
      signature: [
        'Fyra sovrum vid en privat vik av Enaresjön',
        'Rökbastu + två vedeldade badtunnor',
        'Privat köksbrigad ordnas på begäran',
        'Snöskoter- / huskytillgång via sjön på vintern',
        'Båt + kanot + brygga för midnattssolens säsong',
        'Concierge-allokering, aldrig i offentliga erbjudanden',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'En modern, arkitektbyggd stuga på Levis södra sluttning. Ski-in / ski-out, eget wellnessplan.',
      copy: [
        'En arkitektbyggd stuga med tre sovrum på Levifjällets södra sluttning, med ett wellnessplan (bastu, ångbad, doppkar, behandlingsrum) på bottenvåningen och ett vardagsrum som mynnar ut på en 12 m lång terrass med utsikt över dalen.',
        'En kort utförsåkning till Levis gondol; en kort promenad tillbaka upp via den uppvärmda gången. Ingår gör daglig städning, frukostuppdukning och en skidconcierge på begäran.',
      ],
      signature: [
        'Arkitektbyggd stuga med tre sovrum, södra sluttningen',
        'Ski-in / ski-out via den uppvärmda gången',
        'Eget wellnessplan: bastu, ångbad, doppkar, behandlingsrum',
        'Glasterrass på 12 m med utsikt över dalen',
        'Daglig städning + frukostuppdukning ingår',
        'Skidconcierge på begäran under hela vistelsen',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Norra Finlands lyxiga norrskenshubb, Kakslauttanen, Star Arctic, den vilda kanten av Urho Kekkonen.',
      copy: [
        'Saariselkä ligger vid den norra kanten av Urho Kekkonens nationalpark, Finlands vildaste skyddade vildmark, och är byn som definierade norrskensboendet med glastak. De flesta av landets flaggskeppsstugor i glas (Kakslauttanen, Star Arctic, Northern Lights Village) ligger inom 10 km från byn.',
        'Byn själv är liten och lättgången, med en huvudgata, tre seriösa restauranger och direkt tillgång till nationalparken. Ivalo flygplats, 30 minuters privat transfer bort, hanterar regionala jetplan och privata charter.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, det ursprungliga boendet med glastak',
        'Star Arctic Hotel, toppsviter på fjället Kaunispää',
        'Direkt tillgång till Urho Kekkonens nationalpark (vildmarksnivå)',
        'Ivalo flygplats, lämplig för privata charter, transfer på 30 min',
      ],
      arrival: 'Ivalo (IVL), 30 min med privat transfer',
      auroraNote: 'Boreal skog i inlandet, lite ljusföroreningar. ~200 klara norrskensnätter per säsong, näst bäst i Finland efter Inari.',
    },
    'inari': {
      position: 'Statistiskt sett den mest tillförlitliga norrskensbreddgraden i Europeiska unionen. Samiskt kärnland, Enaresjön, mörk himmel.',
      copy: [
        'Inari är Finlands nordligaste kommun och de finska samernas kulturella huvudstad. Byn ligger vid Enaresjön, Finlands tredje största sjö, med 3 000 öar och den lägsta ljusföroreningen söder om polcirkeln.',
        'För lyxresor betyder det två saker. För det första: norrskenet är här statistiskt sett mest tillförlitligt i Europeiska unionen, med flest ovalpasseringar rakt ovanför. För det andra: de strandnära timmergårdarna (varav vi håller några privata) är Lapplands lugnaste boende, ingen genomfartstrafik, inga grannbyar vid den synliga horisonten.',
      ],
      highlights: [
        'Aurora Village, specialbyggt glasstugeområde på 30 hektar',
        'Wilderness Hotel Nellim, norrskensbubblor på Enaresjöns östra strand',
        'Samemuseet SIIDA + kulturprogram året runt',
        'Privata strandnära timmergårdar tillgängliga via conciergen',
      ],
      arrival: 'Ivalo (IVL), 45 min med privat transfer',
      auroraNote: 'Högsta norrskensfrekvensen i kontinentala EU. ~220 klara norrskensnätter per säsong, den statistiska vinnaren.',
    },
    'rovaniemi': {
      position: 'Ankomststaden. Arkitektbyggda sviter, dagliga direktflyg från stora hubbar.',
      copy: [
        'Rovaniemi är Lapplands regionala huvudstad och det lättast nåbara norrskensresmålet, flera direktflyg per dag från Helsingfors, plus säsongsbetonade direktflyg från London, Frankfurt, Paris, Wien och Gulfregionen. Flygplatsen ligger sex minuter från stadskärnan.',
        'Lyxutbudet här kretsar kring arkitektbyggda designsviter inom tio minuter från flygplatsen (Arctic TreeHouse, Apukka). Helikoptertransfer från flygplatsen till avlägsna reservat är vanliga.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, utkragande sviter ritade av Studio Puisto',
        'Apukka Resort, historiska norrskensvagnar vid sjön Apukkajärvi',
        'Direktflyg från London / Frankfurt / Wien / Doha (säsongsbetonat)',
      ],
      arrival: 'Rovaniemi (RVN), 6 min från stadskärnan',
      auroraNote: 'Lägre norrskensbreddgrad än Inari/Saariselkä men fortfarande ~150 klara norrskensnätter. Bäst i kombination med minst en natt i en fjällby.',
    },
    'levi': {
      position: 'Finlands ledande skidort. Lyxstugor på södra sluttningen, ski-in / ski-out från Levis gondol.',
      copy: [
        'Levi är Lapplands mest utvecklade fjällort, en komplett vintersportby med 43 liftar, flera Michelin-rekommenderade kök och en uthyrningsmarknad för designstugor som vuxit rejält det senaste decenniet. Gondolen går från byns centrum till toppen; södra sluttningen är där privatstugorna står.',
        'Norrskenssikten från Levi är riktad mot söder och dramatisk, ovanligt för Lappland, eftersom den upplysta bysilhuetten blir en del av bilden. Bäst i kombination med en eller två nätter längre norrut (Inari eller Saariselkä) för äkta vildmarksnorrsken, innan du återvänder hit för att åka skidor.',
      ],
      highlights: [
        'Levin Iglut, glasigloor mot söder ovanför fjällbyn',
        'Arkitektbyggda designstugor, södra sluttningen, ski-in/out',
        '43 skidliftar, längsta nedfarten 2,5 km, säsong nov–maj',
        'Kittilä flygplats (KTT) hanterar säsongsbetonade direkta internationella flyg',
      ],
      arrival: 'Kittilä (KTT), 20 min med privat transfer',
      auroraNote: 'Norrskenspanorama mot söder (ovanligt). ~150 klara nätter, men den upplysta byn ger en förgrundskomposition som är ovanlig längre norrut.',
    },
    'yllas': {
      position: 'Det lugna alternativet till Levi. Pallas-Yllästunturi nationalpark, mindre trängsel, djupare skog.',
      copy: [
        'Ylläs är Finlands näst största fjällort men känns som en femtedel av storleken, byn är utspridd över två orter (Äkäslompolo och Ylläsjärvi), åtskilda av 15 km fjäll, med Pallas-Yllästunturi nationalpark emellan. Skidutbudet matchar Levis; besökstätheten gör det inte.',
        'För lyxresor sitter dragningskraften i rymligheten. Arkitektbyggda stugor står här ensamma på fjällsluttningen; nationalparkens leder utgår från boendet; tystnaden är det folk faktiskt betalar för. Norrskenssikten är utmärkt tack vare den mycket låga lokala ljusföroreningen.',
      ],
      highlights: [
        'Pallas-Yllästunturi nationalpark, Finlands tredje största',
        'Två skidbyar på var sin sida om Ylläsfjället',
        'Lägre ljusförorening än någon annan skidort',
        'Särskilda längdskidspår (250 km totalt)',
      ],
      arrival: 'Kittilä (KTT), 50 min med privat transfer',
      auroraNote: 'Inom nationalparkens gräns, ett av de lägsta ljusföroreningsvärdena i kontinentala Europa. ~180 klara nätter.',
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
        'Fotografering på marken ingår på ömse sidor om flygningen; delen i luften är för själva upplevelsen, inte för kameran. Högst fyra passagerare per AS350. Beroende av väderfönstret, conciergen följer prognosen och meddelar dagen innan.',
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
        'Fullständig hantering: marktransfer till din villa med ett uppvärmt fordon av arktisk specifikation, bagage vidarebefordrat, tull utan kö. Conciergen lämnar in slottiden och stämmer av ankomsten mot villans incheckningstid.',
      ],
      available: 'Alla resmål, året runt',
    },
    'helicopter-villa-transfer': {
      hook: 'Upphämtning från den regionala flygplatsen direkt till din villas landningsplats, ingen vägtransfer.',
      copy: [
        'Används oftast för ankomster till de privata strandnära timmergårdarna vid Enaresjön. Farkosten är samma AS350 som används för norrskensflygningarna; en sträcka tar 20 till 45 minuter.',
        'Högst fem passagerare + bagage. Conciergen stämmer av upphämtningen mot villans incheckning och dagsljusfönstret, mitt i vintern går solen ner redan klockan 15:00.',
      ],
      available: 'Rovaniemi, Ivalo → gårdarna vid Enaresjön',
    },
  },
};

export default overlay;
