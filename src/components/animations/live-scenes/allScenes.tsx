import { motion } from 'framer-motion'
import { HudFrame, Panel, CYAN, CYAN_BRIGHT, DIM, FAINT, GREEN, AMBER, RED, DataStream, StatusLine } from './shared'

/* ─── WEB & MOBILE ─── */
export function WebMobileScene({ loop }: { loop: boolean }) {
  return (
    <HudFrame label="Web & Mobile Development" status="BUILDING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <Panel x={30} y={32} w={230} h={155} title="dashboard.girakee.app" loop={loop}>
          <rect x="45" y="55" width="90" height="8" fill={FAINT} />
          <rect x="45" y="70" width="130" height="4" fill={FAINT} opacity="0.35" />
          {loop && <motion.rect x="45" y="95" width="0" height="70" fill="rgba(8,175,199,0.1)" stroke={CYAN} strokeWidth="0.5" animate={{ width: [0, 200, 200] }} transition={{ repeat: Infinity, duration: 3 }} />}
          {[0, 1, 2].map((i) => (
            <motion.rect key={i} x={50 + i * 60} y={102} width="50" height="45" fill={FAINT} stroke={DIM}
              animate={loop ? { opacity: [0.25, 0.65, 0.25] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.35 }} />
          ))}
        </Panel>
        <motion.g animate={loop ? { y: [0, -5, 0] } : undefined} transition={{ repeat: Infinity, duration: 3.5 }}>
          <rect x="285" y="50" width="72" height="135" rx="8" fill="rgba(8,175,199,0.04)" stroke={CYAN} strokeWidth="1.5" />
          <rect x="293" y="64" width="56" height="95" fill="rgba(5,13,24,0.9)" stroke={DIM} />
          <motion.circle cx="321" cy="172" r="5" fill={CYAN} animate={loop ? { scale: [1, 1.25, 1] } : undefined} transition={{ repeat: Infinity, duration: 2 }} />
        </motion.g>
        <DataStream loop={loop} from={[260, 115]} to={[285, 95]} />
        <DataStream loop={loop} from={[260, 145]} to={[285, 140]} delay={0.7} />
        <StatusLine loop={loop} y={268} text="React · Next.js · Flutter · API deployed" />
      </svg>
    </HudFrame>
  )
}

/* ─── AI & ML ─── */
export function NeuralScene({ loop }: { loop: boolean }) {
  const layers = [[80, 140], [160, 100], [160, 180], [240, 80], [240, 140], [240, 200], [320, 140]]
  const input = layers.slice(0, 2)
  const hidden = layers.slice(2, 5)
  const output = layers.slice(5)
  const edges: [number, number][] = []
  input.forEach((_, i) => hidden.forEach((_, j) => edges.push([i, 2 + j])))
  hidden.forEach((_, i) => output.forEach((_, j) => edges.push([2 + i, 5 + j])))

  return (
    <HudFrame label="AI & Machine Learning" status="INFERENCE">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <Panel x={30} y={32} w={200} h={100} title="model.predict()" loop={loop}>
          <text x="45" y="58" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">Input: customer_data.csv</text>
          {loop && (
            <motion.text x="45" y="78" fill={CYAN} fontSize="7" fontFamily="monospace"
              animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }}
            >confidence: 0.97 · class: approved</motion.text>
          )}
          <motion.rect x="45" y="88" width="0" height="6" fill={CYAN} animate={loop ? { width: [0, 170, 170] } : undefined} transition={{ repeat: Infinity, duration: 2.5 }} />
        </Panel>
        {edges.map(([a, b], i) => (
          <motion.line key={i} x1={layers[a][0]} y1={layers[a][1]} x2={layers[b][0]} y2={layers[b][1]}
            stroke={DIM} strokeWidth="0.75"
            animate={loop ? { opacity: [0.15, 0.6, 0.15] } : undefined}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.05 }} />
        ))}
        {layers.map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r={i < 2 ? 7 : i < 5 ? 8 : 9}
            fill={FAINT} stroke={CYAN} strokeWidth="1"
            animate={loop ? { r: [7, 9, 7] } : undefined} transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.15 }} />
        ))}
        {loop && (
          <motion.circle r="3" fill={CYAN_BRIGHT}
            animate={{ cx: [80, 160, 240, 320], cy: [140, 140, 140, 140], opacity: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} />
        )}
        <Panel x={280} y={150} w={170} h={90} title="LLM · RAG Pipeline" loop={loop}>
          {['Embed docs', 'Retrieve context', 'Generate answer'].map((s, i) => (
            <motion.text key={s} x="295" y={172 + i * 18} fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace"
              animate={loop ? { opacity: [0.2, 0.9, 0.2] } : undefined} transition={{ repeat: Infinity, duration: 3, delay: i * 0.8 }}
            >→ {s}</motion.text>
          ))}
        </Panel>
        <StatusLine loop={loop} y={268} text="PyTorch · LangChain · MLOps pipeline active" />
      </svg>
    </HudFrame>
  )
}

