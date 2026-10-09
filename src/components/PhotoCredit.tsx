import type { PhotoCredit as Credit } from '../data/photoCredits'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Source line in the bottom-right corner of a photograph.
 *
 * Hotel-supplied photos print "Photo: Sembo" (the source the reader is sent
 * to); LV's own photographs print "Photo: LaplandVibes"; Pexels clips and
 * posters print the author with a link to the clip page. Open-licence photos print author, licence and "cropped" when the file
 * is an adaptation, with links to the file page and the licence, which is what
 * CC BY / BY-SA require. Drawn here and not at the call site so a file reused
 * on a second surface cannot lose its line (laplandwellness precedent, 17.9.).
 *
 * Size: Vesa 18.9.2026 *"eikä tuo cc by tartte olla noin isona"*, 9–10 px on a
 * dark plate. The plate was black/55 until 1.10.2026, and the korttiteksti gate
 * measured the Saariselkä winter card's "CC BY 2.0" at 2.9:1 worst (375 px, bright
 * snow behind the plate); deep-night at 80 % keeps white text above 4.5:1 on any photo. `lv-tap` keeps the links at
 * 44 px hit size below 1024 px. `rel` carries `noopener`, never `noreferrer`.
 */
export default function PhotoCredit({ credit, plain = false }: { credit?: Credit; plain?: boolean }) {
  const lang = useLang()
  const c = (COPY[lang] ?? COPY.en).photo
  if (!credit) return null
  return (
    <span className="absolute bottom-0 right-0 z-10 max-w-full rounded-tl bg-[#020617]/80 px-1.5 py-[2px] text-[9px] sm:text-[10px] leading-tight text-white font-body">
      {c.credit}:{' '}
      {credit.kind === 'sembo' || credit.kind === 'own' ? (
        <span>{credit.author}</span>
      ) : plain ? (
        /* Inside a card that is itself a link (RelatedSites): text only, the links are in the credit line under the cards. */
        <span>
          {credit.author}, {credit.license === 'Pexels' ? 'Pexels' : credit.license}
          {credit.cropped && <>, {c.cropped}</>}
        </span>
      ) : credit.kind === 'pexels' ? (
        <a href={credit.sourceUrl} target="_blank" rel="noopener" className="lv-tap underline underline-offset-2">
          {credit.author}, Pexels
        </a>
      ) : (
        <>
          <a href={credit.sourceUrl} target="_blank" rel="noopener" className="lv-tap underline underline-offset-2">
            {credit.author}
          </a>
          {credit.license && credit.licenseUrl && (
            <>
              {', '}
              <a href={credit.licenseUrl} target="_blank" rel="license noopener" className="lv-tap underline underline-offset-2">
                {credit.license}
              </a>
            </>
          )}
          {credit.cropped && <>, {c.cropped}</>}
        </>
      )}
    </span>
  )
}
