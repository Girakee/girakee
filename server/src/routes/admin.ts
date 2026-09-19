import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import fs from 'node:fs'
import path from 'node:path'
import { v4 as uuid } from 'uuid'
import { config } from '../config.js'
import { getDb, mapJob, mapPaymentOption, paymentsEnabled, setSetting, getPaymentUrl } from '../db.js'
import { requireAdmin, type AuthRequest } from '../middleware/auth.js'
import { sendFormSubmissionEmails } from '../services/email.js'
import { sqliteUtcToIso } from '../datetime.js'

const router = Router()

const allowedFormTypes = new Set(['contact', 'callback', 'internship', 'ojt', 'career-application'])

function resolveResumePath(storedPath: string | null | undefined) {
  if (!storedPath) return null
  const trimmed = String(storedPath).trim()
  if (!trimmed) return null
  if (fs.existsSync(trimmed)) return trimmed
  const basename = path.basename(trimmed)
  const candidate = path.join(config.uploadDir, basename)
  if (fs.existsSync(candidate)) return candidate
  return null
}

function candidateNameFromPayload(payload: Record<string, unknown>) {
  if (payload.name) return String(payload.name)
  const first = String(payload.firstName ?? '').trim()
  const last = String(payload.lastName ?? '').trim()
  return [first, last].filter(Boolean).join(' ') || 'Applicant'
}

function buildSubmissionSubject(formType: string, payload: Record<string, unknown>) {
  const name = candidateNameFromPayload(payload)
  switch (formType) {
    case 'contact':
      return `Website inquiry — ${name}${payload.company ? ` (${payload.company})` : ''}`
    case 'callback':
      return `Callback request — ${name}`
    case 'internship':
      return `Student Internship Application — ${name}`
    case 'ojt':
      return `Graduate Engineering Residency Registration — ${name}`
    case 'career':
    case 'career-application':
      return `Career Application — ${payload.jobTitle ?? 'Role'} — ${name}`
    default:
      return `Form submission — ${name}`
  }
}

function mapSubmissionRow(row: Record<string, unknown>) {
  return {
    id: String(row.id),
    formType: String(row.form_type),
    payload: JSON.parse(String(row.payload)),
    hasResume: Boolean(row.resume_path),
    resumeOriginalName: row.resume_original_name ? String(row.resume_original_name) : null,
    emailSent: Number(row.email_sent) === 1,
    adminEmailSent: Number(row.admin_email_sent ?? row.email_sent) === 1,
    candidateEmailSent: Number(row.candidate_email_sent) === 1,
    createdAt: sqliteUtcToIso(String(row.created_at)),
  }
}

router.post('/login', (req, res) => {
  const { email, password } = req.body ?? {}
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  const admin = getDb()
    .prepare('SELECT id, email, password_hash FROM admin_users WHERE email = ?')
    .get(email) as { id: string; email: string; password_hash: string } | undefined

  if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const token = jwt.sign({ email: admin.email }, config.jwtSecret, {
    subject: admin.id,
    expiresIn: '12h',
  })

  return res.json({ token, admin: { id: admin.id, email: admin.email } })
})

router.get('/me', requireAdmin, (req: AuthRequest, res) => {
  res.json({ admin: req.admin })
})

router.get('/jobs', requireAdmin, (_req, res) => {
  const rows = getDb()
    .prepare('SELECT * FROM jobs ORDER BY sort_order ASC, created_at DESC')
    .all() as Record<string, unknown>[]
  res.json({ jobs: rows.map(mapJob) })
})

