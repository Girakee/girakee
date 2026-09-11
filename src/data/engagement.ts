export interface EngagementModel {
  id: string
  title: string
  shortDescription: string
  benefits: string[]
  details: string
}

export const engagementModels: EngagementModel[] = [
  {
    id: 'managed-services',
    title: 'Managed Services',
    shortDescription: 'End-to-end ownership of your technology stack with SLA-backed delivery.',
    benefits: [
      'Dedicated engineering team',
      'Proactive monitoring and maintenance',
      'Predictable monthly investment',
      'Continuous improvement cycles',
    ],
    details: 'We take full ownership of your technology operations, from architecture to deployment, monitoring, and ongoing optimization.',
  },
  {
    id: 'time-material',
    title: 'Time & Material',
    shortDescription: 'Flexible engagement scaled to your evolving project requirements.',
    benefits: [
      'Pay for actual effort delivered',
      'Scale team up or down quickly',
      'Ideal for evolving scope',
      'Transparent time tracking',
    ],
    details: 'Perfect for projects with evolving requirements. You get dedicated engineers billed on actual time and materials invested.',
  },
  {
    id: 'contract-to-hire',
    title: 'Contract-to-Hire',
    shortDescription: 'Evaluate talent through project work before making permanent hiring decisions.',
    benefits: [
      'Risk-free talent evaluation',
      'Seamless transition to full-time',
      'Pre-vetted engineering talent',
      'Reduced hiring overhead',
    ],
    details: 'Start with contract engagement and transition top performers to your permanent team when ready.',
  },
  {
    id: 'corporate-training',
    title: 'Corporate Training',
    shortDescription: 'Customized programs to build practical engineering capabilities in your team.',
    benefits: [
      'Practitioner-led instruction',
      'Customized curriculum',
      'Hands-on project work',
      'Skills assessment and certification',
    ],
    details: 'Upskill your team with training delivered by engineers who build production systems daily.',
  },
]
