import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import WorkPreview from '../animations/WorkPreview'
import { softwareServices } from '../../data/services'
import { useMotionConfig } from '../../hooks/useMotionConfig'

export default function RobotAutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [userSelected, setUserSelected] = useState(false)
  const { shouldParallax, shouldAnimate, isMobile } = useMotionConfig()

  useEffect(() => {
    if (!shouldAnimate || userSelected || isMobile) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % softwareServices.length)
    }, 5200)
    return () => clearInterval(interval)
  }, [shouldAnimate, userSelected, isMobile])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const featuredY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const featuredScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.99])

  const active = softwareServices[activeIndex]

  return (
    <section
      ref={sectionRef}
      className="relative section-py bg-navy-deep page-px overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto z-10">
        <EditorialHeading
          label="Live Delivery"
          title="See the Work, Not a Glow Effect"
          subtitle="Each software service is shown as a working product surface: dashboards, inference, inspection, deploys, tests. Click a service to watch that workflow."
          dark
        />

        <motion.div
          style={shouldParallax ? { y: featuredY, scale: featuredScale } : undefined}
          className="relative mb-10 border border-white/[0.1] overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-0">
            <div className="p-6 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <span className="text-[10px] font-mono text-cyan/50 tracking-widest uppercase mb-4 block">
                {String(activeIndex + 1).padStart(2, '0')} / {String(softwareServices.length).padStart(2, '0')}
              </span>
              <h3 className="editorial-display text-xl md:text-2xl text-white mb-4">
                {active.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {active.overview}
              </p>
              <p className="text-sm text-white/40 leading-relaxed mb-8">
                {active.description}
              </p>
              <ul className="space-y-2 mb-8">
                {active.capabilities.slice(0, 4).map((cap) => (
                  <li key={cap} className="text-xs text-white/45 flex gap-2">
                    <span className="text-cyan/70">→</span>
                    {cap}
                  </li>
                ))}
              </ul>
              <Link to={active.path} className="btn-primary inline-flex w-fit">
                View {active.shortTitle}
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </div>

            <div className="relative min-h-[280px] md:min-h-[380px] p-3 md:p-5 bg-[#050d18]">
              <AnimatePresence mode="wait">
                <WorkPreview key={active.id} serviceId={active.id} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-2">
          {softwareServices.map((service, i) => (
            <button
              key={service.id}
              type="button"
              onClick={() => { setActiveIndex(i); setUserSelected(true) }}
              className={`text-left p-3 border text-xs transition-colors ${
                activeIndex === i
                  ? 'border-cyan/50 bg-cyan/[0.07] text-white'
                  : 'border-white/[0.08] text-white/45 hover:text-white/80'
              }`}
            >
              {service.shortTitle}
            </button>
          ))}
        </div>

        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-[var(--page-px)] px-[var(--page-px)]">
          {softwareServices.map((service, i) => (
            <button
              key={service.id}
              type="button"
              onClick={() => { setActiveIndex(i); setUserSelected(true) }}
              className={`shrink-0 px-3 py-2 border text-xs ${
                activeIndex === i ? 'border-cyan text-white' : 'border-white/10 text-white/50'
              }`}
            >
              {service.shortTitle}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/services" className="text-sm text-cyan inline-flex items-center gap-1">
            All software services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
