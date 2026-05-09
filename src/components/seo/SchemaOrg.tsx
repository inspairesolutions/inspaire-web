import { Helmet } from 'react-helmet-async'
import { COMPANY } from '../../lib/constants'

interface SchemaOrgProps {
  page?: 'home' | 'services' | 'contact' | 'webexpress'
}

export default function SchemaOrg({ page = 'home' }: SchemaOrgProps) {
  const baseUrl = 'https://inspaire-solutions.com'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: baseUrl,
    logo: `${baseUrl}/img/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: COMPANY.email,
      telephone: COMPANY.phone,
      contactType: 'customer service',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: COMPANY.name,
    image: `${baseUrl}/img/logo.png`,
    url: baseUrl,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    priceRange: '$$',
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Consulting and Development',
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Consulting',
            description: 'Strategic guidance on AI adoption and implementation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agent Development',
            description: 'Intelligent agents that automate tasks and enhance experiences',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Optimization',
            description: 'Streamlined workflows with predictive analytics and automation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom AI Solutions',
            description: 'Tailor-made AI solutions for complex challenges',
          },
        },
      ],
    },
  }

  const webExpressServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WebExpress',
    description: 'Professional websites for local businesses, ready in 7 days. Custom design, SEO optimized, hosting included.',
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      price: '690',
      priceCurrency: 'USD',
      description: 'Complete website package with 5 pages, custom design, SEO, and 1 year hosting',
    },
  }

  const webExpressFAQSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Really in 7 days?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The standard process is: Day 1-2 we gather info, Day 3-4 we develop, Day 5 review with you, Day 6-7 adjustments and launch. It can be faster if you have all the content ready.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I need to prepare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ideally: logo (if you have one), photos of your business/products, text about your services, your social media. But if you don't have anything, no problem. We'll get it.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I make changes later?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Of course. We include 2 rounds of changes during development. After launch, you can hire maintenance ($20/month), pay for specific changes ($40/hour), or learn to edit basic content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need technical knowledge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. We take care of EVERYTHING: domain, hosting, email, configuration, publishing. You just provide your business content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does it work on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '100%. In fact, we optimize for mobile first because 75% of searches are from phones.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I appear on Google automatically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your website will be SEO optimized, but appearing on the first page takes time (1-3 months) and depends on competition. We lay the groundwork.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer a guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. If you're not satisfied within 30 days, we refund 100% of your money. No questions. No complications.",
        },
      },
    ],
  }

  const getSchemas = () => {
    switch (page) {
      case 'services':
        return [organizationSchema, serviceSchema]
      case 'contact':
        return [organizationSchema, localBusinessSchema]
      case 'webexpress':
        return [organizationSchema, webExpressServiceSchema, webExpressFAQSchema]
      default:
        return [organizationSchema, localBusinessSchema, serviceSchema]
    }
  }

  return (
    <Helmet>
      {getSchemas().map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
