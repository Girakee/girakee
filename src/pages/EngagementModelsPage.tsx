import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { engagementModels } from '../data/engagement'
import TextReveal from '../components/animations/TextReveal'
import SlideUp from '../components/animations/SlideUp'
import FinalCTASection from '../components/home/FinalCTASection'

const compareRows = [
  { model: 'Managed Services', best: 'Ongoing operations', flex: 'Medium', commit: 'Long-term' },
  { model: 'Time & Material', best: 'Evolving projects', flex: 'High', commit: 'Flexible' },
  { model: 'Contract-to-Hire', best: 'Talent evaluation', flex: 'Medium', commit: 'Transition-based' },
  { model: 'Corporate Training', best: 'Team upskilling', flex: 'High', commit: 'Program-based' },
]

export default function EngagementModelsPage() {
  return (
    <>
      <SEO
        title="Engagement Models"
        description="Flexible partnership structures. Managed Services, Time & Material, Contract-to-Hire, and Corporate Training."
        path="/engagement-models"
      />
      <PageHero
        label="Engagement Models"
        title="Choose the Right Delivery Model"
        subtitle="Flexible partnership structures designed around your timeline, budget, and strategic goals."
      />

      {engagementModels.map((model, i) => (
        <section key={model.id} className={`${i % 2 === 0 ? 'bg-navy-deep' : 'bg-navy-dark'} section-py page-px`} id={model.id}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
            <SlideUp>
              <span className="text-xs font-mono text-cyan mb-4 block">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-5 sm:mb-6">{model.title}</h2>
              <p className="text-white/55 leading-relaxed text-[0.9375rem] sm:text-base">{model.details}</p>
            </SlideUp>
            <div className="space-y-3">
              {model.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4 p-4 holographic-panel">
                  <div className="w-2 h-2 rounded-full bg-cyan shrink-0 mt-1.5" />
                  <span className="text-sm text-white/55 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="Compare Models" as="h2" className="editorial-display text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center" />

          {/* Mobile: card layout */}
          <div className="space-y-4 md:hidden">
            {compareRows.map((row) => (
              <div key={row.model} className="border border-white/10 p-5">
                <h3 className="text-white font-semibold mb-4">{row.model}</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/40">Best For</dt>
                    <dd className="text-white/70 text-right">{row.best}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/40">Flexibility</dt>
                    <dd className="text-white/70 text-right">{row.flex}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/40">Commitment</dt>
                    <dd className="text-white/70 text-right">{row.commit}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-cyan font-medium">Model</th>
                  <th className="text-left py-4 px-4 text-white/40 font-medium">Best For</th>
                  <th className="text-left py-4 px-4 text-white/40 font-medium">Flexibility</th>
                  <th className="text-left py-4 px-4 text-white/40 font-medium">Commitment</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.model} className="border-b border-white/5">
                    <td className="py-4 px-4 text-white">{row.model}</td>
                    <td className="py-4 px-4 text-white/50">{row.best}</td>
                    <td className="py-4 px-4 text-white/50">{row.flex}</td>
                    <td className="py-4 px-4 text-white/50">{row.commit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
