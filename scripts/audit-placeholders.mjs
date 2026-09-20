/**
 * Portti: renderöidyllä sivulla ei saa näkyä täyttämätöntä paikanpitäjää.
 *
 * 🔴 Miksi tämä on olemassa (20.9.2026): `{e}` päätyi tuotantoon elämyssivun
 * ingressiin sellaisenaan. Syy ei ollut kirjoitusvirhe vaan rakenne — luvut
 * täytti `withCounts()`, jota kutsuttiin kolmella sivulla kahdeksasta, ja
 * loput välittivät copyn sellaisenaan. Tyypit menivät läpi, portit menivät
 * läpi, ja vian näki vasta livenä lukemalla.
 *
 * Tämä portti lukee `dist/`:n staattiset sivut ja kaatuu, jos näkyvässä
 * tekstissä on `{jotain}`. Se on halpa ja kattaa koko luokan: {n}, {m}, {e},
 * {year}, {what}, {r} — mikä tahansa unohdettu täyttö.
 *
 * Aja: node scripts/audit-placeholders.mjs
 */
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const DIST = 'dist'
/** Sallitut: CSS/JS-nipuissa aaltosulkeet ovat koodia, ei tekstiä. */
// 🔴 `.br`/`.gz` ovat pakattua binääriä: satunnaiset tavut osuvat {sana}-kuvioon
// (mitattu heti: dist/assets/copy.sv-*.js.br tuotti väärän löydöksen `{S}`).
const SKIP = /\.(js|css|map|json|xml|txt|webp|avif|png|jpg|jpeg|svg|ico|mp4|woff2?|br|gz)$/i
/** Tekstistä etsitään vain lyhyt {sana} — ei CSS-lohkoja eikä JSONia. */
const PLACEHOLDER = /\{[a-zA-Z][a-zA-Z0-9_]{0,14}\}/g

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (!SKIP.test(e.name)) yield p
  }
}

const findings = []
for await (const file of walk(DIST)) {
  const html = await readFile(file, 'utf8')
  // vain näkyvä teksti: pudota script/style ja tagit
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
  for (const m of text.matchAll(PLACEHOLDER)) {
    findings.push({ file: file.replace(/\\/g, '/'), hit: m[0], around: text.slice(Math.max(0, m.index - 45), m.index + 45).replace(/\s+/g, ' ').trim() })
  }
}

if (findings.length) {
  console.error(`\n❌ paikanpitäjät: ${findings.length} täyttämätöntä paikanpitäjää renderöidyssä tekstissä\n`)
  for (const f of findings.slice(0, 25)) console.error(`   ${f.hit}  ${f.file}\n      …${f.around}…`)
  if (findings.length > 25) console.error(`   … ja ${findings.length - 25} muuta`)
  process.exit(1)
}
console.log(`✅ paikanpitäjät: ei täyttämättömiä paikanpitäjiä renderöidyssä tekstissä`)
