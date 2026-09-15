import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'
import { v4 as uuid } from 'uuid'
import { config } from '../config.js'
import { getDb, getSetting, getPaymentUrl, mapJob, mapPaymentOption, paymentsEnabled } from '../db.js'
import { sendFormSubmissionEmails } from '../services/email.js'

const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, config.uploadDir),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname || '').toLowerCase()
      cb(null, `${Date.now()}-${uuid()}${ext}`)
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['.pdf', '.doc', '.docx']
    const ext = path.extname(file.originalname || '').toLowerCase()
    if (!allowed.includes(ext)) {
      cb(new Error('Resume must be PDF, DOC, or DOCX'))
      return
    }
    cb(null, true)
  },
})

router.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'girakee-api' })
})

router.get('/jobs', (_req, res) => {
  const rows = getDb()
    .prepare('SELECT * FROM jobs WHERE active = 1 ORDER BY sort_order ASC, created_at DESC')
    .all() as Record<string, unknown>[]
  res.json({ jobs: rows.map(mapJob) })
})

router.get('/payment-options', (_req, res) => {
  const enabled = paymentsEnabled()
  const rows = getDb()
    .prepare('SELECT * FROM payment_options WHERE enabled = 1 ORDER BY sort_order ASC, created_at ASC')
    .all() as Record<string, unknown>[]
  res.json({
    paymentsEnabled: enabled,
    paymentUrl: enabled ? getPaymentUrl() : null,
    options: enabled ? rows.map(mapPaymentOption) : [],
  })
})

function parseProgramApplication(body: Record<string, unknown> | undefined) {
  const firstName = String(body?.firstName ?? '').trim()
  const lastName = String(body?.lastName ?? '').trim()
  const email = String(body?.email ?? '').trim()
  const phone = String(body?.phone ?? '').trim()
  const dateOfBirth = String(body?.dateOfBirth ?? '').trim()
  const gender = String(body?.gender ?? '').trim()
  const highestQualification = String(body?.highestQualification ?? '').trim()
  const college = String(body?.college ?? '').trim()
  const currentCity = String(body?.currentCity ?? '').trim()
  const domainInterested = String(body?.domainInterested ?? body?.track ?? '').trim()
  const businessDeveloperCode = String(body?.businessDeveloperCode ?? '').trim()
  const message = String(body?.message ?? '').trim()
  const payment = String(body?.payment ?? '').trim()
  const name = [firstName, lastName].filter(Boolean).join(' ')

  if (
    !firstName ||
    !email ||
    !phone ||
    !dateOfBirth ||
    !gender ||
    !highestQualification ||
    !college ||
    !currentCity ||
    !domainInterested ||
    !businessDeveloperCode
  ) {
    return null
  }

  return {
    firstName,
    lastName,
    name,
    email,
    phone,
    dateOfBirth,
    gender,
    highestQualification,
    college,
    currentCity,
    domainInterested,
    businessDeveloperCode,
    message: message || undefined,
    payment: payment || undefined,
  }
}

async function storeSubmission(input: {
  formType: string
  payload: Record<string, unknown>
  candidateEmail: string
  candidateName: string
  resumePath?: string | null
  resumeOriginalName?: string | null
  subject: string
}) {
  const id = uuid()
  const db = getDb()
  db.prepare(
    `INSERT INTO submissions (id, form_type, payload, resume_path, resume_original_name, email_sent, admin_email_sent, candidate_email_sent)
     VALUES (?, ?, ?, ?, ?, 0, 0, 0)`,
  ).run(
    id,
    input.formType,
    JSON.stringify(input.payload),
    input.resumePath ?? null,
    input.resumeOriginalName ?? null,
  )

  let adminSent = false
  let candidateSent = false
  try {
    const result = await sendFormSubmissionEmails({
      formType: input.formType,
      subject: input.subject,
      payload: input.payload,
      candidateEmail: input.candidateEmail,
      candidateName: input.candidateName,
      resumePath: input.resumePath,
      resumeOriginalName: input.resumeOriginalName,
    })
    adminSent = result.adminSent
    candidateSent = result.candidateSent
    if (!adminSent && !candidateSent) {
      console.warn(`[email] Submission ${id} (${input.formType}) stored but no emails were delivered`)
    }
  } catch (error) {
    console.error('[email] Failed to send submission emails', error)
  }

  db.prepare(
    `UPDATE submissions
     SET email_sent = ?, admin_email_sent = ?, candidate_email_sent = ?
     WHERE id = ?`,
  ).run(adminSent ? 1 : 0, adminSent ? 1 : 0, candidateSent ? 1 : 0, id)

  return { id, emailSent: adminSent, adminEmailSent: adminSent, candidateEmailSent: candidateSent }
}

