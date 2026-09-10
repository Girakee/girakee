import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export default function Parallax({ children, offset = 40, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { shouldParallax } = useMotionConfig()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  if (!shouldParallax) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