router.post('/jobs', requireAdmin, (req, res) => {
  const body = req.body ?? {}
  const id = body.id || uuid()
  getDb()
    .prepare(
      `INSERT INTO jobs (
        id, title, location, type, summary, responsibilities, requirements,
        apply_subject, about, overview, portfolio, commercial, how_to_apply,
        active, sort_order, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
    )
    .run(
      id,
      body.title,
      body.location,
      body.type,
      body.summary,
      JSON.stringify(body.responsibilities ?? []),
      JSON.stringify(body.requirements ?? []),
      body.applySubject ?? null,
      body.about ?? null,
      body.overview ?? null,
      body.portfolio ? JSON.stringify(body.portfolio) : null,
      body.commercial ? JSON.stringify(body.commercial) : null,
      body.howToApply ?? null,
      body.active === false ? 0 : 1,
      Number(body.sortOrder ?? 0),
    )

  const row = getDb().prepare('SELECT * FROM jobs WHERE id = ?').get(id) as Record<string, unknown>
  return res.status(201).json({ job: mapJob(row) })
})

router.put('/jobs/:id', requireAdmin, (req, res) => {
  const { id } = req.params
  const body = req.body ?? {}
  const existing = getDb().prepare('SELECT id FROM jobs WHERE id = ?').get(id)
  if (!existing) return res.status(404).json({ error: 'Job not found' })

  getDb()
    .prepare(
      `UPDATE jobs SET
        title = ?, location = ?, type = ?, summary = ?, responsibilities = ?, requirements = ?,
        apply_subject = ?, about = ?, overview = ?, portfolio = ?, commercial = ?, how_to_apply = ?,
        active = ?, sort_order = ?, updated_at = datetime('now')
      WHERE id = ?`,
    )
    .run(
      body.title,
      body.location,
      body.type,
      body.summary,
      JSON.stringify(body.responsibilities ?? []),
      JSON.stringify(body.requirements ?? []),
      body.applySubject ?? null,
      body.about ?? null,
      body.overview ?? null,
      body.portfolio ? JSON.stringify(body.portfolio) : null,
      body.commercial ? JSON.stringify(body.commercial) : null,
      body.howToApply ?? null,
      body.active === false ? 0 : 1,
      Number(body.sortOrder ?? 0),
      id,
    )

  const row = getDb().prepare('SELECT * FROM jobs WHERE id = ?').get(id) as Record<string, unknown>
  return res.json({ job: mapJob(row) })
})

router.delete('/jobs/:id', requireAdmin, (req, res) => {
  getDb().prepare('DELETE FROM jobs WHERE id = ?').run(req.params.id)
  return res.json({ ok: true })
})

router.get('/payment-options', requireAdmin, (_req, res) => {
  const rows = getDb()
    .prepare('SELECT * FROM payment_options ORDER BY sort_order ASC, created_at ASC')
    .all() as Record<string, unknown>[]
  res.json({
    paymentsEnabled: paymentsEnabled(),
    paymentUrl: getPaymentUrl(),
    options: rows.map(mapPaymentOption),
  })
})

router.post('/payment-options', requireAdmin, (req, res) => {
  const body = req.body ?? {}
  const id = body.id || uuid()
  const slug =
    body.slug ||
    String(body.label ?? 'option')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

  getDb()
    .prepare(
      `INSERT INTO payment_options (id, slug, label, description, enabled, sort_order, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
    )
    .run(
      id,
      slug,
      body.label,
      body.description ?? '',
      body.enabled === false ? 0 : 1,
      Number(body.sortOrder ?? 0),
    )

  const row = getDb().prepare('SELECT * FROM payment_options WHERE id = ?').get(id) as Record<string, unknown>
  return res.status(201).json({ option: mapPaymentOption(row) })
})

router.put('/payment-options/:id', requireAdmin, (req, res) => {
  const { id } = req.params
  const body = req.body ?? {}
  const existing = getDb().prepare('SELECT id FROM payment_options WHERE id = ?').get(id)
  if (!existing) return res.status(404).json({ error: 'Payment option not found' })

  getDb()
    .prepare(
      `UPDATE payment_options SET
        slug = ?, label = ?, description = ?, enabled = ?, sort_order = ?, updated_at = datetime('now')
      WHERE id = ?`,
    )
    .run(
      body.slug,
      body.label,
      body.description ?? '',
      body.enabled === false ? 0 : 1,
      Number(body.sortOrder ?? 0),
      id,
    )

  const row = getDb().prepare('SELECT * FROM payment_options WHERE id = ?').get(id) as Record<string, unknown>
  return res.json({ option: mapPaymentOption(row) })
})

router.delete('/payment-options/:id', requireAdmin, (req, res) => {
  getDb().prepare('DELETE FROM payment_options WHERE id = ?').run(req.params.id)
  return res.json({ ok: true })
})

router.patch('/settings/payments', requireAdmin, (req, res) => {
  const enabled = req.body?.enabled === true
  setSetting('payments_enabled', enabled ? 'true' : 'false')
  return res.json({ paymentsEnabled: enabled })
})

router.patch('/settings/payment-url', requireAdmin, (req, res) => {
  const paymentUrl = String(req.body?.paymentUrl ?? '').trim()
  if (!paymentUrl) {
    return res.status(400).json({ error: 'Payment URL is required' })
  }
  setSetting('payment_url', paymentUrl)
  return res.json({ paymentUrl })
})

router.get('/submissions', requireAdmin, (req, res) => {
  const formType = String(req.query.formType ?? '').trim()
  const from = String(req.query.from ?? '').trim()
  const to = String(req.query.to ?? '').trim()

  let sql = 'SELECT * FROM submissions WHERE 1=1'
  const params: unknown[] = []

  if (formType && formType !== 'all') {
    if (!allowedFormTypes.has(formType)) {
      return res.status(400).json({ error: 'Invalid form type filter' })
    }
    sql += ' AND form_type = ?'
    params.push(formType)
  }
  if (from) {
    sql += ' AND date(created_at) >= date(?)'
    params.push(from)
  }
  if (to) {
    sql += ' AND date(created_at) <= date(?)'
    params.push(to)
  }

  sql += ' ORDER BY created_at DESC LIMIT 500'

  const rows = getDb().prepare(sql).all(...params) as Record<string, unknown>[]

  res.json({
    submissions: rows.map(mapSubmissionRow),
  })
})

router.post('/submissions/:id/resend-emails', requireAdmin, async (req, res) => {
  const row = getDb()
    .prepare('SELECT * FROM submissions WHERE id = ?')
    .get(req.params.id) as Record<string, unknown> | undefined

  if (!row) {
    return res.status(404).json({ error: 'Submission not found' })
  }

  const payload = JSON.parse(String(row.payload)) as Record<string, unknown>
  const candidateEmail = String(payload.email ?? '').trim()
  if (!candidateEmail) {
    return res.status(400).json({ error: 'Submission has no candidate email' })
  }

  const formType = String(row.form_type)
  const emailFormType = formType === 'career-application' ? 'career' : formType
  const resumePath = resolveResumePath(row.resume_path as string | null | undefined)

  const result = await sendFormSubmissionEmails({
    formType: emailFormType,
    subject: buildSubmissionSubject(formType, payload),
    payload,
    candidateEmail,
    candidateName: candidateNameFromPayload(payload),
    resumePath,
    resumeOriginalName: row.resume_original_name ? String(row.resume_original_name) : null,
  })

  getDb()
    .prepare(
      `UPDATE submissions
       SET email_sent = ?, admin_email_sent = ?, candidate_email_sent = ?
       WHERE id = ?`,
    )
    .run(result.adminSent ? 1 : 0, result.adminSent ? 1 : 0, result.candidateSent ? 1 : 0, req.params.id)

  return res.json({
    ok: true,
    adminEmailSent: result.adminSent,
    candidateEmailSent: result.candidateSent,
  })
})

router.delete('/submissions/:id', requireAdmin, (req, res) => {
  const row = getDb()
    .prepare('SELECT resume_path FROM submissions WHERE id = ?')
    .get(req.params.id) as { resume_path?: string | null } | undefined

  if (!row) {
    return res.status(404).json({ error: 'Submission not found' })
  }

  const filePath = resolveResumePath(row.resume_path)
  getDb().prepare('DELETE FROM submissions WHERE id = ?').run(req.params.id)

  if (filePath) {
    try {
      fs.unlinkSync(filePath)
    } catch {
      // Ignore missing files after DB row is removed.
    }
  }

  return res.json({ ok: true })
})

router.get('/submissions/:id/resume', requireAdmin, (req, res) => {
  const row = getDb()
    .prepare('SELECT resume_path, resume_original_name FROM submissions WHERE id = ?')
    .get(req.params.id) as { resume_path?: string | null; resume_original_name?: string | null } | undefined

  if (!row?.resume_path) {
    return res.status(404).json({ error: 'Resume not found for this submission' })
  }

  const filePath = resolveResumePath(row.resume_path)
  if (!filePath) {
    return res.status(404).json({ error: 'Resume file is missing on the server' })
  }

  return res.download(filePath, row.resume_original_name ? String(row.resume_original_name) : 'resume')
})

export default router
