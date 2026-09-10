import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import { slideUpSubtle } from '../../animations/variants'
import LineDraw from '../animations/LineDraw'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  dark?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  dark = false,
  align = 'left',
}: SectionHeadingProps) {
  const { reduced, viewport, transition } = useMotionConfig()
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const variants = pickVariants(reduced, slideUpSubtle)

  return (
    <div className={`max-w-3xl mb-14 md:mb-16 ${alignClass}`}>
      {label && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={variants}
          transition={transition()}
          className="eyebrow text-cyan mb-4"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        transition={transition({ delay: 0.05 })}
        className={`editorial-display text-[clamp(2rem,4vw,3.25rem)] ${
          dark ? 'text-white' : 'text-text'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={variants}
          transition={transition({ delay: 0.1 })}
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? 'text-white/45' : 'text-text/45'
          } ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <LineDraw
        className={`glow-line w-20 mt-6 md:mt-8 ${align === 'center' ? 'mx-auto' : ''}`}
        delay={0.15}
        align={align === 'center' ? 'center' : 'left'}
      />
    </div>
  )
}
