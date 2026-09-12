export interface ServiceRoute {
  path: string
  serviceId: string
  seoTitle?: string
  seoDescription?: string
}

export const serviceRoutes: ServiceRoute[] = [
  {
    path: '/services/web-mobile',
    serviceId: 'web-mobile',
    seoTitle: 'Web & Mobile Engineering',
    seoDescription:
      'High-performance web, mobile, and platform engineering from Girakee—scalable applications, design systems, and high-concurrency microservices.',
  },
  {
    path: '/services/ai-vision',
    serviceId: 'ai-ml',
    seoTitle: 'Applied AI & Computer Vision',
    seoDescription:
      'Production-grade applied AI and computer vision from Girakee: custom deep learning, multimodal extraction, and autonomous agentic workflows.',
  },
  {
    path: '/services/cloud-devops',
    serviceId: 'cloud-devops',
    seoTitle: 'Cloud Architecture & DevOps',
    seoDescription:
      'Resilient multi-cloud architecture, Kubernetes orchestration, and automated CI/CD engineered for high availability from Girakee.',
  },
  {
    path: '/services/cybersecurity',
    serviceId: 'cybersecurity',
    seoTitle: 'Zero-Trust Cybersecurity',
    seoDescription:
      'Proactive Zero-Trust cybersecurity and DevSecOps from Girakee: IAM, secrets management, SAST/DAST, and continuous compliance.',
  },
  {
    path: '/services/qa-automation',
    serviceId: 'software-testing',
    seoTitle: 'QA Automation & Intelligent Testing',
    seoDescription:
      'Automated QA and AI-powered schematic verification from Girakee: Playwright suites, load testing, and computer-vision blueprint inspection.',
  },
  {
    path: '/services/data-engineering',
    serviceId: 'data-analytics',
    seoTitle: 'Data Engineering & Analytics',
    seoDescription:
      'Enterprise data engineering and business intelligence from Girakee: lakehouses, streaming pipelines, and executive dashboards.',
  },
  {
    path: '/services/dedicated-pods',
    serviceId: 'dedicated-teams',
    seoTitle: 'Dedicated Engineering Pods',
    seoDescription:
      'Autonomous dedicated engineering pods from Girakee—cross-functional squads accountable for end-to-end roadmap delivery under SLAs.',
  },
  {
    path: '/services/staff-augmentation',
    serviceId: 'staff-augmentation',
    seoTitle: 'Staff Augmentation (T&M)',
    seoDescription:
      'Senior technical staff augmentation from Girakee. Embed pre-vetted engineers into your sprints with dedicated timezone overlap.',
  },
  {
    path: '/services/contract-to-hire',
    serviceId: 'contract-to-hire',
    seoTitle: 'Contract-to-Hire Engineering',
    seoDescription:
      'Evaluate engineers on production tickets before a permanent hire. Girakee contract-to-hire placements with transparent conversion.',
  },
  {
    path: '/services/it-recruitment',
    serviceId: 'it-recruitment',
    seoTitle: 'IT Recruitment & Specialized Tech Search',
    seoDescription:
      'Practitioner-led IT recruitment and specialized tech search from Girakee for senior developers, engineering managers, and deep-tech specialists.',
  },
  {
    path: '/services/corporate-training',
    serviceId: 'corporate-training',
    seoTitle: 'Corporate Tech Enablement',
    seoDescription:
      'Practitioner-led corporate tech enablement from Girakee: custom engineering bootcamps and architecture workshops on your stack.',
  },
  {
    path: '/services/on-job-training',
    serviceId: 'on-job-training',
    seoTitle: 'Graduate Engineering Residency (6-Month OJT)',
    seoDescription:
      'Girakee 6-month graduate engineering residency: live production code, senior mentorship, and a verified industry experience credential.',
  },
  {
    path: '/services/internship',
    serviceId: 'internship',
    seoTitle: 'Student Engineering Internship (3-Month Track)',
    seoDescription:
      'A structured 12-week Girakee engineering internship for university students. Build real software and graduate with a capstone evaluation.',
  },
]

export function getServicePath(serviceId: string): string {
  const route = serviceRoutes.find((r) => r.serviceId === serviceId)
  if (route) return route.path
  if (serviceId === 'talent-outsourcing') return '/services/staff-augmentation'
  if (serviceId === 'computer-vision') return '/services/ai-vision'
  if (serviceId === 'ui-ux') return '/services/web-mobile'
  if (serviceId === 'intelligent-qa') return '/services/qa-automation'
  if (serviceId === 'technical-bootcamps') return '/services/on-job-training'
  return '/services/engineering'
}
