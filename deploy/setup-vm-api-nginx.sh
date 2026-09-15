#!/bin/bash
# Run on VM as root: bash /opt/girakee/deploy/setup-vm-api-nginx.sh
set -euo pipefail

SNIPPET="/etc/nginx/snippets/girakee-api.conf"
DEFAULT_SITE="/etc/nginx/sites-enabled/default"

mkdir -p /etc/nginx/snippets
cat > "$SNIPPET" <<'EOF'
location /api/ {
    proxy_pass http://127.0.0.1:8787;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    client_max_body_size 12m;
}
EOF

if [ -f "$DEFAULT_SITE" ] && ! grep -q "girakee-api.conf" "$DEFAULT_SITE"; then
  sed -i '/server {/a \    include snippets/girakee-api.conf;' "$DEFAULT_SITE"
  echo "Added girakee API include to $DEFAULT_SITE"
elif [ -f /etc/nginx/sites-enabled/girakee-api ]; then
  echo "girakee-api site already exists"
else
  cat > /etc/nginx/sites-available/girakee-api <<'SITE'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    include snippets/girakee-api.conf;
    location / {
        return 404;
    }
}
SITE
  ln -sf /etc/nginx/sites-available/girakee-api /etc/nginx/sites-enabled/girakee-api
  echo "Created standalone girakee-api nginx site"
fi

nginx -t
systemctl reload nginx

cd /opt/girakee
npm install -g pm2 2>/dev/null || true
pm2 start deploy/ecosystem.config.cjs || pm2 restart girakee-api
pm2 save

echo ""
echo "Test locally:"
curl -sf http://127.0.0.1:8787/api/jobs >/dev/null && echo "  OK 127.0.0.1:8787"
curl -sf http://127.0.0.1/api/jobs >/dev/null && echo "  OK nginx http://127.0.0.1/api/jobs"
echo "Test from your PC:"
echo "  curl http://200.234.39.88/api/jobs"
