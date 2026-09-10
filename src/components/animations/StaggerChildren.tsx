import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants, reducedVariants } from '../../animations/motionConfig'
import { staggerContainer, staggerItem } from '../../animations/variants'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function StaggerChildren({ children, className = '', stagger: staggerOverride }: StaggerChildrenProps) {
  const { reduced, viewport, staggerDelay } = useMotionConfig()
  const delay = staggerOverride ?? staggerDelay

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={
        reduced
          ? reducedVariants
          : staggerContainer(delay, delay * 0.6)
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { reduced } = useMotionConfig()
  return (
    <motion.div variants={pickVariants(reduced, staggerItem)} className={className}>
      {children}
    </motion.div>
  )
}
