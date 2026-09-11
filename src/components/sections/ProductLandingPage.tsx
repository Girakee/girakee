import { Link, Navigate } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../seo/SEO'
import PageHero from '../ui/PageHero'
import ScrollReveal from '../animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import ServiceProcessTimeline from '../animations/ServiceProcessTimeline'
import FinalCTASection from '../home/FinalCTASection'
import WorkPreview from '../animations/WorkPreview'
import { getProductById, products } from '../../data/products'

const previewMap: Record<string, string> = {
  'drawing-validation': 'intelligent-qa',
  'visual-inspection': 'computer-vision',
  'document-intelligence': 'data-analytics',
  'process-automation': 'ai-ml',
  'quality-engine': 'software-testing',
}

export default function ProductLandingPage({ productId }: { productId: string }) {
  const product = getProductById(productId)
  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <>
      <SEO title={product.title} description={product.description} path={product.path} />
      <PageHero
        label={product.shortTitle}
        title={product.title}
        subtitle={product.description}
        scene={product.scene}
      />

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="slideUpSubtle">
            <h2 className="editorial-display text-2xl text-white mb-4">What it does</h2>
            <p className="text-body text-body-dark leading-relaxed mb-4">{product.overview}</p>
            <p className="text-sm text-white/45 leading-relaxed mb-8">{product.detailedOverview}</p>
            <Link to="/contact" className="btn-primary inline-flex">
              Discuss {product.shortTitle}
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
          </ScrollReveal>
          <div className="min-h-[300px]">
            <WorkPreview serviceId={previewMap[product.id] ?? 'web-mobile'} />
          </div>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="eyebrow eyebrow-dark mb-5">Capabilities</h3>
            <StaggerChildren className="space-y-2">
              {product.capabilities.map((cap) => (
                <StaggerItem key={cap}>
                  <div className="flex items-start gap-3 px-4 py-3 holographic-panel text-sm text-white/60">
                    <Check size={14} className="text-cyan shrink-0 mt-0.5" strokeWidth={2} />
                    {cap}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          <div>
            <h3 className="eyebrow eyebrow-dark mb-5">You receive</h3>
            <ul className="space-y-2">
              {product.deliverables.map((item) => (
                <li key={item} className="text-sm text-white/50 flex gap-3 px-4 py-3 border border-white/[0.06]">
                  <span className="w-1 h-1 bg-cyan shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow eyebrow-dark mb-5">How we deploy</h3>
            <ServiceProcessTimeline steps={product.process} />
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <h3 className="eyebrow eyebrow-dark mb-6">Where it is used</h3>
          <ul className="grid sm:grid-cols-2 gap-4 mb-14">
            {product.useCases.map((uc) => (
              <li key={uc} className="text-sm text-white/55 flex gap-3">
                <ArrowRight size={14} className="text-cyan/50 shrink-0 mt-0.5" />
                {uc}
              </li>
            ))}
          </ul>

          <h3 className="eyebrow eyebrow-dark mb-6">Other products</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link key={p.id} to={p.path} className="p-5 holographic-panel hover:border-cyan/30 transition-colors">
                <h4 className="text-white font-semibold mb-2">{p.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
