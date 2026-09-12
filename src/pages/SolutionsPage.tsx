import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'
import { softwareServices, manpowerServices, trainingServices } from '../data/services'

const pillars = [
  {
    title: 'Core Engineering & AI',
    path: '/services',
    description:
      'End-to-end full-stack architectures, applied computer vision, cloud-native deployments, and automated QA.',
    items: softwareServices,
  },
  {
    title: 'Workforce Solutions & Pods',
    path: '/manpower-solutions',
    description:
      'Dedicated engineering pods, staff augmentation, contract-to-hire, and specialized tech search from Bengaluru.',
    items: manpowerServices,
  },
  {
    title: 'Corporate Upskilling',
    path: '/training',
    description:
      'Enterprise bootcamps, 6-month graduate incubation, and 3-month student internships led by practicing engineers.',
    items: trainingServices,
  },
]

export default function SolutionsPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Girakee services: core engineering and AI, workforce solutions and pods, and corporate upskilling from Bengaluru."
        path="/solutions"
      />
      <PageHero
        label="Services"
        title="Engineering Software That Powers Business"
        subtitle="Scalable digital architecture, intelligent automation, and robust enterprise engineering delivered to clients across the Middle East, Europe, and North America."
        scene="orbit"
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <StaggerChildren className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="h-full holographic-panel p-6 md:p-8 flex flex-col">
                  <h2 className="text-xl font-semibold text-white mb-3">{pillar.title}</h2>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{pillar.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {pillar.items.map((item) => (
                      <li key={item.id}>
                        <Link to={item.path} className="text-sm text-white/55 hover:text-cyan transition-colors">
                          {item.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={pillar.path} className="inline-flex items-center gap-2 text-sm text-cyan">
                    Open {pillar.title}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
