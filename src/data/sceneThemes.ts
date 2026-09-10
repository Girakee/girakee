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
  '/talent-outsourcing': 'talent',
  '/solutions': 'network',
  '/industries': 'orbit',
  '/technology': 'orbit',
  '/engagement-models': 'talent',
  '/training': 'terminal',
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
  'talent-outsourcing': 'talent',
  'corporate-training': 'terminal',
}

export function getSceneForRoute(path: string): SceneType {
  return routeScenes[path] ?? 'orbit'
}

export function getSceneForService(serviceId: string): SceneType {
  return serviceScenes[serviceId] ?? 'orbit'
}
