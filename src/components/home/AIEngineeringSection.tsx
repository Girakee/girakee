import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import { softwareServices } from '../../data/services'

export default function AIEngineeringSection() {
  return (
    <section className="section-py bg-navy-deep page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto">
        <EditorialHeading
          label="Software Lines"
          title="Nine Engineering Practices, One Delivery Team"
          subtitle="From product UI to models, cloud, and quality. Each line below is a real service with a process, a stack, and a landing page."
          dark
        />

        <StaggerChildren className="divide-y divide-white/[0.06]">
          {softwareServices.map((cap, i) => (
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
                  <p className="text-body text-body-dark leading-relaxed mb-2">
                    {cap.description}
                  </p>
                  <p className="text-xs text-white/30 hidden md:block">
                    {cap.capabilities.slice(0, 4).join(' · ')}
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
            Software Services Hub
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
