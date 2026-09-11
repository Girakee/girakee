import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import type { SceneType } from '../../data/sceneThemes'

interface PremiumSceneProps {
  scene: SceneType
  size?: 'hero' | 'page' | 'section'
  className?: string
}

const CYAN = '#08AFC7'
const CYAN_DIM = 'rgba(8,175,199,0.35)'
const CYAN_FAINT = 'rgba(8,175,199,0.12)'

function SceneWrapper({ children, size, className }: { children: ReactNode; size: string; className: string }) {
  const opacity = size === 'hero' ? 1 : size === 'page' ? 0.85 : 0.7
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true" style={{ opacity }}>
      <div className="absolute inset-0 scene-vignette" />
      <div className="absolute top-0 right-0 w-[70%] h-full scene-glow-right" />
      {children}
    </div>
  )
}

function NeuralScene({ loop }: { loop: boolean }) {
  const nodes = [
    { cx: 280, cy: 90, r: 5 }, { cx: 380, cy: 70, r: 4 }, { cx: 460, cy: 110, r: 6 },
    { cx: 320, cy: 170, r: 5 }, { cx: 420, cy: 160, r: 7 }, { cx: 500, cy: 190, r: 4 },
    { cx: 360, cy: 240, r: 5 }, { cx: 440, cy: 260, r: 6 },
  ]
  const edges = [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[4,7],[6,7]]

  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,680px)]" preserveAspectRatio="xMaxYMid slice">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={CYAN_DIM} strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.05, duration: 0.8 }}
        />
      ))}
      {loop && edges.slice(0, 4).map(([a, b], i) => (
        <motion.circle key={`p-${i}`} r="2" fill={CYAN}
          animate={{
            cx: [nodes[a].cx, nodes[b].cx, nodes[a].cx],
            cy: [nodes[a].cy, nodes[b].cy, nodes[a].cy],
            opacity: [0, 0.9, 0],
          }}
          transition={{ repeat: Infinity, duration: 2.5 + i * 0.4, delay: i * 0.5, ease: 'easeInOut' }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.g key={i}>
          <motion.circle cx={n.cx} cy={n.cy} r={n.r * 3} fill={CYAN_FAINT}
            animate={loop ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.4 }}
            transition={{ repeat: Infinity, duration: 3 + i * 0.2 }}
          />
          <motion.circle cx={n.cx} cy={n.cy} r={n.r} fill={CYAN}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.06 }}
          />
        </motion.g>
      ))}
    </svg>
  )
}

function VisionScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,620px)]">
      <motion.rect x="200" y="50" width="320" height="220" fill="none" stroke={CYAN_DIM} strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
      />
      {loop && (
        <motion.line x1="200" y1="50" x2="520" y2="50" stroke={CYAN} strokeWidth="2" opacity="0.6"
          animate={{ y1: [50, 270, 50], y2: [50, 270, 50] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />
      )}
      {[{ x: 240, y: 100, w: 100, h: 70 }, { x: 360, y: 130, w: 80, h: 80 }, { x: 280, y: 200, w: 120, h: 40 }].map((box, i) => (
        <motion.rect key={i} x={box.x} y={box.y} width={box.w} height={box.h}
          fill="rgba(8,175,199,0.06)" stroke={CYAN} strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.2 }}
        />
      ))}
      <motion.text x="220" y="75" fill={CYAN} fontSize="9" fontFamily="monospace" opacity="0.5"
        animate={loop ? { opacity: [0.3, 0.7, 0.3] } : undefined}
        transition={{ repeat: Infinity, duration: 2 }}
      >DETECT · OCR · VALIDATE</motion.text>
    </svg>
  )
}

function CloudScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,580px)]">
      {[0, 1, 2].map((col) => (
        <g key={col}>
          {[0, 1, 2, 3].map((row) => (
            <motion.rect key={row}
              x={280 + col * 55} y={60 + row * 50} width="40" height="35"
              fill="rgba(8,175,199,0.04)" stroke={CYAN_FAINT} strokeWidth="1"
              animate={loop ? { opacity: [0.4, 0.8, 0.4] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: (col + row) * 0.15 }}
            />
          ))}
        </g>
      ))}
      <motion.path
        d="M340,40 Q380,20 420,40 Q460,20 500,40 Q520,55 500,70 Q480,85 440,75 Q400,90 360,75 Q320,85 300,70 Q280,55 300,40 Q320,25 340,40"
        fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1.5"
        animate={loop ? { y: [0, -4, 0] } : undefined}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      {loop && [0, 1, 2].map((i) => (
        <motion.circle key={i} cx={320 + i * 60} cy={200} r="2" fill={CYAN}
          animate={{ cy: [200, 120, 200], opacity: [0, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.6, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

function ShieldScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,500px)]">
      <motion.path
        d="M400,60 L460,85 L460,155 Q460,210 400,240 Q340,210 340,155 L340,85 Z"
        fill="rgba(8,175,199,0.06)" stroke={CYAN} strokeWidth="1.5"
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {loop && (
        <>
          <motion.circle cx="400" cy="150" r="50" fill="none" stroke={CYAN_DIM} strokeWidth="1"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.circle cx="400" cy="150" r="70" fill="none" stroke={CYAN_FAINT} strokeWidth="1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          />
        </>
      )}
      <motion.path d="M385,150 L398,165 L420,135" fill="none" stroke={CYAN} strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
      />
    </svg>
  )
}

function DataScene({ loop }: { loop: boolean }) {
  const bars = [0.5, 0.75, 0.45, 0.9, 0.6, 0.8, 0.55]
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,560px)]">
      {bars.map((h, i) => (
        <motion.rect key={i}
          x={300 + i * 28} y={260 - h * 160} width="18" height={h * 160}
          fill="rgba(8,175,199,0.25)" stroke={CYAN_DIM} strokeWidth="1"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          style={{ originY: 1 }}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
        />
      ))}
      <motion.polyline
        points="300,180 328,140 356,160 384,100 412,120 440,80 468,95"
        fill="none" stroke={CYAN} strokeWidth="1.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      />
      {loop && (
        <motion.circle r="4" fill={CYAN}
          animate={{ cx: [300, 468], cy: [180, 95], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        />
      )}
    </svg>
  )
}

function DevicesScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,560px)]">
      <motion.rect x="320" y="50" width="200" height="130" rx="2"
        fill="rgba(8,175,199,0.04)" stroke={CYAN_DIM} strokeWidth="1"
        animate={loop ? { y: [50, 46, 50] } : undefined}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.rect x="420" y="100" width="70" height="130" rx="6"
        fill="rgba(8,175,199,0.06)" stroke={CYAN} strokeWidth="1.5"
        animate={loop ? { y: [100, 94, 100] } : undefined}
        transition={{ repeat: Infinity, duration: 4, delay: 0.3 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.rect key={i} x={340 + i * 50} y={80} width="35" height="4" fill={CYAN_FAINT}
          animate={loop ? { opacity: [0.2, 0.6, 0.2] } : undefined}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
        />
      ))}
    </svg>
  )
}

function WireframeScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,540px)]">
      {[{ x: 300, y: 60 }, { x: 400, y: 90 }, { x: 350, y: 170 }].map((p, i) => (
        <motion.g key={i} animate={loop ? { y: [0, -5, 0] } : undefined} transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.4 }}>
          <rect x={p.x} y={p.y} width="140" height="90" fill="none" stroke={CYAN_DIM} strokeWidth="1" strokeDasharray="4 4" />
          <rect x={p.x + 12} y={p.y + 12} width="50" height="6" fill={CYAN_FAINT} />
          <rect x={p.x + 12} y={p.y + 28} width="110" height="4" fill={CYAN_FAINT} opacity="0.5" />
          <rect x={p.x + 12} y={p.y + 40} width="90" height="4" fill={CYAN_FAINT} opacity="0.3" />
        </motion.g>
      ))}
    </svg>
  )
}

