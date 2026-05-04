import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { VILLAS } from '../lib/villas'

const SUITES = VILLAS.filter(
  (v) => v.category === 'designer-suite' || v.category === 'glass-roof'
)

export default function Suites() {
  return (
    <Page fullBleed>
      <SEO
        title="Designer Suites & Glass-Roof Aurora Bedrooms — LaplandLuxuryVillas"
        description="A short list of Lapland's premier designer suites and glass-roof aurora cabins: Star Arctic Skyview, Arctic TreeHouse Penthouse, Kakslauttanen Kelo-Glass, Levin Iglut, Aurora Village. From €460/night."
        canonicalPath="/suites"
        keywords={['lapland suite', 'glass roof bedroom finland', 'designer suite lapland', 'star arctic suite', 'arctic treehouse', 'levin iglut', 'aurora village']}
      />

      <Hero
        compact
        eyebrow="Designer Suites"
        title="When you don't need a villa — but you do need the glass roof."
        lede="A short list of one-bedroom suites and aurora cabins where the architecture itself is the experience. Lower headcount, same panoramic ceiling."
        imageUrl="/images/hero-suites.webp"
        imageAlt="A single glass-walled designer suite at twilight, low king bed under a panoramic ceiling"
      />

      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 mb-12">
          <p className="text-[color:var(--color-bone)]/85 font-body text-base sm:text-lg leading-relaxed max-w-3xl">
            "Suite" in Lapland covers two distinct architectural moves — both worth knowing. The first
            is the <em className="text-[color:var(--color-brass)] not-italic">designer-suite</em>, where a leading
            Finnish studio (Studio Puisto, ALA, Avanto) has built a single bedroom around a single
            view. The second is the <em className="text-[color:var(--color-brass)] not-italic">glass-roof cabin</em>,
            where the ceiling is the headline detail. Both are listed below.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SUITES.map((v) => (
              <VillaCard key={v.slug} villa={v} />
            ))}
          </div>
        </div>
      </section>

      <ConciergeBand
        title="A two-suite booking, or a private floor?"
        body="Several of these properties release a multi-suite floor for exclusive use during shoulder weeks. Let us know your dates and headcount."
      />

      <NewsletterSection />
    </Page>
  )
}
