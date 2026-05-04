import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from '../../shared/Footer'
import CookieBanner from '../../shared/CookieBanner'
import NewsletterPopup from './components/NewsletterPopup'
import { trackPageView, initScrollDepth, initOutboundTracking } from './lib/analytics'

import Home from './pages/Home'
import Villas from './pages/Villas'
import VillaDetail from './pages/VillaDetail'
import Suites from './pages/Suites'
import Destinations from './pages/Destinations'
import DestinationPage from './pages/DestinationPage'
import Experiences from './pages/Experiences'
import MidnightSun from './pages/MidnightSun'
import Concierge from './pages/Concierge'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'

const FOOTER_PILLARS = [
  { name: 'The Collection', href: '/villas' },
  { name: 'Designer Suites', href: '/suites' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Midnight Sun', href: '/midnight-sun' },
  { name: 'Private Concierge', href: '/concierge' },
]

const FOOTER_EDITORIAL_NOTE =
  'A private collection curated by Lapeso Oy in Finnish Lapland — last reviewed May 2026. Some bookings earn an affiliate commission, which never shapes which villas we recommend. The reserve and concierge-only properties pay nothing.'

const FOOTER_EXTRA_LEGAL = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsBootstrap />
      <AffiliateLinkWarmup />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villas/:slug" element={<VillaDetail />} />
            <Route path="/suites" element={<Suites />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationPage />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/midnight-sun" element={<MidnightSun />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer
          pillarLinks={FOOTER_PILLARS}
          editorialNote={FOOTER_EDITORIAL_NOTE}
          extraLegalLinks={FOOTER_EXTRA_LEGAL}
        />
      </div>
      <CookieBanner consentKey="laplandluxuryvillas_cookie_consent" />
      <NewsletterPopup />
    </BrowserRouter>
  )
}
