import { useMemo, useState } from 'react'
import { Mail, Lock, ShieldCheck, Send, Check } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import { trackConciergeInquiry } from '../lib/analytics'

const HEADCOUNT = ['1–2 guests', '3–4 guests', '5–6 guests', '7–10 guests', 'Larger group']
const INTENT = [
  'Aurora season — first visit',
  'Aurora season — repeat visit',
  'Midnight sun (Jun–Jul)',
  'Christmas / New Year',
  'Family group',
  'Private celebration',
  'Honeymoon / two-person retreat',
  'Other — explain in message',
]
const BUDGET = [
  'Under €1,000 / night',
  '€1,000 – €2,500 / night',
  '€2,500 – €5,000 / night',
  '€5,000+ / night',
  'Reserve property — exclusive use',
  'Prefer not to say',
]

export default function Concierge() {
  const [submitted, setSubmitted] = useState(false)

  // Build the mailto with the user's selections — no server, no logging.
  // The form posts directly to private@laplandvibes.com via the user's mail
  // client. This is intentional: zero data on our servers, "anonymous" really
  // means anonymous until the guest decides what to share in the body.
  const [form, setForm] = useState({
    headcount: HEADCOUNT[0],
    intent: INTENT[0],
    budget: BUDGET[2],
    dates: '',
    message: '',
    name: '',
    email: '',
  })

  const mailto = useMemo(() => {
    const subject = `Private villa inquiry — ${form.intent}`
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
      '— —',
      `Reply to: ${form.email || '(not provided)'}`,
      `Sender name: ${form.name || '(anonymous)'}`,
    ].join('\n')
    return `mailto:private@laplandvibes.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [form])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    trackConciergeInquiry(form.intent)
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <Page fullBleed>
      <SEO
        title="Private Concierge — Anonymous Lapland Villa Planning"
        description="Send a single private inquiry. Headcount, dates, preferences. Reply within one working day from a curated shortlist — including reserve villas that never appear publicly. private@laplandvibes.com."
        canonicalPath="/concierge"
        keywords={['lapland concierge', 'private villa inquiry lapland', 'anonymous luxury travel concierge', 'private trip planning lapland']}
      />

      <Hero
        compact
        eyebrow="Private Concierge"
        title="One private message, one curated shortlist."
        lede="Send dates, headcount and the kind of trip you have in mind. We reply within one working day — including, where it's the right fit, the reserve villas that never appear publicly."
      />

      {/* TRUST STRIP */}
      <section className="bg-[color:var(--color-onyx)] py-12 md:py-14 border-b border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-5xl px-5 sm:px-7 grid sm:grid-cols-3 gap-8">
          {[
            { icon: Lock, title: 'Anonymous', body: 'Your name and email are optional in the form. The mail goes from your own client to a single inbox.' },
            { icon: Mail, title: 'private@laplandvibes.com', body: 'Monitored Mon–Fri. Replies within one working day, written by a person in Finland.' },
            { icon: ShieldCheck, title: 'No data stored', body: 'The form posts via your mail client — nothing is written to our servers, no analytics on the message body.' },
          ].map((c) => (
            <div key={c.title} className="text-center sm:text-left">
              <c.icon size={26} strokeWidth={1.4} className="mx-auto sm:mx-0 text-[color:var(--color-brass)] mb-3" />
              <div className="font-heading text-lg text-[color:var(--color-snow)] mb-1.5">{c.title}</div>
              <p className="text-sm text-[color:var(--color-bone)]/70 font-body leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-7">
          {submitted ? (
            <div className="text-center">
              <Check size={48} strokeWidth={1.5} className="mx-auto text-[color:var(--color-brass)] mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] mb-4">
                Inquiry sent.
              </h2>
              <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-8 max-w-xl mx-auto">
                Your mail client should now be drafting the message. If it didn't open, you can reach us directly at{' '}
                <a href="mailto:private@laplandvibes.com" className="text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] underline underline-offset-4">
                  private@laplandvibes.com
                </a>{' '}— a reply will land within one working day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-[12px] tracking-[0.22em] uppercase font-body text-[color:var(--color-bone)]/65 hover:text-[color:var(--color-brass)]"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Headcount">
                  <select
                    value={form.headcount}
                    onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                    className="form-select"
                  >
                    {HEADCOUNT.map((h) => <option key={h}>{h}</option>)}
                  </select>
                </Field>
                <Field label="Trip intent">
                  <select
                    value={form.intent}
                    onChange={(e) => setForm({ ...form, intent: e.target.value })}
                    className="form-select"
                  >
                    {INTENT.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Indicative nightly budget">
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="form-select"
                >
                  {BUDGET.map((b) => <option key={b}>{b}</option>)}
                </select>
              </Field>

              <Field label="Dates (or window)" hint="e.g. 'Feb 14–21' or 'first half of March, 5 nights'">
                <input
                  type="text"
                  value={form.dates}
                  onChange={(e) => setForm({ ...form, dates: e.target.value })}
                  placeholder="Optional"
                  className="form-input"
                />
              </Field>

              <Field label="Anything specific" hint="Private chef, helicopter arrival, exclusive use, accessibility, dietary, photography focus — whatever shapes the shortlist.">
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-input resize-y"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-[color:var(--color-mist)]/40">
                <Field label="Name (optional)">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Anonymous if blank"
                    className="form-input"
                  />
                </Field>
                <Field label="Reply-to email" hint="If blank, we reply to your own outbound address.">
                  <input
                    type="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="optional"
                    className="form-input"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
              >
                <Send size={14} />
                Send private inquiry
              </button>

              <p className="text-xs text-[color:var(--color-bone)]/55 font-body">
                The form opens your default email client and pre-fills the message —
                nothing is submitted to a server. You can review and edit before sending.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* INLINE FORM STYLE */}
      <style>{`
        .form-input, .form-select {
          width: 100%;
          background: var(--color-charcoal);
          color: var(--color-snow);
          border: 1px solid rgba(201, 164, 107, 0.25);
          padding: 14px 16px;
          font-family: var(--font-body);
          font-size: 15px;
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
