import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'
import { softwareServices, manpowerServices, trainingServices } from '../data/services'

const pillars = [
  {
    title: 'Software Services',
    path: '/services',
    description:
      'Product engineering, AI, cloud, security, design, QA, and data platforms built for production.',
    items: softwareServices,
  },
  {
    title: 'Manpower Solutions',
    path: '/manpower-solutions',
    description:
      'Recruitment, contract to hire, managed services, and time and material from Bengaluru.',
    items: manpowerServices,
  },
  {
    title: 'Training & Internships',
    path: '/training',
    description:
      'Internship, corporate training, and on job training with Girakee engineers.',
    items: trainingServices,
  },
]

export default function SolutionsPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Girakee services: software services, manpower solutions, and training and internships from Bengaluru."
        path="/solutions"
      />
      <PageHero
        label="Services"
        title="Software. Manpower. Training."
        subtitle="Three practices under one delivery company. Pick a line, then a sub-service with defined work and an owner in Bengaluru."
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
