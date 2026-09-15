import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useNav } from '../../context/NavContext'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { company } from '../../data/company'
import { submitCallback } from '../../lib/api'

interface CallbackForm {
  name: string
  email: string
  phone: string
}

interface CallbackErrors {
  name?: string
  email?: string
  phone?: string
}

const initial: CallbackForm = { name: '', email: '', phone: '' }

export default function CallbackRequestModal() {
  const { callbackOpen, closeCallback } = useNav()
  const { reduced } = useMotionConfig()
  const [form, setForm] = useState<CallbackForm>(initial)
  const [errors, setErrors] = useState<CallbackErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)

  useEffect(() => {
    if (!callbackOpen) {
      setForm(initial)
      setErrors({})
      setSubmitted(false)
    }
  }, [callbackOpen])

  useEffect(() => {
    if (!callbackOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCallback()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [callbackOpen, closeCallback])

  const validate = (): boolean => {
    const next: CallbackErrors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Number is required'
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) next.phone = 'Enter a valid number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    try {
      const result = await submitCallback({
        name: form.name,
        email: form.email,
        phone: form.phone,
      })
      setConfirmationSent(result.candidateEmailSent)
      setSubmitted(true)
    } catch {
      setErrors({ phone: `Unable to submit. Email ${company.email} directly.` })
    }
  }

  const inputClass = (field: keyof CallbackErrors) =>
    `w-full px-4 py-3.5 min-h-[48px] text-base border bg-navy-deep/60 text-white focus:outline-none transition-colors ${
      errors[field] ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-cyan'
    }`

  return (
    <AnimatePresence>
      {callbackOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            className="fixed inset-0 z-[70] bg-navy-deep/80 backdrop-blur-sm"
            onClick={closeCallback}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-title"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[80] inset-x-4 top-[12vh] mx-auto max-w-md holographic-panel bg-navy-dark p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="eyebrow eyebrow-dark text-[0.625rem] mb-2">Talk to an Expert</p>
                <h2 id="callback-title" className="text-xl font-semibold text-white">
                  Request a callback
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCallback}
                className="p-2 text-white/40 hover:text-white touch-manipulation"
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {submitted ? (
              <p className="text-sm text-white/55 leading-relaxed">
                Your callback request was received.
                {confirmationSent
                  ? ` A confirmation email was sent to ${form.email}.`
                  : ` Our team will reach out shortly.`}
              </p>
            ) : (
              <form onSubmit={submit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="callback-name" className="block text-sm text-white/50 mb-2">
                    Name *
                  </label>
                  <input
                    id="callback-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass('name')}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="callback-email" className="block text-sm text-white/50 mb-2">
                    Email *
                  </label>
                  <input
                    id="callback-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className={inputClass('email')}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="callback-phone" className="block text-sm text-white/50 mb-2">
                    Number *
                  </label>
                  <input
                    id="callback-phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    className={inputClass('phone')}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full touch-manipulation">
                  Request callback
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
