export type ServiceCategory = 'software' | 'manpower' | 'training'

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
  process: string[]
  useCases: string[]
  businessValue: string[]
  category: ServiceCategory
  ctaLabel: string
  listed?: boolean
}

export const services: Service[] = [
  {
    id: 'web-mobile',
    category: 'software',
    title: 'Web & Mobile Engineering',
    shortTitle: 'Web & Mobile',
    description:
      'High-performance web ecosystems, native mobile apps, and scalable microservices engineered from discovery to production.',
    detailedOverview:
      'We architect and deploy end-to-end digital applications built on modern multi-tier frameworks. Merging human-centric UI/UX design systems with robust backend engineering, our teams deliver responsive web platforms, native/hybrid mobile apps, and high-concurrency API layers. Every project adheres to automated CI/CD pipelines, strict code reviews, and enterprise documentation to ensure your platform scales seamlessly as transaction volume grows.',
    technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
    path: '/web-mobile-development',
    overview:
      'End-to-end product engineering for web and mobile platforms—from architectural blueprints and secure APIs to high-concurrency production deployments.',
    capabilities: [
      'Custom Web Applications',
      'iOS & Android Apps',
      'UI/UX Design Systems',
      'API & Microservices',
      'System Integration',
      'Performance Optimization',
    ],
    deliverables: [
      'Production-ready codebase with complete IP ownership',
      'System Architecture, API Documentation & Reusable Design Systems',
      'High-concurrency REST / GraphQL API microservices',
      'Automated CI/CD deployment pipelines & cloud environment configuration',
    ],
    process: ['Discovery & Scoping', 'UX / Architecture', 'Sprint Development', 'QA & Hardening', 'Launch & Handover'],
    useCases: [
      'Mission-critical B2B SaaS platforms and executive client portals',
      'Cross-platform enterprise mobile applications (iOS & Android)',
      'Legacy system modernization & microservices refactoring',
      'High-throughput transactional web platforms',
    ],
    businessValue: [
      'Digitize core business operations',
      'Improve customer engagement',
      'Accelerate time-to-market',
    ],
    ctaLabel: 'Consult an Architect',
  },
  {
    id: 'ai-ml',
    category: 'software',
    title: 'Applied AI & Computer Vision',
    shortTitle: 'Applied AI',
    description:
      'Production AI architectures, custom computer vision models, predictive systems, and autonomous agentic workflows.',
    detailedOverview:
      'We build and deploy robust, enterprise-grade AI systems tailored to mission-critical business workflows. Moving beyond proof-of-concept demos, our engineers train, fine-tune, and deploy custom neural networks and LLM agentic pipelines. From proprietary computer vision architectures that automate physical inspection to intelligent OCR extraction and deterministic rule validation, we bridge machine intelligence directly into your core operations.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'YOLOv10', 'Hugging Face', 'LangChain', 'FastAPI', 'MLflow'],
    path: '/ai-engineering',
    overview:
      'Production AI architectures, custom computer vision models, predictive systems, and autonomous agentic workflows.',
    capabilities: [
      'Custom Neural Networks',
      'Computer Vision Pipelines',
      'Generative AI & LLM Agents',
      'Intelligent OCR Extraction',
      'MLOps & Model Deployment',
      'Predictive Analytics',
    ],
    deliverables: [
      'Fine-tuned, version-controlled deep learning & vision models',
      'Low-latency Inference APIs (REST/gRPC) & real-time streaming pipelines',
      'Automated MLOps infrastructure with continuous drift and accuracy monitoring',
      'End-to-end data preprocessing, ingestion, and validation pipelines',
    ],
    process: ['Problem Framing', 'Data Assessment', 'Model Development', 'Validation & Testing', 'Production Deployment'],
    useCases: [
      'Custom Computer Vision models (object detection, automated CAD & schematic audits)',
      'Multi-format document ingestion, semantic search, and intelligent OCR extraction',
      'Predictive forecasting, anomaly detection, and operational optimization',
      'Autonomous enterprise AI copilots & agentic workflows',
    ],
    businessValue: [
      'Automate complex workflows',
      'Transform data into decisions',
      'Reduce operational overhead',
    ],
    ctaLabel: 'Explore AI Solutions',
  },
  {
    id: 'cloud-devops',
    category: 'software',
    title: 'Cloud Architecture & DevOps',
    shortTitle: 'Cloud & DevOps',
    description:
      'Cloud-native infrastructure, container orchestration, and automated CI/CD for resilient, high-availability deployments.',
    detailedOverview:
      'We engineer, automate, and manage secure cloud infrastructures across AWS, Microsoft Azure, and GCP. Leveraging Infrastructure as Code (IaC) and containerization, our DevOps engineers establish automated release pipelines, multi-region failover, and comprehensive observability stacks. We optimize cloud topography for maximum uptime, strict compliance, and predictable cost governance without runtime bottlenecks.',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
    path: '/cloud-devops',
    overview:
      'Cloud-native infrastructure, container orchestration, and automated CI/CD for resilient, high-availability deployments.',
    capabilities: [
      'Cloud Architecture',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Container Orchestration',
      'Cost Optimization',
      'Monitoring & Observability',
    ],
    deliverables: [
      'Enterprise Cloud Architecture Blueprint & Security Baseline',
      'Modular Terraform / IaC provisioning scripts',
      'Kubernetes manifests, Helm charts, and container clusters',
      'Automated Zero-Downtime CI/CD delivery pipelines',
    ],
    process: ['Infrastructure Audit', 'Architecture Design', 'IaC Implementation', 'Pipeline Setup', 'Observability & Handover'],
    useCases: [
      'Cloud migration, modernization, and hybrid-cloud orchestration',
      'Microservices containerization (Docker / Kubernetes)',
      'Multi-region disaster recovery and 99.99% high-availability setups',
      'FinOps cloud spend audit and infrastructure optimization',
    ],
    businessValue: [
      'High availability and resilience',
      'Faster, safer deployments',
      'Optimized cloud spend',
    ],
    ctaLabel: 'Schedule Cloud Consultation',
  },
  {
    id: 'cybersecurity',
    category: 'software',
    title: 'Zero-Trust Cybersecurity & DevSecOps',
    shortTitle: 'Cybersecurity',
    description:
      'End-to-end security posture engineering, Zero-Trust network architecture, and continuous threat mitigation across the full SDLC.',
    detailedOverview:
      'Security is embedded into every layer of our software engineering lifecycle. We implement Zero-Trust principles, granular Identity and Access Management (IAM), runtime secrets rotation, and automated vulnerability scanning directly within development pipelines. Our engineering frameworks ensure your enterprise digital assets remain resilient against targeted threats while fully compliant with global data governance mandates.',
    technologies: ['Zero Trust', 'OAuth 2.0', 'Vault', 'SIEM', 'AWS Security', 'Azure Security', 'OWASP'],
    path: '/cybersecurity',
    overview:
      'End-to-end security posture engineering, Zero-Trust network architecture, and continuous threat mitigation across the full SDLC.',
    capabilities: [
      'Zero Trust Architecture',
      'Threat Detection & Response',
      'Identity & Access Management',
      'Compliance & Auditing',
      'Security Automation',
      'Penetration Testing',
    ],
    deliverables: [
      'Comprehensive Security Posture & Architecture Assessment',
      'Zero-Trust IAM policy design and role-based access controls',
      'Automated Vulnerability Scanning (SAST/DAST) in CI/CD pipelines',
      'Hardened infrastructure baselines and incident remediation roadmap',
    ],
    process: ['Security Assessment', 'Architecture Review', 'Implementation', 'Testing & Validation', 'Ongoing Monitoring'],
    useCases: [
      'Cloud infrastructure security hardening (AWS / Azure / GCP)',
      'Application penetration testing and code security audits',
      'Compliance readiness audits (ISO 27001, SOC 2, GDPR)',
      'Real-time anomaly detection and incident response workflows',
    ],
    businessValue: [
      'Protect critical assets',
      'Meet compliance requirements',
      'Reduce security risk proactively',
    ],
    ctaLabel: 'Review Security Solutions',
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
    path: '/ui-ux-design',
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
    process: ['Research & Discovery', 'Wireframing', 'Visual Design', 'Prototyping', 'Development & QA'],
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
    description:
      'Automated regression frameworks, high-load performance validation, and AI-powered computer vision document audits.',
    detailedOverview:
      'We deliver end-to-end quality engineering by combining automated software test suites with AI-powered vision auditing. Our engineers establish continuous CI/CD testing gates—spanning cross-browser regression, API contracts, and high-concurrency stress testing. For complex technical assets, our proprietary computer vision and OCR engines automatically ingest, inspect, and verify CAD layouts, blueprints, and regulatory documents against deterministic compliance rules.',
    technologies: ['Selenium', 'Cypress', 'Playwright', 'YOLOv10', 'OpenCV', 'Jenkins', 'k6', 'Postman'],
    path: '/software-testing',
    overview:
      'Automated regression frameworks, high-load performance validation, and AI-powered computer vision document audits.',
    capabilities: [
      'Test Automation',
      'Performance Testing',
      'API Contract Testing',
      'CAD & Schematic Vision Audits',
      'Continuous Quality Gates',
      'UAT & Regression',
    ],
    deliverables: [
      'Enterprise Test Automation Strategy & Framework Architecture',
      'End-to-End Automated Regression Suites (Selenium, Cypress, Playwright)',
      'Custom Schematic & CAD Computer Vision Inspection Pipeline',
      'Continuous Quality Gate integration within CI/CD pipelines',
    ],
    process: ['Test Planning', 'Automation Setup', 'Execution Cycles', 'Defect Management', 'Release Validation'],
    useCases: [
      'Cross-browser and mobile automated regression suites',
      'API contract, payload, and integration test automation',
      'High-concurrency performance and load testing (JMeter, k6)',
      'Automated CAD, blueprint, and PDF drawing audits via computer vision',
    ],
    businessValue: [
      'Ship with confidence',
      'Catch defects earlier',
      'Ensure long-term reliability',
    ],
    ctaLabel: 'Strengthen QA Pipeline',
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
    path: '/intelligent-qa',
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
    process: ['Requirements Mapping', 'Rule Definition', 'Pipeline Build', 'Calibration', 'Production Rollout'],
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
    description:
      'Modern data warehousing, scalable ETL/ELT pipelines, and interactive executive intelligence dashboards.',
    detailedOverview:
      'We transform fragmented transactional records into high-performance, single-source-of-truth data platforms. Our data engineers design resilient extraction, ingestion, and transformation pipelines connecting disparate enterprise tools into centralized warehouses like Snowflake, BigQuery, and Databricks. We pair robust data governance with intuitive Power BI and Tableau dashboards to deliver reliable, real-time analytics to executive leadership.',
    technologies: ['Python', 'SQL', 'Spark', 'Airflow', 'Tableau', 'Power BI', 'Snowflake', 'Databricks'],
    path: '/data-analytics',
    overview:
      'Modern data warehousing, scalable ETL/ELT pipelines, and interactive executive intelligence dashboards.',
    capabilities: [
      'Data Engineering',
      'Business Intelligence',
      'Data Warehousing',
      'ETL / ELT Pipelines',
      'Dashboards & Reporting',
      'Real-Time Analytics',
    ],
    deliverables: [
      'Modern Data Platform & Pipeline Architecture',
      'Automated ETL / ELT Workflows & Real-Time Streaming Ingestion',
      'Optimized Data Warehouse Schema & Lakehouse Infrastructure',
      'Interactive Executive BI Dashboards (Power BI, Tableau, Looker)',
    ],
    process: ['Data Discovery', 'Pipeline Design', 'Warehouse Build', 'Dashboard Development', 'Enablement & Training'],
    useCases: [
      'Centralized enterprise data warehouse implementation',
      'Legacy ETL migration to modern cloud data stacks',
      'Real-time operational KPI tracking and executive metrics',
      'Customer 360 data consolidation and behavioral analytics',
    ],
    businessValue: [
      'Data-driven decision making',
      'Operational visibility',
      'Strategic forecasting',
    ],
    ctaLabel: 'Unlock Data Solutions',
  },
  {
    id: 'dedicated-teams',
    category: 'manpower',
    title: 'Dedicated Engineering Pods (Managed Services)',
    shortTitle: 'Engineering Pods',
    description:
      'Autonomous, cross-functional engineering squads accountable for end-to-end milestone delivery, system quality, and sprint execution.',
    detailedOverview:
      'Accelerate roadmap execution without the overhead of building local hiring pipelines. Girakee deploys dedicated, co-innovation engineering pods tailored to your exact product architecture. Comprising seasoned delivery leads, full-stack developers, cloud architects, and QA automation specialists, our standing squads integrate directly into your workflows, take ownership of defined workstreams, and guarantee production velocity under transparent SLAs.',
    technologies: ['Product Delivery', 'Agile', 'Full-Stack', 'Cloud', 'QA', 'DevOps'],
    path: '/managed-services',
    overview:
      'Autonomous, cross-functional engineering squads accountable for end-to-end milestone delivery, system quality, and sprint execution.',
    capabilities: [
      'Cross-functional squads',
      'Embedded delivery lead',
      'Sprint planning and reporting',
      'QA and release ownership',
      'Architecture support',
      'SLA-backed operations',
    ],
    deliverables: [
      'Complete Squad Composition & RACI Governance Matrix',
      'Delivery Playbooks, CI/CD Integration & Agile Ceremonies',
      'Bi-Weekly Sprint Velocity, Burndown & Architecture Reports',
      'Automated Production Deployments & Runbooks',
    ],
    process: ['Scope Alignment', 'Team Assembly', 'Kickoff & Tooling', 'Sprint Delivery', 'Quarterly Review'],
    useCases: [
      'Dedicated offshore/nearshore product engineering centers',
      'Accelerating new feature releases and multi-cloud platforms',
      'Consolidating fragmented contractor workflows into one unified pod',
      'Long-term microservices re-architecture and infrastructure management',
    ],
    businessValue: [
      'Predictable delivery capacity',
      'One accountable team, not scattered contractors',
      'Lower management load on your internal leads',
    ],
    ctaLabel: 'Deploy an Engineering Pod',
  },
  {
    id: 'staff-augmentation',
    category: 'manpower',
    title: 'Staff Augmentation (Time & Material)',
    shortTitle: 'Staff Augmentation',
    description:
      'High-caliber software engineers embedded directly into your active sprint cycles with flexible commercial allocation.',
    detailedOverview:
      'Eliminate talent bottlenecks by scaling your in-house squads with rigorously pre-vetted engineers. Girakee matches senior developers, DevOps specialists, and data engineers who embed directly within your Slack, Jira, GitHub, and daily standups. We ensure direct timezone overlap with the UAE, Europe, and North America, handling all operational management so you maintain full product control and rapid development rhythm.',
    technologies: ['Full-Stack', 'AI/ML', 'Cloud', 'DevOps', 'Mobile', 'QA', 'Data Engineering'],
    path: '/time-and-material',
    overview:
      'High-caliber software engineers embedded directly into your active sprint cycles with flexible commercial allocation.',
    capabilities: [
      'Full-stack developers',
      'AI and ML engineers',
      'Cloud and DevOps specialists',
      'QA and test automation',
      'Data engineers and analysts',
      'UI/UX and mobile engineers',
    ],
    deliverables: [
      'Production-Tested Technical Assessment Reports',
      'Seamless 48-Hour Onboarding & Tooling Integration',
      'Dedicated Timezone Overlap (Middle East, EU, US)',
      'Transparent Weekly Timesheet & Sprint Output Reporting',
    ],
    process: ['Role Brief', 'Technical Screening', 'Client Interviews', 'Onboarding', 'Sprint Integration'],
    useCases: [
      'Rapidly scaling development capacity for mission-critical launches',
      'Plugging niche technical skill gaps (AI/ML, Kubernetes, Rust, Python)',
      'Managing surge workloads without increasing permanent headcount',
      'Extending onshore team capacity with high-velocity offshore engineering',
    ],
    businessValue: [
      'Add capacity in weeks, not quarters',
      'Access specialist skills on demand',
      'Reduce recruiting overhead and risk',
    ],
    ctaLabel: 'Augment Your Team',
  },
  {
    id: 'contract-to-hire',
    category: 'manpower',
    title: 'Contract-to-Hire (Try Before You Hire)',
    shortTitle: 'Contract-to-Hire',
    description:
      'De-risk long-term talent acquisition through trial-based project execution before permanent contract conversion.',
    detailedOverview:
      'Evaluate technical execution, communication depth, and architectural problem-solving on live production tickets before making a permanent hiring commitment. Girakee identifies, vets, and embeds elite engineering talent into your organization on a defined trial basis. When you are ready to transition the engineer to your permanent in-house payroll, we facilitate an effortless, transparent commercial conversion with zero operational friction.',
    technologies: ['Full-Stack', 'AI/ML', 'Cloud', 'QA', 'Data', 'Mobile'],
    path: '/contract-to-hire',
    overview:
      'De-risk long-term talent acquisition through trial-based project execution before permanent contract conversion.',
    capabilities: [
      'Pre-vetted candidate pipeline',
      'Defined trial periods',
      'Performance reviews during contract',
      'Seamless payroll conversion',
      'Replacement during trial',
      'Role-specific technical screens',
    ],
    deliverables: [
      'Comprehensive Candidate Technical Dossier & Benchmark Scorecards',
      'Structured Trial Evaluation Criteria & Performance Milestones',
      'Monthly Code Quality & Peer Review Assessments',
      'Transparent, Seamless Full-Time Transition Framework',
    ],
    process: ['Role Definition', 'Screening', 'Contract Placement', 'Performance Review', 'Conversion'],
    useCases: [
      'De-risking senior architecture and lead developer placements',
      'Building permanent internal engineering teams through proven trials',
      'Validating culture and code standards prior to long-term relocation/hire',
      'Mitigating the cost and disruption of senior-level mis-hires',
    ],
    businessValue: [
      'See real output before you hire',
      'Lower mis-hire cost',
      'Faster path from need to productive engineer',
    ],
    ctaLabel: 'Explore Contract-to-Hire',
  },
  {
    id: 'it-recruitment',
    category: 'manpower',
    title: 'Specialized Tech Search & Talent Placement',
    shortTitle: 'Tech Search',
    description:
      'Engineer-led technical recruitment delivering production-tested software leaders and niche engineering specialists.',
    detailedOverview:
      'Traditional recruitment agencies filter resumes using generic keyword searches; Girakee assesses candidates through rigorous technical evaluations conducted by active engineering practitioners. We source, screen, and validate senior developers, engineering managers, and deep-tech specialists through live architecture reviews and coding assessments. You receive a curated shortlist of finalists with verified technical competency, eliminating screening overhead and reducing time-to-hire.',
    technologies: ['Technical Screening', 'Full-Stack', 'AI/ML', 'Cloud', 'DevOps', 'QA'],
    path: '/recruitment',
    overview:
      'Engineer-led technical recruitment delivering production-tested software leaders and niche engineering specialists.',
    capabilities: [
      'Role and scorecard design',
      'Active and passive sourcing',
      'Live technical interviews',
      'Culture and communication screens',
      'Offer and joining coordination',
      'Replacement support window',
    ],
    deliverables: [
      'Practitioner-Validated Technical Scorecards & Code Repositories',
      'Pre-Screened Candidate Shortlists with Comparative Benchmarks',
      'Reference Checks & Detailed Candidate Background Dossiers',
      'Complete Offer Structuring, Negotiation & Notice-Period Tracking',
    ],
    process: ['Intake Brief', 'Sourcing', 'Technical Screen', 'Client Interviews', 'Offer & Joining'],
    useCases: [
      'Sourcing mission-critical Staff/Principal Engineers & Tech Leads',
      'Assembling specialized Applied AI, Data Science & DevOps teams',
      'Executive engineering searches (CTO, VP of Engineering, Head of QA)',
      'Multi-role expansion for high-growth enterprise initiatives',
    ],
    businessValue: [
      'Higher signal than CV screening alone',
      'Shorter time-to-offer on technical roles',
      'Fewer interviews wasted on weak fits',
    ],
    ctaLabel: 'Initiate Tech Search',
  },
  {
    id: 'corporate-training',
    category: 'training',
    title: 'Corporate Upskilling & Enterprise Bootcamps',
    shortTitle: 'Corporate Upskilling',
    description:
      'Bespoke technical capability programs designed around your active tech stack and led by practicing software architects.',
    detailedOverview:
      'Accelerate team capability and modernize your internal engineering practices. Girakee delivers customized enterprise workshops and hands-on bootcamps for engineering teams transitioning to advanced stacks—including Applied AI, Cloud-Native DevOps, and QA Automation. Led by delivery leads rather than slide-deck lecturers, each module includes production-mirror labs, architecture design sessions, and capstone implementations aligned with your engineering roadmap.',
    technologies: ['AI/ML', 'Full-Stack', 'Cloud', 'DevOps', 'QA', 'Python'],
    path: '/corporate-training',
    overview:
      'Bespoke technical capability programs designed around your active tech stack and led by practicing software architects.',
    capabilities: [
      'Custom curriculum design',
      'Practitioner-led workshops',
      'Hands-on labs on real stacks',
      'Team capstone projects',
      'Skills assessment',
      'On-site or remote delivery',
    ],
    deliverables: [
      'Enterprise Skills-Gap Audit & Tailored Curriculum Blueprint',
      'Dedicated Sandboxed Cloud Lab Environments',
      'Production-Mirror Capstone Projects & Code Reviews',
      'Comprehensive Capability & Upskilling Benchmark Report',
    ],
    process: ['Needs Assessment', 'Curriculum Design', 'Workshops & Labs', 'Capstone', 'Assessment & Report'],
    useCases: [
      'Transitioning traditional software teams to Applied AI & LLM workflows',
      'Modernizing manual testing teams into automated SDET/QA frameworks',
      'Accelerating DevOps adoption, Kubernetes orchestration, and CI/CD',
      'Standardizing architectural best practices across distributed squads',
    ],
    businessValue: [
      'Raise team skill without a long hiring cycle',
      'Training that maps to your actual stack',
      'Shared language and practices across squads',
    ],
    ctaLabel: 'Request Corporate Training Plan',
  },
  {
    id: 'on-job-training',
    category: 'training',
    title: 'On-the-Job Training (6-Month Post-Graduate Program)',
    shortTitle: '6-Month OJT',
    description:
      'A 6-month intensive engineering residency for recent graduates to gain verifiable production experience on live enterprise systems.',
    detailedOverview:
      "Designed for recent engineering and computer science graduates seeking their first enterprise software role, Girakee's 6-Month On-the-Job Training (OJT) bridges the industry readiness gap. Residents are hired into our Bengaluru delivery center, assigned a dedicated senior engineering mentor, and tasked with real sprint tickets across full-stack, cloud, and AI workstreams. Participants build an authentic production portfolio, participate in daily agile ceremonies, and earn a verifiable 6-month experience certificate with a monthly stipend.",
    technologies: ['Python', 'React', 'TypeScript', 'Cloud', 'AI/ML', 'QA'],
    path: '/on-job-training',
    overview:
      'A 6-month intensive engineering residency for recent graduates to gain verifiable production experience on live enterprise systems.',
    capabilities: [
      '6-month on-the-job training',
      'Live industry project work',
      'Sprint rituals and code review',
      'Assigned senior mentor',
      'Experience letter on completion',
      'Monthly learning stipend',
    ],
    deliverables: [
      '6 Months of Verifiable Corporate Work Experience & Official Experience Letter',
      'Guaranteed Monthly Learning Stipend throughout the program',
      'Daily Code Reviews, Sprint Rituals & Git/Jira Workflow Exposure',
      'Live Architectural Portfolio & Technical Profile Endorsement',
    ],
    process: ['Apply & Assess', 'Track Assignment', 'Team Onboarding', 'Mentored Delivery', 'Experience Letter'],
    useCases: [
      'Engineering microservice APIs and responsive React/Next.js interfaces',
      'Building automated CI/CD deployment pipelines on AWS/Azure',
      'Implementing automated Selenium/Playwright testing suites',
      'Assisting in computer vision dataset preparation and model testing',
    ],
    businessValue: [
      'Job-ready engineers, not theory-only graduates',
      'Documented industry experience',
      'Faster ramp into a first engineering role',
    ],
    ctaLabel: 'Apply for 6-Month Incubation',
  },
  {
    id: 'internship',
    category: 'training',
    title: 'Online Student Internship (3-Month Track)',
    shortTitle: '3-Month Internship',
    description:
      'A flexible 3-month structured internship for pre-final and final-year college students to build hands-on software development skills.',
    detailedOverview:
      "Gain real-world engineering exposure alongside your academic studies. Girakee's 3-Month Online Internship is structured specifically for college students looking to build practical software foundations. Participants work through progressive milestone-driven modules—spanning web development, Python automation, and cloud fundamentals—under the weekly guidance of active developers. Successful completers receive an official internship completion letter and a verified capstone project to power their placement interviews.",
    technologies: ['Python', 'React', 'TypeScript', 'Cloud', 'AI/ML', 'Computer Vision'],
    path: '/internship',
    overview:
      'A flexible 3-month structured internship for pre-final and final-year college students to build hands-on software development skills.',
    capabilities: [
      '3-month structured internship',
      'Weekly mentor feedback',
      'Milestone-driven modules',
      'Hosted GitHub capstone',
      'Internship completion certificate',
      'Flexible remote schedule',
    ],
    deliverables: [
      'Official 3-Month Internship Completion Certificate',
      'Structured Weekly Milestone Track with Mentor Feedback',
      'Hosted GitHub Capstone Project for Campus Placements',
      'Flexible Remote Schedule Designed Around College Classes',
    ],
    process: ['Apply & Assess', 'Track Assignment', 'Mentored Modules', 'Capstone Build', 'Certificate'],
    useCases: [
      'Full-stack web application development (Node.js, React, databases)',
      'Scripting, web scraping, and data processing automation in Python',
      'Front-end UI component design and responsive layout implementation',
      'Core API development and database integration',
    ],
    businessValue: [
      'Practical software foundations alongside college',
      'Verified capstone for campus placements',
      'Official internship completion letter',
    ],
    ctaLabel: 'Apply for 3-Month Internship',
  },
]

const isListed = (s: Service) => s.listed !== false

export const softwareServices = services.filter((s) => s.category === 'software' && isListed(s))
export const manpowerServices = services.filter((s) => s.category === 'manpower' && isListed(s))
export const trainingServices = services.filter((s) => s.category === 'training' && isListed(s))
