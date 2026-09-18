#!/usr/bin/env node
/** Export submissions from local SQLite for VPS import. */
import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.resolve(__dirname, '../server/data/girakee.sqlite')
const outPath = path.resolve(__dirname, '../deploy/submissions-export.json')

const db = new Database(dbPath)
const rows = db.prepare('SELECT * FROM submissions ORDER BY created_at ASC').all()
fs.writeFileSync(outPath, JSON.stringify(rows, null, 2))
console.log(`Exported ${rows.length} submissions to ${outPath}`)
