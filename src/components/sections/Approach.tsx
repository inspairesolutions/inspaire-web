import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const steps = ['discovery', 'design', 'implementation', 'optimization'] as const

const stepColors = [
  { glow: 'bg-neon-cyan/20', border: 'border-neon-cyan/20', text: 'from-neon-cyan to-neon-blue' },
  { glow: 'bg-neon-purple/20', border: 'border-neon-purple/20', text: 'from-neon-purple to-neon-pink' },
  { glow: 'bg-neon-blue/20', border: 'border-neon-blue/20', text: 'from-neon-blue to-neon-cyan' },
  { glow: 'bg-neon-green/20', border: 'border-neon-green/20', text: 'from-neon-green to-neon-cyan' },
]

export default function Approach() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-neon-blue mb-4 tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            {t('approach.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/50 max-w-xl mx-auto">
            {t('approach.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div
          ref={ref}
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step}
                className="relative text-center group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  {/* Outer glow - always visible */}
                  <div className={`absolute inset-0 rounded-full ${stepColors[index].glow} blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Outer ring with gradient */}
                  <div className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${stepColors[index].glow} flex items-center justify-center transition-all duration-500`}>
                    {/* Inner circle */}
                    <div className={`w-[100px] h-[100px] rounded-full bg-white dark:bg-void-100 border ${stepColors[index].border} group-hover:border-opacity-60 flex items-center justify-center transition-all duration-300`}>
                      <span className={`text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r ${stepColors[index].text}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                  {t(`approach.steps.${step}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed mb-3">
                  {t(`approach.steps.${step}.description`)}
                </p>
                <p className="text-slate-500 dark:text-white/40 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(`approach.steps.${step}.details`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl" />
    </section>
  )
}
