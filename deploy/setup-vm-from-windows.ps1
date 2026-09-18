# Run Girakee VM update from Windows (calls SSH on the Linux server).
# Usage: .\deploy\setup-vm-from-windows.ps1
# Enter your VM password when SSH prompts you.

$VmHost = "200.234.39.88"
$VmUser = "root"

$RemoteCommands = @"
set -e
cd /opt/girakee
git fetch origin
git reset --hard origin/main
bash deploy/update-vps.sh
"@

Write-Host "Updating Girakee backend on ${VmUser}@${VmHost} ..."
Write-Host "(Enter your VM password when prompted)"
Write-Host ""

ssh "${VmUser}@${VmHost}" $RemoteCommands

Write-Host ""
Write-Host "If health checks passed, redeploy Netlify admin and try login again."
