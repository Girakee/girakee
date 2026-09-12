import ScrollReveal from '../animations/ScrollReveal'
import { homeMatter, heroMessaging } from '../../data/company'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'

export default function DigitalTransformationSection() {
  return (
    <section className="section-py bg-navy-deep page-px border-b border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto">
        <ScrollReveal variant="slideUpSubtle">
          <p className="eyebrow eyebrow-dark mb-5">{heroMessaging.kicker}</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,3rem)] text-white mb-6 max-w-4xl leading-tight">
            {heroMessaging.headline}
          </h2>
          <p className="text-body text-body-dark max-w-3xl leading-relaxed">
            {heroMessaging.description}
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {homeMatter.howWeWork.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="h-full p-6 border border-white/[0.08] holographic-panel">
                <span className="text-[10px] font-mono text-cyan/50 block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
