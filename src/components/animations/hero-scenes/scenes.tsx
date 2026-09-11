import { motion } from 'framer-motion'
import { HeroBackdrop, CYAN, CYAN_BRIGHT, GREEN, AMBER, RED, METAL, METAL_DARK, DRAW, PulseDot, FlowLine } from './shared'

type Props = { loop: boolean }

/* ── WEB & MOBILE: isometric devices with live deploy ── */
export function HeroWebMobileScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Cross-Platform Build">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        {/* Laptop isometric */}
        <g transform="translate(40, 60)">
          <polygon points="0,80 160,80 180,95 20,95" fill="#0a1525" stroke={CYAN} strokeWidth="1" opacity="0.5" />
          <polygon points="10,10 170,10 160,80 0,80" fill="rgba(8,175,199,0.06)" stroke={CYAN} strokeWidth="1.5" />
          <rect x="22" y="22" width="126" height="48" fill="#030a14" stroke="rgba(255,255,255,0.1)" />
          {loop && [0, 1, 2].map((i) => (
            <motion.rect key={i} x={28} y={30 + i * 14} width="0" height="6" fill={CYAN} opacity="0.6"
              animate={{ width: [0, 80 + i * 20] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }} />
          ))}
          <motion.circle cx="85" cy="46" r="4" fill={GREEN} animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 2 }} />
        </g>
        {/* Phone isometric */}
        <motion.g transform="translate(300, 50)" animate={loop ? { y: [0, -6, 0] } : undefined} transition={{ repeat: Infinity, duration: 3.5 }}>
          <rect x="0" y="0" width="56" height="110" rx="8" fill="url(#hs-cyan)" opacity="0.15" stroke={CYAN} strokeWidth="1.5" />
          <rect x="6" y="14" width="44" height="78" fill="#030a14" stroke="rgba(255,255,255,0.15)" />
          <motion.rect x="12" y="22" width="32" height="20" fill={CYAN} opacity="0.3" animate={loop ? { opacity: [0.2, 0.6, 0.2] } : undefined} transition={{ repeat: Infinity, duration: 2 }} />
          <circle cx="28" cy="100" r="4" fill={CYAN_BRIGHT} />
        </motion.g>
        <FlowLine loop={loop} x1={200} y1={120} x2={300} y2={100} />
        <text x="240" y="268" fill="rgba(255,255,255,0.35)" fontSize="7" textAnchor="middle" fontFamily="monospace">React · Flutter · API sync</text>
      </svg>
    </HeroBackdrop>
  )
}

/* ── AI & ML: deep learning layers with inference ── */
export function HeroNeuralScene({ loop }: Props) {
  const layers = [[60, 150], [140, 110], [140, 150], [140, 190], [220, 90], [220, 130], [220, 170], [220, 210], [300, 150]]
  return (
    <HeroBackdrop label="Neural Inference Pipeline">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        {layers.slice(0, 4).flatMap((a, i) => layers.slice(4, 8).map((b, j) => (
          <FlowLine key={`${i}-${j}`} loop={loop} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} delay={(i + j) * 0.15} />
        )))}
        {layers.slice(4, 8).map((a, i) => (
          <FlowLine key={`out-${i}`} loop={loop} x1={a[0]} y1={a[1]} x2={300} y2={150} delay={i * 0.2} />
        ))}
        {layers.map(([x, y], i) => (
          <g key={i}>
            <PulseDot cx={x} cy={y} loop={loop} delay={i * 0.15} />
            <circle cx={x} cy={y} r={i < 4 ? 6 : i < 8 ? 7 : 10} fill="rgba(8,175,199,0.15)" stroke={CYAN} strokeWidth="1" />
          </g>
        ))}
        {loop && (
          <motion.text x="300" y="175" fill={GREEN} fontSize="8" fontFamily="monospace" textAnchor="middle"
            animate={{ opacity: [0, 1, 1, 0] }} transition={{ repeat: Infinity, duration: 4 }}
          >confidence 0.97</motion.text>
        )}
        <rect x="340" y="60" width="120" height="180" fill="rgba(8,175,199,0.04)" stroke="rgba(255,255,255,0.1)" rx="2" />
        {['embed()', 'transform()', 'predict()', 'deploy()'].map((fn, i) => (
          <motion.text key={fn} x="350" y={85 + i * 35} fill={i === 3 ? GREEN : 'rgba(255,255,255,0.4)'} fontSize="7" fontFamily="monospace"
            animate={loop ? { opacity: [0.2, 1, 0.2] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: i * 0.8 }}
          >{fn}</motion.text>
        ))}
      </svg>
    </HeroBackdrop>
  )
}

