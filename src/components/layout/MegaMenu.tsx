import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useMotionConfig } from '../../hooks/useMotionConfig'

interface MenuItem {
  label: string
  path: string
}

interface MegaMenuProps {
  title: string
  items: MenuItem[]
}

export default function MegaMenu({ title, items }: MegaMenuProps) {
  const { reduced, staggerDelay } = useMotionConfig()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: 2 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-0 mt-0 w-72 bg-white border border-[var(--border-subtle)] shadow-[0_16px_48px_rgba(7,20,38,0.08)]"
    >
      <div className="px-4 py-3 border-b border-[var(--border-subtle)]">
        <span className="eyebrow text-[0.625rem]">{title}</span>
      </div>
      <div className="py-1">
        {items.map((item, i) => (
          <motion.div
            key={item.path + item.label}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : i * staggerDelay * 0.4, duration: 0.15 }}
          >
            <Link
              to={item.path}
              className="block px-4 py-2.5 text-[0.8125rem] text-text/70 hover:text-text hover:bg-light transition-colors duration-150"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
