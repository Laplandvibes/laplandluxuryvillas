import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { to: '/villas', label: 'Villas' },
  { to: '/suites', label: 'Suites' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/midnight-sun', label: 'Midnight Sun' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-[color:var(--color-deep-night)]/95 backdrop-blur-md border-b border-[color:var(--color-mist)]/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="shrink-0" aria-label="LaplandLuxuryVillas — home">
          <Logo />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.18em] uppercase font-body transition-colors ${
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

        <div className="hidden lg:block">
          <Link
            to="/concierge"
            className="inline-flex items-center gap-2 border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-all"
          >
            Private Inquiry
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-[color:var(--color-bone)] hover:text-[color:var(--color-brass)]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[color:var(--color-deep-night)] border-t border-[color:var(--color-mist)]/60">
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
            <li className="pt-5">
              <Link
                to="/concierge"
                onClick={() => setOpen(false)}
                className="block w-full text-center border border-[color:var(--color-brass)] text-[color:var(--color-brass)] px-5 py-4 text-[13px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-all"
              >
                Private Inquiry
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
