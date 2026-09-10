export const servicesMenu = [
  { label: 'Web & Mobile Development', path: '/web-mobile-development' },
  { label: 'Artificial Intelligence & ML', path: '/ai-engineering' },
  { label: 'Computer Vision', path: '/computer-vision' },
  { label: 'Cloud & DevOps', path: '/cloud-devops' },
  { label: 'Cybersecurity', path: '/cybersecurity' },
  { label: 'UI/UX Design', path: '/ui-ux-design' },
  { label: 'Software Testing & QA', path: '/software-testing' },
  { label: 'Intelligent QA', path: '/intelligent-qa' },
  { label: 'Data Analytics & BI', path: '/data-analytics' },
  { label: 'Talent Outsourcing', path: '/talent-outsourcing' },
  { label: 'Corporate Training', path: '/training' },
]

export const companyMenu = [
  { label: 'About', path: '/about' },
  { label: 'Engagement Models', path: '/engagement-models' },
  { label: 'Internship', path: '/internship' },
  { label: 'Training', path: '/training' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const mainNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services', mega: 'services' as const },
  { label: 'AI Engineering', path: '/ai-engineering' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Technology', path: '/technology' },
  { label: 'Company', path: '/about', mega: 'company' as const },
]
