import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const NODES = [
  { id: 0, x: 120, y: 80, r: 5, layer: 0 },
  { id: 1, x: 220, y: 60, r: 4, layer: 0 },
  { id: 2, x: 320, y: 90, r: 6, layer: 0 },
  { id: 3, x: 400, y: 50, r: 4, layer: 0 },
  { id: 4, x: 80, y: 180, r: 5, layer: 1 },
  { id: 5, x: 180, y: 160, r: 7, layer: 1 },
  { id: 6, x: 280, y: 170, r: 5, layer: 1 },
  { id: 7, x: 380, y: 150, r: 6, layer: 1 },
  { id: 8, x: 460, y: 190, r: 4, layer: 1 },
  { id: 9, x: 140, y: 260, r: 5, layer: 2 },
  { id: 10, x: 260, y: 280, r: 6, layer: 2 },
  { id: 11, x: 360, y: 250, r: 5, layer: 2 },
  { id: 12, x: 200, y: 340, r: 4, layer: 3 },
  { id: 13, x: 300, y: 360, r: 5, layer: 3 },
]

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7], [4, 5],
  [5, 6], [6, 7], [7, 8], [4, 9], [5, 10], [6, 11], [9, 10], [10, 11],
  [9, 12], [10, 13], [11, 13], [12, 13], [5, 9], [6, 10],
]

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: 40 + (i * 27) % 480,
  y: 30 + (i * 19) % 380,
  size: 1 + (i % 3),
  delay: i * 0.3,
}))

const DATA_STREAMS = [
  { from: 0, to: 5, delay: 0 },
  { from: 2, to: 7, delay: 0.8 },
  { from: 5, to: 10, delay: 1.6 },
  { from: 10, to: 13, delay: 2.4 },
]

interface HeroVisualizationProps {
  scrollYProgress?: MotionValue<number>
}

