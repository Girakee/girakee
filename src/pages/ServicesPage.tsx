import CategoryLandingPage from '../components/sections/CategoryLandingPage'
import { softwareServices } from '../data/services'

const methodology = [
  { step: '01', title: 'Discover', desc: 'We map your goals, systems, constraints, and success criteria before writing code.' },
  { step: '02', title: 'Architect', desc: 'Technical design, stack selection, and delivery plan aligned to your timeline.' },
  { step: '03', title: 'Build', desc: 'Agile sprints with demos, code review, CI/CD, and transparent progress reporting.' },
  { step: '04', title: 'Deploy', desc: 'Production rollout with monitoring, documentation, and knowledge transfer.' },
  { step: '05', title: 'Evolve', desc: 'Ongoing support, optimization, and iteration as your product grows.' },
]

export default function ServicesPage() {
  return (
    <CategoryLandingPage
      seoTitle="Core Engineering & AI"
      seoDescription="Web and mobile engineering, applied AI and computer vision, cloud architecture, zero-trust cybersecurity, QA automation, and data platforms from Girakee."
      path="/services"
      label="Core Engineering & AI"
      title="Engineering Software That Powers Business"
      subtitle="Scalable digital architecture, intelligent automation, and robust enterprise engineering delivered to clients across the Middle East, Europe, and North America."
      scene="orbit"
      introTitle="Enterprise Engineering Built for Production"
      intro={[
        'Girakee is a Bengaluru-based software engineering company. We design, build, and deploy web applications, mobile apps, AI systems, cloud infrastructure, and data platforms for businesses across the US, UK, Middle East, and EU.',
        'Every service below includes defined deliverables, a documented process, and a dedicated visual identity so you know exactly what we build and how we work.',
      ]}
      methodology={methodology}
      services={softwareServices}
      showPromise
    />
  )
}