/* ─── COMPUTER VISION ─── */
export function VisionScene({ loop }: { loop: boolean }) {
  const boxes = [{ x: 70, y: 75, w: 90, h: 60, label: 'PART-A' }, { x: 180, y: 95, w: 70, h: 55, label: 'TEXT' }, { x: 120, y: 165, w: 110, h: 45, label: 'DIM' }]
  return (
    <HudFrame label="Computer Vision · OCR" status="SCANNING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <rect x="50" y="55" width="280" height="170" fill="rgba(8,175,199,0.02)" stroke={DIM} />
        <path d="M50,55 L70,55 L70,75 L50,75" fill="none" stroke={CYAN} strokeWidth="2" />
        <path d="M310,55 L330,55 L330,75 L310,75" fill="none" stroke={CYAN} strokeWidth="2" />
        <path d="M50,205 L70,205 L70,225 L50,225" fill="none" stroke={CYAN} strokeWidth="2" />
        <path d="M310,205 L330,205 L330,225 L310,225" fill="none" stroke={CYAN} strokeWidth="2" />
        {loop && (
          <motion.line x1="50" y1="55" x2="330" y2="55" stroke={CYAN_BRIGHT} strokeWidth="2" opacity="0.8"
            animate={{ y1: [55, 225, 55], y2: [55, 225, 55] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }} />
        )}
        {boxes.map((b, i) => (
          <g key={b.label}>
            <motion.rect x={b.x} y={b.y} width={b.w} height={b.h} fill="rgba(8,175,199,0.06)" stroke={CYAN} strokeWidth="1.5"
              initial={{ opacity: 0 }} animate={{ opacity: loop ? [0, 1, 1, 0.6] : 1 }} transition={{ repeat: Infinity, duration: 4, delay: i * 1 }} />
            <text x={b.x + 4} y={b.y - 4} fill={CYAN} fontSize="6" fontFamily="monospace">{b.label}</text>
          </g>
        ))}
        <Panel x={350} y={55} w={110} h={170} title="OCR Output" loop={loop}>
          {['Width: 42.5mm', 'Height: 18.2mm', 'Tolerance: ±0.1', 'Status: VALID'].map((t, i) => (
            <motion.text key={t} x="360" y={80 + i * 22} fill={i === 3 ? GREEN : 'rgba(255,255,255,0.45)'} fontSize="6" fontFamily="monospace"
              animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 5, delay: 1 + i * 0.6 }}>{t}</motion.text>
          ))}
        </Panel>
        <StatusLine loop={loop} y={268} text="YOLOv8 · OpenCV · Drawing validation" />
      </svg>
    </HudFrame>
  )
}

