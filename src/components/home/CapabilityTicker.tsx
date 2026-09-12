const capabilities = [
  'Web & Mobile Engineering',
  'Applied AI & Computer Vision',
  'Cloud Architecture & DevOps',
  'Zero-Trust Cybersecurity',
  'QA Automation',
  'Data Engineering',
  'Engineering Pods',
  'Staff Augmentation',
  'Contract-to-Hire',
  'Corporate Upskilling',
  '6-Month OJT',
  'Student Internship',
]

export default function CapabilityTicker() {
  const items = [...capabilities, ...capabilities]

  return (
    <section className="relative bg-navy-dark border-y border-white/[0.06] overflow-hidden py-4" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((cap, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-white/20"
          >
            <span className="w-px h-3 bg-cyan/30 mr-8" />
            {cap}
          </span>
        ))}
      </div>
    </section>
  )
}
