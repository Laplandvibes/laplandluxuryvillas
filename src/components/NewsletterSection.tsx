import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { trackNewsletterSignup } from '../lib/analytics'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error'

export default function NewsletterSection() {
  const lang = useLang()
  const c = COPY[lang].newsletter
  const ct = COPY[lang].cta

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading' || status === 'success' || status === 'already') return
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
        body: JSON.stringify({ email, source: 'laplandluxuryvillas-inline' }),
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

        <form onSubmit={onSubmit} className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto">
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
        </form>

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
