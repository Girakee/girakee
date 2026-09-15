import SEO, { serviceJsonLd } from '../seo/SEO'
import PageHero from '../ui/PageHero'
import ServiceScenePanel from '../animations/ServiceScenePanel'
import AnimatedTechMarquee from '../animations/AnimatedTechMarquee'
import ServiceProcessTimeline from '../animations/ServiceProcessTimeline'
import ScrollReveal from '../animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import FinalCTASection from '../home/FinalCTASection'
import ProgramApplicationForm from '../forms/ProgramApplicationForm'
import { getSceneForService } from '../../data/sceneThemes'
import { processTitle, services, type Service } from '../../data/services'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceLandingPageProps {
  serviceId: string
  seoTitle?: string
  seoDescription?: string
}

const categoryHub: Record<Service['category'], { label: string; path: string }> = {
  software: { label: 'All Software Services', path: '/services/engineering' },
  manpower: { label: 'Workforce Solutions & Pods', path: '/services/workforce' },
  training: { label: 'Corporate Upskilling & Incubation', path: '/services/enablement' },
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}

export default function ServiceLandingPage({ serviceId, seoTitle, seoDescription }: ServiceLandingPageProps) {
  const service = getServiceById(serviceId)
  if (!service) return null

  const scene = getSceneForService(service.id)
  const relatedServices = (service.related ?? [])
    .map((item) => {
      const related = getServiceById(item.id)
      return related ? { ...item, service: related } : null
    })
    .filter((item): item is { id: string; blurb: string; service: Service } => Boolean(item))

  const ctaTo = service.ctaHref ?? '/contact'
  const relatedHeading =
    service.relatedHeading ??
    (service.category === 'manpower' ? 'Related Models' : 'Related Disciplines')
  const hub = categoryHub[service.category]
  const applyAnchor = service.application === 'internship' ? 'apply' : 'register'
  const engageSteps = service.engage ?? service.process

  return (
    <>
      <SEO
        title={seoTitle ?? service.shortTitle}
        description={seoDescription ?? service.description}
        path={service.path}
        keywords={[
          service.shortTitle,
          service.title,
          ...service.technologies.slice(0, 6),
          'Girakee Software Services',
          'enterprise software engineering Bengaluru',
        ]}
        jsonLd={serviceJsonLd({
          name: service.title,
          description: service.description,
          path: service.path,
        })}
      />
      <PageHero
        label={service.heroKicker ?? service.shortTitle}
        title={service.heroTitle ?? service.title}
        subtitle={service.description}
        scene={scene}
        cta={{ label: service.ctaLabel, to: ctaTo }}
      />

      <AnimatedTechMarquee technologies={service.technologies} />

      <section className="bg-navy-deep section-py page-px relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <ScrollReveal variant="slideUpSubtle">
              <p className="eyebrow eyebrow-dark mb-4">{service.buildSectionTitle ?? 'What We Build'}</p>
              <h2 className="editorial-display text-2xl md:text-3xl text-white mb-6">
                {service.buildHeadline ?? service.overview}
              </h2>
              <p className="text-body text-body-dark leading-relaxed mb-8 text-base">
                {service.detailedOverview}
              </p>
              <Link to={service.application ? `#${applyAnchor}` : '/contact'} className="btn-primary inline-flex">
                {service.inSectionCta ?? service.ctaLabel}
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.1}>
              <ServiceScenePanel scene={scene} title={service.shortTitle} />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <ScrollReveal variant="slideUpSubtle">
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

            <ScrollReveal variant="slideUpSubtle" delay={0.08}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Deliverables (You Get)</h3>
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

            <ScrollReveal variant="slideUpSubtle" delay={0.12}>
              <h3 className="eyebrow eyebrow-dark mb-5 text-[0.625rem]">Our Process</h3>
              <ServiceProcessTimeline steps={service.process} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="editorial-display text-xl md:text-2xl text-white mb-10">Use Cases & Business Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal variant="fade">
              <h3 className="eyebrow eyebrow-dark mb-6 text-[0.625rem]">Use Cases</h3>
              <ul className="space-y-4">
                {service.useCases.map((uc) => (
                  <li key={uc} className="text-sm text-white/55 flex items-start gap-3">
                    <ArrowRight size={14} className="text-cyan/50 shrink-0 mt-0.5" />
                    {uc}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.08}>
              <h3 className="eyebrow eyebrow-dark mb-6 text-[0.625rem]">Business Outcomes</h3>
              <ul className="space-y-4">
                {service.businessValue.map((bv) => (
                  <li key={bv} className="text-sm text-white/65 flex items-start gap-3">
                    <span className="text-cyan font-mono text-xs shrink-0">→</span>
                    {bv}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px border-t border-white/[0.06]">
        <div className="max-w-[90rem] mx-auto">
          <ScrollReveal variant="slideUpSubtle">
            <h2 className="editorial-display text-xl md:text-2xl text-white mb-4">How We Engage</h2>
            <p className="text-sm text-white/45 max-w-2xl mb-10 leading-relaxed">
              {service.engageSubtext ??
                `Every ${service.shortTitle.toLowerCase()} engagement follows a structured delivery model, from discovery through production handover.`}
            </p>
          </ScrollReveal>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {engageSteps.map((step, i) => (
              <StaggerItem key={`${i}-${processTitle(step)}`}>
                <div className="p-4 holographic-panel h-full">
                  <span className="text-xs font-mono text-cyan/50 block mb-2">
                    Stage {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-white mb-2">{processTitle(step)}</p>
                  {step.description && (
                    <p className="text-xs text-white/45 leading-relaxed">{step.description}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {service.application && (
        <section id={applyAnchor} className="bg-navy-dark section-py page-px border-t border-white/[0.06] scroll-mt-24">
          <div className="max-w-3xl mx-auto holographic-panel p-6 sm:p-8 md:p-10">
            <ProgramApplicationForm kind={service.application} />
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="bg-navy-dark section-py page-px border-t border-white/[0.06]">
          <div className="max-w-[90rem] mx-auto">
            <ScrollReveal variant="fade">
              <h2 className="eyebrow eyebrow-dark mb-8 text-[0.625rem]">{relatedHeading}</h2>
            </ScrollReveal>
            <StaggerChildren className="grid md:grid-cols-3 gap-6">
              {relatedServices.map(({ blurb, service: related }) => (
                <StaggerItem key={related.id}>
                  <Link
                    to={related.path}
                    className="group block p-6 holographic-panel h-full hover:border-cyan/30 transition-colors"
                  >
                    <h3 className="text-base font-semibold text-white group-hover:text-cyan transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{blurb}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-cyan/70">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      <section className="bg-navy-deep section-py page-px border-t border-white/[0.06]">
        <div className="max-w-[90rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40">
            {service.category === 'software' && 'Part of Girakee core engineering & AI'}
            {service.category === 'manpower' && 'Part of Girakee workforce solutions & pods'}
            {service.category === 'training' && 'Part of Girakee corporate upskilling & incubation'}
          </p>
          <Link to={hub.path} className="btn-secondary inline-flex">
            {hub.label}
            <ArrowRight size={15} strokeWidth={1.75} />
          </Link>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
