import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'secondary-light' | 'ghost'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: Variant
  showArrow?: boolean
  className?: string
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'secondary-light': 'btn-secondary btn-secondary-light',
  ghost: 'inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan-bright transition-colors min-h-[48px]',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  showArrow = false,
  className = '',
  onClick,
}: ButtonProps) {
  const cls = `${variants[variant]} ${className}`.trim()

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={15} strokeWidth={1.75} />}
    </>
  )

  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) return <a href={href} className={cls}>{content}</a>
  return (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  )
}
