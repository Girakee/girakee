import type { ReactNode } from 'react'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import type { SceneType } from '../../data/sceneThemes'
import {
  WebMobileScene,
  NeuralScene,
  VisionScene,
  CloudScene,
  ShieldScene,
  WireframeScene,
  PipelineScene,
  QAValidationScene,
  DataScene,
  TerminalScene,
  TalentScene,
  RobotScene,
  OrbitScene,
  NetworkScene,
} from './live-scenes/allScenes'

interface LiveServiceSceneProps {
  scene: SceneType
  className?: string
  compact?: boolean
}

const SCENE_MAP: Record<SceneType, (props: { loop: boolean }) => ReactNode> = {
  hero: RobotScene,
  neural: NeuralScene,
  vision: VisionScene,
  cloud: CloudScene,
  shield: ShieldScene,
  data: DataScene,
  devices: WebMobileScene,
  wireframe: WireframeScene,
  pipeline: PipelineScene,
  'qa-validation': QAValidationScene,
  terminal: TerminalScene,
  orbit: OrbitScene,
  network: NetworkScene,
  talent: TalentScene,
  classroom: TerminalScene,
}

export default function LiveServiceScene({ scene, className = '', compact = false }: LiveServiceSceneProps) {
  const { shouldAnimate } = useMotionConfig()
  const Scene = SCENE_MAP[scene] ?? RobotScene

  return (
    <div className={`relative overflow-hidden ${compact ? 'aspect-[16/10]' : 'aspect-[16/10] md:aspect-[2/1]'} ${className}`}>
      <Scene loop={shouldAnimate} />
    </div>
  )
}

export { RobotScene as RobotLearningScene }
