import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function run(command) {
  execSync(command, { cwd: root, stdio: 'inherit', shell: true })
}

console.log('==> Building public website')
run('npm run generate:sitemap')
run('tsc')
run('vite build')

console.log('==> Building admin panel (/admin/)')
run('npm run build -w girakee-admin')

const adminSrc = path.join(root, 'admin', 'dist')
const adminDest = path.join(root, 'dist', 'admin')

console.log('==> Copying admin build to dist/admin')
fs.rmSync(adminDest, { recursive: true, force: true })
fs.cpSync(adminSrc, adminDest, { recursive: true })

console.log('Done. Admin available at /admin/ after deploy.')
