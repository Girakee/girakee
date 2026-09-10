import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface HolographicHUDProps {
  variant?: 'hero' | 'page'
  className?: string
}

const PANELS_HERO = [
  { x: '58%', y: '18%', w: 140, h: 90, delay: 0 },
  { x: '72%', y: '32%', w: 120, h: 70, delay: 0.15 },
  { x: '65%', y: '52%', w: 160, h: 100, delay: 0.3 },
  { x: '78%', y: '68%', w: 100, h: 60, delay: 0.45 },
]

const PANELS_PAGE = [
  { x: '70%', y: '20%', w: 100, h: 65, delay: 0 },
  { x: '82%', y: '45%', w: 90, h: 55, delay: 0.2 },
]

export default function HolographicHUD({ variant = 'page', className = '' }: HolographicHUDProps) {
  const { shouldLoop, shouldAnimate, isMobile } = useMotionConfig()
  const panels = variant === 'hero' ? PANELS_HERO : PANELS_PAGE

  if (isMobile) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Circuit floor lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
        <motion.path
          d="M0,85% Q30%,75% 50%,80% T100%,70%"
          fill="none"
          stroke="rgba(8,175,199,0.25)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M20%,100% L20%,60% L45%,45% L70%,55% L85%,40%"
          fill="none"
          stroke="rgba(8,175,199,0.15)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={shouldLoop ? { strokeDashoffset: [0, -24] } : undefined}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        />
      </svg>

      {/* Pulse rings */}
      {shouldLoop && (
        <motion.div
          className="absolute top-1/2 right-[20%] w-32 h-32 border border-cyan/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
      )}

      {/* Floating HUD panels */}
      {panels.map((panel, i) => (
        <motion.div
          key={i}
          className="absolute holographic-panel"
          style={{ left: panel.x, top: panel.y, width: panel.w, height: panel.h }}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{
            opacity: 1,
            y: shouldLoop ? [0, -6, 0] : 0,
          }}
          transition={{
            opacity: { delay: panel.delay, duration: 0.6 },
            y: shouldLoop ? { repeat: Infinity, duration: 5 + i, ease: 'easeInOut' } : { duration: 0 },
          }}
        >
          <div className="h-full p-2 flex flex-col gap-1.5">
            <div className="flex gap-1 items-end h-10">
              {[0.6, 0.9, 0.45, 0.75].map((h, j) => (
                <motion.div
                  key={j}
                  className="flex-1 bg-cyan/30 origin-bottom"
                  style={{ height: `${h * 100}%` }}
                  animate={shouldLoop ? { scaleY: [1, 1.15, 1] } : undefined}
                  transition={{ repeat: Infinity, duration: 2 + j * 0.3, delay: j * 0.2 }}
                />
              ))}
            </div>
            <div className="flex-1 border-t border-cyan/15 pt-1">
              <motion.div
                className="h-px bg-cyan/40 w-full"
                animate={shouldLoop ? { scaleX: [0.3, 1, 0.3] } : undefined}
                transition={{ repeat: Infinity, duration: 3, delay: panel.delay }}
              />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Scan line */}
      {shouldLoop && (
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
          animate={{ top: ['20%', '80%', '20%'] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />
      )}

      {/* Data nodes */}
      {shouldLoop &&
        Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1 h-1 bg-cyan/60"
            style={{ left: `${55 + i * 7}%`, top: `${25 + (i % 3) * 20}%` }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
          />
        ))}
    </div>
  )
}
