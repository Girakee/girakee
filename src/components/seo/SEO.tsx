import { useEffect } from 'react'
import { company } from '../../data/company'

export interface SEOProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'product'
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

const SITE_NAME = 'Girakee Software Services'
const DEFAULT_IMAGE = `${company.website}/girakee-logo.png`
const TWITTER_HANDLE = '@girakee'

function upsertMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const id = 'girakee-page-jsonld'
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

export default function SEO({
  title,
  description,
  path = '',
  keywords = [],
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = `${title} | Girakee`
  const url = `${company.website}${path}`

  useEffect(() => {
    document.title = fullTitle

    upsertMeta('description', description)
    upsertMeta('keywords', keywords.join(', '))
    upsertMeta('author', company.legalName)
    upsertMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large')

    upsertMeta('og:title', fullTitle, true)
    upsertMeta('og:description', description, true)
    upsertMeta('og:url', url, true)
    upsertMeta('og:type', type, true)
    upsertMeta('og:site_name', SITE_NAME, true)
    upsertMeta('og:image', image, true)
    upsertMeta('og:locale', 'en_IN', true)

    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:site', TWITTER_HANDLE)
    upsertMeta('twitter:title', fullTitle)
    upsertMeta('twitter:description', description)
    upsertMeta('twitter:image', image)

    upsertLink('canonical', url)

    const defaultJsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.legalName,
        url: company.website,
        logo: DEFAULT_IMAGE,
        email: company.email,
        telephone: company.phone,
        sameAs: ['https://www.linkedin.com/company/girakee-software-services'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rajajinagar',
          addressRegion: 'Bengaluru',
          addressCountry: 'IN',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: company.website,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${company.website}/services?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: fullTitle,
        description,
        url,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: company.website,
        },
      },
    ]

    upsertJsonLd(jsonLd ?? defaultJsonLd)
  }, [fullTitle, description, url, image, type, noindex, keywords, jsonLd])

  return null
}

export function serviceJsonLd(input: {
  name: string
  description: string
  path: string
  provider?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${company.website}${input.path}`,
    provider: {
      '@type': 'Organization',
      name: input.provider ?? company.legalName,
      url: company.website,
    },
    areaServed: ['IN', 'AE', 'DE', 'GB', 'US', 'CA', 'EU'],
  }
}

export function jobPostingJsonLd(job: {
  title: string
  description: string
  location: string
  type: string
  id: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: company.legalName,
      value: job.id,
    },
    datePosted: new Date().toISOString().slice(0, 10),
    employmentType: job.type,
    hiringOrganization: {
      '@type': 'Organization',
      name: company.legalName,
      sameAs: company.website,
      logo: DEFAULT_IMAGE,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN',
      },
    },
  }
}
