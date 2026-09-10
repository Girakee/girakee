import ScrollReveal from '../animations/ScrollReveal'
import { servicePromise } from '../../data/company'

export default function CompanyPromiseSection() {
  return (
    <section className="section-py bg-navy-dark page-px border-y border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ScrollReveal variant="slideUpSubtle">
          <p className="eyebrow eyebrow-dark mb-5">Our Services</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            {servicePromise.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.08}>
          <p className="text-body text-body-dark leading-relaxed">
            {servicePromise.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
