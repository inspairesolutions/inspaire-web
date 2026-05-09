import { useTranslation } from 'react-i18next'
import SEOHead from '../components/seo/SEOHead'
import SchemaOrg from '../components/seo/SchemaOrg'
import Hero from '../components/sections/Hero'
import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        path="/contact"
      />
      <SchemaOrg page="contact" />

      <Hero
        variant="simple"
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <ContactForm />
    </>
  )
}
