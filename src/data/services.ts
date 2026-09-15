export type ServiceCategory = 'software' | 'manpower' | 'training'
export type ServiceApplication = 'internship' | 'ojt'

export interface ProcessStep {
  title: string
  description?: string
}

export interface RelatedServiceLink {
  id: string
  blurb: string
}

export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  detailedOverview: string
  technologies: string[]
  path: string
  overview: string
  capabilities: string[]
  deliverables: string[]
  process: ProcessStep[]
  useCases: string[]
  businessValue: string[]
  category: ServiceCategory
  ctaLabel: string
  listed?: boolean
  heroKicker?: string
  heroTitle?: string
  inSectionCta?: string
  buildSectionTitle?: string
  buildHeadline?: string
  engageSubtext?: string
  engage?: ProcessStep[]
  relatedHeading?: string
  related?: RelatedServiceLink[]
  application?: ServiceApplication
  ctaHref?: string
}

export function processTitle(step: string | ProcessStep): string {
  return typeof step === 'string' ? step : step.title
}

export function processDescription(step: string | ProcessStep): string | undefined {
  return typeof step === 'string' ? undefined : step.description
}

export const services: Service[] = [
  {
    id: 'web-mobile',
    category: 'software',
    title: 'Web & Mobile Engineering',
    shortTitle: 'Web & Mobile',
    heroKicker: 'Web & Mobile Engineering',
    heroTitle: 'High-Performance Web, Mobile & Platform Engineering',
    description:
      'Architecting scalable web applications, cross-platform mobile ecosystems, and high-concurrency microservices paired with enterprise design systems.',
    detailedOverview:
      'We engineer, launch, and scale enterprise digital products from architectural discovery to production rollout. By tightly pairing user research and tokenized design systems with high-throughput backend APIs, our squads deliver low-latency web platforms, native mobile applications, and resilient microservices. Every build incorporates automated CI/CD test gates, accessibility standards (WCAG 2.1 AA), and production runbooks so your platforms scale smoothly as user volume surges.',
    technologies: [
      'React',
      'Next.js',
      'React Native',
      'Flutter',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'GraphQL',
      'Tailwind CSS',
      'Figma',
      'Storybook',
    ],
    path: '/services/web-mobile',
    overview: 'Full-Lifecycle Digital Platforms Built for Global Concurrency',
    buildHeadline: 'Full-Lifecycle Digital Platforms Built for Global Concurrency',
    inSectionCta: 'Discuss Web & Mobile Architecture',
    engageSubtext:
      'Every web and mobile engagement follows a structured delivery model, from discovery through production handover, executed in agile sprints with transparent reporting.',
    capabilities: [
      'Enterprise Web Applications (React/Next.js)',
      'Native & Cross-Platform Mobile (iOS/Android)',
      'High-Concurrency Microservices & GraphQL APIs',
      'Research-Driven UI/UX Design Systems',
      'WCAG 2.1 AA Accessibility & Responsive Frontends',
      'Legacy Refactoring & Frontend Optimization',
    ],
    deliverables: [
      'Production-Ready Codebase & Full IP Rights',
      'System Architecture & API Schemas',
      'Tokenized Figma Design System & UI Kits',
      'Automated CI/CD Deployment Pipelines',
      'Cloud Environment Infrastructure Manifests',
      'Deployment Runbooks & Knowledge Transfer',
    ],
    process: [
      { title: 'Discovery & Design Thinking', description: 'Requirements mapping, technical constraints, user personas.' },
      { title: 'Architecture & Prototyping', description: 'Data modeling, API schema design, interactive Figma prototypes.' },
      { title: 'Sprint Execution', description: 'Agile 2-week sprints, CI/CD builds, pair code reviews.' },
      { title: 'QA & Accessibility Hardening', description: 'E2E automated testing, load audits, WCAG compliance.' },
      { title: 'Production Release & Handover', description: 'Zero-downtime release, monitoring setup, and runbooks.' },
    ],
    engage: [
      { title: 'Discovery & Scoping', description: 'Architecture mapping, user flows, technology selection.' },
      { title: 'UX & System Architecture', description: 'Figma wireframes, design tokens, API schema definition.' },
      { title: 'Sprint Development', description: 'Bi-weekly sprint demos, continuous deployment, automated test coverage.' },
      { title: 'QA & Hardening', description: 'Performance profiling, accessibility compliance, cross-browser validation.' },
      { title: 'Launch & Governance', description: 'Zero-downtime release, monitoring dashboards, documentation transfer.' },
    ],
    useCases: [
      'Multi-tenant B2B SaaS platforms and executive client portals',
      'High-concurrency consumer mobile applications',
      'Legacy system modernization into decoupled micro-frontends',
      'Internal operational workflow platforms & admin suites',
    ],
    businessValue: [
      'Accelerated Time-to-Market: Production-ready sprints reduce release cycles by 40%.',
      'Elevated User Retention: Intuitive UI/UX and sub-second load times drive user conversion.',
      'Architectural Resilience: Cloud-native architecture prevents performance degradation under load.',
      'Full IP Ownership: Clean codebases, automated tests, and clear documentation with no vendor lock-in.',
    ],
    ctaLabel: 'Consult an Architect',
    related: [
      {
        id: 'ai-ml',
        blurb:
          'Embed intelligent copilots, predictive models, and computer vision directly into your web and mobile applications.',
      },
      {
        id: 'cloud-devops',
        blurb:
          'Host your applications on resilient, auto-scaling Kubernetes infrastructure across AWS, Azure, or GCP.',
      },
      {
        id: 'software-testing',
        blurb:
          'Safeguard application reliability with automated regression gates and end-to-end Playwright test suites.',
      },
    ],
  },
  {
    id: 'ai-ml',
    category: 'software',
    title: 'Applied AI & Computer Vision',
    shortTitle: 'Applied AI',
    heroKicker: 'Applied AI & Computer Vision',
    heroTitle: 'Production-Grade Applied AI & Computer Vision',
    description:
      'Engineering custom deep learning architectures, multimodal document extraction, and autonomous agentic workflows designed for mission-critical enterprise operations.',
    detailedOverview:
      'We engineer applied machine learning and computer vision systems designed to operate reliably in production environments. Moving past experimental notebook models, our teams architect automated data pipelines, custom object detection engines, intelligent OCR extraction pipelines, and autonomous agentic copilots. Every model is containerized with low-latency inference APIs (TensorRT), deterministic rule safeguards, and continuous MLOps monitoring for data drift and accuracy decay.',
    technologies: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'YOLOv8',
      'YOLOv10',
      'Hugging Face',
      'LangChain',
      'FastAPI',
      'TensorRT',
      'MLflow',
      'Kubernetes',
    ],
    path: '/services/ai-vision',
    overview: 'Applied Machine Intelligence Engineered Beyond the Prototype',
    buildHeadline: 'Applied Machine Intelligence Engineered Beyond the Prototype',
    inSectionCta: 'Discuss AI & Vision Architecture',
    engageSubtext:
      'Every applied AI engagement follows a structured delivery model, from problem framing through MLOps handover, executed with accuracy gates and transparent reporting.',
    capabilities: [
      'Custom Computer Vision & Object Detection (YOLO)',
      'Multimodal OCR & Semantic Document Extraction',
      'Autonomous Agentic Workflows & Enterprise Copilots',
      'Predictive Modeling & Real-Time Anomaly Detection',
      'Automated MLOps & Model Monitoring Pipelines',
      'Low-Latency GPU-Accelerated Inference APIs',
    ],
    deliverables: [
      'Production-Trained & Versioned Model Weights',
      'Containerized Inference APIs (REST / gRPC)',
      'Automated MLOps CI/CD Pipelines (MLflow)',
      'Data Validation & Feature Engineering Workflows',
      'Model Observability & Drift Monitoring Dashboards',
      'Technical Architecture & Hyperparameter Logs',
    ],
    process: [
      { title: 'Problem Framing & ROI Audit', description: 'Business objective definition, accuracy thresholds, feasibility.' },
      { title: 'Data Ingestion & Curation', description: 'Dataset labeling, preprocessing, synthetic data generation.' },
      { title: 'Model Development & Tuning', description: 'Architecture selection, hyperparameter tuning, transfer learning.' },
      { title: 'Validation & Deterministic Guardrails', description: 'Benchmarking, edge-case testing, fallback rule integration.' },
      { title: 'Production Rollout & MLOps', description: 'GPU deployment, real-time telemetry, auto-retraining pipelines.' },
    ],
    engage: [
      { title: 'Problem Framing & Data Audit', description: 'Data quality assessment, baseline benchmarks, accuracy goals.' },
      { title: 'Pipeline Architecture', description: 'Data ingestion frameworks, annotation standards, compute selection.' },
      { title: 'Model Training & Optimization', description: 'Model development, fine-tuning, quantization for low latency.' },
      { title: 'Validation & Guardrail Testing', description: 'Stress-testing models against noisy inputs and edge cases.' },
      { title: 'MLOps Deployment & Telemetry', description: 'Production rollout, latency tracking, automated retraining loops.' },
    ],
    useCases: [
      'Automated inspection of engineering blueprints, CAD files & technical schematics',
      'Autonomous enterprise invoice, contract, and unstructured document ingestion',
      'Predictive equipment maintenance and supply chain anomaly detection',
      'Context-aware enterprise retrieval-augmented generation (RAG) copilots',
    ],
    businessValue: [
      'Eliminate Manual Verification: Automate up to 85% of repetitive document and visual audits.',
      'Zero-Defect Operations: Deterministic guardrails ensure machine intelligence adheres to business rules.',
      'Sub-Second Inference: GPU-optimized pipelines return complex predictions in under 50ms.',
      'Continuous Model Accuracy: Automated retraining prevents model decay and schema drift.',
    ],
    ctaLabel: 'Consult an AI Architect',
    related: [
      {
        id: 'software-testing',
        blurb: 'Validate deep learning models and automate visual regression test suites.',
      },
      {
        id: 'data-analytics',
        blurb: 'Build high-throughput data lakehouses and streaming ingestion pipelines for model training.',
      },
      {
        id: 'cloud-devops',
        blurb: 'Deploy GPU-accelerated clusters and auto-scaling inference endpoints on Kubernetes.',
      },
    ],
  },
  {
    id: 'cloud-devops',
    category: 'software',
    title: 'Cloud Architecture & DevOps',
    shortTitle: 'Cloud & DevOps',
    heroKicker: 'Cloud Architecture & DevOps',
    heroTitle: 'Resilient Cloud Architecture & Automated DevOps',
    description:
      'Architecting multi-cloud infrastructures, container orchestration, and automated CI/CD pipelines engineered for high availability, security, and cost efficiency.',
    detailedOverview:
      'We architect, automate, and govern resilient cloud environments across AWS, Microsoft Azure, and Google Cloud Platform. Leveraging Infrastructure as Code (IaC) and Kubernetes orchestration, our DevOps engineers implement automated zero-downtime release pipelines, multi-region disaster recovery, and comprehensive observability stacks. We design cloud topography to eliminate single points of failure, maintain strict compliance, and balance operational spend with performance.',
    technologies: [
      'AWS',
      'Azure',
      'GCP',
      'Kubernetes',
      'Docker',
      'Terraform',
      'OpenTofu',
      'GitHub Actions',
      'ArgoCD',
      'Helm',
      'Prometheus',
      'Grafana',
    ],
    path: '/services/cloud-devops',
    overview: 'Cloud-Native Topography Engineered for 99.99% Availability',
    buildHeadline: 'Cloud-Native Topography Engineered for 99.99% Availability',
    inSectionCta: 'Discuss Cloud Architecture',
    engageSubtext:
      'Every cloud engagement follows a structured delivery model, from infrastructure audit through cutover and SLA handover.',
    capabilities: [
      'Multi-Cloud Architecture (AWS / Azure / GCP)',
      'Infrastructure as Code (Terraform / OpenTofu)',
      'Container Orchestration (Kubernetes / EKS / GKE)',
      'Automated Zero-Downtime CI/CD Pipelines',
      'FinOps Cloud Cost Auditing & Governance',
      '24/7 Observability, Telemetry & APM Stacks',
    ],
    deliverables: [
      'Enterprise Cloud Architecture Topology Blueprints',
      'Modular, Version-Controlled Terraform Modules',
      'Production Kubernetes Manifests & Helm Charts',
      'Hardened CI/CD Deployment Pipelines (GitOps)',
      'Real-Time Monitoring & Alerting Dashboards',
      'Disaster Recovery Playbooks & Operations Runbooks',
    ],
    process: [
      { title: 'Infrastructure & Security Audit', description: 'Architecture review, bottleneck detection, spend analysis.' },
      { title: 'Topology & IaC Architecture', description: 'VPC planning, IAM role definitions, Terraform module design.' },
      { title: 'Pipeline & Container Setup', description: 'Dockerization, Kubernetes clustering, GitOps CI/CD setup.' },
      { title: 'Observability & Chaos Testing', description: 'Metric aggregation, alerting rules, automated failover drills.' },
      { title: 'Production Cutover & Handover', description: 'Zero-downtime migration, SLA establishment, runbook transfer.' },
    ],
    engage: [
      { title: 'Infrastructure & Cost Audit', description: 'Deep-dive into current topologies, resource bottlenecks, and spending.' },
      { title: 'Cloud Architecture Blueprint', description: 'Designing target VPCs, security perimeters, and networking.' },
      { title: 'IaC & Cluster Provisioning', description: 'Codifying all infrastructure with Terraform and Kubernetes manifests.' },
      { title: 'Pipeline & Security Hardening', description: 'Integrating automated CI/CD gates, secrets management, and scanning.' },
      { title: 'Telemetry, Cutover & SLAs', description: 'Traffic cutover, metric telemetry activation, runbook documentation.' },
    ],
    useCases: [
      'Legacy on-premise infrastructure migration to cloud-native platforms',
      'Microservices containerization and Kubernetes orchestration',
      'Multi-region disaster recovery and high-availability design',
      'Enterprise cloud spend optimization and FinOps governance',
    ],
    businessValue: [
      '99.99% Availability: Redundant multi-region architectures eliminate single points of failure.',
      'Rapid Release Velocity: Automated GitOps pipelines reduce deployment cycles from days to minutes.',
      'Reduced Infrastructure Spend: Right-sizing and auto-scaling policies lower cloud bills by 20–35%.',
      'Zero-Downtime Releases: Rolling deployment strategies eliminate maintenance downtime for end-users.',
    ],
    ctaLabel: 'Schedule Cloud Consultation',
    related: [
      {
        id: 'cybersecurity',
        blurb: 'Harden cloud perimeters, automate secrets management, and implement zero-trust IAM.',
      },
      {
        id: 'web-mobile',
        blurb: 'Deploy high-performance web applications and microservices on optimized cloud topologies.',
      },
      {
        id: 'data-analytics',
        blurb: 'Provision high-performance cloud data warehouses and distributed computing clusters.',
      },
    ],
  },
  {
    id: 'cybersecurity',
    category: 'software',
    title: 'Zero-Trust Cybersecurity',
    shortTitle: 'Cybersecurity',
    heroKicker: 'Zero-Trust Cybersecurity',
    heroTitle: 'Proactive Zero-Trust Cybersecurity & DevSecOps',
    description:
      'Embedding automated security defenses, Zero-Trust network architecture, and continuous compliance monitoring directly into your cloud and application stack.',
    detailedOverview:
      'Security is integrated directly into every layer of our software engineering lifecycle. We implement Zero-Trust principles, granular Identity and Access Management (IAM), dynamic secrets rotation, and automated vulnerability scanning (SAST/DAST) directly into active development pipelines. Our engineering frameworks safeguard digital platforms against targeted threats while maintaining compliance with international data governance mandates (SOC 2, ISO 27001, GDPR).',
    technologies: [
      'Zero-Trust IAM',
      'HashiCorp Vault',
      'OWASP Top 10',
      'SAST/DAST',
      'SIEM',
      'WAF',
      'AWS Security Hub',
      'Azure Defender',
      'OAuth 2.0',
      'SOC 2',
      'ISO 27001',
    ],
    path: '/services/cybersecurity',
    overview: 'Security Integrated into the Engineering Lifecycle, Not Bolted On',
    buildHeadline: 'Security Integrated into the Engineering Lifecycle, Not Bolted On',
    inSectionCta: 'Discuss Security Architecture',
    engageSubtext:
      'Every security engagement follows a structured delivery model, from threat audit through telemetry handover and compliance sign-off.',
    capabilities: [
      'Zero-Trust Network & Perimeter Architecture',
      'Identity & Access Management (IAM) & RBAC',
      'Dynamic Secrets Management (HashiCorp Vault)',
      'Automated SAST/DAST Pipeline Scanning',
      'Compliance Frameworks (SOC 2, ISO 27001, GDPR)',
      'Cloud Security Posture Management',
    ],
    deliverables: [
      'Comprehensive Threat Assessment & Security Baseline',
      'Zero-Trust IAM Policy Configurations',
      'Secrets Rotation & Vault Integration',
      'Automated Vulnerability Scanning Reports',
      'Compliance Evidence & Remediation Roadmap',
      'Incident Response Documentation',
    ],
    process: [
      { title: 'Security Assessment & Threat Audit', description: 'Infrastructure scanning, architectural vulnerability analysis.' },
      { title: 'Architecture & IAM Review', description: 'Implementing principle of least privilege, zero-trust network boundaries.' },
      { title: 'DevSecOps Pipeline Hardening', description: 'Integrating automated SAST/DAST checks into developer workflows.' },
      { title: 'Validation & Penetration Testing', description: 'Simulated ethical hacking drills and vulnerability remediation.' },
      { title: 'Ongoing Telemetry & Auditing', description: 'SIEM integration, compliance audit sign-off, monitoring handover.' },
    ],
    engage: [
      { title: 'Security Assessment & Threat Audit', description: 'Infrastructure scanning, architectural vulnerability analysis.' },
      { title: 'Architecture & IAM Review', description: 'Implementing principle of least privilege, zero-trust network boundaries.' },
      { title: 'DevSecOps Pipeline Hardening', description: 'Integrating automated SAST/DAST checks into developer workflows.' },
      { title: 'Validation & Penetration Testing', description: 'Simulated ethical hacking drills and vulnerability remediation.' },
      { title: 'Ongoing Telemetry & Auditing', description: 'SIEM integration, compliance audit sign-off, monitoring handover.' },
    ],
    useCases: [
      'Hardening public-facing web applications, mobile backends, and microservices',
      'Enterprise secrets management migration to dynamic cloud vaults',
      'Audit readiness for SOC 2 Type II, ISO 27001, and GDPR certifications',
      'Proactive DevSecOps pipeline implementation to catch security bugs early',
    ],
    businessValue: [
      'Proactive Risk Reduction: Catch vulnerabilities during sprint builds before production release.',
      'Streamlined Compliance: Pre-configured security baselines shorten external audit timelines.',
      'Zero-Trust Access Control: Enforce least-privilege access across cloud workloads and personnel.',
      'Brand & Data Protection: Safeguard critical customer data against unauthorized access and exfiltration.',
    ],
    ctaLabel: 'Review Security Posture',
    related: [
      {
        id: 'cloud-devops',
        blurb: 'Deploy hardened cloud foundations, private VPCs, and automated patch management.',
      },
      {
        id: 'software-testing',
        blurb: 'Automate security vulnerability checks and API contract testing within CI/CD pipelines.',
      },
      {
        id: 'web-mobile',
        blurb: 'Build secure frontend applications with hardened authentication, CSRF/XSS protection, and encryption.',
      },
    ],
  },
  {
    id: 'ui-ux',
    category: 'software',
    listed: false,
    title: 'UI/UX Design & Development',
    shortTitle: 'UI/UX',
    description:
      'Creating intuitive, aesthetically pleasing user interfaces that drive product adoption, maximize satisfaction, and improve conversion rates.',
    detailedOverview:
      'Our design practice pairs user research with front-end engineering. We create wireframes, interactive prototypes, and design systems in Figma, then implement responsive, accessible interfaces in React. Every screen is tested for usability, consistency, and performance, bridging the gap between design intent and production code.',
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Design Systems', 'WCAG', 'Storybook'],
    path: '/services/web-mobile',
    overview:
      'Research-driven design and front-end implementation, from wireframes and design systems to pixel-perfect, accessible interfaces.',
    capabilities: [
      'User Research & Strategy',
      'Wireframing & Prototyping',
      'Design Systems',
      'Responsive UI Development',
      'Accessibility (WCAG)',
      'Usability Testing',
    ],
    deliverables: [
      'User research summary',
      'Wireframes and prototypes',
      'Design system components',
      'Production UI implementation',
      'Accessibility audit report',
      'Style guide documentation',
    ],
    process: [
      { title: 'Research & Discovery' },
      { title: 'Wireframing' },
      { title: 'Visual Design' },
      { title: 'Prototyping' },
      { title: 'Development & QA' },
    ],
    useCases: [
      'Product redesign and refresh',
      'Design system creation',
      'Mobile-first interface design',
      'Enterprise dashboard UX',
    ],
    businessValue: [
      'Increase product adoption',
      'Improve conversion rates',
      'Deliver consistent brand experiences',
    ],
    ctaLabel: 'Consult an Architect',
  },
  {
    id: 'software-testing',
    category: 'software',
    title: 'QA Automation & Intelligent Testing',
    shortTitle: 'QA Automation',
    heroKicker: 'QA Automation & Intelligent Testing',
    heroTitle: 'Automated QA & AI-Powered Schematic Verification',
    description:
      'Delivering end-to-end quality engineering: from high-concurrency API and browser test suites to computer-vision-driven drawing and blueprint inspection.',
    detailedOverview:
      'We deliver unified quality engineering by combining automated software test suites with deep-tech visual inspection. Our teams build continuous CI/CD testing gates—covering cross-browser regression, API contracts, performance stress-testing, and load profiling. For physical and schematic workflows, our proprietary computer vision and OCR engines automatically ingest, inspect, and verify CAD layouts, blueprints, and regulatory documents against deterministic engineering rules.',
    technologies: [
      'Playwright',
      'Cypress',
      'Selenium',
      'Jest',
      'Pytest',
      'k6',
      'JMeter',
      'OpenCV',
      'YOLOv8',
      'Custom OCR',
      'Deterministic Rule Engines',
    ],
    path: '/services/qa-automation',
    overview: 'Full-Spectrum Quality Verification for Code, APIs & Complex Schematics',
    buildHeadline: 'Full-Spectrum Quality Verification for Code, APIs & Complex Schematics',
    inSectionCta: 'Discuss Quality Engineering',
    engageSubtext:
      'Every quality engagement follows a structured delivery model, from test planning through blocking CI/CD gates and published quality metrics.',
    capabilities: [
      'End-to-End Web & Mobile Regression Automation',
      'High-Concurrency Load & Performance Testing',
      'Computer Vision / CAD Blueprint Inspection',
      'API Contract & Microservices Integration Testing',
      'Deterministic Compliance Rule Engines',
      'Continuous Quality Gates in CI/CD',
    ],
    deliverables: [
      'Enterprise Test Automation Strategy & Framework Architecture',
      'Custom Computer Vision Inspection Pipeline',
      'Deterministic Engineering Rule Library',
      'Performance Benchmarks & Load Test Reports',
      'Defect Dashboards & Traceability Logs',
      'CI/CD Integration & Quality Gate Configurations',
    ],
    process: [
      { title: 'Test Planning & Requirements Mapping', description: 'Scope definition, test matrix design, automation tool selection.' },
      { title: 'Framework Architecture & Rules', description: 'Setting up Playwright frameworks, configuring CAD validation criteria.' },
      { title: 'Execution & Suite Automation', description: 'Writing automated test suites, calibrating computer vision detection models.' },
      { title: 'Defect Management & Stress Testing', description: 'Running load stress drills, logging defects, refining rule accuracy.' },
      { title: 'Release Validation & CI/CD Gates', description: 'Configuring blocking build gates in CI/CD, publishing quality metrics.' },
    ],
    engage: [
      { title: 'Test Planning & Requirements Mapping', description: 'Scope definition, test matrix design, automation tool selection.' },
      { title: 'Framework Architecture & Rules', description: 'Setting up Playwright frameworks, configuring CAD validation criteria.' },
      { title: 'Execution & Suite Automation', description: 'Writing automated test suites, calibrating computer vision detection models.' },
      { title: 'Defect Management & Stress Testing', description: 'Running load stress drills, logging defects, refining rule accuracy.' },
      { title: 'Release Validation & CI/CD Gates', description: 'Configuring blocking build gates in CI/CD, publishing quality metrics.' },
    ],
    useCases: [
      'Continuous automated regression testing for fast-moving web and mobile releases',
      'Automated CAD and PDF blueprint verification against manufacturing tolerances',
      'High-concurrency load testing prior to major enterprise software rollouts',
      'API integration and data contract validation across distributed microservices',
    ],
    businessValue: [
      'Accelerated Release Velocity: Eliminate manual QA bottlenecks with automated CI/CD test gates.',
      'Zero-Defect Deployments: Catch regressions and schema breaks before code reaches production.',
      'Automated Physical Audits: Replace hours of manual blueprint verification with 5-second vision scans.',
      'Verified System Resilience: Confirm high concurrency performance before mission-critical launches.',
    ],
    ctaLabel: 'Strengthen QA Pipeline',
    related: [
      {
        id: 'ai-ml',
        blurb: 'Deploy deep-learning models and neural inference engines into production workflows.',
      },
      {
        id: 'web-mobile',
        blurb: 'Build modern web applications with built-in unit, integration, and E2E test coverage.',
      },
      {
        id: 'cloud-devops',
        blurb: 'Integrate automated test suites directly into zero-downtime deployment pipelines.',
      },
    ],
  },
  {
    id: 'intelligent-qa',
    category: 'software',
    listed: false,
    title: 'Intelligent QA',
    shortTitle: 'Intelligent QA',
    description:
      'AI-powered validation, computer vision inspection, automated rule engines, and intelligent quality assurance for engineering and manufacturing workflows.',
    detailedOverview:
      'Intelligent QA combines computer vision, OCR, and deterministic rule engines to validate engineering drawings, technical documents, and visual inspection at scale. We build pipelines from image ingestion and model inference through measurement extraction and pass/fail decisions with full audit trails, then integrate them with your existing QA workflows.',
    technologies: ['Python', 'YOLOv8', 'YOLOv10', 'OpenCV', 'Custom OCR', 'Rule Engines', 'Jenkins', 'GitLab CI'],
    path: '/services/qa-automation',
    overview:
      'Quality engineering enhanced by AI and computer vision: drawing validation, visual inspection, rule engines, and intelligent test generation.',
    capabilities: [
      'AI-Powered Validation',
      'Object Detection and Visual Inspection',
      'Engineering Drawing Analysis',
      'Custom OCR Pipelines',
      'Rule Engine Development',
      'Quality Dashboards',
    ],
    deliverables: [
      'Validation pipeline',
      'Rule configuration library',
      'Quality dashboard',
      'Integration with document systems',
      'Audit and traceability logs',
      'Operator training materials',
    ],
    process: [
      { title: 'Requirements Mapping' },
      { title: 'Rule Definition' },
      { title: 'Pipeline Build' },
      { title: 'Calibration' },
      { title: 'Production Rollout' },
    ],
    useCases: [
      'CAD and PDF drawing validation',
      'Specification compliance checking',
      'Automated dimension verification',
      'Batch document QA at scale',
    ],
    businessValue: [
      'Validate at scale',
      'Reduce manual QA effort',
      'Maintain quality in production',
    ],
    ctaLabel: 'Strengthen QA Pipeline',
  },
  {
    id: 'data-analytics',
    category: 'software',
    title: 'Data Engineering & Analytics',
    shortTitle: 'Data & Analytics',
    heroKicker: 'Data Engineering & Analytics',
    heroTitle: 'Enterprise Data Engineering & Business Intelligence',
    description:
      'Transforming fragmented enterprise data into scalable, single-source-of-truth architectures through resilient pipelines, modern lakehouses, and interactive executive dashboards.',
    detailedOverview:
      'We transform fragmented enterprise data into reliable, single-source-of-truth architectures. Our data engineers design resilient real-time streaming and batch pipelines connecting transactional systems, third-party APIs, and databases into modern cloud warehouses like Snowflake, BigQuery, and Databricks. We pair rigorous data modeling and automated dbt transformations with intuitive Power BI and Tableau dashboards to deliver trustworthy, real-time analytics to decision-makers.',
    technologies: [
      'Snowflake',
      'BigQuery',
      'Databricks',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Apache Spark',
      'Kafka',
      'dbt',
      'Airflow',
      'Power BI',
      'Tableau',
    ],
    path: '/services/data-engineering',
    overview: 'Scalable Data Platforms That Turn Operational Data into Business Value',
    buildHeadline: 'Scalable Data Platforms That Turn Operational Data into Business Value',
    inSectionCta: 'Discuss Data Architecture',
    engageSubtext:
      'Every data engagement follows a structured delivery model, from source audit through governance handover and analyst enablement.',
    capabilities: [
      'Modern Cloud Data Lakehouses (Snowflake / BigQuery)',
      'Real-Time Streaming & Ingestion (Kafka / Spark)',
      'Automated Transformation & Modeling (dbt / Airflow)',
      'Interactive Executive Business Intelligence (Power BI / Tableau)',
      'Automated Data Quality, Schema Validation & Governance',
      'Customer 360 & Operational Metric Consolidation',
    ],
    deliverables: [
      'Enterprise Data Architecture & Pipeline Topology',
      'Production-Ready ETL / ELT Workflows & Orchestration Code',
      'Normalized Data Warehouse Schema & dbt Transformation Models',
      'Interactive Executive & Operational BI Dashboards',
      'Data Quality Alerts & Schema Drift Protection Configurations',
      'Data Dictionaries, Lineage Graphs & Self-Service Training',
    ],
    process: [
      { title: 'Data Discovery & Source Mapping', description: 'Source audit, latency requirements, governance review.' },
      { title: 'Pipeline & Warehouse Modeling', description: 'Schema design (Star/Snowflake), ingestion pattern planning.' },
      { title: 'ETL / ELT & Warehouse Build', description: 'Writing dbt models, Airflow DAGs, Kafka streaming brokers.' },
      { title: 'Dashboard & Metric Development', description: 'Building executive BI dashboards, DAX formulas, alerts.' },
      { title: 'Enablement, Governance & Handover', description: 'Data quality checks, user training, operations runbooks.' },
    ],
    engage: [
      { title: 'Data Discovery & Source Audit', description: 'Inventorying transactional databases, API payloads, and analytical needs.' },
      { title: 'Pipeline Design & Data Modeling', description: 'Designing warehouse schemas, star schemas, and transformation logic.' },
      { title: 'Lakehouse Build & Orchestration', description: 'Implementing cloud warehouses, writing dbt transformation models and DAGs.' },
      { title: 'Dashboard Development & Metric QA', description: 'Building Power BI/Tableau reports and cross-validating financial totals.' },
      { title: 'Enablement, Governance & Handover', description: 'Setting up automated data quality gates and training in-house analysts.' },
    ],
    useCases: [
      'Centralized enterprise data warehouse implementation across distributed operations',
      'Real-time operational KPI tracking, executive dashboards, and margin analytics',
      'Migration from slow legacy ETL tools to modern cloud data stacks (dbt + Snowflake)',
      'Single-pane-of-glass customer lifecycle, cohort, and financial reporting',
    ],
    businessValue: [
      'Single Source of Truth: Eliminate conflicting metrics and manual spreadsheet reporting.',
      'Sub-Minute Data Freshness: Real-time pipelines ensure leadership acts on up-to-date data.',
      'Governed Data Quality: Automated dbt tests catch schema drift and null records before reports render.',
      'Faster Query Speeds: Optimized lakehouse schemas return complex business queries in seconds.',
    ],
    ctaLabel: 'Unlock Data Solutions',
    related: [
      {
        id: 'ai-ml',
        blurb: 'Feed clean, structured data directly into machine learning training workflows.',
      },
      {
        id: 'cloud-devops',
        blurb: 'Host secure, compliant cloud data infrastructure with automated backups and VPC security.',
      },
      {
        id: 'web-mobile',
        blurb: 'Surface live analytical dashboards and reporting directly inside customer web portals.',
      },
    ],
  },
  {
    id: 'dedicated-teams',
    category: 'manpower',
    title: 'Dedicated Engineering Pods',
    shortTitle: 'Engineering Pods',
    heroKicker: 'Managed Delivery Pods',
    heroTitle: 'Autonomous Dedicated Engineering Pods',
    description:
      'Cross-functional engineering squads embedded with dedicated tech leads, senior developers, and QA automation engineers—accountable for end-to-end roadmap delivery under strict SLAs.',
    detailedOverview:
      'A dedicated Girakee engineering pod operates as a self-sufficient extension of your product organization. Rather than managing isolated contractors, you gain a standing squad led by an embedded delivery manager, full-stack engineers, cloud architects, and QA specialists who already share mature development rituals. We run sprint planning, backlog grooming, daily standups, and automated CI/CD deployments while you retain high-level roadmap priorities and product direction.',
    technologies: [
      'Full-Stack',
      'Cloud & DevOps',
      'Applied AI',
      'QA Automation',
      'Agile Delivery Leads',
      'System Architects',
      'SLA Governance',
    ],
    path: '/services/dedicated-pods',
    overview: 'Autonomous Engineering Squads Accountable for Roadmap Velocity',
    buildHeadline: 'Autonomous Engineering Squads Accountable for Roadmap Velocity',
    inSectionCta: 'Configure Your Engineering Pod',
    relatedHeading: 'Related Models',
    engageSubtext:
      'Every pod engagement follows a structured delivery model, from scope alignment through quarterly architecture review.',
    capabilities: [
      'Cross-Functional Pod Composition (Dev, QA, Lead)',
      'Embedded Agile Delivery & Sprint Management',
      'End-to-End Release & CI/CD Pipeline Ownership',
      'Direct System Architecture & Scalability Reviews',
      'Transparent SLA-Backed Operational Metrics',
      'Comprehensive Knowledge Transfer & Runbooks',
    ],
    deliverables: [
      'Squad Governance & RACI Responsibility Matrix',
      'Delivery Playbooks & Bi-Weekly Sprint Reports',
      'Automated CI/CD Release Notes & Runbooks',
      'Architectural Decision Records (ADRs)',
      'Quarterly Velocity & Quality Benchmarks',
      'Production-Ready Codebases with Complete IP Rights',
    ],
    process: [
      { title: 'Scope & Topology Alignment', description: 'Workstream mapping, skill profiling, SLA definitions.' },
      { title: 'Squad Assembly & Tooling', description: 'Vetting engineers, environment provisioning, access setup.' },
      { title: 'Sprint Kickoff & Rituals', description: 'Backlog ingestion, Git branching standards, standup cadence.' },
      { title: 'Sprint Delivery & CI/CD', description: 'Bi-weekly feature shipping, automated QA gates, burndowns.' },
      { title: 'Quarterly Architecture Review', description: 'Performance audits, velocity tuning, long-term roadmap scaling.' },
    ],
    engage: [
      { title: 'Scope Alignment', description: 'Workstream discovery, sprint goals, SLA baseline setup.' },
      { title: 'Team Assembly', description: 'Curating cross-functional engineers and dedicated delivery leads.' },
      { title: 'Kickoff & Tooling', description: 'Jira/Slack/GitHub integration, CI/CD provisioning, security sign-off.' },
      { title: 'Sprint Delivery', description: 'Bi-weekly production releases, automated test reporting, burndown reviews.' },
      { title: 'Quarterly Review', description: 'Roadmap re-alignment, capacity scaling, architectural optimization.' },
    ],
    useCases: [
      'Establishing an offshore product engineering center from Bengaluru',
      'Accelerating an enterprise platform workstream without local hiring drag',
      'Replacing an inconsistent contractor base with a unified squad',
      'End-to-end modernization of legacy application architectures',
    ],
    businessValue: [
      'Predictable Sprint Velocity: Pre-aligned teams eliminate coordination delays.',
      'Single Accountable Partner: One SLA-backed squad replaces fragmented vendors.',
      'Reduced Management Overhead: Delivery leads manage day-to-day execution.',
      'Direct Timezone Overlap: Real-time collaboration with teams across UAE, EU, and North America.',
    ],
    ctaLabel: 'Deploy an Engineering Pod',
    related: [
      {
        id: 'staff-augmentation',
        blurb: 'Add individual senior developers to existing in-house squads.',
      },
      {
        id: 'contract-to-hire',
        blurb: 'Evaluate individual engineers on active sprints before permanent conversion.',
      },
      {
        id: 'web-mobile',
        blurb: 'Explore our core platform and mobile development practice.',
      },
    ],
  },
  {
    id: 'staff-augmentation',
    category: 'manpower',
    title: 'Staff Augmentation (T&M)',
    shortTitle: 'Staff Augmentation',
    heroKicker: 'On-Demand Technical Capacity',
    heroTitle: 'Senior Technical Staff Augmentation',
    description:
      'Embed rigorously pre-vetted senior software engineers directly into your active sprint cycles. Flexible monthly allocation with dedicated timezone overlap and zero management drag.',
    detailedOverview:
      'Scale sprint velocity without the friction of lengthy recruiting pipelines. Girakee embeds senior developers, DevOps practitioners, and data specialists directly into your existing team structure. Our engineers adopt your tools (Slack, Jira, GitHub), join your daily standups, and push code through your CI/CD pipelines under your technical direction. We handle international payroll, compliance, and ongoing performance support from Bengaluru.',
    technologies: [
      'Full-Stack Engineers',
      'Python / Go Developers',
      'Cloud Architects',
      'DevOps Engineers',
      'SDETs',
      'AI/ML Specialists',
      'Data Engineers',
    ],
    path: '/services/staff-augmentation',
    overview: 'Pre-Vetted Senior Engineers Integrated Directly into Your Sprints',
    buildHeadline: 'Pre-Vetted Senior Engineers Integrated Directly into Your Sprints',
    inSectionCta: 'Discuss Talent Requirements',
    relatedHeading: 'Related Models',
    engageSubtext:
      'Every staff augmentation engagement follows a structured delivery model, from technical intake through active sprint contribution.',
    capabilities: [
      'Senior Full-Stack Developers (React, Node, Go, Python)',
      'Cloud & DevOps Infrastructure Specialists',
      'QA Automation & SDET Engineers',
      'Applied AI & Machine Learning Practitioners',
      'Dedicated Timezone Overlap (Middle East, EU, US)',
      'Flexible Scale-Up / Scale-Down Capacity',
    ],
    deliverables: [
      'Technical Assessment & Live-Coding Reports',
      'Curated Shortlists Within 48 Hours',
      '48-Hour Rapid Onboarding & Integration Plan',
      'Weekly Sprint Output & Timesheet Transparency',
      '30-Day Risk-Free Replacement Guarantee',
      'Comprehensive Knowledge Transfer Notes',
    ],
    process: [
      { title: 'Technical Intake Brief', description: 'Target tech stack, senior level, sprint cadence, timezone needs.' },
      { title: 'Practitioner-Led Screening', description: 'Live architecture and system design evaluation by our tech leads.' },
      { title: 'Direct Client Interviews', description: 'Interview top finalists; validate cultural and technical alignment.' },
      { title: 'Rapid Onboarding (48h)', description: 'Repository access, environment provisioning, standup integration.' },
      { title: 'Active Sprint Contribution', description: 'Direct commit access, PR reviews, ongoing performance tracking.' },
    ],
    engage: [
      { title: 'Role Brief', description: 'Documenting stack requirements, seniority tier, and project timelines.' },
      { title: 'Technical Screening', description: 'Candidate validation via code challenges and architecture reviews.' },
      { title: 'Client Interviews', description: 'Direct technical conversations with your engineering leads.' },
      { title: 'Onboarding', description: 'Tool access, repository cloning, team integration.' },
      { title: 'Sprint Integration', description: 'Full sprint participation, daily standups, weekly output tracking.' },
    ],
    useCases: [
      'Scaling sprint capacity rapidly for fixed-deadline product launches',
      'Plugging deep-tech skill gaps (Kubernetes, AI/ML, Rust, Playwright)',
      'Managing workload spikes without inflating permanent headcount',
      'Extending internal team velocity with high-output offshore engineers',
    ],
    businessValue: [
      'Rapid Deployment: Senior engineers integrated within 48 to 72 hours.',
      'Zero Vendor Lock-In: Scale capacity dynamically as sprint requirements change.',
      'Zero Recruiting Overhead: We handle sourcing, vetting, payroll, and benefits.',
      'Seamless Cultural Fit: Excellent English fluency and proactive agile communication.',
    ],
    ctaLabel: 'Augment Your Squad',
    related: [
      {
        id: 'dedicated-teams',
        blurb: 'Deploy complete, managed squads with embedded delivery leadership.',
      },
      {
        id: 'contract-to-hire',
        blurb: 'Transition high-performing augmented engineers to full-time staff.',
      },
      {
        id: 'cloud-devops',
        blurb: 'Leverage specialized DevOps engineers to automate your cloud infrastructure.',
      },
    ],
  },
  {
    id: 'contract-to-hire',
    category: 'manpower',
    title: 'Contract-to-Hire',
    shortTitle: 'Contract-to-Hire',
    heroKicker: 'De-Risked Strategic Hiring',
    heroTitle: 'Contract-to-Hire Engineering',
    description:
      'Evaluate technical execution, communication depth, and architectural quality on production tickets before making a permanent hiring commitment.',
    detailedOverview:
      'Eliminate the financial and operational risks of conventional recruitment. Girakee sources, assesses, and embeds high-performing software talent into your active engineering teams on a defined contract basis (3 to 6 months). You assess how candidates write unit tests, handle code reviews, and adapt to your culture during actual production sprints. When proven, execute a seamless conversion directly onto your corporate payroll.',
    technologies: [
      'System Architects',
      'Senior Backend Leads',
      'Frontend Specialists',
      'DevSecOps Engineers',
      'Data Architects',
      'SDET Leads',
    ],
    path: '/services/contract-to-hire',
    overview: 'Evaluate Engineers on Real Production Code Before You Commit',
    buildHeadline: 'Evaluate Engineers on Real Production Code Before You Commit',
    inSectionCta: 'Discuss Trial Placements',
    relatedHeading: 'Related Models',
    engageSubtext:
      'Every contract-to-hire engagement follows a structured trial model, from role definition through permanent conversion.',
    capabilities: [
      'Rigorous Senior Technical Screening',
      'Defined 3 to 6-Month Trial Periods',
      'Monthly Milestone & Code Quality Reviews',
      'Transparent Payroll-to-Direct Conversion Framework',
      'Rapid Replacement Coverage During Trial',
      'IP Assignment & Full Code Ownership from Day 1',
    ],
    deliverables: [
      'Candidate Technical Dossier & Benchmark Scorecards',
      'Clear Trial Success Criteria & Milestones',
      'Monthly Code Quality & Peer Feedback Summaries',
      'Transparent Commercial Conversion Agreement',
      'Comprehensive Handover & Security Sign-Off',
      'Direct HR Transition & Onboarding Support',
    ],
    process: [
      { title: 'Role Definition & Success Criteria', description: 'Mapping technical responsibilities, metrics, and trial milestones.' },
      { title: 'Practitioner Sourcing & Vetting', description: 'Screening for technical acumen and long-term retention potential.' },
      { title: 'Contract Placement Kickoff', description: 'Candidate joins sprint cycles under a structured contract model.' },
      { title: 'Active Milestone Review', description: 'Evaluating architecture decisions, sprint velocity, and collaboration.' },
      { title: 'Permanent Conversion', description: 'Frictionless transition directly onto client payroll with zero disputes.' },
    ],
    engage: [
      { title: 'Role Definition', description: 'Establishing baseline competencies and 90-day trial milestones.' },
      { title: 'Screening & Assessment', description: 'Evaluating technical capability through architecture interviews.' },
      { title: 'Contract Placement', description: 'Embedding candidate into sprint cycles on a trial basis.' },
      { title: 'Performance Review', description: 'Regular check-ins on code quality, velocity, and communication.' },
      { title: 'Conversion', description: 'Executing full-time corporate employment transfer.' },
    ],
    useCases: [
      'Hiring critical lead developers and architects without blind offers',
      'Expanding permanent in-house teams through verified performance',
      'Establishing remote teams in India with a pathway to permanent staff',
      'Mitigating the high operational cost of executive mis-hires',
    ],
    businessValue: [
      'Eliminate Mis-Hire Risk: Test code quality and culture fit on live systems.',
      'Zero Conversion Surprises: Pre-negotiated commercial conversion schedules.',
      'Immediate Value: Candidates deliver production output from their first sprint.',
      'Protected Intellectual Property: Comprehensive IP assignment from day one.',
    ],
    ctaLabel: 'Explore Contract-to-Hire',
    related: [
      {
        id: 'staff-augmentation',
        blurb: 'On-demand developers for flexible, non-permanent capacity.',
      },
      {
        id: 'it-recruitment',
        blurb: 'Direct executive searches for leadership and specialized seats.',
      },
      {
        id: 'dedicated-teams',
        blurb: 'Deploy entire autonomous delivery squads.',
      },
    ],
  },
  {
    id: 'it-recruitment',
    category: 'manpower',
    title: 'IT Recruitment & Tech Search',
    shortTitle: 'Tech Search',
    heroKicker: 'Practitioner-Led Recruitment',
    heroTitle: 'IT Recruitment & Specialized Tech Search',
    description:
      'Engineer-led executive search and direct-hire recruitment for senior developers, engineering managers, and deep-tech specialists.',
    detailedOverview:
      'Standard staffing agencies match buzzwords on resumes; Girakee evaluates candidates through structured technical interviews run by practicing engineering leads. We define detailed scorecards, execute deep sourcing across active developer networks, and evaluate candidates on architecture, system resilience, and coding design before presenting them to your team. You receive a curated shortlist of validated finalists.',
    technologies: [
      'VP of Engineering',
      'Chief Architects',
      'Principal Engineers',
      'AI/ML Leads',
      'DevOps Leads',
      'Engineering Managers',
    ],
    path: '/services/it-recruitment',
    overview: 'Recruitment Built by Active Software Practitioners, Not Keyword Matchers',
    buildHeadline: 'Recruitment Built by Active Software Practitioners, Not Keyword Matchers',
    inSectionCta: 'Submit a Hiring Requisition',
    relatedHeading: 'Related Models',
    engageSubtext:
      'Every search follows a structured hiring model, from intake scorecard through offer and Day-90 onboarding.',
    capabilities: [
      'Executive Engineering Search (VP, CTO, Tech Leads)',
      'Specialized Deep-Tech Sourcing (AI, Cloud, Zero-Trust)',
      'Practitioner-Led Technical Interviews & Scoring',
      'Behavioral & Agile Communication Screening',
      'End-to-End Offer Structuring & Notice Period Management',
      '90-Day Candidate Replacement Warranty',
    ],
    deliverables: [
      'Role-Specific Scorecard & Competency Matrix',
      'Pre-Screened Candidate Shortlist with Code Proof',
      'Detailed Technical Interview Transcripts & Ratings',
      'Formal Reference Checks & Background Dossiers',
      'Competitive Compensation Benchmark Data',
      'Formal 90-Day Warranty & Retention Agreement',
    ],
    process: [
      { title: 'Intake & Scorecard Design', description: 'Calibrating architectural needs, culture indicators, and budget.' },
      { title: 'Active & Passive Sourcing', description: 'Direct outreach to non-active candidates across technical networks.' },
      { title: 'Technical Screening', description: 'Live system design and problem-solving interview by Girakee leads.' },
      { title: 'Client Finalist Rounds', description: 'Direct interviews with pre-assessed, high-probability finalists.' },
      { title: 'Offer & Notice Period Management', description: 'Managing counteroffers and tracking onboarding through Day 90.' },
    ],
    engage: [
      { title: 'Intake Brief', description: 'Defining technical parameters, culture profile, and compensation benchmarks.' },
      { title: 'Sourcing', description: 'Targeted headhunting across developer platforms and private networks.' },
      { title: 'Technical Screen', description: 'Live problem-solving and architectural evaluation by engineers.' },
      { title: 'Client Interviews', description: 'Facilitating focused executive interviews with top finalists.' },
      { title: 'Offer & Joining', description: 'Managing negotiations, notice-period checkpoints, and Day 1 onboarding.' },
    ],
    useCases: [
      'Filling critical senior, lead, and staff engineering seats',
      'Establishing an entire specialized AI or platform engineering unit',
      'Replacing a stalled recruitment search from generic agencies',
      'Strategic technical hiring across India, UAE, and European markets',
    ],
    businessValue: [
      'High-Signal Shortlists: Only candidates who pass real engineering screens.',
      'Shorter Time-to-Offer: Eliminate hours wasted interviewing unqualified applicants.',
      'Mitigated Drop-Outs: Active notice-period management prevents offer rejections.',
      '90-Day Warranty: Full replacement guarantee protects your recruitment investment.',
    ],
    ctaLabel: 'Initiate Tech Search',
    related: [
      {
        id: 'contract-to-hire',
        blurb: 'Evaluate candidates on real sprint cycles prior to direct payroll hire.',
      },
      {
        id: 'dedicated-teams',
        blurb: 'Deploy entire squads immediately instead of hiring seat-by-seat.',
      },
      {
        id: 'staff-augmentation',
        blurb: 'Scale temporary developer capacity during long-term hiring searches.',
      },
    ],
  },
  {
    id: 'corporate-training',
    category: 'training',
    title: 'Corporate Tech Enablement',
    shortTitle: 'Corporate Enablement',
    heroKicker: 'Enterprise Workforce Upskilling',
    heroTitle: 'Practitioner-Led Corporate Tech Enablement',
    description:
      'Custom engineering bootcamps and advanced architecture workshops taught by active engineers shipping production code. Tailored to your stack, security standards, and delivery frameworks.',
    detailedOverview:
      'Corporate upskilling at Girakee is delivered by practicing systems engineers, not academic lecturers reading static slide decks. We design bespoke curricula directly around your internal tech stack, codebase constraints, and sprint conventions. Engineers engage in live code katas, sandboxed cloud labs, and hands-on capstone migrations mirroring your actual production architecture. Programs are delivered on-site at your headquarters, remotely worldwide, or at our Bengaluru engineering center.',
    technologies: [
      'AI Engineering & LLMs',
      'Cloud Migration & IaC',
      'Full-Stack Architecture',
      'Automated QA & Playwright',
      'Zero-Trust DevSecOps',
      'Microservices Modernization',
    ],
    path: '/services/corporate-training',
    overview: 'Workforce Capability Programs Built Around Production Systems, Not Slides',
    buildSectionTitle: 'What We Deliver',
    buildHeadline: 'Workforce Capability Programs Built Around Production Systems, Not Slides',
    inSectionCta: 'Schedule a Capability Consultation',
    engageSubtext:
      'Every enablement program follows a structured delivery model, from skills-gap audit through leadership scorecards.',
    capabilities: [
      'Tailored Curriculum Aligned to Client Tech Stack',
      'Sandboxed Cloud Lab Environments',
      'Hands-On Code Katas from Production Codebases',
      'On-Site & Remote Delivery',
      'Live Lab Instruction at Client Headquarters',
      'Production-Mirror Capstone Projects',
    ],
    deliverables: [
      'Diagnostic Skills Gap & Curriculum Blueprint',
      'Dedicated Pre-Configured Lab Environments',
      'Individual & Squad Capstone Deliverables',
      'Capability Benchmarks & Leadership Readout Report',
    ],
    process: [
      { title: 'Skills Gap Diagnostic', description: 'Auditing current engineering competencies, target stack requirements, and timeline.' },
      { title: 'Custom Curriculum Architecture', description: 'Structuring syllabi, lab sandboxes, and capstone challenge criteria.' },
      { title: 'Hands-On Lab Sprints', description: 'Conducting hands-on coding modules and system design katas.' },
      { title: 'Capstone Architecture Challenge', description: 'Squad-based engineering challenges solving production-style problems.' },
      { title: 'Executive Assessment & Report', description: 'Grading competencies, publishing scorecards, and leadership readouts.' },
    ],
    engage: [
      { title: 'Needs Assessment', description: 'Auditing current skill matrices, target stack requirements, and timeline.' },
      { title: 'Curriculum Architecture', description: 'Structuring syllabi, lab sandboxes, and capstone challenge criteria.' },
      { title: 'Workshops & Live Labs', description: 'Conducting hands-on coding modules and system design katas.' },
      { title: 'Capstone Execution', description: 'Squad-based engineering challenges solving production-style problems.' },
      { title: 'Assessment & Report', description: 'Grading competencies, publishing scorecards, and leadership readouts.' },
    ],
    useCases: [
      'Upskilling legacy Java/PHP squads to modern Node.js/Go and React stacks',
      'Training backend teams to engineer production RAG and LLM agentic pipelines',
      'Transitioning manual QA testers to automated Playwright/Cypress SDETs',
      'Onboarding and standardizing new engineering cohorts during major hiring phases',
    ],
    businessValue: [
      'Shorter Time-to-Productivity: Cut learning curves on new technologies by up to 60%.',
      'Stack-Specific Fluency: Training directly addresses your architecture, preventing common antipatterns.',
      'Standardized Code Quality: Align distributed engineering squads around unified patterns.',
      'Higher Senior Retention: Offering elite engineering upskilling increases top-tier developer retention.',
    ],
    ctaLabel: 'Design a Training Program',
    related: [
      {
        id: 'cloud-devops',
        blurb: 'Accelerate cloud-native adoption with hands-on infrastructure training.',
      },
      {
        id: 'ai-ml',
        blurb: 'Upskill engineering teams to build, fine-tune, and deploy custom neural networks.',
      },
      {
        id: 'dedicated-teams',
        blurb: 'Embed seasoned delivery leads directly alongside upskilled internal squads.',
      },
    ],
  },
  {
    id: 'on-job-training',
    category: 'training',
    title: 'Graduate Engineering Residency (6-Month OJT)',
    shortTitle: '6-Month Residency',
    heroKicker: 'Engineering Incubation & Residency',
    heroTitle: 'Graduate Engineering Residency (6-Month OJT)',
    description:
      'Rigorous on-the-job production engineering for early-career developers and sponsored cohorts. Ship live production code, participate in daily standups, and earn a verified industry experience credential.',
    detailedOverview:
      'The Girakee Engineering Residency is an intensive six-month immersion into production software delivery, not a theoretical lecture course. Residents are paired with dedicated Senior Engineering Mentors in Bengaluru, embedded into active client delivery workstreams, and assigned real Jira backlog tickets. You build microservices, write comprehensive automated test suites, navigate peer code reviews, and push builds through live CI/CD pipelines. Completing the residency earns a formal Girakee Software Services Experience Letter documenting verified production contributions.',
    technologies: [
      'TypeScript',
      'Python',
      'Go',
      'React',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'CI/CD Automation',
      'Agile Rituals',
      'Production Deployments',
    ],
    path: '/services/on-job-training',
    overview: 'Production Codebases, Senior Mentorship, and Real Sprint Accountability',
    buildSectionTitle: 'The Residency Experience',
    buildHeadline: 'Production Codebases, Senior Mentorship, and Real Sprint Accountability',
    inSectionCta: 'Explore Curriculum & Entry Requirements',
    ctaHref: '/services/on-job-training#register',
    application: 'ojt',
    engageSubtext:
      'Every residency follows a structured six-month model, from intake diagnostics through capstone audit and graduation.',
    capabilities: [
      '6-Month Immersive Production Deployment',
      'Dedicated Senior Practitioner Mentorship',
      'Live Jira Backlog Tickets & PR Reviews',
      'Daily Agile Standups, Retros & Sprint Demos',
      'Tracks in AI/ML, Full-Stack, Cloud & QA Automation',
      'Employer-Sponsored Cohort Incubation',
    ],
    deliverables: [
      'Individual Growth Plan & Milestone Schedule',
      'Production Git Commits & Documented PRs',
      'Monthly Technical Performance Reviews',
      'Verifiable Code Portfolio on GitHub',
      'Formal Girakee Experience Letter (6 Months)',
      'Career Placement & Internal Hiring Priority',
    ],
    process: [
      { title: 'Intake Assessment & Track Fit', description: 'Screening programming fundamentals, problem-solving, and track interest.' },
      { title: 'Squad Assignment & Tooling', description: 'Provisioning GitHub, Jira, and Slack; establishing coding conventions.' },
      { title: 'Foundation & Sandbox Sprints (M1–M2)', description: 'Architectural foundations, unit testing conventions, code review standards.' },
      { title: 'Active Ticket Delivery (M3–M5)', description: 'Resolving production-adjacent tickets, writing E2E tests, participating in standups.' },
      { title: 'Capstone Audit & Graduation (M6)', description: 'Comprehensive code audit, experience letter issuance, and hiring placement.' },
    ],
    engage: [
      { title: 'Intake & Skill Diagnostic', description: 'Coding evaluations, technical interviews, and specialization assignment.' },
      { title: 'Team Placement', description: 'Pairing with a Senior Tech Lead and integration into a sprint delivery squad.' },
      { title: 'Foundation Sprints', description: 'Mastering Git workflows, CI/CD pipelines, and defensive coding patterns.' },
      { title: 'Active Production Delivery', description: 'Writing unit tests, solving real Jira issues, participating in peer code reviews.' },
      { title: 'Graduation & Certification', description: 'Issuing verified 6-Month Experience Letters and portfolio release.' },
    ],
    useCases: [
      'Computer science graduates seeking proven commercial software experience',
      'Career switchers bridging the gap between bootcamps and enterprise engineering',
      'Enterprises sponsoring fresh graduate cohorts for rapid, debt-free upskilling',
      'Building a verified, pre-screened junior talent pipeline for Girakee pods',
    ],
    businessValue: [
      'Production-Ready Engineers: Residents graduate knowing how enterprise software ships.',
      'Verifiable Experience: Graduate with legitimate production ticket contributions.',
      'Zero Slide-Deck Fluff: 100% focused on commits, unit tests, code reviews, and deployments.',
      'Seamless Team Onboarding: Graduates integrate into client squads on Day 1 without training drag.',
    ],
    ctaLabel: 'Apply for Engineering Residency',
    related: [
      {
        id: 'internship',
        blurb: 'Explore our 3-month foundational track for current university students.',
      },
      {
        id: 'web-mobile',
        blurb: 'See the core frameworks and architectures taught in residency tracks.',
      },
      {
        id: 'dedicated-teams',
        blurb: 'Where our top residency graduates graduate into active client pods.',
      },
    ],
  },
  {
    id: 'internship',
    category: 'training',
    title: 'Student Internship Program (3-Month Track)',
    shortTitle: '3-Month Internship',
    heroKicker: 'Academic Capstone & Incubation',
    heroTitle: 'Student Engineering Internship (3-Month Track)',
    description:
      'A structured 12-week online and hybrid engineering internship for university students. Build real software projects, master modern frameworks, and graduate with an industry-recognized capstone evaluation.',
    detailedOverview:
      'Designed specifically for pre-final and final-year engineering students, this 3-month program bridges the gap between university coursework and commercial software engineering. Interns work in collaborative small squads under senior practitioner guidance to architect and ship a functional, production-grade application from scratch. From Git branch management and API contract design to continuous deployment, you build real software that stands out on your resume.',
    technologies: [
      'Python',
      'JavaScript',
      'React',
      'FastAPI',
      'SQL',
      'Git & GitHub',
      'REST APIs',
      'Software Testing Basics',
    ],
    path: '/services/internship',
    overview: 'Transitioning Academic Foundations into Modern Engineering Practices',
    buildSectionTitle: 'The Internship Track',
    buildHeadline: 'Transitioning Academic Foundations into Modern Engineering Practices',
    inSectionCta: 'View Cohort Dates & Syllabi',
    ctaHref: '/services/internship#apply',
    application: 'internship',
    engageSubtext:
      'Every internship cohort follows a structured 12-week model, from enrollment through capstone presentation and certificate issuance.',
    capabilities: [
      '12-Week Structured Sprint Curriculum',
      'Weekly Mentor Reviews & Code Feedback',
      'Collaborative Full-Stack Capstone',
      'College Academic Credit Alignment',
      'Git & GitHub Workflow Immersion',
      'Cloud Hosting & Deployment Practice',
    ],
    deliverables: [
      'Completed Full-Stack Capstone & CI/CD Pipeline Project',
      'Weekly Mentor Feedback & Milestone Scorecards',
      'Public GitHub Repository with Clean Histories',
      'Letter of Recommendation & Completion Certificate',
      'Structured Evaluation Meeting University Requirements',
    ],
    process: [
      { title: 'Registration & Onboarding (Week 1)', description: 'Tooling setup, squad assignment, and coding conventions.' },
      { title: 'Architecture & Tooling Sprint (Week 2)', description: 'Git setup, project scoping, API design, and database modeling.' },
      { title: 'Core Feature Sprints (Weeks 3–8)', description: 'Implementing APIs, UI frontend development, and weekly PR reviews.' },
      { title: 'Testing & Deployment (Weeks 9–11)', description: 'Unit testing, bug fixing, and cloud deployment configuration.' },
      { title: 'Capstone Demo & Certification (Week 12)', description: 'Final live project demo, evaluation rubric, and certificate issuance.' },
    ],
    engage: [
      { title: 'Cohort Enrollment', description: 'Registering students, onboarding tooling, and assigning project squads.' },
      { title: 'Sprint 1: Architecture', description: 'Git setup, project scoping, and database design.' },
      { title: 'Sprint 2: Core Engineering', description: 'Implementing APIs, UI frontend development, and weekly PR reviews.' },
      { title: 'Sprint 3: Testing & Cloud Deploy', description: 'Unit testing, bug fixing, and cloud deployment configuration.' },
      { title: 'Capstone Presentation', description: 'Final live project demo, evaluation rubric, and certificate issuance.' },
    ],
    useCases: [
      'Engineering students completing mandatory university internship credits',
      'Early coders building their first production-grade full-stack project',
      'Academic institutions partnering with Girakee for industry-aligned placement training',
      'Screening top-tier junior talent for progression into the 6-Month Residency',
    ],
    businessValue: [
      'Resume-Ready Portfolio: Real deployed applications with clean Git histories.',
      'Agile Delivery Literacy: Interns learn Jira, daily standups, and pull-request etiquette.',
      'Confidence in Modern Tech Stacks: Deep familiarity with React, Python, APIs, and cloud hosting.',
      'Academic Compliance: Structured documentation meeting university submission requirements.',
    ],
    ctaLabel: 'Apply for Student Internship',
    related: [
      {
        id: 'on-job-training',
        blurb: 'Take the next step: full 6-month immersion on live production code.',
      },
      {
        id: 'corporate-training',
        blurb: 'Customized training programs for established corporate teams.',
      },
      {
        id: 'web-mobile',
        blurb: 'Explore the platforms, standards, and systems built by Girakee squads.',
      },
    ],
  },
]

const isListed = (s: Service) => s.listed !== false

export const softwareServices = services.filter((s) => s.category === 'software' && isListed(s))
export const manpowerServices = services.filter((s) => s.category === 'manpower' && isListed(s))
export const trainingServices = services.filter((s) => s.category === 'training' && isListed(s))
