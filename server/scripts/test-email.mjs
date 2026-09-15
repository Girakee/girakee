import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const config = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  from: process.env.SMTP_FROM,
  notify: process.env.NOTIFY_EMAIL,
}

console.log('Config:', { ...config, pass: config.pass ? '[set]' : '[missing]' })

const transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  secure: config.secure,
  auth: { user: config.user, pass: config.pass },
})

try {
  await transporter.verify()
  console.log('verify: OK')
} catch (error) {
  console.error('verify: FAILED', error.message)
  process.exit(1)
}

try {
  const admin = await transporter.sendMail({
    from: config.from,
    to: config.notify,
    subject: '[Admin] Test inquiry',
    text: 'Admin notification test',
  })
  console.log('admin send: OK', admin.messageId, admin.response)
} catch (error) {
  console.error('admin send: FAILED', error)
  process.exit(1)
}

try {
  const candidate = await transporter.sendMail({
    from: config.from,
    to: config.user,
    subject: 'We received your project inquiry',
    text: 'Candidate confirmation test',
    replyTo: config.notify,
  })
  console.log('candidate send: OK', candidate.messageId, candidate.response)
} catch (error) {
  console.error('candidate send: FAILED', error)
  process.exit(1)
}
