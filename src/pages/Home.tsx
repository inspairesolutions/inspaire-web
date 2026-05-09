import { useTranslation } from 'react-i18next'
import SEOHead from '../components/seo/SEOHead'
import SchemaOrg from '../components/seo/SchemaOrg'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import FeaturedService from '../components/sections/FeaturedService'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Approach from '../components/sections/Approach'
import Clients from '../components/sections/Clients'
import CTA from '../components/sections/CTA'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        path="/"
      />
      <SchemaOrg page="home" />

      <Hero />
      <Services variant="preview" />
      <FeaturedService />
      <WhyChooseUs />
      <Approach />
      <Clients />
      <CTA />
    </>
  )
}
