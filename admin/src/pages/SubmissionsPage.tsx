import { useEffect, useState } from 'react'
import { adminApi, type Submission } from '../api'

function formatFieldLabel(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .trim()
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [error, setError] = useState('')
  const [resumeError, setResumeError] = useState('')

  useEffect(() => {
    adminApi
      .getSubmissions()
      .then((result) => setSubmissions(result.submissions))
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load submissions'))
  }, [])

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

  return (
    <div className="space-y-8">
      <div>
        <h2 className="page-title mb-2">Form Submissions</h2>
        <p className="page-subtitle">Stored contact, callback, internship, residency, and career applications.</p>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      {resumeError && <p className="text-sm text-red-400">{resumeError}</p>}
      <div className="space-y-4">
        {submissions.map((submission) => (
          <article key={submission.id} className="panel p-5">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-cyan/70">{submission.formType}</span>
              <span className="text-xs text-white/40">{new Date(submission.createdAt).toLocaleString()}</span>
              <span className={`text-xs px-2 py-1 border ${submission.adminEmailSent ? 'border-emerald-400/30 text-emerald-300' : 'border-amber-400/30 text-amber-200'}`}>
                Admin email: {submission.adminEmailSent ? 'sent' : 'pending'}
              </span>
              <span className={`text-xs px-2 py-1 border ${submission.candidateEmailSent ? 'border-emerald-400/30 text-emerald-300' : 'border-amber-400/30 text-amber-200'}`}>
                Candidate email: {submission.candidateEmailSent ? 'sent' : 'pending'}
              </span>
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
        {!submissions.length && !error && <p className="text-white/45">No submissions yet.</p>}
      </div>
    </div>
  )
}
