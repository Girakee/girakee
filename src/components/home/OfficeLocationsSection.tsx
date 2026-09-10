import ScrollReveal from '../animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import { offices } from '../../data/company'

export default function OfficeLocationsSection() {
  return (
    <section className="section-py bg-navy-deep page-px border-t border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto">
        <ScrollReveal variant="slideUpSubtle">
          <p className="eyebrow eyebrow-dark mb-5">Where to find us</p>
          <h2 className="editorial-display text-[clamp(1.5rem,3.5vw,2.25rem)] text-white mb-10">
            Locate Us
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office) => (
            <StaggerItem key={office.city}>
              <div className="p-5 holographic-panel h-full">
                <p className="text-sm font-semibold text-white mb-1">{office.city}</p>
                <p className="text-xs text-white/40 mb-3">{office.country}</p>
                {office.status === 'launching' ? (
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cyan/50">
                    Launching Soon
                  </span>
                ) : (
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cyan/70">
                    Headquarters
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