/* ─── CLOUD & DEVOPS ─── */
export function CloudScene({ loop }: { loop: boolean }) {
  return (
    <HudFrame label="Cloud & DevOps" status="DEPLOYING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <motion.path d="M150,55 Q200,35 250,55 Q300,35 350,55 Q370,70 350,85 Q300,100 250,85 Q200,100 150,85 Q130,70 150,55"
          fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1.5"
          animate={loop ? { y: [0, -4, 0] } : undefined} transition={{ repeat: Infinity, duration: 4 }} />
        <text x="250" y="72" fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">AWS · Azure · GCP</text>
        {[0, 1, 2].map((col) => [0, 1, 2].map((row) => (
          <motion.g key={`${col}-${row}`}>
            <motion.rect x={130 + col * 55} y={105 + row * 42} width="42" height="32" fill={FAINT} stroke={DIM}
              animate={loop ? { fill: ['rgba(8,175,199,0.04)', 'rgba(8,175,199,0.22)', 'rgba(8,175,199,0.04)'] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: (col + row) * 0.2 }} />
            <text x={151 + col * 55} y={125 + row * 42} fill={CYAN} fontSize="5" textAnchor="middle" fontFamily="monospace">pod</text>
          </motion.g>
        )))}
        {loop && [0, 1, 2].map((i) => (
          <motion.circle key={i} cx={151 + i * 55} cy="95" r="3" fill={GREEN}
            animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.4 }} />
        ))}
        <Panel x={30} y={200} w={200} h={55} title="terraform apply" loop={loop}>
          <motion.text x="42" y="222" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 2 }}
          >+ kubernetes_deployment.app</motion.text>
          <motion.text x="42" y="238" fill={GREEN} fontSize="6" fontFamily="monospace"
            animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          >✓ Apply complete! 3 resources added</motion.text>
        </Panel>
        <Panel x={250} y={200} w={200} h={55} title="CI/CD Pipeline" loop={loop}>
          {['build', 'test', 'deploy'].map((s, i) => (
            <motion.rect key={s} x={265 + i * 58} y="218" width="48" height="22" fill={FAINT} stroke={DIM}
              animate={loop ? { stroke: [DIM, CYAN, DIM] } : undefined} transition={{ repeat: Infinity, duration: 3, delay: i * 1 }} />
          ))}
          {loop && <motion.circle r="3" fill={CYAN_BRIGHT} cy={229} animate={{ cx: [289, 347, 405] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }} />}
        </Panel>
        <StatusLine loop={loop} y={268} text="Kubernetes · Docker · Terraform · GitHub Actions" />
      </svg>
    </HudFrame>
  )
}

/* ─── CYBERSECURITY ─── */
export function ShieldScene({ loop }: { loop: boolean }) {
  return (
    <HudFrame label="Cybersecurity · Zero Trust" status="PROTECTED">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <motion.path d="M240,50 L295,72 L295,140 Q295,185 240,210 Q185,185 185,140 L185,72 Z"
          fill="rgba(8,175,199,0.06)" stroke={CYAN} strokeWidth="2" />
        <motion.path d="M225,135 L240,155 L265,120" fill="none" stroke={GREEN} strokeWidth="2.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, repeat: loop ? Infinity : 0, repeatDelay: 2 }} />
        {loop && [50, 75, 100].map((r, i) => (
          <motion.circle key={r} cx="240" cy="130" r={r} fill="none" stroke={CYAN} strokeWidth="0.75"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.7 }}
            style={{ transformOrigin: '240px 130px' }} />
        ))}
        {loop && (
          <motion.line x1="240" y1="130" x2="240" y2="60" stroke={CYAN} strokeWidth="1"
            animate={{ rotate: [0, 360] }} style={{ transformOrigin: '240px 130px' }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} />
        )}
        {[{ x: 60, y: 80 }, { x: 400, y: 90 }, { x: 70, y: 200 }, { x: 390, y: 190 }].map((t, i) => (
          <motion.g key={i}>
            <motion.circle cx={t.x} cy={t.y} r="6" fill={RED} opacity="0.6"
              animate={loop ? { opacity: [0.6, 0, 0.6] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }} />
            <motion.line x1={t.x} y1={t.y} x2="240" y2="130" stroke={RED} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4"
              animate={loop ? { opacity: [0.4, 0, 0.4] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }} />
          </motion.g>
        ))}
        <Panel x={30} y={220} w={420} h={40} title="Security Monitor" loop={loop}>
          {loop && ['IAM policy enforced', 'Threat blocked', 'Vault secrets rotated'].map((t, i) => (
            <motion.text key={t} x="45" y={238} fill={i === 1 ? AMBER : GREEN} fontSize="6" fontFamily="monospace"
              animate={{ opacity: [0, 0, 1, 1, 0, 0] }} transition={{ repeat: Infinity, duration: 6, delay: i * 2 }}
            >[SEC] {t}</motion.text>
          ))}
        </Panel>
        <StatusLine loop={loop} y={268} text="Zero Trust · OAuth · SIEM · OWASP hardened" />
      </svg>
    </HudFrame>
  )
}

