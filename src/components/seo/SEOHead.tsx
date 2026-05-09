import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { COMPANY } from '../../lib/constants'

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
  type?: 'website' | 'article'
}

export default function SEOHead({
  title,
  description,
  path = '',
  type = 'website',
}: SEOHeadProps) {
  const { i18n } = useTranslation()
  const baseUrl = 'https://inspaire-solutions.com'
  const fullUrl = `${baseUrl}${path}`
  const imageUrl = `${baseUrl}/img/logo.png`

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content={i18n.language === 'es' ? 'es_ES' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${path}`} />
    </Helmet>
  )
}
