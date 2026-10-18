import SEO from '../components/SEO'
import Hero, { type HeroSources } from '../components/Hero'
import PhotoCredit from '../components/PhotoCredit'
import { creditFor } from '../data/photoCredits'
import { seasonal } from '../lib/season'
import Page from '../components/Page'
import InquiryBand from '../components/InquiryBand'
import NewsletterSection from '../components/NewsletterSection'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'
import { withCounts } from '../lib/copyCounts'

type ParaItem =
  | string
  | { type: 'link'; pre: string; label: string; href: string; post: string }

// Real photographs since 23.9.2026 (were launch-commit AI renders): the season
// decides, same switch as the front page and the share card. Receipts in
// src/data/photoCredits.ts.
// Winter since 18.10.2026: LaplandVibes' own photograph, a timber chalet lit at dusk in
// Levi after the first snow (14.10.2026, 18:43). Vesa chose it from three own frames
// rendered on this page ("tämähän osio on ihan kamala" of the Commons snow-tree before).
// Desktop is its own crop with the gable and the lamps on the left, so the words sit on
// the right from 1024 px; the phone gets the whole frame. A parked car's plate is blurred.
const HERO_WINTER = '/images/hero-about-levi-chalet.webp'
const HERO_WINTER_SOURCES: HeroSources = {
  desktopAvif: '/images/hero-about-levi-chalet-1920.avif 1920w, /images/hero-about-levi-chalet.avif 2560w',
  desktopWebp: '/images/hero-about-levi-chalet-1920.webp 1920w, /images/hero-about-levi-chalet.webp 2560w',
  mobileAvif: '/images/hero-about-levi-chalet-mobile.avif',
  mobileWebp: '/images/hero-about-levi-chalet-mobile.webp',
}
const HERO_SUMMER = '/images/commons/hero-about-summer.webp'

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
        lede={withCounts(c.hero.about.lede, lang)}
        imageUrl={seasonal(HERO_WINTER, HERO_SUMMER)}
        sources={seasonal<HeroSources | undefined>(HERO_WINTER_SOURCES, undefined)}
        imgPositionClass={seasonal('object-[50%_45%] md:object-[30%_45%]', undefined)}
        textSide={seasonal<'left' | 'right'>('right', 'left')}
        imageAlt={seasonal(c.photo.heroAlt.aboutWinter, c.photo.heroAlt.aboutSummer)}
        scrim={seasonal('default', 'strong')}
        credit={<PhotoCredit credit={creditFor(seasonal(HERO_WINTER, HERO_SUMMER))} />}
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

      <InquiryBand />
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
