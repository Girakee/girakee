import TextReveal from '../animations/TextReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import SlideUp from '../animations/SlideUp'

const statements = [
  {
    num: '01',
    title: 'Integrated Expertise',
    description:
      'Software, manpower, and training sit in one company. The team that builds your product can also staff it and train the people who inherit it.',
  },
  {
    num: '02',
    title: 'Agile and Outcome-Driven',
    description:
      'Sprints, demos, and written deliverables. You see working software or placed engineers on a cadence, not a slide about velocity.',
  },
  {
    num: '03',
    title: 'AI-First Engineering',
    description:
      'Models, vision pipelines, and automation are designed for production: monitoring, fallbacks, and a human who owns the result.',
  },
  {
    num: '04',
    title: 'Long-Term Partnership',
    description:
      'Bengaluru HQ with delivery to the US, UK, EU, and Middle East. We stay after launch for operations, hiring, and the next release.',
  },
]

export default function WhyGirakeeSection() {
  return (
    <section className="section-py bg-navy-deep page-px relative overflow-hidden">
      <div className="relative max-w-[90rem] mx-auto">
        <TextReveal
          text="More Than a Technology Vendor."
          as="h2"
          className="editorial-display text-[clamp(1.875rem,5vw,3.5rem)] text-white mb-6 max-w-3xl"
        />
        <SlideUp>
          <p className="text-body text-body-dark max-w-2xl mb-12 md:mb-16 leading-relaxed">
            Girakee is the engineering partner you keep when the first system is live.
            We write the software, we put people on the work, and we train the next
            engineers on the same production stack. That is the full practice, not a
            catalogue of buzzwords.
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