/* ── COMPUTER VISION: camera + LIDAR scan on part ── */
export function HeroVisionScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Visual Inspection System">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <rect x="50" y="50" width="220" height="180" fill="rgba(5,13,24,0.8)" stroke={CYAN} strokeWidth="1" rx="2" />
        {/* Mechanical part outline */}
        <rect x="80" y="90" width="70" height="50" fill="none" stroke={DRAW} strokeWidth="1" />
        <circle cx="190" cy="130" r="35" fill="none" stroke={DRAW} strokeWidth="1" />
        <line x1="190" y1="95" x2="190" y2="165" stroke={DRAW} strokeWidth="0.5" strokeDasharray="3 3" />
        {/* LIDAR points */}
        {loop && Array.from({ length: 24 }, (_, i) => {
          const angle = (i / 24) * Math.PI * 2
          const r = 20 + (i % 5) * 8
          return (
            <motion.circle key={i} cx={190 + Math.cos(angle) * r} cy={130 + Math.sin(angle) * r} r="1.5" fill={CYAN_BRIGHT}
              animate={{ opacity: [0, 0.9, 0] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.08 }} />
          )
        })}
        {loop && (
          <motion.line x1="50" y1="50" x2="270" y2="50" stroke={CYAN_BRIGHT} strokeWidth="2" filter="url(#hs-glow)"
            animate={{ y1: [50, 230, 50], y2: [50, 230, 50] }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} />
        )}
        <motion.rect x="75" y="85" width="80" height="60" fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1.5"
          animate={loop ? { strokeOpacity: [0.4, 1, 0.4] } : undefined} transition={{ repeat: Infinity, duration: 2 }} />
        <text x="79" y="82" fill={CYAN} fontSize="7" fontFamily="monospace">PART-A 0.96</text>
        {/* Camera body */}
        <g transform="translate(310, 70)">
          <rect x="0" y="20" width="80" height="50" rx="4" fill="url(#hs-metal)" stroke={METAL} strokeWidth="0.5" />
          <circle cx="40" cy="45" r="18" fill="#030a14" stroke={CYAN} strokeWidth="2" />
          <motion.circle cx="40" cy="45" r="8" fill={CYAN} animate={loop ? { r: [6, 10, 6] } : undefined} transition={{ repeat: Infinity, duration: 2 }} />
          <polygon points="40,10 55,20 25,20" fill={METAL_DARK} stroke={METAL} />
        </g>
        <text x="240" y="275" fill="rgba(255,255,255,0.35)" fontSize="7" textAnchor="middle" fontFamily="monospace">YOLOv8 · OCR · Defect detection</text>
      </svg>
    </HeroBackdrop>
  )
}

