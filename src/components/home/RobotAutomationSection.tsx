import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import WorkPreview from '../animations/WorkPreview'
import { useMotionConfig } from '../../hooks/useMotionConfig'

const showcase = [
  {
    id: 'web-mobile',
    pill: 'Web & Mobile',
    title: 'Web & Mobile App Development',
    subhead:
      'High-performance web applications, native mobile apps, and scalable microservices engineered from architecture to deployment.',
    body: 'We architect and deploy end-to-end digital applications built on modern multi-tier frameworks. Merging human-centric UI/UX design systems with robust backend engineering, our teams deliver responsive web platforms, native/hybrid mobile apps, and high-concurrency API layers. Every build adheres to strict CI/CD pipelines, automated code reviews, and enterprise documentation.',
    bullets: [
      'Full-Stack Architecture & Microservices',
      'Scalable React, Next.js & Mobile (iOS / Android)',
      'High-Concurrency REST & GraphQL APIs',
      'Tokenized Enterprise Design Systems & CRO',
    ],
    cta: 'Explore Web & Mobile',
    path: '/web-mobile-development',
  },
  {
    id: 'ai-ml',
    pill: 'Applied AI & Vision',
    title: 'Applied AI & Computer Vision',
    subhead:
      'Production AI architectures, custom computer vision models, predictive systems, and autonomous agentic workflows.',
    body: 'We engineer, fine-tune, and deploy enterprise-grade AI systems tailored to mission-critical business workflows. Moving beyond proof-of-concept demos, our teams build scalable data pipelines, deploy low-latency inference APIs, and implement continuous MLOps monitoring for drift, accuracy, and latency.',
    bullets: [
      'Custom Deep Learning & Computer Vision (YOLOv8/v10)',
      'High-Throughput Document Ingestion & Optical Character Recognition (OCR)',
      'Production Agentic Workflows & Enterprise Copilots',
      'Automated MLOps & Real-Time Drift Monitoring',
    ],
    cta: 'Explore AI Solutions',
    path: '/ai-engineering',
  },
  {
    id: 'cloud-devops',
    pill: 'Cloud & DevOps',
    title: 'Cloud Architecture & DevOps',
    subhead:
      'Cloud-native infrastructure, container orchestration, and automated CI/CD for resilient, high-availability deployments.',
    body: 'We architect, automate, and manage secure cloud topologies across AWS, Microsoft Azure, and GCP. Utilizing Infrastructure as Code (IaC) and Kubernetes orchestration, our engineers implement automated zero-downtime release pipelines, multi-region disaster recovery, and comprehensive observability stacks with proactive cost governance.',
    bullets: [
      'Cloud-Native Architecture (AWS / Azure / GCP)',
      'Infrastructure as Code (Terraform / OpenTofu)',
      'Container Orchestration (Kubernetes / Docker)',
      'Automated Zero-Downtime CI/CD Pipelines',
    ],
    cta: 'Explore Cloud & DevOps',
    path: '/cloud-devops',
  },
  {
    id: 'cybersecurity',
    pill: 'Cybersecurity',
    title: 'Zero-Trust Cybersecurity & DevSecOps',
    subhead:
      'Proactive defense engineering, Zero-Trust network architecture, and continuous threat mitigation across the full SDLC.',
    body: 'Security is integrated directly into every layer of our software engineering lifecycle. We implement Zero-Trust principles, granular Identity and Access Management (IAM), dynamic secrets management, and automated vulnerability scanning (SAST/DAST) directly into active pipelines to safeguard critical corporate assets against sophisticated threats.',
    bullets: [
      'Zero-Trust Network & Infrastructure Architecture',
      'Automated Pipeline Vulnerability Scanning (SAST / DAST)',
      'Identity & Access Management (IAM) & Role-Based Control',
      'Regulatory Compliance Hardening (SOC 2, ISO 27001, GDPR)',
    ],
    cta: 'Explore Cybersecurity',
    path: '/cybersecurity',
  },
  {
    id: 'software-testing',
    pill: 'QA & Vision Testing',
    title: 'QA Automation & Intelligent Vision Testing',
    subhead:
      'Automated regression frameworks, high-load performance validation, and AI-powered computer vision drawing verification.',
    body: 'We deliver end-to-end quality engineering by combining automated software test suites with AI-powered visual validation. Our teams establish continuous CI/CD testing gates—spanning API contracts, cross-browser regression, and load testing. For physical and schematic workflows, our proprietary computer vision and OCR engines automatically ingest, inspect, and verify CAD layouts, blueprints, and regulatory documents against deterministic compliance rules.',
    bullets: [
      'Automated CI/CD Regression Suites (Playwright / Cypress)',
      'High-Concurrency Load & Stress Testing (k6 / JMeter)',
      'Computer Vision Blueprint & CAD Inspection (YOLO / OpenCV)',
      'Deterministic Engineering Rule & Tolerance Engines',
    ],
    cta: 'Explore Quality Engineering',
    path: '/software-testing',
  },
  {
    id: 'data-analytics',
    pill: 'Data Engineering',
    title: 'Data Engineering & BI Solutions',
    subhead:
      'Modern data lakehouses, scalable ETL/ELT pipelines, and real-time executive business intelligence.',
    body: 'We transform fragmented enterprise data into scalable, single-source-of-truth architectures. Our data engineers build resilient real-time streaming and batch pipelines connecting transactional platforms to cloud warehouses like Snowflake, BigQuery, and Databricks. We pair rigorous data modeling with interactive executive dashboards to deliver reliable decision metrics.',
    bullets: [
      'Scalable Real-Time & Batch Streaming Pipelines (Kafka / Spark)',
      'Modern Cloud Data Warehousing (Snowflake / BigQuery)',
      'Automated ETL / ELT Orchestration (dbt / Airflow)',
      'Interactive Executive Dashboards (Power BI / Tableau)',
    ],
    cta: 'Explore Data Solutions',
    path: '/data-analytics',
  },
]

