import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 17 + 7) % 100,
  top: (i * 23 + 11) % 100,
  size: i % 5 === 0 ? 5 : i % 3 === 0 ? 3 : 2,
  duration: 10 + (i % 6) * 2.4,
  delay: (i % 8) * 0.35,
  driftX: i % 2 === 0 ? 28 : -24,
  driftY: -50 - (i % 7) * 12,
}))

export default function ParticleField() {
  const { shouldAnimate, isMobile } = useMotionConfig()
  if (!shouldAnimate) return null

  const particles = isMobile ? PARTICLES.slice(0, 14) : PARTICLES

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: 0.18,
            filter: p.size > 2 ? 'blur(1px)' : undefined,
          }}
          animate={{
            opacity: [0.08, 0.45, 0.12, 0.38, 0.08],
            y: [0, p.driftY, p.driftY * 0.4, 0],
            x: [0, p.driftX, p.driftX * -0.4, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
