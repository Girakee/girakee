import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface AnimatedTechMarqueeProps {
  technologies: string[]
}

export default function AnimatedTechMarquee({ technologies }: AnimatedTechMarqueeProps) {
  const { shouldLoop } = useMotionConfig()
  const items = [...technologies, ...technologies, ...technologies]

  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3 bg-navy-deep/50">
      <motion.div
        className="flex gap-8 whitespace-nowrap w-max"
        animate={shouldLoop ? { x: ['0%', '-33.333%'] } : undefined}
        transition={shouldLoop ? { repeat: Infinity, duration: 30, ease: 'linear' } : undefined}
      >
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="text-xs font-mono text-cyan/50 tracking-wide">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
