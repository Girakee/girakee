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

export const jobs = [
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

export function jobApplyHref(title: string): string {
  const subject = encodeURIComponent(`Application: ${title}`)
  const body = encodeURIComponent(
    `I am applying for ${title} at Girakee.\n\nName:\nPhone:\nLinkedIn or portfolio:\n\nNote:\n`,
  )
  return `mailto:connect@girakee.com?subject=${subject}&body=${body}`
}
