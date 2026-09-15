# Deploy Girakee

Split deployment:

| App | Host | URL |
|-----|------|-----|
| **Website** | Netlify (from Git, repo root) | `https://www.girakee.com` |
| **Admin** | Netlify (from Git, `admin/` folder) | `https://admin.girakee.com` or your Netlify URL |
| **API** | Your VM **`200.234.39.88`** | `https://api.girakee.com` |

---

## Your VM: `200.234.39.88`

### DNS records (at your domain registrar)

Create these **A records** pointing to **`200.234.39.88`**:

| Host / name | Type | Value |
|-------------|------|-------|
| `api` | A | `200.234.39.88` |
| `admin` | A | `200.234.39.88` |

That gives you `api.girakee.com` and `admin.girakee.com` on your VM.

Also keep your existing `www` / `@` records for Netlify (website stays on Netlify, not this VM).

### VM firewall / security group

Allow inbound:

| Port | Purpose |
|------|---------|
| **22** | SSH |
| **80** | HTTP (Let's Encrypt + redirect) |
| **443** | HTTPS (API + admin via nginx) |

Optional for initial testing only: **8787** (direct API). Close it once nginx + SSL are working.

> **Why not use the IP alone for Netlify?**  
> Netlify serves the site over **HTTPS**. Browsers block form requests from `https://www.girakee.com` to `http://200.234.39.88:8787`. You need **`https://api.girakee.com`** (domain + SSL on the VM).

### SSH into the VM and bootstrap

```bash
ssh your-user@200.234.39.88
```

Then (after code is on Git):

```bash
export GIRAKEE_REPO_URL=https://github.com/YOUR_ORG/girakee.git
bash deploy/vm-first-boot.sh
```

Or follow the manual steps in section 2 below.

### Quick test (on the VM)

```bash
curl http://127.0.0.1:8787/api/jobs
```

From your PC (only if port 8787 is open temporarily):

```bash
curl http://200.234.39.88:8787/api/jobs
```

---

## 1. Push code to Git

Commit and push this repo to GitHub (or GitLab/Bitbucket). Netlify will build from that remote.

Do **not** commit:

- `server/.env` (secrets)
- `server/data/` (SQLite DB + uploaded resumes)

---

## 2. Deploy backend on your VM

### VM requirements

- Ubuntu 22.04+ (or similar Linux)
- Node.js **20+**
- nginx (reverse proxy + TLS)
- A domain/subdomain pointing to the VM, e.g. `api.girakee.com`

### Install on the VM

```bash
# Node 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git

# Clone repo
sudo mkdir -p /opt/girakee
sudo chown $USER:$USER /opt/girakee
git clone https://github.com/YOUR_ORG/girakee.git /opt/girakee
cd /opt/girakee
```

### Configure API

```bash
cd /opt/girakee/server
cp .env.example .env
nano .env
```

Set production values in `server/.env`:

```env
PORT=8787
NODE_ENV=production
JWT_SECRET=<long-random-string>
ADMIN_EMAIL=admin@girakee.com
ADMIN_PASSWORD=<strong-password>
SITE_URL=https://www.girakee.com
CORS_ORIGINS=https://www.girakee.com,https://girakee.com,https://admin.girakee.com
NOTIFY_EMAIL=connect@girakee.com
SMTP_HOST=smtppro.zoho.in
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=notifications@girakee.com
SMTP_PASS=<zoho-app-password>
SMTP_FROM="Girakee Website <notifications@girakee.com>"
```

Install and start API:

```bash
cd /opt/girakee/server
npm ci --omit=dev
npm run seed
npm start
# Should print: Girakee API running on http://localhost:8787
```

Test locally on VM:

```bash
curl http://127.0.0.1:8787/api/jobs
```

### Run API on boot (choose one)

**Option A — PM2**

```bash
sudo npm install -g pm2
cd /opt/girakee
pm2 start deploy/ecosystem.config.cjs
pm2 save
pm2 startup
```

**Option B — systemd**

```bash
sudo cp deploy/girakee-api.service.example /etc/systemd/system/girakee-api.service
sudo systemctl daemon-reload
sudo systemctl enable --now girakee-api
sudo systemctl status girakee-api
```

### nginx + HTTPS

```bash
sudo cp deploy/nginx-girakee.conf.example /etc/nginx/sites-available/girakee
sudo ln -s /etc/nginx/sites-available/girakee /etc/nginx/sites-enabled/
sudo nginx -t

sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.girakee.com -d admin.girakee.com
sudo systemctl reload nginx
```

Open firewall if needed:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

Verify:

```bash
curl https://api.girakee.com/api/jobs
```

### Build admin panel on VM

```bash
cd /opt/girakee/admin
echo 'VITE_API_URL=https://api.girakee.com' > .env
npm ci
npm run build
```

nginx serves `admin/dist` at `admin.girakee.com` (see `deploy/nginx-girakee.conf.example`).

---

## 3b. Deploy admin to Netlify (recommended)

Use a **second Netlify site** from the same GitHub repo.

1. Netlify → **Add new site** → **Import from Git** → select `Girakee/girakee`
2. **Site configuration → Build settings:**
   - **Base directory:** `admin`
   - **Build command:** `npm run build` (from `admin/netlify.toml`)
   - **Publish directory:** `admin/dist`
3. **Environment variables:**

   | Key | Value |
   |-----|-------|
   | `VITE_API_URL` | `https://api.girakee.com` |

4. Deploy → open **`https://YOUR-ADMIN-SITE.netlify.app/login`**
5. Optional: **Domain settings** → add `admin.girakee.com` (CNAME to Netlify)

**Update VM API CORS** (`/opt/girakee/server/.env`):

```env
CORS_ORIGINS=https://www.girakee.com,https://girakee.com,https://YOUR-ADMIN-SITE.netlify.app,https://admin.girakee.com
```

Then restart API:

```bash
pm2 restart girakee-api
```

Login uses `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `server/.env` on the VM.

---

## 3. Deploy frontend to Netlify

1. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Select your repository
3. Build settings (should auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Site settings → Environment variables** → add:

   | Key | Value |
   |-----|-------|
   | `VITE_API_URL` | `https://api.girakee.com` |

5. Deploy the site
6. **Domain settings** → add custom domain `www.girakee.com` (and `girakee.com` redirect)

After deploy, test forms on the live site (contact, internship, careers). Submissions should appear in admin and trigger emails.

---

## 4. Post-deploy checklist

- [ ] Change `JWT_SECRET`, `ADMIN_PASSWORD` on VM
- [ ] Confirm `CORS_ORIGINS` includes your Netlify/custom domain
- [ ] Test `https://api.girakee.com/api/jobs` from browser
- [ ] Log in at `https://admin.girakee.com`
- [ ] Submit a test contact form on `https://www.girakee.com`
- [ ] Back up `server/data/girakee.sqlite` and `server/data/uploads/` regularly

---

## Updating after changes

**Website (Netlify):** push to Git → Netlify auto-rebuilds.

**API (VM):**

```bash
cd /opt/girakee
git pull
cd server && npm ci --omit=dev
pm2 restart girakee-api   # or: sudo systemctl restart girakee-api
```

**Admin (VM):**

```bash
cd /opt/girakee/admin
npm ci && npm run build
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Forms fail on website | Check `VITE_API_URL` in Netlify env vars; redeploy after changing |
| CORS error in browser | Add your site URL to `CORS_ORIGINS` in `server/.env`, restart API |
| Emails not sending | Verify Zoho app password; check API logs on startup for SMTP verify |
| Admin can't log in | Confirm API is reachable; check `ADMIN_EMAIL` / `ADMIN_PASSWORD` |
| Resume upload fails | Ensure nginx `client_max_body_size` is at least 12m |

---

## Local development (unchanged)

```bash
# Terminal 1 — API
cd server && npm run dev

# Terminal 2 — website
npm run dev

# Terminal 3 — admin
cd admin && npm run dev
```

See also `BACKEND.md` for API and admin details.
