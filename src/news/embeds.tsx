/**
 * Jutun omat upotukset — laplandluxuryvillas.com.
 *
 * `ScaleFigure` piirtää sen mitä juttu väittää: yhden mitta-asteikon, jolla nykyinen
 * liikevaihto ja investointiohjelman jälkeinen tavoite ovat samassa mittakaavassa.
 * Kymmenkertaistaminen on luku, jonka lukija näkee vasta kun molemmat ovat samalla
 * viivalla — neljä erillistä laattaa ei näyttäisi sitä (11-artikkelin-viimeistely §3).
 *
 * §3b: yksi aksenttiväri (messinki) koko objektissa, tavoite merkitään MUODOLLA
 * (ääriviiva + katkoviiva), ei toisella värillä. Selitteet 15 px ja 85 % peitolla,
 * ei liikettä eikä gradienttia. Luvut leipäkirjasimella — otsikkokirjasin on serif
 * eikä sisällä CJK-merkkejä.
 *
 * Luvut tulevat meta.jsonin `embeds`-lohkosta (kieliriippumaton data), kielikohtaiset
 * selitteet artikkelin `items`-listasta, jonka portti vertaa englantiin.
 */
import type { NewsBlock } from './types'

interface ScaleConfig {
  type: 'scale'
  /** Viimeisimmän tilikauden pro forma -liikevaihto, miljoonaa euroa. */
  now: number
  /** Tavoitehaarukka investointiohjelman valmistuttua. */
  targetLow: number
  targetHigh: number
  /** Asteikon yläpää. */
  max: number
}

/**
 * items-listan järjestys (sama kaikissa 12 kielessä, portti tarkistaa):
 *   0  nykyisen lukeman selite
 *   1  nykyinen lukema kielen omalla desimaalimerkillä ("2.8" / "2,8")
 *   2  tavoitteen selite
 *   3  tavoitehaarukka ("25–30")
 *   4  mitä asteikko mittaa
 *
 * 🔴 Luvut ovat kielitiedostossa eivätkä koodissa, koska desimaalipilkku on kielen asia.
 * Portin numerotarkistus hyväksyy tämän: "2,8" ja "2.8" antavat molemmat luvut 2 ja 8,
 * joten suomi ja englanti vertautuvat. Palkkien PITUUDET tulevat meta.jsonin luvuista,
 * jotka ovat kieliriippumattomia — teksti ja kuva eivät voi erkaantua vahingossa.
 */
export function ScaleFigure({ config, block }: { config: Record<string, unknown>; block: Extract<NewsBlock, { t: 'embed' }> }) {
  const cfg = config as unknown as ScaleConfig
  const labels = block.items ?? []
  const max = cfg.max || Math.max(cfg.targetHigh, cfg.now) * 1.1
  const pct = (n: number) => `${Math.max(1.2, (n / max) * 100)}%`

  return (
    <figure className="nw-scale">
      {block.title && <p className="nw-scale-h">{block.title}</p>}

      <div className="nw-scale-row">
        <p className="nw-scale-label">{labels[0]}</p>
        <div className="nw-scale-track">
          <span className="nw-scale-bars">
            <span className="nw-scale-bar nw-scale-now" style={{ width: pct(cfg.now) }} />
          </span>
          <b className="nw-scale-num">{labels[1]}</b>
        </div>
      </div>

      <div className="nw-scale-row">
        <p className="nw-scale-label">{labels[2]}</p>
        <div className="nw-scale-track">
          <span className="nw-scale-bars">
            <span className="nw-scale-bar nw-scale-target" style={{ width: pct(cfg.targetLow) }} />
            <span className="nw-scale-bar nw-scale-range" style={{ width: pct(cfg.targetHigh - cfg.targetLow) }} />
          </span>
          <b className="nw-scale-num">{labels[3]}</b>
        </div>
      </div>

      <figcaption className="nw-scale-cap">
        <span className="nw-scale-unit">{labels[4]}</span>
        {block.text && <span className="nw-scale-note">{block.text}</span>}
      </figcaption>
    </figure>
  )
}
