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

export const routeScenes: Record<string, SceneType> = {
  '/': 'hero',
  '/about': 'network',
  '/services': 'orbit',
  '/web-mobile-development': 'devices',
  '/ai-engineering': 'neural',
  '/computer-vision': 'vision',
  '/cloud-devops': 'cloud',
  '/cybersecurity': 'shield',
  '/ui-ux-design': 'wireframe',
  '/software-testing': 'pipeline',
  '/intelligent-qa': 'qa-validation',
  '/data-analytics': 'data',
  '/manpower-solutions': 'talent',
  '/staff-augmentation': 'talent',
  '/dedicated-teams': 'talent',
  '/contract-to-hire': 'talent',
  '/it-recruitment': 'talent',
  '/talent-outsourcing': 'talent',
  '/solutions': 'orbit',
  '/products': 'vision',
  '/products/digital-employees': 'neural',
  '/products/rozgar-ai': 'talent',
  '/industries': 'orbit',
  '/technology': 'orbit',
  '/engagement-models': 'talent',
  '/training': 'terminal',
  '/internship': 'terminal',
  '/corporate-training': 'terminal',
  '/technical-bootcamps': 'terminal',
  '/careers': 'network',
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
  'internship': 'terminal',
  'corporate-training': 'terminal',
  'technical-bootcamps': 'terminal',
}

export function getSceneForRoute(path: string): SceneType {
  if (path.startsWith('/products/digital-employees')) return 'neural'
  return routeScenes[path] ?? 'orbit'
}

export function getSceneForService(serviceId: string): SceneType {
  return serviceScenes[serviceId] ?? 'orbit'
}
