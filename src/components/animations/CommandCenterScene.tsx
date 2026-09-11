import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const PERSONAS = [
  { id: 'talent', label: 'Talent', role: 'Global Teams', x: 11, color: '#a855f7', path: '/manpower-solutions' },
  { id: 'coder', label: 'Engineer', role: 'Web & Mobile', x: 26, color: '#08AFC7', path: '/web-mobile-development' },
  { id: 'designer', label: 'Designer', role: 'UI / UX', x: 50, color: '#16C6DA', path: '/ui-ux-design' },
  { id: 'scientist', label: 'Scientist', role: 'AI & ML', x: 70, color: '#3b82f6', path: '/ai-engineering' },
  { id: 'coach', label: 'Coach', role: 'Training', x: 86, color: '#14b8a6', path: '/training' },
]

interface CommandCenterSceneProps {
  className?: string
  height?: string
  showLabels?: boolean
}

export default function CommandCenterScene({
  className = '',
  height = 'min-h-[420px] md:min-h-[520px] lg:min-h-[600px]',
  showLabels = true,
}: CommandCenterSceneProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { shouldLoop, shouldAnimate, shouldParallax, reduced } = useMotionConfig()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${height} ${className}`}
      aria-hidden="true"
    >
      {/* Base image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        style={shouldParallax ? { y: imageY, scale: imageScale } : { scale: 1.08 }}
      >
        <img
          src="/images/holographic-command-center.png"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </motion.div>

      {/* Color grade */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-navy-deep/60" />
      <motion.div
        className="absolute inset-0 mix-blend-screen opacity-30"
        style={shouldParallax ? { opacity: overlayOpacity } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-purple-500/10" />
      </motion.div>

      {/* Hologram scan lines */}
      {shouldLoop && shouldAnimate && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(8,175,199,0.5) 2px, rgba(8,175,199,0.5) 3px)',
            }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 0.1, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/70 to-transparent shadow-[0_0_20px_rgba(8,175,199,0.5)]"
            animate={{ top: ['15%', '85%', '15%'] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
          />
        </>
      )}

      {/* Data stream arcs */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="stream-grad-cc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#08AFC7" stopOpacity="0" />
            <stop offset="50%" stopColor="#16C6DA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#08AFC7" stopOpacity="0" />
          </linearGradient>
          <filter id="glow-cc">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {PERSONAS.map((p, i) => {
          const startX = 500
          const startY = 520
          const endX = p.x * 10
          const endY = 280
          const midX = (startX + endX) / 2
          const midY = startY - 80 - i * 10
          const d = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`
          return (
            <g key={p.id}>
              <path d={d} fill="none" stroke="rgba(8,175,199,0.15)" strokeWidth="1" />
              {shouldLoop && shouldAnimate && (
                <>
                  <motion.circle
                    r="4"
                    fill={p.color}
                    filter="url(#glow-cc)"
                    animate={{
                      cx: [startX, midX, endX, endX],
                      cy: [startY, midY, endY, endY],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 2.5 + i * 0.3, delay: i * 0.5, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="url(#stream-grad-cc)"
                    strokeWidth="1.5"
                    strokeDasharray="8 12"
                    animate={{ strokeDashoffset: [0, -40] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.4, ease: 'linear' }}
                  />
                </>
              )}
            </g>
          )
        })}

        {/* Ceiling arcs */}
        {shouldLoop && [0, 1, 2].map((i) => (
          <motion.path
            key={`arc-${i}`}
            d={`M ${200 + i * 200} 80 Q 500 ${40 + i * 15} ${800 - i * 200} 80`}
            fill="none"
            stroke="rgba(8,175,199,0.2)"
            strokeWidth="1"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.6 }}
          />
        ))}
      </svg>

      {/* Persona glow rings + labels */}
      {showLabels &&
        PERSONAS.map((p, i) => (
          <div
            key={p.id}
            className="absolute pointer-events-auto z-20"
            style={{ left: `${p.x}%`, top: '38%', transform: 'translateX(-50%)' }}
          >
            {shouldLoop && shouldAnimate && (
              <>
                <motion.div
                  className="absolute -inset-8 rounded-full border"
                  style={{ borderColor: `${p.color}40` }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full"
                  style={{ background: `radial-gradient(circle, ${p.color}25 0%, transparent 70%)` }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                />
              </>
            )}
            <Link to={p.path} className="block group">
              <motion.div
                className="relative px-3 py-1.5 border backdrop-blur-sm transition-colors group-hover:border-white/30"
                style={{
                  borderColor: `${p.color}50`,
                  background: `linear-gradient(135deg, ${p.color}15, rgba(7,20,38,0.8))`,
                }}
                animate={shouldLoop ? { y: [0, -4, 0] } : undefined}
                transition={{ repeat: Infinity, duration: 3 + i * 0.2, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="block text-[10px] font-mono tracking-widest uppercase" style={{ color: p.color }}>
                  {p.label}
                </span>
                <span className="block text-[8px] text-white/40 font-mono mt-0.5 group-hover:text-white/60">{p.role}</span>
              </motion.div>
            </Link>
          </div>
        ))}

      {/* Floating HUD panels */}
      {shouldLoop && shouldAnimate && !reduced && (
        <>
          <motion.div
            className="absolute top-[20%] left-[8%] w-24 h-16 border border-purple-400/30 bg-purple-500/10 backdrop-blur-sm p-2"
            animate={{ y: [0, -6, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <div className="space-y-1">
              {[0, 1, 2].map((j) => (
                <div key={j} className="h-1 bg-purple-400/40" style={{ width: `${60 + j * 15}%` }} />
              ))}
            </div>
          </motion.div>
          <motion.div
            className="absolute top-[18%] right-[12%] w-28 h-20 border border-cyan/30 bg-cyan/5 backdrop-blur-sm p-2 font-mono text-[6px] text-cyan/60 overflow-hidden"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
          >
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
              {'const deploy = () => {'}
              <br />
              {'  return build();'}
              <br />
              {'}'}
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-[28%] left-[42%] w-16 h-16 rounded-full border border-cyan/40"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            style={{
              background: 'conic-gradient(from 0deg, #08AFC7, #a855f7, #3b82f6, #14b8a6, #08AFC7)',
              opacity: 0.35,
            }}
          />
        </>
      )}

      {/* Ambient particles */}
      {shouldLoop &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan/60"
            style={{
              left: `${10 + (i * 17) % 80}%`,
              top: `${20 + (i * 23) % 60}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -30 - (i % 5) * 10, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + (i % 3),
              delay: i * 0.25,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Console glow at bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-32"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(8,175,199,0.25) 0%, transparent 70%)',
        }}
        animate={shouldLoop ? { opacity: [0.5, 0.9, 0.5] } : undefined}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* HUD corners */}
      <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-cyan/40" />
      <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-cyan/40" />
      <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-cyan/40" />
      <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-cyan/40" />

      {/* Live indicator */}
      {shouldAnimate && (
        <div className="absolute top-5 left-12 flex items-center gap-2">
          <motion.span
            className="w-2 h-2 rounded-full bg-cyan"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <span className="text-[9px] font-mono text-cyan/60 tracking-widest uppercase">Live · Command Center</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30 pointer-events-none" />
    </div>
  )
}
