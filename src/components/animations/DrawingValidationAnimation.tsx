import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const CYAN = '#08AFC7'
const CYAN_BRIGHT = '#16C6DA'
const GREEN = '#22c55e'
const DIM = 'rgba(8,175,199,0.35)'
const FAINT = 'rgba(8,175,199,0.08)'
const DRAW = 'rgba(255,255,255,0.22)'

export const VALIDATION_PHASES = [
  'CAD / PDF Drawing',
  'AI Detection',
  'OCR',
  'Measurement',
  'Rule Validation',
  'PASS / FAIL',
] as const

const CYCLE_MS = 9000

interface DrawingValidationAnimationProps {
  onPhaseChange?: (index: number) => void
  className?: string
}

function BoxCorners({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const s = 10
  return (
    <g stroke={CYAN_BRIGHT} strokeWidth="1.5" fill="none">
      <path d={`M ${x} ${y + s} L ${x} ${y} L ${x + s} ${y}`} />
      <path d={`M ${x + w - s} ${y} L ${x + w} ${y} L ${x + w} ${y + s}`} />
      <path d={`M ${x} ${y + h - s} L ${x} ${y + h} L ${x + s} ${y + h}`} />
      <path d={`M ${x + w - s} ${y + h} L ${x + w} ${y + h} L ${x + w} ${y + h - s}`} />
    </g>
  )
}

function DetectionBox({
  x,
  y,
  w,
  h,
  label,
  confidence,
  visible,
  loop,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  confidence: string
  visible: boolean
  loop: boolean
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.g
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.rect
            x={x}
            y={y}
            width={w}
            height={h}
            fill="rgba(8,175,199,0.1)"
            stroke={CYAN}
            strokeWidth="1.5"
            animate={loop ? { strokeOpacity: [0.6, 1, 0.6] } : undefined}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <BoxCorners x={x} y={y} w={w} h={h} />
          <rect x={x} y={y - 16} width={label.length * 5.5 + 28} height="14" fill="rgba(5,13,24,0.9)" stroke={CYAN} strokeWidth="0.5" />
          <text x={x + 4} y={y - 5} fill={CYAN_BRIGHT} fontSize="7" fontFamily="monospace">
            {label} · {confidence}
          </text>
        </motion.g>
      )}
    </AnimatePresence>
  )
}