/* ── CLOUD & DEVOPS: server rack + container deploy ── */
export function HeroCloudScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Infrastructure Orchestration">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        {/* Server rack */}
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(60, ${55 + row * 48})`}>
            <rect width="140" height="40" fill="rgba(8,175,199,0.04)" stroke="rgba(255,255,255,0.15)" rx="2" />
            <motion.rect width="0" height="40" fill="rgba(8,175,199,0.15)" rx="2"
              animate={loop ? { width: [0, 140, 140] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: row * 0.6 }} />
            {[0, 1, 2].map((led) => (
              <motion.circle key={led} cx={120 + led * 8} cy={20} r="2" fill={row === 3 ? GREEN : CYAN}
                animate={loop ? { opacity: [0.2, 1, 0.2] } : undefined} transition={{ repeat: Infinity, duration: 1.5, delay: row * 0.3 + led * 0.1 }} />
            ))}
            <text x="10" y="24" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">node-{row + 1}</text>
          </g>
        ))}
        {/* K8s pods flying to rack */}
        {[0, 1, 2].map((i) => (
          <motion.g key={i}
            animate={loop ? { x: [280, 200], y: [80 + i * 50, 75 + i * 48], opacity: [0, 1, 0] } : undefined}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.8, ease: 'easeInOut' }}
          >
            <rect x="0" y="0" width="36" height="28" fill="rgba(8,175,199,0.2)" stroke={CYAN} strokeWidth="1" rx="2" />
            <text x="18" y="17" fill={CYAN} fontSize="5" textAnchor="middle" fontFamily="monospace">pod</text>
          </motion.g>
        ))}
        <rect x="300" y="200" width="150" height="70" fill="rgba(5,13,24,0.9)" stroke="rgba(255,255,255,0.1)" rx="2" />
        <text x="310" y="218" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">$ terraform apply</text>
        {loop && (
          <motion.text x="310" y="240" fill={GREEN} fontSize="6" fontFamily="monospace"
            animate={{ opacity: [0, 1, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 1.5 }}
          >✓ 12 resources deployed</motion.text>
        )}
      </svg>
    </HeroBackdrop>
  )
}

/* ── CYBERSECURITY: firewall blocking threats ── */
export function HeroShieldScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Zero Trust Security">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <motion.path d="M240,50 L310,78 L310,155 Q310,215 240,245 Q170,215 170,155 L170,78 Z"
          fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="2" filter="url(#hs-glow)"
          animate={loop ? { strokeOpacity: [0.5, 1, 0.5] } : undefined} transition={{ repeat: Infinity, duration: 3 }} />
        <path d="M225,145 L240,165 L260,130" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        {/* Threat particles blocked */}
        {loop && [0, 1, 2, 3, 4].map((i) => (
          <motion.circle key={i} r="4" fill={RED} opacity="0.8"
            animate={{ cx: [40 + i * 15, 200], cy: [100 + i * 25, 150], opacity: [0.8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.4, ease: 'easeIn' }} />
        ))}
        {loop && (
          <motion.circle cx="240" cy="150" r="60" fill="none" stroke={CYAN} strokeWidth="0.5"
            animate={{ r: [50, 90], opacity: [0.4, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
        )}
        <rect x="320" y="70" width="130" height="160" fill="rgba(5,13,24,0.8)" stroke="rgba(255,255,255,0.1)" rx="2" />
        {['Firewall: ACTIVE', 'Threats blocked: 847', 'Encryption: AES-256', 'Compliance: SOC2'].map((t, i) => (
          <motion.text key={t} x="332" y={95 + i * 30} fill={i === 0 ? GREEN : 'rgba(255,255,255,0.45)'} fontSize="7" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
          >{t}</motion.text>
        ))}
      </svg>
    </HeroBackdrop>
  )
}

/* ── UI/UX: design canvas with components ── */
export function HeroWireframeScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Design System Studio">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <rect x="40" y="45" width="260" height="200" fill="#0a1525" stroke="rgba(255,255,255,0.12)" rx="4" />
        <rect x="40" y="45" width="260" height="20" fill="rgba(8,175,199,0.08)" />
        <circle cx="55" cy="55" r="3" fill={RED} opacity="0.7" /><circle cx="65" cy="55" r="3" fill={AMBER} opacity="0.7" /><circle cx="75" cy="55" r="3" fill={GREEN} opacity="0.7" />
        {/* Component being placed */}
        <motion.g animate={loop ? { x: [0, 20, 0], y: [0, -10, 0] } : undefined} transition={{ repeat: Infinity, duration: 4 }}>
          <rect x="70" y="90" width="100" height="60" fill="rgba(8,175,199,0.1)" stroke={CYAN} strokeWidth="1.5" strokeDasharray="4 2" rx="4" />
          <rect x="80" y="100" width="60" height="8" fill={CYAN} opacity="0.4" rx="2" />
          <rect x="80" y="115" width="80" height="4" fill="rgba(255,255,255,0.15)" rx="1" />
          <rect x="80" y="125" width="50" height="4" fill="rgba(255,255,255,0.1)" rx="1" />
        </motion.g>
        <rect x="200" y="100" width="80" height="100" fill="rgba(8,175,199,0.05)" stroke="rgba(255,255,255,0.1)" rx="4" />
        {/* Properties panel */}
        <rect x="320" y="45" width="120" height="200" fill="rgba(5,13,24,0.9)" stroke="rgba(255,255,255,0.1)" rx="2" />
        <text x="332" y="68" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Properties</text>
        {['Radius: 8px', 'Fill: #08AFC7', 'Font: Inter', 'Spacing: 16'].map((p, i) => (
          <motion.text key={p} x="332" y={90 + i * 22} fill={CYAN} fontSize="6" fontFamily="monospace" opacity="0.7"
            animate={loop ? { opacity: [0.3, 0.9, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
          >{p}</motion.text>
        ))}
        {loop && (
          <motion.rect x="60" y="200" width="0" height="30" fill={CYAN} opacity="0.3" rx="4"
            animate={{ width: [0, 120] }} transition={{ repeat: Infinity, duration: 3 }} />
        )}
      </svg>
    </HeroBackdrop>
  )
}

/* ── SOFTWARE TESTING: automated test runner ── */
export function HeroPipelineScene({ loop }: Props) {
  const tests = ['auth.spec', 'api.spec', 'ui.spec', 'e2e.spec']
  return (
    <HeroBackdrop label="Automated Test Runner">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <rect x="50" y="50" width="380" height="200" fill="rgba(5,13,24,0.7)" stroke="rgba(255,255,255,0.1)" rx="3" />
        <text x="70" y="72" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">npx playwright test --reporter=line</text>
        {tests.map((t, i) => (
          <g key={t} transform={`translate(70, ${90 + i * 36})`}>
            <motion.rect width="300" height="28" fill="rgba(8,175,199,0.04)" stroke="rgba(255,255,255,0.08)" rx="2"
              animate={loop ? { stroke: ['rgba(255,255,255,0.08)', CYAN, 'rgba(255,255,255,0.08)'] } : undefined}
              transition={{ repeat: Infinity, duration: 4, delay: i * 0.9 }} />
            <text x="12" y="18" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">{t}</text>
            <motion.text x="270" y="18" fill={GREEN} fontSize="7" fontFamily="monospace"
              animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: 0.5 + i * 0.9 }}
            >PASS</motion.text>
          </g>
        ))}
        {loop && (
          <motion.rect x="50" y="50" width="0" height="3" fill={CYAN}
            animate={{ width: [0, 380] }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} />
        )}
        <text x="240" y="275" fill="rgba(255,255,255,0.35)" fontSize="7" textAnchor="middle" fontFamily="monospace">142 tests · 0 failed · 12.4s</text>
      </svg>
    </HeroBackdrop>
  )
}

/* ── INTELLIGENT QA: engineering drawing validation ── */
export function HeroQAValidationScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Drawing Rule Engine">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <rect x="40" y="55" width="200" height="150" fill="rgba(5,13,24,0.8)" stroke={CYAN} strokeWidth="1" />
        <rect x="70" y="90" width="60" height="40" fill="none" stroke={DRAW} />
        <circle cx="170" cy="120" r="25" fill="none" stroke={DRAW} />
        {loop && (
          <motion.line x1="40" y1="55" x2="240" y2="55" stroke={CYAN_BRIGHT} strokeWidth="2"
            animate={{ y1: [55, 205, 55], y2: [55, 205, 55] }} transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }} />
        )}
        <motion.rect x="65" y="85" width="70" height="50" fill="rgba(8,175,199,0.1)" stroke={CYAN} strokeWidth="1.5"
          animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined} transition={{ repeat: Infinity, duration: 2 }} />
        <rect x="260" y="55" width="180" height="150" fill="rgba(8,175,199,0.03)" stroke="rgba(255,255,255,0.1)" />
        {['Dim: 42.5mm ✓', 'Tol: ±0.1 ✓', 'OCR match ✓', 'Spec OK ✓'].map((r, i) => (
          <motion.text key={r} x="275" y={85 + i * 28} fill={GREEN} fontSize="8" fontFamily="monospace"
            animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: i * 0.7 }}
          >{r}</motion.text>
        ))}
        {loop && (
          <motion.text x="140" y="240" fill={GREEN} fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle"
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 2.5 }}
          >PASS</motion.text>
        )}
      </svg>
    </HeroBackdrop>
  )
}

/* ── DATA ANALYTICS: live dashboard ── */
export function HeroDataScene({ loop }: Props) {
  const bars = [0.45, 0.7, 0.55, 0.9, 0.65, 0.8, 0.5, 0.75]
  return (
    <HeroBackdrop label="Real-Time Analytics">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <rect x="40" y="45" width="400" height="210" fill="rgba(5,13,24,0.6)" stroke="rgba(255,255,255,0.1)" rx="3" />
        {['Revenue', 'Users', 'Conversion'].map((kpi, i) => (
          <g key={kpi} transform={`translate(${60 + i * 120}, 60)`}>
            <text x="0" y="0" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">{kpi}</text>
            <motion.text x="0" y="22" fill={CYAN_BRIGHT} fontSize="14" fontWeight="bold" fontFamily="monospace"
              animate={loop ? { opacity: [0.7, 1, 0.7] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
            >{['$2.4M', '18.2K', '4.7%'][i]}</motion.text>
          </g>
        ))}
        {bars.map((h, i) => (
          <motion.rect key={i} x={70 + i * 38} y={200 - h * 100} width="24" height={h * 100}
            fill="url(#hs-cyan)" opacity="0.7" stroke={CYAN} strokeWidth="0.5"
            animate={loop ? { height: [h * 80, h * 100, h * 85], y: [200 - h * 80, 200 - h * 100, 200 - h * 85] } : undefined}
            transition={{ repeat: Infinity, duration: 2 + i * 0.15, ease: 'easeInOut' }} />
        ))}
        <motion.polyline points="70,160 108,130 146,145 184,100 222,115 260,85 298,95 336,70"
          fill="none" stroke={CYAN_BRIGHT} strokeWidth="2"
          animate={loop ? { pathLength: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 3 }} />
        {loop && (
          <motion.circle r="4" fill={CYAN_BRIGHT} filter="url(#hs-glow)"
            animate={{ cx: [70, 336], cy: [160, 70], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} />
        )}
      </svg>
    </HeroBackdrop>
  )
}

/* ── TALENT OUTSOURCING: global team network ── */
export function HeroTalentScene({ loop }: Props) {
  const hubs = [{ x: 240, y: 150, label: 'BLR' }, { x: 100, y: 90, label: 'US' }, { x: 380, y: 80, label: 'UK' }, { x: 390, y: 200, label: 'EU' }, { x: 90, y: 210, label: 'ME' }]
  return (
    <HeroBackdrop label="Global Engineering Pods">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        {hubs.slice(1).map((h, i) => (
          <FlowLine key={h.label} loop={loop} x1={hubs[0].x} y1={hubs[0].y} x2={h.x} y2={h.y} delay={i * 0.4} />
        ))}
        {hubs.map((h, i) => (
          <g key={h.label}>
            <motion.circle cx={h.x} cy={h.y} r={i === 0 ? 14 : 10} fill="rgba(8,175,199,0.15)" stroke={CYAN} strokeWidth="1.5"
              animate={loop ? { r: [i === 0 ? 12 : 8, i === 0 ? 16 : 12, i === 0 ? 12 : 8] } : undefined} transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }} />
            <text x={h.x} y={h.y + 4} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">{h.label}</text>
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <motion.g key={i} transform={`translate(${160 + i * 55}, 220)`}
            animate={loop ? { y: [0, -4, 0] } : undefined} transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
          >
            <circle cy="0" r="12" fill="rgba(8,175,199,0.2)" stroke={CYAN} />
            <line x1="0" y1="12" x2="0" y2="28" stroke="rgba(255,255,255,0.2)" />
          </motion.g>
        ))}
        <text x="240" y="275" fill="rgba(255,255,255,0.35)" fontSize="7" textAnchor="middle" fontFamily="monospace">Vetted engineers · Sprint-ready · Global delivery</text>
      </svg>
    </HeroBackdrop>
  )
}

/* ── TRAINING: learning path progress ── */
export function HeroTerminalScene({ loop }: Props) {
  const modules = ['Foundations', 'Projects', 'Mentorship', 'Certification']
  return (
    <HeroBackdrop label="Corporate Training Program">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <rect x="50" y="50" width="380" height="200" fill="rgba(5,13,24,0.8)" stroke="rgba(255,255,255,0.1)" rx="3" />
        <text x="70" y="78" fill={CYAN} fontSize="9" fontFamily="monospace">Learning Path · AI Engineering</text>
        {modules.map((m, i) => (
          <g key={m} transform={`translate(70, ${95 + i * 38})`}>
            <rect width="320" height="28" fill="rgba(8,175,199,0.04)" stroke="rgba(255,255,255,0.08)" rx="2" />
            <motion.rect height="28" fill="rgba(8,175,199,0.2)" rx="2"
              animate={loop ? { width: [0, 320] } : undefined} transition={{ repeat: Infinity, duration: 5, delay: i * 1.2 }} />
            <text x="12" y="18" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">{m}</text>
            <motion.text x="290" y="18" fill={GREEN} fontSize="7" fontFamily="monospace"
              animate={loop ? { opacity: [0, 1] } : undefined} transition={{ repeat: Infinity, duration: 5, delay: 0.8 + i * 1.2 }}
            >✓</motion.text>
          </g>
        ))}
      </svg>
    </HeroBackdrop>
  )
}

/* ── INDUSTRIES / TECH / SERVICES: sector orbit ── */
export function HeroOrbitScene({ loop }: Props) {
  const sectors = ['Manufacturing', 'Finance', 'Healthcare', 'Energy', 'Retail', 'Engineering']
  return (
    <HeroBackdrop label="Industry Solutions">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <motion.circle cx="240" cy="150" r="90" fill="none" stroke="rgba(8,175,199,0.15)" strokeWidth="1" strokeDasharray="4 6"
          animate={loop ? { rotate: 360 } : undefined} style={{ transformOrigin: '240px 150px' }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }} />
        {sectors.map((s, i) => {
          const angle = (i / sectors.length) * Math.PI * 2 - Math.PI / 2
          const cx = 240 + Math.cos(angle) * 90
          const cy = 150 + Math.sin(angle) * 90
          return (
            <g key={s}>
              <motion.circle cx={cx} cy={cy} r="22" fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1"
                animate={loop ? { scale: [1, 1.08, 1] } : undefined} transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }} />
              <text x={cx} y={cy + 3} fill={CYAN} fontSize="5" textAnchor="middle" fontFamily="monospace">{s.slice(0, 6)}</text>
            </g>
          )
        })}
        <circle cx="240" cy="150" r="8" fill={CYAN_BRIGHT} filter="url(#hs-glow)" />
        <text x="240" y="168" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle" fontFamily="monospace">AI · Automation · Digital</text>
      </svg>
    </HeroBackdrop>
  )
}

/* ── ABOUT / SOLUTIONS / CAREERS: delivery network ── */
export function HeroNetworkScene({ loop }: Props) {
  const nodes = [
    { x: 240, y: 140, label: 'Bengaluru HQ', size: 10 },
    { x: 80, y: 80, label: 'US', size: 6 },
    { x: 400, y: 70, label: 'UK', size: 6 },
    { x: 410, y: 200, label: 'EU', size: 6 },
    { x: 70, y: 190, label: 'ME', size: 6 },
  ]
  return (
    <HeroBackdrop label="Global Delivery Network">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        {/* Globe outline */}
        <ellipse cx="240" cy="140" rx="100" ry="60" fill="none" stroke="rgba(8,175,199,0.12)" strokeWidth="1" />
        <ellipse cx="240" cy="140" rx="60" ry="100" fill="none" stroke="rgba(8,175,199,0.08)" strokeWidth="0.5" />
        {nodes.slice(1).map((n, i) => (
          <FlowLine key={n.label} loop={loop} x1={nodes[0].x} y1={nodes[0].y} x2={n.x} y2={n.y} delay={i * 0.5} />
        ))}
        {nodes.map((n) => (
          <g key={n.label}>
            <PulseDot cx={n.x} cy={n.y} loop={loop} />
            <text x={n.x} y={n.y + n.size + 12} fill="rgba(255,255,255,0.4)" fontSize="6" textAnchor="middle" fontFamily="monospace">{n.label}</text>
          </g>
        ))}
        <text x="240" y="275" fill="rgba(255,255,255,0.35)" fontSize="7" textAnchor="middle" fontFamily="monospace">24/7 engineering · Bengaluru to global</text>
      </svg>
    </HeroBackdrop>
  )
}

export function HeroClassroomScene({ loop }: Props) {
  return (
    <HeroBackdrop label="AI Training Lab">
      <img
        src="/careers-lab.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040c16] via-transparent to-[#040c16]/50 pointer-events-none" />
      <svg viewBox="0 0 480 300" className="absolute inset-0 w-full h-full pointer-events-none">
        {loop && (
          <motion.line
            x1="0"
            x2="480"
            y1="40"
            y2="40"
            stroke={CYAN_BRIGHT}
            strokeWidth="1.5"
            opacity="0.55"
            filter="url(#hs-glow)"
            animate={{ y1: [36, 264, 36], y2: [36, 264, 36] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'linear' }}
          />
        )}
        <motion.path
          d="M268 118 C 300 108, 330 148, 368 122 C 392 108, 410 132, 428 118"
          fill="none"
          stroke={CYAN_BRIGHT}
          strokeWidth="2"
          strokeDasharray="180"
          animate={loop ? { strokeDashoffset: [180, 0, 0, 180] } : undefined}
          transition={loop ? { repeat: Infinity, duration: 6, ease: 'easeInOut' } : undefined}
        />
        <PulseDot cx={368} cy={122} loop={loop} />
        <text x="240" y="286" fill="rgba(255,255,255,0.45)" fontSize="7" textAnchor="middle" fontFamily="monospace">
          Live projects · Mentors · AI lab
        </text>
      </svg>
    </HeroBackdrop>
  )
}

/* ── DEFAULT / AI HERO: agentic automation ── */
export function HeroDefaultScene({ loop }: Props) {
  return (
    <HeroBackdrop label="Agentic AI Systems">
      <svg viewBox="0 0 480 300" className="w-full h-full">
        <motion.rect x="180" y="80" width="80" height="70" rx="4" fill="rgba(8,175,199,0.1)" stroke={CYAN} strokeWidth="1.5"
          animate={loop ? { y: [80, 76, 80] } : undefined} transition={{ repeat: Infinity, duration: 3 }} />
        <circle cx="220" cy="70" r="8" fill={CYAN_BRIGHT} />
        <motion.line x1="260" y1="115" x2="340" y2="95" stroke={CYAN} strokeWidth="2.5"
          animate={loop ? { x2: [340, 360, 320, 340], y2: [95, 105, 88, 95] } : undefined} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
        {['Observe', 'Learn', 'Automate', 'Deploy'].map((s, i) => (
          <g key={s}>
            <motion.rect x={50 + i * 100} y={200} width="80" height="32" fill="rgba(8,175,199,0.05)" stroke="rgba(255,255,255,0.1)"
              animate={loop ? { stroke: ['rgba(255,255,255,0.1)', CYAN, 'rgba(255,255,255,0.1)'] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: i * 0.9 }} />
            <text x={90 + i * 100} y={220} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">{s}</text>
          </g>
        ))}
      </svg>
    </HeroBackdrop>
  )
}