export default function HeroVisualization({ scrollYProgress }: HeroVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile, shouldParallax, shouldLoop, shouldAnimate } = useMotionConfig()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const parallaxX = useTransform(springX, [-1, 1], [-18, 18])
  const parallaxY = useTransform(springY, [-1, 1], [-12, 12])
  const gridX = useTransform(springX, [-1, 1], [-8, 8])
  const gridY = useTransform(springY, [-1, 1], [-6, 6])

  const fallbackProgress = useMotionValue(0)
  const scrollY = scrollYProgress ?? fallbackProgress
  const vizY = useTransform(scrollY, [0, 1], [0, isMobile ? -60 : -120])
  const vizScale = useTransform(scrollY, [0, 1], [1, isMobile ? 1.08 : 1.15])
  const vizOpacity = useTransform(scrollY, [0, 0.9], [1, 0.25])
  const vizRotate = useTransform(scrollY, [0, 1], [0, isMobile ? 2 : 4])
  const glowScale = useTransform(scrollY, [0, 1], [1, 1.4])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!shouldParallax) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const getNode = (id: number) => NODES.find((n) => n.id === id)!

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={
        scrollYProgress
          ? { y: vizY, scale: vizScale, opacity: vizOpacity, rotate: vizRotate }
          : undefined
      }
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <motion.div
        style={scrollYProgress ? { scale: glowScale } : undefined}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan/[0.07] blur-[100px]"
      />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan/[0.04] blur-[80px]" />

      {/* Grid layer */}
      <motion.div
        style={shouldParallax ? { x: gridX, y: gridY } : {}}
        className="absolute inset-0 grid-bg opacity-40"
      />

      {/* Geometric accents */}
      <motion.svg
        viewBox="0 0 560 420"
        className={`absolute right-0 top-0 w-full h-full max-w-[700px] max-h-[600px] ${
          isMobile ? 'opacity-40 translate-x-[10%]' : 'translate-x-[5%] -translate-y-[5%]'
        }`}
        style={shouldParallax ? { x: parallaxX, y: parallaxY } : {}}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="stream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#08AFC7" stopOpacity="0" />
            <stop offset="50%" stopColor="#16C6DA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#08AFC7" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="#16C6DA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#08AFC7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Hexagon frame */}
        <motion.polygon
          points="280,20 380,80 380,180 280,240 180,180 180,80"
          fill="none"
          stroke="rgba(8,175,199,0.08)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
        />
        <motion.rect
          x="420" y="280" width="80" height="80"
          fill="none"
          stroke="rgba(8,175,199,0.06)"
          strokeWidth="1"
          transform="rotate(15 460 320)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        />

        {/* Orbital ring — scroll-reactive via CSS animation */}
        <motion.circle
          cx="300" cy="200" r="160"
          fill="none"
          stroke="rgba(8,175,199,0.05)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={shouldLoop ? { rotate: 360 } : undefined}
          style={{ originX: '300px', originY: '200px' }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        />

        {/* Connection lines */}
        {CONNECTIONS.map(([a, b], i) => {
          const na = getNode(a)
          const nb = getNode(b)
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="rgba(8,175,199,0.12)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.04, duration: 0.8 }}
            />
          )
        })}

        {/* Data streams */}
        {shouldLoop &&
          DATA_STREAMS.map((stream, i) => {
            const na = getNode(stream.from)
            const nb = getNode(stream.to)
            return (
              <motion.line
                key={`stream-${i}`}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke="url(#stream-grad)"
                strokeWidth="2"
                strokeDasharray="8 16"
                initial={{ strokeDashoffset: 24 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: stream.delay,
                  ease: 'linear',
                }}
              />
            )
          })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.g
            key={node.id}
            animate={
              shouldLoop
                ? {
                    x: [0, i % 2 === 0 ? 5 : -4, 0],
                    y: [0, i % 3 === 0 ? -7 : 5, 0],
                  }
                : undefined
            }
            transition={{
              repeat: Infinity,
              duration: 6 + node.layer * 1.4,
              delay: i * 0.18,
              ease: 'easeInOut',
            }}
          >
            <motion.circle
              cx={node.x} cy={node.y} r={node.r * 4}
              fill="url(#node-glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: shouldLoop ? [0.25, 0.55, 0.25] : 0.4, scale: 1 }}
              transition={{
                opacity: shouldLoop ? { repeat: Infinity, duration: 3.5 + node.layer, delay: i * 0.1 } : { duration: 0 },
                scale: { delay: shouldAnimate ? 0.8 + i * 0.05 : 0, duration: 0.5 },
              }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r={node.r}
              fill="#16C6DA"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
            />
            <circle cx={node.x} cy={node.y} r={1.5} fill="#fff" opacity="0.8" />
          </motion.g>
        ))}

        {/* Particles */}
        {shouldLoop &&
          PARTICLES.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x} cy={p.y} r={p.size}
              fill="#08AFC7"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.15, 0.5, 0.15],
                cy: [p.y, p.y - 15, p.y],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + p.delay,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

        {/* Code fragments */}
        {[
          { x: 30, y: 100, text: 'ingest()' },
          { x: 450, y: 120, text: 'detect()' },
          { x: 60, y: 320, text: 'validate()' },
          { x: 420, y: 60, text: 'infer()' },
        ].map((frag, i) => (
          <motion.text
            key={frag.text}
            x={frag.x} y={frag.y}
            fill="rgba(8,175,199,0.15)"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            initial={{ opacity: 0 }}
            animate={shouldLoop ? { opacity: [0.1, 0.25, 0.1] } : { opacity: 0.15 }}
            transition={shouldLoop ? { repeat: Infinity, duration: 5, delay: i * 1.2 } : { duration: 0 }}
          >
            {frag.text}
          </motion.text>
        ))}
      </motion.svg>

      {/* Vignette overlays */}
      <div className={`absolute inset-0 bg-gradient-to-r from-navy-deep ${isMobile ? 'via-navy-deep/90' : 'via-navy-deep/60'} to-transparent`} />
      <div className={`absolute inset-0 bg-gradient-to-t from-navy-deep ${isMobile ? 'via-navy-deep/50' : 'via-transparent'} to-navy-deep/40`} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-deep to-transparent" />
    </motion.div>
  )
}
