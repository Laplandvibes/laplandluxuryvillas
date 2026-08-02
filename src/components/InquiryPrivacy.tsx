import { useLang, type Lang } from '../i18n/useLang'

// ─────────────────────────────────────────────────────────────────────────────
// InquiryPrivacy — what happens to a private inquiry.
//
// Vesa 2026-08-01: "onko tietosuoja ja käyttöehdot translatettu aidosti että
// soveltuu myös asiakkaille ketkä haluavat privaten?"
//
// The translations were genuine — all 12 locales are native prose in the shared
// Legal components. The gap was the other half of the question, and it was
// real: the words for this funnel and `private@laplandvibes.com` appeared ZERO
// times in Privacy, Terms and Cookie policy combined, while
// `functions/api/inquiry.ts` accepts a name, an email address, dates, party
// size, budget band and a free-text message and forwards them to a Supabase
// Edge Function. A site whose whole promise is discretion was not telling
// anyone what happens to the most sensitive thing it collects.
//
// 🔴 THIS IS SITE-SPECIFIC ON PURPOSE, NOT PART OF shared/Legal.
// The enquiry funnel is this site's own feature; the shared components cover
// processing every LV site does. Putting it in shared/ would push a paragraph
// about a form that does not exist onto 26 other sites, and shared/Legal edits
// need a monorepo commit plus a sync into every vendored copy. One site, one
// blast radius.
//
// Keep this in step with `functions/api/inquiry.ts`. If the field list or the
// processor changes, this text is wrong until it is changed too.
// ─────────────────────────────────────────────────────────────────────────────

interface Block {
  heading: string
  /** What we ask for, verbatim from the form's own fields. */
  collected: string
  /** Where it goes and who touches it. */
  route: string
  /** Legal basis + how long. */
  basis: string
  /** How to get it deleted. */
  rights: string
}

