import type { PhotoCredit as Credit } from '../data/photoCredits'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Source line in the bottom-right corner of a photograph.
 *
 * Hotel-supplied photos print "Photo: Sembo" (the source the reader is sent
 * to). Open-licence photos print author, licence and "cropped" when the file
 * is an adaptation, with links to the file page and the licence, which is what
 * CC BY / BY-SA require. Drawn here and not at the call site so a file reused
 * on a second surface cannot lose its line (laplandwellness precedent, 17.9.).
 *
 * Size: Vesa 18.9.2026 *"eikä tuo cc by tartte olla noin isona"*, 9–10 px on a
 * solid black/55 plate (4.8:1 on a white photo). `lv-tap` keeps the links at
 * 44 px hit size below 1024 px. `rel` carries `noopener`, never `noreferrer`.
 */
export default function PhotoCredit({ credit }: { credit?: Credit }) {
  const lang = useLang()
  const c = (COPY[lang] ?? COPY.en).photo
  if (!credit) return null
  return (
    <span className="absolute bottom-0 right-0 z-10 max-w-full rounded-tl bg-black/55 px-1.5 py-[2px] text-[9px] sm:text-[10px] leading-tight text-white font-body">
      {c.credit}:{' '}
      {credit.kind === 'sembo' ? (
        <span>{credit.author}</span>
      ) : (
        <>
          <a href={credit.sourceUrl} target="_blank" rel="noopener" className="lv-tap underline decoration-white/50 underline-offset-2 hover:decoration-white">
            {credit.author}
          </a>
          {credit.license && credit.licenseUrl && (
            <>
              {', '}
              <a href={credit.licenseUrl} target="_blank" rel="license noopener" className="lv-tap underline decoration-white/50 underline-offset-2 hover:decoration-white">
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
