import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'
import CommandCenterScene from '../animations/CommandCenterScene'
import { useMotionConfig } from '../../hooks/useMotionConfig'

export default function IntroSection() {
  const { shouldAnimate } = useMotionConfig()

  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {/* Cinematic command center — full bleed */}
      <div className="relative">
        <CommandCenterScene height="min-h-[480px] sm:min-h-[560px] lg:min-h-[680px]" />

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end page-px pb-10 sm:pb-14 lg:pb-16 pointer-events-none">
          <div className="max-w-[90rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <ScrollReveal variant="slideUp" className="lg:col-span-7 pointer-events-auto">
                <motion.p
                  className="eyebrow eyebrow-dark mb-4 sm:mb-5"
                  animate={shouldAnimate ? { opacity: [0.6, 1, 0.6] } : undefined}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  About Girakee
                </motion.p>
                <h2 className="editorial-display text-[clamp(2rem,5vw,3.75rem)] text-white drop-shadow-lg">
                  Global Excellence.
                  <br />
                  <span className="text-gradient-cyan">Indian Innovation.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="slideUpSubtle" delay={0.1} className="lg:col-span-5 pointer-events-auto">
                <p className="text-body text-white/60 mb-6 max-w-md backdrop-blur-sm">
                  Bengaluru-based AI engineering for ambitious businesses across
                  the US, UK, Middle East, and EU — powered by a holographic
                  team of engineers, designers, and scientists.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan-bright transition-colors"
                >
                  Discover Girakee
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/[0.06] bg-navy-deep/90 backdrop-blur-md page-px">
        <div className="max-w-[90rem] mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: 'Headquarters', value: 'Bengaluru' },
            { label: 'Delivery Regions', value: 'US · UK · EU · ME' },
            { label: 'Core Practice', value: 'AI Engineering' },
            { label: 'Services', value: '11 Capabilities' },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fade" delay={i * 0.05}>
              <p className="text-[10px] font-mono text-cyan/40 tracking-widest uppercase mb-1.5">{stat.label}</p>
              <p className="text-sm md:text-base font-semibold text-white/80">{stat.value}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
