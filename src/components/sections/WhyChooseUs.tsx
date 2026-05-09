import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const checkItems = ['expertise', 'partnership', 'impact', 'scalable'] as const

const itemIcons = {
  expertise: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  partnership: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  impact: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  scalable: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
}

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-mono text-neon-purple mb-4 tracking-wider uppercase">
              Why us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {t('whyUs.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/50 max-w-2xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {checkItems.map((item, index) => (
              <div
                key={item}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/[0.08] hover:border-neon-blue/30 dark:hover:border-neon-cyan/30 hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-blue/10 dark:bg-neon-cyan/10 text-neon-blue dark:text-neon-cyan mb-4 group-hover:shadow-glow-blue dark:group-hover:shadow-glow-cyan transition-shadow duration-500">
                  {itemIcons[item]}
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                  {t(`whyUs.items.${item}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed">
                  {t(`whyUs.items.${item}.description`)}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/5 dark:from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-neon-cyan/10 rounded-full blur-3xl" />
    </section>
  )
}
