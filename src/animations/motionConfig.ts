import type { Transition, Variants } from 'framer-motion'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const

export const VIEWPORT_DEFAULT = { once: true, margin: '-80px' as const }
export const VIEWPORT_TIGHT = { once: true, margin: '-40px' as const }
export const VIEWPORT_LOOSE = { once: true, margin: '-120px' as const }

export const DURATION = {
  fast: 0.35,
  normal: 0.55,
  slow: 0.75,
  line: 0.9,
} as const

export const transition = (reduced: boolean, overrides?: Partial<Transition>): Transition =>
  reduced
    ? { duration: 0 }
    : { duration: DURATION.normal, ease: EASE_OUT, ...overrides }

export const transitionFast = (reduced: boolean): Transition =>
  reduced ? { duration: 0 } : { duration: DURATION.fast, ease: EASE_OUT }

export const stagger = (reduced: boolean, delay = 0.08) =>
  reduced ? 0 : delay

export const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
}

export function pickVariants(reduced: boolean, variants: Variants): Variants {
  return reduced ? reducedVariants : variants
}
