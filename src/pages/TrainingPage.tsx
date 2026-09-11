import CategoryLandingPage from '../components/sections/CategoryLandingPage'
import { trainingServices } from '../data/services'

const methodology = [
  { step: '01', title: 'Assess', desc: 'We map current skill, target roles, and whether you need internship, corporate training, or on job training.' },
  { step: '02', title: 'Assign', desc: 'Participants join a track: AI, computer vision, full-stack, cloud, data, or security.' },
  { step: '03', title: 'Build', desc: 'Live tickets, labs, or capstone work with senior engineers reviewing the code.' },
  { step: '04', title: 'Review', desc: 'Sprint feedback, skills checks, and a record of what was actually shipped.' },
  { step: '05', title: 'Certify', desc: 'Experience letter, capability report, or next-step recommendation into hiring or OJT.' },
]

export default function TrainingPage() {
  return (
    <CategoryLandingPage
      seoTitle="Training & Internships"
      seoDescription="Internship, corporate training, and on job training on live projects with Girakee."
      path="/training"
      label="Training & Internships"
      title="Stop Learning. Start Shipping Real Code."
      subtitle="Internships on live industry projects, corporate training for existing teams, and on job training taught by engineers who ship."
      scene="terminal"
      introTitle="Training That Looks Like the Job"
      intro={[
        'Girakee training is built around production work. Interns join delivery teams, write real code, sit in reviews, and leave with an experience letter. Corporate programs are designed around your stack. On job training places working professionals inside live delivery with a named mentor.',
        'Every track is taught by practitioners in Bengaluru who work on AI, cloud, full-stack, and quality systems for clients in the US, UK, EU, and Middle East. If the work would not survive a sprint, it does not belong in the curriculum.',
      ]}
      methodology={methodology}
      services={trainingServices}
    />
  )
}