export default function DrawingValidationAnimation({
  onPhaseChange,
  className = '',
}: DrawingValidationAnimationProps) {
  const { shouldLoop, shouldAnimate } = useMotionConfig()
  const loop = shouldLoop && shouldAnimate
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!loop) {
      setPhase(0)
      onPhaseChange?.(0)
      return
    }
    const interval = setInterval(() => {
      setPhase((p) => {
        const next = (p + 1) % VALIDATION_PHASES.length
        onPhaseChange?.(next)
        return next
      })
    }, CYCLE_MS / VALIDATION_PHASES.length)
    onPhaseChange?.(0)
    return () => clearInterval(interval)
  }, [loop, onPhaseChange])

  const showDrawing = phase >= 0
  const showDetect = phase >= 1
  const showOcr = phase >= 2
  const showMeasure = phase >= 3
  const showRules = phase >= 4
  const showPass = phase >= 5

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.06] via-transparent to-blue-500/[0.04] pointer-events-none" />

      {/* HUD corners */}
      <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-cyan/40" />
      <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-cyan/40" />
      <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-cyan/40" />
      <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-cyan/40" />

      {/* Header bar */}
      <div className="relative flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-navy-deep/50">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-[10px] font-mono text-white/50 tracking-wide">drawing_rev3.pdf</span>
        </div>
        {loop && (
          <motion.span
            className="text-[9px] font-mono text-cyan/60 uppercase tracking-widest"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {VALIDATION_PHASES[phase]}
          </motion.span>
        )}
      </div>

      <svg viewBox="0 0 480 340" className="w-full h-auto relative z-10" aria-label="Drawing validation animation">
        <defs>
          <linearGradient id="dv-scan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0" />
            <stop offset="50%" stopColor={CYAN_BRIGHT} stopOpacity="0.9" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </linearGradient>
          <filter id="dv-glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Drawing canvas */}
        <rect x="24" y="24" width="280" height="220" fill="rgba(5,13,24,0.6)" stroke={DIM} strokeWidth="1" rx="2" />
        <g opacity="0.12">
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`g-${i}`} x1={24 + i * 24} y1="24" x2={24 + i * 24} y2="244" stroke={CYAN} strokeWidth="0.5" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`gh-${i}`} x1="24" y1={24 + i * 28} x2="304" y2={24 + i * 28} stroke={CYAN} strokeWidth="0.5" />
          ))}
        </g>

        {/* Scan frame corners */}
        <path d="M 32 32 L 48 32 L 48 36 L 36 36 L 36 48 L 32 48 Z" fill="none" stroke={CYAN} strokeWidth="1.5" opacity="0.7" />
        <path d="M 296 32 L 280 32 L 280 36 L 292 36 L 292 48 L 296 48 Z" fill="none" stroke={CYAN} strokeWidth="1.5" opacity="0.7" />
        <path d="M 32 236 L 48 236 L 48 232 L 36 232 L 36 220 L 32 220 Z" fill="none" stroke={CYAN} strokeWidth="1.5" opacity="0.7" />
        <path d="M 296 236 L 280 236 L 280 232 L 292 232 L 292 220 L 296 220 Z" fill="none" stroke={CYAN} strokeWidth="1.5" opacity="0.7" />

        {showDrawing && (
          <g opacity="0.85">
            {/* Flange rectangle */}
            <rect x="52" y="72" width="100" height="68" fill="none" stroke={DRAW} strokeWidth="1.2" />
            <circle cx="72" cy="92" r="6" fill="none" stroke={DRAW} strokeWidth="0.8" />
            <circle cx="132" cy="92" r="6" fill="none" stroke={DRAW} strokeWidth="0.8" />
            <circle cx="72" cy="120" r="6" fill="none" stroke={DRAW} strokeWidth="0.8" />
            <circle cx="132" cy="120" r="6" fill="none" stroke={DRAW} strokeWidth="0.8" />
            {/* Main circle */}
            <circle cx="210" cy="130" r="42" fill="none" stroke={DRAW} strokeWidth="1.2" />
            <line x1="210" y1="88" x2="210" y2="172" stroke={DRAW} strokeWidth="0.5" strokeDasharray="4 3" />
            <line x1="168" y1="130" x2="252" y2="130" stroke={DRAW} strokeWidth="0.5" strokeDasharray="4 3" />
            {/* Angled line */}
            <line x1="248" y1="72" x2="278" y2="148" stroke={DRAW} strokeWidth="1" />
            {/* Title block */}
            <rect x="220" y="188" width="72" height="44" fill="none" stroke={DRAW} strokeWidth="0.6" />
            <line x1="220" y1="200" x2="292" y2="200" stroke={DRAW} strokeWidth="0.4" />
            <text x="228" y="196" fill={DRAW} fontSize="5" fontFamily="monospace">REV 3.2</text>
            <text x="228" y="214" fill={DRAW} fontSize="5" fontFamily="monospace">SCALE 1:2</text>
            <text x="228" y="226" fill={DRAW} fontSize="5" fontFamily="monospace">GIRAKEE QA</text>
          </g>
        )}

        {/* Scan laser */}
        {loop && phase <= 2 && (
          <motion.g>
            <motion.rect
              x="24"
              width="280"
              height="40"
              fill="url(#dv-scan)"
              opacity="0.35"
              animate={{ y: [24, 204, 24] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
            />
            <motion.line
              x1="24"
              x2="304"
              stroke={CYAN_BRIGHT}
              strokeWidth="2"
              filter="url(#dv-glow)"
              animate={{ y1: [24, 244, 24], y2: [24, 244, 24] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
            />
          </motion.g>
        )}

        <DetectionBox x={48} y={68} w={108} h={76} label="PART-A" confidence="0.97" visible={showDetect} loop={loop} />
        <DetectionBox x={168} y={88} w={88} h={88} label="BORE" confidence="0.94" visible={showDetect} loop={loop} />

        {/* OCR labels */}
        <AnimatePresence>
          {showOcr && (
            <>
              <motion.text
                x="52"
                y="62"
                fill={CYAN_BRIGHT}
                fontSize="9"
                fontFamily="monospace"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 52 }}
              >
                D=120.0
              </motion.text>
              <motion.text
                x="218"
                y="82"
                fill={CYAN_BRIGHT}
                fontSize="9"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                R=40.0
              </motion.text>
              <motion.text
                x="248"
                y="168"
                fill={CYAN_BRIGHT}
                fontSize="8"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                ANG=45°
              </motion.text>
            </>
          )}
        </AnimatePresence>

        {/* Measurement lines */}
        <AnimatePresence>
          {showMeasure && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1="48" y1="252" x2="156" y2="252" stroke={CYAN} strokeWidth="1" />
              <line x1="48" y1="246" x2="48" y2="258" stroke={CYAN} strokeWidth="1" />
              <line x1="156" y1="246" x2="156" y2="258" stroke={CYAN} strokeWidth="1" />
              <motion.line
                x1="48"
                y1="252"
                x2="48"
                y2="252"
                stroke={CYAN_BRIGHT}
                strokeWidth="2"
                animate={{ x2: [48, 156] }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <text x="82" y="268" fill={CYAN} fontSize="8" fontFamily="monospace">D: 120.0 ±0.5</text>
              <line x1="168" y1="252" x2="252" y2="252" stroke={CYAN} strokeWidth="1" opacity="0.6" />
              <text x="195" y="268" fill={CYAN} fontSize="8" fontFamily="monospace" opacity="0.7">R: 40.0 ±0.2</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Rule engine panel */}
        <rect x="320" y="24" width="136" height="220" fill="rgba(8,175,199,0.03)" stroke={DIM} strokeWidth="1" rx="2" />
        <rect x="320" y="24" width="136" height="16" fill="rgba(8,175,199,0.1)" />
        <text x="388" y="35" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle" fontFamily="monospace">
          RULE ENGINE
        </text>
        {['Dim check: 120.0mm', 'Tolerance: ±0.5', 'OCR text match', 'Spec compliance'].map((rule, i) => (
          <motion.g key={rule}>
            <motion.text
              x="332"
              y={58 + i * 28}
              fill={showRules && phase >= 4 ? GREEN : 'rgba(255,255,255,0.25)'}
              fontSize="7"
              fontFamily="monospace"
              animate={showRules && loop ? { opacity: [0.3, 1, 1] } : undefined}
              transition={{ delay: i * 0.25, duration: 0.4 }}
            >
              {showRules && phase >= 4 ? `✓ ${rule}` : `○ ${rule}`}
            </motion.text>
          </motion.g>
        ))}

        {/* OCR output stream */}
        <rect x="320" y="196" width="136" height="48" fill={FAINT} stroke={DIM} strokeWidth="0.5" />
        <text x="332" y="212" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">OCR stream</text>
        {showOcr && (
          <motion.text
            x="332"
            y="228"
            fill={CYAN}
            fontSize="6"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
          >
            PART-A · D120 · R40 · OK
          </motion.text>
        )}

        {/* PASS stamp */}
        <AnimatePresence>
          {showPass && (
            <motion.g
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: -4 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <rect x="118" y="108" width="92" height="36" rx="2" fill={GREEN} filter="url(#dv-glow)" />
              <text x="164" y="132" fill="#071426" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                PASS
              </text>
              {loop && (
                <motion.circle
                  cx="164"
                  cy="126"
                  r="50"
                  fill="none"
                  stroke={GREEN}
                  strokeWidth="1"
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                />
              )}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        <rect x="24" y="296" width="432" height="4" fill="rgba(255,255,255,0.06)" rx="2" />
        <motion.rect
          x="24"
          y="296"
          height="4"
          fill={CYAN}
          rx="2"
          animate={{ width: [0, 432 * ((phase + 1) / VALIDATION_PHASES.length)] }}
          transition={{ duration: 0.4 }}
        />

        {/* Status line */}
        <text x="240" y="322" fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace" opacity="0.6">
          YOLOv8 · OpenCV · OCR · Rule Engine · CAD/PDF
        </text>
      </svg>

      {/* Phase dots */}
      <div className="flex justify-center gap-2 pb-4 px-5">
        {VALIDATION_PHASES.map((_, i) => (
          <motion.div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === phase ? 'w-6 bg-cyan' : 'w-1.5 bg-white/15'}`}
            layout
          />
        ))}
      </div>
    </div>
  )
}
