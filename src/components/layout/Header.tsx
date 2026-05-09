import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../ui/LanguageSelector'
import ThemeToggle from '../ui/ThemeToggle'
import { useTheme } from '../../context/ThemeContext'
import { ROUTES } from '../../lib/constants'

export default function Header() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: ROUTES.home, label: t('nav.home') },
    { to: ROUTES.services, label: t('nav.services') },
    { to: ROUTES.webexpress, label: t('nav.webexpress'), isNew: true },
    { to: ROUTES.contact, label: t('nav.contact') },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-void/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={theme === 'dark' ? '/img/logo_v2_dark_theme.png' : '/img/logo_v2_light_theme.png'}
              alt="InspAIre"
              className="h-8 md:h-10 w-auto relative z-10 transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                isActive(link.to)
                  ? 'text-neon-blue dark:text-neon-cyan'
                  : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isActive(link.to) && (
                <span className="absolute inset-0 bg-neon-blue/10 dark:bg-neon-cyan/10 rounded-full" />
              )}
              <span className="relative flex items-center gap-1.5">
                {link.label}
                {link.isNew && (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-gradient-to-r from-neon-blue to-neon-cyan text-white leading-none">
                    NEW
                  </span>
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />
          <Link to={ROUTES.contact} className="btn-glow text-sm px-6 py-2.5">
            <span>{t('nav.getInTouch')}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-void/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.05] transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-between ${
                isActive(link.to)
                  ? 'text-neon-blue dark:text-neon-cyan bg-neon-blue/10 dark:bg-neon-cyan/10'
                  : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              {link.label}
              {link.isNew && (
                <span className="px-2 py-1 text-xs font-semibold rounded bg-gradient-to-r from-neon-blue to-neon-cyan text-white">
                  NEW
                </span>
              )}
            </Link>
          ))}
          <Link
            to={ROUTES.contact}
            onClick={() => setMobileMenuOpen(false)}
            className="btn-glow text-center mt-4"
          >
            <span>{t('nav.getInTouch')}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
