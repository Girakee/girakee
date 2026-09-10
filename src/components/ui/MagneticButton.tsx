import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  to?: string
  href?: string
  className?: string
}

export default function MagneticButton({ children, to, href, className = '' }: MagneticButtonProps) {
  const cls = `btn-primary ${className}`.trim()

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type="button" className={cls}>{children}</button>
}
