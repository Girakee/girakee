import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import ScrollReveal from '../components/animations/ScrollReveal'
import FinalCTASection from '../components/home/FinalCTASection'
import { getIndustryPack, industryPacks, industryPath, platformLoop } from '../data/digitalEmployees'
import { getIndustryPage } from '../data/industryPages'
import { IndustryPackScene } from '../components/animations/digital-employees/IndustryPackScene'

export default function IndustryPackPage() {
  const { industryId } = useParams<{ industryId: string }>()
  const pack = industryId ? getIndustryPack(industryId) : undefined

  if (!pack) return <Navigate to="/products/digital-employees" replace />

  const page = getIndustryPage(pack)
  const others = industryPacks.filter((item) => item.id !== pack.id).slice(0, 6)

  return (
    <>
      <SEO
        title={`${pack.title} AI Digital Employee`}
        description={`${pack.title} AI Digital Employees from Girakee. ${page.overview}`}
        path={industryPath(pack.id)}
      />
      <PageHero
        label="AI Digital Employee"
        title={`${pack.title} Digital Employees`}
        subtitle={pack.summary}
        showScan={false}
        sceneContent={<IndustryPackScene key={pack.id} pack={pack} className="w-full h-full" />}
      />

      {pack.governance && (
        <section className="bg-navy-deep px-[var(--page-px)] py-8">
          <div className="max-w-[90rem] mx-auto p-5 border border-cyan/25 bg-cyan/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-cyan mb-2">Control</p>
            <p className="text-sm text-white/70 leading-relaxed">{pack.governance}</p>
          </div>
        </section>
      )}

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="slideUpSubtle">
            <p className="eyebrow eyebrow-dark mb-3">{pack.title}</p>
            <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-4">
              What this industry pack does
            </h2>
            <p className="text-body text-body-dark leading-relaxed mb-4">{page.overview}</p>
            <p className="text-sm text-white/45 leading-relaxed mb-8">{page.detailed}</p>
            <Link to="/contact" className="btn-primary inline-flex">
              Deploy {pack.title} employees
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
          </ScrollReveal>
          <div>
            <h3 className="eyebrow eyebrow-dark mb-4">Systems</h3>
            <StaggerChildren className="space-y-2 mb-8">
              {page.systems.map((system) => (
                <StaggerItem key={system}>
                  <div className="flex items-start gap-3 px-4 py-3 holographic-panel text-sm text-white/60">
                    <Check size={14} className="text-cyan shrink-0 mt-0.5" strokeWidth={2} />
                    {system}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <h3 className="eyebrow eyebrow-dark mb-4">Outcomes</h3>
            <ul className="space-y-2">
              {page.outcomes.map((item) => (
                <li key={item} className="text-sm text-white/50 flex gap-3 px-4 py-3 border border-white/[0.06]">
                  <span className="w-1 h-1 bg-cyan shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">How the employee works</h2>
          <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-10">
            Every {pack.title} AI Digital Employee uses the same loop. The documents, systems, and
            policies are specific to this industry.
          </p>
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

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <p className="eyebrow eyebrow-dark mb-3">Digital Employees</p>
          <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">
            {page.employees.length} employees in {pack.title}
          </h2>
          <p className="text-sm text-white/45 max-w-2xl mb-10 leading-relaxed">
            These are roles on the shared AI Digital Employee platform. We configure the ones you
            need first. We do not stand up a unique application for every title.
          </p>
          <StaggerChildren className="grid md:grid-cols-2 gap-4">
            {page.employees.map((employee) => (
              <StaggerItem key={employee.name}>
                <div className="p-5 holographic-panel h-full">
                  <h3 className="text-sm font-semibold text-white mb-2">{employee.name}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{employee.work}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <h3 className="eyebrow eyebrow-dark mb-6">Where it is used</h3>
          <ul className="grid sm:grid-cols-2 gap-4 mb-14">
            {page.useCases.map((item) => (
              <li key={item} className="text-sm text-white/55 flex gap-3">
                <ArrowRight size={14} className="text-cyan/50 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-16">
            <Link to="/contact" className="btn-primary">
              Deploy this pack
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
            <Link to="/products/digital-employees" className="btn-secondary">
              All industries
            </Link>
          </div>

          <h3 className="eyebrow eyebrow-dark mb-6">Other industries</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((item) => (
              <Link
                key={item.id}
                to={industryPath(item.id)}
                className="p-5 holographic-panel hover:border-cyan/30 transition-colors"
              >
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-xs text-white/40">{item.employees.length} employees</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
