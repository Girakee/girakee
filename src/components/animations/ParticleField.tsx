import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

export default function ParticleField() {
  const { shouldLoop, isMobile } = useMotionConfig()
  const count = isMobile ? 12 : 28

  if (!shouldLoop) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-px bg-cyan/40"
          style={{
            left: `${(i * 17 + 7) % 100}%`,
            top: `${(i * 23 + 11) % 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            y: [0, -30 - (i % 5) * 10, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + (i % 4) * 2,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
