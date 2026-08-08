/**
 * Faktahuomautusten ja kansallispuistonimien käännökset.
 *
 * Sisarmoduuli `labels.ts`:lle ja samasta syystä: se sanoo periaatteen ääneen,
 * "facts.ts holds numbers and sources and nothing a translator would touch".
 * Rekisterin `note`-kentät rikkovat tuota sääntöä — ne ovat proosaa lukujen
 * seassa — ja juuri siksi ne renderöityivät englanniksi jokaisella kielellä
 * (auditti 4.8.: TARKISTETTAVAT FAKTAT -paneeli ja UKK laplandluxuryvillasilla).
 *
 * Data pysyy englanti-avaimisena, jotta luvut voi yhä verifioida virallisilta
 * sivuilta lukematta käännöksiä. Käännös tehdään vasta renderöitäessä.
 *
 * 🔴 Luvut kopioidaan käännökseen sellaisenaan. Generaattorin portti hylkää
 * kielen, josta jokin lähteen luku on kadonnut: pyöristynyt tai muuttunut luku
 * olisi pahempi vika kuin kääntämätön lause, koska nämä ovat lähteestä
 * verifioituja faktoja.
 *
 * GENEROITU tiedostosta `_gen_facts_i18n.mjs` — älä editoi käsin, vaan muokkaa
 * `_facts_tr_<kieli>.json` ja aja generaattori uudelleen.
 */
import type { FactLocale } from './labels';

