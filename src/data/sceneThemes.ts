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
  | 'classroom'

export const routeScenes: Record<string, SceneType> = {
  '/': 'hero',
  '/about': 'network',
  '/services': 'orbit',
  '/services/engineering': 'orbit',
  '/services/workforce': 'talent',
  '/services/enablement': 'terminal',
  '/services/web-mobile': 'devices',
  '/services/ai-vision': 'neural',
  '/services/cloud-devops': 'cloud',
  '/services/cybersecurity': 'shield',
  '/services/qa-automation': 'pipeline',
  '/services/data-engineering': 'data',
  '/services/dedicated-pods': 'talent',
  '/services/staff-augmentation': 'talent',
  '/services/contract-to-hire': 'talent',
  '/services/it-recruitment': 'talent',
  '/services/corporate-training': 'terminal',
  '/services/on-job-training': 'terminal',
  '/services/internship': 'terminal',
  '/solutions': 'orbit',
  '/products': 'vision',
  '/products/digital-employees': 'neural',
  '/products/rozgar-ai': 'talent',
  '/industries': 'orbit',
  '/technology': 'orbit',
  '/engagement-models': 'talent',
  '/careers': 'classroom',
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
  'staff-augmentation': 'talent',
  'dedicated-teams': 'talent',
  'contract-to-hire': 'talent',
  'it-recruitment': 'talent',
  internship: 'terminal',
  'corporate-training': 'terminal',
  'on-job-training': 'terminal',
}

export function getSceneForRoute(path: string): SceneType {
  if (path.startsWith('/products/digital-employees')) return 'neural'
  return routeScenes[path] ?? 'orbit'
}

export function getSceneForService(serviceId: string): SceneType {
  return serviceScenes[serviceId] ?? 'orbit'
}