const COPY: Record<Lang, Block> = {
  fi: {
    heading: 'Yksityinen tiedustelu',
    collected: 'Kun lähetät lomakkeen sivulla Yksityinen tiedustelu, pyydämme seuraavat tiedot: seurueen koko, matkan luonne, budjettihaarukka, toivotut päivämäärät, vapaa viesti sekä nimi ja sähköpostiosoite. Muuta emme kysy. Emme pyydä puhelinnumeroa, osoitetta, henkilötunnusta emmekä maksutietoja missään vaiheessa.',
    route: 'Lomake lähetetään omalta palvelimeltamme (laplandluxuryvillas.com/api/inquiry) edelleen Supabasen palvelufunktioon, joka toimittaa viestin osoitteeseen private@laplandvibes.com. Rekisterinpitäjä on Lapeso Oy. Henkilötietojen käsittelijöinä toimivat Cloudflare (sivuston ja rajapinnan tarjoaja) ja Supabase (viestinvälitys). Emme myy emmekä luovuta tiedustelun sisältöä kolmansille osapuolille emmekä käytä sitä mainonnan kohdentamiseen. Analytiikkaan välitetään ainoastaan tieto siitä, että tiedustelu lähetettiin ja mikä sen aihekategoria oli, ei koskaan viestin sisältöä, nimeä tai sähköpostiosoitetta.',
    basis: 'Käsittelyn peruste on oikeutettu etu ja sopimuksen valmistelu: et voi saada vastausta tiedusteluun ilman että luemme sen. Säilytämme tiedustelun ja siihen liittyvän kirjeenvaihdon enintään 24 kuukautta viimeisimmästä yhteydenotosta, minkä jälkeen se poistetaan.',
    rights: 'Voit milloin tahansa pyytää nähdä, oikaista tai poistaa tiedustelusi lähettämällä viestin osoitteeseen private@laplandvibes.com. Poistamme sen ilman erillistä perustelua. Sinulla on myös oikeus tehdä valitus tietosuojavaltuutetun toimistolle.',
  },
  en: {
    heading: 'Private enquiry',
    collected: 'When you submit the form on the Private Inquiry page we ask for: party size, the nature of the trip, a budget band, preferred dates, a free-text message, and your name and email address. Nothing else. We never ask for a phone number, a postal address, an identity number or payment details at any point.',
    route: 'The form is sent from our own server (laplandluxuryvillas.com/api/inquiry) on to a Supabase service function, which delivers the message to private@laplandvibes.com. The controller is Lapeso Oy. The processors are Cloudflare (site and API hosting) and Supabase (message delivery). We do not sell or disclose the content of an inquiry to third parties and we do not use it to target advertising. Analytics receives only the fact that an inquiry was sent and which category it was about, never the message, the name or the email address.',
    basis: 'The lawful basis is legitimate interest and pre-contractual steps: you cannot get an answer to an inquiry unless we read it. We keep an inquiry and the correspondence around it for at most 24 months from the last contact, after which it is deleted.',
    rights: 'You can ask to see, correct or delete your inquiry at any time by writing to private@laplandvibes.com. We will delete it without asking why. You also have the right to lodge a complaint with the Finnish Data Protection Ombudsman.',
  },
  de: {
    heading: 'Private Anfrage',
    collected: 'Wenn Sie das Formular auf der Seite Private Anfrage absenden, fragen wir nach: Gruppengröße, Art der Reise, Budgetrahmen, Wunschtermine, einer freien Nachricht sowie Ihrem Namen und Ihrer E-Mail-Adresse. Mehr nicht. Wir fragen zu keinem Zeitpunkt nach Telefonnummer, Anschrift, Ausweisnummer oder Zahlungsdaten.',
    route: 'Das Formular wird von unserem eigenen Server (laplandluxuryvillas.com/api/inquiry) an eine Supabase-Servicefunktion weitergeleitet, die die Nachricht an private@laplandvibes.com zustellt. Verantwortlicher ist Lapeso Oy. Auftragsverarbeiter sind Cloudflare (Hosting von Website und Schnittstelle) und Supabase (Nachrichtenzustellung). Wir verkaufen den Inhalt einer Anfrage nicht, geben ihn nicht an Dritte weiter und nutzen ihn nicht für Werbung. An die Analyse geht nur die Information, dass eine Anfrage gesendet wurde und zu welcher Kategorie sie gehörte, niemals der Inhalt, der Name oder die E-Mail-Adresse.',
    basis: 'Rechtsgrundlage sind das berechtigte Interesse und vorvertragliche Maßnahmen: Sie können keine Antwort erhalten, ohne dass wir die Anfrage lesen. Wir bewahren eine Anfrage und den zugehörigen Schriftwechsel höchstens 24 Monate ab dem letzten Kontakt auf, danach wird sie gelöscht.',
    rights: 'Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Anfrage verlangen, per E-Mail an private@laplandvibes.com. Wir löschen sie ohne Rückfrage. Sie haben außerdem das Recht, sich bei der finnischen Datenschutzbehörde zu beschweren.',
  },
  ja: {
    heading: 'プライベートなお問い合わせ',
    collected: 'プライベート問い合わせページのフォームでは、人数、旅の目的、ご予算帯、希望日程、自由記入のメッセージ、お名前とメールアドレスをお伺いします。それ以外は伺いません。電話番号、住所、身分証番号、支払い情報はいかなる段階でもお尋ねしません。',
    route: '送信内容は当社のサーバー（laplandluxuryvillas.com/api/inquiry）を経由してSupabaseのサービス機能に渡り、private@laplandvibes.com に届きます。管理者はLapeso Oy、処理者はCloudflare（サイトとAPIのホスティング）とSupabase（メッセージ送信）です。お問い合わせの内容を第三者に販売・開示することはなく、広告のターゲティングにも使用しません。解析に渡るのは「問い合わせが送信された事実」と「その分類」のみで、本文・氏名・メールアドレスは一切渡りません。',
    basis: '法的根拠は正当な利益および契約締結前の措置です。内容を読まなければご返信できないためです。お問い合わせと関連するやり取りは最終連絡から最長24か月保管し、その後削除します。',
    rights: 'private@laplandvibes.com へご連絡いただければ、いつでも内容の開示・訂正・削除を請求できます。理由を伺うことなく削除します。フィンランドのデータ保護オンブズマンに苦情を申し立てる権利もあります。',
  },
  es: {
    heading: 'Consulta privada',
    collected: 'Cuando envía el formulario de la página Consulta privada le pedimos: número de personas, tipo de viaje, franja de presupuesto, fechas preferidas, un mensaje libre y su nombre y dirección de correo. Nada más. En ningún momento pedimos teléfono, dirección postal, número de identidad ni datos de pago.',
    route: 'El formulario se envía desde nuestro propio servidor (laplandluxuryvillas.com/api/inquiry) a una función de servicio de Supabase, que entrega el mensaje a private@laplandvibes.com. El responsable es Lapeso Oy. Los encargados son Cloudflare (alojamiento del sitio y de la API) y Supabase (envío del mensaje). No vendemos ni comunicamos el contenido de una consulta a terceros y no lo usamos para segmentar publicidad. A la analítica solo llega el hecho de que se envió una consulta y a qué categoría pertenecía, nunca el mensaje, el nombre ni el correo.',
    basis: 'La base jurídica es el interés legítimo y las medidas precontractuales: no podemos responder a una consulta sin leerla. Conservamos la consulta y la correspondencia asociada un máximo de 24 meses desde el último contacto, tras lo cual se elimina.',
    rights: 'Puede solicitar ver, corregir o eliminar su consulta en cualquier momento escribiendo a private@laplandvibes.com. La eliminaremos sin preguntar por qué. También tiene derecho a presentar una reclamación ante la autoridad finlandesa de protección de datos.',
  },
  'pt-BR': {
    heading: 'Consulta privada',
    collected: 'Ao enviar o formulário da página Consulta privada, pedimos: número de pessoas, natureza da viagem, faixa de orçamento, datas preferidas, uma mensagem livre e seu nome e e-mail. Nada além disso. Em nenhum momento pedimos telefone, endereço, número de identidade ou dados de pagamento.',
    route: 'O formulário é enviado do nosso próprio servidor (laplandluxuryvillas.com/api/inquiry) para uma função de serviço da Supabase, que entrega a mensagem em private@laplandvibes.com. O controlador é a Lapeso Oy. Os operadores são a Cloudflare (hospedagem do site e da API) e a Supabase (entrega da mensagem). Não vendemos nem divulgamos o conteúdo de uma consulta a terceiros e não o usamos para direcionar publicidade. A análise recebe apenas o fato de que uma consulta foi enviada e a qual categoria pertencia, nunca a mensagem, o nome ou o e-mail.',
    basis: 'A base legal é o legítimo interesse e as medidas pré-contratuais: não é possível responder a uma consulta sem lê-la. Guardamos a consulta e a correspondência relacionada por no máximo 24 meses a partir do último contato, após o que é excluída.',
    rights: 'Você pode pedir para ver, corrigir ou excluir sua consulta a qualquer momento escrevendo para private@laplandvibes.com. Excluiremos sem perguntar o motivo. Você também tem o direito de apresentar reclamação à autoridade finlandesa de proteção de dados.',
  },
  'zh-CN': {
    heading: '私人咨询（管家服务）',
    collected: '在「私人咨询」页面提交表单时，我们会询问：出行人数、行程性质、预算区间、期望日期、自由填写的留言，以及您的姓名和电子邮箱。仅此而已。我们在任何环节都不会索取电话号码、通讯地址、身份证件号码或支付信息。',
    route: '表单由我们自己的服务器（laplandluxuryvillas.com/api/inquiry）转发至 Supabase 的服务函数，再投递到 private@laplandvibes.com。数据控制者为 Lapeso Oy，处理者为 Cloudflare（网站与接口托管）和 Supabase（消息投递）。我们不会出售或向第三方披露咨询内容，也不会将其用于广告定向。分析系统仅收到「已发送咨询」这一事实及其分类，绝不包含留言正文、姓名或邮箱。',
    basis: '处理的法律依据是正当利益与订立合同前的必要步骤：我们不读取内容就无法回复。咨询及相关往来信件自最后一次联系起最多保存 24 个月，之后删除。',
    rights: '您随时可以写信至 private@laplandvibes.com，要求查看、更正或删除您的咨询。我们会直接删除，不追问原因。您也有权向芬兰数据保护监察官提出申诉。',
  },
  ko: {
    heading: '비공개 문의',
    collected: '프라이빗 문의 페이지의 양식을 보내실 때 인원수, 여행의 성격, 예산 범위, 희망 날짜, 자유 메시지, 그리고 성함과 이메일 주소를 여쭙습니다. 그 외에는 묻지 않습니다. 어떤 단계에서도 전화번호, 주소, 신분증 번호, 결제 정보는 요구하지 않습니다.',
    route: '양식은 저희 서버(laplandluxuryvillas.com/api/inquiry)를 거쳐 Supabase 서비스 함수로 전달되고, 메시지는 private@laplandvibes.com으로 도착합니다. 관리자는 Lapeso Oy이며, 처리자는 Cloudflare(사이트 및 API 호스팅)와 Supabase(메시지 전달)입니다. 문의 내용을 제3자에게 판매하거나 제공하지 않으며 광고 타기팅에도 사용하지 않습니다. 분석 도구에는 문의가 전송되었다는 사실과 그 분류만 전달되며, 메시지 본문과 성함, 이메일은 절대 전달되지 않습니다.',
    basis: '처리의 법적 근거는 정당한 이익과 계약 체결 전 조치입니다. 내용을 읽지 않고는 답변할 수 없기 때문입니다. 문의와 관련 서신은 마지막 연락으로부터 최대 24개월간 보관한 뒤 삭제합니다.',
    rights: 'private@laplandvibes.com으로 연락하시면 언제든 문의 내용의 열람, 정정, 삭제를 요청하실 수 있습니다. 이유를 묻지 않고 삭제합니다. 핀란드 개인정보보호 옴부즈맨에 이의를 제기할 권리도 있습니다.',
  },
  fr: {
    heading: 'Demande privée',
    collected: 'Lorsque vous envoyez le formulaire de la page Demande privée, nous demandons : le nombre de personnes, la nature du voyage, une fourchette de budget, les dates souhaitées, un message libre, ainsi que votre nom et votre adresse e-mail. Rien d’autre. Nous ne demandons à aucun moment de numéro de téléphone, d’adresse postale, de numéro d’identité ni de données de paiement.',
    route: 'Le formulaire est envoyé depuis notre propre serveur (laplandluxuryvillas.com/api/inquiry) vers une fonction de service Supabase, qui remet le message à private@laplandvibes.com. Le responsable de traitement est Lapeso Oy. Les sous-traitants sont Cloudflare (hébergement du site et de l’API) et Supabase (remise du message). Nous ne vendons ni ne communiquons le contenu d’une demande à des tiers et ne l’utilisons pas pour cibler de la publicité. L’analytique ne reçoit que le fait qu’une demande a été envoyée et sa catégorie, jamais le message, le nom ou l’adresse e-mail.',
    basis: 'La base légale est l’intérêt légitime et les mesures précontractuelles : nous ne pouvons pas répondre à une demande sans la lire. Nous conservons une demande et la correspondance associée pendant 24 mois au maximum à compter du dernier contact, après quoi elle est supprimée.',
    rights: 'Vous pouvez à tout moment demander à consulter, corriger ou supprimer votre demande en écrivant à private@laplandvibes.com. Nous la supprimons sans demander pourquoi. Vous avez également le droit d’introduire une réclamation auprès de l’autorité finlandaise de protection des données.',
  },
  it: {
    heading: 'Richiesta privata',
    collected: 'Quando invia il modulo nella pagina Richiesta privata le chiediamo: numero di persone, natura del viaggio, fascia di budget, date preferite, un messaggio libero e il suo nome con l’indirizzo e-mail. Nient’altro. In nessun momento chiediamo numero di telefono, indirizzo, numero di documento o dati di pagamento.',
    route: 'Il modulo viene inviato dal nostro server (laplandluxuryvillas.com/api/inquiry) a una funzione di servizio Supabase, che consegna il messaggio a private@laplandvibes.com. Il titolare è Lapeso Oy. I responsabili del trattamento sono Cloudflare (hosting del sito e dell’API) e Supabase (consegna del messaggio). Non vendiamo né comunichiamo a terzi il contenuto di una richiesta e non lo usiamo per profilare pubblicità. All’analitica arriva solo il fatto che una richiesta è stata inviata e la sua categoria, mai il messaggio, il nome o l’e-mail.',
    basis: 'La base giuridica è il legittimo interesse e le misure precontrattuali: non possiamo rispondere a una richiesta senza leggerla. Conserviamo la richiesta e la corrispondenza collegata per un massimo di 24 mesi dall’ultimo contatto, dopodiché viene cancellata.',
    rights: 'Può chiedere in qualsiasi momento di vedere, correggere o cancellare la sua richiesta scrivendo a private@laplandvibes.com. La cancelliamo senza chiedere il motivo. Ha inoltre diritto di presentare reclamo all’autorità finlandese per la protezione dei dati.',
  },
  nl: {
    heading: 'Privéaanvraag',
    collected: 'Als u het formulier op de pagina Privéaanvraag verstuurt, vragen wij: het aantal personen, de aard van de reis, een budgetbereik, gewenste data, een vrij bericht en uw naam en e-mailadres. Meer niet. Wij vragen op geen enkel moment om een telefoonnummer, postadres, identiteitsnummer of betaalgegevens.',
    route: 'Het formulier gaat vanaf onze eigen server (laplandluxuryvillas.com/api/inquiry) door naar een Supabase-servicefunctie, die het bericht bezorgt op private@laplandvibes.com. De verwerkingsverantwoordelijke is Lapeso Oy. De verwerkers zijn Cloudflare (hosting van site en API) en Supabase (bezorging van het bericht). Wij verkopen de inhoud van een aanvraag niet, geven die niet door aan derden en gebruiken die niet om advertenties te richten. De analytics ontvangt alleen het feit dát er een aanvraag is verstuurd en tot welke categorie die hoorde, nooit het bericht, de naam of het e-mailadres.',
    basis: 'De rechtsgrond is gerechtvaardigd belang en precontractuele maatregelen: wij kunnen een aanvraag niet beantwoorden zonder die te lezen. Wij bewaren een aanvraag en de bijbehorende correspondentie maximaal 24 maanden na het laatste contact, daarna wordt die verwijderd.',
    rights: 'U kunt op elk moment vragen om inzage, correctie of verwijdering van uw aanvraag via private@laplandvibes.com. Wij verwijderen die zonder naar de reden te vragen. U hebt ook het recht een klacht in te dienen bij de Finse toezichthouder voor gegevensbescherming.',
  },
  sv: {
    heading: 'Privat förfrågan',
    collected: 'När du skickar formuläret på sidan Privat förfrågan frågar vi efter: sällskapets storlek, resans karaktär, budgetspann, önskade datum, ett fritt meddelande samt ditt namn och din e-postadress. Inget annat. Vi frågar aldrig efter telefonnummer, postadress, personnummer eller betaluppgifter.',
    route: 'Formuläret skickas från vår egen server (laplandluxuryvillas.com/api/inquiry) vidare till en Supabase-servicefunktion, som levererar meddelandet till private@laplandvibes.com. Personuppgiftsansvarig är Lapeso Oy. Personuppgiftsbiträden är Cloudflare (drift av webbplats och API) och Supabase (leverans av meddelandet). Vi säljer inte och lämnar inte ut innehållet i en förfrågan till tredje part, och vi använder det inte för att rikta annonser. Analysen får bara veta att en förfrågan skickats och vilken kategori den gällde, aldrig meddelandet, namnet eller e-postadressen.',
    basis: 'Den rättsliga grunden är berättigat intresse och åtgärder inför avtal: vi kan inte svara på en förfrågan utan att läsa den. Vi sparar en förfrågan och tillhörande korrespondens i högst 24 månader från senaste kontakt, därefter raderas den.',
    rights: 'Du kan när som helst begära att få se, rätta eller radera din förfrågan genom att skriva till private@laplandvibes.com. Vi raderar den utan att fråga varför. Du har också rätt att lämna klagomål till den finska dataombudsmannen.',
  },
}

export default function InquiryPrivacy() {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en

  return (
    <section className="bg-[color:var(--color-deep-night)] pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-7">
        <div className="card-onyx p-7 sm:p-9">
          <h2 className="font-heading text-2xl sm:text-3xl text-[color:var(--color-snow)] leading-tight mb-5">
            {c.heading}
          </h2>
          <div className="space-y-4 text-[color:var(--color-bone)]/85 font-body text-sm sm:text-base leading-relaxed">
            <p>{c.collected}</p>
            <p>{c.route}</p>
            <p>{c.basis}</p>
            <p>{c.rights}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
