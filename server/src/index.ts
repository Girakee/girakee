import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { config } from './config.js'
import { getDb } from './db.js'
import { seedDatabase } from './seed.js'
import { isEmailConfigured, verifyEmailTransport } from './services/email.js'
import publicRoutes from './routes/public.js'
import adminRoutes from './routes/admin.js'

getDb()
seedDatabase()

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || config.corsOrigins.includes(origin)) {
        callback(null, true)
        return
      }
      callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
  }),
)

app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(config.uploadDir))

app.use('/api', publicRoutes)
app.use('/api/admin', adminRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'girakee-api', time: new Date().toISOString() })
})

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error)
  res.status(500).json({ error: error.message || 'Internal server error' })
})

app.listen(config.port, async () => {
  console.log(`Girakee API running on http://localhost:${config.port}`)
  console.log(`Uploads: ${path.relative(process.cwd(), config.uploadDir)}`)
  console.log(`Email notifications: ${isEmailConfigured() ? 'enabled' : 'disabled (configure SMTP in .env)'}`)
  if (isEmailConfigured()) {
    await verifyEmailTransport()
  }
})