router.post('/submissions/contact', async (req, res) => {
  const { name, email, company, phone, service, message } = req.body ?? {}
  if (!name || !email || !company || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const payload = { name, email, company, phone, service, message }
  const result = await storeSubmission({
    formType: 'contact',
    payload,
    candidateEmail: String(email),
    candidateName: String(name),
    subject: `Website inquiry — ${name}${company ? ` (${company})` : ''}`,
  })

  return res.status(201).json({ ok: true, ...result })
})

router.post('/submissions/callback', async (req, res) => {
  const { name, email, phone } = req.body ?? {}
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const payload = { name, email, phone }
  const result = await storeSubmission({
    formType: 'callback',
    payload,
    candidateEmail: String(email),
    candidateName: String(name),
    subject: `Callback request — ${name}`,
  })

  return res.status(201).json({ ok: true, ...result })
})

router.post('/submissions/internship', upload.single('resume'), async (req, res) => {
  const application = parseProgramApplication(req.body)
  if (!application || !req.file) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { payment: _payment, ...payload } = application
  const result = await storeSubmission({
    formType: 'internship',
    payload,
    candidateEmail: application.email,
    candidateName: application.name,
    resumePath: req.file.path,
    resumeOriginalName: req.file.originalname,
    subject: `Student Internship Application — ${application.name}`,
  })

  return res.status(201).json({ ok: true, ...result })
})

router.post('/submissions/ojt', upload.single('resume'), async (req, res) => {
  const application = parseProgramApplication(req.body)
  if (!application || !req.file) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { payment: _payment, ...payload } = application
  const result = await storeSubmission({
    formType: 'ojt',
    payload,
    candidateEmail: application.email,
    candidateName: application.name,
    resumePath: req.file.path,
    resumeOriginalName: req.file.originalname,
    subject: `Graduate Engineering Residency Registration — ${application.name}`,
  })

  return res.status(201).json({
    ok: true,
    ...result,
    redirectToPayment: paymentsEnabled() ? getPaymentUrl() : null,
  })
})

router.post('/submissions/career-application', upload.single('resume'), async (req, res) => {
  const { name, email, phone, jobId, jobTitle, linkedin, message } = req.body ?? {}
  if (!name || !email || !phone || !jobTitle) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const payload = { name, email, phone, jobId, jobTitle, linkedin, message }
  const result = await storeSubmission({
    formType: 'career',
    payload,
    candidateEmail: String(email),
    candidateName: String(name),
    resumePath: req.file?.path ?? null,
    resumeOriginalName: req.file?.originalname ?? null,
    subject: `Career Application — ${jobTitle} — ${name}`,
  })

  return res.status(201).json({ ok: true, ...result })
})

router.get('/seo/site', (_req, res) => {
  res.json({
    siteUrl: config.siteUrl,
    siteName: 'Girakee Software Services',
    defaultTitle: 'Digital Transformation & Enterprise Software Engineering',
    defaultDescription:
      'Architecting scalable web systems, enterprise cloud platforms, and production-grade AI solutions from Bengaluru to clients across the Middle East, EU, UK, and US.',
    logo: `${config.siteUrl}/girakee-logo.png`,
    email: getSetting('notify_email', config.notifyEmail),
  })
})

export default router
