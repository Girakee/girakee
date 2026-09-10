import ScrollReveal from '../animations/ScrollReveal'
import { heroMessaging } from '../../data/company'

export default function DigitalTransformationSection() {
  return (
    <section className="section-py bg-navy-deep page-px border-b border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto">
        <ScrollReveal variant="slideUpSubtle">
          <p className="eyebrow eyebrow-dark mb-5">Welcome to the Journey of</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,3rem)] text-white mb-6 max-w-4xl leading-tight">
            {heroMessaging.headline}
          </h2>
          <p className="text-body text-body-dark max-w-3xl leading-relaxed">
            {heroMessaging.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
