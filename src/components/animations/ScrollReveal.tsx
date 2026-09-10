import { motion, type Variants } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import {
  fadeIn,
  slideUp,
  slideUpSubtle,
  slideLeft,
  slideRight,
  scaleIn,
} from '../../animations/variants'

type VariantName = 'fade' | 'slideUp' | 'slideUpSubtle' | 'slideLeft' | 'slideRight' | 'scale'

const variantMap: Record<VariantName, Variants> = {
  fade: fadeIn,
  slideUp,
  slideUpSubtle,
  slideLeft,
  slideRight,
  scale: scaleIn,
}

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: VariantName
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
  once?: boolean
}

export default function ScrollReveal({
  children,
  variant = 'slideUpSubtle',
  delay = 0,
  className = '',
  as = 'div',
  once = true,
}: ScrollRevealProps) {
  const { reduced, viewport, transition } = useMotionConfig()
  const Component = motion[as]

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={pickVariants(reduced, variantMap[variant])}
      transition={transition({ delay })}
      className={className}
    >
      {children}
    </Component>
  )
}
