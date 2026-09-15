import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminApi, setToken } from '../api'
import GirakeeLogo from '../components/GirakeeLogo'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@girakee.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await adminApi.login(email, password)
      setToken(result.token)
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <GirakeeLogo variant="light" size="lg" asLink={false} />
          <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.22em] text-cyan/60">Admin Console</p>
        </div>

        <form onSubmit={submit} className="panel admin-login-panel p-8 space-y-5">
          <div>
            <h1 className="text-2xl font-semibold text-white">Sign in</h1>
            <p className="text-sm text-white/45 mt-2">
              Manage careers jobs, payment options, and form submissions.
            </p>
          </div>
          <div>
            <label className="block text-sm text-white/50 mb-2">Email</label>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm text-white/50 mb-2">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button type="submit" className="btn w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
