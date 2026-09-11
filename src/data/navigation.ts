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
  { label: 'Web & Mobile Development', path: '/web-mobile-development' },
  { label: 'Artificial Intelligence & ML', path: '/ai-engineering' },
  { label: 'Cloud & DevOps', path: '/cloud-devops' },
  { label: 'Cybersecurity', path: '/cybersecurity' },
  { label: 'UI/UX Design', path: '/ui-ux-design' },
  { label: 'Software Testing & QA', path: '/software-testing' },
  { label: 'Intelligent QA', path: '/intelligent-qa' },
  { label: 'Data Analytics & BI', path: '/data-analytics' },
]

export const manpowerMenu: NavLink[] = [
  { label: 'Recruitment', path: '/recruitment' },
  { label: 'Contract to Hire', path: '/contract-to-hire' },
  { label: 'Managed Services', path: '/managed-services' },
  { label: 'Time and Material', path: '/time-and-material' },
]

export const trainingMenu: NavLink[] = [
  { label: 'Internship', path: '/internship' },
  { label: 'Corporate Training', path: '/corporate-training' },
  { label: 'On Job Training', path: '/on-job-training' },
]

export const productsMenu: NavLink[] = [
  { label: 'Rozgar.ai Digital HR Employee', path: '/products/rozgar-ai' },
]

export const serviceGroups: NavGroup[] = [
  { title: 'Software Services', path: '/services', items: softwareMenu },
  { title: 'Manpower Solutions', path: '/manpower-solutions', items: manpowerMenu },
  { title: 'Training & Internships', path: '/training', items: trainingMenu },
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
