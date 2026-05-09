import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface ServicesProps {
  variant?: 'preview' | 'full'
}

const serviceIcons = {
  consulting: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  agents: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  optimization: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  custom: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  webexpress: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
}

const serviceKeys = ['consulting', 'agents', 'optimization', 'custom'] as const

export default function Services({ variant = 'preview' }: ServicesProps) {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  // Feature keys for each service
  const serviceFeatureKeys: Record<string, readonly string[]> = {
    consulting: ['assessment', 'roadmap', 'selection', 'training', 'governance'],
    agents: ['chatbots', 'automation', 'integration', 'analytics', 'multimodal'],
    optimization: ['processMapping', 'bottlenecks', 'predictive', 'rpa', 'monitoring'],
    custom: ['vision', 'nlp', 'generative', 'recommendation', 'forecasting'],
  }

  return (
    <section className="section-padding relative">
      {/* Section Header */}
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-neon-blue dark:text-neon-cyan mb-4 tracking-wider uppercase">
            What we do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/50 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {serviceKeys.map((key, index) => (
            <div
              key={key}
              className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/[0.08] hover:border-neon-blue/30 dark:hover:border-neon-cyan/30 hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-neon-blue/10 dark:bg-neon-cyan/10 text-neon-blue dark:text-neon-cyan mb-6 group-hover:shadow-glow-blue dark:group-hover:shadow-glow-cyan transition-shadow duration-500">
                {serviceIcons[key]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                {t(`services.${key}.title`)}
              </h3>
              <p className="text-slate-600 dark:text-white/50 leading-relaxed mb-4">
                {variant === 'full'
                  ? t(`services.${key}.longDescription`)
                  : t(`services.${key}.description`)
                }
              </p>

              {/* Features - Only show in full variant */}
              {variant === 'full' && (
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
                  <ul className="grid grid-cols-1 gap-2">
                    {serviceFeatureKeys[key].map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/50">
                        <svg className="w-4 h-4 text-neon-blue dark:text-neon-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t(`services.${key}.features.${featureKey}`)}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Benefits */}
                  <div className="mt-6 p-4 rounded-xl bg-neon-blue/5 dark:bg-neon-cyan/5">
                    <h4 className="text-sm font-semibold text-neon-blue dark:text-neon-cyan mb-2">
                      {t(`services.${key}.benefits.title`)}
                    </h4>
                    <ul className="space-y-1">
                      {(t(`services.${key}.benefits.items`, { returnObjects: true }) as string[]).map((benefit: string, i: number) => (
                        <li key={i} className="text-sm text-slate-600 dark:text-white/50 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue dark:bg-neon-cyan" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/5 dark:from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* WebExpress Banner - Show in preview variant only */}
        {variant === 'preview' && (
          <div className="mt-8">
            <Link
              to="/webexpress"
              className="group relative block p-6 md:p-8 rounded-2xl bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 dark:from-neon-blue/20 dark:to-neon-cyan/20 border border-neon-blue/20 dark:border-neon-cyan/20 hover:border-neon-blue/40 dark:hover:border-neon-cyan/40 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue to-neon-cyan text-white">
                    {serviceIcons.webexpress}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                        {t('services.webexpress.title')}
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-semibold rounded bg-gradient-to-r from-neon-blue to-neon-cyan text-white">
                        {t('services.webexpress.badge')}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-white/50">
                      {t('services.webexpress.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neon-blue dark:text-neon-cyan font-semibold">
                  {t('services.learnMore')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  )
}
