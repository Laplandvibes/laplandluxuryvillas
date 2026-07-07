import { Link } from 'react-router-dom'
import { Mail, MapPin, Building2 } from 'lucide-react'
import SEO from '../components/SEO'
import Page from '../components/Page'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function Contact() {
  const lang = useLang()
  const c = COPY[lang].contactPage
  const lp = useLocalePath()
  return (
    <Page>
      <SEO
        title={c.seoTitle}
        description={c.seoDescription}
        canonicalPath="/contact"
      />

      <section className="bg-[color:var(--color-deep-night)] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-7">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1 className="mt-5 font-heading text-4xl sm:text-5xl md:text-6xl text-[color:var(--color-snow)] leading-[1.05] mb-12">
            {c.h1}
          </h1>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <ContactCard
              icon={Mail}
              eyebrow={c.cards.private.eyebrow}
              title="private@laplandvibes.com"
              body={c.cards.private.body}
              href="mailto:private@laplandvibes.com"
              cta={c.privateCta}
              ctaTo="/concierge"
            />
            <ContactCard
              icon={Mail}
              eyebrow={c.cards.press.eyebrow}
              title="press@laplandvibes.com"
              body={c.cards.press.body}
              href="mailto:press@laplandvibes.com"
            />
            <ContactCard
              icon={Mail}
              eyebrow={c.cards.deals.eyebrow}
              title="sales@laplandvibes.com"
              body={c.cards.deals.body}
              href="mailto:sales@laplandvibes.com"
            />
            <ContactCard
              icon={Mail}
              eyebrow={c.cards.general.eyebrow}
              title="info@laplandvibes.com"
              body={c.cards.general.body}
              href="mailto:info@laplandvibes.com"
            />
          </div>

          <div className="card-onyx p-7 sm:p-10">
            <div className="flex items-start gap-4 mb-5">
              <Building2 size={22} strokeWidth={1.5} className="text-[color:var(--color-brass)] shrink-0 mt-1" />
              <div>
                <div className="eyebrow text-[color:var(--color-bone)]/55 mb-1">{c.operatorEyebrow}</div>
                <div className="font-heading text-2xl text-[color:var(--color-snow)]">Lapeso Oy</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-[color:var(--color-bone)]/75 font-body text-sm leading-relaxed">
              <MapPin size={18} className="text-[color:var(--color-brass)] shrink-0 mt-1" />
              <div>
                <p>{c.location}</p>
                <p className="mt-2">
                  {c.aboutPre}<Link to={lp('/about')} className="text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] underline underline-offset-4">{c.aboutLabel}</Link>{c.aboutPost}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

interface CardProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  eyebrow: string
  title: string
  body: string
  href: string
  cta?: string
  ctaTo?: string
}

function ContactCard({ icon: Icon, eyebrow, title, body, href, cta, ctaTo }: CardProps) {
  const lp = useLocalePath()
  return (
    <div className="card-onyx p-7">
      <Icon size={22} strokeWidth={1.5} className="text-[color:var(--color-brass)] mb-4" />
      <span className="eyebrow text-[color:var(--color-bone)]/55">{eyebrow}</span>
      <a
        href={href}
        className="block mt-2 font-heading text-xl text-[color:var(--color-snow)] hover:text-[color:var(--color-brass)] transition-colors"
      >
        {title}
      </a>
      <p className="mt-3 text-sm text-[color:var(--color-bone)]/70 font-body leading-relaxed">{body}</p>
      {cta && ctaTo && (
        <Link
          to={lp(ctaTo)}
          className="mt-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase font-body text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)]"
        >
          {cta} →
        </Link>
      )}
    </div>
  )
}
