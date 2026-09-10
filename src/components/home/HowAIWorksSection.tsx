import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import AIProcessFlowAnimation from '../animations/AIProcessFlowAnimation'
import ScrollReveal from '../animations/ScrollReveal'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const stages = [
  { num: '01', title: 'Ingestion', description: 'CAD, PDF, and technical documents enter the pipeline.' },
  { num: '02', title: 'Detection', description: 'YOLO models identify components and regions of interest.' },
  { num: '03', title: 'OCR Extraction', description: 'Dimensions and annotations extracted from detected regions.' },
  { num: '04', title: 'Rule Validation', description: 'Deterministic engines validate against specifications.' },
]

export default function HowAIWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile, shouldAnimate } = useMotionConfig()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, 1])

  return (
    <section ref={containerRef} className="relative section-py bg-navy-dark page-px overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-[90rem] mx-auto z-10">
        <EditorialHeading
          label="AI Pipeline"
          title="How AI Works"
          subtitle="From intelligence to automation — data flows through AI into production systems."
          dark
        />

        <ScrollReveal variant="fade" className="mb-12 lg:mb-16">
          <div className="relative border border-white/[0.08] bg-gradient-to-b from-navy-deep/90 via-[#050d18] to-navy-deep/90 holographic-panel overflow-hidden p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,175,199,0.08)_0%,transparent_70%)] pointer-events-none" />
            <motion.p
              className="relative text-[10px] font-mono text-cyan/50 tracking-widest uppercase mb-6"
              animate={shouldAnimate ? { opacity: [0.4, 1, 0.4] } : undefined}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              ● Live Process Flow
            </motion.p>
            <AIProcessFlowAnimation className="relative max-w-5xl mx-auto min-h-[200px] md:min-h-[260px]" />
            <div className="relative mt-6 flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 text-[9px] md:text-[10px] font-mono text-white/35 uppercase tracking-widest">
              <span>Input</span>
              <span className="text-cyan/30">·</span>
              <span>AI Processing</span>
              <span className="text-cyan/30">·</span>
              <span>Manufacturing</span>
              <span className="text-cyan/30">·</span>
              <span>Robotics</span>
              <span className="text-cyan/30">·</span>
              <span>Automation</span>
            </div>
          </div>
        </ScrollReveal>

        {isMobile ? (
          <div className="relative pl-7">
            <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" />
            <StaggerChildren>
              {stages.map((stage) => (
                <StaggerItem key={stage.num}>
                  <div className="relative pb-10 last:pb-0">
                    <div className="absolute -left-7 top-1 w-2 h-2 bg-cyan" />
                    <span className="text-xs font-mono text-white/30 block mb-2">{stage.num}</span>
                    <h3 className="text-base font-semibold text-white mb-1.5">{stage.title}</h3>
                    <p className="text-sm text-body-dark">{stage.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-white/10">
              {shouldAnimate && (
                <motion.div style={{ scaleX: lineProgress }} className="h-full bg-cyan/50 origin-left" />
              )}
            </div>
            <StaggerChildren className="grid grid-cols-4 gap-8" stagger={0.08}>
              {stages.map((stage) => (
                <StaggerItem key={stage.num}>
                  <div className="relative pt-12">
                    <div className="absolute top-6 left-0 w-2 h-2 bg-cyan" />
                    <span className="text-xs font-mono text-white/30 block mb-3">{stage.num}</span>
                    <h3 className="text-base font-semibold text-white mb-2">{stage.title}</h3>
                    <p className="text-sm text-body-dark">{stage.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        )}
      </div>
    </section>
  )
}
