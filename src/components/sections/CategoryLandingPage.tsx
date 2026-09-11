import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../seo/SEO'
import PageHero from '../ui/PageHero'
import ServiceDetailBlock from './ServiceDetailBlock'
import FinalCTASection from '../home/FinalCTASection'
import CompanyPromiseSection from '../home/CompanyPromiseSection'
import TextReveal from '../animations/TextReveal'
import PremiumScene from '../animations/PremiumScene'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import type { Service } from '../../data/services'
import type { SceneType } from '../../data/sceneThemes'
import type { NavLink } from '../../data/navigation'

interface MethodStep {
  step: string
  title: string
  desc: string
}

interface CategoryLandingPageProps {
  seoTitle: string
  seoDescription: string
  path: string
  label: string
  title: string
  subtitle: string
  scene: SceneType
  introTitle: string
  intro: string[]
  methodology: MethodStep[]
  services: Service[]
  showPromise?: boolean
  extraLinks?: NavLink[]
  extraTitle?: string
  extraIntro?: string
}

export default function CategoryLandingPage({
  seoTitle,
  seoDescription,
  path,
  label,
  title,
  subtitle,
  scene,
  introTitle,
  intro,
  methodology,
  services,
  showPromise = false,
  extraLinks,
  extraTitle,
  extraIntro,
}: CategoryLandingPageProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} path={path} />
      <PageHero label={label} title={title} subtitle={subtitle} scene={scene} />

      {showPromise && <CompanyPromiseSection />}

      <section className="relative bg-navy-dark section-py page-px overflow-hidden">
        <PremiumScene scene={scene} size="section" />
        <div className="relative max-w-[90rem] mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
            <div>
              <TextReveal
                text={introTitle}
                as="h2"
                className="editorial-display text-2xl sm:text-3xl text-white mb-6"
              />
              {intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-body text-body-dark mb-4 leading-relaxed last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <StaggerChildren className="space-y-3">
              {methodology.map((m) => (
                <StaggerItem key={m.step}>
                  <div className="flex gap-5 p-4 holographic-panel">
                    <span className="text-sm font-mono text-cyan shrink-0">{m.step}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{m.title}</h3>
                      <p className="text-xs text-white/45 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceDetailBlock key={service.id} service={service} index={i} />
      ))}

      {extraLinks && extraLinks.length > 0 && (
        <section className="bg-navy-deep section-py page-px">
          <div className="max-w-[90rem] mx-auto">
            <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">
              {extraTitle ?? 'Packaged systems'}
            </h2>
            {extraIntro && (
              <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-8">{extraIntro}</p>
            )}
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extraLinks.map((item) => (
                <StaggerItem key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between gap-3 p-5 holographic-panel h-full hover:border-cyan/30 transition-colors"
                  >
                    <span className="text-sm text-white group-hover:text-cyan transition-colors">{item.label}</span>
                    <ArrowRight size={14} className="text-cyan shrink-0" />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      <FinalCTASection />
    </>
  )
}
