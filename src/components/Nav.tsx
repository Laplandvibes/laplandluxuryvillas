import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import EcosystemMenu from '../shared/EcosystemMenu'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'

const LANG_PREFIX: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja',
  es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
}
import { COPY } from '../locales/copy'

const LANG_OPTIONS: { code: Lang; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'fi', label: 'FI', native: 'Suomi' },
  { code: 'de', label: 'DE', native: 'Deutsch' },
  { code: 'ja', label: 'JA', native: '日本語' },
  { code: 'es', label: 'ES', native: 'Español' },
  { code: 'pt-BR', label: 'BR', native: 'Português' },
  { code: 'zh-CN', label: 'CN', native: '中文' },
  { code: 'ko', label: 'KR', native: '한국어' },
  { code: 'fr', label: 'FR', native: 'Français' },
  { code: 'it', label: 'IT', native: 'Italiano' },
  { code: 'nl', label: 'NL', native: 'Nederlands' },
  { code: 'sv', label: 'SV', native: 'Svenska' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const lang = useLang()
  const to = useLocalePath()
  const location = useLocation()
  const navigate = useNavigate()
  const c = COPY[lang]

  useEffect(() => {
    if (!langOpen) return
    const onClick = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [langOpen])

  const NAV_LINKS = [
    { to: to('/villas'), label: c.nav.villas },
    { to: to('/suites'), label: c.nav.suites },
    { to: to('/destinations'), label: c.nav.destinations },
    { to: to('/experiences'), label: c.nav.experiences },
    { to: to('/midnight-sun'), label: c.nav.midnightSun },
    { to: to('/about'), label: c.nav.about },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Collapse mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const switchTo = (target: Lang) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lv_locale_choice', target)
    }
    const path = location.pathname
    let bare = path
    if (path === '/fi' || path.startsWith('/fi/')) bare = path.replace(/^\/fi/, '') || '/'
    else if (path === '/de' || path.startsWith('/de/')) bare = path.replace(/^\/de/, '') || '/'
    else if (path === '/ja' || path.startsWith('/ja/')) bare = path.replace(/^\/ja/, '') || '/'
    else if (path === '/es' || path.startsWith('/es/')) bare = path.replace(/^\/es/, '') || '/'
    else if (path === '/br' || path.startsWith('/br/')) bare = path.replace(/^\/br/, '') || '/'
    else if (path === '/cn' || path.startsWith('/cn/')) bare = path.replace(/^\/cn/, '') || '/'
    else if (path === '/kr' || path.startsWith('/kr/')) bare = path.replace(/^\/kr/, '') || '/'
    else if (path === '/fr' || path.startsWith('/fr/')) bare = path.replace(/^\/fr/, '') || '/'
    else if (path === '/it' || path.startsWith('/it/')) bare = path.replace(/^\/it/, '') || '/'
    else if (path === '/nl' || path.startsWith('/nl/')) bare = path.replace(/^\/nl/, '') || '/'
    else if (path === '/sv' || path.startsWith('/sv/')) bare = path.replace(/^\/sv/, '') || '/'
    const prefix = LANG_PREFIX[target]
    if (!prefix) {
      navigate(bare)
    } else {
      navigate(bare === '/' ? `/${prefix}` : `/${prefix}${bare}`)
    }
  }

  const langButton = (target: Lang, label: string) => (
    <button
      key={target}
      type="button"
      onClick={() => switchTo(target)}
      className={`text-[11px] tracking-[0.22em] uppercase font-body transition-colors px-1.5 ${
        lang === target
          ? 'text-[color:var(--color-brass)]'
          : 'text-[color:var(--color-bone)]/85 hover:text-[color:var(--color-brass)]'
      }`}
      aria-current={lang === target ? 'true' : undefined}
    >
      {label}
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-[color:var(--color-deep-night)]/95 backdrop-blur-md border-b border-[color:var(--color-mist)]/60'
          : 'bg-gradient-to-b from-[color:var(--color-deep-night)]/80 via-[color:var(--color-deep-night)]/30 to-transparent'
      }`}
    >
      <nav className="mx-auto max-w-screen-2xl px-4 sm:px-7 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <EcosystemMenu lang={lang} currentDomain="laplandluxuryvillas.com" />
          <Link to={to('/')} className="min-w-0 shrink" aria-label="LaplandLuxuryVillas, home">
            <Logo />
          </Link>
        </div>

        <ul className="hidden min-[1360px]:flex items-center gap-3">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  `whitespace-nowrap text-[12px] tracking-[0.12em] uppercase font-body transition-colors ${
                    isActive
                      ? 'text-[color:var(--color-brass)]'
                      : 'text-[color:var(--color-bone)]/80 hover:text-[color:var(--color-brass)]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden min-[1360px]:flex items-center gap-3">
          <div className="relative border-l border-[color:var(--color-mist)]/60 pl-4" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.22em] uppercase font-body border border-[color:var(--color-bone)]/30 text-[color:var(--color-bone)]/85 hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)] transition-colors"
            >
              <Globe className="w-3 h-3" />
              {LANG_OPTIONS.find((l) => l.code === lang)?.label ?? 'EN'}
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <ul
                role="listbox"
                aria-label="Select language"
                className="absolute right-0 top-full mt-2 min-w-[200px] py-1 bg-[color:var(--color-deep-night)] border border-[color:var(--color-mist)]/60 shadow-xl z-50 max-h-[80vh] overflow-y-auto"
              >
                {LANG_OPTIONS.map((l) => {
                  const isActive = l.code === lang
                  return (
                    <li key={l.code} role="option" aria-selected={isActive}>
                      <button
                        type="button"
                        onClick={() => { switchTo(l.code); setLangOpen(false) }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-[12px] tracking-[0.18em] uppercase font-body transition-colors ${
                          isActive
                            ? 'text-[color:var(--color-brass)] bg-[color:var(--color-brass)]/10'
                            : 'text-[color:var(--color-bone)]/85 hover:bg-[color:var(--color-bone)]/5 hover:text-[color:var(--color-brass)]'
                        }`}
                      >
                        <span className="w-8 font-body">{l.label}</span>
                        <span className="normal-case tracking-normal">{l.native}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <Link
            to={to('/concierge')}
            className="inline-flex items-center gap-2 whitespace-nowrap border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-4 py-2.5 text-[12px] tracking-[0.16em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-all"
          >
            {c.nav.privateInquiry}
          </Link>
        </div>

        <div className="min-[1360px]:hidden flex items-center gap-2 shrink-0">
          <div className="relative inline-flex items-center">
            <select
              value={lang}
              onChange={(e) => switchTo(e.target.value as Lang)}
              aria-label="Language"
              className="appearance-none bg-transparent border border-[color:var(--color-bone)]/40 rounded pl-2 pr-6 py-1 text-[11px] tracking-[0.18em] uppercase font-body text-[color:var(--color-bone)]"
            >
              {LANG_OPTIONS.map((l) => (
                <option key={l.code} value={l.code} className="bg-[color:var(--color-deep-night)] text-[color:var(--color-bone)]">
                  {l.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[color:var(--color-bone)]" />
          </div>
          <button
            type="button"
            aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-[color:var(--color-bone)] hover:text-[color:var(--color-brass)]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="min-[1360px]:hidden bg-[color:var(--color-deep-night)] border-t border-[color:var(--color-mist)]/60">
          <ul className="px-5 sm:px-7 py-6 space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base tracking-[0.18em] uppercase font-body border-b border-[color:var(--color-mist)]/40 ${
                      isActive
                        ? 'text-[color:var(--color-brass)]'
                        : 'text-[color:var(--color-bone)]/85 hover:text-[color:var(--color-brass)]'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4 flex items-center justify-center gap-2 flex-wrap border-b border-[color:var(--color-mist)]/40 pb-4">
              {LANG_OPTIONS.map((l, i) => (
                <span key={l.code} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[color:var(--color-bone)]/25 text-[11px]">·</span>}
                  {langButton(l.code, l.label)}
                </span>
              ))}
            </li>
            <li className="pt-5">
              <Link
                to={to('/concierge')}
                onClick={() => setOpen(false)}
                className="block w-full text-center border border-[color:var(--color-brass)] text-[color:var(--color-brass)] px-5 py-4 text-[13px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-all"
              >
                {c.nav.privateInquiry}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
