import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const CYAN = '#08AFC7'
export const CYAN_BRIGHT = '#16C6DA'
export const CYAN_DEEP = '#067a8c'
export const GREEN = '#22c55e'
export const AMBER = '#f59e0b'
export const RED = '#ef4444'
export const METAL = '#9aa8b8'
export const METAL_DARK = '#4a5568'
export const DIM = 'rgba(8,175,199,0.35)'
export const DRAW = 'rgba(255,255,255,0.28)'

export function HeroBackdrop({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="relative w-full h-full bg-[#040c16] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(8,175,199,0.12)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(22,198,218,0.06)_0%,transparent_50%)]" />
      <div className="absolute top-4 left-5 text-[8px] font-mono text-cyan/50 tracking-[0.2em] uppercase z-10">{label}</div>
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <filter id="hs-glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="hs-metal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4dce4" />
            <stop offset="50%" stopColor={METAL} />
            <stop offset="100%" stopColor={METAL_DARK} />
          </linearGradient>
          <linearGradient id="hs-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={CYAN_BRIGHT} />
            <stop offset="100%" stopColor={CYAN_DEEP} />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  )
}

export function PulseDot({ cx, cy, loop, delay = 0 }: { cx: number; cy: number; loop: boolean; delay?: number }) {
  if (!loop) return <circle cx={cx} cy={cy} r="3" fill={CYAN_BRIGHT} />
  return (
    <>
      <motion.circle cx={cx} cy={cy} r="3" fill={CYAN_BRIGHT} filter="url(#hs-glow)"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2, delay }} />
      <motion.circle cx={cx} cy={cy} r="8" fill="none" stroke={CYAN} strokeWidth="0.5"
        animate={{ r: [6, 14], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 2, delay }} />
    </>
  )
}

export function FlowLine({ loop, x1, y1, x2, y2, delay = 0 }: { loop: boolean; x1: number; y1: number; x2: number; y2: number; delay?: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      {loop && (
        <motion.circle r="2.5" fill={CYAN_BRIGHT} filter="url(#hs-glow)"
          animate={{ cx: [x1, x2, x1], cy: [y1, y2, y1], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay, ease: 'easeInOut' }} />
      )}
    </g>
  )
}
