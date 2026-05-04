import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Page from '../components/Page'

export default function NotFound() {
  return (
    <Page>
      <SEO
        title="Not found — LaplandLuxuryVillas"
        description="The page you're looking for doesn't exist."
        canonicalPath="/404"
      />
      <section className="bg-[color:var(--color-deep-night)] py-32 md:py-40">
        <div className="mx-auto max-w-2xl px-5 sm:px-7 text-center">
          <span className="eyebrow">Error</span>
          <h1 className="mt-4 font-heading text-7xl md:text-8xl text-[color:var(--color-brass)] mb-6">404</h1>
          <p className="text-[color:var(--color-bone)]/80 font-body text-lg leading-relaxed mb-10">
            That page isn't part of the collection. The villas, suites and destinations are listed below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/villas"
              className="inline-flex items-center justify-center border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
            >
              The Collection
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
