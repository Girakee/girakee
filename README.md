# Girakee

Single monorepo for the Girakee website, admin panel, and API.

**GitHub:** [github.com/Girakee/girakee](https://github.com/Girakee/girakee)

## Repository layout

```
girakee/
├── src/              Public website (React + Vite)
├── admin/            Admin panel (React + Vite)
├── server/           Express API + SQLite + email
├── deploy/           VPS nginx, PM2, deploy scripts
├── netlify.toml      Website Netlify config (repo root)
└── admin/netlify.toml Admin Netlify config
```

| App | Local dev | Production |
|-----|-----------|------------|
| Website | `npm run dev` → :5173 | Netlify (repo root) |
| Admin | `npm run dev:admin` → :5174 | Netlify (`admin/` base directory) |
| API | `npm run dev:server` → :8787 | VPS `200.234.39.88` via PM2 |

## Quick start

```bash
git clone https://github.com/Girakee/girakee.git
cd girakee
npm install          # installs website + admin + server (npm workspaces)

cp .env.example .env
cp server/.env.example server/.env
cp admin/.env.example admin/.env   # optional for local admin

npm run dev:server   # terminal 1 — API
npm run dev:admin      # terminal 2 — admin panel
npm run dev            # terminal 3 — public website
```

Default admin login (change in `server/.env`):

- Email: `admin@girakee.com`
- Password: `ChangeMe123!`

## Deploy from one GitHub repo

Both Netlify sites use **the same repository** (`Girakee/girakee`), branch `main`:

### 1. Public website (Netlify site #1)

| Setting | Value |
|---------|-------|
| Base directory | *(empty — repo root)* |
| Build command | `npm run build` |
| Publish directory | `dist` |

Uses root `netlify.toml`. Leave `VITE_API_URL` empty (proxies `/api/*` to the VPS).

### 2. Admin panel (Netlify site #2)

| Setting | Value |
|---------|-------|
| Base directory | **`admin`** |
| Build command | `npm run build` |
| Publish directory | **`dist`** (relative to `admin/`) |

Uses `admin/netlify.toml`. Leave `VITE_API_URL` empty.

If admin was previously connected to a **separate repo**, reconnect it:

1. Netlify → your admin site → **Site configuration → Build & deploy → Continuous deployment**
2. **Link repository** → choose `Girakee/girakee`
3. Set **Base directory** to `admin` (important)
4. **Clear cache and deploy site**

### 3. API (VPS)

```bash
ssh root@200.234.39.88
cd /opt/girakee && git pull && bash deploy/update-vps.sh
```

See [DEPLOY.md](./DEPLOY.md) for full VPS, DNS, and SSL steps.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Public website dev server |
| `npm run dev:admin` | Admin panel dev server |
| `npm run dev:server` | API dev server |
| `npm run build` | Build public website |
| `npm run build:admin` | Build admin panel |
| `npm run build:all` | Build website + admin |

## Docs

- [BACKEND.md](./BACKEND.md) — API routes, admin features, email
- [DEPLOY.md](./DEPLOY.md) — production deployment guide
