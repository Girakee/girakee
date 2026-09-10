import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/services'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import { getSceneForService } from '../../data/sceneThemes'

const sceneLabels: Record<string, string> = {
  neural: 'AI / ML',
  vision: 'Vision',
  cloud: 'Cloud',
  shield: 'Security',
  data: 'Data',
  devices: 'Web / Mobile',
  wireframe: 'UI / UX',
  pipeline: 'QA',
  terminal: 'Training',
  orbit: 'Tech',
  network: 'Global',
  talent: 'Talent',
}

export default function ServicesGridSection() {
  return (
    <section className="section-py bg-navy-dark page-px relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <EditorialHeading
          label="Full Service Portfolio"
          title="Software Engineering Across the Stack"
          subtitle="Every capability includes defined deliverables, a documented process, and production-grade engineering."
          dark
        />

        <StaggerChildren className="divide-y divide-white/[0.06]">
          {services.map((service, i) => {
            const scene = getSceneForService(service.id)
            return (
              <StaggerItem key={service.id}>
                <Link
                  to={service.path}
                  className="group flex items-start gap-5 py-7 md:py-8 touch-manipulation"
                >
                  <span className="text-xs font-mono text-cyan/30 w-8 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan transition-colors">
                        {service.title}
                      </h3>
                      <span className="hidden sm:inline text-[10px] font-mono text-cyan/40 border border-cyan/20 px-2 py-0.5">
                        {sceneLabels[scene] ?? 'Tech'}
                      </span>
                    </div>
                    <p className="text-sm text-body-dark leading-relaxed mb-2">
                      {service.description}
                    </p>
                    <p className="text-xs text-white/30 line-clamp-2 md:line-clamp-none">
                      {service.deliverables.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-white/20 group-hover:text-cyan shrink-0 transition-colors mt-1"
                  />
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        <div className="mt-10">
          <Link to="/services" className="btn-secondary">
            View Full Service Details
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
