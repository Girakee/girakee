import type { ReactNode } from 'react'
import { useMotionConfig } from '../../../hooks/useMotionConfig'
import type { SceneType } from '../../../data/sceneThemes'
import {
  HeroWebMobileScene,
  HeroNeuralScene,
  HeroVisionScene,
  HeroCloudScene,
  HeroShieldScene,
  HeroWireframeScene,
  HeroPipelineScene,
  HeroQAValidationScene,
  HeroDataScene,
  HeroTalentScene,
  HeroTerminalScene,
  HeroOrbitScene,
  HeroNetworkScene,
  HeroClassroomScene,
  HeroDefaultScene,
} from './scenes'

interface HeroPageSceneProps {
  scene: SceneType
  className?: string
}

const HERO_SCENE_MAP: Record<SceneType, (props: { loop: boolean }) => ReactNode> = {
  hero: HeroDefaultScene,
  devices: HeroWebMobileScene,
  neural: HeroNeuralScene,
  vision: HeroVisionScene,
  cloud: HeroCloudScene,
  shield: HeroShieldScene,
  wireframe: HeroWireframeScene,
  pipeline: HeroPipelineScene,
  'qa-validation': HeroQAValidationScene,
  data: HeroDataScene,
  talent: HeroTalentScene,
  terminal: HeroTerminalScene,
  orbit: HeroOrbitScene,
  network: HeroNetworkScene,
  classroom: HeroClassroomScene,
}

export default function HeroPageScene({ scene, className = '' }: HeroPageSceneProps) {
  const { shouldLoop } = useMotionConfig()
  const Scene = HERO_SCENE_MAP[scene] ?? HeroDefaultScene

  return (
    <div className={`relative w-full h-full min-h-[240px] ${className}`}>
      <Scene loop={shouldLoop} />
    </div>
  )
}
