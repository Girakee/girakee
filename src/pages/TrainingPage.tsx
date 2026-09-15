import CategoryLandingPage from '../components/sections/CategoryLandingPage'
import { trainingServices } from '../data/services'

const methodology = [
  { step: '01', title: 'Assess', desc: 'We map current skill, target roles, and whether you need corporate upskilling, 6-month incubation, or a 3-month internship.' },
  { step: '02', title: 'Assign', desc: 'Participants join a track: AI, computer vision, full-stack, cloud, data, or security.' },
  { step: '03', title: 'Build', desc: 'Live tickets, labs, or capstone work with senior engineers reviewing the code.' },
  { step: '04', title: 'Review', desc: 'Sprint feedback, skills checks, and a record of what was actually shipped.' },
  { step: '05', title: 'Certify', desc: 'Experience letter, capability report, or internship certificate with a verified capstone.' },
]

export default function TrainingPage() {
  return (
    <CategoryLandingPage
      seoTitle="Corporate Upskilling & Incubation"
      seoDescription="Corporate engineering bootcamps, 6-month graduate residency, and 3-month student internships mentored by practicing engineers at Girakee."
      path="/services/enablement"
      label="Corporate Upskilling & Incubation"
      title="Corporate Upskilling & Incubation"
      subtitle="From tailored corporate engineering bootcamps to structured graduate incubation, Girakee bridges the gap between academic foundations and production-grade software delivery. All programs are mentored by active engineering leads using real-world architectures, continuous integration, and verifiable project outcomes."
      scene="classroom"
      introTitle="Training That Looks Like the Job"
      intro={[
        'Girakee training is built around production work. Corporate programs are designed around your stack. The 6-month OJT places graduates inside live delivery with a named mentor. The 3-month internship gives college students a structured, remote path to a verified capstone.',
        'Every track is taught by practitioners in Bengaluru who work on AI, cloud, full-stack, and quality systems for clients in the US, UK, EU, and Middle East. If the work would not survive a sprint, it does not belong in the curriculum.',
      ]}
      methodology={methodology}
      services={trainingServices}
    />
  )
}