const TABLES: Partial<Record<FactLocale, Record<string, string>>> = {
  'fi': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "Noin 10 km keskustasta pohjoiseen, 10–15 minuuttia autolla. Joulupukin Pajakylään on terminaalilta 3 km (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "Suomen kolmanneksi suurin kansallispuisto; Ylläksen kaksi kylää ovat sen vastakkaisilla puolilla.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Sisältää kaksi gondolia. Kuudes tuolihissi, etelärinteiden Sunny Express, avataan kaudeksi 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "Suomen pisimmät laskettelurinteet, yli 3 km, korkeusero 464 m.",
    "Maintained tracks, about 28 km of them lit.": "Ylläpidettyjä latuja, joista noin 28 km valaistuja.",
    "Maintained tracks, more than 30 km lit.": "Ylläpidettyjä latuja, joista yli 30 km valaistuja.",
    "Pallas-Yllästunturi National Park": "Pallas-Yllästunturin kansallispuisto",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Tieetäisyys Ivalon lentoasemalta Inarin kylään, noin 40 minuuttia autolla.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Tieetäisyys Ivalon lentoasemalta Saariselän kylään, noin puoli tuntia autolla.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Tieetäisyys Kittilän lentoasemalta Levin kylään, noin 20 minuuttia autolla.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Tieetäisyys Kittilän lentoasemalta Äkäslompoloon, noin 45 minuuttia autolla.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä sijaitsee sen pohjoisreunalla; puisto on Suomen suurimpia.",
    "Total length of groomed downhill slopes.": "Hoidettujen laskettelurinteiden yhteispituus.",
    "Urho Kekkonen National Park": "Urho Kekkosen kansallispuisto"
  },
  'de': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "Etwa 10 km nördlich des Stadtzentrums, 10 bis 15 Minuten Fahrzeit. Das Santa Claus Village liegt 3 km vom Terminal entfernt (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "Finnlands drittgrößter Nationalpark; die beiden Ylläs-Dörfer liegen auf gegenüberliegenden Seiten des Parks.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Darunter zwei Gondelbahnen. Ein sechster Sessellift, Sunny Express an den Südhängen, wird zur Saison 2026-2027 eröffnet.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "Finnlands längste Abfahrten, über 3 km, 464 m Höhenunterschied.",
    "Maintained tracks, about 28 km of them lit.": "Gepflegte Loipen, davon etwa 28 km beleuchtet.",
    "Maintained tracks, more than 30 km lit.": "Gepflegte Loipen, davon mehr als 30 km beleuchtet.",
    "Pallas-Yllästunturi National Park": "Nationalpark Pallas-Yllästunturi",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Straßenentfernung vom Flughafen Ivalo zum Dorf Inari, rund 40 Minuten mit dem Auto.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Straßenentfernung vom Flughafen Ivalo zum Dorf Saariselkä, etwa eine halbe Stunde mit dem Auto.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Straßenentfernung vom Flughafen Kittilä zum Dorf Levi, etwa 20 Minuten mit dem Auto.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Straßenentfernung vom Flughafen Kittilä nach Äkäslompolo, etwa 45 Minuten mit dem Auto.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä liegt an seinem Nordrand; der Park gehört zu den größten Finnlands.",
    "Total length of groomed downhill slopes.": "Gesamtlänge der präparierten Abfahrtspisten.",
    "Urho Kekkonen National Park": "Nationalpark Urho Kekkonen"
  },
  'sv': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "Cirka 10 km norr om stadskärnan, 10 till 15 minuters körtid. Santa Claus Village ligger 3 km från terminalen (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "Finlands tredje största nationalpark; de två Ylläsbyarna ligger på var sin sida av parken.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Inklusive två gondolbanor. En sjätte stollift, Sunny Express i de södra backarna, öppnar till säsongen 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "Finlands längsta nedfarter, över 3 km, 464 m fallhöjd.",
    "Maintained tracks, about 28 km of them lit.": "Underhållna skidspår, varav cirka 28 km är belysta.",
    "Maintained tracks, more than 30 km lit.": "Underhållna skidspår, mer än 30 km belysta.",
    "Pallas-Yllästunturi National Park": "Pallas-Yllästunturi nationalpark",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Vägavstånd från Ivalo flygplats till byn Inari, ungefär 40 minuter med bil.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Vägavstånd från Ivalo flygplats till byn Saariselkä, cirka en halvtimme med bil.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Vägavstånd från Kittilä flygplats till byn Levi, cirka 20 minuter med bil.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Vägavstånd från Kittilä flygplats till Äkäslompolo, cirka 45 minuter med bil.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä ligger vid dess norra kant; parken är en av de största i Finland.",
    "Total length of groomed downhill slopes.": "Sammanlagd längd på preparerade pister.",
    "Urho Kekkonen National Park": "Urho Kekkonens nationalpark"
  },
  'nl': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "Ongeveer 10 km ten noorden van het stadscentrum, 10 tot 15 minuten over de weg. Santa Claus Village ligt 3 km van de terminal (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "Het op twee na grootste nationale park van Finland; de twee Ylläs-dorpen liggen aan weerszijden van het park.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Inclusief twee gondelbanen. Een zesde stoeltjeslift, Sunny Express op de zuidhellingen, opent voor het seizoen 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "De langste afdalingen van Finland, meer dan 3 km, 464 m hoogteverschil.",
    "Maintained tracks, about 28 km of them lit.": "Onderhouden loipes, waarvan ongeveer 28 km verlicht.",
    "Maintained tracks, more than 30 km lit.": "Onderhouden loipes, meer dan 30 km verlicht.",
    "Pallas-Yllästunturi National Park": "Nationaal Park Pallas-Yllästunturi",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Afstand over de weg van luchthaven Ivalo naar het dorp Inari, ongeveer 40 minuten met de auto.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Afstand over de weg van luchthaven Ivalo naar het dorp Saariselkä, ongeveer een halfuur met de auto.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Afstand over de weg van luchthaven Kittilä naar het dorp Levi, ongeveer 20 minuten met de auto.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Afstand over de weg van luchthaven Kittilä naar Äkäslompolo, ongeveer 45 minuten met de auto.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä ligt aan de noordrand ervan; het park is een van de grootste van Finland.",
    "Total length of groomed downhill slopes.": "Totale lengte van de geprepareerde pistes.",
    "Urho Kekkonen National Park": "Nationaal Park Urho Kekkonen"
  },
  'fr': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "À environ 10 km au nord du centre-ville, 10 à 15 minutes par la route. Santa Claus Village se trouve à 3 km du terminal (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "Le troisième plus grand parc national de Finlande ; les deux villages d'Ylläs se trouvent de part et d'autre du parc.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Comprend deux télécabines. Un sixième télésiège, Sunny Express sur les versants sud, ouvre pour la saison 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "Les plus longues pistes de descente de Finlande, plus de 3 km, 464 m de dénivelé.",
    "Maintained tracks, about 28 km of them lit.": "Pistes de ski de fond entretenues, dont environ 28 km éclairés.",
    "Maintained tracks, more than 30 km lit.": "Pistes de ski de fond entretenues, plus de 30 km éclairés.",
    "Pallas-Yllästunturi National Park": "Parc national de Pallas-Yllästunturi",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Distance par la route de l'aéroport d'Ivalo au village d'Inari, environ 40 minutes en voiture.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Distance par la route de l'aéroport d'Ivalo au village de Saariselkä, environ une demi-heure en voiture.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Distance par la route de l'aéroport de Kittilä au village de Levi, environ 20 minutes en voiture.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Distance par la route de l'aéroport de Kittilä à Äkäslompolo, environ 45 minutes en voiture.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä se trouve à sa limite nord ; le parc est l'un des plus grands de Finlande.",
    "Total length of groomed downhill slopes.": "Longueur totale des pistes de ski alpin damées.",
    "Urho Kekkonen National Park": "Parc national d'Urho Kekkonen"
  },
  'es': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "A unos 10 km al norte del centro de la ciudad, de 10 a 15 minutos por carretera. Santa Claus Village está a 3 km de la terminal (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "El tercer parque nacional más grande de Finlandia; los dos pueblos de Ylläs están en lados opuestos del parque.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Incluye dos telecabinas. Un sexto telesilla, Sunny Express en las laderas sur, abre para la temporada 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "Las pistas de esquí alpino más largas de Finlandia, más de 3 km, 464 m de desnivel.",
    "Maintained tracks, about 28 km of them lit.": "Pistas acondicionadas, unos 28 km de ellas iluminados.",
    "Maintained tracks, more than 30 km lit.": "Pistas acondicionadas, más de 30 km iluminados.",
    "Pallas-Yllästunturi National Park": "Parque Nacional Pallas-Yllästunturi",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Distancia por carretera del aeropuerto de Ivalo al pueblo de Inari, unos 40 minutos en coche.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Distancia por carretera del aeropuerto de Ivalo al pueblo de Saariselkä, aproximadamente media hora en coche.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Distancia por carretera del aeropuerto de Kittilä al pueblo de Levi, unos 20 minutos en coche.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Distancia por carretera del aeropuerto de Kittilä a Äkäslompolo, unos 45 minutos en coche.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä se encuentra en su límite norte; el parque es uno de los más grandes de Finlandia.",
    "Total length of groomed downhill slopes.": "Longitud total de las pistas de esquí alpino preparadas.",
    "Urho Kekkonen National Park": "Parque Nacional Urho Kekkonen"
  },
  'pt-BR': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "Cerca de 10 km ao norte do centro da cidade, de 10 a 15 minutos por estrada. Santa Claus Village fica a 3 km do terminal (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "O terceiro maior parque nacional da Finlândia; os dois vilarejos de Ylläs ficam em lados opostos dele.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Inclui duas gôndolas. Uma sexta telecadeira, a Sunny Express nas encostas sul, abre para a temporada 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "As pistas de esqui alpino mais longas da Finlândia, mais de 3 km, 464 m de desnível.",
    "Maintained tracks, about 28 km of them lit.": "Pistas preparadas, cerca de 28 km delas iluminados.",
    "Maintained tracks, more than 30 km lit.": "Pistas preparadas, mais de 30 km iluminados.",
    "Pallas-Yllästunturi National Park": "Parque Nacional Pallas-Yllästunturi",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Distância por estrada do aeroporto de Ivalo até o vilarejo de Inari, aproximadamente 40 minutos de carro.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Distância por estrada do aeroporto de Ivalo até o vilarejo de Saariselkä, cerca de meia hora de carro.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Distância por estrada do aeroporto de Kittilä até o vilarejo de Levi, cerca de 20 minutos de carro.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Distância por estrada do aeroporto de Kittilä até Äkäslompolo, cerca de 45 minutos de carro.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä fica em sua borda norte; o parque é um dos maiores da Finlândia.",
    "Total length of groomed downhill slopes.": "Extensão total das pistas de esqui alpino preparadas.",
    "Urho Kekkonen National Park": "Parque Nacional Urho Kekkonen"
  },
  'it': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "Circa 10 km a nord del centro città, da 10 a 15 minuti di strada. Santa Claus Village dista 3 km dal terminal (Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "Il terzo parco nazionale più grande della Finlandia; i due villaggi di Ylläs sorgono su lati opposti del parco.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "Comprende due cabinovie. Una sesta seggiovia, la Sunny Express sui versanti sud, apre per la stagione 2026-2027.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "Le piste da discesa più lunghe della Finlandia, oltre 3 km, 464 m di dislivello.",
    "Maintained tracks, about 28 km of them lit.": "Piste battute, di cui circa 28 km illuminati.",
    "Maintained tracks, more than 30 km lit.": "Piste battute, più di 30 km illuminati.",
    "Pallas-Yllästunturi National Park": "Parco Nazionale Pallas-Yllästunturi",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "Distanza stradale dall'aeroporto di Ivalo al villaggio di Inari, all'incirca 40 minuti in auto.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "Distanza stradale dall'aeroporto di Ivalo al villaggio di Saariselkä, circa mezz'ora in auto.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "Distanza stradale dall'aeroporto di Kittilä al villaggio di Levi, circa 20 minuti in auto.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "Distanza stradale dall'aeroporto di Kittilä ad Äkäslompolo, circa 45 minuti in auto.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "Saariselkä si trova sul suo margine settentrionale; il parco è uno dei più grandi della Finlandia.",
    "Total length of groomed downhill slopes.": "Lunghezza totale delle piste da discesa battute.",
    "Urho Kekkonen National Park": "Parco Nazionale Urho Kekkonen"
  },
  'ja': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "中心部から北へ約10 km、道路で10～15分。Santa Claus Villageはターミナルから3 km（Finavia）。",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "フィンランドで3番目に大きい国立公園。ユッラスの二つの村は公園を挟んで反対側にあります。",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "ゴンドラ2基を含みます。6基目のチェアリフト、南斜面のSunny Expressは2026-2027シーズンに開業します。",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "フィンランド最長の滑走コース。3 kmを超え、標高差は464 m。",
    "Maintained tracks, about 28 km of them lit.": "整備されたコース。うち約28 kmが照明付き。",
    "Maintained tracks, more than 30 km lit.": "整備されたコース。30 km以上が照明付き。",
    "Pallas-Yllästunturi National Park": "パッラス・ユッラストゥントゥリ国立公園",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "イヴァロ空港からイナリ村までの道路距離。車でおよそ40分。",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "イヴァロ空港からサーリセルカ村までの道路距離。車で約30分。",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "キッティラ空港からレヴィ村までの道路距離。車で約20分。",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "キッティラ空港からアカスロンポロまでの道路距離。車で約45分。",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "サーリセルカは公園の北の縁に位置します。フィンランド有数の広さの国立公園です。",
    "Total length of groomed downhill slopes.": "整備された滑降斜面の総延長。",
    "Urho Kekkonen National Park": "ウルホ・ケッコネン国立公園"
  },
  'ko': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "시내 중심에서 북쪽으로 약 10km, 도로로 10~15분. Santa Claus Village는 터미널에서 3km(Finavia).",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "핀란드에서 3번째로 큰 국립공원으로, 윌래스의 두 마을이 공원을 사이에 두고 양쪽에 자리합니다.",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "곤돌라 2기를 포함합니다. 6번째 체어리프트인 남쪽 사면의 Sunny Express는 2026-2027 시즌에 운행을 시작합니다.",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "핀란드에서 가장 긴 활강 코스로, 3km가 넘고 표고차는 464m입니다.",
    "Maintained tracks, about 28 km of them lit.": "관리되는 코스이며, 그중 약 28km에 조명이 들어옵니다.",
    "Maintained tracks, more than 30 km lit.": "관리되는 코스이며, 30km 넘게 조명이 들어옵니다.",
    "Pallas-Yllästunturi National Park": "팔라스-윌래스툰투리 국립공원",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "이발로 공항에서 이나리 마을까지의 도로 거리. 차로 대략 40분.",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "이발로 공항에서 사리셀캐 마을까지의 도로 거리. 차로 약 30분.",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "키틸래 공항에서 레비 마을까지의 도로 거리. 차로 약 20분.",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "키틸래 공항에서 애캐슬롬폴로까지의 도로 거리. 차로 약 45분.",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "사리셀캐는 공원의 북쪽 끝자락에 자리하며, 이 공원은 핀란드에서 손꼽히게 넓습니다.",
    "Total length of groomed downhill slopes.": "정설된 활강 슬로프의 총길이.",
    "Urho Kekkonen National Park": "우르호 케코넨 국립공원"
  },
  'zh-CN': {
    "About 10 km north of the city centre, 10 to 15 minutes by road. Santa Claus Village is 3 km from the terminal (Finavia).": "位于市中心以北约 10 公里，车行 10 到 15 分钟。圣诞老人村（Santa Claus Village）距航站楼 3 公里（Finavia）。",
    "Finland's third-largest national park; the two Ylläs villages sit on opposite sides of it.": "芬兰第三大国家公园；于莱斯（Ylläs）的两个村庄分处公园两侧。",
    "Includes two gondolas. A sixth chairlift, Sunny Express on the south slopes, opens for the 2026-2027 season.": "包含两条吊厢索道。第六条吊椅索道 Sunny Express 位于南坡，将于 2026-2027 赛季启用。",
    "Longest downhill runs in Finland, over 3 km, 464 m vertical drop.": "芬兰最长的滑降线路，超过 3 公里，垂直落差 464 米。",
    "Maintained tracks, about 28 km of them lit.": "经维护的雪道，其中约 28 公里配有照明。",
    "Maintained tracks, more than 30 km lit.": "经维护的雪道，30 多公里配有照明。",
    "Pallas-Yllästunturi National Park": "帕拉斯-于莱斯通图里国家公园",
    "Road distance Ivalo airport to Inari village, roughly 40 minutes by car.": "伊瓦洛（Ivalo）机场至伊纳里（Inari）村的公路距离，驾车大约 40 分钟。",
    "Road distance Ivalo airport to Saariselkä village, about half an hour by car.": "伊瓦洛（Ivalo）机场至萨利色尔卡（Saariselkä）村的公路距离，驾车约半小时。",
    "Road distance Kittilä airport to Levi village, about 20 minutes by car.": "基蒂莱（Kittilä）机场至列维（Levi）村的公路距离，驾车约 20 分钟。",
    "Road distance Kittilä airport to Äkäslompolo, about 45 minutes by car.": "基蒂莱（Kittilä）机场至阿卡斯隆波洛（Äkäslompolo）的公路距离，驾车约 45 分钟。",
    "Saariselkä sits on its northern edge; the park is one of the largest in Finland.": "萨利色尔卡（Saariselkä）位于公园北缘；该公园是芬兰最大的国家公园之一。",
    "Total length of groomed downhill slopes.": "压雪滑降雪道的总长度。",
    "Urho Kekkonen National Park": "乌尔霍·凯科宁国家公园"
  },
};

/**
 * Kääntää faktahuomautuksen tai kansallispuiston nimen. Tuntematon merkkijono
 * ja englanti palaavat sellaisenaan, joten uusi huomautus näkyy englanniksi
 * eikä tyhjänä kunnes käännös lisätään.
 */
export function factText(value: string | undefined, lang: FactLocale): string | undefined {
  if (!value) return value;
  return TABLES[lang]?.[value] ?? value;
}
