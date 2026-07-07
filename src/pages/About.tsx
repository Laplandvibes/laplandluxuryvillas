import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

type ParaItem =
  | string
  | { type: 'link'; pre: string; label: string; href: string; post: string }

export default function About() {
  const lang = useLang()
  const c = COPY[lang]
  const seo = getPageSeo('about', lang)
  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/about"
      />

      <Hero
        compact
        eyebrow={c.hero.about.eyebrow}
        title={c.hero.about.title}
        lede={c.hero.about.lede}
        imageUrl="/images/hero-about.webp"
        imageAlt="Hand-stacked kelo-pine wall corner of a luxury Lapland villa at blue hour"
      />

      <article className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-7 prose-invert space-y-10">
          {c.aboutPage.sections.map((section) => (
            <Section key={section.title} title={section.title}>
              {section.paragraphs.map((p: ParaItem, i) => {
                if (typeof p === 'string') {
                  return <p key={i}>{p}</p>
                }
                return (
                  <p key={i}>
                    {p.pre}
                    <a
                      href={p.href}
                      className="text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] underline underline-offset-4"
                    >
                      {p.label}
                    </a>
                    {p.post}
                  </p>
                )
              })}
            </Section>
          ))}
        </div>
      </article>

      <ConciergeBand />
      <NewsletterSection />
    </Page>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-tight mb-5">
        {title}
      </h2>
      <div className="text-[color:var(--color-bone)]/85 font-body text-base leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  )
}
