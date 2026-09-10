import type { Variants } from 'framer-motion'
import { DURATION, EASE_OUT } from './motionConfig'

const t = { duration: DURATION.normal, ease: EASE_OUT }
const tSubtle = { duration: DURATION.fast, ease: EASE_OUT }

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: t },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t },
}

export const slideUpSubtle: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: tSubtle },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: t },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: t },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: t },
}

export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: DURATION.slow, ease: EASE_OUT } },
}

export const lineDraw: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: DURATION.line, ease: EASE_OUT } },
}

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: tSubtle },
}

export const pageEnter: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.fast, ease: EASE_OUT } },
}

export const overlayExit: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0, transition: { duration: 0.2 } },
}
