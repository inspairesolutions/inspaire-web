import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants'

interface HeroProps {
  variant?: 'home' | 'simple'
  title?: string
  subtitle?: string
}

export default function Hero({ variant = 'home', title, subtitle }: HeroProps) {
  const { t } = useTranslation()

  if (variant === 'simple') {
    return (
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6 animate-fade-in-up">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 animate-fade-in-up delay-100">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-neon-purple/10 dark:bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute inset-20 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-glow delay-200" />
          <div className="absolute inset-40 bg-neon-cyan/5 dark:bg-neon-cyan/10 rounded-full blur-[80px] animate-pulse-glow delay-400" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-neon-purple rounded-full animate-float delay-200 opacity-40" />
        <div className="absolute bottom-1/4 left-[20%] w-1.5 h-1.5 bg-neon-blue rounded-full animate-float delay-300 opacity-50" />
        <div className="absolute top-[60%] right-[10%] w-2 h-2 bg-neon-cyan rounded-full animate-float delay-400 opacity-30" />
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-down">
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          <span className="text-sm text-slate-600 dark:text-white/60 font-mono">AI-Powered Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in-up">
          <span className="block text-slate-900 dark:text-white">InspAIre</span>
          <span className="block gradient-text">Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-700 dark:text-white/50 max-w-2xl mx-auto mb-4 font-light animate-fade-in-up delay-100">
          {t('hero.title')}
        </p>

        <p className="text-base md:text-lg text-slate-500 dark:text-white/40 max-w-xl mx-auto mb-12 animate-fade-in-up delay-200">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Link to={ROUTES.contact} className="btn-glow">
            <span>{t('hero.cta')}</span>
          </Link>
          <Link to={ROUTES.services} className="btn-outline">
            {t('nav.services')}
          </Link>
        </div>
      </div>
    </section>
  )
}
