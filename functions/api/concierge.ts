// Legacy endpoint. The form moved to /api/inquiry on 2026-08-02 together with
// the /concierge -> /private-inquiry route.
//
// This forwarder exists for one reason: a visitor holding a cached JS bundle
// still POSTs here. Without it their enquiry would 404 silently — the one
// failure mode worth insuring against, since the whole point of the page is
// that a message reaches a human. Safe to delete once the old bundles have
// aged out of every cache (say, after 2026-11).

export { onRequestPost, onRequestOptions } from './inquiry'
