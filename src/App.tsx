import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CookieBanner from './shared/CookieBanner'
import NewsletterPopup from './components/NewsletterPopup'
import { trackPageView, initScrollDepth, initOutboundTracking } from './lib/analytics'
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect'
import { useHtmlLang, useLang } from './i18n/useLang'

const Home = lazy(() => import('./pages/Home'))
const Villas = lazy(() => import('./pages/Villas'))
const VillaDetail = lazy(() => import('./pages/VillaDetail'))
const Suites = lazy(() => import('./pages/Suites'))
const Destinations = lazy(() => import('./pages/Destinations'))
const DestinationPage = lazy(() => import('./pages/DestinationPage'))
const Experiences = lazy(() => import('./pages/Experiences'))
const MidnightSun = lazy(() => import('./pages/MidnightSun'))
const Concierge = lazy(() => import('./pages/Concierge'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname, hash])
  return null
}

function AnalyticsBootstrap() {
  useEffect(() => {
    initScrollDepth()
    initOutboundTracking()
  }, [])
  return null
}

function LocaleSync() {
  const lang = useHtmlLang()
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}

/** Re-arm preconnect to go.lv on hover so the click eats no handshake. */
function AffiliateLinkWarmup() {
  useEffect(() => {
    let last = 0
    const onHover = (e: Event) => {
      const a = (e.target as HTMLElement).closest?.('a[href*="go.laplandvibes.com"]')
      if (!a) return
      const now = Date.now()
      if (now - last < 5000) return
      last = now
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = 'https://go.laplandvibes.com'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
      setTimeout(() => link.remove(), 12000)
    }
    document.addEventListener('mouseover', onHover, { passive: true })
    document.addEventListener('touchstart', onHover, { passive: true })
    return () => {
      document.removeEventListener('mouseover', onHover)
      document.removeEventListener('touchstart', onHover)
    }
  }, [])
  return null
}

const LOCALE_PREFIXES = ['', '/fi', '/de', '/ja', '/es', '/br', '/cn', '/kr', '/fr', '/it', '/nl'] as const

function localized(path: string, element: React.JSX.Element) {
  return LOCALE_PREFIXES.map((prefix) => {
    const full = prefix + path
    return <Route key={full || '/'} path={full || '/'} element={element} />
  })
}

function LocalizedRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
      {localized('/', <Home />)}
      {localized('/villas', <Villas />)}
      {localized('/villas/:slug', <VillaDetail />)}
      {localized('/suites', <Suites />)}
      {localized('/destinations', <Destinations />)}
      {localized('/destinations/:slug', <DestinationPage />)}
      {localized('/experiences', <Experiences />)}
      {localized('/midnight-sun', <MidnightSun />)}
      {localized('/concierge', <Concierge />)}
      {localized('/about', <About />)}
      {localized('/contact', <Contact />)}
      {localized('/privacy', <PrivacyPolicy />)}
      {localized('/terms', <Terms />)}
      {localized('/cookie-policy', <CookiePolicy />)}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  )
}

function LocalisedCookieBanner() {
  const lang = useLang()
  return <CookieBanner consentKey="laplandluxuryvillas_cookie_consent" lang={lang} />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsBootstrap />
      <AffiliateLinkWarmup />
      <LocaleAutoRedirect />
      <LocaleSync />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <LocalizedRoutes />
        </div>
        <Footer />
      </div>
      <LocalisedCookieBanner />
      <NewsletterPopup />
    </BrowserRouter>
  )
}
