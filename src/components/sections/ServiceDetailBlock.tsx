import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import ScrollReveal from '../animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import ServiceScenePanel from '../animations/ServiceScenePanel'
import AnimatedTechMarquee from '../animations/AnimatedTechMarquee'
import ServiceProcessTimeline from '../animations/ServiceProcessTimeline'
import { getSceneForService } from '../../data/sceneThemes'
import type { Service } from '../../data/services'

interface ServiceDetailBlockProps {
  service: Service
  index: number
}

export default function ServiceDetailBlock({ service, index }: ServiceDetailBlockProps) {
  const bg = index % 2 === 0 ? 'bg-navy-deep' : 'bg-navy-dark'
  const scene = getSceneForService(service.id)

  return (
    <section className={`relative ${bg} overflow-hidden`} id={service.id}>
      <AnimatedTechMarquee technologies={service.technologies} />

      <div className="section-py page-px">
        <div className="relative max-w-[90rem] mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
            <ScrollReveal variant="slideUpSubtle">
              <span className="text-xs font-mono text-cyan/40 mb-4 block">
                Service {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="editorial-display text-2xl md:text-3xl lg:text-4xl text-white mb-5">
                {service.title}
              </h2>
              <p className="text-body text-body-dark mb-4 leading-relaxed text-base">
                {service.description}
              </p>
              <p className="text-sm text-white/45 leading-relaxed mb-8">
                {service.detailedOverview}
              </p>
              <Link
                to={service.path}
                className="btn-primary inline-flex"
              >
                Discuss This Service
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={0.08}>
              <ServiceScenePanel scene={scene} title={service.shortTitle} />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <ScrollReveal variant="slideUpSubtle" delay={0.05}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Capabilities</h3>
              <StaggerChildren className="space-y-2">
                {service.capabilities.map((cap) => (
                  <StaggerItem key={cap}>
                    <div className="flex items-start gap-3 px-4 py-3 holographic-panel text-sm text-white/60">
                      <Check size={14} className="text-cyan shrink-0 mt-0.5" strokeWidth={2} />
                      {cap}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </ScrollReveal>

            <ScrollReveal variant="slideUpSubtle" delay={0.1}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Deliverables</h3>
              <StaggerChildren className="space-y-2">
                {service.deliverables.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 px-4 py-3 border border-white/[0.06] text-sm text-white/50">
                      <span className="w-1 h-1 bg-cyan shrink-0 mt-2" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </ScrollReveal>

            <ScrollReveal variant="slideUpSubtle" delay={0.15}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Our Process</h3>
              <ServiceProcessTimeline steps={service.process} />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 lg:mt-16 pt-12 border-t border-white/[0.06]">
            <ScrollReveal variant="fade" delay={0.05}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Use Cases</h3>
              <ul className="space-y-3">
                {service.useCases.map((uc) => (
                  <li key={uc} className="text-sm text-white/50 flex items-start gap-3">
                    <ArrowRight size={14} className="text-cyan/50 shrink-0 mt-0.5" />
                    {uc}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={0.1}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Business Outcomes</h3>
              <ul className="space-y-3">
                {service.businessValue.map((bv) => (
                  <li key={bv} className="text-sm text-white/60 flex items-start gap-3">
                    <span className="text-cyan font-mono text-xs shrink-0">→</span>
                    {bv}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
