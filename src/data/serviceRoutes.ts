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
      'AI-powered drawing validation, computer vision inspection, rule engines, and automated quality assurance from Girakee.',
  },
  {
    path: '/data-analytics',
    serviceId: 'data-analytics',
    seoTitle: 'Data Analytics & BI',
    seoDescription:
      'Data pipelines, warehousing, dashboards, and business intelligence platforms from Girakee.',
  },
  {
    path: '/time-and-material',
    serviceId: 'staff-augmentation',
    seoTitle: 'Time and Material',
    seoDescription:
      'Pre-vetted engineers who join your squads on time and material. Full-stack, AI, cloud, QA, and data talent from Girakee Bengaluru.',
  },
  {
    path: '/managed-services',
    serviceId: 'dedicated-teams',
    seoTitle: 'Managed Services',
    seoDescription:
      'Cross-functional delivery pods that own a product or workstream for your roadmap, from Girakee.',
  },
  {
    path: '/contract-to-hire',
    serviceId: 'contract-to-hire',
    seoTitle: 'Contract to Hire',
    seoDescription:
      'Evaluate engineers on live work before you hire. Contract first, convert when the fit is proven.',
  },
  {
    path: '/recruitment',
    serviceId: 'it-recruitment',
    seoTitle: 'Recruitment',
    seoDescription:
      'Engineer-led permanent hiring for software, AI, cloud, and QA roles from Girakee.',
  },
  {
    path: '/internship',
    serviceId: 'internship',
    seoTitle: 'Internship',
    seoDescription:
      'Six-month internship on live industry projects with an experience letter from Girakee.',
  },
  {
    path: '/corporate-training',
    serviceId: 'corporate-training',
    seoTitle: 'Corporate Training',
    seoDescription:
      'Practitioner-led workshops for engineering teams, customised to your stack, from Girakee.',
  },
  {
    path: '/on-job-training',
    serviceId: 'on-job-training',
    seoTitle: 'On Job Training',
    seoDescription:
      'Structured on-the-job training on live delivery with a mentor, from Girakee.',
  },
]

export function getServicePath(serviceId: string): string {
  const route = serviceRoutes.find((r) => r.serviceId === serviceId)
  if (route) return route.path
  if (serviceId === 'talent-outsourcing') return '/time-and-material'
  if (serviceId === 'computer-vision') return '/intelligent-qa'
  if (serviceId === 'technical-bootcamps') return '/on-job-training'
  return '/services'
}
