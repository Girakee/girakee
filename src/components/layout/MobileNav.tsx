import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { mainNav, servicesMenu, companyMenu } from '../../data/navigation'
import { useNav } from '../../context/NavContext'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import HamburgerButton from './HamburgerButton'
import GirakeeLogo from '../ui/GirakeeLogo'

const primaryLinks = mainNav.filter((item) => !item.mega)

function AccordionSection({
  title,
  items,
}: {
  title: string
  items: { label: string; path: string }[]
}) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="border-b border-white/[0.06]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left touch-manipulation min-h-[52px]"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white/90">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 space-y-0">
              {items.map((item) => (
                <Link
                  key={item.path + item.label}
                  to={item.path}
                  className={`block py-2.5 px-1 text-sm transition-colors ${
                    location.pathname === item.path ? 'text-white' : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function MobileNav() {
  const { mobileOpen, setMobileOpen } = useNav()
  const location = useLocation()
  const { reduced, shouldAnimate } = useMotionConfig()

  return (
    <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            className="fixed inset-0 z-[55] bg-navy-deep/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={reduced ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduced ? undefined : { x: '100%' }}
            transition={reduced ? { duration: 0 } : { type: 'spring', damping: 36, stiffness: 320 }}
            className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-[min(100vw,20rem)] bg-navy-deep border-l border-white/[0.06] lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06] shrink-0">
              <GirakeeLogo variant="light" size="sm" asLink={false} />
              <HamburgerButton open={true} onClick={() => setMobileOpen(false)} className="text-white" />
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
              <p className="eyebrow eyebrow-dark mb-4 text-[0.625rem]">Menu</p>

              <div className="mb-2">
                {primaryLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={shouldAnimate ? { opacity: 0, x: 12 } : false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduced ? 0 : i * 0.03 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between py-3.5 border-b border-white/[0.06] min-h-[48px] ${
                        location.pathname === item.path ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <ArrowRight size={13} strokeWidth={1.5} className="opacity-25" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <AccordionSection title="Services" items={servicesMenu} />
              <AccordionSection title="Company" items={companyMenu} />
            </nav>

            <div className="shrink-0 p-5 border-t border-white/[0.06] safe-bottom">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full"
              >
                Talk to an Expert
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
