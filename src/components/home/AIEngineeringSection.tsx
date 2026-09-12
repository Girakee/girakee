import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'

const disciplines = [
  {
    title: 'Web & Mobile Engineering',
    body: 'High-performance web applications, native mobile apps, and microservice APIs engineered for global concurrency.',
    path: '/web-mobile-development',
  },
  {
    title: 'Applied AI & Computer Vision',
    body: 'Production AI architectures, custom computer vision models, predictive engines, and autonomous agentic workflows.',
    path: '/ai-engineering',
  },
  {
    title: 'Cloud Architecture & DevOps',
    body: 'Multi-cloud infrastructure (AWS/Azure/GCP), Infrastructure as Code, Kubernetes orchestration, and automated CI/CD.',
    path: '/cloud-devops',
  },
  {
    title: 'Zero-Trust Cybersecurity',
    body: 'End-to-end security hardening, automated SAST/DAST pipeline scanning, IAM governance, and compliance readiness.',
    path: '/cybersecurity',
  },
  {
    title: 'QA Automation & Intelligent Testing',
    body: 'Continuous CI/CD test gates, automated regression suites, and AI-driven schematic verification.',
    path: '/software-testing',
  },
  {
    title: 'Data Engineering & Analytics',
    body: 'Centralized enterprise data platforms, scalable ETL/ELT streaming pipelines, and executive BI dashboards.',
    path: '/data-analytics',
  },
]

export default function AIEngineeringSection() {
  return (
    <section className="section-py bg-navy-deep page-px relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto">
        <EditorialHeading
          label="Engineering Disciplines"
          title="Integrated Capabilities. One Dedicated Engineering Partner."
          subtitle="From multi-tenant cloud architectures to production-grade neural networks, we deliver end-to-end technical execution under unified delivery governance."
          dark
        />

        <StaggerChildren className="divide-y divide-white/[0.06]">
          {disciplines.map((cap, i) => (
            <StaggerItem key={cap.title}>
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
                    {cap.body}
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
            Core Engineering Hub
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
