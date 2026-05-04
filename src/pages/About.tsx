import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'

export default function About() {
  return (
    <Page fullBleed>
      <SEO
        title="About — LaplandLuxuryVillas, curated by Lapeso Oy in Finland"
        description="A short, curated private collection of Lapland's finest villas and suites. Run from Finnish Lapland by Lapeso Oy — part of the LaplandVibes ecosystem. Why we exist, who we work with, what we don't do."
        canonicalPath="/about"
      />

      <Hero
        compact
        eyebrow="About"
        title="A short list, kept short on purpose."
        lede="A private collection of Lapland's finest villas and suites — anonymous concierge, direct rates where they exist, no platform in between."
        imageUrl="/images/hero-about.webp"
        imageAlt="Hand-stacked kelo-pine wall corner of a luxury Lapland villa at blue hour"
      />

      <article className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-7 prose-invert space-y-10">
          <Section title="Why we exist">
            <p>
              The luxury Lapland inventory is small. The same five or six villas
              and twenty-odd suites get listed on every booking platform, often
              with the same stock photography and the same vague rate band.
              People who have already booked the obvious things — the Maldivian
              over-water suite, the Antarctic ship, the Bhutan trek — start
              asking about Lapland in a more specific way. <em>Which villa would
              you actually book? Where do you put a 9-person family group?
              What's the place no one writes about?</em>
            </p>
            <p>
              We answer those questions for our own friends and have done for
              years. This site is the structured version — short, opinionated,
              with the names of the places we'd send our parents.
            </p>
          </Section>

          <Section title="What we don't do">
            <p>
              We don't operate the villas. We don't sell tours from a counter.
              We don't have a directory and we don't aim to grow one. The
              collection here will not exceed twelve to fifteen properties —
              if a new villa earns the bar, an older one gets retired.
            </p>
            <p>
              We don't take payment from properties to recommend them. The
              affiliate links route through public Hotels.com listings (commission
              ~4–8%) and bring no exclusive rate; the reserve villas pay nothing
              at all and stay listed because they're the right answer to the
              right inquiry.
            </p>
          </Section>

          <Section title="Who we are">
            <p>
              A small Finland-based team that already runs the
              {' '}<a href="https://laplandvibes.com" className="text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] underline underline-offset-4">LaplandVibes</a> ecosystem of Lapland travel sites — the editorial hub plus twenty-odd category spokes. This site is the part of that work where we publish the villas we'd send our own friends to.
            </p>
            <p>
              Concierge replies come from one inbox, monitored by the
              principals — no chatbot, no junior account executive, no
              outsourced planning. Inquiries outside our bar (group price
              points the collection doesn't fit, destinations we don't cover)
              get an honest "we wouldn't be the right fit, here's who is"
              reply rather than a polite generic one.
            </p>
          </Section>

          <Section title="Direct deals">
            <p>
              Several villas in the collection now quote directly through us.
              Over the next twelve months we expect that to expand — we're
              building direct relationships with the properties so guests can
              book at the verified rate without any intermediary fee. Until
              then, the public-rate villas link to Hotels.com and the
              concierge-only villas are quoted from us directly.
            </p>
          </Section>

          <Section title="Two kinds of trip we don't take">
            <p>
              Wedding parties of more than thirty. Group tour-operator buy-outs
              of an entire estate for a single brand event. Both sit outside
              the kind of stay these properties were built for — happy to refer
              you to operators who do that work properly.
            </p>
          </Section>
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
