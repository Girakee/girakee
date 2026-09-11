import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import type { NavGroup, NavLink } from '../../data/navigation'

interface MegaMenuProps {
  title: string
  items?: NavLink[]
  groups?: NavGroup[]
  align?: 'left' | 'right'
}

function subItems(group: NavGroup) {
  return group.items.filter((item) => item.path !== group.path)
}

function MenuLink({
  item,
  hasChildren,
  active,
  onEnter,
}: {
  item: NavLink
  hasChildren?: boolean
  active?: boolean
  onEnter?: () => void
}) {
  return (
    <div onMouseEnter={onEnter} onFocus={onEnter}>
      <Link
        to={item.path}
        className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[0.8125rem] transition-colors duration-150 ${
          active ? 'bg-light text-text' : 'text-text/70 hover:text-text hover:bg-light'
        }`}
      >
        <span>{item.label}</span>
        {hasChildren && (
          <ChevronRight
            size={14}
            strokeWidth={1.75}
            className={active ? 'text-cyan' : 'text-text/25'}
          />
        )}
      </Link>
    </div>
  )
}

export default function MegaMenu({ title, items, groups, align = 'left' }: MegaMenuProps) {
  const { reduced, staggerDelay } = useMotionConfig()
  const [activeTitle, setActiveTitle] = useState<string | null>(null)
  const [activeNestedPath, setActiveNestedPath] = useState<string | null>(null)

  const activeGroup = groups?.find((group) => group.title === activeTitle) ?? null
  const flyoutItems = activeGroup ? subItems(activeGroup) : []
  const nestedFromItems = items?.find((item) => item.path === activeNestedPath && item.children?.length)
  const nestedFromGroup = flyoutItems.find((item) => item.path === activeNestedPath && item.children?.length)
  const nested = nestedFromItems ?? nestedFromGroup

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: 6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute top-full mt-0 bg-white border border-[var(--border-subtle)] shadow-[0_16px_48px_rgba(7,20,38,0.1)] ${
        align === 'right' ? 'right-0' : 'left-0'
      }`}
      onMouseLeave={() => {
        setActiveTitle(null)
        setActiveNestedPath(null)
      }}
    >
      <div className="flex">
        <div className="w-64 shrink-0">
          <div className="px-4 py-3 border-b border-[var(--border-subtle)]">
            <span className="eyebrow text-[0.625rem]">{title}</span>
          </div>

          {groups && groups.length > 0 ? (
            <div className="py-1">
              {groups.map((group) => {
                const isActive = activeTitle === group.title
                return (
                  <div
                    key={group.title}
                    onMouseEnter={() => {
                      setActiveTitle(group.title)
                      setActiveNestedPath(null)
                    }}
                    onFocus={() => setActiveTitle(group.title)}
                  >
                    <Link
                      to={group.path}
                      className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[0.8125rem] transition-colors duration-150 ${
                        isActive ? 'bg-light text-text' : 'text-text/70 hover:text-text hover:bg-light'
                      }`}
                    >
                      <span>{group.title}</span>
                      <ChevronRight
                        size={14}
                        strokeWidth={1.75}
                        className={isActive ? 'text-cyan' : 'text-text/25'}
                      />
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-1">
              {(items ?? []).map((item, i) => (
                <motion.div
                  key={item.path + item.label}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: reduced ? 0 : i * staggerDelay * 0.4, duration: 0.15 }}
                >
                  <MenuLink
                    item={item}
                    hasChildren={Boolean(item.children?.length)}
                    active={activeNestedPath === item.path}
                    onEnter={() => setActiveNestedPath(item.children?.length ? item.path : null)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <AnimatePresence>
          {activeGroup && flyoutItems.length > 0 && !nested && (
            <motion.div
              key={activeGroup.title}
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="w-64 border-l border-[var(--border-subtle)] bg-white"
            >
              <div className="px-4 py-3 border-b border-[var(--border-subtle)]">
                <span className="eyebrow text-[0.625rem]">{activeGroup.title}</span>
              </div>
              <div className="py-1">
                {flyoutItems.map((item) => (
                  <MenuLink
                    key={item.path + item.label}
                    item={item}
                    hasChildren={Boolean(item.children?.length)}
                    active={activeNestedPath === item.path}
                    onEnter={() => setActiveNestedPath(item.children?.length ? item.path : null)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {nested?.children && nested.children.length > 0 && (
            <motion.div
              key={nested.path}
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="w-[32rem] border-l border-[var(--border-subtle)] bg-white"
            >
              <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-[var(--border-subtle)]">
                <span className="eyebrow text-[0.625rem]">{nested.label}</span>
                <Link
                  to={nested.path}
                  className="text-[0.6875rem] text-cyan hover:text-text transition-colors"
                >
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-2 p-2">
                {nested.children.map((item) => (
                  <Link
                    key={item.path + item.label}
                    to={item.path}
                    className="px-3 py-2 text-[0.8125rem] leading-5 text-text/70 hover:text-text hover:bg-light transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
