import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const CYAN = '#08AFC7'
const CYAN_BRIGHT = '#16C6DA'
const CYAN_DEEP = '#067a8c'
const METAL_LIGHT = '#c8d4e0'
const METAL_MID = '#8a9bab'
const METAL_DARK = '#4a5568'

interface AIProcessFlowAnimationProps {
  className?: string
}

function BrainInput({ loop }: { loop: boolean }) {
  const synapses = [
    { cx: 28, cy: 28, delay: 0 },
    { cx: 52, cy: 22, delay: 0.3 },
    { cx: 38, cy: 42, delay: 0.6 },
    { cx: 58, cy: 38, delay: 0.9 },
  ]

  return (
    <g transform="translate(36, 108)">
      <ellipse cx="44" cy="36" rx="46" ry="40" fill="url(#apf-brain-glow)" opacity="0.35" />
      <path
        d="M 12 36 C 4 22 8 6 28 6 C 40 6 46 16 50 26 C 54 16 60 6 72 6 C 92 6 96 22 88 36 C 96 50 92 66 72 66 C 60 66 54 56 50 46 C 46 56 40 66 28 66 C 8 66 4 50 12 36 Z"
        fill="url(#apf-brain-fill)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
      />
      <path
        d="M 28 20 C 34 28 42 28 50 20 M 28 52 C 34 44 42 44 50 52 M 20 36 C 26 32 32 40 38 36 C 44 32 50 40 56 36 M 32 14 C 38 18 44 14 50 18 M 32 54 C 38 50 44 54 50 50"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        fill="none"
      />
      {synapses.map((s) => (
        <motion.circle
          key={`${s.cx}-${s.cy}`}
          cx={s.cx}
          cy={s.cy}
          r="3"
          fill={CYAN_BRIGHT}
          filter="url(#apf-soft-glow)"
          animate={loop ? { opacity: [0.3, 1, 0.3], r: [2.5, 4, 2.5] } : undefined}
          transition={{ repeat: Infinity, duration: 2, delay: s.delay }}
        />
      ))}
      <text x="44" y="82" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="monospace" letterSpacing="1">
        NEURAL INPUT
      </text>
    </g>
  )
}

