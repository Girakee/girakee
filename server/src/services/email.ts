import nodemailer from 'nodemailer'
import { config } from '../config.js'

function normalizeFromAddress(from: string) {
  // Zoho requires the authenticated mailbox as the sender address.
  if (config.smtp.user) return `Girakee Website <${config.smtp.user}>`

  const trimmed = from.trim()
  if (trimmed.includes('@')) return trimmed
  return 'Girakee Website <connect@girakee.com>'
}

function createTransporter() {
  const { host, port, secure, user, pass } = config.smtp
  if (!host || !user || !pass) return null

  const options = {
    host,
    port,
    secure: port === 465 ? true : secure,
    requireTLS: port === 587,
    auth: { user, pass },
    tls: {
      minVersion: 'TLSv1.2' as const,
    },
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 20_000,
    family: 4 as const,
  }

  return nodemailer.createTransport(options)
}

const transporter = createTransporter()
const fromAddress = normalizeFromAddress(config.smtp.from)

export function isEmailConfigured() {
  return Boolean(transporter)
}

export async function verifyEmailTransport() {
  if (!transporter) {
    console.warn('[email] SMTP not configured (set SMTP_HOST, SMTP_USER, SMTP_PASS in server/.env)')
    return false
  }

  try {
    await transporter.verify()
    console.log(`[email] SMTP ready (${config.smtp.host}:${config.smtp.port}) as ${config.smtp.user}`)
    return true
  } catch (error) {
    console.error('[email] SMTP verification failed:', formatMailError(error))
    return false
  }
}

function formatMailError(error: unknown) {
  if (error instanceof Error) {
    const smtp = error as Error & { response?: string; responseCode?: number }
    return smtp.response ? `${smtp.message} — ${smtp.response}` : smtp.message
  }
  return String(error)
}

export function formatPayloadHtml(payload: Record<string, unknown>) {
  return Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;width:32%;"><strong>${escapeHtml(key)}</strong></td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${escapeHtml(String(value))}</td></tr>`,
    )
    .join('')
}

