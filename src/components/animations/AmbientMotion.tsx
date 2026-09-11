import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

export default function AmbientMotion() {
  const { shouldAnimate } = useMotionConfig()
  if (!shouldAnimate) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] rounded-full bg-cyan/[0.05] blur-3xl"
        style={{ top: '-8%', right: '-12%' }}
        animate={{ x: [0, -60, 40, 0], y: [0, 50, 20, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] rounded-full bg-[#3b82f6]/[0.04] blur-3xl"
        style={{ bottom: '5%', left: '-10%' }}
        animate={{ x: [0, 70, -30, 0], y: [0, -40, 30, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
