import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { trackNewsletterSignup } from '../lib/analytics'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import FounderByline from '../shared/FounderByline';

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error'

interface ConsentCopy {
  /** The consent statement itself — this exact string is stored with the record. */
  label: string
  /** Link label for the privacy policy shown next to the statement. */
  privacy: string
}

/**
 * Marketing-consent wording, kept local to this component on purpose: the
 * shared `locales/copy.*.ts` files are network-wide and are not touched here.
 * Read with the same `useLang()` mechanism as `COPY`.
 */
const CONSENT_COPY: Record<Lang, ConsentCopy> = {
  en: {
    label: 'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    label: 'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    label: 'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    label: '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    label: 'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    label: 'Aceito receber a newsletter da LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    label: '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    label: '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    label: "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    label: "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    label: 'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    label: 'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
}

export default function NewsletterSection() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang].newsletter
  const ct = COPY[lang].cta
  const cc = CONSENT_COPY[lang]

  const [email, setEmail] = useState('')
  const [consented, setConsented] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading' || status === 'success' || status === 'already') return
    if (!consented) return
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus('error')
      setMessage(c.invalidEmail)
      return
    }
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'laplandluxuryvillas-inline',
          consent: true,
          ageConfirmed: true,
          consentText: cc.label,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setMessage(data?.error || c.genericError)
        return
      }
      if (data?.alreadySubscribed) {
        setStatus('already')
        setMessage(c.already)
      } else {
        setStatus('success')
        setMessage(c.welcome)
      }
      trackNewsletterSignup('laplandluxuryvillas-inline')
    } catch {
      setStatus('error')
      setMessage(c.networkError)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-[color:var(--color-vibe-pink)] to-[#BE2470] py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(255,255,255,0.10) 0%, transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-7 text-center">
        <span className="eyebrow text-white/85">{c.eyebrow}</span>
        <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
          {c.h2}
        </h2>
        <p className="mt-5 text-white/85 text-base sm:text-lg font-body leading-relaxed max-w-xl mx-auto">
          {c.lede}
        </p>

        <><FounderByline tone="pink" />
        <form onSubmit={onSubmit} className="mt-10 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.emailPlaceholder}
              disabled={status === 'loading' || status === 'success' || status === 'already'}
              className="flex-1 bg-white/95 text-[color:var(--color-deep-night)] placeholder-[color:var(--color-charcoal)]/50 px-5 py-4 text-base font-body focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success' || status === 'already'}
              className="inline-flex items-center justify-center gap-2 bg-[color:var(--color-deep-night)] text-white px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-black transition-colors disabled:opacity-60"
            >
              {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
              {(status === 'success' || status === 'already') && <CheckCircle size={16} />}
              {status === 'idle' || status === 'error' ? <Send size={16} /> : null}
              {status === 'success' || status === 'already' ? ct.subscribed : ct.subscribe}
            </button>
          </div>

          <label className="mt-4 flex items-start gap-3 text-left font-body text-xs sm:text-[13px] leading-relaxed text-white/85">
            <input
              type="checkbox"
              checked={consented}
              onChange={(e) => setConsented(e.target.checked)}
              required
              disabled={status === 'loading' || status === 'success' || status === 'already'}
              className="mt-[3px] h-4 w-4 shrink-0 accent-[color:var(--color-deep-night)] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span>
              {cc.label}{' '}
              <Link
                to={to('/privacy')}
                className="underline underline-offset-2 hover:text-white"
              >
                {cc.privacy}
              </Link>
            </span>
          </label>
        </form></>

        {message && (
          <p
            className={`mt-5 text-sm font-body ${
              status === 'error' ? 'text-white' : 'text-white/85'
            }`}
            role={status === 'error' ? 'alert' : 'status'}
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-xs text-white/65 font-body">{c.footnote}</p>
      </div>
    </section>
  )
}
