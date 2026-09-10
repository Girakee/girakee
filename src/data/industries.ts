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
    relatedServices: ['computer-vision', 'ai-engineering', 'intelligent-qa'],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Automated drawing validation, document processing, and compliance verification for technical workflows.',
    relatedServices: ['computer-vision', 'intelligent-qa', 'ai-engineering'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Medical imaging analysis, document digitization, and intelligent workflow automation.',
    relatedServices: ['ai-engineering', 'computer-vision', 'data-analytics'],
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Document processing, fraud detection patterns, and regulatory compliance automation.',
    relatedServices: ['ai-engineering', 'cybersecurity', 'data-analytics'],
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Inventory optimization, customer experience platforms, and data-driven merchandising.',
    relatedServices: ['software-development', 'data-analytics', 'ai-engineering'],
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Custom AI platforms, cloud infrastructure, and intelligent QA for software products.',
    relatedServices: ['ai-engineering', 'cloud-devops', 'intelligent-qa'],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Route optimization, warehouse automation, and supply chain visibility systems.',
    relatedServices: ['ai-engineering', 'data-analytics', 'software-development'],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Workflow automation, document intelligence, and client-facing digital platforms.',
    relatedServices: ['software-development', 'ai-engineering', 'corporate-training'],
  },
]
