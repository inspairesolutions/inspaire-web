import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const clientTypes = ['enterprises', 'startups', 'smbs', 'public'] as const

export default function Clients() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-sm font-mono text-neon-green mb-4 tracking-wider uppercase">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            {t('clients.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/50 mb-12 max-w-2xl mx-auto">
            {t('clients.subtitle')}
          </p>

          {/* Client Type Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {clientTypes.map((type, index) => (
              <div
                key={type}
                className="group relative px-8 py-4 rounded-full cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-white/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group-hover:border-neon-blue/30 dark:group-hover:border-neon-cyan/30 group-hover:bg-white/80 dark:group-hover:bg-white/[0.06] transition-all duration-300" />

                {/* Glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-full bg-neon-blue/10 dark:bg-neon-cyan/10 blur-xl" />
                </div>

                {/* Text */}
                <span className="relative text-slate-700 dark:text-white/70 font-medium group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                  {t(`clients.types.${type}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