/* ─── UI/UX ─── */
export function WireframeScene({ loop }: { loop: boolean }) {
  return (
    <HudFrame label="UI/UX Design" status="DESIGNING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <rect x="30" y="40" width="55" height="200" fill={FAINT} stroke={DIM} />
        {['Btn', 'Card', 'Nav', 'Form'].map((c, i) => (
          <motion.rect key={c} x="38" y={55 + i * 38} width="38" height="22" fill="rgba(8,175,199,0.06)" stroke={DIM}
            animate={loop ? { x: [38, 38, 200, 200, 38] } : undefined} transition={{ repeat: Infinity, duration: 6, delay: i * 0.3 }} />
        ))}
        <rect x="95" y="40" width="250" height="200" fill="rgba(8,175,199,0.02)" stroke={DIM} strokeDasharray="4 4" />
        <motion.rect x="115" y="70" width="180" height="120" fill="rgba(8,175,199,0.04)" stroke={CYAN} strokeWidth="1"
          animate={loop ? { width: [180, 200, 180], height: [120, 130, 120] } : undefined} transition={{ repeat: Infinity, duration: 4 }} />
        <rect x="125" y="85" width="70" height="10" fill={FAINT} />
        <rect x="125" y="105" width="140" height="6" fill={FAINT} opacity="0.4" />
        <rect x="125" y="118" width="110" height="6" fill={FAINT} opacity="0.3" />
        <motion.circle cx="370" cy="140" r="35" fill="none" stroke={DIM} strokeWidth="1"
          animate={loop ? { rotate: 360 } : undefined} style={{ transformOrigin: '370px 140px' }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }} />
        {['#08AFC7', '#16C6DA', '#071426', '#f5f9fc'].map((c, i) => (
          <circle key={c} cx={370 + Math.cos((i / 4) * Math.PI * 2) * 25} cy={140 + Math.sin((i / 4) * Math.PI * 2) * 25} r="6" fill={c} />
        ))}
        {loop && (
          <motion.g animate={{ x: [200, 230, 200], y: [150, 170, 150] }} transition={{ repeat: Infinity, duration: 3 }}>
            <path d="M200,150 L210,160 L200,170 L190,160 Z" fill={CYAN} />
          </motion.g>
        )}
        <StatusLine loop={loop} y={268} text="Figma · Design System · WCAG · React UI" />
      </svg>
    </HudFrame>
  )
}

/* ─── SOFTWARE TESTING ─── */
export function PipelineScene({ loop }: { loop: boolean }) {
  const tests = ['Login flow', 'API endpoints', 'Payment gateway', 'Mobile responsive']
  return (
    <HudFrame label="Software Testing & QA" status="TESTING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <Panel x={30} y={35} w={200} h={130} title="Chrome · Playwright" loop={loop}>
          <rect x="45" y="58" width="170" height="90" fill="rgba(5,13,24,0.8)" stroke={DIM} />
          <rect x="45" y="58" width="170" height="12" fill="rgba(8,175,199,0.1)" />
          {loop && <motion.rect x="50" y="80" width="0" height="55" fill="rgba(8,175,199,0.08)" animate={{ width: [0, 160, 160] }} transition={{ repeat: Infinity, duration: 3 }} />}
        </Panel>
        <Panel x={250} y={35} w={200} h={200} title="Test Results" loop={loop}>
          {tests.map((t, i) => (
            <g key={t}>
              <motion.text x="265" y={65 + i * 28} fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">{t}</motion.text>
              <motion.text x="420" y={65 + i * 28} fill={GREEN} fontSize="7" fontFamily="monospace" textAnchor="end"
                initial={{ opacity: 0 }} animate={{ opacity: loop ? [0, 0, 1, 1] : 1 }} transition={{ repeat: Infinity, duration: 5, delay: i * 0.8 }}
              >PASS</motion.text>
            </g>
          ))}
        </Panel>
        <motion.polyline points="30,200 80,180 130,190 180,160 230,170" fill="none" stroke={CYAN} strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: loop ? Infinity : 0, repeatDelay: 2 }} />
        <text x="130" y="195" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">load test · 2.4k req/s</text>
        <StatusLine loop={loop} y={268} text="Cypress · Selenium · k6 · 142 tests passed" />
      </svg>
    </HudFrame>
  )
}

