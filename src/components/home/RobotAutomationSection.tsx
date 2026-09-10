import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import LiveServiceScene from '../animations/LiveServiceScene'
import CommandCenterScene from '../animations/CommandCenterScene'
import { services } from '../../data/services'
import { getSceneForService } from '../../data/sceneThemes'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const automationServices = services.filter((s) =>
  ['ai-ml', 'computer-vision', 'intelligent-qa', 'software-testing', 'cloud-devops', 'cybersecurity', 'data-analytics', 'web-mobile'].includes(s.id),
)

export default function RobotAutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [userSelected, setUserSelected] = useState(false)
  const { shouldParallax, shouldAnimate, isMobile, shouldLoop } = useMotionConfig()

  useEffect(() => {
    if (!shouldLoop || userSelected || isMobile) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < 0) return 0
        return (prev + 1) % automationServices.length
      })
    }, 4500)
    return () => clearInterval(interval)
  }, [shouldLoop, userSelected, isMobile])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const featuredY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const featuredScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98])
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  const active = activeIndex >= 0 ? automationServices[activeIndex] : null

  return (
    <section
      ref={sectionRef}
      className="relative section-py bg-navy-deep page-px overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-cyan/[0.04] blur-[120px] pointer-events-none"
        style={shouldParallax ? { y: featuredY } : undefined}
      />

      <div className="relative max-w-[90rem] mx-auto z-10">
        <EditorialHeading
          label="Intelligent Automation"
          title="Robot Learning & Automated Workflows"
          subtitle="Watch how Girakee engineers production systems — AI agents that observe, learn, and automate complex engineering workflows across every service line."
          dark
        />

        {/* Featured live scene */}
        <motion.div
          style={shouldParallax ? { y: featuredY, scale: featuredScale } : undefined}
          className="relative mb-12 lg:mb-16 border border-cyan/20 holographic-panel overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
            <div className="p-6 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <motion.span
                className="text-[10px] font-mono text-cyan/50 tracking-widest uppercase mb-4 block"
                animate={shouldAnimate ? { opacity: [0.4, 1, 0.4] } : undefined}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                ● Live Simulation
              </motion.span>
              <h3 className="editorial-display text-xl md:text-2xl text-white mb-4">
                Agentic AI & RPA in Production
              </h3>
              <p className="text-sm text-white/45 leading-relaxed mb-6">
                Our automation practice combines robotic process automation, machine learning,
                and deterministic rule engines. Systems observe your workflows, learn patterns,
                and execute multi-step tasks — from document validation to cloud deployments.
              </p>
              <div className="space-y-2 mb-8">
                {['Observe workflow patterns', 'Train on production data', 'Automate repetitive tasks', 'Deploy with monitoring'].map((step, i) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-3 text-xs text-white/50"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-4 h-4 border border-cyan/30 flex items-center justify-center text-[9px] font-mono text-cyan/60">
                      {i + 1}
                    </span>
                    {step}
                  </motion.div>
                ))}
              </div>
              <Link to="/ai-engineering" className="btn-primary inline-flex w-fit">
                Explore AI Automation
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </div>

            <div className="relative min-h-[280px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active?.id ?? 'command-center'}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  {active ? (
                    <LiveServiceScene
                      scene={getSceneForService(active.id)}
                      className="h-full !aspect-auto min-h-[280px] md:min-h-[400px]"
                    />
                  ) : (
                    <CommandCenterScene
                      height="h-full min-h-[280px] md:min-h-[400px]"
                      showLabels={false}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress bar */}
          {shouldAnimate && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]">
              <motion.div
                className="h-full bg-cyan/50 origin-left"
                style={{ scaleX: lineProgress }}
              />
            </div>
          )}
        </motion.div>

        {/* Service live scenes strip */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase">
            Live Service Simulations
          </p>
          <Link to="/services" className="text-xs text-cyan/60 hover:text-cyan flex items-center gap-1">
            All services <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Desktop: grid with hover select */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {automationServices.map((service, i) => {
            const scene = getSceneForService(service.id)
            const isActive = activeIndex === i
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => { setActiveIndex(i); setUserSelected(true) }}
                className={`text-left border overflow-hidden transition-colors touch-manipulation ${
                  isActive ? 'border-cyan/40 bg-cyan/[0.04]' : 'border-white/[0.06] hover:border-cyan/20'
                }`}
                whileHover={shouldAnimate ? { y: -2 } : undefined}
              >
                <LiveServiceScene scene={scene} compact className="!aspect-[16/10]" />
                <div className="p-4">
                  <span className="text-[9px] font-mono text-cyan/40 block mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1">{service.shortTitle}</h4>
                  <p className="text-[11px] text-white/35 line-clamp-2 leading-relaxed">{service.description}</p>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-[var(--page-px)] px-[var(--page-px)] scrollbar-hide">
          {automationServices.map((service, i) => {
            const scene = getSceneForService(service.id)
            return (
              <Link
                key={service.id}
                to={service.path}
                className="snap-center shrink-0 w-[min(85vw,300px)] border border-white/[0.08] overflow-hidden touch-manipulation"
                onClick={() => { setActiveIndex(i); setUserSelected(true) }}
              >
                <LiveServiceScene scene={scene} compact />
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1">{service.shortTitle}</h4>
                  <p className="text-[11px] text-white/35 line-clamp-2">{service.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Active service detail bar */}
        {active && !isMobile && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-5 border border-white/[0.06] flex items-center justify-between gap-6 holographic-panel"
          >
            <div>
              <p className="text-sm text-white/70 mb-1">{active.title}</p>
              <p className="text-xs text-white/35">{active.deliverables.slice(0, 3).join(' · ')}</p>
            </div>
            <Link to={active.path} className="btn-secondary shrink-0 text-sm py-2.5">
              View Service
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
