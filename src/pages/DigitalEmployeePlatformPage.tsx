import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import ScrollReveal from '../components/animations/ScrollReveal'
import FinalCTASection from '../components/home/FinalCTASection'
import { industryPacks, industryPath, platformLoop } from '../data/digitalEmployees'
import { PlatformCommandScene, PlatformWorkforceScene } from '../components/animations/digital-employees/PlatformWorkforceScene'

export default function DigitalEmployeePlatformPage() {
  return (
    <>
      <SEO
        title="AI Digital Employee"
        description="AI Digital Employees for every major industry. Understand, decide, execute, verify, and escalate business work."
        path="/products/digital-employees"
      />
      <PageHero
        label="AI Digital Employee"
        title="One AI Workforce. Every Major Industry."
        subtitle="AI Digital Employees understand, decide, execute, verify, and escalate work. Open an industry to see the complete employee pack for that sector."
        showScan={false}
        sceneContent={<PlatformWorkforceScene className="w-full h-full" />}
      />

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <ScrollReveal variant="slideUpSubtle">
            <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-4">How AI Digital Employees work</h2>
            <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-10">
              Every AI Digital Employee runs on the same control loop. Industry pages change the
              documents, systems, and policies. The platform does not change.
            </p>
          </ScrollReveal>
          <div className="relative mb-10 border border-white/[0.08] holographic-panel overflow-hidden min-h-[240px] sm:min-h-[280px]">
            <PlatformCommandScene className="w-full h-full min-h-[240px] sm:min-h-[280px]" />
          </div>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {platformLoop.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="holographic-panel p-5 h-full">
                  <span className="text-[10px] font-mono text-cyan/50 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">All industries</h2>
          <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-10">
            {industryPacks.length} industry pages. Each page is a complete pack: systems, outcomes,
            employees, and how the work runs. Open an industry to see the full employee list.
          </p>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryPacks.map((pack) => (
              <StaggerItem key={pack.id}>
                <Link
                  to={industryPath(pack.id)}
                  className="group block p-6 holographic-panel h-full hover:border-cyan/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base font-semibold text-white group-hover:text-cyan transition-colors">
                      {pack.title}
                    </h3>
                    <span className="text-[10px] font-mono text-cyan/50 shrink-0">
                      {pack.employees.length}
                    </span>
                  </div>
                  <p className="text-xs text-white/45 leading-relaxed mb-4">{pack.summary}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-cyan">
                    View {pack.title} <ArrowRight size={12} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
