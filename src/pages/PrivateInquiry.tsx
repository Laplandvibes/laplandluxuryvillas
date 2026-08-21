import { useMemo, useRef, useState } from 'react'
import { Mail, Lock, ShieldCheck, Send, Check, Loader2, AlertCircle } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import { trackPrivateInquiry } from '../lib/analytics'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'fallback'

export default function PrivateInquiry() {
  const lang = useLang()
  const c = COPY[lang]
  const seo = getPageSeo('private-inquiry', lang)
  const HEADCOUNT = c.inquiryPage.options.headcount
  const INTENT = c.inquiryPage.options.intent
  const BUDGET = c.inquiryPage.options.budget

  const [form, setForm] = useState({
    headcount: HEADCOUNT[0],
    intent: INTENT[0],
    budget: BUDGET[2],
    dates: '',
    message: '',
    name: '',
    email: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // [LV-FUNNEL] Koko sivun lomake: ei view-eventtiä (pageview kattaa),
  // start = 1. kenttäfokus. Lomakkeessa ei ole validointia joka voisi
  // estää lähetyksen, joten blocked-eventtiä ei ole.
  const funnelData = { lang }
  const startTracked = useRef(false)
  const trackStart = () => {
    if (startTracked.current) return
    startTracked.current = true
    track('inquiry_start', funnelData)
  }

  const mailto = useMemo(() => {
    const subject = `Private villa inquiry: ${form.intent}`
    const body = [
      'Private inquiry submitted via laplandluxuryvillas.com',
      '',
      `Headcount: ${form.headcount}`,
      `Trip intent: ${form.intent}`,
      `Indicative budget per night: ${form.budget}`,
      `Dates: ${form.dates || '(open / flexible)'}`,
      '',
      'Notes:',
      form.message || '(none)',
      '',
      '---',
      `Reply to: ${form.email || '(not provided)'}`,
      `Sender name: ${form.name || '(anonymous)'}`,
    ].join('\n')
    return `mailto:private@laplandvibes.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [form])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending' || status === 'sent') return
    setStatus('sending')
    setErrorMsg('')
    trackPrivateInquiry(form.intent)
    track('inquiry_submit', funnelData)

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setStatus('sent')
        track('inquiry_success', funnelData)
        return
      }
      setStatus('error')
      setErrorMsg(data?.error || `Server error ${res.status}.`)
      track('inquiry_error', funnelData)
    } catch {
      setStatus('fallback')
      track('inquiry_error', funnelData)
      window.location.href = mailto
    }
  }

  const trustIcons = [Lock, Mail, ShieldCheck]

  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/private-inquiry"
        keywords={['private villa inquiry lapland', 'lapland luxury villa enquiry', 'anonymous villa enquiry lapland']}
      />

      <Hero
        compact
        eyebrow={c.hero.inquiry.eyebrow}
        title={c.hero.inquiry.title}
        lede={c.hero.inquiry.lede}
        imageUrl="/images/hero-inquiry.webp"
        imageAlt="An open leather travel journal on a dark walnut desk with a vintage brass lamp"
      />

      {/* TRUST STRIP */}
      <section className="bg-[color:var(--color-onyx)] py-12 md:py-14 border-b border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-5xl px-5 sm:px-7 grid sm:grid-cols-3 gap-8">
          {c.inquiryPage.trustStrip.map((item, i) => {
            const Icon = trustIcons[i]
            return (
              <div key={item.title} className="text-center sm:text-left">
                <Icon size={26} strokeWidth={1.4} className="mx-auto sm:mx-0 text-[color:var(--color-brass)] mb-3" />
                <div className="font-heading text-lg text-[color:var(--color-snow)] mb-1.5">{item.title}</div>
                <p className="text-sm text-[color:var(--color-bone)]/70 font-body leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-7">
          {status === 'sent' ? (
            <div className="text-center">
              <Check size={48} strokeWidth={1.5} className="mx-auto text-[color:var(--color-brass)] mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] mb-4">
                {c.inquiryPage.successH2}
              </h2>
              <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-8 max-w-xl mx-auto">
                {c.inquiryPage.successBody}{' '}
                <a
                  href="mailto:private@laplandvibes.com"
                  className="text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] underline underline-offset-4"
                >
                  private@laplandvibes.com
                </a>
                {c.inquiryPage.successFollowUp}
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle')
                  setForm({ ...form, message: '', dates: '' })
                }}
                className="text-[12px] tracking-[0.22em] uppercase font-body text-[color:var(--color-bone)]/65 hover:text-[color:var(--color-brass)]"
              >
                {c.cta.sendAnother}
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10 max-w-2xl">
                <span className="eyebrow">{c.inquiryPage.eyebrow}</span>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1] mb-4">
                  {c.inquiryPage.h2}
                </h2>
                <p className="text-[color:var(--color-bone)]/75 font-body leading-relaxed">{c.inquiryPage.intro}</p>
              </div>

              <form onSubmit={onSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={c.inquiryPage.fields.headcount}>
                    <select
                      value={form.headcount}
                      onFocus={trackStart}
                      onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                      className="form-select"
                    >
                      {HEADCOUNT.map((h) => (
                        <option key={h}>{h}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label={c.inquiryPage.fields.tripIntent}>
                    <select
                      value={form.intent}
                      onFocus={trackStart}
                      onChange={(e) => setForm({ ...form, intent: e.target.value })}
                      className="form-select"
                    >
                      {INTENT.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={c.inquiryPage.fields.budget}>
                  <select
                    value={form.budget}
                    onFocus={trackStart}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="form-select"
                  >
                    {BUDGET.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>

                <Field label={c.inquiryPage.fields.datesLabel} hint={c.inquiryPage.fields.datesHint}>
                  <input
                    type="text"
                    value={form.dates}
                    onFocus={trackStart}
                    onChange={(e) => setForm({ ...form, dates: e.target.value })}
                    placeholder={c.inquiryPage.fields.datesPlaceholder}
                    className="form-input"
                  />
                </Field>

                <Field label={c.inquiryPage.fields.messageLabel} hint={c.inquiryPage.fields.messageHint}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onFocus={trackStart}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input resize-y"
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-[color:var(--color-mist)]/40">
                  <Field label={c.inquiryPage.fields.nameLabel}>
                    <input
                      type="text"
                      value={form.name}
                      onFocus={trackStart}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={c.inquiryPage.fields.namePlaceholder}
                      className="form-input"
                    />
                  </Field>
                  <Field label={c.inquiryPage.fields.emailLabel} hint={c.inquiryPage.fields.emailHint}>
                    <input
                      type="email"
                      inputMode="email"
                      value={form.email}
                      onFocus={trackStart}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={c.inquiryPage.fields.emailPlaceholder}
                      className="form-input"
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                  {status === 'sending' ? c.inquiryPage.sending : c.inquiryPage.submit}
                </button>

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 border border-red-500/40 bg-red-500/5 text-red-200 text-sm font-body">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">{errorMsg}</p>
                      <p className="text-red-200/75">
                        {c.inquiryPage.errorFallback}{' '}
                        <a href="mailto:private@laplandvibes.com" className="underline underline-offset-2">
                          private@laplandvibes.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                {status === 'fallback' && (
                  <p className="text-sm text-[color:var(--color-bone)]/65 font-body">
                    {c.inquiryPage.fallbackNotice}
                  </p>
                )}

                <p className="text-xs text-[color:var(--color-bone)]/75 font-body">{c.inquiryPage.fineprint}</p>
              </form>
            </>
          )}
        </div>
      </section>

      <style>{`
        .form-input, .form-select {
          width: 100%;
          background: var(--color-charcoal);
          color: var(--color-snow);
          border: 1px solid rgba(201, 164, 107, 0.25);
          padding: 14px 16px;
          font-family: var(--font-body);
          font-size: 16px;
          transition: border-color 200ms ease;
        }
        .form-input:focus, .form-select:focus {
          outline: none;
          border-color: var(--color-brass);
        }
        .form-select {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, var(--color-brass) 50%), linear-gradient(135deg, var(--color-brass) 50%, transparent 50%);
          background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
          padding-right: 36px;
        }
      `}</style>
    </Page>
  )
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-[color:var(--color-bone)]/65 mb-2 block">{label}</span>
      {children}
      {hint && <span className="mt-2 block text-xs text-[color:var(--color-bone)]/50 font-body">{hint}</span>}
    </label>
  )
}
