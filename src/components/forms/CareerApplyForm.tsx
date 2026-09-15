import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { company } from '../../data/company'
import { submitCareerApplication } from '../../lib/api'

interface CareerApplyFormProps {
  jobId: string
  jobTitle: string
  onClose: () => void
}

export default function CareerApplyForm({ jobId, jobTitle, onClose }: CareerApplyFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    data.set('jobId', jobId)
    data.set('jobTitle', jobTitle)

    try {
      const result = await submitCareerApplication(data)
      setSubmittedEmail(String(data.get('email') ?? ''))
      setConfirmationSent(result.candidateEmailSent)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit application')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 min-h-[48px] text-base border border-white/10 bg-navy-deep/60 text-white focus:outline-none focus:border-cyan'

  if (submitted) {
    return (
      <div className="border-t border-white/[0.06] pt-5 text-center py-6">
        <CheckCircle size={36} className="text-cyan mx-auto mb-3" />
        <h4 className="text-lg font-semibold text-white mb-2">Application submitted</h4>
        <p className="text-sm text-white/50 max-w-md mx-auto">
          Thank you for applying for {jobTitle}. Our team will review your profile and respond at the email you provided.
          {confirmationSent && submittedEmail ? ` A confirmation email was sent to ${submittedEmail}.` : ''}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/[0.06] pt-5 space-y-4">
      <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Apply for this role</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Full name *" className={inputClass} />
        <input name="email" type="email" required placeholder="Email *" className={inputClass} />
        <input name="phone" type="tel" required placeholder="Phone / WhatsApp *" className={inputClass} />
        <input name="linkedin" placeholder="LinkedIn or portfolio" className={inputClass} />
      </div>
      <input name="resume" type="file" required accept=".pdf,.doc,.docx,application/pdf" className={inputClass} />
      <textarea name="message" rows={4} placeholder="Short note about your experience" className={`${inputClass} resize-none min-h-[100px]`} />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Submitting…' : 'Submit application'}
        </button>
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
      <p className="text-xs text-white/35">Applications are stored securely and emailed to {company.email}.</p>
    </form>
  )
}
