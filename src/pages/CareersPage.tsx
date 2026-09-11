import { useState } from 'react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import FinalCTASection from '../components/home/FinalCTASection'
import { jobs, jobApplyHref, team } from '../data/careers'
import { ChevronDown } from 'lucide-react'

export default function CareersPage() {
  const [openId, setOpenId] = useState(jobs[0]?.id ?? '')

  return (
    <>
      <SEO
        title="Careers"
        description="Join Girakee in Bengaluru. Open roles with job descriptions, and the people you work with on production software."
        path="/careers"
      />
      <PageHero
        label="Careers"
        title="Build the Future With Girakee"
        subtitle="Join engineers in Bengaluru who ship software, AI, and cloud systems for clients worldwide."
      />

      <section className="bg-navy-dark section-py page-px">
        <div className="max-w-[90rem] mx-auto">
          <p className="eyebrow eyebrow-dark mb-3">The team</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,2.75rem)] text-white mb-3">
            People working here
          </h2>
          <p className="text-body text-body-dark max-w-2xl mb-10 md:mb-14">
            You join a Bengaluru delivery company, not a staffing desk. These are the people
            on the work: named owners, engineers, and mentors on live projects.
          </p>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {team.map((person) => (
              <StaggerItem key={person.initials}>
                <div className="h-full holographic-panel p-6 md:p-8">
                  <div className="w-12 h-12 mb-5 flex items-center justify-center border border-cyan/30 text-cyan text-sm font-semibold tracking-wide">
                    {person.initials}
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-cyan/70 mb-2">
                    {person.role}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">{person.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{person.focus}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow eyebrow-dark mb-3">Open roles</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,2.75rem)] text-white mb-3">
            Jobs
          </h2>
          <p className="text-body text-body-dark max-w-2xl mb-10">
            Read the job description, then apply. We review every note that shows real work.
          </p>
          <div className="space-y-4">
            {jobs.map((job) => {
              const open = openId === job.id
              return (
                <article key={job.id} className="holographic-panel overflow-hidden">
                  <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? '' : job.id)}
                      className="text-left flex-1 min-w-0 touch-manipulation"
                      aria-expanded={open}
                    >
                      <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
                      <p className="text-xs text-white/40">
                        {job.location} · {job.type}
                      </p>
                    </button>
                    <div className="flex items-center gap-3 shrink-0">
                      <a href={jobApplyHref(job.title)} className="btn-primary">
                        Apply
                      </a>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? '' : job.id)}
                        className="p-2 text-white/40 hover:text-white touch-manipulation"
                        aria-label={open ? 'Hide job description' : 'Show job description'}
                        aria-expanded={open}
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          className={`transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  </div>
                  {open && (
                    <div className="px-5 md:px-6 pb-6 border-t border-white/[0.06] pt-5">
                      <p className="text-sm text-white/55 leading-relaxed mb-6">{job.summary}</p>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3">
                        What you will do
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="text-sm text-white/50 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-cyan/70">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3">
                        What we look for
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item) => (
                          <li key={item} className="text-sm text-white/50 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-cyan/70">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
