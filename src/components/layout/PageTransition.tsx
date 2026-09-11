import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pageEnter } from '../../animations/variants'
import { pickVariants } from '../../animations/motionConfig'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const { reduced } = useMotionConfig()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' })
  }, [location.pathname, reduced])

  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="visible"
      variants={pickVariants(reduced, pageEnter)}
    >
      {children}
    </motion.div>
  )
}
