export interface TechCategory {
  id: string
  label: string
  technologies: string[]
}

export const techCategories: TechCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    technologies: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'Java', 'C#', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend & Mobile',
    technologies: [
      'React',
      'Next.js',
      'React Native',
      'Vue.js',
      'Flutter',
      'Tailwind CSS',
      'iOS (Swift)',
      'Android (Kotlin)',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Microservices',
    technologies: [
      'Node.js',
      'FastAPI',
      'Django',
      'Spring Boot',
      'Express.js',
      'GraphQL',
      'REST APIs',
      'gRPC',
    ],
  },
  {
    id: 'ai-cv',
    label: 'Applied AI & Computer Vision',
    technologies: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'YOLOv8/v10',
      'Hugging Face',
      'LangChain',
      'Custom OCR Engines',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    technologies: [
      'AWS',
      'Microsoft Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Helm',
      'GitHub Actions',
      'ArgoCD',
    ],
  },
  {
    id: 'data',
    label: 'Data Engineering & BI',
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
      'Power BI',
    ],
  },
  {
    id: 'security',
    label: 'Security & Testing',
    technologies: [
      'Zero-Trust IAM',
      'HashiCorp Vault',
      'SAST/DAST',
      'Playwright',
      'Cypress',
      'Selenium',
      'k6',
      'JMeter',
    ],
  },
]

export const allTechnologies = [...new Set(techCategories.flatMap((c) => c.technologies))]

export const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend & Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'Applied AI' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'data', label: 'Data & BI' },
  { id: 'security', label: 'Security & Testing' },
]

export const technologyMap: Record<string, string[]> = {
  all: allTechnologies,
  languages: techCategories.find((c) => c.id === 'languages')!.technologies,
  frontend: techCategories.find((c) => c.id === 'frontend')!.technologies,
  backend: techCategories.find((c) => c.id === 'backend')!.technologies,
  ai: techCategories.find((c) => c.id === 'ai-cv')!.technologies,
  cloud: techCategories.find((c) => c.id === 'cloud')!.technologies,
  data: techCategories.find((c) => c.id === 'data')!.technologies,
  security: techCategories.find((c) => c.id === 'security')!.technologies,
}
