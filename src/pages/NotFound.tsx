import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Page from '../components/Page'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  return (
    <Page>
      <SEO
        title="Not found · LaplandLuxuryVillas"
        description="The page you're looking for doesn't exist."
        canonicalPath="/404"
      />
      <section className="bg-[color:var(--color-deep-night)] py-32 md:py-40">
        <div className="mx-auto max-w-2xl px-5 sm:px-7 text-center">
          <span className="eyebrow">{c.notFound.eyebrow}</span>
          <h1 className="mt-4 font-heading text-7xl md:text-8xl text-[color:var(--color-brass)] mb-6">404</h1>
          <p className="text-[color:var(--color-bone)]/80 font-body text-lg leading-relaxed mb-10">
            {c.notFound.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={to('/')}
              className="inline-flex items-center justify-center bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              {c.notFound.home}
            </Link>
            <Link
              to={to('/villas')}
              className="inline-flex items-center justify-center border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
            >
              {c.notFound.collection}
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