/* ─── INTELLIGENT QA ─── */
export function QAValidationScene({ loop }: { loop: boolean }) {
  return (
    <HudFrame label="Intelligent QA · Drawing Validation" status="VALIDATING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <rect x="40" y="50" width="200" height="150" fill="rgba(255,255,255,0.02)" stroke={DIM} />
        <rect x="70" y="80" width="60" height="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="160" cy="115" r="25" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="70" y1="160" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" />
        {loop && (
          <motion.rect x="65" y="75" width="70" height="55" fill="rgba(8,175,199,0.08)" stroke={CYAN} strokeWidth="1.5"
            animate={{ opacity: [0, 1, 1, 0.5] }} transition={{ repeat: Infinity, duration: 3 }} />
        )}
        {loop && (
          <motion.line x1="40" y1="50" x2="240" y2="50" stroke={CYAN_BRIGHT} strokeWidth="2"
            animate={{ y1: [50, 200, 50], y2: [50, 200, 50] }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} />
        )}
        <Panel x={260} y={50} w={190} h={150} title="Rule Engine" loop={loop}>
          {['Dim check: 42.5mm ✓', 'Tolerance: ±0.1 ✓', 'OCR text match ✓', 'Spec compliance ✓'].map((r, i) => (
            <motion.text key={r} x="275" y={75 + i * 22} fill={GREEN} fontSize="6" fontFamily="monospace"
              animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: i * 0.7 }}>{r}</motion.text>
          ))}
        </Panel>
        {loop && (
          <motion.text x="140" y="230" fill={GREEN} fontSize="14" fontWeight="bold" fontFamily="monospace" textAnchor="middle"
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 2 }}
          >PASS</motion.text>
        )}
        <StatusLine loop={loop} y={268} text="YOLO · OCR · Rule engine · CAD/PDF validation" />
      </svg>
    </HudFrame>
  )
}

/* ─── DATA ANALYTICS ─── */
export function DataScene({ loop }: { loop: boolean }) {
  const bars = [55, 85, 65, 110, 75, 95, 70, 100]
  return (
    <HudFrame label="Data Analytics & BI" status="ANALYZING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <Panel x={30} y={35} w={280} h={160} title="Executive Dashboard" loop={loop}>
          {bars.map((h, i) => (
            <motion.rect key={i} x={50 + i * 30} y={175 - h} width="18" height={h} fill="rgba(8,175,199,0.35)" stroke={DIM}
              animate={loop ? { height: [h, h * 1.15, h], y: [175 - h, 175 - h * 1.15, 175 - h] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.12 }} />
          ))}
          <motion.polyline points="50,120 80,95 110,105 140,75 170,85 200,60 230,70 260,50"
            fill="none" stroke={CYAN_BRIGHT} strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: loop ? Infinity : 0, repeatDelay: 2 }} />
        </Panel>
        <Panel x={325} y={35} w={125} h={80} title="KPIs" loop={loop}>
          {['Revenue trend ↑', 'Active users ↑', 'Uptime stable'].map((k, i) => (
            <motion.text key={k} x="340" y={58 + i * 20} fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace"
              animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
            >{k}</motion.text>
          ))}
        </Panel>
        <Panel x={325} y={125} w={125} h={70} title="SQL Query" loop={loop}>
          <motion.text x="335" y="148" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 0.8, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 2 }}
          >SELECT region, SUM(revenue)</motion.text>
          <text x="335" y="160" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">FROM sales GROUP BY 1</text>
        </Panel>
        <motion.circle cx="400" cy="220" r="30" fill="none" stroke={DIM} strokeWidth="8" strokeDasharray="60 130"
          animate={loop ? { rotate: 360 } : undefined} style={{ transformOrigin: '400px 220px' }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} />
        <StatusLine loop={loop} y={268} text="Tableau · Power BI · Snowflake · Spark" />
      </svg>
    </HudFrame>
  )
}

