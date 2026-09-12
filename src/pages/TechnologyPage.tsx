import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { filterCategories, technologyMap, techCategories, allTechnologies } from '../data/technologies'
import { useReducedMotion } from '../hooks/useReducedMotion'
import TextReveal from '../components/animations/TextReveal'
import PremiumScene from '../components/animations/PremiumScene'
import FinalCTASection from '../components/home/FinalCTASection'

export default function TechnologyPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const reduced = useReducedMotion()
  const technologies = technologyMap[activeFilter] ?? technologyMap.all

  return (
    <>
      <SEO
        title="Technology"
        description="Full-stack technology ecosystem. 100+ languages, frameworks, and tools across AI, cloud, data, security, mobile, and DevOps."
        path="/technology"
      />
      <PageHero
        label="Technology"
        title="Full-Stack Technology Ecosystem"
        subtitle={`${allTechnologies.length}+ production-tested technologies across cloud platforms, deep-learning frameworks, data systems, and delivery pipelines.`}
      />

      <section className="relative bg-navy-dark section-py page-px overflow-hidden">
        <PremiumScene scene="orbit" size="section" />
        <div className="relative max-w-7xl mx-auto z-10">
          <TextReveal
            text="Technology Categories"
            as="h2"
            className="editorial-display text-2xl text-white mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techCategories.map((cat) => (
              <div key={cat.id} className="holographic-panel p-5">
                <h3 className="eyebrow eyebrow-dark text-[0.625rem] mb-3">{cat.label}</h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {cat.technologies.slice(0, 6).join(' · ')}
                  {cat.technologies.length > 6 ? ` · +${cat.technologies.length - 6} more` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <TextReveal
            text="Browse the Stack"
            as="h2"
            className="editorial-display text-2xl text-white mb-8"
          />

          <div
            className="scroll-x-mobile flex gap-2 mb-10 -mx-[var(--page-px)] px-[var(--page-px)] sm:mx-0 sm:px-0 sm:flex-wrap"
            role="tablist"
            aria-label="Technology categories"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeFilter === cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`shrink-0 px-4 py-2.5 min-h-[44px] text-xs font-medium tracking-wide uppercase border transition-colors touch-manipulation ${
                  activeFilter === cat.id
                    ? 'bg-cyan text-navy-deep border-cyan'
                    : 'border-white/[0.1] text-white/50 hover:text-white hover:border-white/25'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={reduced ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-2"
              role="tabpanel"
            >
              {technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={reduced ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: Math.min(i * 0.015, 0.5) }}
                  className="px-3 py-1.5 text-xs font-medium border border-white/[0.08] text-white/55 bg-white/[0.03]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
