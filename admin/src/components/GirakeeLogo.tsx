import { Link } from 'react-router-dom'

interface GirakeeLogoProps {
  variant?: 'light' | 'dark'
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  asLink?: boolean
}

const sizes = {
  sm: { icon: 'h-8 w-8', text: 'text-base' },
  md: { icon: 'h-9 w-9', text: 'text-lg' },
  lg: { icon: 'h-11 w-11', text: 'text-xl' },
}

export default function GirakeeLogo({
  variant = 'light',
  showText = true,
  size = 'md',
  className = '',
  asLink = true,
}: GirakeeLogoProps) {
  const { icon, text } = sizes[size]
  const textColor = variant === 'light' ? 'text-white' : 'text-[#0b1730]'

  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/girakee-logo.png"
        alt=""
        className={`${icon} object-contain shrink-0`}
        width={45}
        height={45}
      />
      {showText && (
        <span className={`font-display font-bold tracking-tight ${text} ${textColor}`}>
          Girakee
        </span>
      )}
    </span>
  )

  if (!asLink) return content

  return (
    <Link to="/" className="inline-flex shrink-0" aria-label="Girakee admin dashboard">
      {content}
    </Link>
  )
}
