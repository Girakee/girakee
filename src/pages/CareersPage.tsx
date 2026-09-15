import { useEffect, useState } from 'react'
import SEO, { jobPostingJsonLd } from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import FinalCTASection from '../components/home/FinalCTASection'
import CareerApplyForm from '../components/forms/CareerApplyForm'
import { jobs as fallbackJobs, type Job } from '../data/careers'
import { fetchJobs, type ApiJob } from '../lib/api'
import { ChevronDown } from 'lucide-react'

function mapApiJob(job: ApiJob): Job {
  return {
    id: job.id,
    title: job.title,
    location: job.location,
    type: job.type,
    summary: job.summary,
    responsibilities: job.responsibilities,
    requirements: job.requirements,
    applySubject: job.applySubject ?? undefined,
    about: job.about ?? undefined,
    overview: job.overview ?? undefined,
    portfolio: job.portfolio ?? undefined,
    commercial: job.commercial ?? undefined,
    howToApply: job.howToApply ?? undefined,
  }
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [openId, setOpenId] = useState('')
  const [applyJobId, setApplyJobId] = useState<string | null>(null)

  useEffect(() => {
    fetchJobs()
      .then((apiJobs) => {
        setJobs(apiJobs.map(mapApiJob))
        setOpenId(apiJobs[0]?.id ?? '')
      })
      .catch(() => setJobs(fallbackJobs))
  }, [])

  const jobPostingsJsonLd = jobs.map((job) =>
    jobPostingJsonLd({
      id: job.id,
      title: job.title,
      description: job.summary,
      location: job.location,
      type: job.type,
    }),
  )

  return (
    <>
      <SEO
        title="Careers"
        description="Join Girakee in Bengaluru. Explore open engineering, AI, cloud, QA, and business development roles with transparent job descriptions and online applications."
        path="/careers"
        keywords={[
          'Girakee careers',
          'software jobs Bengaluru',
          'engineering jobs India',
          'AI engineer jobs',
          'cloud DevOps careers',
        ]}
        jsonLd={jobPostingsJsonLd}
      />
      <PageHero
        label="Careers"
        title="Build the Future With Girakee"
        subtitle="Join engineers in Bengaluru who ship software, AI, and cloud systems for clients worldwide."
        scene="office"
      />

      <section className="bg-navy-deep section-py page-px">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow eyebrow-dark mb-3">Open roles</p>
          <h2 className="editorial-display text-[clamp(1.75rem,4vw,2.75rem)] text-white mb-3">
            Jobs
          </h2>
          <p className="text-body text-body-dark max-w-2xl mb-10">
            Read the job description, then apply online. We review every application that shows real work.
          </p>
          <div className="space-y-4">
            {jobs.map((job) => {
              const open = openId === job.id
              const applying = applyJobId === job.id
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
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => {
                          setOpenId(job.id)
                          setApplyJobId(job.id)
                        }}
                      >
                        Apply
                      </button>
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
                      {job.about && (
                        <>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3">
                            About Girakee
                          </h4>
                          <p className="text-sm text-white/55 leading-relaxed mb-6">{job.about}</p>
                        </>
                      )}
                      <p className="text-sm text-white/55 leading-relaxed mb-6">{job.overview ?? job.summary}</p>
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
                      {job.portfolio && job.portfolio.length > 0 && (
                        <>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3">
                            Portfolio you will represent
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {job.portfolio.map((item) => (
                              <li key={item} className="text-sm text-white/50 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-cyan/70">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
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
                      {job.commercial && job.commercial.length > 0 && (
                        <>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3 mt-6">
                            Commercial terms & perks
                          </h4>
                          <ul className="space-y-2">
                            {job.commercial.map((item) => (
                              <li key={item} className="text-sm text-white/50 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-cyan/70">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {job.howToApply && (
                        <p className="text-sm text-white/55 leading-relaxed mt-6">{job.howToApply}</p>
                      )}
                      {applying && (
                        <CareerApplyForm
                          jobId={job.id}
                          jobTitle={job.title}
                          onClose={() => setApplyJobId(null)}
                        />
                      )}
                    </div>
                  )}
                </article>
              )
            })}
            {!jobs.length && (
              <p className="text-sm text-white/45">No open roles are published right now. Check back soon.</p>
            )}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
