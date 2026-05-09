import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import { ROUTES } from '../lib/constants'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title="404 - Page Not Found | InspAIre Solutions"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI consulting and development services."
        path="/404"
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <div className="absolute inset-0 bg-neon-purple/10 dark:bg-neon-purple/20 rounded-full blur-[120px]" />
            <div className="absolute inset-20 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-full blur-[100px]" />
          </div>
        </div>

        <div className="container-custom relative z-10 text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-[150px] md:text-[200px] font-heading font-bold leading-none gradient-text">
              404
            </span>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            {t('notFound.title', 'Page Not Found')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/60 max-w-md mx-auto mb-8">
            {t('notFound.description', "The page you're looking for doesn't exist or has been moved.")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={ROUTES.home} className="btn-glow">
              <span>{t('notFound.backHome', 'Back to Home')}</span>
            </Link>
            <Link to={ROUTES.contact} className="btn-outline">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 max-w-md mx-auto">
            <p className="text-sm text-slate-500 dark:text-white/40 mb-4">
              {t('notFound.quickLinks', 'Or try these pages:')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={ROUTES.services}
                className="text-sm text-neon-blue dark:text-neon-cyan hover:underline"
              >
                {t('nav.services')}
              </Link>
              <Link
                to={ROUTES.webexpress}
                className="text-sm text-neon-blue dark:text-neon-cyan hover:underline"
              >
                WebExpress
              </Link>
              <Link
                to={ROUTES.contact}
                className="text-sm text-neon-blue dark:text-neon-cyan hover:underline"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
