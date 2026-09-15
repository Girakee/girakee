import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { company } from '../../data/company'
import { fetchPaymentOptions, submitProgramForm, type ApiPaymentOption } from '../../lib/api'

type ProgramKind = 'internship' | 'ojt'

const config: Record<
  ProgramKind,
  {
    title: string
    subhead: string
    submitLabel: string
    subject: string
  }
> = {
  internship: {
    title: 'Apply Online',
    subhead: 'Upload your resume and our team will review your application.',
    submitLabel: 'Submit',
    subject: 'Student Internship Application',
  },
  ojt: {
    title: 'Register for Engineering Residency',
    subhead: 'Complete registration below. When payments are enabled, you will be redirected to Razorpay after submit.',
    submitLabel: 'Submit',
    subject: 'Graduate Engineering Residency Registration',
  },
}

const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say']

const qualificationOptions = [
  '10th / SSLC',
  '12th / PUC',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'PhD / Doctorate',
  'Other',
]

const domainOptions = [
  'Full-Stack / Web & Mobile',
  'Applied AI & Computer Vision',
  'Cloud & DevOps',
  'QA Automation',
  'Data Engineering',
  'Cybersecurity',
]

interface ProgramApplicationFormProps {
  kind: ProgramKind
}

function FormRow({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid md:grid-cols-[minmax(11rem,1fr)_2fr] gap-2 md:gap-6 md:items-start">
      <label htmlFor={htmlFor} className="block text-sm text-white/55 md:pt-3.5">
        {label}
        {required ? ' *' : ''}
      </label>
      <div>
        {children}
        {hint && <p className="text-xs text-white/35 mt-2 leading-relaxed">{hint}</p>}
      </div>
    </div>
  )
}

export default function ProgramApplicationForm({ kind }: ProgramApplicationFormProps) {
  const meta = config[kind]
  const [submitted, setSubmitted] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [paymentsEnabled, setPaymentsEnabled] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)
  const [paymentOptions, setPaymentOptions] = useState<ApiPaymentOption[]>([])

  useEffect(() => {
    if (kind !== 'ojt') return
    fetchPaymentOptions()
      .then((result) => {
        setPaymentsEnabled(result.paymentsEnabled)
        setPaymentUrl(result.paymentUrl)
        setPaymentOptions(result.options)
      })
      .catch(() => {
        setPaymentsEnabled(false)
        setPaymentOptions([])
      })
  }, [kind])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const result = await submitProgramForm(kind, data)
      const redirectUrl = result.redirectToPayment ?? (kind === 'ojt' && paymentsEnabled ? paymentUrl : null)

      if (redirectUrl) {
        window.location.href = redirectUrl
        return
      }

      setSubmittedEmail(String(data.get('email') ?? ''))
      setConfirmationSent(result.candidateEmailSent)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit application')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle size={40} className="text-cyan mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Application received</h3>
        <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
          Thank you. Our team will review your application and respond within 24 business hours at the email you provided.
          {confirmationSent && submittedEmail ? ` A confirmation email was sent to ${submittedEmail}.` : ''}
          {kind === 'ojt' && paymentsEnabled
            ? ' After submit you will be redirected to complete payment.'
            : ''}
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3.5 min-h-[48px] text-base border border-white/10 bg-navy-deep/60 text-white focus:outline-none focus:border-cyan'

  const showPaymentSection = kind === 'ojt' && paymentsEnabled

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
      <div>
        <h3 className="editorial-display text-2xl text-white mb-2">{meta.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed">{meta.subhead}</p>
      </div>

      <div className="space-y-5">
        <FormRow label="First name" htmlFor={`${kind}-firstName`} required>
          <input
            id={`${kind}-firstName`}
            name="firstName"
            required
            autoComplete="given-name"
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Last name" htmlFor={`${kind}-lastName`}>
          <input
            id={`${kind}-lastName`}
            name="lastName"
            autoComplete="family-name"
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Email" htmlFor={`${kind}-email`} required>
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Phone" htmlFor={`${kind}-phone`} required>
          <input
            id={`${kind}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Date of birth" htmlFor={`${kind}-dateOfBirth`} required>
          <input
            id={`${kind}-dateOfBirth`}
            name="dateOfBirth"
            type="date"
            required
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Gender" htmlFor={`${kind}-gender`} required>
          <select id={`${kind}-gender`} name="gender" required className={inputClass} defaultValue="">
            <option value="">Select</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormRow>

        <FormRow label="Highest qualification" htmlFor={`${kind}-highestQualification`} required>
          <select
            id={`${kind}-highestQualification`}
            name="highestQualification"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="">Select</option>
            {qualificationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormRow>

        <FormRow label="College / University" htmlFor={`${kind}-college`} required>
          <input id={`${kind}-college`} name="college" required className={inputClass} />
        </FormRow>

        <FormRow label="Current city" htmlFor={`${kind}-currentCity`} required>
          <input
            id={`${kind}-currentCity`}
            name="currentCity"
            required
            autoComplete="address-level2"
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Domain interested" htmlFor={`${kind}-domainInterested`} required>
          <select
            id={`${kind}-domainInterested`}
            name="domainInterested"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="">Select</option>
            {domainOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormRow>

        <FormRow
          label="Business developer code"
          htmlFor={`${kind}-businessDeveloperCode`}
          required
          hint="If no business developer, kindly mention &quot;NONE&quot;."
        >
          <input
            id={`${kind}-businessDeveloperCode`}
            name="businessDeveloperCode"
            required
            placeholder="NONE"
            className={inputClass}
          />
        </FormRow>

        <FormRow label="Resume (PDF, DOC, DOCX)" htmlFor={`${kind}-resume`} required>
          <input
            id={`${kind}-resume`}
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf"
            className={`${inputClass} file:mr-4 file:py-1 file:px-3 file:border-0 file:bg-cyan/20 file:text-cyan`}
          />
        </FormRow>
      </div>

      {showPaymentSection && (
        <div className="p-5 border border-cyan/20 bg-cyan/[0.04] space-y-4">
          <p className="text-sm font-semibold text-white">Payment</p>
          <p className="text-xs text-white/50 leading-relaxed">
            After you submit this registration, you will be redirected to our secure Razorpay payment page to confirm your residency seat.
          </p>
          {paymentOptions.length > 0 && (
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-cyan/70">Available payment options</p>
              {paymentOptions.map((option) => (
                <div key={option.id} className="px-4 py-3 border border-white/[0.08] bg-white/[0.03]">
                  <p className="text-sm text-white">{option.label}</p>
                  <p className="text-xs text-white/45 mt-1 leading-relaxed">{option.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <FormRow label="Note (optional)" htmlFor={`${kind}-message`}>
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={4}
          className={`${inputClass} resize-none min-h-[100px]`}
          placeholder="Graduation year, GitHub, or anything we should know."
        />
      </FormRow>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex flex-wrap gap-3 pt-2">
        <button type="submit" className="btn-primary min-w-[120px]" disabled={loading}>
          {loading ? 'Submitting…' : meta.submitLabel}
        </button>
        <button type="reset" className="btn-secondary min-w-[120px]" disabled={loading}>
          Reset
        </button>
      </div>

      <p className="text-xs text-white/35">
        Submissions are stored securely and emailed to {company.email}.
      </p>
    </form>
  )
}
