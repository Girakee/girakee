import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import WorkPreview from '../animations/WorkPreview'
import { softwareServices, manpowerServices, trainingServices, type Service } from '../../data/services'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const groups: { id: 'software' | 'manpower' | 'training'; title: string; kicker: string; body: string; items: Service[]; hub: string }[] = [
  {
    id: 'software',
    title: 'Software Services',
    kicker: 'Build and run production systems',
    body: 'We design, build, and operate web products, mobile apps, AI pipelines, cloud platforms, security controls, and data systems. Work is done in sprints, with code review, CI, and a named delivery lead in Bengaluru.',
    items: softwareServices,
    hub: '/services',
  },
  {
    id: 'manpower',
    title: 'Manpower Solutions',
    kicker: 'People who can ship, not CV stacks',
    body: 'Staff augmentation, dedicated pods, contract-to-hire, and IT recruitment. Engineers are screened on live problems, then join your tools and rituals. You keep product ownership. We keep the bench and the performance loop.',
    items: manpowerServices,
    hub: '/manpower-solutions',
  },
  {
    id: 'training',
    title: 'Training & Internships',
    kicker: 'Learn on the job that actually ships',
    body: 'Six-month internships on live projects, corporate workshops for existing teams, and intensive bootcamps. Instructors are delivery engineers. Completers leave with work, reviews, and an experience letter or capability report.',
    items: trainingServices,
    hub: '/training',
  },
]

export default function ServiceShowcaseSection() {
  const { shouldAnimate } = useMotionConfig()
  const [groupId, setGroupId] = useState<(typeof groups)[number]['id']>('software')
  const group = groups.find((g) => g.id === groupId) ?? groups[0]
  const [serviceId, setServiceId] = useState(group.items[0].id)
  const active = group.items.find((s) => s.id === serviceId) ?? group.items[0]

  const selectGroup = (id: (typeof groups)[number]['id']) => {
    const next = groups.find((g) => g.id === id)!
    setGroupId(id)
    setServiceId(next.items[0].id)
  }

  return (
    <section className="section-py bg-navy-dark page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-[90rem] mx-auto">
        <EditorialHeading
          label="What We Do"
          title="Software. Manpower. Training."
          subtitle="Three practices, each with named sub-services, defined deliverables, and a live way of working you can inspect before you hire us."
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
            <h3 className="editorial-display text-2xl text-white mb-4">{group.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed mb-8">{group.body}</p>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setServiceId(item.id)}
                    className={`w-full text-left px-3 py-2.5 text-sm border-l-2 transition-colors ${
                      item.id === active.id
                        ? 'border-cyan text-white bg-cyan/[0.06]'
                        : 'border-transparent text-white/50 hover:text-white/80'
                    }`}
                  >
                    {item.title}
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
                    Open {active.shortTitle}
                    <ArrowRight size={15} strokeWidth={1.75} />
                  </Link>
                  <Link to={group.hub} className="btn-secondary">
                    All {group.title}
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
