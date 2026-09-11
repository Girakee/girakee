import ScrollReveal from '../animations/ScrollReveal'
import { servicePromise } from '../../data/company'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'

const pillars = [
  {
    title: 'Software',
    body: 'Nine engineering lines from web and mobile to AI, vision, cloud, security, design, QA, and data. Each line has a process, a stack, and named deliverables.',
  },
  {
    title: 'Manpower',
    body: 'Staff augmentation, dedicated teams, contract-to-hire, and IT recruitment. People are screened by engineers, then placed into your sprints with a replacement path if the fit fails.',
  },
  {
    title: 'Training',
    body: 'Internships on live projects, corporate workshops on your stack, and bootcamps that end with a working capstone. Training is taught by people who ship.',
  },
]

export default function CompanyPromiseSection() {
  return (
    <section className="section-py bg-navy-dark page-px border-y border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          <ScrollReveal variant="slideUpSubtle">
            <p className="eyebrow eyebrow-dark mb-5">Our Promise</p>
            <h2 className="editorial-display text-[clamp(1.75rem,4vw,2.75rem)] text-white">
              {servicePromise.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.08}>
            <p className="text-body text-body-dark leading-relaxed mb-4">
              {servicePromise.description}
            </p>
            <p className="text-body text-body-dark leading-relaxed">
              That means production code, placed engineers, and training that looks like the job.
              Not a brochure of capabilities with no owner on the other end of the call.
            </p>
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
