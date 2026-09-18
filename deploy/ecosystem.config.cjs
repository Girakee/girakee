/** PM2 process file — run from repo root: pm2 start deploy/ecosystem.config.cjs */
module.exports = {
  apps: [
    {
      name: 'girakee-api',
      cwd: './server',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      autorestart: true,
      max_restarts: 15,
      min_uptime: '10s',
      restart_delay: 3000,
      watch: false,
    },
  ],
}
