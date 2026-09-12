import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import { softwareServices, manpowerServices, trainingServices } from '../../data/services'

const pillars = [
  {
    label: '01',
    title: 'Core Engineering & AI',
    description:
      'End-to-end full-stack architectures, applied computer vision, cloud-native deployments, and automated QA.',
    path: '/services',
    items: softwareServices,
  },
  {
    label: '02',
    title: 'Workforce Solutions & Pods',
    description:
      'Dedicated engineering pods, staff augmentation, contract-to-hire, and specialized tech search from Bengaluru.',
    path: '/manpower-solutions',
    items: manpowerServices,
  },
  {
    label: '03',
    title: 'Corporate Upskilling',
    description:
      'Enterprise bootcamps, 6-month graduate incubation, and 3-month student internships on live work.',
    path: '/training',
    items: trainingServices,
  },
]

export default function ServicesGridSection() {
  return (
    <section className="section-py bg-navy-dark page-px relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <EditorialHeading
          label="What We Offer"
          title="Three Practices. Complete Delivery."
          subtitle="Software, manpower, and training, each with defined sub-services, deliverables, and a documented way of working."
          dark
        />

        <StaggerChildren className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="h-full holographic-panel p-6 md:p-8 flex flex-col">
                <span className="text-xs font-mono text-cyan/50 mb-4">{pillar.label}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-body-dark leading-relaxed mb-6">{pillar.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pillar.items.map((service) => (
                    <li key={service.id}>
                      <Link
                        to={service.path}
                        className="group flex items-center justify-between gap-3 py-1.5 text-sm text-white/55 hover:text-cyan transition-colors"
                      >
                        <span>{service.shortTitle}</span>
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={pillar.path} className="inline-flex items-center gap-2 text-sm text-cyan hover:text-cyan-bright">
                  View {pillar.title}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
