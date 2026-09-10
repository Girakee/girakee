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
}

export const services: Service[] = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile App Development',
    shortTitle: 'Web & Mobile',
    description:
      'We build high-performance, custom web and mobile apps that enhance user engagement and digitize core business functions globally.',
    detailedOverview:
      'From discovery workshops through production deployment, our engineering teams design and ship web platforms, native mobile applications, and progressive web apps. We work in agile sprints with continuous integration, code review, and architecture documentation — so your product scales cleanly as usage grows.',
    technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
    path: '/web-mobile-development',
    overview:
      'End-to-end product engineering for web and mobile — from architecture and APIs to polished, production-ready applications deployed at scale.',
    capabilities: [
      'Custom Web Applications',
      'iOS & Android Apps',
      'Progressive Web Apps',
      'API & Microservices',
      'System Integration',
      'Performance Optimization',
    ],
    deliverables: [
      'Technical architecture document',
      'Production-ready application codebase',
      'REST / GraphQL API layer',
      'CI/CD pipeline configuration',
      'Deployment runbooks',
      'Knowledge transfer sessions',
    ],
    process: ['Discovery & Scoping', 'UX / Architecture', 'Sprint Development', 'QA & Hardening', 'Launch & Handover'],
    useCases: [
      'Customer-facing portals and dashboards',
      'Internal operations and workflow tools',
      'B2B SaaS product development',
      'Legacy system modernization',
    ],
    businessValue: [
      'Digitize core business operations',
      'Improve customer engagement',
      'Accelerate time-to-market',
    ],
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & ML',
    shortTitle: 'AI & ML',
    description:
      'Deploying predictive AI and RPA to automate workflows, we transform data into actionable insights, driving maximum operational efficiency.',
    detailedOverview:
      'We engineer machine learning systems that survive production — not notebook prototypes. Our teams build data pipelines, train and evaluate models, deploy inference APIs, and implement monitoring for drift and performance. From classical ML to generative AI and agentic workflows, we integrate intelligence where it creates measurable operational value.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'FastAPI', 'MLflow', 'Kubernetes'],
    path: '/ai-engineering',
    overview:
      'Production AI systems — predictive models, intelligent automation, agentic workflows, and MLOps pipelines built for enterprise operations.',
    capabilities: [
      'Machine Learning',
      'Generative AI',
      'Robotic Process Automation',
      'Agentic AI',
      'MLOps & Model Deployment',
      'Predictive Analytics',
    ],
    deliverables: [
      'Trained and versioned models',
      'Inference API or batch pipeline',
      'Model monitoring dashboard',
      'Data preprocessing workflows',
      'MLOps CI/CD integration',
      'Technical documentation',
    ],
    process: ['Problem Framing', 'Data Assessment', 'Model Development', 'Validation & Testing', 'Production Deployment'],
    useCases: [
      'Document classification and extraction',
      'Predictive maintenance forecasting',
      'Intelligent process automation',
      'AI copilots for engineering teams',
    ],
    businessValue: [
      'Automate complex workflows',
      'Transform data into decisions',
      'Reduce operational overhead',
    ],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    shortTitle: 'Computer Vision',
    description:
      'Visual inspection, object detection, and engineering drawing analysis using production-grade vision pipelines.',
    detailedOverview:
      'Our computer vision practice combines YOLO-based detection, custom OCR, and rule-based validation engines for engineering and manufacturing environments. We build end-to-end pipelines — from image ingestion and preprocessing through model inference, measurement extraction, and deterministic pass/fail validation against specifications.',
    technologies: ['YOLOv8', 'YOLOv10', 'OpenCV', 'PyTorch', 'Custom OCR', 'FastAPI', 'ONNX'],
    path: '/computer-vision',
    overview:
      'End-to-end computer vision for detection, document understanding, and automated visual inspection in engineering environments.',
    capabilities: [
      'Object Detection',
      'Engineering Drawing Analysis',
      'Document Understanding',
      'Visual Inspection',
      'Custom OCR Pipelines',
      'Real-Time Inference',
    ],
    deliverables: [
      'Vision inference pipeline',
      'Detection and OCR models',
      'Validation rule engine',
      'Integration APIs',
      'Accuracy evaluation reports',
      'Edge or cloud deployment package',
    ],
    process: ['Sample Data Review', 'Model Training', 'OCR Tuning', 'Rule Configuration', 'Production Integration'],
    useCases: [
      'Engineering drawing validation',
      'Manufacturing visual inspection',
      'Technical document digitization',
      'Quality control automation',
    ],
    businessValue: [
      'Accelerate quality inspection',
      'Automate drawing validation',
      'Reduce manual visual review',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud & DevOps',
    description:
      'We deliver flexible, scalable cloud infrastructure (AWS/Azure/GCP) to ensure high availability and optimal cost management worldwide.',
    detailedOverview:
      'We architect cloud-native systems on AWS, Azure, and GCP with infrastructure as code, container orchestration, and automated CI/CD. Our DevOps engineers implement observability stacks, disaster recovery patterns, and cost governance — so your platform stays reliable under load without runaway cloud spend.',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
    path: '/cloud-devops',
    overview:
      'Cloud-native architecture, container orchestration, and DevOps automation for reliable, cost-efficient global delivery.',
    capabilities: [
      'Cloud Architecture',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Container Orchestration',
      'Cost Optimization',
      'Monitoring & Observability',
    ],
    deliverables: [
      'Cloud architecture blueprint',
      'Terraform / IaC modules',
      'Kubernetes manifests or Helm charts',
      'CI/CD pipeline setup',
      'Monitoring and alerting configuration',
      'Runbooks and incident playbooks',
    ],
    process: ['Infrastructure Audit', 'Architecture Design', 'IaC Implementation', 'Pipeline Setup', 'Observability & Handover'],
    useCases: [
      'Cloud migration and modernization',
      'Microservices deployment',
      'Multi-region high availability',
      'DevOps maturity acceleration',
    ],
    businessValue: [
      'High availability and resilience',
      'Faster, safer deployments',
      'Optimized cloud spend',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortTitle: 'Cybersecurity',
    description:
      'Integrated, AI-driven security defenses and Zero Trust architecture proactively safeguard your data, ensuring robust compliance and protection.',
    detailedOverview:
      'Security is embedded across the software lifecycle — not bolted on at the end. We implement Zero Trust principles, identity and access management, secrets management, vulnerability assessment, and security automation within your cloud and application stack. Our approach aligns with common compliance frameworks while keeping systems practical to operate.',
    technologies: ['Zero Trust', 'OAuth 2.0', 'Vault', 'SIEM', 'AWS Security', 'Azure Security', 'OWASP'],
    path: '/cybersecurity',
    overview:
      'Security embedded across your stack — from architecture and identity to threat detection, compliance, and incident response.',
    capabilities: [
      'Zero Trust Architecture',
      'Threat Detection & Response',
      'Identity & Access Management',
      'Compliance & Auditing',
      'Security Automation',
      'Penetration Testing',
    ],
    deliverables: [
      'Security architecture assessment',
      'IAM and access policy design',
      'Vulnerability scan reports',
      'Remediation roadmap',
      'Security automation scripts',
      'Compliance gap analysis',
    ],
    process: ['Security Assessment', 'Architecture Review', 'Implementation', 'Testing & Validation', 'Ongoing Monitoring'],
    useCases: [
      'Cloud security hardening',
      'Application security review',
      'Compliance preparation',
      'Incident response planning',
    ],
    businessValue: [
      'Protect critical assets',
      'Meet compliance requirements',
      'Reduce security risk proactively',
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Development',
    shortTitle: 'UI/UX',
    description:
      'Creating intuitive, aesthetically pleasing user interfaces that drive product adoption, maximize satisfaction, and improve conversion rates.',
    detailedOverview:
      'Our design practice pairs user research with front-end engineering. We create wireframes, interactive prototypes, and design systems in Figma, then implement responsive, accessible interfaces in React. Every screen is tested for usability, consistency, and performance — bridging the gap between design intent and production code.',
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Design Systems', 'WCAG', 'Storybook'],
    path: '/ui-ux-design',
    overview:
      'Research-driven design and front-end implementation — from wireframes and design systems to pixel-perfect, accessible interfaces.',
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
  },
  {
    id: 'software-testing',
    title: 'Software Testing & QA',
    shortTitle: 'Testing & QA',
    description:
      'Rigorous testing guarantees bug-free functionality, peak performance, and long-term reliability for your digital investments.',
    detailedOverview:
      'Quality engineering is integrated throughout the development lifecycle. We build automated test suites with Selenium, Cypress, and Playwright; run performance and load tests; validate APIs; and establish regression pipelines in CI. Manual exploratory testing complements automation to catch edge cases that scripts miss.',
    technologies: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'Pytest', 'Jenkins', 'k6', 'Postman'],
    path: '/software-testing',
    overview:
      'Comprehensive quality engineering — manual and automated testing, performance validation, and continuous quality across the SDLC.',
    capabilities: [
      'Test Automation',
      'Performance Testing',
      'Security Testing',
      'API Testing',
      'Continuous Integration',
      'UAT & Regression',
    ],
    deliverables: [
      'Test strategy document',
      'Automated test suites',
      'Performance test reports',
      'Bug tracking and triage',
      'CI test integration',
      'Release sign-off documentation',
    ],
    process: ['Test Planning', 'Automation Setup', 'Execution Cycles', 'Defect Management', 'Release Validation'],
    useCases: [
      'Regression automation for releases',
      'API contract validation',
      'Load and stress testing',
      'Pre-launch quality gates',
    ],
    businessValue: [
      'Ship with confidence',
      'Catch defects earlier',
      'Ensure long-term reliability',
    ],
  },
  {
    id: 'intelligent-qa',
    title: 'Intelligent QA',
    shortTitle: 'Intelligent QA',
    description:
      'AI-powered validation, automated rule engines, and intelligent quality assurance for complex engineering workflows.',
    detailedOverview:
      'Intelligent QA goes beyond traditional testing — we combine computer vision, OCR, and deterministic rule engines to validate engineering drawings, technical documents, and complex data outputs at scale. Automated validation pipelines integrate with your existing workflows, providing pass/fail decisions with full audit trails.',
    technologies: ['Python', 'YOLOv8', 'Custom OCR', 'Rule Engines', 'Jenkins', 'GitLab CI'],
    path: '/intelligent-qa',
    overview:
      'Quality engineering enhanced by AI — from automated drawing validation to deterministic rule engines and intelligent test generation.',
    capabilities: [
      'AI-Powered Validation',
      'Rule Engine Development',
      'Drawing & Document QA',
      'Test Intelligence',
      'Continuous Validation',
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
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    shortTitle: 'Data & BI',
    description:
      'Transforming raw data into strategic business intelligence using advanced visualization and reporting to guide smart decision-making.',
    detailedOverview:
      'We build data platforms that turn operational data into actionable insight. From ETL/ELT pipelines and data warehousing on Snowflake, BigQuery, or Redshift to interactive dashboards in Tableau and Power BI — our data engineers ensure your teams can query, visualize, and trust their numbers.',
    technologies: ['Python', 'SQL', 'Spark', 'Airflow', 'Tableau', 'Power BI', 'Snowflake', 'dbt'],
    path: '/data-analytics',
    overview:
      'Data pipelines, warehousing, and business intelligence platforms that turn operational data into strategic insight.',
    capabilities: [
      'Data Engineering',
      'Business Intelligence',
      'Data Warehousing',
      'ETL / ELT Pipelines',
      'Dashboards & Reporting',
      'Real-Time Analytics',
    ],
    deliverables: [
      'Data pipeline architecture',
      'ETL/ELT workflows',
      'Data warehouse schema',
      'Interactive dashboards',
      'Data quality checks',
      'Self-serve analytics setup',
    ],
    process: ['Data Discovery', 'Pipeline Design', 'Warehouse Build', 'Dashboard Development', 'Enablement & Training'],
    useCases: [
      'Executive reporting dashboards',
      'Operational KPI monitoring',
      'Data warehouse consolidation',
      'Real-time analytics feeds',
    ],
    businessValue: [
      'Data-driven decision making',
      'Operational visibility',
      'Strategic forecasting',
    ],
  },
  {
    id: 'talent-outsourcing',
    title: 'Talent Outsourcing',
    shortTitle: 'Talent',
    description:
      'Access highly skilled, vetted developers and IT professionals at unbeatable prices to scale your global team quickly.',
    detailedOverview:
      'Scale your engineering capacity with pre-vetted developers, QA engineers, DevOps specialists, and AI practitioners who integrate directly into your workflows. We provide staff augmentation, dedicated teams, and contract-to-hire models — with technical screening, timezone alignment, and ongoing performance management from Bengaluru.',
    technologies: ['Full-Stack', 'AI/ML', 'Cloud', 'DevOps', 'Mobile', 'Data Engineering'],
    path: '/talent-outsourcing',
    overview:
      'Flexible talent augmentation — dedicated engineers integrated into your workflows with rigorous technical vetting.',
    capabilities: [
      'Staff Augmentation',
      'Dedicated Engineering Teams',
      'Contract-to-Hire',
      'Technical Screening',
      'Global Delivery',
      'Flexible Engagement',
    ],
    deliverables: [
      'Vetted engineer profiles',
      'Technical assessment reports',
      'Onboarding and integration plan',
      'Weekly progress reporting',
      'Knowledge transfer documentation',
      'Flexible scaling options',
    ],
    process: ['Requirements Brief', 'Candidate Screening', 'Team Onboarding', 'Sprint Integration', 'Ongoing Management'],
    useCases: [
      'Rapid team scaling for product launches',
      'Specialized AI or cloud expertise',
      'Extended capacity for peak workloads',
      'Dedicated offshore engineering pod',
    ],
    businessValue: [
      'Scale engineering capacity fast',
      'Access specialized talent',
      'Reduce hiring overhead',
    ],
  },
  {
    id: 'corporate-training',
    title: 'Corporate Training',
    shortTitle: 'Training',
    description:
      'Stop learning. Start shipping real code. Six months of on-the-job training on live industry projects with an experience letter.',
    detailedOverview:
      'Our training programs are built by engineers who ship production systems daily. The flagship OJT program places participants on live industry projects for six months — writing real code, participating in code reviews, and delivering features alongside senior practitioners. Graduates receive an experience letter documenting their contributions.',
    technologies: ['AI/ML', 'Full-Stack', 'Cloud', 'DevOps', 'Computer Vision', 'Python'],
    path: '/training',
    overview:
      'Practitioner-led programs where engineers work on real production systems — not classroom theory. Graduate with verifiable industry experience.',
    capabilities: [
      '6-Month On-The-Job Training',
      'Live Industry Projects',
      'Experience Letter',
      'Corporate Workshops',
      'Technical Bootcamps',
      'Mentorship Programs',
    ],
    deliverables: [
      'Structured curriculum plan',
      'Live project assignments',
      'Mentor feedback sessions',
      'Code review participation',
      'Experience letter on completion',
      'Skills assessment report',
    ],
    process: ['Enrollment & Assessment', 'Project Assignment', 'Mentored Development', 'Code Reviews', 'Certification'],
    useCases: [
      'Graduate engineer upskilling',
      'Corporate team capability building',
      'Career transition into software engineering',
      'AI and cloud specialization tracks',
    ],
    businessValue: [
      'Build job-ready engineers',
      'Accelerate team capability',
      'Reduce ramp-up time',
    ],
  },
]
