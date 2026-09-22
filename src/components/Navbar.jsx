import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import './Navbar.css'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Tools', href: '#tools' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const stored = window.localStorage.getItem('thrisha-theme')
    if (stored) {
      setTheme(stored)
      document.documentElement.dataset.theme = stored
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem('thrisha-theme', next)
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          THRISHA
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button>

          <a
            href="#contact"
            className="btn btn-primary btn-sm navbar__cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Let's Connect
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="btn btn-primary navbar__mobile-cta"
        >
          Let's Connect
        </a>
      </nav>
    </header>
  )
}
