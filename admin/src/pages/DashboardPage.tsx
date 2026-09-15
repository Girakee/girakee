import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adminApi } from '../api'

export default function DashboardPage() {
  const [stats, setStats] = useState({ jobs: 0, payments: 0, submissions: 0, paymentsEnabled: true })

  useEffect(() => {
    Promise.all([adminApi.getJobs(), adminApi.getPaymentOptions(), adminApi.getSubmissions()])
      .then(([jobsRes, paymentsRes, submissionsRes]) => {
        setStats({
          jobs: jobsRes.jobs.filter((job) => job.active).length,
          payments: paymentsRes.options.filter((option) => option.enabled).length,
          submissions: submissionsRes.submissions.length,
          paymentsEnabled: paymentsRes.paymentsEnabled,
        })
      })
      .catch(() => undefined)
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="page-title mb-2">Dashboard</h2>
        <p className="page-subtitle">Manage website content, residency payments, and inbound leads.</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: 'Active jobs', value: stats.jobs, to: '/jobs' },
          { label: 'Enabled payment options', value: stats.payments, to: '/payments' },
          { label: 'Stored submissions', value: stats.submissions, to: '/submissions' },
          { label: 'Payments master switch', value: stats.paymentsEnabled ? 'ON' : 'OFF', to: '/payments' },
        ].map((card) => (
          <Link key={card.label} to={card.to} className="panel stat-card p-5 hover:border-cyan/30 transition-colors">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">{card.label}</p>
            <p className="text-3xl font-semibold text-cyan">{card.value}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
