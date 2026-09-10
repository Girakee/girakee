import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import { services } from '../../data/services'

const featured = services.filter((s) =>
  ['web-mobile', 'ai-ml', 'computer-vision', 'cloud-devops', 'cybersecurity', 'data-analytics'].includes(s.id),
)

export default function AIEngineeringSection() {
  return (
    <section className="section-py bg-navy-deep page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto">
        <EditorialHeading
          label="Services"
          title="Engineering Capabilities for Enterprise Teams"
          subtitle="AI, cloud, security, and software — delivered as one integrated engineering ecosystem."
          dark
        />

        <StaggerChildren className="divide-y divide-white/[0.06]">
          {featured.map((cap, i) => (
            <StaggerItem key={cap.id}>
              <Link
                to={cap.path}
                className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-10 py-7 md:py-9 items-start md:items-center touch-manipulation"
              >
                <span className="text-sm font-mono text-white/20 group-hover:text-white/40 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-body text-body-dark leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-white/20 group-hover:text-white/60 transition-colors shrink-0 mt-1"
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
