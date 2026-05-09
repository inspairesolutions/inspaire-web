import { useTranslation } from 'react-i18next'
import SEOHead from '../components/seo/SEOHead'
import SchemaOrg from '../components/seo/SchemaOrg'
import Hero from '../components/sections/Hero'
import ServicesSection from '../components/sections/Services'
import Approach from '../components/sections/Approach'
import CTA from '../components/sections/CTA'

export default function Services() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t('seo.services.title')}
        description={t('seo.services.description')}
        path="/services"
      />
      <SchemaOrg page="services" />

      <Hero
        variant="simple"
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />
      <ServicesSection variant="full" />
      <Approach />
      <CTA />
    </>
  )
}
