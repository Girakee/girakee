import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import AnimatedTechMarquee from '../components/animations/AnimatedTechMarquee'
import FinalCTASection from '../components/home/FinalCTASection'
import { getIndustryPack } from '../data/digitalEmployees'
import { IndustryPackScene } from '../components/animations/digital-employees/IndustryPackScene'
import { company } from '../data/company'

const integrations = [
  'Workday',
  'Greenhouse',
  'Lever',
  'BambooHR',
  'Darwinbox',
  'Zoho People',
  'SAP SuccessFactors',
  'Slack',
  'Microsoft Teams',
]

const loop = [
  { title: 'Source', body: 'Reads requisitions and applicants from job feeds and inbound email.' },
  { title: 'Screen', body: 'Evaluates resumes against role scorecards and compliance rules.' },
  { title: 'Schedule', body: 'Coordinates interviewer calendars and updates ATS candidate stages.' },
  { title: 'Onboard', body: 'Dispatches onboarding checklists and sets up payroll & access records.' },
  { title: 'Escalate', body: 'Routes exceptions, offers, and edge cases to named HR owners.' },
]

const capabilities = [
  'Requisition & Candidate Ingestion',
  'Deterministic Resume Scoring & Policy Rubrics',
  'Automated Multi-Calendar Interview Scheduling',
  'Onboarding Checklists & HRIS Record Updates',
  'Payroll Pre-Checks, Leave & Attendance Capture',
  '24/7 Policy Helpdesk with Rule Citations',
]

const deliverables = [
  'Bidirectional ATS & HRIS API Connectors',
  'Custom Role Competency & Screening Matrix',
  'Long-Lived Interview Queue',
  'Exception & Escalation Dashboard',
  'Audit Logs for Hire-to-Retire Actions',
  'Operations Handover & Runbooks',
]

const useCases = [
  'High-volume lateral engineering and campus hiring drives',
  'Automated initial screening for technical and non-technical roles',
  'Rapid onboarding orchestration across distributed remote teams',
  'Continuous employee attendance, leave, and payroll pre-checks',
  'First-line internal HR support and policy clarification ticketing',
]

const outcomes = [
  '75% Reduction in Time-to-Screen: Eliminates manual resume sorting and keyword-matching bottlenecks.',
  'Zero Scheduling Delays: AI-driven calendar orchestration cuts candidate drop-off by 40%.',
  'Deterministic Compliance: Rigorous audit logs guarantee uniform evaluation across every applicant.',
  'Lower Overhead: HR teams focus on high-touch interviews and culture building rather than manual data entry.',
]

export default function RozgarAiPage() {
  const hrPack = getIndustryPack('human-resources')

  return (
    <>
      <SEO
        title="Rozgar.ai: The Autonomous Digital HR Employee"
        description="An autonomous AI employee purpose-built for high-volume recruitment and HR operations. Rozgar.ai screens candidates, orchestrates scheduling, and syncs with your ATS and HRIS."
        path="/products/rozgar-ai"
      />
      <PageHero
        label="Autonomous HR Tech & Agentic Workforce"
        title="Rozgar.ai: The Autonomous Digital HR Employee"
        subtitle="An autonomous AI employee purpose-built for high-volume recruitment and HR operations. Rozgar.ai screens inbound candidates, orchestrates interview scheduling, executes onboarding checklists, and syncs bidirectionally with your existing ATS and HRIS."
        showScan={false}
        sceneContent={
          hrPack ? <IndustryPackScene pack={hrPack} className="w-full h-full" /> : undefined
        }
        cta={{ label: 'Deploy Rozgar.ai', to: '/contact' }}
        secondaryCta={{ label: 'Request a Live Product Demo', to: company.meetingUrl, external: true }}
      />

      <AnimatedTechMarquee technologies={integrations} />

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="slideUpSubtle">
            <p className="eyebrow eyebrow-dark mb-4">Autonomous Workflows</p>
            <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-4">What Rozgar.ai Does</h2>
            <h3 className="text-lg text-white/80 mb-4">
              An Intelligent Digital Employee for Hire-to-Retire Operations
            </h3>
            <p className="text-body text-body-dark leading-relaxed mb-8">
              Rozgar.ai is neither a passive job board nor a generic conversational chatbot. It is an
              agentic AI employee engineered to execute structured HR workflows within your existing
              operational tech stack. Rozgar.ai reads incoming requisitions, parses unstructured
              resumes against deterministic policy rubrics, orchestrates multi-stakeholder calendar
              invites, and updates employee records across your ATS and HRIS. It operates
              autonomously within defined guardrails, escalating sensitive policy decisions,
              compensation approvals, and final offer releases to your human HR leaders.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary inline-flex">
                Deploy Rozgar.ai
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
              <a href={`mailto:${company.email}?subject=${encodeURIComponent('Rozgar.ai Technical Whitepaper')}`} className="btn-secondary">
                Download Technical Whitepaper
              </a>
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
          <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">How Rozgar.ai Works</h2>
          <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-10">
            A closed-loop agentic workflow that executes operational grunt work while keeping human
            HR leaders in control of critical decisions.
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
            <ul className="space-y-3 mb-10">
              {useCases.map((item) => (
                <li key={item} className="text-sm text-white/55 flex gap-3">
                  <ArrowRight size={14} className="text-cyan/50 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="eyebrow eyebrow-dark mb-5">Quantifiable Business Outcomes</h3>
            <ul className="space-y-3">
              {outcomes.map((item) => (
                <li key={item} className="text-sm text-white/65 flex gap-3">
                  <span className="text-cyan font-mono text-xs shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Put Your HR Operations on Autopilot"
        subtitle="Rozgar.ai integrates with the ATS and HRIS you already use. Deploy in days, not quarters."
        primaryLabel="Deploy Rozgar.ai"
        secondaryLabel="Schedule a Discovery Call"
      />
    </>
  )
}
