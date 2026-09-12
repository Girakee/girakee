import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { company } from '../../data/company'

type ProgramKind = 'internship' | 'ojt'

const config: Record<
  ProgramKind,
  {
    formName: string
    title: string
    subhead: string
    submitLabel: string
    includePayment: boolean
    subject: string
  }
> = {
  internship: {
    formName: 'internship-apply',
    title: 'Apply Online',
    subhead: 'Upload your resume and we will receive your application by email.',
    submitLabel: 'Submit Application & Resume',
    includePayment: false,
    subject: 'Student Internship Application',
  },
  ojt: {
    formName: 'ojt-register',
    title: 'Register for Engineering Residency',
    subhead:
      'Complete registration below. After review we send a secure payment link so you can confirm your seat.',
    submitLabel: 'Submit Registration & Request Payment Link',
    includePayment: true,
    subject: 'Graduate Engineering Residency Registration',
  },
}

interface ProgramApplicationFormProps {
  kind: ProgramKind
}

export default function ProgramApplicationForm({ kind }: ProgramApplicationFormProps) {
  const meta = config[kind]
  const [submitted, setSubmitted] = useState(false)
  const [resumeName, setResumeName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('form-name', meta.formName)

    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const college = String(data.get('college') ?? '')
    const track = String(data.get('track') ?? '')
    const payment = String(data.get('payment') ?? '')
    const note = String(data.get('message') ?? '')
    const file = data.get('resume')
    const fileLabel = file instanceof File && file.name ? file.name : resumeName || 'please attach resume'

    const body = [
      `${meta.subject}`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `College / University: ${college}`,
      track ? `Preferred track: ${track}` : '',
      payment ? `Payment preference: ${payment}` : '',
      `Resume: ${fileLabel}`,
      '',
      note,
      '',
      'Please attach the resume to this email if it is not included automatically.',
    ]
      .filter(Boolean)
      .join('\n')

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(meta.subject + (name ? ` — ${name}` : ''))}&body=${encodeURIComponent(body)}`

    fetch('/', { method: 'POST', body: data })
      .catch(() => undefined)
      .finally(() => {
        window.location.href = mailto
        setSubmitted(true)
      })
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle size={40} className="text-cyan mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Application received</h3>
        <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
          Your email client should open with the application details. Attach your resume if it is not
          included, then send to {company.email}. We respond within 24 business hours.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3.5 min-h-[48px] text-base border border-white/10 bg-navy-deep/60 text-white focus:outline-none focus:border-cyan'

  return (
    <form
      name={meta.formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value={meta.formName} />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <h3 className="editorial-display text-2xl text-white mb-2">{meta.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed">{meta.subhead}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${kind}-name`} className="block text-sm text-white/50 mb-2">
            Full Name *
          </label>
          <input id={`${kind}-name`} name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${kind}-email`} className="block text-sm text-white/50 mb-2">
            Email *
          </label>
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${kind}-phone`} className="block text-sm text-white/50 mb-2">
            Phone / WhatsApp *
          </label>
          <input id={`${kind}-phone`} name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${kind}-college`} className="block text-sm text-white/50 mb-2">
            College / University *
          </label>
          <input id={`${kind}-college`} name="college" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor={`${kind}-track`} className="block text-sm text-white/50 mb-2">
          Preferred track
        </label>
        <select id={`${kind}-track`} name="track" className={inputClass} defaultValue="">
          <option value="">Select a track</option>
          <option>Full-Stack / Web & Mobile</option>
          <option>Applied AI & Computer Vision</option>
          <option>Cloud & DevOps</option>
          <option>QA Automation</option>
        </select>
      </div>

      <div>
        <label htmlFor={`${kind}-resume`} className="block text-sm text-white/50 mb-2">
          Resume (PDF, DOC, DOCX) *
        </label>
        <input
          id={`${kind}-resume`}
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf"
          className={`${inputClass} file:mr-4 file:py-1 file:px-3 file:border-0 file:bg-cyan/20 file:text-cyan`}
          onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? '')}
        />
      </div>

      {meta.includePayment && (
        <div className="p-5 border border-cyan/20 bg-cyan/[0.04] space-y-4">
          <p className="text-sm font-semibold text-white">Payment option</p>
          <p className="text-xs text-white/50 leading-relaxed">
            Program fees are collected after application review. Choose how you want to pay; we will
            email a Razorpay / UPI payment link to confirm your residency seat.
          </p>
          <label htmlFor={`${kind}-payment`} className="block text-sm text-white/50 mb-2">
            Payment preference *
          </label>
          <select id={`${kind}-payment`} name="payment" required className={inputClass} defaultValue="">
            <option value="">Select payment option</option>
            <option>Send me a Razorpay payment link</option>
            <option>UPI / bank transfer details by email</option>
            <option>Corporate / sponsored cohort — invoice my employer</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor={`${kind}-message`} className="block text-sm text-white/50 mb-2">
          Note (optional)
        </label>
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={4}
          className={`${inputClass} resize-none min-h-[100px]`}
          placeholder="Graduation year, GitHub, or anything we should know."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {meta.submitLabel}
      </button>
      <p className="text-xs text-white/35">
        Submissions go to {company.email}. Attach your resume in the email if the file does not travel
        automatically.
      </p>
    </form>
  )
}
