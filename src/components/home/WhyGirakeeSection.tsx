import TextReveal from '../animations/TextReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import SlideUp from '../animations/SlideUp'

const statements = [
  {
    num: '01',
    title: 'Unified Engineering Ecosystem',
    description:
      'End-to-end technical cohesion. We architect your core software systems, provide flexible dedicated pods to scale delivery, and upskill your internal teams for seamless platform ownership.',
  },
  {
    num: '02',
    title: 'Predictable Delivery Cadence',
    description:
      'Strict sprint milestones and SLA-backed accountability. Every development cycle concludes with verifiable production builds, automated test coverage, and transparent executive velocity reports.',
  },
  {
    num: '03',
    title: 'Production-Grade Applied AI',
    description:
      'Machine intelligence engineered for real-world reliability. We build custom computer vision, OCR, and agentic workflows backed by automated MLOps, deterministic safeguards, and low-latency inference.',
  },
  {
    num: '04',
    title: 'Global Reach & Lifecycle Support',
    description:
      'Headquartered in Bengaluru with expanding hubs in Dubai and Europe. We provide post-deployment L2/L3 engineering support, performance optimization, and long-term architectural stewardship.',
  },
]

export default function WhyGirakeeSection() {
  return (
    <section className="section-py bg-navy-deep page-px relative overflow-hidden">
      <div className="relative max-w-[90rem] mx-auto">
        <p className="eyebrow eyebrow-dark mb-5">Why Girakee</p>
        <TextReveal
          text="A Strategic Engineering Partner, Built for Enterprise Scale"
          as="h2"
          className="editorial-display text-[clamp(1.875rem,5vw,3.5rem)] text-white mb-6 max-w-4xl"
        />
        <SlideUp>
          <p className="text-body text-body-dark max-w-3xl mb-12 md:mb-16 leading-relaxed">
            Girakee acts as a long-term technology co-innovation partner. We don't just
            ship code; we architect resilient digital platforms, embed dedicated
            high-velocity engineering pods, and enable in-house teams through structured
            technical knowledge transfer—delivering measurable business impact beyond
            the initial deployment.
          </p>
        </SlideUp>

        <StaggerChildren className="grid md:grid-cols-2 gap-0 md:gap-x-12">
          {statements.map((item) => (
            <StaggerItem key={item.num}>
              <div className="py-8 md:py-10 border-b border-white/[0.06] md:border-0">
                <span className="text-xs font-mono text-white/25 block mb-4">{item.num}</span>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-body-dark max-w-md leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
