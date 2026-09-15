import fs from 'node:fs'
import path from 'node:path'
import Database from 'better-sqlite3'
import bcrypt from 'bcryptjs'
import { v4 as uuid } from 'uuid'
import { config } from './config.js'
import type { JobRecord, PaymentOptionRecord } from './types.js'

let db: Database.Database | null = null

function parseJsonArray(value: string | null): string[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed.map(String) : []
  } catch {
    return []
  }
}

function parseOptionalJsonArray(value: string | null): string[] | null {
  if (!value) return null
  const parsed = parseJsonArray(value)
  return parsed.length ? parsed : null
}

export function getDb(): Database.Database {
  if (db) return db

  fs.mkdirSync(path.dirname(config.databasePath), { recursive: true })
  fs.mkdirSync(config.uploadDir, { recursive: true })

  db = new Database(config.databasePath)
  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = ON')

  db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS jobs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT NOT NULL,
      summary TEXT NOT NULL,
      responsibilities TEXT NOT NULL DEFAULT '[]',
      requirements TEXT NOT NULL DEFAULT '[]',
      apply_subject TEXT,
      about TEXT,
      overview TEXT,
      portfolio TEXT,
      commercial TEXT,
      how_to_apply TEXT,
      active INTEGER NOT NULL DEFAULT 1,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS payment_options (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      label TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      enabled INTEGER NOT NULL DEFAULT 1,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      form_type TEXT NOT NULL,
      payload TEXT NOT NULL,
      resume_path TEXT,
      resume_original_name TEXT,
      email_sent INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `)

  ensureAdminUser()
  ensureDefaultSettings()
  migrateSubmissions(db)
  return db
}

function migrateSubmissions(database: Database.Database) {
  const columns = database.prepare('PRAGMA table_info(submissions)').all() as { name: string }[]
  const names = new Set(columns.map((column) => column.name))
  if (!names.has('admin_email_sent')) {
    database.exec('ALTER TABLE submissions ADD COLUMN admin_email_sent INTEGER NOT NULL DEFAULT 0')
  }
  if (!names.has('candidate_email_sent')) {
    database.exec('ALTER TABLE submissions ADD COLUMN candidate_email_sent INTEGER NOT NULL DEFAULT 0')
  }
}

function ensureAdminUser() {
  const database = db!
  const existing = database.prepare('SELECT id FROM admin_users WHERE email = ?').get(config.adminEmail)
  if (existing) return

  database
    .prepare('INSERT INTO admin_users (id, email, password_hash) VALUES (?, ?, ?)')
    .run(uuid(), config.adminEmail, bcrypt.hashSync(config.adminPassword, 12))
}

function ensureDefaultSettings() {
  const database = db!
  const paymentsEnabled = database.prepare('SELECT value FROM settings WHERE key = ?').get('payments_enabled')
  if (!paymentsEnabled) {
    database.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('payments_enabled', 'true')
  }

  const paymentUrl = database.prepare('SELECT value FROM settings WHERE key = ?').get('payment_url')
  if (!paymentUrl) {
    database.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run(
      'payment_url',
      'https://rzp.io/rzp/wZTKJRns',
    )
  }
}

export function mapJob(row: Record<string, unknown>): JobRecord {
  return {
    id: String(row.id),
    title: String(row.title),
    location: String(row.location),
    type: String(row.type),
    summary: String(row.summary),
    responsibilities: parseJsonArray(String(row.responsibilities)),
    requirements: parseJsonArray(String(row.requirements)),
    applySubject: row.apply_subject ? String(row.apply_subject) : null,
    about: row.about ? String(row.about) : null,
    overview: row.overview ? String(row.overview) : null,
    portfolio: parseOptionalJsonArray(row.portfolio ? String(row.portfolio) : null),
    commercial: parseOptionalJsonArray(row.commercial ? String(row.commercial) : null),
    howToApply: row.how_to_apply ? String(row.how_to_apply) : null,
    active: Number(row.active),
    sortOrder: Number(row.sort_order),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  }
}

export function mapPaymentOption(row: Record<string, unknown>): PaymentOptionRecord {
  return {
    id: String(row.id),
    slug: String(row.slug),
    label: String(row.label),
    description: String(row.description),
    enabled: Number(row.enabled),
    sortOrder: Number(row.sort_order),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  }
}

export function getSetting(key: string, fallback = ''): string {
  const row = getDb().prepare('SELECT value FROM settings WHERE key = ?').get(key) as { value: string } | undefined
  return row?.value ?? fallback
}

export function setSetting(key: string, value: string) {
  getDb()
    .prepare(
      `INSERT INTO settings (key, value, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = datetime('now')`,
    )
    .run(key, value)
}

export function paymentsEnabled(): boolean {
  return getSetting('payments_enabled', 'true') !== 'false'
}

export function getPaymentUrl(): string {
  return getSetting('payment_url', 'https://rzp.io/rzp/wZTKJRns')
}
