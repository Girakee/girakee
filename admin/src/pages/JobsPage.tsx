import { useEffect, useState } from 'react'
import { adminApi, type AdminJob } from '../api'

const emptyJob = (): Partial<AdminJob> => ({
  title: '',
  location: '',
  type: 'Full-time',
  summary: '',
  responsibilities: [''],
  requirements: [''],
  applySubject: '',
  about: '',
  overview: '',
  howToApply: '',
  active: 1,
  sortOrder: 0,
})

function linesToArray(value: string) {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function arrayToLines(value?: string[] | null) {
  return (value ?? []).join('\n')
}

function asLines(value: unknown) {
  return Array.isArray(value) ? value.join('\n') : String(value ?? '')
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<AdminJob[]>([])
  const [draft, setDraft] = useState<Partial<AdminJob>>(emptyJob())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const result = await adminApi.getJobs()
      setJobs(result.jobs)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load jobs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const save = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    const payload = {
      ...draft,
      responsibilities: linesToArray(asLines(draft.responsibilities)),
      requirements: linesToArray(asLines(draft.requirements)),
      portfolio: draft.portfolio ? linesToArray(asLines(draft.portfolio)) : null,
      commercial: draft.commercial ? linesToArray(asLines(draft.commercial)) : null,
      active: draft.active ? 1 : 0,
      sortOrder: Number(draft.sortOrder ?? 0),
    }

    try {
      if (editingId) {
        await adminApi.updateJob(editingId, payload)
      } else {
        await adminApi.createJob(payload)
      }
      setDraft(emptyJob())
      setEditingId(null)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save job')
    }
  }

  const edit = (job: AdminJob) => {
    setEditingId(job.id)
    setDraft({
      ...job,
      responsibilities: arrayToLines(job.responsibilities) as unknown as string[],
      requirements: arrayToLines(job.requirements) as unknown as string[],
      portfolio: arrayToLines(job.portfolio) as unknown as string[],
      commercial: arrayToLines(job.commercial) as unknown as string[],
    })
  }

  const remove = async (id: string) => {
    if (!window.confirm('Delete this job?')) return
    await adminApi.deleteJob(id)
    await load()
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="page-title mb-2">Careers Jobs</h2>
        <p className="page-subtitle">Published jobs appear on the public Careers page.</p>
      </div>

      <form onSubmit={save} className="panel p-6 space-y-4">
        <h3 className="text-lg font-semibold">{editingId ? 'Edit job' : 'Add job'}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="input" placeholder="Title" value={draft.title ?? ''} onChange={(e) => setDraft({ ...draft, title: e.target.value })} required />
          <input className="input" placeholder="Location" value={draft.location ?? ''} onChange={(e) => setDraft({ ...draft, location: e.target.value })} required />
          <input className="input" placeholder="Type" value={draft.type ?? ''} onChange={(e) => setDraft({ ...draft, type: e.target.value })} required />
          <input className="input" placeholder="Apply email subject" value={draft.applySubject ?? ''} onChange={(e) => setDraft({ ...draft, applySubject: e.target.value })} />
        </div>
        <textarea className="input min-h-24" placeholder="Summary" value={draft.summary ?? ''} onChange={(e) => setDraft({ ...draft, summary: e.target.value })} required />
        <textarea className="input min-h-28" placeholder="Responsibilities (one per line)" value={String(draft.responsibilities ?? '')} onChange={(e) => setDraft({ ...draft, responsibilities: e.target.value as unknown as string[] })} />
        <textarea className="input min-h-28" placeholder="Requirements (one per line)" value={String(draft.requirements ?? '')} onChange={(e) => setDraft({ ...draft, requirements: e.target.value as unknown as string[] })} />
        <textarea className="input min-h-24" placeholder="About Girakee (optional)" value={draft.about ?? ''} onChange={(e) => setDraft({ ...draft, about: e.target.value })} />
        <textarea className="input min-h-24" placeholder="Overview (optional)" value={draft.overview ?? ''} onChange={(e) => setDraft({ ...draft, overview: e.target.value })} />
        <textarea className="input min-h-24" placeholder="How to apply (optional)" value={draft.howToApply ?? ''} onChange={(e) => setDraft({ ...draft, howToApply: e.target.value })} />
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2 text-sm text-white/60">
            <input type="checkbox" checked={Boolean(draft.active)} onChange={(e) => setDraft({ ...draft, active: e.target.checked ? 1 : 0 })} />
            Active on Careers page
          </label>
          <input className="input max-w-[120px]" type="number" placeholder="Sort" value={draft.sortOrder ?? 0} onChange={(e) => setDraft({ ...draft, sortOrder: Number(e.target.value) })} />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn">{editingId ? 'Update job' : 'Create job'}</button>
          {editingId && (
            <button type="button" className="btn btn-secondary" onClick={() => { setEditingId(null); setDraft(emptyJob()) }}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="space-y-4">
        {loading ? <p className="text-white/45">Loading jobs…</p> : jobs.map((job) => (
          <div key={job.id} className="panel p-5 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <span className={`text-xs px-2 py-1 border ${job.active ? 'border-emerald-400/30 text-emerald-300' : 'border-white/15 text-white/40'}`}>
                  {job.active ? 'Active' : 'Hidden'}
                </span>
              </div>
              <p className="text-sm text-white/45 mb-2">{job.location} · {job.type}</p>
              <p className="text-sm text-white/60">{job.summary}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button type="button" className="btn btn-secondary" onClick={() => edit(job)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => remove(job.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