function PipelineScene({ loop }: { loop: boolean }) {
  const steps = ['Ingest', 'Test', 'Validate', 'Deploy']
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,580px)]">
      {steps.map((label, i) => (
        <g key={label}>
          <motion.rect x={280 + i * 65} y={120} width="55" height="36"
            fill="rgba(8,175,199,0.06)" stroke={CYAN_DIM} strokeWidth="1"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
          />
          <text x={307 + i * 65} y={143} fill={CYAN} fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.7">{label}</text>
          {i < steps.length - 1 && (
            <motion.line x1={335 + i * 65} y1={138} x2={345 + i * 65} y2={138}
              stroke={CYAN} strokeWidth="1"
              animate={loop ? { opacity: [0.2, 1, 0.2] } : undefined}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
            />
          )}
        </g>
      ))}
      {loop && (
        <motion.circle r="3" fill={CYAN}
          animate={{ cx: [307, 372, 437, 502], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          cy={138}
        />
      )}
    </svg>
  )
}

function QAValidationScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,560px)]">
      <rect x="280" y="70" width="180" height="130" fill="rgba(255,255,255,0.02)" stroke={CYAN_DIM} strokeWidth="1" />
      <rect x="310" y="100" width="50" height="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="410" cy="120" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {loop && (
        <motion.line x1="280" y1="70" x2="460" y2="70" stroke={CYAN} strokeWidth="2"
          animate={{ y1: [70, 200, 70], y2: [70, 200, 70] }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        />
      )}
      {['Dim check ✓', 'Tolerance ✓', 'OCR match ✓', 'Spec OK ✓'].map((r, i) => (
        <motion.text key={r} x="480" y={95 + i * 24} fill={CYAN} fontSize="9" fontFamily="monospace"
          animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: i * 0.7 }}
        >{r}</motion.text>
      ))}
      {loop && (
        <motion.text x="370" y="230" fill={CYAN} fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle"
          animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 2 }}
        >PASS</motion.text>
      )}
    </svg>
  )
}

function TerminalScene({ loop }: { loop: boolean }) {
  const lines = ['$ git clone project', '$ npm run build', '$ deploy --prod', '✓ Build successful']
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,520px)]">
      <motion.rect x="300" y="70" width="240" height="180" fill="rgba(8,175,199,0.04)" stroke={CYAN_DIM} strokeWidth="1" />
      {lines.map((line, i) => (
        <motion.text key={line} x="320" y={110 + i * 28} fill={i === 3 ? CYAN : 'rgba(255,255,255,0.35)'}
          fontSize="10" fontFamily="monospace"
          initial={{ opacity: 0, x: 310 }} animate={{ opacity: 1, x: 320 }}
          transition={{ delay: 0.3 + i * 0.25 }}
        >
          {line}
        </motion.text>
      ))}
      {loop && (
        <motion.rect x="320" y="200" width="8" height="14" fill={CYAN}
          animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </svg>
  )
}

function OrbitScene({ loop }: { loop: boolean }) {
  const items = ['AI', 'Cloud', 'Data', 'Web', 'Sec']
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,560px)]">
      <motion.circle cx="420" cy="160" r="80" fill="none" stroke={CYAN_FAINT} strokeWidth="1"
        animate={loop ? { rotate: 360 } : undefined}
        style={{ originX: '420px', originY: '160px' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      {items.map((label, i) => {
        const angle = (i / items.length) * Math.PI * 2
        const cx = 420 + Math.cos(angle) * 80
        const cy = 160 + Math.sin(angle) * 80
        return (
          <motion.g key={label}>
            <circle cx={cx} cy={cy} r="16" fill="rgba(8,175,199,0.1)" stroke={CYAN_DIM} strokeWidth="1" />
            <text x={cx} y={cy + 4} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">{label}</text>
          </motion.g>
        )
      })}
      <circle cx="420" cy="160" r="6" fill={CYAN} />
    </svg>
  )
}

