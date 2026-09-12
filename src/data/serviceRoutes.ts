export interface ServiceRoute {
  path: string
  serviceId: string
  seoTitle?: string
  seoDescription?: string
}

export const serviceRoutes: ServiceRoute[] = [
  {
    path: '/web-mobile-development',
    serviceId: 'web-mobile',
    seoTitle: 'Web & Mobile Engineering',
    seoDescription:
      'High-performance web ecosystems, native mobile apps, and scalable microservices engineered from discovery to production by Girakee.',
  },
  {
    path: '/ai-engineering',
    serviceId: 'ai-ml',
    seoTitle: 'Applied AI & Computer Vision',
    seoDescription:
      'Production AI architectures, custom computer vision models, predictive systems, and autonomous agentic workflows from Girakee.',
  },
  {
    path: '/cloud-devops',
    serviceId: 'cloud-devops',
    seoTitle: 'Cloud Architecture & DevOps',
    seoDescription:
      'Cloud-native infrastructure, container orchestration, and automated CI/CD for resilient, high-availability deployments from Girakee.',
  },
  {
    path: '/cybersecurity',
    serviceId: 'cybersecurity',
    seoTitle: 'Zero-Trust Cybersecurity',
    seoDescription:
      'End-to-end security posture engineering, Zero-Trust network architecture, and continuous threat mitigation from Girakee.',
  },
  {
    path: '/ui-ux-design',
    serviceId: 'ui-ux',
    seoTitle: 'UI/UX Design',
    seoDescription:
      'User research, design systems, prototyping, and accessible front-end implementation from Girakee.',
  },
  {
    path: '/software-testing',
    serviceId: 'software-testing',
    seoTitle: 'QA Automation & Intelligent Testing',
    seoDescription:
      'Automated regression frameworks, high-load performance validation, and AI-powered computer vision document audits from Girakee.',
  },
  {
    path: '/intelligent-qa',
    serviceId: 'intelligent-qa',
    seoTitle: 'Intelligent QA',
    seoDescription:
      'AI-powered drawing validation, computer vision inspection, rule engines, and automated quality assurance from Girakee.',
  },
  {
    path: '/data-analytics',
    serviceId: 'data-analytics',
    seoTitle: 'Data Engineering & Analytics',
    seoDescription:
      'Modern data warehousing, scalable ETL/ELT pipelines, and interactive executive intelligence dashboards from Girakee.',
  },
  {
    path: '/time-and-material',
    serviceId: 'staff-augmentation',
    seoTitle: 'Staff Augmentation',
    seoDescription:
      'Girakee delivers enterprise workforce solutions, IT staff augmentation, and technical manpower services for scaling companies in UAE, Europe, and India.',
  },
  {
    path: '/managed-services',
    serviceId: 'dedicated-teams',
    seoTitle: 'Dedicated Engineering Pods',
    seoDescription:
      'Autonomous, cross-functional engineering squads accountable for milestone delivery, system quality, and sprint execution from Girakee.',
  },
  {
    path: '/contract-to-hire',
    serviceId: 'contract-to-hire',
    seoTitle: 'Contract-to-Hire',
    seoDescription:
      'De-risk long-term talent acquisition through trial-based project execution before permanent conversion with Girakee.',
  },
  {
    path: '/recruitment',
    serviceId: 'it-recruitment',
    seoTitle: 'IT Recruitment & Technical Staffing Services',
    seoDescription:
      'Specialized IT recruitment and technical talent placement in Bengaluru and Dubai. We connect scaling enterprises with pre-vetted senior software engineers, tech leads, and specialized tech talent.',
  },
  {
    path: '/internship',
    serviceId: 'internship',
    seoTitle: 'Student Internship (3-Month)',
    seoDescription:
      'A flexible 3-month structured internship for college students to build hands-on software development skills with Girakee.',
  },
  {
    path: '/corporate-training',
    serviceId: 'corporate-training',
    seoTitle: 'Corporate Upskilling',
    seoDescription:
      'Bespoke technical capability programs designed around your active tech stack and led by practicing software architects at Girakee.',
  },
  {
    path: '/on-job-training',
    serviceId: 'on-job-training',
    seoTitle: 'On-the-Job Training (6-Month)',
    seoDescription:
      'A 6-month intensive engineering residency for recent graduates to gain verifiable production experience on live enterprise systems.',
  },
]

export function getServicePath(serviceId: string): string {
  const route = serviceRoutes.find((r) => r.serviceId === serviceId)
  if (route) return route.path
  if (serviceId === 'talent-outsourcing') return '/time-and-material'
  if (serviceId === 'computer-vision') return '/ai-engineering'
  if (serviceId === 'technical-bootcamps') return '/on-job-training'
  return '/services'
}
