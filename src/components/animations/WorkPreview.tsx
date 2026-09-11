import { motion } from 'framer-motion'
import type { ReactElement, ReactNode } from 'react'
import { useMotionConfig } from '../../hooks/useMotionConfig'

function Window({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="h-full min-h-[280px] flex flex-col bg-[#07111d] border border-white/[0.1] overflow-hidden">
      <div className="flex items-center gap-2 h-9 px-3 border-b border-white/[0.08] bg-white/[0.03] shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#ef4444]/80" />
        <span className="w-2 h-2 rounded-full bg-[#f59e0b]/80" />
        <span className="w-2 h-2 rounded-full bg-[#22c55e]/80" />
        <span className="ml-2 text-[10px] font-mono text-white/35 truncate">{title}</span>
      </div>
      <div className="relative flex-1 min-h-0 p-3 sm:p-4 overflow-hidden">{children}</div>
    </div>
  )
}

function Bar({ delay, width, color = 'bg-cyan' }: { delay: number; width: string; color?: string }) {
  const { shouldAnimate } = useMotionConfig()
  return (
    <div className="h-2 bg-white/[0.06] overflow-hidden">
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        animate={shouldAnimate ? { width } : { width }}
        transition={{ delay, duration: 1.4, repeat: Infinity, repeatDelay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

function Typing({ lines, prefix = '>' }: { lines: string[]; prefix?: string }) {
  const { shouldAnimate } = useMotionConfig()
  return (
    <div className="font-mono text-[10px] sm:text-[11px] leading-6 text-white/55">
      {lines.map((line, i) => (
        <motion.p
          key={line}
          initial={{ opacity: 0, x: 6 }}
          animate={shouldAnimate ? { opacity: [0, 1, 1, 0.7] } : { opacity: 1 }}
          transition={{ delay: i * 0.55, duration: 2.4, repeat: Infinity, repeatDelay: 2 }}
        >
          <span className="text-cyan/70 mr-2">{prefix}</span>
          {line}
        </motion.p>
      ))}
    </div>
  )
}

function WebPreview() {
  const { shouldAnimate } = useMotionConfig()
  return (
    <Window title="app.client.com · dashboard">
      <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr] gap-3 h-full">
        <div className="space-y-2 border-r border-white/[0.06] pr-2">
          {['Home', 'Orders', 'Users', 'Reports'].map((item, i) => (
            <motion.div
              key={item}
              className="h-6 text-[9px] text-white/40 flex items-center px-1"
              animate={shouldAnimate ? { backgroundColor: i === 1 ? ['rgba(8,175,199,0)', 'rgba(8,175,199,0.18)', 'rgba(8,175,199,0)'] : 'transparent' } : undefined}
              transition={{ repeat: Infinity, duration: 4, delay: i * 0.2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: 'Active users', value: '12.4k' },
              { label: 'Conversion', value: '4.8%' },
              { label: 'Uptime', value: '99.95%' },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className="p-2 border border-white/[0.08] bg-white/[0.03]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <p className="text-[8px] text-white/30 uppercase tracking-wider">{card.label}</p>
                <p className="text-sm text-white font-semibold mt-1">{card.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {[40, 62, 48, 78, 55, 88, 70, 92, 64, 80].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-cyan/70 origin-bottom"
                initial={{ scaleY: 0 }}
                animate={shouldAnimate ? { scaleY: [0.2, h / 100, 0.45, h / 100] } : { scaleY: h / 100 }}
                transition={{ duration: 3.5, delay: i * 0.08, repeat: Infinity, ease: 'easeInOut' }}
                style={{ height: '100%' }}
              />
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}

function AiPreview() {
  const { shouldAnimate } = useMotionConfig()
  const messages = [
    { role: 'user', text: 'Classify this invoice and extract the due date.' },
    { role: 'ai', text: 'Invoice #4821 · Vendor: Helix Parts · Due 18 Sep · Confidence 97%.' },
  ]
  return (
    <Window title="girakee · inference studio">
      <div className="space-y-3">
        {messages.map((m, i) => (
          <motion.div
            key={m.text}
            className={`max-w-[90%] p-2.5 text-[11px] leading-relaxed ${
              m.role === 'user' ? 'ml-auto bg-cyan/15 text-white/80' : 'bg-white/[0.05] text-white/70'
            }`}
            initial={{ opacity: 0, y: 12 }}
            animate={shouldAnimate ? { opacity: [0, 1, 1, 1], y: [12, 0, 0, 0] } : { opacity: 1 }}
            transition={{ delay: i * 1.4, duration: 0.5, repeat: Infinity, repeatDelay: 3.2 }}
          >
            {m.text}
          </motion.div>
        ))}
        <div className="mt-4">
          <p className="text-[9px] text-white/30 mb-1">Model latency</p>
          <Bar delay={0.4} width="72%" />
        </div>
      </div>
    </Window>
  )
}

function VisionPreview() {
  const { shouldAnimate } = useMotionConfig()
  const boxes = [
    { x: '12%', y: '18%', w: '38%', h: '28%', label: 'PART A' },
    { x: '48%', y: '36%', w: '28%', h: '22%', label: 'DIM 42.5' },
    { x: '22%', y: '58%', w: '44%', h: '18%', label: 'NOTE' },
  ]
  return (
    <Window title="vision-lab · drawing inspection">
      <div className="relative h-full min-h-[220px] border border-white/[0.08] bg-[#0b1726]">
        <div className="absolute inset-4 border border-dashed border-white/[0.08]" />
        {boxes.map((b, i) => (
          <motion.div
            key={b.label}
            className="absolute border border-cyan/70 bg-cyan/10"
            style={{ left: b.x, top: b.y, width: b.w, height: b.h }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={shouldAnimate ? { opacity: [0, 1, 1, 0.5], scale: [0.92, 1, 1, 1] } : { opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.7, duration: 0.6, repeat: Infinity, repeatDelay: 2.8 }}
          >
            <span className="absolute -top-4 left-0 text-[8px] font-mono text-cyan">{b.label}</span>
          </motion.div>
        ))}
        <motion.div
          className="absolute left-4 right-4 h-px bg-cyan/80"
          animate={shouldAnimate ? { top: ['16%', '78%', '16%'] } : undefined}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </Window>
  )
}

function CloudPreview() {
  return (
    <Window title="terminal · deploy production">
      <Typing
        lines={[
          'terraform plan · 14 to add, 2 to change',
          'kubectl apply -f release.yml',
          'rolling update: 3/3 pods ready',
          'health checks passed · 99.95% SLO',
        ]}
      />
      <div className="mt-4 flex gap-2">
        {['Build', 'Test', 'Deploy'].map((stage, i) => (
          <motion.div
            key={stage}
            className="flex-1 h-8 border border-white/[0.08] text-[9px] text-white/50 flex items-center justify-center"
            animate={{ borderColor: ['rgba(255,255,255,0.08)', 'rgba(8,175,199,0.7)', 'rgba(255,255,255,0.08)'] }}
            transition={{ repeat: Infinity, duration: 3.6, delay: i * 0.9 }}
          >
            {stage}
          </motion.div>
        ))}
      </div>
    </Window>
  )
}

function SecurityPreview() {
  const { shouldAnimate } = useMotionConfig()
  const events = [
    { t: '14:02:11', msg: 'Blocked brute-force on /admin', ok: true },
    { t: '14:02:18', msg: 'Rotated secrets in vault', ok: true },
    { t: '14:02:26', msg: 'Zero Trust policy updated', ok: true },
    { t: '14:02:33', msg: 'Anomaly score 0.12 · allow', ok: true },
  ]
  return (
    <Window title="security ops · live feed">
      <div className="space-y-2">
        {events.map((e, i) => (
          <motion.div
            key={e.t}
            className="flex items-center gap-3 px-2 py-2 border border-white/[0.06] bg-white/[0.02]"
            initial={{ opacity: 0, x: -16 }}
            animate={shouldAnimate ? { opacity: [0, 1, 1], x: [-16, 0, 0] } : { opacity: 1 }}
            transition={{ delay: i * 0.65, duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-mono text-white/30 w-14">{e.t}</span>
            <span className="text-[11px] text-white/70">{e.msg}</span>
          </motion.div>
        ))}
      </div>
    </Window>
  )
}

function DesignPreview() {
  const { shouldAnimate } = useMotionConfig()
  return (
    <Window title="figma · design system">
      <div className="grid grid-cols-3 gap-2 h-full">
        {['Primary', 'Cards', 'Forms'].map((name, i) => (
          <motion.div
            key={name}
            className="border border-white/[0.08] bg-white/[0.03] p-2"
            animate={shouldAnimate ? { y: [0, -6, 0] } : undefined}
            transition={{ repeat: Infinity, duration: 3.2, delay: i * 0.35, ease: 'easeInOut' }}
          >
            <div className="h-16 bg-cyan/20 mb-2" />
            <div className="h-2 bg-white/15 mb-1.5 w-3/4" />
            <div className="h-2 bg-white/10 w-1/2" />
            <p className="text-[9px] text-white/40 mt-2">{name}</p>
          </motion.div>
        ))}
      </div>
    </Window>
  )
}

function QaPreview() {
  const { shouldAnimate } = useMotionConfig()
  const tests = [
    'auth.login.spec.ts',
    'checkout.flow.spec.ts',
    'api.contracts.spec.ts',
    'load.home.spec.ts',
  ]
  return (
    <Window title="playwright · test run">
      <div className="space-y-2">
        {tests.map((t, i) => (
          <div key={t} className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-white/55">{t}</span>
            <motion.span
              className="text-[10px] font-mono text-emerald-400"
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: [0, 1, 1] } : { opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.55, duration: 0.3, repeat: Infinity, repeatDelay: 2.8 }}
            >
              passed
            </motion.span>
          </div>
        ))}
        <div className="pt-3">
          <Bar delay={0.2} width="100%" color="bg-emerald-400" />
        </div>
      </div>
    </Window>
  )
}

function DataPreview() {
  return (
    <Window title="analytics · operations board">
      <div className="grid grid-cols-2 gap-3 h-full">
        <div className="space-y-2">
          <p className="text-[9px] text-white/30 uppercase">Pipeline health</p>
          <Bar delay={0.1} width="88%" />
          <Bar delay={0.35} width="64%" />
          <Bar delay={0.55} width="79%" />
          <Bar delay={0.75} width="51%" />
        </div>
        <Typing
          prefix=""
          lines={['orders_daily  1.2M rows', 'freshness     4 min', 'dbt run       success', 'tableau sync  live']}
        />
      </div>
    </Window>
  )
}

function TalentPreview() {
  const { shouldAnimate } = useMotionConfig()
  const people = [
    { name: 'Ananya R.', role: 'Full-stack', status: 'Joined squad' },
    { name: 'Karthik M.', role: 'DevOps', status: 'In screening' },
    { name: 'Sara L.', role: 'ML Engineer', status: 'Client interview' },
  ]
  return (
    <Window title="manpower · staff board">
      <div className="space-y-2">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            className="flex items-center justify-between p-2.5 border border-white/[0.08] bg-white/[0.03]"
            animate={shouldAnimate ? { x: [0, 4, 0], opacity: [0.65, 1, 0.65] } : undefined}
            transition={{ repeat: Infinity, duration: 3.4, delay: i * 0.4, ease: 'easeInOut' }}
          >
            <div>
              <p className="text-[12px] text-white">{p.name}</p>
              <p className="text-[10px] text-white/40">{p.role}</p>
            </div>
            <span className="text-[10px] text-cyan">{p.status}</span>
          </motion.div>
        ))}
      </div>
    </Window>
  )
}

function TeamPreview() {
  const { shouldAnimate } = useMotionConfig()
  const cols = [
    { name: 'To do', cards: ['API contract', 'Auth flow'] },
    { name: 'In progress', cards: ['Invoice OCR'] },
    { name: 'Done', cards: ['CI pipeline'] },
  ]
  return (
    <Window title="jira · dedicated pod">
      <div className="grid grid-cols-3 gap-2 h-full">
        {cols.map((col, ci) => (
          <div key={col.name}>
            <p className="text-[9px] uppercase tracking-wider text-white/30 mb-2">{col.name}</p>
            {col.cards.map((card) => (
              <motion.div
                key={card}
                className="mb-2 p-2 text-[10px] text-white/70 border border-white/[0.08] bg-white/[0.04]"
                animate={shouldAnimate ? { y: ci === 1 ? [0, -5, 0] : [0, 0, 0] } : undefined}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
              >
                {card}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </Window>
  )
}

function HirePreview() {
  const { shouldAnimate } = useMotionConfig()
  const steps = ['Contract', 'Sprint 1', 'Review', 'Offer']
  return (
    <Window title="contract-to-hire · timeline">
      <div className="flex items-center justify-between mt-6 px-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-3 h-3 rounded-full bg-cyan mb-2"
              animate={shouldAnimate ? { scale: [1, 1.35, 1] } : undefined}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.45 }}
            />
            <p className="text-[9px] text-white/50">{s}</p>
          </div>
        ))}
      </div>
      <motion.div
        className="h-px bg-cyan/50 mx-6 mt-[-38px]"
        initial={{ scaleX: 0 }}
        animate={shouldAnimate ? { scaleX: [0, 1, 1] } : { scaleX: 1 }}
        transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.5 }}
        style={{ transformOrigin: 'left' }}
      />
    </Window>
  )
}

function TrainingPreview() {
  const { shouldAnimate } = useMotionConfig()
  const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6']
  return (
    <Window title="ojt · 6 month internship">
      <p className="text-[11px] text-white/50 mb-4">Live project: drawing validation API</p>
      <div className="grid grid-cols-6 gap-1.5 mb-5">
        {months.map((m, i) => (
          <motion.div
            key={m}
            className="h-16 border border-white/[0.08] flex items-end justify-center pb-1 text-[9px] text-white/40"
            animate={shouldAnimate ? { backgroundColor: ['rgba(8,175,199,0)', 'rgba(8,175,199,0.25)', 'rgba(8,175,199,0.08)'] } : undefined}
            transition={{ repeat: Infinity, duration: 4, delay: i * 0.35 }}
          >
            {m}
          </motion.div>
        ))}
      </div>
      <Bar delay={0.2} width="83%" />
      <p className="text-[10px] text-cyan/70 mt-2">Experience letter ready at month 6</p>
    </Window>
  )
}

function WorkshopPreview() {
  return (
    <Window title="corporate workshop · cloud for leads">
      <Typing
        prefix="•"
        lines={[
          '09:00  Architecture walkthrough',
          '11:00  Lab: Terraform module',
          '14:00  Lab: Kubernetes rollout',
          '16:30  Capstone review',
        ]}
      />
    </Window>
  )
}

const PREVIEWS: Record<string, () => ReactElement> = {
  'web-mobile': WebPreview,
  'ai-ml': AiPreview,
  'cloud-devops': CloudPreview,
  cybersecurity: SecurityPreview,
  'ui-ux': DesignPreview,
  'software-testing': QaPreview,
  'intelligent-qa': VisionPreview,
  'data-analytics': DataPreview,
  'staff-augmentation': TalentPreview,
  'dedicated-teams': TeamPreview,
  'contract-to-hire': HirePreview,
  'it-recruitment': TalentPreview,
  internship: TrainingPreview,
  'corporate-training': WorkshopPreview,
  'on-job-training': TrainingPreview,
}

export default function WorkPreview({ serviceId }: { serviceId: string }) {
  const Scene = PREVIEWS[serviceId] ?? WebPreview
  return (
    <motion.div
      key={serviceId}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Scene />
    </motion.div>
  )
}
