import { Link } from 'react-router-dom'
import { ArrowRight, Code, Briefcase, Award } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import ProcessFlow from '../components/sections/ProcessFlow'
import TextReveal from '../components/animations/TextReveal'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import PremiumScene from '../components/animations/PremiumScene'
import FinalCTASection from '../components/home/FinalCTASection'

const highlights = [
  {
    icon: Code,
    title: '6 Months On-The-Job Training',
    description: 'Hands-on engineering from day one — not slide decks. Build production skills on real codebases.',
  },
  {
    icon: Briefcase,
    title: 'Live Industry Projects',
    description: 'Work on active engineering projects alongside senior practitioners. Ship features, not homework.',
  },
  {
    icon: Award,
    title: 'Experience Letter',
    description: 'Graduate with a verifiable experience letter documenting your contributions to live industry work.',
  },
]

const programs = [
  { title: 'AI & Machine Learning', description: 'Model development, MLOps, generative AI, and production deployment pipelines.' },
  { title: 'Computer Vision', description: 'Object detection, OCR, drawing validation, and visual inspection systems.' },
  { title: 'Full-Stack Development', description: 'React, TypeScript, Node.js, and cloud-native backend architecture.' },
  { title: 'Cloud & DevOps', description: 'AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipeline engineering.' },
  { title: 'Data Engineering & BI', description: 'Data pipelines, warehousing, Tableau, Power BI, and analytics platforms.' },
  { title: 'Cybersecurity', description: 'Zero Trust architecture, threat detection, compliance, and security automation.' },
]

export default function TrainingPage() {
  return (
    <>
      <SEO
        title="Corporate Training & OJT Program"
        description="Stop learning. Start shipping real code. 6-month on-the-job training on live industry projects with an experience letter from Girakee."
        path="/training"
      />
      <PageHero
        label="Internship"
        title="Stop Learning. Start Shipping Real Code."
        subtitle="Six months of on-the-job training on live industry projects. Graduate with an experience letter."
      />

      <section className="relative bg-navy-dark section-py page-px overflow-hidden">
        <PremiumScene scene="terminal" size="section" />
        <div className="relative max-w-5xl mx-auto z-10">
          <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-14">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="holographic-panel p-6 h-full">
                  <item.icon size={22} strokeWidth={1.5} className="text-cyan mb-4" />
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-body-dark leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ProcessFlow
            steps={['Enroll', 'Onboard', 'Live Projects', 'Mentorship', 'Ship Code', 'Experience Letter']}
            direction="vertical"
          />
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal
            text="Training Programs"
            as="h2"
            className="editorial-display text-2xl sm:text-3xl text-white mb-10 sm:mb-14"
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((prog) => (
              <StaggerItem key={prog.title}>
                <div className="p-6 border border-white/[0.08] hover:border-cyan/30 transition-colors h-full holographic-panel">
                  <h3 className="text-base font-semibold text-white mb-2">{prog.title}</h3>
                  <p className="text-sm text-body-dark leading-relaxed">{prog.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-14 p-8 sm:p-10 bg-navy-deep text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <p className="eyebrow eyebrow-dark mb-4">Ready to build?</p>
              <h3 className="editorial-display text-2xl sm:text-3xl text-white mb-4">
                Apply for the OJT Program
              </h3>
              <p className="text-body text-body-dark max-w-lg mx-auto mb-8">
                Join a cohort of engineers learning by doing — on real projects, with real mentors.
              </p>
              <Link to="/contact" className="btn-primary">
                Enquire Now
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
