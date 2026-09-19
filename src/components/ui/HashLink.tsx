import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HashLinkProps {
  to: string
  className?: string
  children: ReactNode
}

/** Native anchor for hash URLs so in-page scroll works reliably with React Router. */
export default function HashLink({ to, className, children }: HashLinkProps) {
  if (!to.includes('#')) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}
