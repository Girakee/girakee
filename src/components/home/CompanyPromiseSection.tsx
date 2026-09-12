import ScrollReveal from '../animations/ScrollReveal'
import { servicePromise } from '../../data/company'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'

const pillars = [
  {
    title: 'Core Engineering & AI',
    body: 'End-to-end full-stack architectures, applied computer vision models, cloud-native deployments, and automated QA. Each initiative follows defined engineering milestones and clear deliverables.',
  },
  {
    title: 'Workforce Solutions & Pods',
    body: 'Flexible engagement models including dedicated engineering pods, contract-to-hire, and sprint-ready talent augmentation. Every engineer is pre-vetted on production stacks to ensure seamless team integration.',
  },
  {
    title: 'Corporate Upskilling & Tech Enablement',
    body: 'Tailored corporate training, specialized stack bootcamps, and executive technical workshops delivered by practicing engineers to upskill client teams on modern cloud, QA automation, and AI workflows.',
  },
]

export default function CompanyPromiseSection() {
  return (
    <section className="section-py bg-navy-dark page-px border-y border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          <ScrollReveal variant="slideUpSubtle">
            <p className="eyebrow eyebrow-dark mb-5">{servicePromise.kicker}</p>
            <h2 className="editorial-display text-[clamp(1.75rem,4vw,2.75rem)] text-white">
              {servicePromise.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.08}>
            {servicePromise.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-body text-body-dark leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="p-6 border border-white/[0.08] h-full">
                <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