/* ─── TRAINING / INTERNSHIP ─── */
export function TerminalScene({ loop }: { loop: boolean }) {
  return (
    <HudFrame label="Corporate Training · OJT" status="SHIPPING CODE">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <Panel x={30} y={35} w={280} h={190} title="VS Code · Live Project" loop={loop}>
          <rect x="45" y="55" width="50" height="155" fill="rgba(8,175,199,0.04)" stroke={DIM} />
          {['src/', 'api/', 'tests/', 'README'].map((f, i) => (
            <text key={f} x="52" y={72 + i * 16} fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">{f}</text>
          ))}
          <rect x="100" y="55" width="195" height="155" fill="rgba(5,13,24,0.9)" stroke={DIM} />
          {['const deploy = async () => {', '  await runTests();', '  await buildApp();', "  console.log('✓ shipped');", '}'].map((l, i) => (
            <motion.text key={l} x="110" y={72 + i * 18} fill={i === 3 ? GREEN : 'rgba(255,255,255,0.4)'} fontSize="6" fontFamily="monospace"
              animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 6, delay: i * 0.8 }}>{l}</motion.text>
          ))}
          {loop && <motion.rect x="110" y="155" width="7" height="12" fill={CYAN} animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} />}
        </Panel>
        <Panel x={325} y={35} w={125} h={100} title="Mentor Review" loop={loop}>
          <motion.text x="338" y="60" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">PR #42 approved</motion.text>
          <motion.text x="338" y="78" fill={GREEN} fontSize="6" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 1, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 2 }}
          >+127 lines · merged</motion.text>
          <motion.text x="338" y="96" fill={CYAN} fontSize="6" fontFamily="monospace"
            animate={loop ? { opacity: [0, 1, 1] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: 1 }}
          >Experience letter ✓</motion.text>
        </Panel>
        <StatusLine loop={loop} y={268} text="6-month OJT · Live projects · Experience letter" />
      </svg>
    </HudFrame>
  )
}

/* ─── TALENT OUTSOURCING ─── */
export function TalentScene({ loop }: { loop: boolean }) {
  const devs = [{ x: 100, label: 'FE' }, { x: 180, label: 'BE' }, { x: 260, label: 'AI' }, { x: 340, label: 'DevOps' }]
  return (
    <HudFrame label="Talent Outsourcing" status="TEAM ONLINE">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <ellipse cx="240" cy="130" rx="160" ry="80" fill="none" stroke={FAINT} strokeWidth="1" />
        {devs.map((d, i) => (
          <motion.g key={d.label} animate={loop ? { y: [0, -4, 0] } : undefined} transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}>
            <circle cx={d.x} cy={110} r="18" fill={FAINT} stroke={CYAN} strokeWidth="1" />
            <text x={d.x} y={114} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">{d.label}</text>
            <line x1={d.x} y1="128" x2={d.x} y2="155" stroke={DIM} />
            <motion.circle cx={d.x} cy="105" r="3" fill={GREEN} animate={loop ? { opacity: [0.4, 1, 0.4] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} />
          </motion.g>
        ))}
        <motion.line x1="60" y1="180" x2="420" y2="180" stroke={DIM} strokeWidth="1" strokeDasharray="6 4"
          animate={loop ? { strokeDashoffset: [0, -20] } : undefined} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} />
        {loop && <motion.circle r="4" fill={CYAN_BRIGHT} cy={180} animate={{ cx: [60, 420], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} />}
        <Panel x={30} y={200} w={420} h={50} title="Bengaluru Engineering Pod" loop={loop}>
          <text x="45" y="222" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">Staff augmentation · Dedicated teams · Contract-to-hire</text>
          <motion.text x="45" y="238" fill={CYAN} fontSize="6" fontFamily="monospace"
            animate={loop ? { opacity: [0.3, 0.9, 0.3] } : undefined} transition={{ repeat: Infinity, duration: 2 }}
          >4 engineers active · Sprint integration · Weekly reports</motion.text>
        </Panel>
        <StatusLine loop={loop} y={268} text="Vetted talent · Global delivery · Flexible engagement" />
      </svg>
    </HudFrame>
  )
}

