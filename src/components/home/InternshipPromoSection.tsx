import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../animations/ScrollReveal'
import { internshipMessaging } from '../../data/company'

export default function InternshipPromoSection() {
  return (
    <section className="section-py bg-navy-dark page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-[90rem] mx-auto z-10">
        <ScrollReveal variant="slideUpSubtle">
          <p className="eyebrow eyebrow-dark mb-5">Internship</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,3rem)] text-white mb-8 max-w-3xl">
            {internshipMessaging.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.08}>
          <ul className="space-y-3 mb-10 max-w-xl">
            {internshipMessaging.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-white/60">
                <span className="w-1.5 h-1.5 bg-cyan shrink-0 mt-2" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary inline-flex">
              {internshipMessaging.registerLabel}
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
            <Link to="/training" className="btn-secondary inline-flex">
              {internshipMessaging.knowMoreLabel}
              <ArrowRight size={15} strokeWidth={1.75} className="opacity-50" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
