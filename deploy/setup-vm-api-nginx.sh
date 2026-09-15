#!/bin/bash
# Run on VM as root: bash /opt/girakee/deploy/setup-vm-api-nginx.sh
set -euo pipefail

SNIPPET="/etc/nginx/snippets/girakee-api.conf"
MNXSTORE="/etc/nginx/sites-enabled/mnxstore"

echo "==> Girakee API nginx setup"

rm -f /etc/nginx/sites-enabled/girakee-api /etc/nginx/sites-available/girakee-api

# Remove old /api/ girakee includes that conflict with mnxstore.
if [ -f "$MNXSTORE" ]; then
  sed -i '/include snippets\/girakee-api.conf;/d' "$MNXSTORE"
fi

mkdir -p /etc/nginx/snippets
cat > "$SNIPPET" <<'EOF'
location /girakee-api/ {
    proxy_pass http://127.0.0.1:8787/api/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    client_max_body_size 12m;
}
EOF

add_include_to_site() {
  local site_file="$1"
  if grep -q "girakee-api.conf" "$site_file"; then
    echo "Already configured in $site_file"
    return 0
  fi
  sed -i '/server {/a \    include snippets/girakee-api.conf;' "$site_file"
  echo "Added Girakee API proxy to $site_file"
}

if [ -f "$MNXSTORE" ]; then
  add_include_to_site "$MNXSTORE"
elif [ -f /etc/nginx/sites-enabled/default ]; then
  add_include_to_site /etc/nginx/sites-enabled/default
else
  primary_site="$(find /etc/nginx/sites-enabled -maxdepth 1 -type f | head -n 1)"
  if [ -z "$primary_site" ]; then
    echo "No nginx site found in /etc/nginx/sites-enabled"
    exit 1
  fi
  add_include_to_site "$primary_site"
fi

nginx -t
systemctl reload nginx

cd /opt/girakee
npm install -g pm2 2>/dev/null || true
pm2 start deploy/ecosystem.config.cjs 2>/dev/null || pm2 restart girakee-api
pm2 save

echo ""
echo "==> Tests"
curl -sf http://127.0.0.1:8787/api/jobs >/dev/null && echo "OK  API direct :8787"
curl -sf http://127.0.0.1/girakee-api/jobs >/dev/null && echo "OK  nginx /girakee-api/jobs"
echo ""
echo "From your PC: curl http://200.234.39.88/girakee-api/jobs"
