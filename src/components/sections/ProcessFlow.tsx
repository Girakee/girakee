import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import { scaleIn } from '../../animations/variants'

interface ProcessFlowProps {
  steps: string[]
  direction?: 'horizontal' | 'vertical'
}

export default function ProcessFlow({ steps, direction }: ProcessFlowProps) {
  const { reduced, viewport, staggerDelay, shouldAnimate, isMobile } = useMotionConfig()
  const isVertical = direction === 'vertical' || (direction !== 'horizontal' && isMobile)

  return (
    <div
      className={`flex ${isVertical ? 'flex-col items-stretch' : 'flex-row flex-wrap'} items-center justify-start gap-0`}
      role="list"
      aria-label="Process flow"
    >
      {steps.map((step, i) => (
        <div key={step} className={`flex items-center ${isVertical ? 'flex-col w-full' : ''}`} role="listitem">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={pickVariants(reduced, scaleIn)}
            transition={{ delay: shouldAnimate ? i * staggerDelay : 0 }}
            className={`px-4 py-3 min-h-[44px] flex items-center justify-center border border-[var(--border-subtle-dark)] text-sm text-white/80 bg-navy-dark/60 ${
              isVertical ? 'w-full' : ''
            }`}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <motion.span
              className={`text-cyan/40 text-xs ${isVertical ? 'py-2' : 'px-3'}`}
              aria-hidden="true"
              animate={shouldAnimate ? { opacity: [0.3, 1, 0.3], x: isVertical ? 0 : [0, 4, 0], y: isVertical ? [0, 4, 0] : 0 } : undefined}
              transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.2 }}
            >
              {isVertical ? '↓' : '→'}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  )
}
