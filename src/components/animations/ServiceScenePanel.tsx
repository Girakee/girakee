import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveServiceScene from './LiveServiceScene'
import type { SceneType } from '../../data/sceneThemes'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface ServiceScenePanelProps {
  scene: SceneType
  title: string
}

export default function ServiceScenePanel({ scene, title }: ServiceScenePanelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { shouldParallax, shouldAnimate } = useMotionConfig()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96])

  return (
    <motion.div
      ref={ref}
      style={shouldParallax ? { y, scale } : undefined}
      className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] border border-cyan/20 overflow-hidden holographic-panel"
    >
      {/* HUD corners */}
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan/50" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan/50" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan/50" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan/50" />

      <LiveServiceScene scene={scene} className="absolute inset-0 !aspect-auto h-full" />

      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-navy-deep/90 to-transparent">
        <p className="text-[10px] font-mono text-cyan/60 tracking-widest uppercase">{title}</p>
        {shouldAnimate && (
          <motion.div
            className="h-px bg-cyan/40 mt-2 origin-left"
            animate={{ scaleX: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        )}
      </div>

      {/* Scan beam */}
      {shouldAnimate && (
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        />
      )}
    </motion.div>
  )
}
