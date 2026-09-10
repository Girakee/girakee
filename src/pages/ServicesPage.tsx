import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import ServiceDetailBlock from '../components/sections/ServiceDetailBlock'
import { services } from '../data/services'
import FinalCTASection from '../components/home/FinalCTASection'
import CompanyPromiseSection from '../components/home/CompanyPromiseSection'
import TextReveal from '../components/animations/TextReveal'
import PremiumScene from '../components/animations/PremiumScene'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'

const methodology = [
  { step: '01', title: 'Discover', desc: 'We map your goals, systems, constraints, and success criteria before writing code.' },
  { step: '02', title: 'Architect', desc: 'Technical design, stack selection, and delivery plan aligned to your timeline.' },
  { step: '03', title: 'Build', desc: 'Agile sprints with demos, code review, CI/CD, and transparent progress reporting.' },
  { step: '04', title: 'Deploy', desc: 'Production rollout with monitoring, documentation, and knowledge transfer.' },
  { step: '05', title: 'Evolve', desc: 'Ongoing support, optimization, and iteration as your product grows.' },
]

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Software Development Services"
        description="Full-stack software engineering — web & mobile apps, AI & ML, cloud, cybersecurity, UI/UX, QA, data analytics, and global talent from Girakee."
        path="/services"
      />
      <PageHero
        label="Software Services"
        title="Engineering Software That Powers Business"
        subtitle="Eleven integrated capabilities delivered by practitioners who build production systems — from Bengaluru to clients worldwide."
        scene="orbit"
      />

      <CompanyPromiseSection />

      <section className="relative bg-navy-dark section-py page-px overflow-hidden">
        <PremiumScene scene="devices" size="section" />
        <div className="relative max-w-[90rem] mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <TextReveal
                text="A Software Company Built for Production"
                as="h2"
                className="editorial-display text-2xl sm:text-3xl text-white mb-6"
              />
              <p className="text-body text-body-dark mb-4 leading-relaxed">
                Girakee is a Bengaluru-based software engineering company. We design, build, and deploy
                web applications, mobile apps, AI systems, cloud infrastructure, and data platforms for
                businesses across the US, UK, Middle East, and EU.
              </p>
              <p className="text-body text-body-dark leading-relaxed">
                Every service below includes defined deliverables, a documented process, and a dedicated
                animated visual identity — so you know exactly what we build and how we work.
              </p>
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

      <FinalCTASection />
    </>
  )
}
