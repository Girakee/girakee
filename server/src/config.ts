import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

dotenv.config({ path: path.resolve(rootDir, '.env') })

function envString(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key]?.trim()
    if (value) return value
  }
  return ''
}

function envNumber(keys: string[], fallback: number) {
  for (const key of keys) {
    const raw = process.env[key]?.trim()
    if (raw) {
      const parsed = Number(raw)
      if (!Number.isNaN(parsed)) return parsed
    }
  }
  return fallback
}

const smtpPort = envNumber(['SMTP_PORT', 'MAIL_PORT'], 587)
const smtpHost = envString('SMTP_HOST', 'MAIL_HOST')
const smtpUser = envString('SMTP_USER', 'EMAIL_USER')
const smtpPass = envString('SMTP_PASS', 'EMAIL_PASS')
const smtpSecure =
  process.env.SMTP_SECURE === 'true' ||
  process.env.MAIL_SECURE === 'true' ||
  smtpPort === 465

export const config = {
  port: Number(process.env.PORT ?? 8787),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  jwtSecret: process.env.JWT_SECRET ?? 'dev-only-change-me',
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@girakee.com',
  adminPassword: process.env.ADMIN_PASSWORD ?? 'ChangeMe123!',
  databasePath: path.resolve(rootDir, process.env.DATABASE_PATH ?? './data/girakee.sqlite'),
  uploadDir: path.resolve(rootDir, process.env.UPLOAD_DIR ?? './data/uploads'),
  siteUrl: process.env.SITE_URL ?? 'https://www.girakee.com',
  corsOrigins: (process.env.CORS_ORIGINS ?? 'http://localhost:5173,http://localhost:5174')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  notifyEmail: process.env.NOTIFY_EMAIL ?? 'connect@girakee.com',
  smtp: {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    user: smtpUser,
    pass: smtpPass,
    from:
      envString('SMTP_FROM', 'MAIL_FROM') ||
      (smtpUser ? `Girakee Website <${smtpUser}>` : 'Girakee Website <connect@girakee.com>'),
  },
}
