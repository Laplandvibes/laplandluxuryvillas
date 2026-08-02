import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import compression from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [react(), tailwindcss(), compression({ algorithms: ['brotliCompress'], threshold: 1024 })],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'react-vendor'
            // 🔴 `ui-vendor` (lucide-react) REMOVED 2026-08-02. Cloudflare
            // served that one chunk as a persistent HTTP 520 with text/html
            // while every other asset returned 200 application/javascript —
            // three probes, same result. A chunk that fails to load takes the
            // whole React tree with it, so the site rendered as a blank
            // deep-night page. The file was present and intact in dist, so the
            // fault was on the edge, not in the build.
            //
            // Deleting the split removes the file rather than trying to heal
            // it: re-deploying an identical hash can be skipped as "already
            // uploaded", which would have kept the broken object in place.
            // The icons are ~8 KB and belong in the entry bundle anyway.
          }
          // 🔴 REMOVED 2026-08-01. This rule used to force every
          // `src/locales/copy.*.ts` into one chunk named `locales`. It was
          // written to keep the entry bundle small, and it did — by inventing a
          // 309 KB (77 KB brotli) second bundle that EVERY visitor downloaded
          // in EVERY language, because a single chunk cannot be code-split.
          //
          // `src/locales/copy.ts` already loads exactly one language through a
          // dynamic `import()`, and `src/lib/villaI18n.ts` does the same for the
          // content overlays (which were correctly split all along — see the
          // per-language content.<lang> chunks in any build). Rollup splits the
          // copy files the same way once nothing overrides it, so a Finnish
          // visitor stops paying for Korean, Japanese and nine other locales.
          //
          // English still ships in the entry bundle: `copy.ts` imports it
          // statically as the guaranteed fallback. That is deliberate.
          return undefined
        },
      },
    },
  },
})
