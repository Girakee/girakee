import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  path?: string
}

export default function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = `${title} | Girakee`
  const url = `https://www.girakee.com${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:url', url, true)
    setMeta('og:type', 'website', true)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [fullTitle, description, url])

  return null
}
