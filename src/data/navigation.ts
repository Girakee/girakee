import { industryPacks, industryPath } from './digitalEmployees'

export type NavLink = {
  label: string
  path: string
  children?: NavLink[]
}

export type NavGroup = {
  title: string
  path: string
  items: NavLink[]
}

export const industryNavLinks: NavLink[] = industryPacks.map((pack) => ({
  label: pack.title,
  path: industryPath(pack.id),
}))

export const softwareMenu: NavLink[] = [
  { label: 'Software Services Overview', path: '/services' },
  { label: 'Web & Mobile Development', path: '/web-mobile-development' },
  { label: 'Artificial Intelligence & ML', path: '/ai-engineering' },
  {
    label: 'AI Digital Employee',
    path: '/products/digital-employees',
    children: industryNavLinks,
  },
  { label: 'Computer Vision', path: '/computer-vision' },
  { label: 'Cloud & DevOps', path: '/cloud-devops' },
  { label: 'Cybersecurity', path: '/cybersecurity' },
  { label: 'UI/UX Design', path: '/ui-ux-design' },
  { label: 'Software Testing & QA', path: '/software-testing' },
  { label: 'Intelligent QA', path: '/intelligent-qa' },
  { label: 'Data Analytics & BI', path: '/data-analytics' },
]

export const manpowerMenu: NavLink[] = [
  { label: 'Manpower Overview', path: '/manpower-solutions' },
  { label: 'Staff Augmentation', path: '/staff-augmentation' },
  { label: 'Dedicated Teams', path: '/dedicated-teams' },
  { label: 'Contract-to-Hire', path: '/contract-to-hire' },
  { label: 'IT Recruitment', path: '/it-recruitment' },
  { label: 'Engagement Models', path: '/engagement-models' },
]

export const trainingMenu: NavLink[] = [
  { label: 'Training Overview', path: '/training' },
  { label: 'Internship & OJT', path: '/internship' },
  { label: 'Corporate Training', path: '/corporate-training' },
  { label: 'Technical Bootcamps', path: '/technical-bootcamps' },
  { label: 'Careers', path: '/careers' },
]

export const productsMenu: NavLink[] = [
  { label: 'Rozgar.ai Digital HR Employee', path: '/products/rozgar-ai' },
]

export const solutionsGroups: NavGroup[] = [
  { title: 'Software Services', path: '/services', items: softwareMenu },
  { title: 'Manpower Solutions', path: '/manpower-solutions', items: manpowerMenu },
  { title: 'Training & Internships', path: '/training', items: trainingMenu },
]

export type MegaKey = 'solutions' | 'products'

export const megaMenus: Record<
  MegaKey,
  { title: string; items?: NavLink[]; groups?: NavGroup[] }
> = {
  solutions: { title: 'Solutions', groups: solutionsGroups },
  products: { title: 'Products', items: productsMenu },
}

export const mainNav: { label: string; path: string; mega?: MegaKey }[] = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions', mega: 'solutions' },
  { label: 'Products', path: '/products', mega: 'products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function linkMatches(link: NavLink, pathname: string): boolean {
  if (link.path === pathname) return true
  if (link.path !== '/' && pathname.startsWith(`${link.path}/`)) return true
  return Boolean(link.children?.some((child) => linkMatches(child, pathname)))
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
