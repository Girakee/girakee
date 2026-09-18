#!/usr/bin/env node
/** Import deploy/submissions-export.json into SQLite. Run: npm --prefix server run import:submissions */
import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const exportPath = path.resolve(__dirname, '../../deploy/submissions-export.json')
const dbPath = path.resolve(__dirname, '../data/girakee.sqlite')

if (!fs.existsSync(exportPath)) {
  console.error('Missing deploy/submissions-export.json')
  process.exit(1)
}

const rows = JSON.parse(fs.readFileSync(exportPath, 'utf8'))
const db = new Database(dbPath)
const insert = db.prepare(`
  INSERT OR IGNORE INTO submissions (
    id, form_type, payload, resume_path, resume_original_name,
    email_sent, admin_email_sent, candidate_email_sent, created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`)

let imported = 0
for (const row of rows) {
  const result = insert.run(
    row.id,
    row.form_type,
    row.payload,
    row.resume_path,
    row.resume_original_name,
    row.email_sent,
    row.admin_email_sent,
    row.candidate_email_sent,
    row.created_at,
  )
  if (result.changes) imported++
}

console.log(`Imported ${imported} of ${rows.length} submissions`)
