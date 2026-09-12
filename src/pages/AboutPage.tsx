import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import TextReveal from '../components/animations/TextReveal'
import SlideUp from '../components/animations/SlideUp'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const timeline = [
  {
    year: 'Phase 01',
    title: 'Bengaluru Roots',
    description:
      'Founded in Rajajinagar, Bengaluru, with a mandate to pair engineering rigor with global delivery speed.',
  },
  {
    year: 'Phase 02',
    title: 'Global Delivery Reach',
    description:
      'Expanding practitioner-led delivery to enterprises and scale-ups across North America, the UK, Europe, and the Middle East.',
  },
  {
    year: 'Phase 03',
    title: 'Product Incubation',
    description:
      'Building proprietary systems—Rozgar.ai and intelligent vision QA—alongside client engineering work.',
  },
  {
    year: 'Phase 04',
    title: 'Autonomous Engineering',
    description:
      'Delivering mission-critical platforms, applied AI, and specialized technical workforce solutions at production scale.',
  },
]

const philosophy = [
  {
    title: '01. Production Over Hype',
    kicker: 'Built for Runtime Concurrency',
    description:
      'We ship software architectures, models, and pipelines engineered to survive production load—not demos that impress in presentations.',
  },
  {
    title: '02. Engineering at Scale',
    kicker: 'High-Assurance Delivery',
    description:
      'We model top-tier talent under rigorous agile quality, automated testing, and architectural ownership.',
  },
  {
    title: '03. Deep Partnership Mindset',
    kicker: 'Architectural Co-Ownership',
    description:
      'We invest in your domain, constraints, and regulatory context before drafting a single system diagram in lieu of a quote.',
  },
  {
    title: '04. Continued Practitioner Edge',
    kicker: 'Active Technology Frontiers',
    description:
      'Our engineers remain in the production of technology—shipping autonomous systems, cloud platforms, and vision pipelines every sprint.',
  },
]

const practices = [
  {
    title: 'Core Engineering Disciplines',
    description:
      'Scalable Web & Mobile platforms, Applied AI, Computer Vision, Cloud DevOps, Zero-Trust Cybersecurity, Automated QA, and Data Engineering.',
    path: '/services/engineering',
    cta: 'Explore Engineering Disciplines',
  },
  {
    title: 'Strategic Workforce Models',
    description:
      'Autonomous Dedicated Pods, Staff Augmentation (T&M), Contract-to-Hire trials, and practitioner-led executive IT recruitment.',
    path: '/services/workforce',
    cta: 'Explore Workforce Solutions',
  },
  {
    title: 'Technical Enablement & Academy',
    description:
      'Practitioner-led Corporate Tech Enablement, 6-Month Graduate Engineering Residency, and 3-Month Student Internships.',
    path: '/services/enablement',
    cta: 'Explore Tech Enablement',
  },
]

const metrics = [
  { value: '100%', label: 'Full IP & Codebase Ownership' },
  { value: '48-hr', label: 'Candidate Screening Turnaround' },
  { value: '85%', label: 'Max Test Automation Coverage' },
  { value: 'Zero', label: 'Vendor Lock-in or Sprawl' },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Girakee Software Services is an enterprise engineering firm and product incubation company headquartered in Bengaluru, delivering global engineering resilience."
        path="/about"
      />
      <PageHero
        label="Global Engineering & Incubation"
        title="Engineering Global Resilience From Bengaluru"
        subtitle="An enterprise engineering firm and product incubator delivering mission-critical digital platforms, autonomous AI systems, and specialized technical workforce solutions worldwide."
        cta={{ label: 'Explore Our Disciplines', to: '/solutions' }}
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <SlideUp>
              <h2 className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-8">Our Story</h2>
              <p className="text-lg text-white/55 leading-relaxed mb-6">
                Girakee Software Services Private Limited is an enterprise technology consultancy
                and product incubation firm headquartered in Bengaluru, Karnataka, India. Founded
                with a mandate to bridge deep engineering rigor with global delivery speed, we
                architect software systems that thrive under production scale.
              </p>
              <p className="text-white/55 leading-relaxed">
                Rooted in India&apos;s premier technology capital, we partner with enterprises,
                high-growth scale-ups, and academic institutions across North America, the United
                Kingdom, Europe, and the Middle East. We eliminate the layers of vendor bureaucracy
                to deliver transparent, practitioner-led engineering—from distributed cloud backends
                to autonomous AI agents and computer vision pipelines.
              </p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <div className="bg-navy-deep p-6 sm:p-10 text-white holographic-panel">
                <h3 className="text-xs tracking-[0.2em] uppercase text-cyan mb-6">Our Mission</h3>
                <p className="text-2xl font-display font-semibold leading-snug mb-4">
                  Architecting the Autonomous Enterprise
                </p>
                <p className="text-white/50 leading-relaxed">
                  To empower modern enterprises with high-assurance software engineering, deep-tech
                  intelligence, and autonomous digital systems—delivering predictable delivery
                  velocity, robust security, and long-term architectural independence.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="Our Evolution" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-10 sm:mb-16" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan/20 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <SlideUp key={item.year} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan -translate-x-1.5 md:-translate-x-1.5 top-2" />
                    <div className="md:w-1/2 pl-12 md:pl-0">
                      <span className="text-xs font-mono text-cyan">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="Engineering Philosophy" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-10 sm:mb-16" />
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-8 border border-white/10 hover:border-cyan/30 transition-colors h-full">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-cyan/70 mb-3">{item.kicker}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="What We Do" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-10 sm:mb-16" />
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {practices.map((item) => (
              <StaggerItem key={item.title}>
                <Link
                  to={item.path}
                  className="group block p-8 border border-white/10 hover:border-cyan/30 transition-colors h-full holographic-panel"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-cyan">
                    {item.cta}
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-5xl mx-auto">
          <TextReveal text="Why Enterprises Build with Girakee" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-6 sm:mb-8" />
          <SlideUp>
            <p className="text-white/55 leading-relaxed text-lg mb-12">
              We replace fragmented vendor handoffs with accountable engineering squads. By combining
              Bengaluru&apos;s deepest technical talent with mature agile delivery practices, we
              deliver enterprise systems with full IP transparency and zero management drag.
            </p>
          </SlideUp>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((item) => (
              <StaggerItem key={item.label}>
                <div className="holographic-panel p-6 h-full text-center">
                  <p className="editorial-display text-2xl text-cyan mb-2">{item.value}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FinalCTASection
        title="Ready to Engineer What’s Next?"
        subtitle="Whether you need an autonomous delivery pod, an AI architecture audit, or corporate tech enablement, our architects are ready to deploy."
        primaryLabel="Schedule Architectural Discovery"
        secondaryLabel="Explore Case Studies & Solutions"
        secondaryTo="/solutions"
        secondaryExternal={false}
      />
    </>
  )
}
