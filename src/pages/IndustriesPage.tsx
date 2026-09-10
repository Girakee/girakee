import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { industries } from '../data/industries'
import { services } from '../data/services'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries"
        description="AI and engineering solutions applicable across manufacturing, engineering, healthcare, financial services, and more."
        path="/industries"
      />
      <PageHero
        label="Industries"
        title="Solution Domains"
        subtitle="Our engineering capabilities are applicable across industries where AI, automation, and digital transformation create measurable impact."
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 text-sm mb-12 max-w-2xl">
            The industries below represent applicable solution domains. Contact us to discuss
            how our capabilities align with your specific industry challenges.
          </p>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.id}>
                <div className="p-5 sm:p-8 border border-white/[0.08] hover:border-cyan/30 transition-colors h-full flex flex-col holographic-panel">
                  <h2 className="text-xl font-bold text-white mb-4">{industry.title}</h2>
                  <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.relatedServices.map((sid) => {
                      const svc = services.find((s) => s.id === sid)
                      return svc ? (
                        <Link key={sid} to={svc.path} className="text-[10px] tracking-wider uppercase text-cyan hover:underline">
                          {svc.shortTitle}
                        </Link>
                      ) : null
                    })}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
