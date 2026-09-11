import { useId } from 'react'
import { motion } from 'framer-motion'
import { useMotionConfig } from '../../../hooks/useMotionConfig'
import { platformOrbitLabels } from '../../../data/digitalEmployeeScenes'
import { AMBER, CYAN, CYAN_BRIGHT, DigitalEmployee, GREEN, MiniEmployee, SceneShell } from './shared'

const STEPS = ['Understand', 'Decide', 'Execute', 'Verify', 'Escalate']

export function PlatformWorkforceScene({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const { shouldLoop } = useMotionConfig()
  const glowId = `${uid}-glow`
  const loop = shouldLoop

  const satellites = [
    { x: 86, y: 78 },
    { x: 150, y: 48 },
    { x: 330, y: 48 },
    { x: 394, y: 78 },
    { x: 118, y: 188 },
    { x: 362, y: 188 },
  ]

  return (
    <div className={className}>
      <SceneShell label="AI Digital Workforce" uid={uid}>
        {satellites.map((node, i) => (
          <g key={platformOrbitLabels[i]}>
            <line
              x1={node.x}
              y1={node.y}
              x2="240"
              y2="118"
              stroke="rgba(8,175,199,0.18)"
              strokeWidth="1"
            />
            {loop && (
              <motion.circle
                r="2.4"
                fill={CYAN_BRIGHT}
                filter={`url(#${glowId})`}
                animate={{ cx: [node.x, 240, node.x], cy: [node.y, 118, node.y], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, delay: i * 0.35, ease: 'easeInOut' }}
              />
            )}
            <MiniEmployee x={node.x} y={node.y} loop={loop} delay={i * 0.2} />
            <text
              x={node.x}
              y={node.y + 24}
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="6"
              fontFamily="monospace"
            >
              {platformOrbitLabels[i]}
            </text>
          </g>
        ))}

        <DigitalEmployee x={240} y={118} loop={loop} scale={1.15} glowId={glowId} name="Digital Employee" status="LIVE" />

        {STEPS.map((step, i) => {
          const x = 48 + i * 86
          return (
            <g key={step}>
              <rect
                x={x}
                y={236}
                width="74"
                height="36"
                rx="3"
                fill="rgba(8,175,199,0.06)"
                stroke="rgba(255,255,255,0.12)"
              />
              <text x={x + 37} y={252} textAnchor="middle" fill={CYAN} fontSize="6" fontFamily="monospace">
                {String(i + 1).padStart(2, '0')}
              </text>
              <text x={x + 37} y={264} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="7" fontFamily="monospace">
                {step}
              </text>
            </g>
          )
        })}

        {loop && (
          <motion.rect
            y={232}
            width="18"
            height="44"
            rx="2"
            fill="rgba(8,175,199,0.18)"
            stroke={CYAN_BRIGHT}
            strokeWidth="1"
            animate={{ x: [48, 392, 48] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut' }}
          />
        )}
      </SceneShell>
    </div>
  )
}

export function PlatformCommandScene({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const { shouldLoop } = useMotionConfig()
  const glowId = `${uid}-glow`
  const loop = shouldLoop

  const tickets = [
    { label: 'Prior auth', delay: 0 },
    { label: 'KYC pack', delay: 1.4 },
    { label: 'PO match', delay: 2.8 },
  ]

  return (
    <div className={className}>
      <SceneShell label="Digital Employee · Control Loop" uid={uid}>
        <DigitalEmployee x={70} y={120} loop={loop} glowId={glowId} name="Agent" status="WORKING" />

        {STEPS.map((step, i) => {
          const x = 140 + i * 64
          return (
            <g key={step}>
              <rect x={x} y={58} width="56" height="22" rx="2" fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="0.8" />
              <text x={x + 28} y={73} textAnchor="middle" fill={CYAN} fontSize="6" fontFamily="monospace">
                {step}
              </text>
              {i < STEPS.length - 1 && (
                <line x1={x + 56} y1={69} x2={x + 64} y2={69} stroke="rgba(255,255,255,0.2)" />
              )}
            </g>
          )
        })}

        {tickets.map((ticket) => (
          <motion.g
            key={ticket.label}
            initial={{ x: 140, y: 110, opacity: 0 }}
            animate={loop ? { x: [140, 396, 396], y: [110, 110, 200], opacity: [0, 1, 0] } : undefined}
            transition={{ repeat: Infinity, duration: 6.5, delay: ticket.delay, ease: 'easeInOut' }}
          >
            <rect width="70" height="22" rx="3" fill="#07131f" stroke={CYAN_BRIGHT} />
            <text x="35" y="15" textAnchor="middle" fill="white" fontSize="7" fontFamily="monospace">
              {ticket.label}
            </text>
          </motion.g>
        ))}

        <rect x="140" y="168" width="300" height="96" rx="4" fill="rgba(5,13,24,0.85)" stroke="rgba(255,255,255,0.1)" />
        {[
          { t: 'Case ingested from source system', c: CYAN },
          { t: 'Policy applied · confidence 0.94', c: AMBER },
          { t: 'Action posted to system of record', c: GREEN },
          { t: 'Evidence attached · audit ready', c: CYAN_BRIGHT },
        ].map((row, i) => (
          <motion.text
            key={row.t}
            x="156"
            y={192 + i * 18}
            fill={row.c}
            fontSize="8"
            fontFamily="monospace"
            animate={loop ? { opacity: [0.2, 1, 0.35] } : undefined}
            transition={{ repeat: Infinity, duration: 4, delay: i * 0.55 }}
          >
            {row.t}
          </motion.text>
        ))}
      </SceneShell>
    </div>
  )
}
