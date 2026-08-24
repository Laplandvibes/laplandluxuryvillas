import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Lämmitettyä lämpölasia käsintehdyn kelohonkamökin päällä, alkuperäinen revontulimakuuhuone.',
      copy: [
        'Omavarainen hirsihuvila, jossa on oma lasikattoinen makuuhuone, keittiö, takkahuone ja suomalainen sauna. Lämpölasi pysyy kirkkaana −30 °C:ssa, joten revontulia katselee parisängystä peiton alta poistumatta.',
        'Sijaitsee Kakslauttasen alueella Urho Kekkosen kansallispuiston tuntumassa, 35 minuutin yksityiskuljetuksen päässä Ivalon lentoasemalta. Puolihoito alueen ravintolan kanssa saatavilla; oma kokki pyynnöstä.',
      ],
      signature: [
        'Lämmitetty lasikatto makuuhuoneen päällä (kirkas −30 °C:ssa)',
        'Oma puulämmitteinen sauna + ulkona puulämmitteinen palju',
        'Kaksi makuuhuonetta, täysi keittiö, takkahuone',
        'Yksityiskuljetus Ivalon lentoasemalta sisältyy hintaan',
        'Huoneen revontulihälytys vastaanoton kautta',
        'Puolihoitovaihtoehto alueen keittiön kautta',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Studio Puiston suunnittelema ulokkeinen sviitti, jonka koko lasiseinä avautuu kohti revontulia.',
      copy: [
        '73 m²:n kattohuoneistosviitti pylväiden varassa, lattiasta kattoon ulottuvalla lasilla koko leveydeltä. Suunnittelusta vastasi Studio Puisto. Yksityinen terassi ja palju. Rakennus rakennettiin yhden männyn ympärille, jokainen sisustuksen yksityiskohta on valittu katoamaan, jotta metsä jää huoneen ainoaksi katseenvangitsijaksi.',
        'Viiden minuutin päässä Joulupukin pajakylästä, kätevä tukikohta joulukauden perhematkailijoille, jotka haluavat rauhallisen vetäytymispaikan yöksi ja helpon pääsyn Rovaniemelle päivisin.',
      ],
      signature: [
        '73 m²:n sviitti, täyskorkuinen lasijulkisivu pohjoiseen',
        'Yksityinen terassi paljulla + ulkosauna',
        'Studio Puiston sisustus, suomalaisen muotoilun klassikoita läpi tilan',
        'Lattialämmitys, pimennysverhot päiväunia varten',
        'Talon oma Rakas-ravintola',
        'Viisi minuuttia Joulupukin pajakylään',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Kaksikymmentäneljä lasimökkiä, joiden edessä ei muuta kuin metsää ja revontuliovaali.',
      copy: [
        'Inari sijaitsee suoraan revontuliovaalin alla, tilastollisesti Euroopan luotettavimmalla revontulileveysasteella. Aurora Village on 24 mökin alue, jonka läpi ei kulje liikennettä eikä näkyvällä horisontilla ole naapurikyliä. Mökit on sijoiteltu yksityisyyttä ajatellen, sänky lasin alla ja sohva sitä kohti.',
        'Alueen saamelaisvetoinen ravintola tarjoaa maistelumenun poron, nieriän ja lakan ympärille. Revontulihälytykset välitetään radioteitse mökistä mökkiin, jottei kukaan herätä viereistä huvilaa.',
      ],
      signature: [
        'Lasikattomökki, sänky katon lakipisteen alla',
        '24 mökkiä 30 hehtaarin alueella, väljästi sijoiteltuina',
        'Saamelaisvetoinen ravintola alueella, maistelumenu joka ilta',
        'Revontulihälytys mökin sisäisellä radiolla',
        'Revontulia noin 3 yönä 4:stä tällä leveysasteella (IL)',
        'Maksuton yksityinen lumikenkäreitti suoraan kohteesta',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Lasi-iglut Levitunturin rinteellä, etelään laaksoon eikä pohjoiseen metsään.',
      copy: [
        'Neljäkymmentäkaksi lasi-iglua Levitunturin eteläisellä kupeella. Useimmat revontulimökit osoittavat pohjoiseen tyhjään metsään; Levin Iglut on yksi harvoista, joka kehystää valot valaistun tunturikylän siluetin yläpuolelle, parempi valokuvaajille ja näyttävämpi hämärässä.',
        'Kävelymatkan päässä Levin kylästä (gondolihissi, ravintolat, ski-in/ski-out), mutta itse iglut ovat rauhalliset. Talon oma Restaurant Aurora hankkii raaka-aineensa 100 km:n säteeltä.',
      ],
      signature: [
        'Etelään avautuva revontulipanoraama (harvinaista Lapissa)',
        'Kävelymatkan päässä Levin gondolihissistä + kylästä',
        'Talon oma Restaurant Aurora, 100 km:n hankintasäde',
        'Premium-sviiteissä oma palju terassilla',
        'Ski-in/ski-out-yhteys talvikaudella',
        'Huoneen revontulihälytys',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Lasikupolisviitti boreaalisen metsän laidalla, kahdenkymmenen minuutin päässä Venäjän rajasta.',
      copy: [
        'Nellim on toimiva erämaakylä (220 asukasta) Inarijärven itärannalla. Revontulikuplat on sijoitettu erilleen päärakennuksesta omalle aukiolleen, kullakin panoraaminen läpinäkyvä kupoli sängyn päällä ja puulämmitteinen palju kuistilla.',
        'Lodge järjestää saamelaisia kulttuuri-iltoja, pilkkimistä järvellä ja yhden Suomen harvoista sertifioiduista opastetuista revontulivalokuvausohjelmista. Huoneet varataan vuotta etukäteen helmikuun huippukaudelle.',
      ],
      signature: [
        'Läpinäkyvä panoraamakupoli sängyn päällä',
        'Yksityinen puulämmitteinen palju kuistilla',
        'Erämaakylän sijainti, 20 min Venäjän rajasta',
        'Sertifioitu opastettu revontulivalokuvausohjelma',
        'Saamelaista kulttuuriohjelmaa useana iltana viikossa',
        'Inarijärven kalastus + perinteinen savusauna',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Lasiseinäinen sviitti Kaunispään laella, puurajan ja kylän valojen yläpuolella.',
      copy: [
        'Star Arctic sijaitsee aivan Kaunispään laella, sen tunturin, joka kohoaa suoraan Saariselän kylästä. Skyview-sviiteissä on täyskorkuiset lasiseinät kolmella sivulla, ei verhoja, ja kylliksi korkeutta paikallisen metsärajan ylittämiseen, mikä tarkoittaa aitoa 270 asteen panoraamaa sängystä.',
        'Lakitie on yksityinen ja valaistu öisin, joten vieraat voivat ajaa itse perille. Hotellilla on oma observatorio, ravintola ja kesäksi läskipyöräkalusto.',
      ],
      signature: [
        '270 asteen lasi alueen korkeimman tunturin laella',
        'Yksityinen lakitie, valaistu öisin',
        'Talon oma pimeän taivaan observatorio (kaukoputki-illat)',
        'Sauna lattiasta kattoon ulottuvalla tunturinäkymällä',
        'Premium-sviitit, kulmalasi, erillinen oleskelutila',
        'Viiden minuutin ajomatka Saariselän kylään',
      ],
    },
    'lapland-hotels-saaga-apartment': {
      tagline: 'Oma huoneisto Ylläksen etelärinteiden juurella, hotellin kylpylä takanaan.',
      copy: [
        'Lapland Hotels Saaga sijaitsee Ylläsjärven kylässä aivan Ylläksen laskettelurinteiden eteläpuolella. Hotellihuoneiden ohella se vuokraa lomahuoneistoja yhdestä kahdeksaan vieraalle, joko hotellin alueella tai noin 300 metrin päässä päärakennuksesta, joten perhe tai pieni seurue saa oman tilansa poistumatta keskuksesta.',
        'Huoneistojen takana on koko hotelli: kylpylä allasosastoineen, poreammeineen ja höyrysaunoineen, kuntosali ja hoidot sekä yksityissauna enintään 15 hengelle omalla oleskelutilallaan. Alueella on kolme ravintolaa, joista Biegga on buffet, ja aamiainen rakentuu pohjoisen raaka-aineille.',
      ],
      signature: [
        'Ylläsjärven kylä, Ylläksen etelärinteiden alla',
        'Lomahuoneistot 1–8 vieraalle',
        'Hotellin alueella tai noin 300 m päärakennuksesta',
        'Kylpylä: allasosasto, poreammeet, höyrysaunat, kuntosali',
        'Yksityissauna 15 hengelle omalla oleskelutilalla',
        'Kolme ravintolaa alueella, mukaan lukien Biegga-buffet',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Perinnetyyliset revontulivaunut jäätyneen järven rannalla, kymmenen minuutin päässä Rovaniemen lentoasemalta.',
      copy: [
        'Kourallinen entisöityjä ajanmukaisia rautatievaunuja, jotka on rakennettu uudelleen lasikattoisiksi revontulimökeiksi aivan Apukkajärven reunalle. Kätevä, jos käytössä on vain kaksi yötä ja haluaa laskeutua, siirtyä ja olla sängyssä lasin alla tunnin sisällä.',
        'Alueella oma huskytila, poroja, pilkkimistä ja moottorikelkkareitti erämaahan. Vaunut itsessään ovat intiimejä (yksi makuuhuone, yksi kylpyhuone, oleskelutila); resort hoitaa kaiken aktiviteettilogistiikan.',
      ],
      signature: [
        'Perinteinen rautatievaunumuotoilu, lasikattoinen makuuhuone',
        'Apukkajärven rannalla',
        '10 minuutin kuljetus Rovaniemen lentoasemalta',
        'Talon oma husky + porot + pilkkiminen',
        'Moottorikelkkareitti suoraan kohteesta',
        'Revontulihälytys + mökin vieressä palju',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Pohjois-Suomen luksusrevontulikeskus, Kakslauttanen, Star Arctic ja Urho Kekkosen villi reuna.',
      copy: [
        'Saariselkä sijaitsee Urho Kekkosen kansallispuiston, yhden Suomen laajimmista erämaa-alueista, pohjoisreunalla, ja se on kylä joka määritteli lasikattoisen revontulimajoituksen. Suurin osa maan tunnetuimmista lasimökeistä (Kakslauttanen, Star Arctic, Northern Lights Village) on 10 kilometrin säteellä kylästä.',
        'Itse kylä on pieni ja kävellen kierrettävä: yksi pääraitti, muutama ravintola ja suora yhteys kansallispuistoon. Ivalon lentoasemalle on 27 kilometriä eli noin puoli tuntia yksityiskuljetuksella, ja se palvelee sekä reittiliikennettä että yksityiskoneita.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, alkuperäinen lasikattokohde',
        'Star Arctic Hotel, laen sviitit Kaunispään tunturilla',
        'Suora yhteys Urho Kekkosen kansallispuistoon (erämaaluokkaa)',
        'Ivalon lentoasema, yksityislentokelpoinen, 30 min kuljetus',
      ],
      arrival: 'Ivalo (IVL), 27 km, noin 30 min yksityiskuljetuksella',
      auroraNote: 'Sisämaan havumetsää, jossa ei ole asutuksen valoja kymmeniin kilometreihin mihinkään suuntaan. Tunturit antavat korkean ja avoimen horisontin, mikä ratkaisee niinä öinä kun kaari jää matalalle pohjoiseen.',
    },
    'inari': {
      position: 'Pohjoisin kohteemme, jossa revontulia havaitaan noin kolmena yönä neljästä. Saamelaisten sydänmaa, Inarijärvi, pimeät taivaat.',
      copy: [
        'Inari on Suomen pohjoisin kunta ja suomensaamelaisten kulttuuripääkaupunki. Kylä sijaitsee Inarijärven, Suomen kolmanneksi suurimman järven, rannalla. Järvessä on noin 3 000 saarta, ja kylä on yli 200 kilometriä napapiirin pohjoispuolella ilman kaupungin valoja horisontissa.',
        'Luksusmatkailulle tämä merkitsee kahta asiaa. Ensinnäkin: tällä leveysasteella Ilmatieteen laitos havaitsee revontulia keskimäärin kolmena yönä neljästä, ja ne avautuvat suoraan päälaen yllä eivätkä matalalla pohjoisessa. Toiseksi: rantojen hirsihuvilat ovat Lapin rauhallisimpia majoituksia: ei läpikulkuliikennettä eikä naapurikyliä näkyvällä horisontilla.',
      ],
      highlights: [
        'Aurora Village, varta vasten rakennettu 30 hehtaarin lasimökkialue',
        'Wilderness Hotel Nellim, revontulikuplat Inarijärven itärannalla',
        'Saamelaismuseo SIIDA + kulttuuriohjelmat ympäri vuoden',
        'Inarijärvi, Suomen kolmanneksi suurin järvi, noin 3 000 saarta',
      ],
      arrival: 'Ivalo (IVL), 40 km, noin 40 min yksityiskuljetuksella',
      auroraNote: 'Pohjoisin kohteemme ja se, jossa revontulet useimmiten avautuvat suoraan pään päälle eivätkä matalalle pohjoiseen. Inarijärvi antaa yhtenäisen horisontin, eikä siinä näy kylän valoja.',
    },
    'rovaniemi': {
      position: 'Saapumiskaupunki. Arkkitehdin suunnittelemia sviittejä, päivittäisiä suoria lentoja suurilta lentokentiltä.',
      copy: [
        'Rovaniemi on Lapin maakuntakeskus ja helpoimmin saavutettava revontulikohde: useita päivittäisiä suoria lentoja Helsingistä sekä kausittaisia suoria lentoja Lontoosta, Frankfurtista, Pariisista, Wienistä ja Persianlahdelta. Lentoasema on noin 10 kilometriä keskustasta pohjoiseen, kymmenen tai viisitoista minuuttia autolla.',
        'Luksustarjonta rakentuu täällä arkkitehdin suunnittelemien designsviittien ympärille kymmenen minuutin päässä lentoasemalta (Arctic TreeHouse, Apukka). Helikopterikuljetukset lentoasemalta syrjäisille erämaa-alueille ovat yleisiä.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, Studio Puiston suunnittelemat ulokkeiset sviitit',
        'Apukka Resort, perinnerevontulivaunut Apukkajärven rannalla',
        'Suorat lennot Lontoosta / Frankfurtista / Wienistä / Dohasta (kausittain)',
      ],
      arrival: 'Rovaniemi (RVN), 10 km, 10–15 min keskustasta',
      auroraNote: 'Eteläisin kohteemme ja ainoa, jonka horisontissa on kaupungin valot. Revontulia näkyy täällä harvemmin ja ne erottuvat huonommin. Kannattaa yhdistää vähintään yhteen yöhön tunturikylässä pohjoisempana.',
    },
    'levi': {
      position: 'Suomen johtava hiihtokeskus. Luksuschalet’t etelärinteellä, ski-in/ski-out Levin gondolihissiltä.',
      copy: [
        'Levi on Lapin kehittynein tunturikeskus, täysimittainen talviurheilukylä, jossa on 44 rinnettä ja 26 hissiä, joista kaksi on gondoleita. Designchalet’ien vuokramarkkina on kasvanut täällä vakavasti otettavaksi viimeisen vuosikymmenen aikana. Gondolihissi kulkee kylän keskustasta 531 metrin laelle, ja etelärinteellä sijaitsevat yksityiset chalet’t. Samalle rinteelle avautuu uusi tuolihissi kaudeksi 2026–2027.',
        'Revontulinäkyvyys Leviltä avautuu etelään ja on näyttävä, harvinaista Lapissa, sillä valaistu kylän siluetti tulee osaksi valokuvaa. Paras yhdistettynä yhteen tai kahteen yöhön kauempana pohjoisessa (Inari tai Saariselkä) aitoa erämaarevontulta varten ennen paluuta tänne laskettelemaan.',
      ],
      highlights: [
        'Levin Iglut, etelään avautuvat lasi-iglut tunturikylän yllä',
        'Arkkitehdin suunnittelemat designchalet’t, etelärinne, ski-in/out',
        '44 rinnettä, 26 hissiä (kaksi gondolia), 38,5 km hoidettua rinnettä',
        'Kittilän lentoasema (KTT) palvelee kausittaisia suoria kansainvälisiä lentoja',
      ],
      arrival: 'Kittilä (KTT), 15 km, noin 20 min yksityiskuljetuksella',
      auroraNote: 'Etelään avautuva panoraama, mikä on Lapissa harvinaista: valaistu tunturikylä tulee osaksi kuvan etualaa. Vastineeksi kylän oma valo häiritsee, joten pimein katselupaikka on lyhyen ajomatkan päässä.',
    },
    'yllas': {
      position: 'Levin rauhallinen vaihtoehto. Pallas-Yllästunturin kansallispuisto, vähemmän ruuhkaa, syvempi metsä.',
      copy: [
        'Ylläksellä on 62 rinnettä, enemmän kuin missään muussa Suomen hiihtokeskuksessa, ja maan pisimmät laskettelurinteet: yli kolme kilometriä paljaalta 719 metrin laelta laaksoon. Silti se tuntuu murto-osalta Levin kokoiselta, sillä kylä on hajautunut kahteen taajamaan (Äkäslompolo ja Ylläsjärvi), joita erottaa 15 kilometriä tunturia ja Pallas-Yllästunturin kansallispuisto.',
        'Luksusmatkailulle vetovoima on tila. Arkkitehdin suunnittelemat chalet’t sijaitsevat täällä yksinään tunturin rinteellä, kansallispuiston reitit lähtevät suoraan kohteesta, ja hiljaisuus on se mistä ihmiset todella maksavat. Latuverkostoa on noin 300 kilometriä, siitä yli 30 kilometriä valaistuna.',
      ],
      highlights: [
        'Pallas-Yllästunturin kansallispuisto, Suomen 3. suurin',
        'Kaksi hiihtokylää Ylläksen tunturin vastakkaisilla puolilla',
        'Kansallispuiston sisällä, joten tunturin puolella ei ole keskuksen valoja',
        'Noin 300 km hoidettua latua, siitä yli 30 km valaistuna',
      ],
      arrival: 'Kittilä (KTT), 40 km, noin 45 min yksityiskuljetuksella',
      auroraNote: 'Chalet’t sijaitsevat kansallispuistoa vasten eivätkä keskuksen keskellä, joten astut ovesta suoraan pimeään sen sijaan että ajaisit sitä etsimään.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Yksi opas, oma seurueesi ja lämmitetty kuvausauto, joka seuraa ennustetta minne se ikinä osoittaakin.',
      copy: [
        'Kuusituntinen yksityinen revontulijahti sertifioidun suomalaisen luontokuvausoppaan kanssa. Auto on lämmitetty ja varusteltu; jalustat, lankalaukaisimet ja arktisiin oloihin sertifioidut kamerat lainataan, jos et tuo omiasi. Reitti päätetään samana iltapäivänä kp-indeksin ja pilvisyysennusteen perusteella.',
        'Lämmin ruoka ja porontaljat maahan kuuluvat vakiona. Opastus kattaa valotuksen itse revontulille, etualan sommittelun ja saman illan jälkikäsittelyn.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, syys–huhtikuu',
    },
    'helicopter-aurora-flight': {
      hook: '45 minuutin yölentohelikopterilla pilvikerroksen yläpuolelle, suoraan revontulien luo.',
      copy: [
        'Lentoa operoi Suomen ainoa yö-VFR-sertifioitu helikopterioperaattori Rovaniemeltä ja Ivalosta. Lento nousee paikallisen pilvikerroksen yli ja kiertää aktiivisen revontuliovaalin sisällä, näkökulma, joka on maasta mahdoton.',
        'Maakuvaus sisältyy lennon kummallekin puolelle; itse lento-osuus on elämystä, ei kameraa varten. Enintään neljä matkustajaa AS350-konetta kohti. Säärajoitteinen: operaattori seuraa ennustetta ja ilmoittaa edellisenä päivänä.',
      ],
      available: 'Rovaniemi, Ivalo, loka–maaliskuu (sääriippuvainen)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Yhdeksän ruokalajin suomalais-saamelainen maistelumenu, jonka työssä käyvä Lapin kokki valmistaa huvilasi keittiössä.',
      copy: [
        'Työssä käyvä kokki yhdestä Lapin vakavasti otettavasta keittiöstä saapuu huvilaasi illaksi. Menu rakennetaan sen ympärille, mitä on kyseisellä viikolla aidosti sesongissa: kylmän veden nieriää, lakkaa, savustettua poroa, tuoreita metsäsieniä, tyrniä, katajaa.',
        'Sisältää menuun kuratoidun viinisovituksen, raaka-aineet, valmistelun, tarjoilun ja siivouksen. Enintään kymmenen vierasta. Kasvis-, gluteeniton- ja äyriäisvapaa menu pyynnöstä, vähintään 72 tunnin varoitusajalla.',
      ],
      available: 'Mikä tahansa kokoelman huvila, ympäri vuoden',
    },
    'private-husky-safari': {
      hook: 'Oma valjakkosi, oma tarhaoppaasi, sisään boreaaliseen metsään ensi valossa.',
      copy: [
        'Yksityinen kuudentoista vetokoiran valjakko ja yksi tarhaopas. Reitti kulkee vakavasti otettavan rekikoiratarhan työreittiverkostoon, tyypillisesti 35 km, puolimatkassa nuotiotauko kuuman puolukkamehun ja grillimakkaran kera.',
        'Ajat omaa rekeäsi (ensin 20 minuutin perehdytys). Villahaalarit, lapaset ja arktiset saappaat annetaan käyttöösi. Seurue kahdesta kuuteen, ei jaettuja ryhmiä, ei koskaan vieraiden kanssa yhdistettyä.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, joulu–huhtikuu',
    },
    'private-snowmobile-wilderness': {
      hook: 'Opastettu 80 km:n moottorikelkkareitti jäätyneiden järvien ja koskemattoman metsän halki, puulla valmistettu lounas mukana.',
      copy: [
        'Koko päivän opastettu moottorikelkkareitti ylätuntureiden reiteillä, se verkosto, jota paikallisoppaat käyttävät, ei turistilenkki. Lounaan valmistaa opas nuotiolla reitin varrella (poromuhennos, nuotiolla paistettu leipä, kuuma mehu).',
        'BRP-koneet, kypärät, kommandopipot ja villahaalarit sisältyvät. Kahden hengen kelkkoja saatavilla. Kuljettajalta vaaditaan ajokortti; matkustajan paikalle korttia ei tarvita. Enintään neljä kelkkaa ryhmää kohti.',
      ],
      available: 'Saariselkä, Inari, Levi, joulu–huhtikuu',
    },
    'private-reindeer-sami-evening': {
      hook: 'Poroajelua toimivalla tilalla, sitten ilta yksityisessä kodassa saamelaisisännän seurassa.',
      copy: [
        'Kaksi tuntia poroajelua toimivalla paliskuntatilalla, jonka jälkeen yksityinen ilta lämmitetyssä kodassa (avotulikota). Isäntä on saamelainen poronhoitaja, joka pyörittää tilaa, keskustelu, ei käsikirjoitus, on itse elämys.',
        'Illallisena poronkäristystä perunamuusin ja puolukan kera, avotulella valmistettuna. Tarinoita porotokasta, vuotuiskierrosta ja joikuperinteestä. Enintään kaksitoista vierasta.',
      ],
      available: 'Inari, Saariselkä, ympäri vuoden (ajelu joulu–maaliskuu)',
    },
    'private-jet-arrival': {
      hook: 'Suora yksityiskonekuljetus Ivaloon, Kittilään tai Rovaniemelle, ei kaupallista lähtöselvitystä, ei vaihtoasemaa.',
      copy: [
        'Koordinoidaan suihkukonekumppaniemme kautta Helsingissä, Genevessä ja Dohassa. Suorat lennot Ivaloon (lähimpänä Saariselän / Inarin huviloita), Kittilään (lähimpänä Levin / Ylläksen huviloita) tai Rovaniemelle (paras Arctic TreeHousea varten).',
        'Täysi käsittely: maakuljetus huvilallesi lämmitetyllä arktisen tason autolla, matkatavarat eteenpäin, tulli ohi ilman jonoa. Operaattori varaa lähtöslotin ja sovittaa saapumisen huvilan sisäänkirjautumisaikaan.',
      ],
      available: 'Kaikki kohteet, ympäri vuoden',
    },
    'helicopter-villa-transfer': {
      hook: 'Nosto alueen lentoasemalta suoraan huvilasi laskeutumispaikalle, ei maakuljetusta.',
      copy: [
        'Käytetään useimmiten saavuttaessa Inarijärven yksityisille rantojen hirsitiloille. Kone on sama AS350, jota revontulilennoilla käytetään; yksi sektori kestää 20–45 minuuttia.',
        'Enintään viisi matkustajaa + matkatavarat. Operaattori ajoittaa noston huvilan sisäänkirjautumiseen ja valoisaan aikaan, joka on keskitalvella vain muutama hämärän tunti keskipäivän molemmin puolin — Inarin leveysasteella aurinko ei nouse lainkaan.',
      ],
      available: 'Rovaniemi, Ivalo → Inarijärven tilat',
    },
  },
};

export default overlay;