export default function RobotAutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [userSelected, setUserSelected] = useState(false)
  const { shouldParallax, shouldAnimate, isMobile } = useMotionConfig()

  useEffect(() => {
    if (!shouldAnimate || userSelected || isMobile) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcase.length)
    }, 5200)
    return () => clearInterval(interval)
  }, [shouldAnimate, userSelected, isMobile])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const featuredY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const featuredScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.99])

  const active = showcase[activeIndex]

  return (
    <section
      ref={sectionRef}
      className="relative section-py bg-navy-deep page-px overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto z-10">
        <EditorialHeading
          label="Verifiable Delivery"
          title="Production Systems Built for Enterprise Scale"
          subtitle="Explore active delivery surfaces across our core engineering practices—from live computer vision inference and automated CI/CD deployments to zero-trust security and high-concurrency executive portals."
          dark
        />

        <motion.div
          style={shouldParallax ? { y: featuredY, scale: featuredScale } : undefined}
          className="relative mb-10 border border-white/[0.1] overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-0">
            <div className="p-6 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <span className="text-[10px] font-mono text-cyan/50 tracking-widest uppercase mb-4 block">
                {String(activeIndex + 1).padStart(2, '0')} / {String(showcase.length).padStart(2, '0')}
              </span>
              <h3 className="editorial-display text-xl md:text-2xl text-white mb-4">
                {active.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {active.subhead}
              </p>
              <p className="text-sm text-white/40 leading-relaxed mb-8">
                {active.body}
              </p>
              <ul className="space-y-2 mb-8">
                {active.bullets.map((cap) => (
                  <li key={cap} className="text-xs text-white/45 flex gap-2">
                    <span className="text-cyan/70">→</span>
                    {cap}
                  </li>
                ))}
              </ul>
              <Link to={active.path} className="btn-primary inline-flex w-fit">
                {active.cta}
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </div>

            <div className="relative min-h-[280px] md:min-h-[380px] p-3 md:p-5 bg-[#050d18]">
              <AnimatePresence mode="wait">
                <WorkPreview key={active.id} serviceId={active.id} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-2">
          {showcase.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => { setActiveIndex(i); setUserSelected(true) }}
              className={`text-left p-3 border text-xs transition-colors ${
                activeIndex === i
                  ? 'border-cyan/50 bg-cyan/[0.07] text-white'
                  : 'border-white/[0.08] text-white/45 hover:text-white/80'
              }`}
            >
              {item.pill}
            </button>
          ))}
        </div>

        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-[var(--page-px)] px-[var(--page-px)]">
          {showcase.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => { setActiveIndex(i); setUserSelected(true) }}
              className={`shrink-0 px-3 py-2 border text-xs ${
                activeIndex === i ? 'border-cyan text-white' : 'border-white/10 text-white/50'
              }`}
            >
              {item.pill}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
