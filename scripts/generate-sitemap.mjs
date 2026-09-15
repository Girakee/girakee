import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteUrl = 'https://www.girakee.com'
const lastmod = new Date().toISOString().slice(0, 10)

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/engineering', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/workforce', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/enablement', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/web-mobile', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/ai-vision', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/cloud-devops', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/cybersecurity', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/qa-automation', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/data-engineering', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/dedicated-pods', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/staff-augmentation', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/contract-to-hire', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/it-recruitment', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/corporate-training', priority: '0.7', changefreq: 'weekly' },
  { path: '/services/on-job-training', priority: '0.7', changefreq: 'weekly' },
  { path: '/services/internship', priority: '0.7', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/products', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/rozgar-ai', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/digital-employees', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries', priority: '0.8', changefreq: 'monthly' },
  { path: '/technology', priority: '0.8', changefreq: 'monthly' },
  { path: '/engagement-models', priority: '0.7', changefreq: 'monthly' },
  { path: '/careers', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const outputPath = path.resolve(__dirname, '../public/sitemap.xml')
fs.writeFileSync(outputPath, xml)
console.log(`Generated sitemap with ${routes.length} URLs -> ${outputPath}`)
