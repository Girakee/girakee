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
}

export const services: Service[] = [
  {
    id: 'web-mobile',
    category: 'software',
    title: 'Web & Mobile App Development',
    shortTitle: 'Web & Mobile',
    description:
      'We build high-performance, custom web and mobile apps that enhance user engagement and digitize core business functions globally.',
    detailedOverview:
      'From discovery workshops through production deployment, our engineering teams design and ship web platforms, native mobile applications, and progressive web apps. We work in agile sprints with continuous integration, code review, and architecture documentation, so your product scales cleanly as usage grows.',
    technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
    path: '/web-mobile-development',
    overview:
      'End-to-end product engineering for web and mobile, from architecture and APIs to polished, production-ready applications deployed at scale.',
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
    category: 'software',
    title: 'Artificial Intelligence & ML',
    shortTitle: 'AI & ML',
    description:
      'Deploying predictive AI and RPA to automate workflows, we transform data into actionable insights, driving maximum operational efficiency.',
    detailedOverview:
      'We engineer machine learning systems that survive production, not notebook prototypes. Our teams build data pipelines, train and evaluate models, deploy inference APIs, and implement monitoring for drift and performance. From classical ML to generative AI and agentic workflows, we integrate intelligence where it creates measurable operational value.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'FastAPI', 'MLflow', 'Kubernetes'],
    path: '/ai-engineering',
    overview:
      'Production AI systems, predictive models, intelligent automation, agentic workflows, and MLOps pipelines built for enterprise operations.',
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
    id: 'cloud-devops',
    category: 'software',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud & DevOps',
    description:
      'We deliver flexible, scalable cloud infrastructure (AWS/Azure/GCP) to ensure high availability and optimal cost management worldwide.',
    detailedOverview:
      'We architect cloud-native systems on AWS, Azure, and GCP with infrastructure as code, container orchestration, and automated CI/CD. Our DevOps engineers implement observability stacks, disaster recovery patterns, and cost governance, so your platform stays reliable under load without runaway cloud spend.',
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
    category: 'software',
    title: 'Cybersecurity',
    shortTitle: 'Cybersecurity',
    description:
      'Integrated, AI-driven security defenses and Zero Trust architecture proactively safeguard your data, ensuring robust compliance and protection.',
    detailedOverview:
      'Security is embedded across the software lifecycle, not bolted on at the end. We implement Zero Trust principles, identity and access management, secrets management, vulnerability assessment, and security automation within your cloud and application stack. Our approach aligns with common compliance frameworks while keeping systems practical to operate.',
    technologies: ['Zero Trust', 'OAuth 2.0', 'Vault', 'SIEM', 'AWS Security', 'Azure Security', 'OWASP'],
    path: '/cybersecurity',
    overview:
      'Security embedded across your stack, from architecture and identity to threat detection, compliance, and incident response.',
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
    category: 'software',
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
  },
  {
    id: 'software-testing',
    category: 'software',
    title: 'Software Testing & QA',
    shortTitle: 'Testing & QA',
    description:
      'Rigorous testing guarantees bug-free functionality, peak performance, and long-term reliability for your digital investments.',
    detailedOverview:
      'Quality engineering is integrated throughout the development lifecycle. We build automated test suites with Selenium, Cypress, and Playwright; run performance and load tests; validate APIs; and establish regression pipelines in CI. Manual exploratory testing complements automation to catch edge cases that scripts miss.',
    technologies: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'Pytest', 'Jenkins', 'k6', 'Postman'],
    path: '/software-testing',
    overview:
      'Comprehensive quality engineering, manual and automated testing, performance validation, and continuous quality across the SDLC.',
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
    category: 'software',
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
  },
  {
    id: 'data-analytics',
    category: 'software',
    title: 'Data Analytics & BI',
    shortTitle: 'Data & BI',
    description:
      'Transforming raw data into strategic business intelligence using advanced visualization and reporting to guide smart decision-making.',
    detailedOverview:
      'We build data platforms that turn operational data into actionable insight. From ETL/ELT pipelines and data warehousing on Snowflake, BigQuery, or Redshift to interactive dashboards in Tableau and Power BI, our data engineers ensure your teams can query, visualize, and trust their numbers.',
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
    id: 'staff-augmentation',
    category: 'manpower',
    title: 'Time and Material',
    shortTitle: 'Time and Material',
    description:
      'Add pre-vetted engineers to your team within weeks. Full-stack, AI, cloud, QA, and data professionals who work inside your tools, sprints, and time zone overlap.',
    detailedOverview:
      'Girakee staff augmentation places screened engineers inside your existing squads. You keep product ownership and delivery rhythm. We handle sourcing, technical interviews, onboarding, and ongoing performance management from Bengaluru. Engineers join your Slack, Jira, Git, and standups as an extension of your team, not a separate vendor silo.',
    technologies: ['Full-Stack', 'AI/ML', 'Cloud', 'DevOps', 'Mobile', 'QA', 'Data Engineering'],
    path: '/time-and-material',
    overview:
      'Flexible engineer augmentation with rigorous technical vetting, timezone overlap, and continuous performance support from Bengaluru.',
    capabilities: [
      'Full-stack developers',
      'AI and ML engineers',
      'Cloud and DevOps specialists',
      'QA and test automation',
      'Data engineers and analysts',
      'UI/UX and mobile engineers',
    ],
    deliverables: [
      'Role-specific candidate shortlists',
      'Technical assessment reports',
      'Onboarding and integration plan',
      'Weekly progress reporting',
      'Replacement guarantee window',
      'Knowledge transfer notes',
    ],
    process: ['Role Brief', 'Technical Screening', 'Client Interviews', 'Onboarding', 'Sprint Integration'],
    useCases: [
      'Scale a product squad for a launch window',
      'Fill a specialist gap in AI, cloud, or QA',
      'Cover peak delivery without permanent headcount',
      'Extend an onshore team with Bengaluru overlap',
    ],
    businessValue: [
      'Add capacity in weeks, not quarters',
      'Access specialist skills on demand',
      'Reduce recruiting overhead and risk',
    ],
  },
  {
    id: 'dedicated-teams',
    category: 'manpower',
    title: 'Managed Services',
    shortTitle: 'Managed Services',
    description:
      'A complete delivery pod with engineers, QA, and a delivery lead who own a product or workstream under your roadmap and SLAs.',
    detailedOverview:
      'A dedicated Girakee team is a standing squad aligned to one product, platform, or workstream. You get a delivery lead, engineers, and QA who already work together. We run sprint planning, demos, and reporting while you set priorities. This model suits companies that want outcome ownership without building a full local hiring pipeline.',
    technologies: ['Product Delivery', 'Agile', 'Full-Stack', 'Cloud', 'QA', 'DevOps'],
    path: '/managed-services',
    overview:
      'Cross-functional pods that own delivery, quality, and communication for a defined product or engineering workstream.',
    capabilities: [
      'Cross-functional squads',
      'Embedded delivery lead',
      'Sprint planning and reporting',
      'QA and release ownership',
      'Architecture support',
      'SLA-backed operations',
    ],
    deliverables: [
      'Team composition and RACI',
      'Delivery playbook and rituals',
      'Sprint reports and burndown',
      'Release notes and runbooks',
      'Architecture and decision logs',
      'Quarterly capacity plan',
    ],
    process: ['Scope Alignment', 'Team Assembly', 'Kickoff & Tooling', 'Sprint Delivery', 'Quarterly Review'],
    useCases: [
      'Own a product line from Bengaluru',
      'Run a platform or integration workstream',
      'Replace a fragmented contractor mix with one pod',
      'Build a long-term offshore engineering centre',
    ],
    businessValue: [
      'Predictable delivery capacity',
      'One accountable team, not scattered contractors',
      'Lower management load on your internal leads',
    ],
  },
  {
    id: 'contract-to-hire',
    category: 'manpower',
    title: 'Contract to Hire',
    shortTitle: 'Contract to Hire',
    description:
      'Evaluate engineers on live work before you hire. Start on contract, convert top performers to your payroll when the fit is proven.',
    detailedOverview:
      'Contract-to-hire lets you validate skill, communication, and culture on real tickets before a permanent offer. Girakee sources and vets candidates, places them on your project for a defined trial, and supports a clean conversion when you are ready. You avoid resume-only hiring and we handle the commercial transition.',
    technologies: ['Full-Stack', 'AI/ML', 'Cloud', 'QA', 'Data', 'Mobile'],
    path: '/contract-to-hire',
    overview:
      'A lower-risk path to permanent hiring: contract engagement first, conversion when performance is proven on your codebase.',
    capabilities: [
      'Pre-vetted candidate pipeline',
      'Defined trial periods',
      'Performance reviews during contract',
      'Seamless payroll conversion',
      'Replacement during trial',
      'Role-specific technical screens',
    ],
    deliverables: [
      'Screened candidate pack',
      'Trial success criteria',
      'Monthly performance notes',
      'Conversion commercial terms',
      'Handover and IP checklist',
      'Onboarding support into your HR process',
    ],
    process: ['Role Definition', 'Screening', 'Contract Placement', 'Performance Review', 'Conversion'],
    useCases: [
      'Hire senior engineers without a blind offer',
      'Build a local team using a proven trial',
      'Validate a new capability area before headcount',
      'Reduce mis-hire risk on specialist roles',
    ],
    businessValue: [
      'See real output before you hire',
      'Lower mis-hire cost',
      'Faster path from need to productive engineer',
    ],
  },
  {
    id: 'it-recruitment',
    category: 'manpower',
    title: 'Recruitment',
    shortTitle: 'Recruitment',
    description:
      'Permanent hiring support for software, AI, cloud, and QA roles. We source, screen, and present only candidates who can do the work.',
    detailedOverview:
      'Girakee IT recruitment is built by engineers, not a generic staffing desk. We write practical screens, run live coding or system-design interviews, and present a short list with evidence. Roles span product engineering, AI, DevOps, data, and quality. You interview finalists. We coordinate offers, notice periods, and joining.',
    technologies: ['Technical Screening', 'Full-Stack', 'AI/ML', 'Cloud', 'DevOps', 'QA'],
    path: '/recruitment',
    overview:
      'Engineer-led permanent recruitment for technology roles, from sourcing through technical screening and offer support.',
    capabilities: [
      'Role and scorecard design',
      'Active and passive sourcing',
      'Live technical interviews',
      'Culture and communication screens',
      'Offer and joining coordination',
      'Replacement support window',
    ],
    deliverables: [
      'Hiring scorecard',
      'Sourced candidate pipeline',
      'Interview notes and score',
      'Shortlist with evidence',
      'Offer pack support',
      'Joining and warranty terms',
    ],
    process: ['Intake Brief', 'Sourcing', 'Technical Screen', 'Client Interviews', 'Offer & Joining'],
    useCases: [
      'Fill a critical senior engineering seat',
      'Stand up a new AI or platform team',
      'Replace a failed agency search',
      'Hire multiple roles against a quarter plan',
    ],
    businessValue: [
      'Higher signal than CV screening alone',
      'Shorter time-to-offer on technical roles',
      'Fewer interviews wasted on weak fits',
    ],
  },
  {
    id: 'internship',
    category: 'training',
    title: 'Internship',
    shortTitle: 'Internship',
    description:
      'Six months on live industry projects. Write production code, sit in reviews, and graduate with an experience letter that documents real work.',
    detailedOverview:
      'The Girakee internship is on-the-job training, not a classroom course. Participants join live delivery teams in Bengaluru, contribute to production systems, and receive mentor feedback every sprint. Tracks cover AI and ML, computer vision, full-stack, cloud and DevOps, data, and cybersecurity. Completing the program includes an experience letter that records the projects and responsibilities you owned.',
    technologies: ['Python', 'React', 'TypeScript', 'Cloud', 'AI/ML', 'Computer Vision'],
    path: '/internship',
    overview:
      'A six-month OJT internship on live projects with senior mentors, code reviews, and a verifiable experience letter.',
    capabilities: [
      '6-month on-the-job training',
      'Live industry project work',
      'Sprint rituals and code review',
      'Assigned senior mentor',
      'Experience letter on completion',
      'Tracks in AI, web, cloud, and data',
    ],
    deliverables: [
      'Track assignment and learning plan',
      'Live project tickets',
      'Mentor feedback log',
      'Code review participation',
      'Skills assessment',
      'Experience letter',
    ],
    process: ['Apply & Assess', 'Track Assignment', 'Team Onboarding', 'Mentored Delivery', 'Experience Letter'],
    useCases: [
      'Graduate engineers who need production hours',
      'Career switchers entering software',
      'Students seeking a serious internship, not shadowing',
      'Companies sponsoring intern cohorts',
    ],
    businessValue: [
      'Job-ready engineers, not theory-only graduates',
      'Documented industry experience',
      'Faster ramp into a first engineering role',
    ],
  },
  {
    id: 'corporate-training',
    category: 'training',
    title: 'Corporate Training',
    shortTitle: 'Corporate Training',
    description:
      'Practitioner-led workshops for your existing team. Custom curriculum on AI, cloud, full-stack, QA, and delivery practices used in production.',
    detailedOverview:
      'Corporate training at Girakee is taught by engineers who ship systems, not professional trainers reading slides. We design a curriculum around your stack, codebase constraints, and skill gaps, then run workshops, labs, and capstone work on problems that look like your production environment. Programs can be delivered in Bengaluru, on-site, or remotely for global teams.',
    technologies: ['AI/ML', 'Full-Stack', 'Cloud', 'DevOps', 'QA', 'Python'],
    path: '/corporate-training',
    overview:
      'Custom capability programs for engineering teams, built around your stack and delivered by practitioners.',
    capabilities: [
      'Custom curriculum design',
      'Practitioner-led workshops',
      'Hands-on labs on real stacks',
      'Team capstone projects',
      'Skills assessment',
      'On-site or remote delivery',
    ],
    deliverables: [
      'Skills gap assessment',
      'Curriculum and schedule',
      'Lab environments',
      'Workshop materials',
      'Capstone review',
      'Team capability report',
    ],
    process: ['Needs Assessment', 'Curriculum Design', 'Workshops & Labs', 'Capstone', 'Assessment & Report'],
    useCases: [
      'Upskill a team moving to AI or cloud',
      'Standardize engineering practices across squads',
      'Prepare a team for a platform migration',
      'Build internal QA or DevOps capability',
    ],
    businessValue: [
      'Raise team skill without a long hiring cycle',
      'Training that maps to your actual stack',
      'Shared language and practices across squads',
    ],
  },
  {
    id: 'on-job-training',
    category: 'training',
    title: 'On Job Training',
    shortTitle: 'On Job Training',
    description:
      'Structured on-the-job training for working professionals and sponsored cohorts. Learn on live delivery with a mentor, not a classroom syllabus.',
    detailedOverview:
      'On Job Training at Girakee places participants inside live engineering work with a named mentor and a defined skill plan. It is built for people already in a role, or sponsored by an employer, who need production hours in AI, full-stack, cloud, or quality. You contribute to tickets, sit in reviews, and leave with a skills report and documented project work.',
    technologies: ['Python', 'React', 'TypeScript', 'Cloud', 'AI/ML', 'QA'],
    path: '/on-job-training',
    overview:
      'Mentor-led on-the-job training on live projects for working professionals and company-sponsored cohorts.',
    capabilities: [
      'Named mentor and skill plan',
      'Live delivery tickets',
      'Code review and sprint rituals',
      'Tracks in AI, web, cloud, and QA',
      'Skills assessment',
      'Employer-sponsored cohorts',
    ],
    deliverables: [
      'Skill plan and track assignment',
      'Live project tickets',
      'Mentor feedback log',
      'Skills assessment',
      'Project work record',
      'Completion report for the sponsor',
    ],
    process: ['Intake & Skill Plan', 'Team Placement', 'Mentored Delivery', 'Review Cycles', 'Completion Report'],
    useCases: [
      'Upskill existing engineers on production work',
      'Company-sponsored reskilling into AI or cloud',
      'Bridge from classroom knowledge to delivery',
      'Prepare a cohort before they join a client squad',
    ],
    businessValue: [
      'Skill that holds up in a sprint',
      'Faster ramp than classroom-only training',
      'Documented capability for the sponsor',
    ],
  },
]

export const softwareServices = services.filter((s) => s.category === 'software')
export const manpowerServices = services.filter((s) => s.category === 'manpower')
export const trainingServices = services.filter((s) => s.category === 'training')