function DataCables({ loop, lines }: { loop: boolean; lines: { y: number; delay: number }[] }) {
  return (
    <>
      {lines.map((line) => (
        <g key={line.y}>
          <rect x="118" y={line.y - 3} width="148" height="6" rx="3" fill="rgba(8,175,199,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
          <line x1="124" y1={line.y} x2="260" y2={line.y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          {loop && (
            <>
              <motion.circle
                r="2.5"
                fill={CYAN_BRIGHT}
                filter="url(#apf-soft-glow)"
                animate={{ cx: [128, 256, 128], cy: [line.y, line.y, line.y], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: line.delay, ease: 'easeInOut' }}
              />
              <motion.circle
                r="1.5"
                fill="white"
                animate={{ cx: [132, 252, 132], cy: [line.y, line.y, line.y], opacity: [0, 0.8, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: line.delay + 0.4, ease: 'easeInOut' }}
              />
            </>
          )}
        </g>
      ))}
    </>
  )
}

function AICore({ loop }: { loop: boolean }) {
  const hexPoints = '360,68 418,98 418,158 360,188 302,158 302,98'

  return (
    <g>
      <motion.ellipse
        cx="360"
        cy="128"
        rx="72"
        ry="68"
        fill="url(#apf-core-ambient)"
        animate={loop ? { opacity: [0.4, 0.7, 0.4] } : undefined}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.polygon
        points={hexPoints}
        fill="url(#apf-hex-face)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        filter="url(#apf-drop)"
      />
      <polygon points={hexPoints} fill="none" stroke={CYAN} strokeWidth="2" opacity="0.6" />
      {loop && (
        <motion.polygon
          points={hexPoints}
          fill="none"
          stroke={CYAN_BRIGHT}
          strokeWidth="1"
          opacity="0.5"
          animate={{ strokeOpacity: [0.2, 0.8, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
      )}
      {/* Inner circuit pattern */}
      <g opacity="0.5">
        <circle cx="360" cy="128" r="28" fill="none" stroke={CYAN} strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="332" y1="128" x2="388" y2="128" stroke={CYAN} strokeWidth="0.5" />
        <line x1="360" y1="100" x2="360" y2="156" stroke={CYAN} strokeWidth="0.5" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180
          const x = 360 + Math.cos(rad) * 20
          const y = 128 + Math.sin(rad) * 20
          return <circle key={deg} cx={x} cy={y} r="2" fill={CYAN_BRIGHT} opacity="0.6" />
        })}
      </g>
      <motion.text
        x="360"
        y="136"
        textAnchor="middle"
        fill="url(#apf-ai-text)"
        fontSize="34"
        fontWeight="700"
        fontFamily="var(--font-display), system-ui, sans-serif"
        filter="url(#apf-soft-glow)"
        animate={loop ? { opacity: [0.85, 1, 0.85] } : undefined}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        AI
      </motion.text>
      {loop && (
        <motion.circle
          cx="360"
          cy="128"
          r="52"
          fill="none"
          stroke={CYAN}
          strokeWidth="0.5"
          strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: '360px 128px' }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />
      )}
      <text x="360" y="208" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="monospace" letterSpacing="1">
        INFERENCE CORE
      </text>
    </g>
  )
}

function OutputPaths({ loop, paths }: { loop: boolean; paths: { d: string; delay: number }[] }) {
  return (
    <>
      {paths.map((path) => (
        <g key={path.d}>
          <path d={path.d} stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round" />
          <path d={path.d} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
          {loop && (
            <motion.path
              d={path.d}
              stroke="url(#apf-stream)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 12"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ repeat: Infinity, duration: 1.4, delay: path.delay, ease: 'linear' }}
            />
          )}
        </g>
      ))}
    </>
  )
}

function ConveyorScene({ loop }: { loop: boolean }) {
  const rollers = [0, 1, 2, 3, 4, 5]

  return (
    <g transform="translate(500, 28)">
      <rect x="-8" y="0" width="220" height="88" rx="4" fill="rgba(8,175,199,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Frame */}
      <rect x="0" y="8" width="200" height="6" fill="url(#apf-metal)" rx="1" />
      <rect x="0" y="58" width="200" height="6" fill="url(#apf-metal)" rx="1" />
      {/* Belt surface */}
      <rect x="4" y="22" width="192" height="32" fill="rgba(20,30,45,0.9)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      {loop && (
        <motion.rect
          x="4"
          y="22"
          width="192"
          height="32"
          fill="url(#apf-belt-pattern)"
          animate={{ x: [4, -8, 4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
      )}
      {/* Rollers */}
      {rollers.map((i) => (
        <g key={i} transform={`translate(${16 + i * 32}, 58)`}>
          <circle r="7" fill="url(#apf-roller)" stroke={METAL_DARK} strokeWidth="1" />
          {loop && (
            <motion.line
              x1="-4"
              y1="0"
              x2="4"
              y2="0"
              stroke={METAL_DARK}
              strokeWidth="1"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '0px 0px' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />
          )}
        </g>
      ))}
      {/* 3D boxes on belt */}
      {[
        { x: 24, delay: 0 },
        { x: 88, delay: 0.5 },
        { x: 148, delay: 1 },
      ].map((box) => (
        <motion.g
          key={box.x}
          animate={loop ? { x: [box.x, box.x + 80, box.x] } : undefined}
          transition={{ repeat: Infinity, duration: 5, delay: box.delay, ease: 'linear' }}
        >
          <rect x="0" y="28" width="22" height="18" fill={CYAN_DEEP} stroke={CYAN} strokeWidth="0.5" />
          <polygon points="0,28 6,22 28,22 22,28" fill={CYAN_BRIGHT} opacity="0.8" />
          <polygon points="22,28 28,22 28,40 22,46" fill={CYAN} opacity="0.6" />
        </motion.g>
      ))}
      {/* Pick-and-place gantry */}
      <motion.g animate={loop ? { y: [0, 10, 0] } : undefined} transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}>
        <rect x="100" y="-6" width="4" height="28" fill="url(#apf-metal)" />
        <rect x="88" y="-8" width="28" height="4" fill="url(#apf-metal)" rx="1" />
        <rect x="96" y="18" width="12" height="8" fill={METAL_MID} stroke={METAL_DARK} strokeWidth="0.5" rx="1" />
        <line x1="102" y1="26" x2="102" y2="32" stroke={METAL_LIGHT} strokeWidth="2" />
        <path d="M 96 32 L 108 32 L 106 38 L 98 38 Z" fill={CYAN} stroke={CYAN_BRIGHT} strokeWidth="0.5" />
      </motion.g>
      {/* Status LED */}
      <motion.circle
        cx="190"
        cy="12"
        r="3"
        fill="#22c55e"
        animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <text x="100" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">
        MANUFACTURING
      </text>
    </g>
  )
}

