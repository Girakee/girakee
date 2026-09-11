import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMotionConfig } from '../../../hooks/useMotionConfig'

export const CYAN = '#08AFC7'
export const CYAN_BRIGHT = '#16C6DA'
export const DIM = 'rgba(8,175,199,0.35)'
export const FAINT = 'rgba(8,175,199,0.1)'
export const GREEN = '#22c55e'
export const AMBER = '#f59e0b'
export const RED = '#ef4444'

export function HudFrame({ children, label, status }: { children: ReactNode; label: string; status?: string }) {
  const { shouldAnimate } = useMotionConfig()
  return (
    <div className="relative w-full h-full bg-[#050d18] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.07] via-transparent to-blue-500/[0.04]" />
      <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan/50" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan/50" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan/50" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan/50" />
      <div className="absolute top-3 left-6 right-6 flex justify-between items-center z-10">
        <span className="text-[8px] font-mono text-cyan/60 tracking-widest uppercase">{label}</span>
        {shouldAnimate && (
          <motion.span className="flex items-center gap-1.5 text-[7px] font-mono text-cyan/40">
            <motion.span className="w-1.5 h-1.5 rounded-full bg-cyan" animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} />
            {status ?? 'LIVE'}
          </motion.span>
        )}
      </div>
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <filter id="ls-glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="ls-stream" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0" />
            <stop offset="50%" stopColor={CYAN_BRIGHT} stopOpacity="1" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  )
}

export function Panel({ x, y, w, h, title, loop, children }: { x: number; y: number; w: number; h: number; title: string; loop: boolean; children?: ReactNode }) {
  return (
    <g>
      <motion.rect x={x} y={y} width={w} height={h} fill="rgba(8,175,199,0.03)" stroke={DIM} strokeWidth="1"
        animate={loop ? { strokeOpacity: [0.4, 0.8, 0.4] } : undefined}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <rect x={x} y={y} width={w} height={14} fill="rgba(8,175,199,0.08)" />
      <circle cx={x + 8} cy={y + 7} r="2" fill={RED} opacity="0.7" />
      <circle cx={x + 16} cy={y + 7} r="2" fill={AMBER} opacity="0.7" />
      <circle cx={x + 24} cy={y + 7} r="2" fill={GREEN} opacity="0.7" />
      <text x={x + w / 2} y={y + 10} fill="rgba(255,255,255,0.35)" fontSize="6" textAnchor="middle" fontFamily="monospace">{title}</text>
      {children}
    </g>
  )
}

export function DataStream({ loop, from, to, delay = 0 }: { loop: boolean; from: [number, number]; to: [number, number]; delay?: number }) {
  if (!loop) return null
  const mx = (from[0] + to[0]) / 2
  const my = (from[1] + to[1]) / 2 - 20
  const d = `M ${from[0]} ${from[1]} Q ${mx} ${my} ${to[0]} ${to[1]}`
  return (
    <>
      <path d={d} fill="none" stroke={DIM} strokeWidth="0.75" />
      <motion.circle r="3" fill={CYAN_BRIGHT} filter="url(#ls-glow)"
        animate={{
          cx: [from[0], mx, to[0]],
          cy: [from[1], my, to[1]],
          opacity: [0, 1, 0],
        }}
        transition={{ repeat: Infinity, duration: 2.2, delay, ease: 'easeInOut' }}
      />
    </>
  )
}

export function StatusLine({ loop, y, text }: { loop: boolean; y: number; text: string }) {
  return (
    <motion.text x="240" y={y} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace" opacity="0.7"
      animate={loop ? { opacity: [0.3, 0.9, 0.3] } : undefined}
      transition={{ repeat: Infinity, duration: 2.5 }}
    >{text}</motion.text>
  )
}
