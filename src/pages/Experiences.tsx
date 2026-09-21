import { Link } from 'react-router-dom'
import LuxuryExperiences from '../components/LuxuryExperiences'
import { ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { HERO_CLIPS } from '../data/clips'
import PhotoCredit from '../components/PhotoCredit'
import { creditFor } from '../data/photoCredits'
import Page from '../components/Page'
import InquiryBand from '../components/InquiryBand'
import NewsletterSection from '../components/NewsletterSection'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

/**
 * ELÄMYKSET — rakennettu uudelleen 21.9.2026 OIKEIDEN tuotteiden varaan.
 *
 * 🔴🔴 Mitä täällä oli ennen. Sivun runkona oli kuusi käsin kirjoitettua
 * "elämystä", joissa oli tarkkoja tuotetietoja: kuudentoista vetokoiran
 * valjakko, 35 km:n reitti, yhdeksän ruokalajin menu, 80 km:n kelkkareitti.
 * Yksikään niistä ei ollut varattava tuote: neljä kuudesta oli merkitty
 * `inquiryOnly` eli nappi vei sähköpostiin, kaksi vei GetYourGuiden HAKUUN.
 * Tiedot olivat siis keksittyjä, ja viidellä kuudesta oli tekoälykuva.
 * Vesa 21.9.: *"onhan nämäkin tekstit ihan puuta heinää, eikä aitoa
 * kirjoittamista?"* ja *"tekoälykuvat, pitää olla parempi husky kuva"*.
 *
 * Samaan aikaan sivun ALALAIDASSA oli viisitoista OIKEAA, hinnoiteltua ja
 * selaimessa varmistettua GetYourGuide-tuotetta, pelkkänä tekstilistana ilman
 * kuvia. Vesa: *"miksi näissä ei ole kuvia getyourguiden syötteestä ja kait
 * nämä on deep linkitetty?"* Deep linkitettyjä ne olivat; kuvia ei vain ollut
 * haettu. Sivu oli siis ylösalaisin: keksitty sisältö pääosassa, oikeasti
 * ostettava tavara alaviitteenä. Siitä tuli myös *"tilkkutäkki"*.
 *
 * 🟢 Nyt: kolme osiota, kaikki samaa korttia, ja jokainen kortti on oikea
 * tuote oikealla kuvallaan (haettu tuotteen omalta sivulta,
 * scripts/fetch-gyg-media.mjs, kuitit src/data/gygMedia.json). Nappi vie
 * Workerin kautta juuri sen tuotteen varaussivulle, joten klikki kirjautuu
 * D1:een kuten ennenkin.
 *
 * 🔴 Ruoka ja saapuminen EIVÄT ole enää osioita: niihin ei ole yhtään
 * varattavaa tuotetta. Sivu sanoo sen nyt suoraan sen sijaan että täyttäisi
 * ne keksityllä tekstillä.
 */
export default function Experiences() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const seo = getPageSeo('experiences', lang)
  const s = c.experiencesPage.sections

  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/experiences"
        keywords={[
          'private aurora tour lapland',
          'private northern lights hunt',
          'private snowmobile lapland',
          'icebreaker cruise kemi',
          'lapland luxury experiences',
        ]}
      />

      {/* Oikeaa revontulikuvaa heron päällä (Pexels-kuitti photoCredits.ts).
          Vesa 19.9.2026 tekoälystillistä: "liikaa overlayta … aivan fake". */}
      <Hero
        compact
        eyebrow={c.hero.experiences.eyebrow}
        title={c.hero.experiences.title}
        lede={c.hero.experiences.lede}
        imageUrl={HERO_CLIPS.experiences ? '/images/hero-experiences-poster.webp' : '/images/hero-experiences.webp'}
        videoUrl={HERO_CLIPS.experiences}
        scrim={HERO_CLIPS.experiences ? 'light' : 'default'}
        imageAlt="Green aurora over a snowy Lapland landscape at night"
        credit={<PhotoCredit credit={creditFor(HERO_CLIPS.experiences ?? '')} />}
      />

      <LuxuryExperiences id="aurora" category="aurora" tone="night" eyebrow={`01 · ${s.aurora.title}`} title={s.aurora.title} intro={s.aurora.intro} />
      <LuxuryExperiences id="wilderness" category="wilderness" tone="onyx" eyebrow={`02 · ${s.wilderness.title}`} title={s.wilderness.title} intro={s.wilderness.intro} />
      <LuxuryExperiences id="other" category="other" tone="night" eyebrow={`03 · ${s.other.title}`} title={s.other.title} intro={s.other.intro} />

      {/* 🔴 Se mitä emme myy tuotteena. Tässä oli ennen kaksi osiota keksittyjä
          tuotekuvauksia (yksityiskokki, yksityiskone). Nyt sivu sanoo suoraan
          mitä voimme ja mitä emme voi varata puolestasi. */}
      <section className="bg-[color:var(--color-onyx)] border-y border-[color:var(--color-mist)]/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="max-w-3xl">
            <span className="eyebrow">{s.onRequest.eyebrow}</span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">{s.onRequest.title}</h2>
            <p className="mt-4 text-[color:var(--color-bone)]/85 font-body leading-relaxed">{s.onRequest.intro}</p>
            <Link
              to={to('/private-inquiry')}
              className="mt-7 inline-flex items-center gap-2 border border-[color:var(--color-brass)]/70 px-5 py-3 text-[11px] tracking-[0.18em] uppercase font-body text-[color:var(--color-brass)] no-underline transition-colors hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)]"
            >
              {s.onRequest.cta}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-deep-night)] py-10">
        <AffiliateDisclosure variant="full" />
      </section>

      <InquiryBand />
      <NewsletterSection />
    </Page>
  )
}
