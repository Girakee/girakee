export const team = [
  {
    initials: 'DL',
    name: 'Delivery leads',
    role: 'Named owners',
    focus: 'Client rituals, risk, and sprint outcomes in your language.',
  },
  {
    initials: 'FS',
    name: 'Full-stack engineers',
    role: 'Product engineering',
    focus: 'Web and mobile systems that ship in production, not demos.',
  },
  {
    initials: 'AI',
    name: 'AI engineers',
    role: 'Models and agents',
    focus: 'ML, automation, and intelligent QA on live data.',
  },
  {
    initials: 'CL',
    name: 'Cloud engineers',
    role: 'Platform and DevOps',
    focus: 'AWS, Azure, GCP, Kubernetes, and CI/CD you can inspect.',
  },
  {
    initials: 'QA',
    name: 'Quality engineers',
    role: 'Test and validation',
    focus: 'Automation, drawing validation, and release gates.',
  },
  {
    initials: 'MN',
    name: 'Mentors',
    role: 'Training',
    focus: 'Internships and on job training on the same delivery work.',
  },
]

export interface Job {
  id: string
  title: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  applySubject?: string
  about?: string
  overview?: string
  portfolio?: string[]
  commercial?: string[]
  howToApply?: string
}

export const jobs: Job[] = [
  {
    id: 'bd-partner-uae',
    title: 'Business Development Partner – Middle East (Enterprise Tech & AI Solutions)',
    location: 'Dubai / Abu Dhabi, UAE (Hybrid / Remote / Commission-Based Consultancy)',
    type: 'Strategic Channel Partner / Commission-Based Contractor',
    applySubject: 'BD Partner – UAE Application',
    about:
      'Girakee Software Services Private Limited is an enterprise software engineering consultancy and deep-tech incubator headquartered in Bengaluru, India. We architect high-concurrency digital platforms, applied AI & computer vision pipelines, zero-trust cloud infrastructure, and autonomous delivery pods for international scale-ups and global enterprises.',
    overview:
      'We are seeking an entrepreneurial Business Development Partner based in the UAE to originate and secure enterprise digital transformation contracts, technical workforce solutions, and proprietary software engagements across the GCC region. You will bridge regional decision-makers (CTOs, CIOs, and Digital Transformation Heads) with our offshore delivery center in Bengaluru, backed directly by our senior technical architects.',
    summary:
      'Originate enterprise digital transformation, workforce, and proprietary software engagements across the UAE and GCC, backed by Girakee architects in Bengaluru.',
    responsibilities: [
      'Originate Opportunities: Leverage your professional network across the UAE and GCC to identify organizations requiring custom platform engineering, cloud migration, AI/vision automation, or dedicated engineering squads.',
      'Executive Introductions: Secure discovery meetings with C-level executives, VP Engineering leaders, and procurement directors.',
      'Deal Structuring: Partner with Girakee’s Principal Architects to pitch tailored technical solutions, scope deliverables, and close multi-quarter service contracts.',
      'Account Relationship Management: Serve as the trusted local relationship partner while our delivery squads execute sprint lifecycles.',
    ],
    portfolio: [
      'Autonomous Delivery Pods & Workforce Solutions: Managed engineering squads, senior staff augmentation, and contract-to-hire frameworks.',
      'Core Engineering Disciplines: Web/mobile platforms, applied AI & computer vision, zero-trust cybersecurity, cloud DevOps, and automated QA.',
      'Proprietary Products: Rozgar.ai (autonomous AI digital employee for HR operations) and Intelligent Vision QA Studio (CAD blueprint validation).',
    ],
    requirements: [
      '5+ years of B2B sales, technology consulting, or enterprise agency experience within the UAE/GCC market.',
      'Proven network among tech founders, CIOs, CTOs, and digital decision-makers across retail, logistics, real estate, fintech, or government-backed entities.',
      'Clear understanding of software delivery models (offshore pods, fixed-scope sprints, T&M staffing).',
      'Strong executive communication and negotiation skills.',
    ],
    commercial: [
      'High Commission Structure: Substantial uncapped revenue share on originating deal value and recurring sprint contracts.',
      'Full Technical Presales Support: Direct collaboration with Girakee’s engineering leadership for client demos, RFPs, and architecture blueprints.',
      'Flexible Engagement: Non-exclusive partnership structure suitable for independent consultants or established agency directors.',
    ],
    howToApply:
      'Send your professional profile or LinkedIn credentials to connect@girakee.com with the subject line "BD Partner – UAE Application".',
  },
  {
    id: 'bd-partner-dach',
    title: 'Business Development Partner – DACH Region (IT Services & Enterprise Engineering)',
    location: 'Germany (Burghausen / Munich / Frankfurt / Berlin – Remote / Hybrid)',
    type: 'Strategic Sales Partner / Commercial Representative (Freie Mitarbeit / Revenue Share)',
    applySubject: 'BD Partner – DACH Application',
    about:
      'Girakee Software Services Private Limited is a Bengaluru-based software engineering consultancy and incubation firm. We build production-grade web and mobile applications, deep-tech AI & computer vision engines, automated QA frameworks, and dedicated engineering pods for enterprises seeking cost-efficient, high-velocity offshore engineering.',
    overview:
      'We are engaging a Business Development Partner in Germany to spearhead client acquisition across the DACH region (Germany, Austria, Switzerland). You will position Girakee as an agile offshore engineering partner for mid-sized enterprises (Mittelstand) and tech scale-ups facing domestic developer shortages, high hiring friction, and complex cloud/AI modernization requirements.',
    summary:
      'Spearhead Girakee client acquisition across Germany, Austria, and Switzerland for dedicated pods, deep-tech engineering, and proprietary software.',
    responsibilities: [
      'Market Origination: Identify and engage DACH-based technical directors, product owners, and CTOs seeking dedicated engineering capacity or deep-tech transformation.',
      'Client Engagement: Position Girakee’s delivery models to address regional engineering shortages under transparent, SLA-backed frameworks.',
      'Collaborative Solutioning: Facilitate introductory discovery calls alongside our Bengaluru architecture leads to review technical requirements, security baselines, and sprint plans.',
      'Commercial Closing: Guide negotiations through client onboarding, statement-of-work (SOW) execution, and long-term delivery extensions.',
    ],
    portfolio: [
      'Dedicated Engineering Pods: Fully managed, cross-functional squads (Full-stack, QA, Lead, DevOps) operating on 2-week agile sprints.',
      'Enterprise Engineering Disciplines: Cloud-native architecture (Kubernetes, AWS/Azure/GCP), Zero-Trust DevSecOps, applied computer vision, and data lakehouses.',
      'Proprietary Software Solutions: Rozgar.ai (agentic HR workflow automation) and CAD schematic verification platforms.',
    ],
    requirements: [
      'Based in Germany with native/fluent German and professional English proficiency.',
      '5+ years of experience in IT services sales, software consulting, or commercial B2B agency representation in the DACH territory.',
      'Established access to decision-makers within German tech companies, industrial/automotive firms, or enterprise software providers.',
      'Familiarity with EU data privacy expectations (GDPR compliance) and standard offshore delivery governance.',
    ],
    commercial: [
      'Uncapped Revenue Share: Highly competitive commission paid on initial contract value and recurring monthly sprint billings.',
      'Dedicated Delivery Support: Direct backing from our senior engineering management for RFPs, technical proposals, and solution architectures.',
      'Autonomous Structure: Flexible, independent contract model (Freier Mitarbeiter / Handelsvertreter) ideal for experienced tech sales executives and independent advisors.',
    ],
    howToApply:
      'Send your CV or LinkedIn profile to connect@girakee.com with the subject line "BD Partner – DACH Application".',
  },
  {
    id: 'full-stack-engineer',
    title: 'Full-Stack Engineer',
    location: 'Rajajinagar, Bengaluru',
    type: 'Full-time',
    summary:
      'Build web and mobile products for clients in the US, UK, EU, and Middle East. You own features from design review through production.',
    responsibilities: [
      'Ship React, TypeScript, and Node services with code review and CI.',
      'Work inside client repos, standups, and release cadence.',
      'Pair with design, QA, and a named delivery lead on each engagement.',
      'Write tests and keep documentation current with the system.',
    ],
    requirements: [
      'Strong TypeScript and at least one of React, Node, or a comparable stack.',
      'Experience shipping production software, not only coursework.',
      'Clear written communication in English.',
      'Comfort working with overseas product owners.',
    ],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / ML Engineer',
    location: 'Rajajinagar, Bengaluru',
    type: 'Full-time',
    summary:
      'Design and run production ML, OCR, and agent workflows. Intelligent QA and automation sit in the same practice.',
    responsibilities: [
      'Train, evaluate, and deploy models with measurable quality bars.',
      'Build inference APIs and validation pipelines with audit trails.',
      'Work with Python, PyTorch or equivalent, and cloud GPU or CPU runtimes.',
      'Escalate exceptions with evidence instead of silent failures.',
    ],
    requirements: [
      'Hands-on ML or computer vision work that ran in production or a serious lab.',
      'Python fluency and comfort with data pipelines.',
      'Ability to explain model limits to non-ML engineers.',
      'Interest in rule engines and quality systems, not only notebooks.',
    ],
  },
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud & DevOps Engineer',
    location: 'Rajajinagar, Bengaluru',
    type: 'Full-time',
    summary:
      'Own cloud architecture, Kubernetes, IaC, and CI/CD for products we build and for client platforms we operate.',
    responsibilities: [
      'Design AWS, Azure, or GCP environments with cost and security in view.',
      'Automate build, test, and release with GitHub Actions, GitLab CI, or equivalent.',
      'Support Zero Trust and IAM work with the cybersecurity practice.',
      'Write runbooks and keep production observable.',
    ],
    requirements: [
      'Production experience on at least one major cloud.',
      'Infrastructure as code (Terraform, Bicep, or similar).',
      'Linux, containers, and networking fundamentals.',
      'Calm incident response and clear status writing.',
    ],
  },
  {
    id: 'quality-engineer',
    title: 'Quality Engineer',
    location: 'Rajajinagar, Bengaluru',
    type: 'Full-time',
    summary:
      'Automate testing and intelligent QA for engineering and product systems, including drawing and document validation.',
    responsibilities: [
      'Build API, UI, and performance test suites in the delivery pipeline.',
      'Partner with Intelligent QA on rule engines and visual inspection.',
      'Own release sign-off evidence, not last-minute manual clicks.',
      'Report defects with reproduction steps and risk.',
    ],
    requirements: [
      'Test automation experience (Playwright, Cypress, pytest, or similar).',
      'API testing and a working knowledge of CI.',
      'Attention to specification and edge cases.',
      'Willingness to learn vision and OCR pipelines.',
    ],
  },
  {
    id: 'software-intern',
    title: 'Software Intern',
    location: 'Rajajinagar, Bengaluru',
    type: 'Internship · 6 months',
    summary:
      'Six months on live industry projects. Write production code, sit in reviews, and leave with an experience letter.',
    responsibilities: [
      'Join a delivery squad and take tickets under a named mentor.',
      'Participate in standups, code review, and sprint demos.',
      'Complete a track in web, AI, cloud, or quality.',
      'Document the work you owned for the experience letter.',
    ],
    requirements: [
      'Fundamentals in programming and a willingness to ship.',
      'Availability for a six-month on-site internship in Bengaluru.',
      'Curiosity, reliability, and clear communication.',
      'A small project, GitHub, or coursework you can walk through.',
    ],
  },
]

export function jobApplyHref(title: string, subject?: string): string {
  const encodedSubject = encodeURIComponent(subject ?? `Application: ${title}`)
  const body = encodeURIComponent(
    `I am applying for ${title} at Girakee.\n\nName:\nPhone:\nLinkedIn or portfolio:\n\nNote:\n`,
  )
  return `mailto:connect@girakee.com?subject=${encodedSubject}&body=${body}`
}
