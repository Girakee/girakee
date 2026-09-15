import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { submitContact } from '../../lib/api'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  service?: string
  message?: string
}

const engagementCategories = [
  'Software Engineering (Web, AI, Cloud, QA, Data)',
  'Dedicated Engineering Pod (Managed Squad)',
  'Staff Augmentation / Time & Material',
  'Contract-to-Hire Placement',
  'IT Recruitment & Specialized Search',
  'Corporate Tech Enablement / Upskilling',
  'Rozgar.ai Enterprise Deployment',
]

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const { shouldAnimate, transition } = useMotionConfig()
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required'
    if (!form.company.trim()) newErrors.company = 'Company name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Work email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid work email address'
    }
    if (!form.service) newErrors.service = 'Select an engagement category'
    if (!form.message.trim()) newErrors.message = 'Project scope is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const result = await submitContact({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      })
      setConfirmationSent(result.candidateEmailSent)
      setSubmitted(true)
    } catch {
      setErrors({ message: 'Unable to submit right now. Please email connect@girakee.com directly.' })
    }
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitted) {
    return (
      <AnimatePresence>
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={transition()}
          className="flex flex-col items-center justify-center py-12 sm:py-16 text-center"
        >
          <motion.div
            initial={shouldAnimate ? { scale: 0.8, opacity: 0 } : false}
            animate={{ scale: 1, opacity: 1 }}
            transition={transition({ delay: 0.1 })}
          >
            <CheckCircle size={48} className="text-cyan mb-6" />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Inquiry queued</h3>
          <p className="text-white/50 max-w-sm text-sm sm:text-base">
            Thank you. All inquiries are protected under mutual NDA standards. We respond within 24
            business hours.
            {confirmationSent ? ` A confirmation email was sent to ${form.email}.` : ''}
          </p>
        </motion.div>
      </AnimatePresence>
    )
  }

  const inputClass = (field?: string) =>
    `w-full px-4 py-3.5 min-h-[48px] text-base border bg-navy-deep/60 text-white focus:outline-none transition-colors ${
      field && errors[field as keyof FormErrors]
        ? 'border-red-400 focus:border-red-400'
        : 'border-white/10 focus:border-cyan'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm text-white/50 mb-2">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g., Alex Vance"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={inputClass('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-white/50 mb-2">Work Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputClass('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="company" className="block text-sm text-white/50 mb-2">Company Name *</label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
          className={inputClass('company')}
        />
        {errors.company && <p className="text-red-500 text-xs mt-1" role="alert">{errors.company}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-white/50 mb-2">Phone / WhatsApp</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+1 (555) 000-0000"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className={inputClass()}
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm text-white/50 mb-2">Engagement Category *</label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          className={inputClass('service')}
        >
          <option value="">Select a category</option>
          {engagementCategories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1" role="alert">{errors.service}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-white/50 mb-2">Project Scope & Requirements *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Provide an overview of your architecture, technical constraints, team size, or target timeline..."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputClass('message')} resize-none min-h-[120px]`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full touch-manipulation">
        Submit Inquiry & Request NDA
      </button>
      <p className="text-xs text-white/35 leading-relaxed">
        All inquiries are protected under mutual NDA standards. Response within 24 business hours.
      </p>
    </form>
  )
}
