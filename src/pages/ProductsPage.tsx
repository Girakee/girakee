import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import FinalCTASection from '../components/home/FinalCTASection'
import { getIndustryPack } from '../data/digitalEmployees'
import { IndustryPackScene } from '../components/animations/digital-employees/IndustryPackScene'

export default function ProductsPage() {
  const hrPack = getIndustryPack('human-resources')

  return (
    <>
      <SEO
        title="Products"
        description="Rozgar.ai Digital HR Employee from Girakee. Recruitment, screening, onboarding, and hire-to-retire HR operations."
        path="/products"
      />
      <PageHero
        label="Products"
        title="Rozgar.ai Digital HR Employee"
        subtitle="The named Digital HR Employee for recruitment, screening, scheduling, onboarding, payroll support, leave, and HR operations."
        showScan={false}
        sceneContent={
          hrPack ? <IndustryPackScene pack={hrPack} className="w-full h-full" /> : undefined
        }
      />

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <Link
            to="/products/rozgar-ai"
            className="group block p-8 md:p-12 holographic-panel hover:border-cyan/30 transition-colors"
          >
            <span className="text-[10px] font-mono text-cyan/60 uppercase tracking-widest block mb-3">
              HR product
            </span>
            <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-4 group-hover:text-cyan transition-colors">
              Rozgar.ai
            </h2>
            <p className="text-sm text-white/50 max-w-3xl leading-relaxed mb-6">
              Rozgar.ai screens, schedules, onboards, and runs hire-to-retire work in your ATS and
              HRIS. Offers, terminations, and sensitive cases stay with named HR owners.
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-cyan">
              Open Rozgar.ai
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <p className="mt-8 text-sm text-white/40">
            Need software, manpower, or training?{' '}
            <Link to="/solutions" className="text-cyan hover:text-white transition-colors">
              Open Services
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
