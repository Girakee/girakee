import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import type { NavGroup, NavLink } from '../../data/navigation'

interface MegaMenuProps {
  title: string
  items?: NavLink[]
  groups?: NavGroup[]
  align?: 'left' | 'right'
}

export default function MegaMenu({ title, items, groups, align = 'left' }: MegaMenuProps) {
  const { reduced } = useMotionConfig()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: 6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute top-full mt-0 bg-white border border-[var(--border-subtle)] shadow-[0_16px_48px_rgba(7,20,38,0.1)] ${
        align === 'right' ? 'right-0' : 'left-0'
      }`}
    >
      {groups && groups.length > 0 ? (
        <div className="min-w-[42rem] max-w-[52rem]">
          <div className="px-5 py-3 border-b border-[var(--border-subtle)]">
            <span className="eyebrow text-[0.625rem]">{title}</span>
          </div>
          <div className="grid grid-cols-3">
            {groups.map((group) => (
              <div
                key={group.title}
                className="px-5 py-5 border-l border-[var(--border-subtle)] first:border-l-0"
              >
                <p className="text-left text-[0.8125rem] font-bold text-text mb-3">{group.title}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.path + item.label}>
                      <Link
                        to={item.path}
                        className="block py-1.5 text-left text-[0.8125rem] text-text/65 hover:text-text transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-72">
          <div className="px-5 py-3 border-b border-[var(--border-subtle)]">
            <span className="eyebrow text-[0.625rem]">{title}</span>
          </div>
          <div className="py-2">
            {(items ?? []).map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                className="block px-5 py-2.5 text-left text-[0.8125rem] text-text/70 hover:text-text hover:bg-light transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
