import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { useMotionConfig } from '../../hooks/useMotionConfig'

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
  message?: string
}

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

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!form.message.trim()) newErrors.message = 'Project details are required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
      source: 'girakee-website',
    }
    console.info('Contact form submission:', payload)

    const subject = encodeURIComponent(`Inquiry from ${form.name}${form.company ? ` — ${form.company}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
    )
    window.location.href = `mailto:connect@girakee.com?subject=${subject}&body=${body}`
    setSubmitted(true)
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
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Message Sent</h3>
          <p className="text-white/50 max-w-sm text-sm sm:text-base">
            Thank you for reaching out. Our team will get back to you shortly.
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
        <label htmlFor="name" className="block text-sm text-white/50 mb-2">Name *</label>
        <input id="name" type="text" required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass('name')} aria-invalid={!!errors.name} />
        {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="company" className="block text-sm text-white/50 mb-2">Company</label>
        <input id="company" type="text" autoComplete="organization" value={form.company} onChange={(e) => update('company', e.target.value)} className={inputClass()} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="email" className="block text-sm text-white/50 mb-2">Email *</label>
          <input id="email" type="email" required autoComplete="email" inputMode="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass('email')} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-white/50 mb-2">Phone</label>
          <input id="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass()} />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm text-white/50 mb-2">Service</label>
        <select id="service" value={form.service} onChange={(e) => update('service', e.target.value)} className={inputClass()}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-white/50 mb-2">Project Details *</label>
        <textarea id="message" required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className={`${inputClass('message')} resize-none min-h-[120px]`} aria-invalid={!!errors.message} />
        {errors.message && <p className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full touch-manipulation">
        Start a Conversation
      </button>
    </form>
  )
}
