import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TextReveal from '../animations/TextReveal'
import SlideUp from '../animations/SlideUp'
import { company } from '../../data/company'

export default function FinalCTASection() {
  return (
    <section className="relative bg-navy-deep page-px section-py overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <TextReveal
          text="Let's Engineer Your Next Competitive Advantage."
          as="h2"
          className="editorial-display text-[clamp(2rem,6vw,4rem)] text-white mb-5 sm:mb-6"
        />

        <SlideUp delay={0.1}>
          <p className="text-body text-body-dark mb-10 max-w-xl mx-auto">
            Schedule an architectural discovery session with our senior engineering leadership in Bengaluru or Dubai.
          </p>
        </SlideUp>

        <SlideUp delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Consult an Architect
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
            <a
              href={company.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
