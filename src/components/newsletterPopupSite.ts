import type { NewsletterPopupCopy, NewsletterPopupTheme } from '../shared/NewsletterPopup';

/**
 * laplandluxuryvillas.com: uutiskirjepopupin oma väri ja teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Kuva, lomake, nappi ja #LAPLAND-merkki pysyvät verkoston yhteisinä.
 * Väri = tämän sivuston oma pääväri, mitattu elävältä etusivulta 23.9.2026
 * (messinki #C9A46B onyksinmustalla). Kontrasti tarkistettu: napin teksti ≥ 4,5:1,
 * kuvan rengas ≥ 3:1 korttia vasten.
 * Teksti = sivun oma aihe lukijan näkökulmasta, 12 kielellä natiivina.
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku):
 * uutiskirje lähtee vain kun on kerrottavaa. Otsikko tulee jaetusta komponentista.
 */
export const POPUP_THEME: NewsletterPopupTheme = {
  surface: '#0A0F1C',
  accent: '#C9A46B',
  cta: '#C9A46B',
  onCta: '#0A0F1C',
};

export const POPUP_COPY: NewsletterPopupCopy = {
  en: {
    description: 'Founder of LaplandVibes. Glass-roofed villas, private saunas and fell views. I tell you which villas truly live up to their price and what to book early.',
  },
  fi: {
    description: 'LaplandVibesin perustaja. Lasikattoiset huvilat, yksityiset saunat ja tunturimaisemat. Kerron, mitkä huvilat oikeasti lunastavat hintansa ja mitä kannattaa varata ajoissa.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Villen mit Glasdach, private Saunen und Fjällblick. Ich verrate Ihnen, welche Villen ihren Preis wirklich wert sind und was Sie frühzeitig buchen sollten.',
  },
  ja: {
    description: 'LaplandVibes創業者。ガラス天井のヴィラ、専用サウナ、フェルの眺め。その価格に本当に見合うヴィラはどれか、何を早めに予約しておくべきかをお話しします。',
  },
  es: {
    description: 'Fundador de LaplandVibes. Villas con techo de cristal, saunas privadas y vistas a la montaña. Le digo qué villas están de verdad a la altura de su precio y qué conviene reservar con anticipación.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Vilas com teto de vidro, saunas privativas e vista para os fells. Mostro quais vilas realmente fazem jus ao preço e o que convém reservar com antecedência.',
  },
  'zh-CN': {
    description: 'LaplandVibes创始人。玻璃屋顶别墅、私人桑拿和山丘风光。我会告诉你哪些别墅真正物有所值，以及该趁早预订什么。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 유리 지붕 빌라와 전용 사우나, 그리고 펠 전망. 정말 제값을 하는 빌라는 어디인지, 무엇을 미리 예약해 두면 좋은지 짚어드립니다.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. Villas à toit de verre, saunas privés et vues sur les fjälls. Je vous dis quelles villas justifient vraiment leur prix et ce qu\'il vaut mieux réserver à l\'avance.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Ville con tetto in vetro, saune private e vista sui fjäll. Le dico quali ville valgono davvero quello che costano e cosa conviene prenotare con anticipo.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Villa\'s met een glazen dak, privésauna\'s en uitzicht op de fjälls. Ik laat u zien welke villa\'s hun prijs echt waarmaken en wat u beter vroeg boekt.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Villor med glastak, privata bastur och utsikt över fjällen. Jag berättar vilka villor som verkligen lever upp till priset och vad det är klokt att boka i god tid.',
  },
};
