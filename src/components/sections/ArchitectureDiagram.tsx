import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { pickVariants } from '../../animations/motionConfig'
import { slideUpSubtle } from '../../animations/variants'

const layers = [
  { label: 'Data', opacity: 0.12 },
  { label: 'Models', opacity: 0.18 },
  { label: 'Agents', opacity: 0.24 },
  { label: 'Business Systems', opacity: 0.3 },
  { label: 'Outcomes', opacity: 0.36 },
]

export default function ArchitectureDiagram() {
  const { reduced, viewport, staggerDelay, shouldAnimate } = useMotionConfig()

  return (
    <div className="flex flex-col items-center gap-1.5 max-w-md mx-auto" role="img" aria-label="AI architecture pipeline">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={pickVariants(reduced, slideUpSubtle)}
          transition={{ delay: shouldAnimate ? i * staggerDelay : 0 }}
          className="w-full"
        >
          <div
            className="w-full py-3.5 px-6 text-center text-sm font-medium text-white border border-cyan/15"
            style={{ background: `rgba(8,175,199,${layer.opacity})` }}
          >
            {layer.label}
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-0.5" aria-hidden="true">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={viewport}
                transition={{ delay: shouldAnimate ? i * staggerDelay + 0.08 : 0, duration: 0.4 }}
                className="w-px h-3 bg-cyan/30 origin-top"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
