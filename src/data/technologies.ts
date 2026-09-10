export interface TechCategory {
  id: string
  label: string
  technologies: string[]
}

export const techCategories: TechCategory[] = [
  {
    id: 'languages',
    label: 'Programming Languages',
    technologies: [
      'Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'Go', 'Rust',
      'Kotlin', 'Swift', 'Dart', 'PHP', 'Ruby', 'SQL', 'R', 'Scala', 'C++',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend & Mobile',
    technologies: [
      'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS',
      'React Native', 'Flutter', 'iOS', 'Android', 'HTML5', 'CSS3',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    technologies: [
      'Node.js', 'Django', 'FastAPI', 'Flask', 'Spring Boot', '.NET',
      'Express.js', 'GraphQL', 'REST APIs', 'gRPC',
    ],
  },
  {
    id: 'ai-cv',
    label: 'AI, ML & Computer Vision',
    technologies: [
      'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'OpenCV',
      'YOLOv8', 'YOLOv10', 'scikit-learn', 'Custom OCR', 'RPA',
    ],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    technologies: [
      'Pandas', 'NumPy', 'Apache Spark', 'Kafka', 'Airflow', 'dbt',
      'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Snowflake',
      'BigQuery', 'AWS Redshift', 'Tableau', 'Power BI', 'Looker',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Platforms',
    technologies: ['AWS', 'Azure', 'GCP', 'DigitalOcean', 'Heroku'],
  },
  {
    id: 'devops',
    label: 'DevOps & Infrastructure',
    technologies: [
      'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins',
      'GitLab CI', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana',
      'CloudFormation', 'Helm',
    ],
  },
  {
    id: 'security',
    label: 'Security & Compliance',
    technologies: [
      'Zero Trust', 'OAuth 2.0', 'SAML', 'Vault', 'SIEM',
      'Palo Alto Networks', 'OWASP', 'SOC 2', 'ISO 27001',
    ],
  },
  {
    id: 'testing',
    label: 'Testing & QA',
    technologies: [
      'Selenium', 'Cypress', 'Playwright', 'Jest', 'Pytest',
      'Postman', 'JMeter', 'k6', 'Appium',
    ],
  },
  {
    id: 'design',
    label: 'Design & Collaboration',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Jira', 'Confluence', 'Notion'],
  },
]

export const allTechnologies = [...new Set(techCategories.flatMap((c) => c.technologies))]

export const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'data', label: 'Data' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'devops', label: 'DevOps' },
  { id: 'security', label: 'Security' },
  { id: 'testing', label: 'Testing' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
]

export const technologyMap: Record<string, string[]> = {
  all: allTechnologies,
  languages: techCategories.find((c) => c.id === 'languages')!.technologies,
  frontend: techCategories.find((c) => c.id === 'frontend')!.technologies,
  backend: techCategories.find((c) => c.id === 'backend')!.technologies,
  ai: techCategories.find((c) => c.id === 'ai-cv')!.technologies,
  data: techCategories.find((c) => c.id === 'data')!.technologies,
  cloud: techCategories.find((c) => c.id === 'cloud')!.technologies,
  devops: techCategories.find((c) => c.id === 'devops')!.technologies,
  security: techCategories.find((c) => c.id === 'security')!.technologies,
  testing: techCategories.find((c) => c.id === 'testing')!.technologies,
  mobile: ['React Native', 'Flutter', 'iOS', 'Android', 'Kotlin', 'Swift', 'Dart'],
  design: techCategories.find((c) => c.id === 'design')!.technologies,
}
