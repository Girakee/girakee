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
      seoTitle="Software Services"
      seoDescription="Web and mobile apps, AI and ML, computer vision, cloud, cybersecurity, UI/UX, QA, and data analytics from Girakee."
      path="/services"
      label="Software Services"
      title="Engineering Software That Powers Business"
      subtitle="Nine software capabilities delivered by practitioners who build production systems in Bengaluru for clients worldwide."
      scene="orbit"
      introTitle="A Software Company Built for Production"
      intro={[
        'Girakee is a Bengaluru-based software engineering company. We design, build, and deploy web applications, mobile apps, AI systems, cloud infrastructure, and data platforms for businesses across the US, UK, Middle East, and EU.',
        'Every service below includes defined deliverables, a documented process, and a dedicated visual identity so you know exactly what we build and how we work.',
      ]}
      methodology={methodology}
      services={softwareServices}
      showPromise
      extraTitle="AI Digital Employee"
      extraIntro="AI Digital Employees for every major industry sit in Software Services. Open the hub, then an industry page."
      extraLinks={[{ label: 'AI Digital Employee', path: '/products/digital-employees' }]}
    />
  )
}
