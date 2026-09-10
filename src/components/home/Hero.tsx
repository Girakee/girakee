import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroVisualization from './HeroVisualization'
import { useMotionConfig } from '../../hooks/useMotionConfig'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { shouldAnimate, transition, isMobile, shouldParallax } = useMotionConfig()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 80 : 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const reveal = (delay: number) =>
    shouldAnimate
      ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: transition({ delay, duration: 0.6 }) }
      : {}

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-navy-deep overflow-hidden"
    >
      <HeroVisualization scrollYProgress={shouldParallax ? scrollYProgress : undefined} />

      <motion.div
        style={shouldParallax ? { y: contentY, opacity: contentOpacity, scale: contentScale } : undefined}
        className="relative z-10 max-w-[90rem] mx-auto page-px min-h-[100svh] flex flex-col justify-end lg:justify-center pb-28 sm:pb-32 lg:pb-0"
      >
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-8 items-center pt-24 lg:pt-0">
          <div className="max-w-xl lg:max-w-none">
            <motion.p {...reveal(0.1)} className="eyebrow eyebrow-dark mb-6 sm:mb-8">
              AI Engineering · Global Delivery
            </motion.p>

            <motion.h1
              {...reveal(0.2)}
              className="editorial-display text-[clamp(2.5rem,9vw,5rem)] text-white mb-6 sm:mb-8"
            >
              Engineering the Future with{' '}
              <span className="text-gradient-cyan">AI</span>
            </motion.h1>

            <motion.p
              {...reveal(0.35)}
              className="text-body text-body-dark max-w-md mb-8 sm:mb-10"
            >
              Production AI systems, intelligent automation, cloud infrastructure,
              and custom software — engineered in Bengaluru, delivered worldwide.
            </motion.p>

            <motion.div {...reveal(0.45)} className="flex flex-col sm:flex-row gap-3 mb-10 lg:mb-14">
              {!isMobile && (
                <Link to="/contact" className="btn-primary">
                  Talk to an Expert
                  <ArrowRight size={15} strokeWidth={1.75} />
                </Link>
              )}
              <Link to="/services" className="btn-secondary w-full sm:w-auto">
                Explore Services
                <ArrowRight size={15} strokeWidth={1.75} className="opacity-50" />
              </Link>
            </motion.div>

            <motion.p {...reveal(0.55)} className="eyebrow eyebrow-dark text-[0.625rem] opacity-60">
              Bengaluru · US · UK · EU · Middle East
            </motion.p>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {shouldAnimate && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-cyan/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </section>
  )
}
