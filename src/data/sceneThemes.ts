export type SceneType =
  | 'hero'
  | 'neural'
  | 'vision'
  | 'cloud'
  | 'shield'
  | 'data'
  | 'devices'
  | 'wireframe'
  | 'pipeline'
  | 'qa-validation'
  | 'terminal'
  | 'orbit'
  | 'network'
  | 'talent'
  | 'pods'
  | 'staff'
  | 'classroom'
  | 'office'
  | 'capstone'
  | 'hire'
  | 'recruit'

export const routeScenes: Record<string, SceneType> = {
  '/': 'hero',
  '/about': 'network',
  '/services': 'orbit',
  '/services/engineering': 'orbit',
  '/services/workforce': 'talent',
  '/services/enablement': 'classroom',
  '/services/web-mobile': 'devices',
  '/services/ai-vision': 'neural',
  '/services/cloud-devops': 'cloud',
  '/services/cybersecurity': 'shield',
  '/services/qa-automation': 'pipeline',
  '/services/data-engineering': 'data',
  '/services/dedicated-pods': 'pods',
  '/services/staff-augmentation': 'staff',
  '/services/contract-to-hire': 'hire',
  '/services/it-recruitment': 'recruit',
  '/services/corporate-training': 'terminal',
  '/services/on-job-training': 'classroom',
  '/services/internship': 'capstone',
  '/solutions': 'orbit',
  '/products': 'vision',
  '/products/digital-employees': 'neural',
  '/products/rozgar-ai': 'talent',
  '/industries': 'orbit',
  '/technology': 'orbit',
  '/engagement-models': 'talent',
  '/careers': 'office',
  '/contact': 'network',
}

export const serviceScenes: Record<string, SceneType> = {
  'web-mobile': 'devices',
  'ai-ml': 'neural',
  'computer-vision': 'vision',
  'cloud-devops': 'cloud',
  'cybersecurity': 'shield',
  'ui-ux': 'wireframe',
  'software-testing': 'pipeline',
  'intelligent-qa': 'qa-validation',
  'data-analytics': 'data',
  'staff-augmentation': 'staff',
  'dedicated-teams': 'pods',
  'contract-to-hire': 'hire',
  'it-recruitment': 'recruit',
  internship: 'capstone',
  'corporate-training': 'terminal',
  'on-job-training': 'classroom',
}

export function getSceneForRoute(path: string): SceneType {
  if (path.startsWith('/products/digital-employees')) return 'neural'
  return routeScenes[path] ?? 'orbit'
}

export function getSceneForService(serviceId: string): SceneType {
  return serviceScenes[serviceId] ?? 'orbit'
}
