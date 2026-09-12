import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { processDescription, processTitle, type ProcessStep } from '../../data/services'

interface ServiceProcessTimelineProps {
  steps: Array<string | ProcessStep>
}

export default function ServiceProcessTimeline({ steps }: ServiceProcessTimelineProps) {
  const { viewport, shouldAnimate, reduced } = useMotionConfig()

  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-cyan/20 overflow-hidden">
        {shouldAnimate && (
          <motion.div
            className="absolute left-0 w-full h-8 bg-gradient-to-b from-transparent via-cyan/60 to-transparent"
            animate={{ top: ['-10%', '110%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
          />
        )}
      </div>
      <ul className="space-y-4">
        {steps.map((step, i) => {
          const title = processTitle(step)
          const description = processDescription(step)
          return (
            <motion.li
              key={`${i}-${title}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ delay: reduced ? 0 : i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 pl-0"
            >
              <motion.span
                className="relative z-10 w-3.5 h-3.5 border border-cyan bg-navy-deep shrink-0 mt-0.5"
                whileInView={shouldAnimate ? { scale: [1, 1.2, 1] } : undefined}
                viewport={viewport}
                transition={{ delay: i * 0.1, duration: 0.3, repeat: shouldAnimate ? Infinity : 0, repeatDelay: 2 }}
              />
              <div>
                <span className="text-[10px] font-mono text-cyan/40 block mb-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-white/80 block">{title}</span>
                {description && (
                  <span className="text-xs text-white/45 leading-relaxed block mt-1">{description}</span>
                )}
              </div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
