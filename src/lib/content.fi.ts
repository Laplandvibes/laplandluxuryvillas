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
      tagline: 'Rajakankaan suunnittelema ulokkeinen sviitti, jonka koko lasiseinä avautuu kohti revontulia.',
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
        'Inari on EU:n luotettavin revontulileveysaste',
        'Maksuton yksityinen lumikenkäreitti suoraan kohteesta',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Lasi-iglut Levitunturin rinteellä, Lapin ainoa iglurypäs, joka avautuu etelään laaksoon.',
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
        'Lodge järjestää saamelaisia kulttuuri-iltoja, pilkkimistä järvellä ja yhden Suomen harvoista sertifioiduista opastetuista revontulivalokuvausohjelmista. Huoneet varataan vuotta etukäteen helmikuun huippukaudelle, concierge löytää toisinaan vapautuneen paikan.',
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
      tagline: 'Lasiseinäinen sviitti Kaunispään tunturin laella, maan korkeimmalla sijaitseva revontulimakuuhuone.',
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
    'private-lakeside-log-estate': {
      tagline: 'Yksityinen käsin rakennettu hirsitalo omalla Inarijärven lahdellaan. Vain conciergen kautta tiedustellen.',
      copy: [
        'Neljän makuuhuoneen hirsihuvila omalla yksityisellä lahdellaan, jonne johtaa yksi ainoa tie. Pienen vakioasiakaskunnan käytössä, varaamme muutaman viikon kaudessa yksityisenä allokaationa.',
        'Sisältää savusaunan, kaksi puulämmitteistä paljua, venevajan ja oman kokkiryhmän, jonka koordinoimme kohdetta varatessa. Moottorikelkka- ja huskyyhteys lahden kautta talvella; kanoointi ja järvikalastus keskiyön auringon kaudella.',
      ],
      signature: [
        'Neljä makuuhuonetta yksityisellä Inarijärven lahdella',
        'Savusauna + kaksi puulämmitteistä paljua',
        'Oma kokkiryhmä järjestetään pyynnöstä',
        'Moottorikelkka-/huskyyhteys järven kautta talvella',
        'Vene + kanootti + laituri keskiyön auringon kaudelle',
        'Conciergen allokaatio, ei koskaan julkisissa listauksissa',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Moderni arkkitehdin suunnittelema chalet Levin etelärinteellä. Ski-in/ski-out, yksityinen hyvinvointikerros.',
      copy: [
        'Kolmen makuuhuoneen arkkitehdin suunnittelema chalet Levitunturin etelärinteellä, jossa hyvinvointikerros (sauna, höyry, avantoallas, hoitohuone) sijaitsee pohjakerroksessa ja olohuone avautuu 12 metrin terassille laaksoon päin.',
        'Lyhyt laskettelumatka Levin gondolihissille; lyhyt kävelymatka takaisin ylös lämmitettyä polkua pitkin. Sisältää päivittäisen siivouksen, aamiaisen katteen ja päivystävän laskettelukonciergen.',
      ],
      signature: [
        'Arkkitehdin suunnittelema kolmen makuuhuoneen chalet, etelärinne',
        'Ski-in/ski-out lämmitettyä polkua pitkin',
        'Yksityinen hyvinvointikerros: sauna, höyry, avantoallas, hoitohuone',
        '12 metrin lasiterassi laaksoon päin',
        'Päivittäinen siivous + aamiaisen kate sisältyy',
        'Päivystävä laskettelu-concierge koko oleskelun ajan',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Pohjois-Suomen luksusrevontulikeskus, Kakslauttanen, Star Arctic ja Urho Kekkosen villi reuna.',
      copy: [
        'Saariselkä sijaitsee Urho Kekkosen kansallispuiston pohjoisreunalla, Suomen villeimmän suojellun erämaan, ja on kylä, joka määritteli lasikattoisen revontulimajoituksen. Suurin osa maan lippulaivamökeistä (Kakslauttanen, Star Arctic, Northern Lights Village) on 10 km:n säteellä kylästä.',
        'Itse kylä on pieni ja kävellen kierrettävä, yhdellä pääraitilla, kolmella vakavasti otettavalla ravintolalla ja suoralla yhteydellä kansallispuistoon. Ivalon lentoasema, 30 minuuttia yksityiskuljetuksella, palvelee alueellisia suihkukoneita ja yksityislentoja.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, alkuperäinen lasikattokohde',
        'Star Arctic Hotel, laen sviitit Kaunispään tunturilla',
        'Suora yhteys Urho Kekkosen kansallispuistoon (erämaaluokkaa)',
        'Ivalon lentoasema, yksityislentokelpoinen, 30 min kuljetus',
      ],
      arrival: 'Ivalo (IVL), 30 min yksityiskuljetuksella',
      auroraNote: 'Sisämaan boreaalista metsää, vähäinen valosaaste. ~200 selkeää revontuliyötä kaudessa, Suomen toiseksi paras Inarin jälkeen.',
    },
    'inari': {
      position: 'Tilastollisesti Euroopan unionin luotettavin revontulileveysaste. Saamelaisten sydänmaa, Inarijärvi, pimeät taivaat.',
      copy: [
        'Inari on Suomen pohjoisin kunta ja suomensaamelaisten kulttuuripääkaupunki. Kylä sijaitsee Inarijärven rannalla, Suomen kolmanneksi suurimman järven, jossa on 3 000 saarta ja vähäisin valosaaste napapiirin eteläpuolella.',
        'Luksusmatkailulle tämä merkitsee kahta asiaa. Ensinnäkin: revontulet ovat täällä tilastollisesti Euroopan unionin luotettavimmat, eniten suoraan päälaen yllä avautuvine esityksineen. Toiseksi: rantojen hirsihuvilat (joista osaa pidämme yksityisesti) ovat Lapin rauhallisin majoitus, ei läpikulkuliikennettä, ei naapurikyliä näkyvällä horisontilla.',
      ],
      highlights: [
        'Aurora Village, varta vasten rakennettu 30 hehtaarin lasimökkialue',
        'Wilderness Hotel Nellim, revontulikuplat Inarijärven itärannalla',
        'Saamelaismuseo SIIDA + kulttuuriohjelmat ympäri vuoden',
        'Yksityiset rantojen hirsihuvilat saatavilla conciergen kautta',
      ],
      arrival: 'Ivalo (IVL), 45 min yksityiskuljetuksella',
      auroraNote: 'Korkein revontulitiheys Manner-EU:ssa. ~220 selkeää revontuliyötä kaudessa, tilastollinen voittaja.',
    },
    'rovaniemi': {
      position: 'Saapumiskaupunki. Arkkitehdin suunnittelemia sviittejä, päivittäisiä suoria lentoja suurilta lentokentiltä.',
      copy: [
        'Rovaniemi on Lapin maakuntakeskus ja helpoimmin saavutettava revontulikohde, useita päivittäisiä suoria lentoja Helsingistä sekä kausittaisia suoria lentoja Lontoosta, Frankfurtista, Pariisista, Wienistä ja Persianlahdelta. Lentoasema on kuuden minuutin päässä keskustasta.',
        'Luksustarjonta rakentuu täällä arkkitehdin suunnittelemien designsviittien ympärille kymmenen minuutin päässä lentoasemalta (Arctic TreeHouse, Apukka). Helikopterikuljetukset lentoasemalta syrjäisille erämaa-alueille ovat yleisiä.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, Studio Puiston suunnittelemat ulokkeiset sviitit',
        'Apukka Resort, perinnerevontulivaunut Apukkajärven rannalla',
        'Suorat lennot Lontoosta / Frankfurtista / Wienistä / Dohasta (kausittain)',
      ],
      arrival: 'Rovaniemi (RVN), 6 min keskustasta',
      auroraNote: 'Matalampi revontulileveysaste kuin Inarissa/Saariselällä mutta silti ~150 selkeää revontuliyötä. Paras yhdistettynä vähintään yhteen tunturikyläyöhön.',
    },
    'levi': {
      position: 'Suomen ykkönen hiihtokeskus. Luksuschalet´t etelärinteellä, ski-in/ski-out Levin gondolihissiltä.',
      copy: [
        'Levi on Lapin kehittynein tunturikeskus, täysimittainen talviurheilukylä, jossa on 43 hissiä, useita Michelin-suositeltuja keittiöitä ja viime vuosikymmenellä vakavaksi kasvanut designchalet´ien vuokramarkkina. Gondolihissi kulkee kylän keskustasta laelle; etelärinteellä sijaitsevat yksityiset chalet´t.',
        'Revontulinäkyvyys Leviltä avautuu etelään ja on näyttävä, harvinaista Lapissa, sillä valaistu kylän siluetti tulee osaksi valokuvaa. Paras yhdistettynä yhteen tai kahteen yöhön kauempana pohjoisessa (Inari tai Saariselkä) aitoa erämaarevontulta varten ennen paluuta tänne laskettelemaan.',
      ],
      highlights: [
        'Levin Iglut, etelään avautuvat lasi-iglut tunturikylän yllä',
        'Arkkitehdin suunnittelemat designchalet´t, etelärinne, ski-in/out',
        '43 hissiä, pisin rinne 2,5 km, kausi marras–touko',
        'Kittilän lentoasema (KTT) palvelee kausittaisia suoria kansainvälisiä lentoja',
      ],
      arrival: 'Kittilä (KTT), 20 min yksityiskuljetuksella',
      auroraNote: 'Etelään avautuva revontulipanoraama (harvinaista). ~150 selkeää yötä, mutta valaistu kylä tarjoaa etualan sommittelun, jollaista ei kauempana pohjoisessa juuri näe.',
    },
    'yllas': {
      position: 'Levin rauhallinen vaihtoehto. Pallas-Yllästunturin kansallispuisto, vähemmän ruuhkaa, syvempi metsä.',
      copy: [
        'Ylläs on Suomen toiseksi suurin tunturikeskus, mutta tuntuu viidesosan kokoiselta, kylä on hajautunut kahteen taajamaan (Äkäslompolo ja Ylläsjärvi), joita erottaa 15 km tunturia, Pallas-Yllästunturin kansallispuisto välissään. Lasketteluvalikoima vastaa Leviä; kävijätiheys ei.',
        'Luksusmatkailulle vetovoima on tila. Arkkitehdin suunnittelemat chalet´t sijaitsevat täällä yksinään tunturin rinteellä; kansallispuiston reitit lähtevät suoraan kohteesta; hiljaisuus on se, mistä ihmiset todella maksavat. Revontulinäkyvyys on erinomainen erittäin vähäisen paikallisen valosaasteen ansiosta.',
      ],
      highlights: [
        'Pallas-Yllästunturin kansallispuisto, Suomen 3. suurin',
        'Kaksi hiihtokylää Ylläksen tunturin vastakkaisilla puolilla',
        'Vähäisempi valosaaste kuin millään muulla hiihtokeskuksella',
        'Omistetut hiihtoladut (yhteensä 250 km)',
      ],
      arrival: 'Kittilä (KTT), 50 min yksityiskuljetuksella',
      auroraNote: 'Kansallispuiston rajojen sisällä, Manner-Euroopan vähäisimpiä valosaastelukemia. ~180 selkeää yötä.',
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
        'Maakuvaus sisältyy lennon kummallekin puolelle; itse lento-osuus on elämystä, ei kameraa varten. Enintään neljä matkustajaa AS350-konetta kohti. Säärajoitteinen, concierge seuraa ennustetta ja ilmoittaa edellisenä päivänä.',
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
        'Täysi käsittely: maakuljetus huvilallesi lämmitetyllä arktisen tason autolla, matkatavarat eteenpäin, tulli ohi ilman jonoa. Concierge varaa lähtöslotin ja sovittaa saapumisen huvilan sisäänkirjautumisaikaan.',
      ],
      available: 'Kaikki kohteet, ympäri vuoden',
    },
    'helicopter-villa-transfer': {
      hook: 'Nosto alueen lentoasemalta suoraan huvilasi laskeutumispaikalle, ei maakuljetusta.',
      copy: [
        'Käytetään useimmiten saavuttaessa Inarijärven yksityisille rantojen hirsitiloille. Kone on sama AS350, jota revontulilennoilla käytetään; yksi sektori kestää 20–45 minuuttia.',
        'Enintään viisi matkustajaa + matkatavarat. Concierge ajoittaa noston huvilan sisäänkirjautumiseen ja valoisaan aikaan, talven syvimpään kauteen aurinko laskee jo klo 15.',
      ],
      available: 'Rovaniemi, Ivalo → Inarijärven tilat',
    },
  },
};

export default overlay;
