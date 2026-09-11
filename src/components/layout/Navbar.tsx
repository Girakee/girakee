import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { mainNav, megaMenus, megaContainsPath } from '../../data/navigation'
import MegaMenu from './MegaMenu'
import HamburgerButton from './HamburgerButton'
import MobileNav from './MobileNav'
import MagneticButton from '../ui/MagneticButton'
import GirakeeLogo from '../ui/GirakeeLogo'
import { company } from '../../data/company'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { useNav } from '../../context/NavContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const { mobileOpen, setMobileOpen } = useNav()
  const location = useLocation()
  const { reduced, shouldAnimate, transitionFast } = useMotionConfig()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMega(null)
  }, [location.pathname, setMobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const showSolid = scrolled || !isHome || mobileOpen
  const textColor = showSolid ? 'text-text' : 'text-white'
  const mutedColor = showSolid ? 'text-text/60 hover:text-text' : 'text-white/60 hover:text-white'

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={false}
        animate={{
          backgroundColor: showSolid ? 'rgba(255,255,255,0.97)' : 'rgba(7,20,38,0)',
          borderBottomColor: showSolid ? 'rgba(11,25,48,0.06)' : 'rgba(255,255,255,0)',
          backdropFilter: showSolid ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={reduced ? { duration: 0 } : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
      >
        <nav className="max-w-[90rem] mx-auto page-px h-16 flex items-center justify-between">
          <div className="relative z-10" onClick={() => setMobileOpen(false)}>
            <motion.div
              key={showSolid ? 'dark' : 'light'}
              initial={shouldAnimate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={transitionFast()}
            >
              <GirakeeLogo variant={showSolid ? 'dark' : 'light'} size="md" />
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center gap-0.5">
            {mainNav.map((item) => {
              const childActive = Boolean(
                item.mega && megaContainsPath(megaMenus[item.mega], location.pathname),
              )
              const isActive = location.pathname === item.path || childActive
              return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.mega && setActiveMega(item.mega)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  to={item.path}
                  className={`relative px-2.5 xl:px-3.5 py-2 text-[0.75rem] xl:text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 ${mutedColor} ${
                    isActive ? (showSolid ? 'text-text' : 'text-white') : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-px bg-cyan"
                      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {item.mega && activeMega === item.mega && (
                    <MegaMenu
                      title={megaMenus[item.mega].title}
                      items={megaMenus[item.mega].items}
                      groups={megaMenus[item.mega].groups}
                      align="left"
                    />
                  )}
                </AnimatePresence>
              </div>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={company.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[0.75rem] font-medium tracking-wide transition-colors duration-200 ${mutedColor}`}
            >
              Schedule a meeting
            </a>
            <MagneticButton to="/contact">Talk to an Expert</MagneticButton>
          </div>

          <HamburgerButton
            open={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor}`}
          />
        </nav>
      </motion.header>

      <MobileNav />
    </>
  )
}
