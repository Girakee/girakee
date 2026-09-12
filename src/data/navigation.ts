export type NavLink = {
  label: string
  path: string
}

export type NavGroup = {
  title: string
  path: string
  items: NavLink[]
}

export const softwareMenu: NavLink[] = [
  { label: 'Web & Mobile Engineering', path: '/services/web-mobile' },
  { label: 'Applied AI & Computer Vision', path: '/services/ai-vision' },
  { label: 'Cloud Architecture & DevOps', path: '/services/cloud-devops' },
  { label: 'Zero-Trust Cybersecurity', path: '/services/cybersecurity' },
  { label: 'QA Automation & Testing', path: '/services/qa-automation' },
  { label: 'Data Engineering & Analytics', path: '/services/data-engineering' },
]

export const manpowerMenu: NavLink[] = [
  { label: 'Dedicated Engineering Pods', path: '/services/dedicated-pods' },
  { label: 'Staff Augmentation (T&M)', path: '/services/staff-augmentation' },
  { label: 'Contract-to-Hire', path: '/services/contract-to-hire' },
  { label: 'IT Recruitment & Tech Search', path: '/services/it-recruitment' },
]

export const trainingMenu: NavLink[] = [
  { label: 'Corporate Tech Enablement', path: '/services/corporate-training' },
  { label: 'Graduate Engineering Residency (6-Month OJT)', path: '/services/on-job-training' },
  { label: 'Student Internship Program (3-Month Track)', path: '/services/internship' },
]

export const productsMenu: NavLink[] = [
  { label: 'Rozgar.ai Digital HR Employee', path: '/products/rozgar-ai' },
]

export const serviceGroups: NavGroup[] = [
  { title: 'Core Engineering & AI', path: '/services/engineering', items: softwareMenu },
  { title: 'Workforce Solutions & Pods', path: '/services/workforce', items: manpowerMenu },
  { title: 'Corporate Upskilling & Incubation', path: '/services/enablement', items: trainingMenu },
]

export type MegaKey = 'services' | 'products'

export const megaMenus: Record<
  MegaKey,
  { title: string; items?: NavLink[]; groups?: NavGroup[] }
> = {
  services: { title: 'Services', groups: serviceGroups },
  products: { title: 'Products', items: productsMenu },
}

export const mainNav: { label: string; path: string; mega?: MegaKey }[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/solutions', mega: 'services' },
  { label: 'Products', path: '/products', mega: 'products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Careers', path: '/careers' },
]

function linkMatches(link: NavLink, pathname: string): boolean {
  if (link.path === pathname) return true
  return link.path !== '/' && pathname.startsWith(`${link.path}/`)
}

export function megaContainsPath(
  mega: (typeof megaMenus)[MegaKey],
  pathname: string,
): boolean {
  if (mega.items?.some((item) => linkMatches(item, pathname))) return true
  return Boolean(
    mega.groups?.some(
      (group) => group.path === pathname || group.items.some((item) => linkMatches(item, pathname)),
    ),
  )
}
