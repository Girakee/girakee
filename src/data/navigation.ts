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
  { label: 'Web & Mobile Engineering', path: '/web-mobile-development' },
  { label: 'Applied AI & Computer Vision', path: '/ai-engineering' },
  { label: 'Cloud Architecture & DevOps', path: '/cloud-devops' },
  { label: 'Zero-Trust Cybersecurity', path: '/cybersecurity' },
  { label: 'QA Automation & Intelligent Testing', path: '/software-testing' },
  { label: 'Data Engineering & Analytics', path: '/data-analytics' },
]

export const manpowerMenu: NavLink[] = [
  { label: 'Dedicated Engineering Pods', path: '/managed-services' },
  { label: 'Staff Augmentation', path: '/time-and-material' },
  { label: 'Contract-to-Hire', path: '/contract-to-hire' },
  { label: 'Executive & Specialized Tech Search', path: '/recruitment' },
]

export const trainingMenu: NavLink[] = [
  { label: 'Corporate Upskilling', path: '/corporate-training' },
  { label: 'On-the-Job Training (6-Month)', path: '/on-job-training' },
  { label: 'Student Internship (3-Month)', path: '/internship' },
]

export const productsMenu: NavLink[] = [
  { label: 'Rozgar.ai Digital HR Employee', path: '/products/rozgar-ai' },
]

export const serviceGroups: NavGroup[] = [
  { title: 'Core Engineering & AI', path: '/services', items: softwareMenu },
  { title: 'Workforce Solutions & Pods', path: '/manpower-solutions', items: manpowerMenu },
  { title: 'Corporate Upskilling', path: '/training', items: trainingMenu },
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
