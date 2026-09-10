import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pageEnter } from '../../animations/variants'
import { pickVariants } from '../../animations/motionConfig'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const { reduced, transitionFast } = useMotionConfig()

  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="visible"
      variants={pickVariants(reduced, pageEnter)}
      transition={transitionFast()}
    >
      {children}
    </motion.div>
  )
}
