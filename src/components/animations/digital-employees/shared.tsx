import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const CYAN = '#08AFC7'
export const CYAN_BRIGHT = '#16C6DA'
export const GREEN = '#22c55e'
export const AMBER = '#f59e0b'
export const RED = '#ef4444'

export function SceneShell({
  label,
  uid,
  children,
}: {
  label: string
  uid: string
  children: ReactNode
}) {
  return (
    <div className="relative w-full h-full bg-[#040c16] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_18%,rgba(8,175,199,0.14)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_78%,rgba(22,198,218,0.07)_0%,transparent_48%)]" />
      <p className="absolute top-4 left-5 z-10 text-[8px] font-mono text-cyan/50 tracking-[0.2em] uppercase">
        {label}
      </p>
      <svg viewBox="0 0 480 300" className="w-full h-full" aria-hidden="true">
        <defs>
          <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id={`${uid}-cyan`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={CYAN_BRIGHT} />
            <stop offset="100%" stopColor="#067a8c" />
          </linearGradient>
        </defs>
        {children}
      </svg>
    </div>
  )
}

export function DigitalEmployee({
  x,
  y,
  loop,
  scale = 1,
  glowId,
  name,
  status,
}: {
  x: number
  y: number
  loop: boolean
  scale?: number
  glowId: string
  name?: string
  status?: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {loop && (
        <motion.circle
          r="34"
          fill="none"
          stroke={CYAN}
          strokeWidth="0.7"
          animate={{ r: [24, 38], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        />
      )}
      <circle r="22" fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1.2" />
      <circle cy="-10" r="9" fill="#07131f" stroke={CYAN} strokeWidth="1.4" />
      <motion.rect
        x="-6"
        y="-13"
        width="12"
        height="4.5"
        rx="1"
        fill={CYAN_BRIGHT}
        animate={loop ? { opacity: [0.35, 1, 0.35] } : undefined}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <path
        d="M-12 6 Q0 20 12 6"
        fill="rgba(8,175,199,0.16)"
        stroke={CYAN}
        strokeWidth="1.1"
      />
      <circle cy="8" r="3" fill={CYAN_BRIGHT} filter={`url(#${glowId})`} />
      {name && (
        <text
          y="38"
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="7"
          fontFamily="monospace"
        >
          {name}
        </text>
      )}
      {status && (
        <text y="48" textAnchor="middle" fill={GREEN} fontSize="6" fontFamily="monospace">
          {status}
        </text>
      )}
    </g>
  )
}

export function MiniEmployee({
  x,
  y,
  loop,
  delay = 0,
}: {
  x: number
  y: number
  loop: boolean
  delay?: number
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.circle
        r="11"
        fill="rgba(8,175,199,0.1)"
        stroke={CYAN}
        strokeWidth="1"
        animate={loop ? { opacity: [0.45, 1, 0.45] } : undefined}
        transition={{ repeat: Infinity, duration: 2.4, delay }}
      />
      <circle cy="-3" r="3.5" fill={CYAN_BRIGHT} />
      <path d="M-6 4 Q0 10 6 4" fill="none" stroke={CYAN} strokeWidth="1" />
    </g>
  )
}
