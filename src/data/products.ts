import type { SceneType } from './sceneThemes'

export interface Product {
  id: string
  title: string
  shortTitle: string
  path: string
  description: string
  overview: string
  detailedOverview: string
  capabilities: string[]
  deliverables: string[]
  process: string[]
  useCases: string[]
  scene: SceneType
}

export const products: Product[] = [
  {
    id: 'rozgar-ai',
    title: 'Rozgar.ai Digital HR Employee',
    shortTitle: 'Rozgar.ai',
    path: '/products/rozgar-ai',
    scene: 'talent',
    description:
      'Rozgar.ai is Girakee\'s Digital HR Employee for recruitment, screening, onboarding, payroll support, leave, and HR operations.',
    overview:
      'Rozgar.ai runs hire-to-retire work in your ATS and HRIS. It screens, schedules, opens records, and escalates people decisions to HR.',
    detailedOverview:
      'Rozgar.ai is the packaged HR product on the AI Digital Employee platform. It is configured with your roles, policies, and approvers. Offers, terminations, and sensitive cases stay with named HR owners.',
    capabilities: [
      'Recruitment intake',
      'Resume screening',
      'Interview scheduling',
      'Onboarding and offboarding',
      'Payroll and benefits files',
      'HR support',
    ],
    deliverables: [
      'Configured Rozgar.ai employee',
      'ATS and HRIS connectors',
      'Exception queue',
      'Audit trail',
      'Operations dashboard',
      'Handover training',
    ],
    process: ['HR process workshop', 'System connect', 'Rule setup', 'Pilot hiring desk', 'Production'],
    useCases: [
      'High-volume screening',
      'New hire setup',
      'Leave operations',
      'HR helpdesk',
    ],
  },
]

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}

export function getProductByPath(path: string) {
  return products.find((p) => p.path === path)
}
