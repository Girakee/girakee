import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import TextReveal from '../components/animations/TextReveal'
import SlideUp from '../components/animations/SlideUp'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'

const timeline = [
  { year: 'Foundation', title: 'Bengaluru Roots', description: 'Founded in Rajajinagar, Bengaluru — the heart of India\'s technology ecosystem.' },
  { year: 'Mission', title: 'Digital India', description: 'Passionate about accelerating the Digital India mission with world-class engineering.' },
  { year: 'Growth', title: 'Global Reach', description: 'Expanding delivery to clients across the US, UK, Middle East, and European Union.' },
  { year: 'Today', title: 'AI-First Engineering', description: 'Building production AI systems — computer vision, intelligent QA, and automation.' },
]

const philosophy = [
  { title: 'Engineering Over Hype', description: 'We build systems that work in production, not demos that impress in presentations.' },
  { title: 'Quality at Scale', description: 'Top-tier Indian engineering talent delivering enterprise-grade quality at optimized cost.' },
  { title: 'Partnership Mindset', description: 'We invest in understanding your business deeply before writing a single line of code.' },
  { title: 'Continuous Learning', description: 'Our team stays at the frontier of AI, cloud, and software engineering.' },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Girakee Software Services — Global Excellence, Indian Innovation. Bengaluru-based AI engineering company with global delivery."
        path="/about"
      />
      <PageHero
        label="About Girakee"
        title="Who We Are"
        subtitle="Global Excellence. Indian Innovation."
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="Our Story" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-8 sm:mb-12" />
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <SlideUp>
              <p className="text-lg text-white/55 leading-relaxed mb-6">
                Girakee Software Services Private Limited is a Bengaluru-based engineering
                company founded by digital enthusiasts passionate about accelerating the
                Digital India mission.
              </p>
              <p className="text-white/55 leading-relaxed">
                While our roots are proudly in India&apos;s Silicon Valley, our vision and
                reach are international. We primarily serve ambitious clients across the
                US, UK, the Middle East, and the EU.
              </p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <div className="bg-navy-deep p-6 sm:p-10 text-white">
                <h3 className="text-xs tracking-[0.2em] uppercase text-cyan mb-6">Mission</h3>
                <p className="text-2xl font-display font-semibold leading-snug mb-4">
                  Engineering the Future with AI
                </p>
                <p className="text-white/50 leading-relaxed">
                  To deliver jaw-dropping quality at unbeatable prices — building integrated
                  AI, cloud, and security solutions that drive intelligent efficiency and
                  protect your assets.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="Our Approach" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-10 sm:mb-16" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan/20 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <SlideUp key={item.year} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan -translate-x-1.5 md:-translate-x-1.5 top-2" />
                    <div className="md:w-1/2 pl-12 md:pl-0">
                      <span className="text-xs font-mono text-cyan">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-7xl mx-auto">
          <TextReveal text="Engineering Philosophy" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-10 sm:mb-16" />
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-8 border border-white/10 hover:border-cyan/30 transition-colors h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal text="Why Girakee" as="h2" className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-6 sm:mb-8" />
          <SlideUp>
            <p className="text-white/55 leading-relaxed text-lg">
              We combine top-tier Indian engineering talent with a deep commitment to
              delivering services that are not just high-quality, but remarkably affordable.
              From AI engineering to cloud infrastructure — we are your long-term technology
              partner, not just a vendor.
            </p>
          </SlideUp>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