/* ─── ROBOT / AUTOMATION HERO ─── */
export function RobotScene({ loop }: { loop: boolean }) {
  const steps = ['OBSERVE', 'LEARN', 'AUTOMATE', 'DEPLOY']
  return (
    <HudFrame label="RPA · Agentic AI" status="AUTOMATING">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <motion.rect x="190" y="75" width="90" height="80" rx="4" fill={FAINT} stroke={CYAN} strokeWidth="1.5"
          animate={loop ? { y: [75, 72, 75] } : undefined} transition={{ repeat: Infinity, duration: 3 }} />
        <rect x="208" y="48" width="54" height="32" rx="3" fill={FAINT} stroke={DIM} />
        {loop && (
          <>
            <motion.circle cx="222" cy="62" r="4" fill={CYAN_BRIGHT} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            <motion.circle cx="248" cy="62" r="4" fill={CYAN_BRIGHT} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} />
          </>
        )}
        <motion.line x1="280" y1="110" x2="350" y2="85" stroke={CYAN} strokeWidth="2.5"
          animate={loop ? { x2: [350, 370, 330, 350], y2: [85, 95, 78, 85] } : undefined} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
        <motion.circle r="7" fill={CYAN} animate={loop ? { cx: [350, 370, 330, 350], cy: [85, 95, 78, 85] } : { cx: 350, cy: 85 }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
        {loop && [0, 1, 2, 3, 4].map((i) => (
          <motion.circle key={i} r="2.5" fill={CYAN_BRIGHT}
            animate={{ cx: [50 + i * 25, 235], cy: [130 + i * 6, 115], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.35, ease: 'linear' }} />
        ))}
        <motion.rect x="50" y="175" width="380" height="8" fill={FAINT} stroke={DIM} />
        {loop && <motion.rect x="50" y="175" width="0" height="8" fill="rgba(8,175,199,0.2)" animate={{ width: [0, 380, 380] }} transition={{ repeat: Infinity, duration: 4 }} />}
        {steps.map((s, i) => (
          <g key={s}>
            <motion.rect x={55 + i * 95} y={200} width="80" height="30" fill={FAINT} stroke={DIM}
              animate={loop ? { stroke: [DIM, CYAN, DIM] } : undefined} transition={{ repeat: Infinity, duration: 4, delay: i * 1 }} />
            <text x={95 + i * 95} y={219} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">{s}</text>
          </g>
        ))}
        <StatusLine loop={loop} y={268} text="Agentic workflows · RPA · Process automation" />
      </svg>
    </HudFrame>
  )
}

/* ─── ECOSYSTEM ORBIT ─── */
export function OrbitScene({ loop }: { loop: boolean }) {
  const items = ['AI', 'Cloud', 'Data', 'Web', 'Sec']
  return (
    <HudFrame label="Technology Ecosystem" status="CONNECTED">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        <motion.circle cx="240" cy="140" r="90" fill="none" stroke={FAINT} strokeWidth="1"
          animate={loop ? { rotate: 360 } : undefined} style={{ transformOrigin: '240px 140px' }} transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} />
        {items.map((label, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2
          const cx = 240 + Math.cos(angle) * 90
          const cy = 140 + Math.sin(angle) * 90
          return (
            <g key={label}>
              <motion.circle cx={cx} cy={cy} r="16" fill={FAINT} stroke={CYAN} strokeWidth="1"
                animate={loop ? { r: [16, 18, 16] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} />
              <text x={cx} y={cy + 4} fill={CYAN} fontSize="7" textAnchor="middle" fontFamily="monospace">{label}</text>
            </g>
          )
        })}
        <circle cx="240" cy="140" r="8" fill={CYAN_BRIGHT} />
        <StatusLine loop={loop} y={268} text="Integrated engineering ecosystem" />
      </svg>
    </HudFrame>
  )
}

/* ─── GLOBAL NETWORK ─── */
export function NetworkScene({ loop }: { loop: boolean }) {
  const hubs = [{ x: 240, y: 140 }, { x: 100, y: 90 }, { x: 380, y: 80 }, { x: 390, y: 190 }, { x: 90, y: 180 }]
  return (
    <HudFrame label="Global Network" status="CONNECTED">
      <svg viewBox="0 0 480 280" className="w-full h-full">
        {hubs.slice(1).map((h, i) => (
          <motion.path key={i} d={`M ${hubs[0].x} ${hubs[0].y} Q ${(hubs[0].x + h.x) / 2} ${(hubs[0].y + h.y) / 2 - 30} ${h.x} ${h.y}`}
            fill="none" stroke={DIM} strokeWidth="1"
            animate={loop ? { opacity: [0.2, 0.7, 0.2] } : undefined} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} />
        ))}
        {loop && hubs.slice(1).map((h, i) => (
          <motion.circle key={`p-${i}`} r="3" fill={CYAN_BRIGHT}
            animate={{ cx: [hubs[0].x, h.x, hubs[0].x], cy: [hubs[0].y, h.y, hubs[0].y], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.6, ease: 'easeInOut' }} />
        ))}
        {hubs.map((h, i) => (
          <circle key={i} cx={h.x} cy={h.y} r={i === 0 ? 8 : 5} fill={CYAN} opacity={i === 0 ? 1 : 0.55} />
        ))}
        <text x="240" y="165" fill="rgba(255,255,255,0.5)" fontSize="7" textAnchor="middle" fontFamily="monospace">BENGALURU HQ</text>
        <StatusLine loop={loop} y={268} text="US · UK · EU · Middle East delivery" />
      </svg>
    </HudFrame>
  )
}
