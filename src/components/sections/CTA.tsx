import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-glow delay-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/50 max-w-2xl mx-auto mb-10">
              {t('cta.subtitle')}
            </p>
            <Link to={ROUTES.contact} className="btn-glow text-lg px-10 py-5">
              <span>{t('cta.button')}</span>
            </Link>
          </div>

          {/* Border Gradient */}
          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-neon-cyan/50 via-neon-purple/50 to-neon-blue/50 -z-10">
            <div className="absolute inset-0 rounded-2xl bg-white dark:bg-void" />
          </div>
        </div>
      </div>
    </section>
  )
}
