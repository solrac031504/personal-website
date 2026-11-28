#!/usr/bin/env bash
# Deploy the latest code from GitHub. Run on the server as the deploy user:
#   bash /srv/personal-website/app/deploy/update.sh
set -euo pipefail

REPO_DIR=/srv/personal-website/app
APP_DIR="$REPO_DIR/personal-website"

cd "$REPO_DIR"
echo "==> Pulling latest code"
git pull --ff-only

cd "$APP_DIR"
if [ ! -f .env.production ]; then
    echo "Missing $APP_DIR/.env.production (NEXT_PUBLIC_BIRTHDAY)" >&2
    exit 1
fi

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Restarting service"
sudo systemctl restart personal-website
sleep 3

if systemctl is-active --quiet personal-website; then
    echo "==> OK: personal-website is running at commit $(git -C "$REPO_DIR" rev-parse --short HEAD)"
else
    echo "==> FAILED: check 'sudo journalctl -u personal-website -n 50'" >&2
    exit 1
fi