import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import { maskReveal, scaleIn } from '../../animations/variants'

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  mode?: 'mask' | 'scale'
}

export default function ImageReveal({ children, className = '', mode = 'mask' }: ImageRevealProps) {
  const { reduced, viewport } = useMotionConfig()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={pickVariants(reduced, mode === 'mask' ? maskReveal : scaleIn)}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}
