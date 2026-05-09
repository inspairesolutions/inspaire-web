import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import SchemaOrg from '../components/seo/SchemaOrg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'

// FAQ Accordion Item Component
function FAQItem({ questionKey, answerKey }: { questionKey: string; answerKey: string }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 dark:border-white/[0.08]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
          {t(questionKey)}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {t(answerKey)}
        </p>
      </div>
    </div>
  )
}

export default function WebExpress() {
  const { t } = useTranslation()
  const heroRef = useScrollAnimation<HTMLDivElement>()
  const processRef = useScrollAnimation<HTMLDivElement>()
  const includesRef = useScrollAnimation<HTMLDivElement>()
  const pricingRef = useScrollAnimation<HTMLDivElement>()
  const whyRef = useScrollAnimation<HTMLDivElement>()
  const faqRef = useScrollAnimation<HTMLDivElement>()

  const processSteps = ['research', 'design', 'review', 'launch'] as const
  const includesItems = ['design', 'pages', 'responsive', 'seo', 'form', 'maps', 'hosting', 'fast'] as const
  const whyItems = ['speed', 'price', 'personal', 'design', 'tech', 'guarantee'] as const
  const faqItems = ['really7days', 'whatINeed', 'changes', 'technical', 'domain', 'ecommerce', 'mobile', 'google', 'afterYear', 'guarantee'] as const

  const processIcons: Record<string, JSX.Element> = {
    research: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    design: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    review: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    launch: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }

  const includesIcons: Record<string, JSX.Element> = {
    design: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    pages: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    responsive: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    seo: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    form: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    maps: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    hosting: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    fast: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }

  const whyIcons: Record<string, JSX.Element> = {
    speed: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    price: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    personal: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    design: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    tech: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    guarantee: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }

  return (
    <>
      <SEOHead
        title={t('seo.webexpress.title')}
        description={t('seo.webexpress.description')}
        path="/webexpress"
      />
      <SchemaOrg page="webexpress" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background - solid base for dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0a0f1a] dark:via-[#0d1321] dark:to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent dark:from-neon-cyan/5 dark:via-transparent" />
        
        {/* Decorative elements - more subtle in dark mode */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-neon-blue/30 dark:bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-cyan/30 dark:bg-neon-blue/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div
            ref={heroRef.ref}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 dark:bg-neon-cyan/10 border border-neon-blue/20 dark:border-neon-cyan/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue dark:bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue dark:bg-neon-cyan"></span>
              </span>
              <span className="text-sm font-medium text-neon-blue dark:text-neon-cyan">
                {t('webexpress.hero.badge')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              {t('webexpress.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              {t('webexpress.hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold text-lg shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 hover:scale-105 transition-all duration-300"
              >
                {t('webexpress.hero.cta')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#includes"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
              >
                {t('webexpress.hero.ctaSecondary')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white dark:bg-[#0d1321]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6 text-center">
              {t('webexpress.about.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center">
              {t('webexpress.about.description')}
            </p>
            
            {/* Highlight Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-neon-blue/5 to-neon-cyan/5 dark:from-neon-blue/10 dark:to-neon-cyan/10 border border-neon-blue/20 dark:border-neon-cyan/20">
              <h3 className="text-xl font-semibold text-neon-blue dark:text-neon-cyan mb-4">
                {t('webexpress.about.highlight')}
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                {t('webexpress.about.highlightText')}
              </p>
              <p className="text-slate-600 dark:text-slate-300 italic">
                {t('webexpress.about.noTemplates')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50 dark:bg-[#0a0f1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {t('webexpress.process.title')}
            </h2>
            <p className="text-lg text-neon-blue dark:text-neon-cyan font-medium">
              {t('webexpress.process.subtitle')}
            </p>
          </div>

          <div
            ref={processRef.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
              processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="relative group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue/30 to-neon-cyan/30 z-0" />
                )}
                
                <div className="relative p-6 rounded-2xl bg-white dark:bg-[#151d2e] border border-slate-200 dark:border-white/[0.08] hover:border-neon-blue/30 dark:hover:border-neon-cyan/30 transition-all duration-300 h-full">
                  {/* Day Badge + Icon Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/10 dark:bg-neon-cyan/10 text-sm font-medium text-neon-blue dark:text-neon-cyan">
                      {t(`webexpress.process.steps.${step}.day`)}
                    </div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-blue/10 dark:bg-neon-cyan/10 text-neon-blue dark:text-neon-cyan">
                      {processIcons[step]}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {t(`webexpress.process.steps.${step}.title`)}
                  </h3>
                  
                  {/* Items */}
                  <ul className="space-y-2">
                    {(t(`webexpress.process.steps.${step}.items`, { returnObjects: true }) as string[]).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <svg className="w-4 h-4 text-neon-blue dark:text-neon-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="includes" className="section-padding bg-white dark:bg-[#0d1321]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {t('webexpress.includes.title')}
            </h2>
          </div>

          <div
            ref={includesRef.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
              includesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {includesItems.map((item, index) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151d2e] border border-slate-200 dark:border-white/[0.08] hover:border-neon-blue/30 dark:hover:border-neon-cyan/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-blue/10 dark:bg-neon-cyan/10 text-neon-blue dark:text-neon-cyan mb-4">
                  {includesIcons[item]}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {t(`webexpress.includes.items.${item}.title`)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(`webexpress.includes.items.${item}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-slate-50 dark:bg-[#0a0f1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {t('webexpress.pricing.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t('webexpress.pricing.subtitle')}
            </p>
          </div>

          <div
            ref={pricingRef.ref}
            className={`grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
              pricingRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Basic Pack */}
            <div className="lg:col-span-2 relative p-8 rounded-2xl bg-white dark:bg-[#151d2e] border-2 border-neon-blue/30 dark:border-neon-cyan/30">
              <div className="absolute -top-4 left-8">
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan text-white text-sm font-semibold">
                  Popular
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {t('webexpress.pricing.basic.name')}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">
                  {t('webexpress.pricing.basic.price')}
                </span>
                <span className="text-slate-500 dark:text-white/50">
                  {t('webexpress.pricing.basic.period')}
                </span>
              </div>
              
              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                {(t('webexpress.pricing.basic.features', { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-neon-blue dark:text-neon-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="block w-full text-center px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold text-lg shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 hover:scale-[1.02] transition-all duration-300"
              >
                {t('webexpress.pricing.basic.cta')}
              </Link>
            </div>

            {/* Maintenance */}
            <div className="relative p-8 rounded-2xl bg-white dark:bg-[#151d2e] border border-slate-200 dark:border-white/[0.08]">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/60 text-sm font-medium mb-4">
                {t('webexpress.pricing.maintenance.badge')}
              </span>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('webexpress.pricing.maintenance.name')}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  {t('webexpress.pricing.maintenance.price')}
                </span>
                <span className="text-slate-500 dark:text-white/50">
                  {t('webexpress.pricing.maintenance.period')}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {(t('webexpress.pricing.maintenance.features', { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-neon-blue dark:text-neon-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
              >
                {t('webexpress.pricing.maintenance.cta')}
              </Link>
            </div>
          </div>

          {/* Extras */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              {t('webexpress.pricing.extras.title')}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['photo', 'content', 'catalog', 'english', 'analytics'].map((extra) => (
                <div key={extra} className="p-4 rounded-xl bg-white dark:bg-[#151d2e] border border-slate-200 dark:border-white/[0.08] text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {t(`webexpress.pricing.extras.items.${extra}.name`)}
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {t(`webexpress.pricing.extras.items.${extra}.price`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Info */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              {t('webexpress.pricing.payment.title')}
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 dark:text-slate-300">
              {(t('webexpress.pricing.payment.methods', { returnObjects: true }) as string[]).map((method: string, i: number) => (
                <span key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neon-blue dark:text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {method}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              {t('webexpress.pricing.payment.accepts')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white dark:bg-[#0d1321]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {t('webexpress.why.title')}
            </h2>
          </div>

          <div
            ref={whyRef.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              whyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {whyItems.map((item, index) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151d2e] border border-slate-200 dark:border-white/[0.08] hover:border-neon-blue/30 dark:hover:border-neon-cyan/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-blue/10 dark:bg-neon-cyan/10 text-neon-blue dark:text-neon-cyan mb-4">
                  {whyIcons[item]}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {t(`webexpress.why.items.${item}.title`)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(`webexpress.why.items.${item}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50 dark:bg-[#0a0f1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              {t('webexpress.faq.title')}
            </h2>
          </div>

          <div
            ref={faqRef.ref}
            className={`max-w-3xl mx-auto transition-all duration-1000 ${
              faqRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {faqItems.map((item) => (
              <FAQItem
                key={item}
                questionKey={`webexpress.faq.items.${item}.question`}
                answerKey={`webexpress.faq.items.${item}.answer`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neon-blue/10 via-white to-neon-cyan/10 dark:from-neon-blue/20 dark:via-[#0d1321] dark:to-neon-cyan/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            {t('webexpress.cta.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('webexpress.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold text-lg shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 hover:scale-105 transition-all duration-300"
          >
            {t('webexpress.cta.button')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {t('webexpress.cta.response')}
          </p>
        </div>
      </section>
    </>
  )
}
