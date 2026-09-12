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
      seoTitle="Workforce Solutions"
      seoDescription="Girakee delivers enterprise workforce solutions, IT staff augmentation, and technical manpower services for scaling companies in UAE, Europe, and India."
      path="/manpower-solutions"
      label="Flexible Engagement Models"
      title="Workforce Solutions & Dedicated Engineering Pods"
      subtitle="Scale your engineering velocity with pre-vetted senior software engineers and cross-functional technical squads. From embedded time-and-material staff augmentation to fully managed delivery pods, Girakee provides seamless team integration across global timezones under strict SLA governance."
      scene="talent"
      introTitle="Workforce Built by Engineers"
      intro={[
        'Girakee workforce solutions are run by people who hire and ship software, not a generic staffing desk. We screen for real delivery skill: code quality, system thinking, communication, and the ability to work inside your rituals.',
        'Choose dedicated engineering pods when you want outcome ownership. Use staff augmentation when you need people inside your squad. Choose contract-to-hire when you want to see output before a permanent offer. Choose specialized tech search when you need a full-time seat filled with evidence.',
      ]}
      methodology={methodology}
      services={manpowerServices}
    />
  )
}
