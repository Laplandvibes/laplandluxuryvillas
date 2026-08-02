// Cloudflare Pages Function — same-origin proxy to the Supabase Edge Function
// `send-concierge-inquiry`. Lives at https://laplandluxuryvillas.com/api/concierge.
//
// Why a proxy?  The Supabase function's CORS policy allows only the LV
// allowlist. Routing through this Function keeps the call same-origin in the
// browser and lets the actual hop to Supabase be a server-side fetch (CORS
// bypassed). Mirrors how /api/newsletter proxies send-welcome-email.
//
// Configure these as Cloudflare Pages env vars only if you want to override
// the bundled defaults:
//   SUPABASE_URL              -> https://oogioaxmfnqcbvjbcodh.supabase.co
//   SUPABASE_PUBLISHABLE_KEY  -> the public anon key

interface Env {
  SUPABASE_URL?: string
  SUPABASE_PUBLISHABLE_KEY?: string
}

const SUPABASE_URL_FALLBACK = 'https://oogioaxmfnqcbvjbcodh.supabase.co'
const SUPABASE_ANON_FALLBACK =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vZ2lvYXhtZm5xY2J2amJjb2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NjMyNDIsImV4cCI6MjA5MDQzOTI0Mn0.eTfgsux0zV3_gPyFRUcE8M_-DuDpU2xE9gehQM9pz54'

interface Body {
  headcount?: string
  intent?: string
  budget?: string
  dates?: string
  message?: string
  name?: string
  email?: string
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  // Light required-field validation up front so we don't burn a Supabase call
  // on obviously-empty payloads.
  if (!body.headcount || !body.intent || !body.budget) {
    return json({ error: 'Missing required fields (headcount, intent, budget)' }, 400)
  }

  const supabaseUrl = env.SUPABASE_URL || SUPABASE_URL_FALLBACK
  const anonKey = env.SUPABASE_PUBLISHABLE_KEY || SUPABASE_ANON_FALLBACK

  try {
    const upstream = await fetch(`${supabaseUrl}/functions/v1/send-concierge-inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        // Set the Origin so the upstream CORS allowlist treats this as a
        // legitimate first-party call (server-side fetch otherwise has no
        // Origin header and the upstream falls back to the default).
        Origin: 'https://laplandluxuryvillas.com',
      },
      body: JSON.stringify(body),
    })

    const text = await upstream.text()
    let data: any = {}
    try { data = JSON.parse(text) } catch { data = { rawBody: text.slice(0, 500) } }

    if (!upstream.ok) {
      return json({ error: data?.error || `upstream HTTP ${upstream.status}`, upstream: data }, upstream.status)
    }
    return json(data, 200)
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : 'Upstream fetch failed' }, 502)
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
