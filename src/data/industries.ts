export interface Industry {
  id: string
  title: string
  description: string
  relatedServices: string[]
}

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Visual inspection, quality control, and predictive maintenance for production environments.',
    relatedServices: ['software-testing', 'ai-ml', 'cloud-devops'],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Automated drawing validation, document processing, and compliance verification for technical workflows.',
    relatedServices: ['software-testing', 'ai-ml', 'data-analytics'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Medical imaging analysis, document digitization, and intelligent workflow automation.',
    relatedServices: ['ai-ml', 'software-testing', 'data-analytics'],
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Document processing, fraud detection patterns, and regulatory compliance automation.',
    relatedServices: ['ai-ml', 'cybersecurity', 'data-analytics'],
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Inventory optimization, customer experience platforms, and data-driven merchandising.',
    relatedServices: ['web-mobile', 'data-analytics', 'ai-ml'],
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Custom AI platforms, cloud infrastructure, and intelligent QA for software products.',
    relatedServices: ['ai-ml', 'cloud-devops', 'software-testing'],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Route optimization, warehouse automation, and supply chain visibility systems.',
    relatedServices: ['ai-ml', 'data-analytics', 'web-mobile'],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Workflow automation, document intelligence, and client-facing digital platforms.',
    relatedServices: ['web-mobile', 'ai-ml', 'corporate-training'],
  },
]