export function formatPayloadText(payload: Record<string, unknown>) {
  return Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join('\n')
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function wrapEmailHtml(title: string, body: string) {
  return `
    <div style="font-family:Inter,Arial,sans-serif;background:#050d18;color:#e2e8f0;padding:32px;">
      <div style="max-width:640px;margin:0 auto;background:#0a1628;border:1px solid rgba(8,175,199,0.25);padding:28px;">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#08afc7;">Girakee Software Services</p>
        <h1 style="margin:0 0 20px;font-size:24px;color:#ffffff;">${escapeHtml(title)}</h1>
        ${body}
        <p style="margin-top:28px;font-size:12px;color:#94a3b8;">${config.siteUrl} · ${config.notifyEmail}</p>
      </div>
    </div>
  `
}

const confirmationCopy: Record<
  string,
  (input: { name: string; payload: Record<string, unknown> }) => { subject: string; intro: string; footer: string }
> = {
  contact: ({ name }) => ({
    subject: 'We received your project inquiry',
    intro: `Hi ${name}, thank you for contacting Girakee. We received your project inquiry and our solutions team will review your scope.`,
    footer: 'All inquiries are handled under mutual NDA standards. We respond within 24 business hours.',
  }),
  callback: ({ name }) => ({
    subject: 'We received your callback request',
    intro: `Hi ${name}, thank you for requesting a callback. Our team has your details and will reach out shortly.`,
    footer: 'If you need to share additional context, reply to this email or write to connect@girakee.com.',
  }),
  internship: ({ name }) => ({
    subject: 'Your internship application was received',
    intro: `Hi ${name}, thank you for applying to the Girakee Student Engineering Internship track. We received your application and resume.`,
    footer: 'Our incubation team will review your profile and respond within 24 business hours.',
  }),
  ojt: ({ name }) => ({
    subject: 'Your engineering residency registration was received',
    intro: `Hi ${name}, thank you for registering for the Girakee Graduate Engineering Residency. We received your registration and resume.`,
    footer: 'After review, we will email next steps including payment confirmation if your seat is approved.',
  }),
  career: ({ name, payload }) => ({
    subject: `We received your application for ${payload.jobTitle ?? 'the role'}`,
    intro: `Hi ${name}, thank you for applying for ${payload.jobTitle ?? 'the open role'} at Girakee. We received your application.`,
    footer: 'Our hiring team will review your profile and respond if your experience matches the role requirements.',
  }),
}

async function sendMail(input: {
  to: string
  subject: string
  html: string
  text: string
  replyTo?: string
  attachments?: { filename: string; path: string }[]
}) {
  if (!transporter) return false

  await transporter.sendMail({
    from: fromAddress,
    to: input.to,
    replyTo: input.replyTo ?? config.notifyEmail,
    subject: input.subject,
    text: input.text,
    html: input.html,
    attachments: input.attachments,
  })

  return true
}

export async function sendAdminNotificationEmail(input: {
  subject: string
  payload: Record<string, unknown>
  formType: string
  resumeOriginalName?: string | null
  attachments?: { filename: string; path: string }[]
}) {
  const html = wrapEmailHtml(
    input.subject,
    `
      <p style="color:#cbd5e1;line-height:1.6;">A new <strong>${escapeHtml(input.formType)}</strong> submission was received on the Girakee website.</p>
      <table style="border-collapse:collapse;width:100%;margin-top:18px;background:#ffffff;color:#0f172a;">
        ${formatPayloadHtml(input.payload)}
      </table>
      ${input.resumeOriginalName ? `<p style="margin-top:16px;color:#cbd5e1;"><strong>Resume:</strong> ${escapeHtml(input.resumeOriginalName)}</p>` : ''}
    `,
  )

  const text = `${input.subject}\n\nNew ${input.formType} submission:\n\n${formatPayloadText(input.payload)}${
    input.resumeOriginalName ? `\nResume: ${input.resumeOriginalName}` : ''
  }`

  return sendMail({
    to: config.notifyEmail,
    subject: `[Admin] ${input.subject}`,
    html,
    text,
    replyTo: String(input.payload.email ?? config.notifyEmail),
    attachments: input.attachments,
  })
}

export async function sendCandidateConfirmationEmail(input: {
  formType: string
  candidateEmail: string
  candidateName: string
  payload: Record<string, unknown>
}) {
  const copy = confirmationCopy[input.formType]?.({
    name: input.candidateName,
    payload: input.payload,
  }) ?? {
    subject: 'We received your submission',
    intro: `Hi ${input.candidateName}, thank you for contacting Girakee.`,
    footer: 'Our team will review your message and respond shortly.',
  }

  const html = wrapEmailHtml(
    copy.subject,
    `
      <p style="color:#cbd5e1;line-height:1.7;">${escapeHtml(copy.intro)}</p>
      <p style="color:#cbd5e1;line-height:1.7;">${escapeHtml(copy.footer)}</p>
      <div style="margin-top:24px;padding:16px;border:1px solid rgba(8,175,199,0.25);background:rgba(8,175,199,0.08);">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#08afc7;">Submission summary</p>
        <pre style="margin:0;white-space:pre-wrap;font-family:Consolas,monospace;font-size:12px;color:#e2e8f0;">${escapeHtml(formatPayloadText(input.payload))}</pre>
      </div>
    `,
  )

  const text = `${copy.subject}\n\n${copy.intro}\n\n${copy.footer}\n\nSubmission summary:\n${formatPayloadText(input.payload)}`

  return sendMail({
    to: input.candidateEmail,
    subject: copy.subject,
    html,
    text,
    replyTo: config.notifyEmail,
  })
}

export async function sendFormSubmissionEmails(input: {
  formType: string
  subject: string
  payload: Record<string, unknown>
  candidateEmail: string
  candidateName: string
  resumePath?: string | null
  resumeOriginalName?: string | null
}) {
  if (!transporter) {
    console.warn('[email] SMTP not configured. Submission stored but emails not sent.')
    return { adminSent: false, candidateSent: false }
  }

  const attachments = input.resumePath
    ? [{ filename: input.resumeOriginalName ?? 'resume', path: input.resumePath }]
    : undefined

  let adminSent = false
  let candidateSent = false

  try {
    adminSent = await sendAdminNotificationEmail({
      subject: input.subject,
      payload: input.payload,
      formType: input.formType,
      resumeOriginalName: input.resumeOriginalName,
      attachments,
    })
  } catch (error) {
    console.error('[email] Failed to send admin notification:', formatMailError(error))
  }

  try {
    candidateSent = await sendCandidateConfirmationEmail({
      formType: input.formType,
      candidateEmail: input.candidateEmail,
      candidateName: input.candidateName,
      payload: input.payload,
    })
  } catch (error) {
    console.error('[email] Failed to send candidate confirmation:', formatMailError(error))
  }

  return { adminSent, candidateSent }
}
