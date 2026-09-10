import { useReducedMotion } from './useReducedMotion'
import { useMediaQuery } from './useMediaQuery'
import {
  VIEWPORT_DEFAULT,
  VIEWPORT_TIGHT,
  transition,
  transitionFast,
  stagger,
} from '../animations/motionConfig'

export function useMotionConfig() {
  const reduced = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isCoarsePointer = useMediaQuery('(pointer: coarse)')

  return {
    reduced,
    isMobile,
    shouldAnimate: !reduced,
    shouldParallax: !reduced && !isMobile,
    shouldFloat: !reduced && !isMobile,
    shouldMagnetic: !reduced && !isMobile && !isCoarsePointer,
    shouldLoop: !reduced && !isMobile,
    viewport: VIEWPORT_DEFAULT,
    viewportTight: VIEWPORT_TIGHT,
    transition: (overrides?: Parameters<typeof transition>[1]) => transition(reduced, overrides),
    transitionFast: () => transitionFast(reduced),
    staggerDelay: stagger(reduced, isMobile ? 0.05 : 0.08),
    wordStagger: reduced ? 0 : isMobile ? 0.03 : 0.05,
  }
}
