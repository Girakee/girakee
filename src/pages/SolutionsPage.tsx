import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'

const solutions = [
  { title: 'Automate Manual Work', description: 'Eliminate repetitive tasks with intelligent automation and RPA workflows.', path: '/ai-engineering', service: 'AI Engineering' },
  { title: 'Modernize Legacy Systems', description: 'Migrate and transform legacy applications to cloud-native, modern architectures.', path: '/web-mobile-development', service: 'Software Development' },
  { title: 'Improve Quality', description: 'AI-powered inspection, automated validation, and continuous quality assurance.', path: '/intelligent-qa', service: 'Intelligent QA' },
  { title: 'Build AI Capabilities', description: 'Production ML systems, computer vision, and agentic AI for your domain.', path: '/ai-engineering', service: 'AI Engineering' },
  { title: 'Scale Engineering', description: 'Augment your team with vetted engineers or dedicated delivery teams.', path: '/talent-outsourcing', service: 'Workforce Solutions' },
  { title: 'Strengthen Security', description: 'Zero Trust architecture, threat detection, and compliance automation.', path: '/cybersecurity', service: 'Cybersecurity' },
]

export default function SolutionsPage() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Business-problem-oriented AI and engineering solutions — automate, modernize, improve quality, and scale."
        path="/solutions"
      />
      <PageHero
        label="Solutions"
        title="Engineered for Impact"
        subtitle="Purpose-built solutions that address real business challenges — not generic technology offerings."
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <StaggerItem key={sol.title}>
                <Link
                  to={sol.path}
                  className="group block p-10 border border-white/[0.08] hover:border-cyan/30 holographic-panel transition-all duration-500"
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-cyan mb-4 block">{sol.service}</span>
                  <h2 className="text-2xl font-bold text-white mb-4">{sol.title}</h2>
                  <p className="text-white/50 group-hover:text-white/65 transition-colors leading-relaxed mb-6">{sol.description}</p>
                  <span className="inline-flex items-center gap-2 text-cyan text-sm font-medium">
                    Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
