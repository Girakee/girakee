import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface HamburgerButtonProps {
  open: boolean
  onClick: () => void
  className?: string
}

export default function HamburgerButton({ open, onClick, className = '' }: HamburgerButtonProps) {
  const { reduced } = useMotionConfig()

  const top = { rotate: open ? 45 : 0, y: open ? 6 : 0 }
  const mid = { opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }
  const bot = { rotate: open ? -45 : 0, y: open ? -6 : 0 }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-11 h-11 flex items-center justify-center -mr-2 touch-manipulation ${className}`}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
    >
      <div className="w-5 h-3 relative">
        <motion.span
          className="absolute left-0 top-0 block h-px w-5 bg-current origin-center"
          animate={reduced ? {} : top}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="absolute left-0 top-1/2 -translate-y-1/2 block h-px w-5 bg-current"
          animate={reduced ? {} : mid}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 bottom-0 block h-px w-5 bg-current origin-center"
          animate={reduced ? {} : bot}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </button>
  )
}