function RoboticArmScene({ loop }: { loop: boolean }) {
  return (
    <g transform="translate(518, 118)">
      <rect x="-10" y="52" width="56" height="12" rx="2" fill="url(#apf-metal)" stroke={METAL_DARK} strokeWidth="0.5" />
      <rect x="0" y="48" width="36" height="6" fill={METAL_DARK} rx="1" />
      <motion.g
        style={{ transformOrigin: '18px 48px' }}
        animate={loop ? { rotate: [-12, 22, -12] } : undefined}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        {/* Lower arm */}
        <rect x="10" y="14" width="16" height="34" rx="3" fill="url(#apf-arm-segment)" stroke={METAL_DARK} strokeWidth="0.75" />
        <circle cx="18" cy="14" r="9" fill="url(#apf-joint)" stroke={METAL_LIGHT} strokeWidth="1" />
        <circle cx="18" cy="14" r="4" fill={METAL_DARK} />
        <motion.g
          style={{ transformOrigin: '58px 14px' }}
          animate={loop ? { rotate: [-30, 45, -30] } : undefined}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.1 }}
        >
          {/* Upper arm */}
          <rect x="50" y="4" width="14" height="40" rx="3" fill="url(#apf-arm-segment)" stroke={METAL_DARK} strokeWidth="0.75" />
          <circle cx="58" cy="14" r="8" fill="url(#apf-joint)" stroke={METAL_LIGHT} strokeWidth="1" />
          <circle cx="58" cy="14" r="3.5" fill={METAL_DARK} />
          {/* Gripper */}
          <motion.g
            style={{ transformOrigin: '64px 44px' }}
            animate={loop ? { rotate: [0, 8, 0] } : undefined}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <rect x="58" y="40" width="12" height="6" fill={METAL_MID} rx="1" />
            <motion.line x1="60" y1="46" x2="58" y2="54" stroke={METAL_LIGHT} strokeWidth="2" strokeLinecap="round"
              animate={loop ? { x2: [58, 56, 58] } : undefined} transition={{ repeat: Infinity, duration: 2.5 }} />
            <motion.line x1="68" y1="46" x2="70" y2="54" stroke={METAL_LIGHT} strokeWidth="2" strokeLinecap="round"
              animate={loop ? { x2: [70, 72, 70] } : undefined} transition={{ repeat: Infinity, duration: 2.5 }} />
          </motion.g>
        </motion.g>
      </motion.g>
      <text x="28" y="78" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">
        ROBOTICS
      </text>
    </g>
  )
}

