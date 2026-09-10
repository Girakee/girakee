import { motion } from 'framer-motion'
import { useMotionConfig } from '../../../hooks/useMotionConfig'
import { pickVariants } from '../../../animations/motionConfig'
import { slideUpSubtle } from '../../../animations/variants'

interface EditorialHeadingProps {
  label?: string
  title: string
  subtitle?: string
  dark?: boolean
  align?: 'left' | 'center'
  size?: 'lg' | 'xl'
  accentLabel?: boolean
}

export default function EditorialHeading({
  label,
  title,
  subtitle,
  dark = false,
  align = 'left',
  size = 'lg',
  accentLabel = false,
}: EditorialHeadingProps) {
  const { reduced, viewport, transition } = useMotionConfig()
  const variants = pickVariants(reduced, slideUpSubtle)
  const titleSize =
    size === 'xl'
      ? 'text-[clamp(2.25rem,5vw,4rem)]'
      : 'text-[clamp(1.875rem,4vw,3.25rem)]'

  const labelClass = accentLabel
    ? 'eyebrow eyebrow-accent'
    : dark
      ? 'eyebrow eyebrow-dark'
      : 'eyebrow'

  return (
    <div className={`mb-10 sm:mb-14 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {label && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={variants}
          transition={transition()}
          className={`${labelClass} mb-4 md:mb-5`}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        transition={transition({ delay: 0.04 })}
        className={`editorial-display ${titleSize} ${dark ? 'text-white' : 'text-text'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={variants}
          transition={transition({ delay: 0.08 })}
          className={`mt-4 md:mt-5 text-body max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-body-dark' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
