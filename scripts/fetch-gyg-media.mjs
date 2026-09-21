#!/usr/bin/env node
/**
 * Hakee jokaisen LUXURY_PICKS-tuotteen OMAN valokuvan GetYourGuidelta.
 *
 * 🔴 Miksi selain eika fetch: GetYourGuide vastaa taalta node-fetchille 403
 * (kirjattu shared/gyg/luxury.ts:n alkuun jo 1.8.2026). Oikea selain saa 200.
 *
 * Kuva luetaan sivun omasta rakenteisesta datasta (JSON-LD `image`, varalla
 * og:image), ladataan paikalliseksi tiedostoksi ja pienennetaan. Kumppanin
 * oma tuotekuva omasta tuotesivustaan on sama linja kuin Sembo-kuvissa
 * (photoCredits.ts): affiliate-ohjelma antaa linkit, ja tuotekuva tulee
 * tuotteen omalta sivulta, jonne kortin nappi vie.
 *
 * Aja: node scripts/fetch-gyg-media.mjs [--limit N]
 * Tulos: public/images/gyg/<tourId>.webp + src/data/gygMedia.json
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'public', 'images', 'gyg')
const META = path.join(ROOT, 'src', 'data', 'gygMedia.json')

const src = fs.readFileSync(path.join(ROOT, 'src', 'shared', 'gyg', 'luxury.ts'), 'utf8')
const PICKS = [...src.matchAll(/\{\s*path:\s*'([^']+)'[^}]*?title:\s*'((?:\\.|[^'])*)'/g)].map((m) => ({
  path: m[1],
  title: m[2].replace(/\\'/g, "'"),
  id: (m[1].match(/-t(\d+)$/) || [])[1],
}))

const limit = Number((process.argv.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 0)
const jobs = limit ? PICKS.slice(0, limit) : PICKS

fs.mkdirSync(OUT_DIR, { recursive: true })
const meta = fs.existsSync(META) ? JSON.parse(fs.readFileSync(META, 'utf8')) : {}

const browser = await chromium.launch()
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36',
  locale: 'en-US',
})
const page = await ctx.newPage()

let ok = 0
let fail = 0
for (const p of jobs) {
  if (!p.id) {
    console.log(`  ?? ei tour-id:ta: ${p.path}`)
    fail++
    continue
  }
  const url = `https://www.getyourguide.com/${p.path}`
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
    await page.waitForTimeout(600)
    const found = await page.evaluate(() => {
      const out = []
      for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
        let j
        try {
          j = JSON.parse(s.textContent)
        } catch {
          continue
        }
        for (const o of Array.isArray(j) ? j : [j]) {
          if (o && o.image) out.push(Array.isArray(o.image) ? o.image[0] : o.image)
        }
      }
      const og = document.querySelector('meta[property="og:image"]')
      if (og && og.content) out.push(og.content)
      return { imgs: out, title: document.title }
    })
    const raw = found.imgs[0]
    if (!raw) throw new Error('ei kuvaa rakenteisessa datassa')
    // GetYourGuiden CDN-polku paattyy kokovalintaan (/148.jpg). 145 on leveampi.
    const big = raw.replace(/\/\d+\.jpg$/, '/145.jpg')
    const res = await page.request.get(big)
    const buf = res.ok() ? Buffer.from(await res.body()) : Buffer.from(await (await page.request.get(raw)).body())
    const file = path.join(OUT_DIR, `${p.id}.webp`)
    const info = await sharp(buf).resize(1200, 800, { fit: 'cover', position: 'attention' }).webp({ quality: 82 }).toFile(file)
    meta[p.id] = {
      tourId: p.id,
      title: p.title,
      image: `/images/gyg/${p.id}.webp`,
      source: url,
      cdn: big,
      fetched: new Date().toISOString().slice(0, 10),
      width: info.width,
      height: info.height,
      bytes: info.size,
    }
    ok++
    console.log(`  ok  ${p.id}  ${String(info.size / 1024 | 0).padStart(4)} kt  ${p.title.slice(0, 44)}`)
  } catch (e) {
    fail++
    console.log(`  !!  ${p.id}  ${String(e).slice(0, 70)}`)
  }
}

fs.writeFileSync(META, JSON.stringify(meta, null, 2) + '\n')
await browser.close()
console.log(`\nvalmis: ${ok} haettu, ${fail} epaonnistui, kuitit ${path.relative(ROOT, META)}`)
if (fail) process.exitCode = 1
