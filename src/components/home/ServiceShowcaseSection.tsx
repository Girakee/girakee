import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import WorkPreview from '../animations/WorkPreview'
import { softwareServices, manpowerServices, trainingServices, type Service } from '../../data/services'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const ROTATE_MS = 5200

const groups: {
  id: 'software' | 'manpower' | 'training'
  title: string
  heading: string
  kicker: string
  body: string
  items: Service[]
}[] = [
  {
    id: 'software',
    title: 'Core Engineering & AI',
    heading: 'Core Engineering & AI',
    kicker: 'Production systems, defined milestones',
    body: 'End-to-end full-stack architectures, applied computer vision, cloud-native deployments, and automated QA. Each initiative follows defined engineering milestones and clear deliverables.',
    items: softwareServices,
  },
  {
    id: 'manpower',
    title: 'Workforce Solutions & Pods',
    heading: 'Workforce Solutions & Dedicated Engineering Pods',
    kicker: 'Flexible Engagement Models',
    body: 'Scale your engineering velocity with pre-vetted senior software engineers and cross-functional technical squads. From embedded time-and-material staff augmentation to fully managed delivery pods, Girakee provides seamless team integration across global timezones under strict SLA governance.',
    items: manpowerServices,
  },
  {
    id: 'training',
    title: 'Corporate Upskilling',
    heading: 'Corporate Upskilling & Practical Talent Incubation',
    kicker: 'Capability Building & Talent Incubation',
    body: 'From tailored corporate engineering bootcamps to structured graduate incubation, Girakee bridges the gap between academic foundations and production-grade software delivery. All programs are mentored by active engineering leads using real-world architectures, continuous integration, and verifiable project outcomes.',
    items: trainingServices,
  },
]

export default function ServiceShowcaseSection() {
  const { shouldAnimate } = useMotionConfig()
  const [groupId, setGroupId] = useState<(typeof groups)[number]['id']>('software')
  const group = groups.find((g) => g.id === groupId) ?? groups[0]
  const [serviceId, setServiceId] = useState(group.items[0].id)
  const [paused, setPaused] = useState(false)
  const active = group.items.find((s) => s.id === serviceId) ?? group.items[0]

  const selectGroup = (id: (typeof groups)[number]['id']) => {
    const next = groups.find((g) => g.id === id)!
    setGroupId(id)
    setServiceId(next.items[0].id)
  }

  useEffect(() => {
    if (!shouldAnimate || paused) return
    const timer = window.setInterval(() => {
      const currentGroup = groups.find((g) => g.id === groupId) ?? groups[0]
      const idx = currentGroup.items.findIndex((s) => s.id === serviceId)
      const nextIdx = (Math.max(idx, 0) + 1) % currentGroup.items.length
      if (nextIdx === 0) {
        const groupIndex = groups.findIndex((g) => g.id === groupId)
        const nextGroup = groups[(groupIndex + 1) % groups.length]
        setGroupId(nextGroup.id)
        setServiceId(nextGroup.items[0].id)
        return
      }
      setServiceId(currentGroup.items[nextIdx].id)
    }, ROTATE_MS)
    return () => window.clearInterval(timer)
  }, [shouldAnimate, paused, groupId, serviceId])

  return (
    <section className="section-py bg-navy-dark page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-[90rem] mx-auto">
        <EditorialHeading
          label="What We Do"
          title="Engineering Software That Powers Business"
          subtitle="Scalable digital architecture, intelligent automation, and robust enterprise engineering delivered to clients across the Middle East, Europe, and North America."
          dark
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => selectGroup(g.id)}
              className={`px-4 py-2.5 text-xs font-medium tracking-wide uppercase border min-h-[44px] touch-manipulation ${
                groupId === g.id
                  ? 'bg-cyan text-navy-deep border-cyan'
                  : 'border-white/[0.12] text-white/55 hover:text-white hover:border-white/25'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] gap-8 lg:gap-12 items-start mb-12">
          <div>
            <p className="text-[11px] font-mono text-cyan/60 uppercase tracking-widest mb-3">{group.kicker}</p>
            <h3 className="editorial-display text-2xl text-white mb-4">{group.heading}</h3>
            <p className="text-sm text-white/55 leading-relaxed mb-8">{group.body}</p>
            <ul
              className="space-y-1"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {group.items.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setServiceId(item.id)}
                    className={`relative w-full text-left px-3 py-2.5 text-sm border-l-2 transition-colors overflow-hidden ${
                      item.id === active.id
                        ? 'border-cyan text-white bg-cyan/[0.06]'
                        : 'border-transparent text-white/50 hover:text-white/80'
                    }`}
                  >
                    {item.id === active.id && shouldAnimate && !paused && (
                      <motion.span
                        key={`${active.id}-progress`}
                        className="absolute inset-y-0 left-0 bg-cyan/10"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                    <span className="relative z-10">
                      <span className="font-mono text-[10px] text-cyan/50 mr-2">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="min-h-[300px] sm:min-h-[340px] mb-6">
              <AnimatePresence mode="wait">
                <WorkPreview key={active.id} serviceId={active.id} />
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldAnimate ? { opacity: 0 } : undefined}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{active.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed mb-4">{active.overview}</p>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{active.detailedOverview}</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cyan/50 mb-2">You get</p>
                    <ul className="space-y-1.5">
                      {active.deliverables.slice(0, 4).map((d) => (
                        <li key={d} className="text-xs text-white/50">{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cyan/50 mb-2">Typical work</p>
                    <ul className="space-y-1.5">
                      {active.useCases.slice(0, 4).map((d) => (
                        <li key={d} className="text-xs text-white/50">{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to={active.path} className="btn-primary">
                    {active.ctaLabel}
                    <ArrowRight size={15} strokeWidth={1.75} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
