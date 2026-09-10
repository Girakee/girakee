import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import { lineDraw } from '../../animations/variants'

interface LineDrawProps {
  className?: string
  delay?: number
  align?: 'left' | 'center' | 'right'
}

export default function LineDraw({ className = 'glow-line w-24', delay = 0, align = 'left' }: LineDrawProps) {
  const { reduced, viewport, transition } = useMotionConfig()
  const origin = align === 'center' ? 'center' : align === 'right' ? 'right' : 'left'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={pickVariants(reduced, lineDraw)}
      transition={transition({ delay, duration: 0.9 })}
      className={`${className} origin-${origin}`}
      aria-hidden="true"
    />
  )
}
