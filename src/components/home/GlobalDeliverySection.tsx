import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TextReveal from '../animations/TextReveal'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const regions = [
  { name: 'US', full: 'United States', x: 85, y: 130, curve: -40 },
  { name: 'UK', full: 'United Kingdom', x: 175, y: 75, curve: -25 },
  { name: 'EU', full: 'European Union', x: 195, y: 95, curve: -15 },
  { name: 'ME', full: 'Middle East', x: 245, y: 125, curve: 20 },
]

const HUB = { x: 200, y: 200, label: 'BENGALURU' }

function arcPath(hx: number, hy: number, rx: number, ry: number, curve: number) {
  const mx = (hx + rx) / 2
  const my = (hy + ry) / 2 + curve
  return `M ${hx} ${hy} Q ${mx} ${my} ${rx} ${ry}`
}

export default function GlobalDeliverySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { shouldLoop, reduced, viewport, shouldParallax, shouldAnimate } = useMotionConfig()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const vizY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const vizScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98])

  return (
    <section ref={ref} className="section-py bg-navy-dark page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-cyan/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="eyebrow eyebrow-dark mb-5">Global Reach</p>
            <TextReveal
              text="Engineering from Bengaluru. Delivering Globally."
              as="h2"
              className="editorial-display text-[clamp(1.875rem,4vw,3rem)] text-white mb-6 leading-tight"
            />
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
              Headquartered in India's technology capital, Girakee provides mission-critical
              software engineering and dedicated technical talent to high-growth enterprises
              across the Middle East, Europe, the UK, and North America.
            </p>
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r.name}
                  className="px-3 py-2 text-xs font-medium tracking-wide text-white/50 border border-white/[0.08] bg-white/[0.02]"
                >
                  {r.full}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            style={shouldParallax ? { y: vizY, scale: vizScale } : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="relative w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] border border-cyan/20 holographic-panel overflow-hidden"
          >
            {/* HUD frame */}
            <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-cyan/50 z-10" />
            <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-cyan/50 z-10" />
            <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-cyan/50 z-10" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-cyan/50 z-10" />

            <div className="absolute top-4 left-8 z-10 flex items-center gap-2">
              {shouldAnimate && (
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              )}
              <span className="text-[9px] font-mono text-cyan/50 tracking-widest uppercase">
                Global Delivery Network
              </span>
            </div>

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              aria-label="Global delivery network from Bengaluru"
            >
              <defs>
                <radialGradient id="hub-glow-global">
                  <stop offset="0%" stopColor="#16C6DA" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#08AFC7" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#08AFC7" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="node-glow-global">
                  <stop offset="0%" stopColor="#08AFC7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#08AFC7" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="arc-grad-global" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#08AFC7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#16C6DA" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#08AFC7" stopOpacity="0" />
                </linearGradient>
                <filter id="glow-filter-global">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Globe wireframe */}
              <ellipse cx="200" cy="200" rx="150" ry="150" fill="none" stroke="rgba(8,175,199,0.08)" strokeWidth="1" />
              <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="rgba(8,175,199,0.06)" strokeWidth="0.75" />
              <ellipse cx="200" cy="200" rx="60" ry="150" fill="none" stroke="rgba(8,175,199,0.06)" strokeWidth="0.75" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

              {shouldLoop && (
                <motion.ellipse
                  cx="200" cy="200" rx="130" ry="130"
                  fill="none" stroke="rgba(8,175,199,0.12)" strokeWidth="1"
                  strokeDasharray="6 10"
                  animate={{ rotate: 360 }}
                  style={{ originX: '200px', originY: '200px' }}
                  transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                />
              )}

              {/* Arc routes */}
              {regions.map((region, i) => {
                const d = arcPath(HUB.x, HUB.y, region.x, region.y, region.curve)
                return (
                  <g key={region.name}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="rgba(8,175,199,0.2)"
                      strokeWidth="1"
                      initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={viewport}
                      transition={{ delay: 0.15 + i * 0.12, duration: 1 }}
                    />
                    {shouldLoop && shouldAnimate && (
                      <>
                        <motion.path
                          d={d}
                          fill="none"
                          stroke="url(#arc-grad-global)"
                          strokeWidth="2"
                          strokeDasharray="6 14"
                          animate={{ strokeDashoffset: [0, -40] }}
                          transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3, ease: 'linear' }}
                        />
                        <motion.circle
                          r="4"
                          fill="#16C6DA"
                          filter="url(#glow-filter-global)"
                          animate={{
                            cx: [HUB.x, (HUB.x + region.x) / 2 + region.curve * 0.3, region.x],
                            cy: [HUB.y, (HUB.y + region.y) / 2 + region.curve, region.y],
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            delay: 0.5 + i * 0.7,
                            ease: 'easeInOut',
                          }}
                        />
                      </>
                    )}
                  </g>
                )
              })}

              {/* Region nodes */}
              {regions.map((region, i) => (
                <g key={`node-${region.name}`}>
                  <motion.circle
                    cx={region.x} cy={region.y} r="18"
                    fill="url(#node-glow-global)"
                    animate={shouldLoop ? { opacity: [0.3, 0.6, 0.3] } : undefined}
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                  />
                  <motion.circle
                    cx={region.x} cy={region.y} r="5"
                    fill="#08AFC7"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewport}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  />
                  <motion.circle
                    cx={region.x} cy={region.y} r="8"
                    fill="none" stroke="#08AFC7" strokeWidth="0.5"
                    animate={shouldLoop ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : undefined}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.5 }}
                    style={{ originX: `${region.x}px`, originY: `${region.y}px` }}
                  />
                  <text
                    x={region.x} y={region.y - 22}
                    fill="rgba(255,255,255,0.7)"
                    fontSize="11"
                    fontWeight="600"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                  >
                    {region.name}
                  </text>
                  <text
                    x={region.x} y={region.y + 28}
                    fill="rgba(255,255,255,0.25)"
                    fontSize="7"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    ACTIVE
                  </text>
                </g>
              ))}

              {/* Bengaluru hub */}
              <motion.circle
                cx={HUB.x} cy={HUB.y} r="55"
                fill="url(#hub-glow-global)"
                animate={shouldLoop ? { r: [55, 62, 55], opacity: [0.6, 1, 0.6] } : undefined}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              {shouldLoop && [70, 90, 110].map((r, i) => (
                <motion.circle
                  key={r}
                  cx={HUB.x} cy={HUB.y} r={r}
                  fill="none" stroke="rgba(8,175,199,0.15)" strokeWidth="0.75"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.8 }}
                  style={{ originX: `${HUB.x}px`, originY: `${HUB.y}px` }}
                />
              ))}
              <motion.rect
                x={HUB.x - 8} y={HUB.y - 8} width="16" height="16"
                fill="#16C6DA"
                filter="url(#glow-filter-global)"
                animate={shouldLoop ? { rotate: [0, 90, 0] } : undefined}
                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                style={{ originX: `${HUB.x}px`, originY: `${HUB.y}px` }}
              />
              <text
                x={HUB.x} y={HUB.y + 38}
                fill="rgba(255,255,255,0.8)"
                fontSize="10"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
                letterSpacing="0.15em"
              >
                {HUB.label}
              </text>
              <text
                x={HUB.x} y={HUB.y + 52}
                fill="rgba(8,175,199,0.5)"
                fontSize="7"
                textAnchor="middle"
                fontFamily="monospace"
              >
                HQ · ENGINEERING HUB
              </text>
            </svg>

            {/* Scan beam */}
            {shouldLoop && shouldAnimate && (
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/60 to-transparent z-10 shadow-[0_0_16px_rgba(8,175,199,0.4)]"
                animate={{ top: ['12%', '88%', '12%'] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              />
            )}

            {/* Ambient particles */}
            {shouldLoop &&
              Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-cyan/50"
                  style={{
                    left: `${15 + (i * 19) % 70}%`,
                    top: `${20 + (i * 13) % 60}%`,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + (i % 3),
                    delay: i * 0.3,
                  }}
                />
              ))}

            <div className="absolute bottom-4 left-8 right-8 flex justify-between text-[8px] font-mono text-cyan/30 z-10">
              <span>LAT 12.97°N</span>
              <span>LON 77.59°E</span>
              <span>4 REGIONS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
