import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function FeaturedService() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const highlights = [
    { key: 'fast', icon: '⚡' },
    { key: 'pages', icon: '📄' },
    { key: 'seo', icon: '🔍' },
    { key: 'responsive', icon: '📱' },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-cyan/5 dark:from-neon-blue/10 dark:via-transparent dark:to-neon-cyan/10" />
      
      <div className="container-custom relative">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-neon-purple/20 to-neon-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 dark:bg-neon-cyan/10 border border-neon-blue/20 dark:border-neon-cyan/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue dark:bg-neon-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue dark:bg-neon-cyan"></span>
                    </span>
                    <span className="text-sm font-medium text-neon-blue dark:text-neon-cyan">
                      {t('featured.badge')}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                      {t('featured.title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-neon-blue dark:text-neon-cyan font-medium">
                      {t('featured.tagline')}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
                    {t('featured.description')}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link
                      to="/webexpress"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold text-lg shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 hover:scale-105 transition-all duration-300"
                    >
                      {t('featured.cta')}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <div className="text-slate-900 dark:text-white">
                      <span className="text-3xl font-bold">{t('featured.price')}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={item.key}
                      className="group p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-neon-blue/30 dark:hover:border-neon-cyan/30 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {t(`featured.highlights.${item.key}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
