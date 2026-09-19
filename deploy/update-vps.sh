#!/bin/bash
# Full VPS update — run on VM as root:
#   cd /opt/girakee && git pull && bash deploy/update-vps.sh
set -euo pipefail

REPO_DIR="/opt/girakee"
cd "$REPO_DIR"

echo "==> Pull latest code"
git fetch origin
git reset --hard origin/main

echo "==> Install API dependencies"
cd "$REPO_DIR/server"
if [ ! -f .env ]; then
  cp .env.example .env
  echo "WARNING: Created server/.env from example — edit JWT_SECRET, ADMIN_PASSWORD, SMTP_PASS"
fi
if grep -q 'your-zoho-app-password' .env 2>/dev/null; then
  echo "ERROR: SMTP_PASS is still the placeholder in server/.env — emails will not send."
  echo "       Copy the real Zoho app password from your local server/.env, then re-run this script."
fi
npm ci --omit=dev

echo "==> Configure nginx (/girakee-api/ → :8787)"
bash "$REPO_DIR/deploy/setup-vm-api-nginx.sh"

echo "==> Restart API with PM2"
cd "$REPO_DIR"
pm2 delete girakee-api 2>/dev/null || true
pm2 start deploy/ecosystem.config.cjs
pm2 save

echo ""
echo "==> Health checks"
sleep 2
curl -sf http://127.0.0.1:8787/api/health >/dev/null && echo "OK  API :8787"
curl -sf http://127.0.0.1/girakee-api/health >/dev/null && echo "OK  nginx /girakee-api/health"
curl -sf http://200.234.39.88/girakee-api/health >/dev/null && echo "OK  public http://200.234.39.88/girakee-api/health"

echo ""
echo "Done. Redeploy Netlify admin (remove VITE_API_URL) and test:"
echo "  https://girakeeadmin.netlify.app/login"
