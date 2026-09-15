#!/bin/bash
# First-time setup on Girakee VM (200.234.39.88)
# Run after SSH: bash deploy/vm-first-boot.sh
set -euo pipefail

VM_IP="200.234.39.88"
REPO_URL="${GIRAKEE_REPO_URL:-https://github.com/YOUR_ORG/girakee.git}"
INSTALL_DIR="/opt/girakee"

echo "==> Girakee VM bootstrap ($VM_IP)"

if ! command -v node >/dev/null 2>&1; then
  echo "==> Installing Node.js 20..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs git nginx
else
  echo "==> Node $(node -v) already installed"
fi

if [ ! -d "$INSTALL_DIR/.git" ]; then
  echo "==> Cloning repo to $INSTALL_DIR"
  sudo mkdir -p "$INSTALL_DIR"
  sudo chown "$USER:$USER" "$INSTALL_DIR"
  git clone "$REPO_URL" "$INSTALL_DIR"
fi

cd "$INSTALL_DIR/server"

if [ ! -f .env ]; then
  echo "==> Creating server/.env from example — EDIT THIS before going live"
  cp .env.example .env
  echo ""
  echo "IMPORTANT: edit $INSTALL_DIR/server/.env"
  echo "  - JWT_SECRET"
  echo "  - ADMIN_PASSWORD"
  echo "  - SMTP_PASS"
  echo ""
fi

echo "==> Installing API dependencies..."
npm ci --omit=dev
npm run seed

if ! command -v pm2 >/dev/null 2>&1; then
  echo "==> Installing PM2..."
  sudo npm install -g pm2
fi

cd "$INSTALL_DIR"
pm2 start deploy/ecosystem.config.cjs || pm2 restart girakee-api
pm2 save

echo ""
echo "==> API should be running on port 8787"
curl -sf http://127.0.0.1:8787/api/jobs >/dev/null && echo "OK: /api/jobs responds locally"

echo ""
echo "Next steps:"
echo "  1. DNS A records → $VM_IP"
echo "       api.girakee.com"
echo "       admin.girakee.com"
echo "  2. Edit server/.env (secrets + CORS)"
echo "  3. nginx + SSL:"
echo "       sudo cp deploy/nginx-girakee.conf.example /etc/nginx/sites-available/girakee"
echo "       sudo ln -sf /etc/nginx/sites-available/girakee /etc/nginx/sites-enabled/"
echo "       sudo certbot --nginx -d api.girakee.com -d admin.girakee.com"
echo "  4. Build admin:"
echo "       cd admin && echo 'VITE_API_URL=https://api.girakee.com' > .env && npm ci && npm run build"
echo "  5. Netlify env: VITE_API_URL=https://api.girakee.com"
echo ""
echo "Test from your PC (after opening port 8787 temporarily, or after nginx):"
echo "  curl http://$VM_IP:8787/api/jobs"