function NetworkScene({ loop }: { loop: boolean }) {
  const hubs = [{ x: 400, y: 160 }, { x: 320, y: 100 }, { x: 500, y: 90 }, { x: 480, y: 220 }, { x: 300, y: 210 }]
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,580px)]">
      {hubs.slice(1).map((h, i) => (
        <motion.line key={i} x1={hubs[0].x} y1={hubs[0].y} x2={h.x} y2={h.y}
          stroke={CYAN_DIM} strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
        />
      ))}
      {loop && hubs.slice(1).map((h, i) => (
        <motion.circle key={`d-${i}`} r="2" fill={CYAN}
          animate={{
            cx: [hubs[0].x, h.x, hubs[0].x],
            cy: [hubs[0].y, h.y, hubs[0].y],
            opacity: [0, 0.8, 0],
          }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.7, ease: 'easeInOut' }}
        />
      ))}
      {hubs.map((h, i) => (
        <circle key={i} cx={h.x} cy={h.y} r={i === 0 ? 6 : 4} fill={CYAN} opacity={i === 0 ? 1 : 0.5} />
      ))}
    </svg>
  )
}

function TalentScene({ loop }: { loop: boolean }) {
  return (
    <svg viewBox="0 0 600 320" className="absolute right-0 top-0 h-full w-[min(100%,500px)]">
      {[0, 1, 2, 3].map((i) => (
        <motion.g key={i}
          animate={loop ? { y: [0, -3, 0] } : undefined}
          transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.2 }}
        >
          <circle cx={340 + i * 45} cy={140} r="14" fill="rgba(8,175,199,0.1)" stroke={CYAN_DIM} strokeWidth="1" />
          <line x1={340 + i * 45} y1="154" x2={340 + i * 45} y2="190" stroke={CYAN_FAINT} strokeWidth="1" />
        </motion.g>
      ))}
      <motion.line x1="300" y1="200" x2="520" y2="200" stroke={CYAN_DIM} strokeWidth="1"
        strokeDasharray="6 4"
        animate={loop ? { strokeDashoffset: [0, -20] } : undefined}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      />
    </svg>
  )
}

const SCENE_MAP: Record<SceneType, (props: { loop: boolean }) => ReactNode> = {
  hero: NeuralScene,
  neural: NeuralScene,
  vision: VisionScene,
  cloud: CloudScene,
  shield: ShieldScene,
  data: DataScene,
  devices: DevicesScene,
  wireframe: WireframeScene,
  pipeline: PipelineScene,
  'qa-validation': QAValidationScene,
  terminal: TerminalScene,
  orbit: OrbitScene,
  network: NetworkScene,
  talent: TalentScene,
  classroom: TerminalScene,
}

export default function PremiumScene({ scene, size = 'page', className = '' }: PremiumSceneProps) {
  const { shouldAnimate, isMobile } = useMotionConfig()

  if (scene === 'hero') return null

  const Scene = SCENE_MAP[scene] ?? OrbitScene
  const loop = shouldAnimate

  return (
    <SceneWrapper size={size} className={className}>
      <div className={`absolute inset-0 grid-bg ${isMobile ? 'opacity-35' : 'opacity-50'}`} />
      <Scene loop={loop} />
      {loop && (
        <>
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
            animate={{ top: ['12%', '88%', '12%'] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          />
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan/50"
              style={{ left: `${20 + i * 14}%`, top: `${30 + (i % 3) * 20}%` }}
              animate={{ opacity: [0.1, 0.7, 0.1], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.3 }}
            />
          ))}
        </>
      )}
    </SceneWrapper>
  )
}
