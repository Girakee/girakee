import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export default function CountUp({
  value,
  suffix = '',
  prefix = '',
  className = '',
  duration = 1.2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const { reduced } = useMotionConfig()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }

    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration, reduced])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {prefix}{display}{suffix}
    </motion.span>
  )
}
