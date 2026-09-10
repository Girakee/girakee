import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import TextReveal from '../components/animations/TextReveal'
import SlideUp from '../components/animations/SlideUp'
import Button from '../components/ui/Button'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'

const culture = [
  { title: 'Culture', description: 'A collaborative environment where engineers are empowered to solve complex problems and innovate.' },
  { title: 'Engineering', description: 'Work on cutting-edge AI, computer vision, and cloud projects with global impact.' },
  { title: 'Learning', description: 'Continuous learning culture with access to the latest tools, frameworks, and methodologies.' },
  { title: 'Growth', description: 'Clear career progression paths in Bengaluru\'s thriving technology ecosystem.' },
]

export default function CareersPage() {
  return (
    <>
      <SEO
        title="Careers"
        description="Build the future with Girakee. Join a team of passionate engineers building AI systems from Bengaluru."
        path="/careers"
      />
      <PageHero
        label="Careers"
        title="Build the Future With Girakee"
        subtitle="Join a team of passionate engineers building AI systems that solve real-world problems."
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {culture.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-10 border border-white/[0.08] h-full holographic-panel">
                  <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-3xl mx-auto text-center">
          <TextReveal text="Open Opportunities" as="h2" className="text-3xl font-bold text-white mb-6" />
          <SlideUp>
            <p className="text-white/50 leading-relaxed mb-10">
              We&apos;re always interested in connecting with exceptional engineers.
              Send your resume and tell us what you&apos;re passionate about building.
            </p>
            <Button href="mailto:connect@girakee.com" showArrow>
              Get in Touch
            </Button>
          </SlideUp>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
