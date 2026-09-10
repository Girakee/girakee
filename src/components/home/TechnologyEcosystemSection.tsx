import { motion } from 'framer-motion'
import { techCategories } from '../../data/technologies'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import PremiumScene from '../animations/PremiumScene'
import { useMotionConfig } from '../../hooks/useMotionConfig'

function TechPill({ name, index }: { name: string; index: number }) {
  const { viewport, transition } = useMotionConfig()

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={transition({ delay: index * 0.015, duration: 0.3 })}
      className="inline-block px-3 py-1.5 text-xs font-medium text-white/50 border border-white/[0.08] bg-white/[0.03]"
    >
      {name}
    </motion.span>
  )
}

export default function TechnologyEcosystemSection() {
  return (
    <section className="relative section-py bg-navy-dark page-px overflow-hidden">
      <PremiumScene scene="orbit" size="section" />
      <div className="relative max-w-[90rem] mx-auto z-10">
        <EditorialHeading
          label="Technology"
          title="Built With Modern Technology"
          align="center"
          dark
        />

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {techCategories.map((category) => (
            <StaggerItem key={category.id}>
              <h3 className="eyebrow eyebrow-dark mb-4 text-[0.625rem]">{category.label}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.technologies.map((tech, ti) => (
                  <TechPill key={tech} name={tech} index={ti} />
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
