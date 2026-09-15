import { v4 as uuid } from 'uuid'
import { jobs as seedJobs } from '../../src/data/careers.ts'
import { getDb } from './db.js'

export const defaultPaymentOptions = [
  {
    slug: 'razorpay-link',
    label: 'Send me a Razorpay payment link',
    description: 'Secure payment link emailed after application review.',
    sortOrder: 1,
  },
  {
    slug: 'upi-bank-transfer',
    label: 'UPI / bank transfer details by email',
    description: 'Receive UPI or bank transfer instructions by email.',
    sortOrder: 2,
  },
  {
    slug: 'corporate-invoice',
    label: 'Corporate / sponsored cohort — invoice my employer',
    description: 'Employer-sponsored invoice workflow for residency seats.',
    sortOrder: 3,
  },
] as const

export function seedDatabase(force = false) {
  getDb()
  const db = getDb()

  const jobCount = db.prepare('SELECT COUNT(*) as count FROM jobs').get() as { count: number }
  if (force || jobCount.count === 0) {
    if (force) db.prepare('DELETE FROM jobs').run()
    const insert = db.prepare(
      `INSERT INTO jobs (
        id, title, location, type, summary, responsibilities, requirements,
        apply_subject, about, overview, portfolio, commercial, how_to_apply,
        active, sort_order, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, datetime('now'))`,
    )

    seedJobs.forEach((job, index) => {
      insert.run(
        job.id,
        job.title,
        job.location,
        job.type,
        job.summary,
        JSON.stringify(job.responsibilities),
        JSON.stringify(job.requirements),
        job.applySubject ?? null,
        job.about ?? null,
        job.overview ?? null,
        job.portfolio ? JSON.stringify(job.portfolio) : null,
        job.commercial ? JSON.stringify(job.commercial) : null,
        job.howToApply ?? null,
        index,
      )
    })
    console.log(`Seeded ${seedJobs.length} jobs`)
  }

  const paymentCount = db.prepare('SELECT COUNT(*) as count FROM payment_options').get() as { count: number }
  if (force || paymentCount.count === 0) {
    if (force) db.prepare('DELETE FROM payment_options').run()
    const insert = db.prepare(
      `INSERT INTO payment_options (id, slug, label, description, enabled, sort_order, updated_at)
       VALUES (?, ?, ?, ?, 1, ?, datetime('now'))`,
    )
    defaultPaymentOptions.forEach((option) => {
      insert.run(uuid(), option.slug, option.label, option.description, option.sortOrder)
    })
    console.log(`Seeded ${defaultPaymentOptions.length} payment options`)
  }
}

const isDirectRun = process.argv[1]?.includes('seed')
if (isDirectRun) {
  seedDatabase(process.argv.includes('--force'))
}
