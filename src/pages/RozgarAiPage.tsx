import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'
import { getIndustryPack } from '../data/digitalEmployees'
import { IndustryPackScene } from '../components/animations/digital-employees/IndustryPackScene'

const loop = [
  { title: 'Source', body: 'Read requisitions, resumes, and HRIS events as they arrive.' },
  { title: 'Screen', body: 'Match candidates and documents against the role and policy.' },
  { title: 'Schedule', body: 'Book interviews, send updates, and keep the ATS current.' },
  { title: 'Onboard', body: 'Open records, collect documents, and start payroll and access tasks.' },
  { title: 'Escalate', body: 'Hand offers, terminations, and sensitive cases to named HR owners.' },
]

const capabilities = [
  'Recruitment and requisition intake',
  'Resume screening against the role',
  'Interview scheduling and candidate communication',
  'Employee onboarding and offboarding checklists',
  'Payroll and benefits file preparation',
  'Attendance and leave capture',
  'HR support with policy citations',
  'Employee documentation packs',
]

const deliverables = [
  'Rozgar.ai configured on your ATS and HRIS',
  'Role library and screening rules',
  'Onboarding and offboarding checklists',
  'Exception queue for HR owners',
  'Audit trail for hire-to-retire actions',
  'Operations dashboard and handover',
]

const useCases = [
  'High-volume screening slates',
  'Campus and lateral hiring desks',
  'New hire setup across HRIS, payroll, and IT',
  'Leave and attendance operations',
  'HR helpdesk with policy answers',
  'Offboarding and access closure packs',
]

export default function RozgarAiPage() {
  const hrPack = getIndustryPack('human-resources')

  return (
    <>
      <SEO
        title="Rozgar.ai Digital HR Employee"
        description="Rozgar.ai is Girakee's Digital HR Employee. It screens, schedules, onboards, and runs hire-to-retire operations in your ATS and HRIS."
        path="/products/rozgar-ai"
      />
      <PageHero
        label="Rozgar.ai"
        title="Digital HR Employee"
        subtitle="Rozgar.ai is the named HR Digital Employee. It runs recruitment, screening, scheduling, onboarding, payroll support, leave, and HR helpdesk work in the systems you already use."
        showScan={false}
        sceneContent={
          hrPack ? <IndustryPackScene pack={hrPack} className="w-full h-full" /> : undefined
        }
      />

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="slideUpSubtle">
            <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-4">What Rozgar.ai does</h2>
            <p className="text-body text-body-dark leading-relaxed mb-4">
              Rozgar.ai is not a job board and not a chatbot. It is an AI Digital Employee for HR
              operations. It reads requisitions and documents, applies your hiring and policy rules,
              writes back to ATS and HRIS, and escalates offers, terminations, and sensitive cases.
            </p>
            <p className="text-sm text-white/45 leading-relaxed mb-8">
              Human Resources industry employees on the AI Digital Employee platform share the same
              loop. Rozgar.ai is the packaged HR product you can run as a named employee with your
              brand, roles, and approvals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary inline-flex">
                Deploy Rozgar.ai
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
              <Link to="/products/digital-employees/human-resources" className="btn-secondary">
                HR industry pack
              </Link>
            </div>
          </ScrollReveal>
          <div>
            <h3 className="eyebrow eyebrow-dark mb-4">You receive</h3>
            <ul className="space-y-2">
              {deliverables.map((item) => (
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
          <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">How Rozgar.ai works</h2>
          <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-10">
            Source, screen, schedule, onboard, escalate. HR keeps judgment on offers and people
            decisions.
          </p>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {loop.map((step, i) => (
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
        <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="eyebrow eyebrow-dark mb-5">Capabilities</h3>
            <StaggerChildren className="space-y-2">
              {capabilities.map((cap) => (
                <StaggerItem key={cap}>
                  <div className="flex items-start gap-3 px-4 py-3 holographic-panel text-sm text-white/60">
                    <Check size={14} className="text-cyan shrink-0 mt-0.5" strokeWidth={2} />
                    {cap}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          <div>
            <h3 className="eyebrow eyebrow-dark mb-5">Where it is used</h3>
            <ul className="space-y-3">
              {useCases.map((item) => (
                <li key={item} className="text-sm text-white/55 flex gap-3">
                  <ArrowRight size={14} className="text-cyan/50 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
