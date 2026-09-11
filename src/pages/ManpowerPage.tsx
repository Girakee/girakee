import CategoryLandingPage from '../components/sections/CategoryLandingPage'
import { manpowerServices } from '../data/services'

const methodology = [
  { step: '01', title: 'Brief', desc: 'We capture the role, stack, seniority, timezone overlap, and success criteria.' },
  { step: '02', title: 'Screen', desc: 'Engineer-led technical interviews, live coding, and communication checks.' },
  { step: '03', title: 'Present', desc: 'A short list with evidence, not a pile of CVs. You meet only viable people.' },
  { step: '04', title: 'Place', desc: 'Onboarding into your tools, sprints, and rituals within an agreed start window.' },
  { step: '05', title: 'Support', desc: 'Performance management, replacements if needed, and capacity changes as work shifts.' },
]

export default function ManpowerPage() {
  return (
    <CategoryLandingPage
      seoTitle="Manpower Solutions"
      seoDescription="Recruitment, contract to hire, managed services, and time and material engineering talent from Girakee in Bengaluru."
      path="/manpower-solutions"
      label="Manpower Solutions"
      title="Engineering Talent That Joins Your Team"
      subtitle="Vetted software, AI, cloud, and QA professionals from Bengaluru. Recruit, convert on contract, run a managed pod, or staff on time and material."
      scene="talent"
      introTitle="Manpower Built by Engineers"
      intro={[
        'Girakee manpower solutions are run by people who hire and ship software, not a generic staffing desk. We screen for real delivery skill: code quality, system thinking, communication, and the ability to work inside your rituals.',
        'Choose recruitment when you need a full-time seat filled with evidence. Use contract to hire when you want to see output before a permanent offer. Choose managed services when you want a pod that owns a workstream. Choose time and material when you need people inside your squad.',
      ]}
      methodology={methodology}
      services={manpowerServices}
    />
  )
}
