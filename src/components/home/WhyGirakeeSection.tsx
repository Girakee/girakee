import TextReveal from '../animations/TextReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'

const statements = [
  { num: '01', title: 'Integrated Expertise', description: 'AI, cloud, security, and software as one ecosystem.' },
  { num: '02', title: 'Agile & Outcome-Driven', description: 'Measurable outcomes in every iteration.' },
  { num: '03', title: 'AI-First Engineering', description: 'Intelligence embedded from architecture to deployment.' },
  { num: '04', title: 'Long-Term Partnership', description: 'Systems that evolve with your growth.' },
]

export default function WhyGirakeeSection() {
  return (
    <section className="section-py bg-navy-deep page-px relative overflow-hidden">
      <div className="relative max-w-[90rem] mx-auto">
        <TextReveal
          text="More Than a Technology Vendor."
          as="h2"
          className="editorial-display text-[clamp(1.875rem,5vw,3.5rem)] text-white mb-12 md:mb-16 max-w-3xl"
        />

        <StaggerChildren className="grid md:grid-cols-2 gap-0 md:gap-x-12">
          {statements.map((item) => (
            <StaggerItem key={item.num}>
              <div className="py-8 md:py-10 border-b border-white/[0.06] md:border-0">
                <span className="text-xs font-mono text-white/25 block mb-4">{item.num}</span>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-body-dark max-w-sm">
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
