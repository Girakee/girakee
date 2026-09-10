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
    seoTitle: 'Web & Mobile Development',
    seoDescription:
      'Custom web applications, iOS and Android apps, and progressive web apps built for scale by Girakee.',
  },
  {
    path: '/ai-engineering',
    serviceId: 'ai-ml',
    seoTitle: 'AI Engineering',
    seoDescription:
      'Production ML, generative AI, agentic workflows, and intelligent automation from Girakee.',
  },
  {
    path: '/computer-vision',
    serviceId: 'computer-vision',
    seoTitle: 'Computer Vision',
    seoDescription:
      'Object detection, OCR, engineering drawing analysis, and visual inspection pipelines from Girakee.',
  },
  {
    path: '/cloud-devops',
    serviceId: 'cloud-devops',
    seoTitle: 'Cloud & DevOps',
    seoDescription:
      'AWS, Azure, and GCP architecture, Kubernetes, IaC, and CI/CD automation from Girakee.',
  },
  {
    path: '/cybersecurity',
    serviceId: 'cybersecurity',
    seoTitle: 'Cybersecurity',
    seoDescription:
      'Zero Trust architecture, IAM, threat detection, and security automation from Girakee.',
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
    seoTitle: 'Software Testing & QA',
    seoDescription:
      'Test automation, performance testing, API validation, and continuous quality engineering from Girakee.',
  },
  {
    path: '/intelligent-qa',
    serviceId: 'intelligent-qa',
    seoTitle: 'Intelligent QA',
    seoDescription:
      'AI-powered drawing validation, rule engines, and automated quality assurance from Girakee.',
  },
  {
    path: '/data-analytics',
    serviceId: 'data-analytics',
    seoTitle: 'Data Analytics & BI',
    seoDescription:
      'Data pipelines, warehousing, dashboards, and business intelligence platforms from Girakee.',
  },
  {
    path: '/talent-outsourcing',
    serviceId: 'talent-outsourcing',
    seoTitle: 'Talent Outsourcing',
    seoDescription:
      'Vetted engineers, dedicated teams, and flexible staff augmentation from Girakee Bengaluru.',
  },
]

export function getServicePath(serviceId: string): string {
  const route = serviceRoutes.find((r) => r.serviceId === serviceId)
  if (route) return route.path
  if (serviceId === 'corporate-training') return '/training'
  return '/services'
}
