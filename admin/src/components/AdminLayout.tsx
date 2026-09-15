import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { clearToken } from '../api'
import GirakeeLogo from './GirakeeLogo'

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/jobs', label: 'Careers Jobs' },
  { to: '/payments', label: 'Payment Options' },
  { to: '/submissions', label: 'Form Submissions' },
]

export default function AdminLayout() {
  const navigate = useNavigate()

  return (
    <div className="admin-shell min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="admin-sidebar border-b lg:border-b-0 lg:border-r border-white/10 px-5 py-6 lg:sticky lg:top-0 lg:h-screen flex flex-col">
        <div className="mb-8">
          <GirakeeLogo variant="light" size="md" />
          <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.22em] text-cyan/60">Admin Console</p>
        </div>

        <nav className="space-y-1.5 flex-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `admin-nav-link${isActive ? ' admin-nav-link-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/35 mb-3">Signed in as administrator</p>
          <button
            type="button"
            className="btn btn-secondary w-full"
            onClick={() => {
              clearToken()
              navigate('/login')
            }}
          >
            Sign out
          </button>
        </div>
      </aside>

      <main className="admin-main min-h-screen p-6 md:p-8 xl:p-10">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
