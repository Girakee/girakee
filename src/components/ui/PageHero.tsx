import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import { slideUpSubtle } from '../../animations/variants'
import HeroPageScene from '../animations/hero-scenes/HeroPageScene'
import { getSceneForRoute, type SceneType } from '../../data/sceneThemes'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  scene?: SceneType
  showScene?: boolean
  sceneContent?: ReactNode
  showScan?: boolean
}

export default function PageHero({
  label,
  title,
  subtitle,
  scene,
  showScene = true,
  sceneContent,
  showScan = true,
}: PageHeroProps) {
  const location = useLocation()
  const { reduced, shouldAnimate, transition } = useMotionConfig()
  const activeScene = scene ?? getSceneForRoute(location.pathname)

  const reveal = (delay: number) =>
    shouldAnimate
      ? { initial: 'hidden' as const, animate: 'visible' as const, variants: pickVariants(reduced, slideUpSubtle), transition: transition({ delay }) }
      : {}

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-14 page-px overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(8,175,199,0.09)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto z-10">
        <div className={`grid gap-8 lg:gap-12 items-center ${showScene ? 'lg:grid-cols-2' : ''}`}>
          <div className={showScene ? 'max-w-xl' : 'max-w-3xl'}>
            <motion.p {...reveal(0.08)} className="eyebrow eyebrow-dark mb-4">
              {label}
            </motion.p>
            <motion.h1
              {...reveal(0.14)}
              className="editorial-display text-[clamp(2rem,6vw,3.75rem)]"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p {...reveal(0.22)} className="mt-4 md:mt-5 text-body text-body-dark max-w-xl">
                {subtitle}
              </motion.p>
            )}
          </div>

          {showScene && (
            <motion.div {...reveal(0.18)}>
              <motion.div
                className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] border border-cyan/25 overflow-hidden holographic-panel shadow-[0_0_80px_rgba(8,175,199,0.1)]"
                animate={shouldAnimate ? { y: [0, -10, 0, 8, 0] } : undefined}
                transition={shouldAnimate ? { repeat: Infinity, duration: 9, ease: 'easeInOut' } : undefined}
              >
                <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-cyan/50 z-20" />
                <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-cyan/50 z-20" />
                <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-cyan/50 z-20" />
                <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-cyan/50 z-20" />

                <div className="absolute inset-0 h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
                  {sceneContent ?? <HeroPageScene scene={activeScene} className="w-full h-full" />}
                </div>

                {shouldAnimate && showScan && !sceneContent && (
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/70 to-transparent z-20 pointer-events-none shadow-[0_0_12px_rgba(8,175,199,0.5)]"
                    animate={{ top: ['8%', '92%', '8%'] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
                  />
                )}

                {!sceneContent && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d18] to-transparent pointer-events-none z-10" />
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
