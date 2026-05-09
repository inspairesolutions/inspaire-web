import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { COMPANY, ROUTES } from '../../lib/constants'

export default function Footer() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.05] bg-slate-50 dark:bg-transparent">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={theme === 'dark' ? '/img/logo_v2_dark_theme.png' : '/img/logo_v2_light_theme.png'}
                alt="InspAIre"
                className="h-10 transition-opacity duration-300"
              />
            </Link>
            <p className="text-slate-500 dark:text-white/40 text-sm max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-heading font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Navigation
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to={ROUTES.home}
                  className="text-sm text-slate-500 dark:text-white/40 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.services}
                  className="text-sm text-slate-500 dark:text-white/40 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.webexpress}
                  className="text-sm text-slate-500 dark:text-white/40 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
                >
                  WebExpress
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.contact}
                  className="text-sm text-slate-500 dark:text-white/40 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-heading font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              {t('footer.contact')}
            </h5>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-white/40">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>

            <h5 className="text-sm font-heading font-semibold text-slate-900 dark:text-white mt-6 mb-3 uppercase tracking-wider">
              {t('footer.presence')}
            </h5>
            <ul className="space-y-1.5 text-sm text-slate-500 dark:text-white/40">
              <li>🇺🇸 Estados Unidos</li>
              <li>🇲🇽 México</li>
              <li>🇵🇹 Portugal</li>
              <li className="text-slate-400 dark:text-white/25 italic text-xs mt-2">
                {t('footer.comingSoon')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-white/30">
            &copy; {currentYear} {COMPANY.name}. {t('footer.rights')}
          </p>
          <p className="text-xs text-slate-300 dark:text-white/20 font-mono">
            Powered by AI
          </p>
        </div>
      </div>
    </footer>
  )
}
