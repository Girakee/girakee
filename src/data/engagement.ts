export interface EngagementModel {
  id: string
  title: string
  valueTitle: string
  shortDescription: string
  benefits: string[]
  details: string
}

export const engagementModels: EngagementModel[] = [
  {
    id: 'managed-services',
    title: 'Dedicated Engineering Pods',
    valueTitle: 'Full Squad Delivery Ownership',
    shortDescription: 'Full Squad Delivery Ownership',
    benefits: [
      'Dedicated technical lead, full-stack engineers, and QA',
      'End-to-end sprint velocity backed by defined SLAs',
      'Predictable monthly investment with zero overhead',
    ],
    details: 'Girakee deploys dedicated co-innovation engineering pods tailored to your product architecture, taking ownership of defined workstreams under transparent SLAs.',
  },
  {
    id: 'time-material',
    title: 'Staff Augmentation (T&M)',
    valueTitle: 'On-Demand Technical Capacity',
    shortDescription: 'On-Demand Technical Capacity',
    benefits: [
      'Pre-vetted senior developers embedded into your active sprints',
      'Seamless direct timezone overlap (UAE, EU, US)',
      'Flexible scaling up or down based on release cycles',
    ],
    details: 'Eliminate talent bottlenecks by scaling your in-house squads with rigorously pre-vetted engineers who embed directly in your tools and rituals.',
  },
  {
    id: 'contract-to-hire',
    title: 'Contract-to-Hire',
    valueTitle: 'De-Risked Strategic Hiring',
    shortDescription: 'De-Risked Strategic Hiring',
    benefits: [
      'Evaluate candidate performance on live production sprints',
      'Transparent conversion framework with zero friction',
      'Mitigate long-term recruitment and mis-hire risks',
    ],
    details: 'Start with contract engagement and transition top performers to your permanent team when performance is proven on your codebase.',
  },
  {
    id: 'corporate-training',
    title: 'Corporate Upskilling',
    valueTitle: 'Enterprise Capability Building',
    shortDescription: 'Enterprise Capability Building',
    benefits: [
      'Practitioner-led bootcamps on your active tech stack',
      'Hands-on cloud sandboxes and capstone evaluations',
      'Upskill in-house teams on modern AI and DevOps workflows',
    ],
    details: 'Upskill your team with training delivered by engineers who build production systems daily, mapped to your actual stack and roadmap.',
  },
]
