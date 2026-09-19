import { useCallback, useEffect, useMemo, useState } from 'react'
import { adminApi, type Submission } from '../api'
import { formatIndiaDateTime } from '../lib/datetime'

const FORM_TYPE_OPTIONS = [
  { value: 'all', label: 'All types' },
  { value: 'contact', label: 'Contact' },
  { value: 'callback', label: 'Callback' },
  { value: 'internship', label: 'Internship' },
  { value: 'ojt', label: 'Residency / OJT' },
  { value: 'career-application', label: 'Career application' },
] as const

function formatFieldLabel(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .trim()
}

function formatFormType(formType: string) {
  return FORM_TYPE_OPTIONS.find((option) => option.value === formType)?.label ?? formType
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [formType, setFormType] = useState('all')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [resumeError, setResumeError] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [resendingId, setResendingId] = useState<string | null>(null)

  const loadSubmissions = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const result = await adminApi.getSubmissions({
        formType,
        from: fromDate,
        to: toDate,
      })
      setSubmissions(result.submissions)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }, [formType, fromDate, toDate])

  useEffect(() => {
    loadSubmissions()
  }, [loadSubmissions])

  const summary = useMemo(
    () => ({
      total: submissions.length,
      withResume: submissions.filter((submission) => submission.hasResume).length,
    }),
    [submissions],
  )

  const handleOpenResume = async (submission: Submission) => {
    setResumeError('')
    try {
      await adminApi.openResume(submission.id)
    } catch (err) {
      setResumeError(err instanceof Error ? err.message : 'Unable to open resume')
    }
  }

  const handleDownloadResume = async (submission: Submission) => {
    setResumeError('')
    try {
      await adminApi.downloadResume(submission.id, submission.resumeOriginalName ?? 'resume.pdf')
    } catch (err) {
      setResumeError(err instanceof Error ? err.message : 'Unable to download resume')
    }
  }

  const handleResendEmails = async (submission: Submission) => {
    setResendingId(submission.id)
    setError('')
    try {
      const result = await adminApi.resendSubmissionEmails(submission.id)
      setSubmissions((current) =>
        current.map((item) =>
          item.id === submission.id
            ? {
                ...item,
                emailSent: result.adminEmailSent,
                adminEmailSent: result.adminEmailSent,
                candidateEmailSent: result.candidateEmailSent,
              }
            : item,
        ),
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to resend emails')
    } finally {
      setResendingId(null)
    }
  }

  const handleDelete = async (submission: Submission) => {
    const label = formatFormType(submission.formType)
    const confirmed = window.confirm(`Delete this ${label} submission? This cannot be undone.`)
    if (!confirmed) return

    setDeletingId(submission.id)
    setError('')
    try {
      await adminApi.deleteSubmission(submission.id)
      setSubmissions((current) => current.filter((item) => item.id !== submission.id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to delete submission')
    } finally {
      setDeletingId(null)
    }
  }

  const clearFilters = () => {
    setFormType('all')
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="page-title mb-2">Form Submissions</h2>
        <p className="page-subtitle">Stored contact, callback, internship, residency, and career applications.</p>
      </div>

      <div className="panel p-5 space-y-4">
        <p className="text-xs uppercase tracking-widest text-white/45">Filters</p>
        <div className="flex flex-wrap items-end gap-4">
          <div className="min-w-[180px]">
            <label className="block text-xs uppercase tracking-widest text-white/45 mb-2">Form type</label>
            <select className="input" value={formType} onChange={(e) => setFormType(e.target.value)}>
              {FORM_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/45 mb-2">From date</label>
            <input className="input" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/45 mb-2">To date</label>
            <input className="input" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </div>
          <button type="button" className="btn btn-secondary" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
        <p className="text-sm text-white/45">
          Showing {summary.total} submission{summary.total === 1 ? '' : 's'}
          {summary.withResume ? ` · ${summary.withResume} with resume` : ''}
        </p>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}
      {resumeError && <p className="text-sm text-red-400">{resumeError}</p>}

      {loading ? (
        <p className="text-white/45">Loading submissions…</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => (
            <article key={submission.id} className="panel p-5">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-widest text-cyan/70">
                    {formatFormType(submission.formType)}
                  </span>
                  <span className="text-xs text-white/40">{formatIndiaDateTime(submission.createdAt)} IST</span>
                  <span
                    className={`text-xs px-2 py-1 border ${submission.adminEmailSent ? 'border-emerald-400/30 text-emerald-300' : 'border-amber-400/30 text-amber-200'}`}
                  >
                    Admin email: {submission.adminEmailSent ? 'sent' : 'pending'}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 border ${submission.candidateEmailSent ? 'border-emerald-400/30 text-emerald-300' : 'border-amber-400/30 text-amber-200'}`}
                  >
                    Candidate email: {submission.candidateEmailSent ? 'sent' : 'pending'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {(!submission.adminEmailSent || !submission.candidateEmailSent) && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={resendingId === submission.id}
                      onClick={() => handleResendEmails(submission)}
                    >
                      {resendingId === submission.id ? 'Sending…' : 'Resend emails'}
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-danger"
                    disabled={deletingId === submission.id}
                    onClick={() => handleDelete(submission)}
                  >
                    {deletingId === submission.id ? 'Removing…' : 'Delete'}
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {Object.entries(submission.payload).map(([key, value]) => (
                  <div key={key} className="border border-white/8 p-3">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{formatFieldLabel(key)}</p>
                    <p className="text-white/75 whitespace-pre-wrap">{String(value)}</p>
                  </div>
                ))}
              </div>
              {submission.hasResume && (
                <div className="mt-5 p-4 border border-cyan/20 bg-cyan/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-cyan/70 mb-1">Resume</p>
                    <p className="text-sm text-white">{submission.resumeOriginalName ?? 'Uploaded file'}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className="btn" onClick={() => handleOpenResume(submission)}>
                      View resume
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleDownloadResume(submission)}>
                      Download
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
          {!submissions.length && !error && <p className="text-white/45">No submissions match these filters.</p>}
        </div>
      )}
    </div>
  )
}
