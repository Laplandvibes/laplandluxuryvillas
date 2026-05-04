// Cloudflare Pages Function — anonymous concierge inquiry intake.
// POST { headcount, intent, budget, dates, message, name?, email? }
//
// Forwards to private@laplandvibes.com via Resend. Designed so that:
//   • If RESEND_API_KEY is configured (Pages → Settings → Env), the form
//     submits server-side and the user sees an inline success.
//   • If the env var is missing or Resend errors, returns 503 and the
//     client falls back to opening the user's mail client with mailto.
//
// Configure (one-time, by Vesa):
//   Pages project laplandluxuryvillas-com → Settings → Environment variables
//     RESEND_API_KEY        (Production + Preview)
//     CONCIERGE_FROM        e.g. concierge@laplandluxuryvillas.com
//                           (must be a verified Resend sender domain)
//     CONCIERGE_TO          private@laplandvibes.com  (default below)

interface Env {
  RESEND_API_KEY?: string
  CONCIERGE_FROM?: string
  CONCIERGE_TO?: string
}

interface Body {
  headcount?: string
  intent?: string
  budget?: string
  dates?: string
  message?: string
  name?: string
  email?: string
}

const DEFAULT_TO = 'private@laplandvibes.com'
const DEFAULT_FROM = 'concierge@laplandluxuryvillas.com'

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  if (!env.RESEND_API_KEY) {
    return json(
      { error: 'concierge_not_configured', detail: 'Set RESEND_API_KEY in Pages env vars.' },
      503,
    )
  }

  const to = env.CONCIERGE_TO || DEFAULT_TO
  const from = env.CONCIERGE_FROM || DEFAULT_FROM

  // Build a clean human-readable plaintext + a basic HTML for inbox parsing.
  const subject = `Private villa inquiry — ${esc(body.intent) || 'untyped'}`
  const lines = [
    'Private inquiry submitted via laplandluxuryvillas.com',
    '',
    `Headcount: ${esc(body.headcount) || '(unspecified)'}`,
    `Trip intent: ${esc(body.intent) || '(unspecified)'}`,
    `Indicative budget per night: ${esc(body.budget) || '(unspecified)'}`,
    `Dates: ${esc(body.dates) || '(open / flexible)'}`,
    '',
    'Notes:',
    esc(body.message) || '(none)',
    '',
    '— —',
    `Reply to: ${esc(body.email) || '(not provided)'}`,
    `Sender name: ${esc(body.name) || '(anonymous)'}`,
    `Submitted: ${new Date().toISOString()}`,
  ]
  const text = lines.join('\n')
  const html = `<pre style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;line-height:1.6">${
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }</pre>`

  const replyTo = isValidEmail(body.email) ? body.email!.trim() : undefined

  try {
    const upstream = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        text,
        html,
      }),
    })

    const upstreamText = await upstream.text()
    let data: any = {}
    try { data = JSON.parse(upstreamText) } catch { data = { rawBody: upstreamText.slice(0, 500) } }

    if (!upstream.ok) {
      return json({ error: data?.message || `Resend HTTP ${upstream.status}`, upstream: data }, upstream.status)
    }
    return json({ ok: true, id: data?.id }, 200)
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : 'Resend fetch failed' }, 502)
  }
}

export const onRequestOptions: PagesFunction = () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function esc(s: string | undefined): string {
  return (s || '').toString().slice(0, 2000)
}

function isValidEmail(s: string | undefined): boolean {
  return !!s && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.trim())
}
