import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TextReveal from '../animations/TextReveal'
import SlideUp from '../animations/SlideUp'

export default function FinalCTASection() {
  return (
    <section className="relative bg-navy-deep page-px section-py overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <TextReveal
          text="Let's Engineer Together."
          as="h2"
          className="editorial-display text-[clamp(2rem,6vw,4rem)] text-white mb-5 sm:mb-6"
        />

        <SlideUp delay={0.1}>
          <p className="text-body text-body-dark mb-10 max-w-md mx-auto">
            Tell us what you&apos;re building.
          </p>
        </SlideUp>

        <SlideUp delay={0.18}>
          <Link to="/contact" className="btn-primary w-full sm:w-auto">
            Start a Conversation
            <ArrowRight size={15} strokeWidth={1.75} />
          </Link>
        </SlideUp>
      </div>
    </section>
  )
}
