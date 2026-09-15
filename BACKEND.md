# Girakee Backend & Admin

This repository now includes:

- `server/` — Express + SQLite API for careers jobs, payment options, form submissions, and email notifications
- `admin/` — separate React admin panel for managing jobs, payments, and viewing submissions

## Quick start (local)

### 1. Backend API

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Default API URL: `http://localhost:8787`

Default admin login (change in `.env` before production):

- Email: `admin@girakee.com`
- Password: `ChangeMe123!`

### 2. Admin panel

```bash
cd admin
cp .env.example .env
npm install
npm run dev
```

Admin URL: `http://localhost:5174`

### 3. Public website

```bash
cp .env.example .env
npm install
npm run dev
```

Website URL: `http://localhost:5173`

Set in root `.env`:

```env
VITE_API_URL=http://localhost:8787
```

## Admin capabilities

- **Careers jobs**: create, edit, activate/deactivate, delete jobs shown on `/careers`
- **Payment options**: create/edit payment choices for OJT residency registration
- **Master payments switch**: turn all payment options on/off for the residency form
- **Submissions**: view stored contact, callback, internship, residency, and career applications

## Email notifications

When SMTP is configured in `server/.env`, every form submission sends **two emails**:

1. **Admin notification** → `NOTIFY_EMAIL` with full submission details and resume attachment (if uploaded)
2. **Candidate confirmation** → the email address entered in the form with a receipt message

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=connect@girakee.com
SMTP_PASS=your-app-password
SMTP_FROM="Girakee Website <connect@girakee.com>"
NOTIFY_EMAIL=connect@girakee.com
```

If SMTP is not configured, submissions are still stored in SQLite and visible in the admin panel.

## Public API endpoints

- `GET /api/jobs`
- `GET /api/payment-options`
- `POST /api/submissions/contact`
- `POST /api/submissions/callback`
- `POST /api/submissions/internship`
- `POST /api/submissions/ojt`
- `POST /api/submissions/career-application`

## Admin API endpoints

All admin routes require `Authorization: Bearer <token>` from `POST /api/admin/login`.

- Jobs: `GET/POST /api/admin/jobs`, `PUT/DELETE /api/admin/jobs/:id`
- Payments: `GET/POST /api/admin/payment-options`, `PUT/DELETE /api/admin/payment-options/:id`
- Settings: `PATCH /api/admin/settings/payments`
- Submissions: `GET /api/admin/submissions`

## SEO

- Enhanced runtime SEO tags via `src/components/seo/SEO.tsx`
- Organization, Website, WebPage, Service, and JobPosting JSON-LD
- Sitemap generator: `npm run generate:sitemap`

## Production deployment

See **[DEPLOY.md](./DEPLOY.md)** for the full guide:

- **Website** → Netlify (Git push, set `VITE_API_URL`)
- **API + admin** → your VM (nginx + PM2/systemd + HTTPS)

Quick production env vars:

- Website (Netlify): `VITE_API_URL=https://api.girakee.com`
- Admin (VM build): `VITE_API_URL=https://api.girakee.com`
- Server: `CORS_ORIGINS=https://www.girakee.com,https://girakee.com,https://admin.girakee.com`

## Security checklist

- Change `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`
- Use HTTPS in production
- Restrict admin panel access (VPN, IP allowlist, or private subdomain)
- Configure real SMTP credentials
- Back up `server/data/girakee.sqlite` and uploaded resumes regularly