function ServiceRobotScene({ loop }: { loop: boolean }) {
  return (
    <motion.g
      transform="translate(520, 210)"
      animate={loop ? { y: [0, -4, 0] } : undefined}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      {/* Shadow */}
      <ellipse cx="36" cy="58" rx="28" ry="6" fill="rgba(0,0,0,0.35)" />
      {/* Antennas */}
      <motion.g animate={loop ? { rotate: [-5, 5, -5] } : undefined} style={{ transformOrigin: '24px 0px' }} transition={{ repeat: Infinity, duration: 1.8 }}>
        <line x1="24" y1="0" x2="24" y2="-14" stroke={METAL_LIGHT} strokeWidth="1.5" />
        <circle cx="24" cy="-15" r="2" fill={CYAN_BRIGHT} filter="url(#apf-soft-glow)" />
      </motion.g>
      <motion.g animate={loop ? { rotate: [5, -5, 5] } : undefined} style={{ transformOrigin: '48px 0px' }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.2 }}>
        <line x1="48" y1="0" x2="48" y2="-14" stroke={METAL_LIGHT} strokeWidth="1.5" />
        <circle cx="48" cy="-15" r="2" fill={CYAN_BRIGHT} filter="url(#apf-soft-glow)" />
      </motion.g>
      {/* Body */}
      <rect x="8" y="0" width="56" height="46" rx="16" fill="url(#apf-robot-body)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" filter="url(#apf-drop)" />
      <ellipse cx="24" cy="12" rx="10" ry="6" fill="rgba(255,255,255,0.15)" />
      {/* Face screen */}
      <rect x="16" y="12" width="40" height="24" rx="5" fill="#030a14" stroke="rgba(8,175,199,0.4)" strokeWidth="1" />
      <motion.circle cx="28" cy="22" r="3" fill={CYAN_BRIGHT} animate={loop ? { opacity: [0.6, 1, 0.6] } : undefined} transition={{ repeat: Infinity, duration: 3 }} />
      <motion.circle cx="44" cy="22" r="3" fill={CYAN_BRIGHT} animate={loop ? { opacity: [0.6, 1, 0.6] } : undefined} transition={{ repeat: Infinity, duration: 3, delay: 0.1 }} />
      <path d="M 26 30 Q 36 36 46 30" stroke={CYAN} strokeWidth="1.5" fill="none" />
      {/* Wheels */}
      {[18, 36, 54].map((wx, i) => (
        <g key={wx} transform={`translate(${wx}, 46)`}>
          <circle r="5" fill={METAL_DARK} stroke={METAL_MID} strokeWidth="1" />
          {loop && (
            <motion.circle r="2" fill={METAL_LIGHT}
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '0px 0px' }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.1, ease: 'linear' }}
            />
          )}
        </g>
      ))}
      {loop && (
        <>
          <motion.circle cx="72" cy="10" r="8" fill="none" stroke={CYAN} strokeWidth="0.5" opacity="0.4"
            animate={{ r: [8, 18], opacity: [0.4, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
          <motion.circle cx="72" cy="10" r="8" fill="none" stroke={CYAN} strokeWidth="0.5" opacity="0.4"
            animate={{ r: [8, 18], opacity: [0.4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
        </>
      )}
      <text x="36" y="72" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">
        AUTOMATION
      </text>
    </motion.g>
  )
}

export default function AIProcessFlowAnimation({ className = '' }: AIProcessFlowAnimationProps) {
  const { shouldLoop, shouldAnimate } = useMotionConfig()
  const loop = shouldLoop && shouldAnimate

  const dataLines = [
    { y: 112, delay: 0 },
    { y: 128, delay: 0.25 },
    { y: 144, delay: 0.5 },
    { y: 160, delay: 0.75 },
  ]

  const outputPaths = [
    { d: 'M 418 108 Q 460 88 500 68', delay: 0 },
    { d: 'M 418 128 L 518 148', delay: 0.35 },
    { d: 'M 418 148 Q 460 178 520 228', delay: 0.7 },
  ]

  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      {/* Ambient floor reflection */}
      <div className="absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <svg viewBox="0 0 760 300" className="w-full h-auto" fill="none">
        <defs>
          <linearGradient id="apf-stream" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0" />
            <stop offset="50%" stopColor={CYAN_BRIGHT} stopOpacity="1" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </linearGradient>
          <radialGradient id="apf-brain-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0.35" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="apf-brain-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(8,175,199,0.25)" />
            <stop offset="100%" stopColor="rgba(8,175,199,0.08)" />
          </linearGradient>
          <radialGradient id="apf-core-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0.2" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="apf-hex-face" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(8,175,199,0.18)" />
            <stop offset="50%" stopColor="rgba(5,13,24,0.6)" />
            <stop offset="100%" stopColor="rgba(8,175,199,0.12)" />
          </linearGradient>
          <linearGradient id="apf-ai-text" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor={CYAN_BRIGHT} />
            <stop offset="100%" stopColor={CYAN} />
          </linearGradient>
          <linearGradient id="apf-metal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={METAL_LIGHT} />
            <stop offset="50%" stopColor={METAL_MID} />
            <stop offset="100%" stopColor={METAL_DARK} />
          </linearGradient>
          <linearGradient id="apf-arm-segment" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={METAL_DARK} />
            <stop offset="40%" stopColor={METAL_LIGHT} />
            <stop offset="100%" stopColor={METAL_MID} />
          </linearGradient>
          <radialGradient id="apf-joint" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor={METAL_LIGHT} />
            <stop offset="100%" stopColor={METAL_DARK} />
          </radialGradient>
          <linearGradient id="apf-roller" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={METAL_MID} />
            <stop offset="100%" stopColor={METAL_DARK} />
          </linearGradient>
          <linearGradient id="apf-robot-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={CYAN_BRIGHT} />
            <stop offset="60%" stopColor={CYAN} />
            <stop offset="100%" stopColor={CYAN_DEEP} />
          </linearGradient>
          <pattern id="apf-belt-pattern" width="12" height="32" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="32" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
            <line x1="6" y1="0" x2="6" y2="32" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
          <filter id="apf-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="apf-drop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Perspective floor grid */}
        <g opacity="0.15">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={`h-${i}`} x1="40" y1={220 + i * 12} x2="720" y2={220 + i * 12} stroke={CYAN} strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line key={`v-${i}`} x1={80 + i * 80} y1="220" x2={120 + i * 70} y2="280" stroke={CYAN} strokeWidth="0.5" />
          ))}
        </g>

        <BrainInput loop={loop} />
        <DataCables loop={loop} lines={dataLines} />
        <AICore loop={loop} />
        <OutputPaths loop={loop} paths={outputPaths} />
        <ConveyorScene loop={loop} />
        <RoboticArmScene loop={loop} />
        <ServiceRobotScene loop={loop} />

        {/* Global data pulse */}
        {loop && (
          <motion.circle
            r="4"
            fill="white"
            filter="url(#apf-soft-glow)"
            animate={{
              cx: [80, 360, 600],
              cy: [128, 128, 148],
              opacity: [0, 0.9, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
        )}

        {/* Floating particles */}
        {loop &&
          Array.from({ length: 8 }, (_, i) => (
            <motion.circle
              key={i}
              r={1 + (i % 2)}
              fill={CYAN_BRIGHT}
              opacity="0.4"
              animate={{
                cx: [100 + i * 30, 200 + i * 20, 100 + i * 30],
                cy: [90 + i * 15, 70 + i * 10, 90 + i * 15],
                opacity: [0, 0.5, 0],
              }}
              transition={{ repeat: Infinity, duration: 4 + i * 0.5, delay: i * 0.4 }}
            />
          ))}
      </svg>
    </div>
  )
}
