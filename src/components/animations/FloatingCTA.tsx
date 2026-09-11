import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { useNav } from '../../context/NavContext'
import { company } from '../../data/company'

const HIDDEN_ROUTES = ['/contact']

export default function FloatingCTA() {
  const { isMobile, shouldAnimate, transition } = useMotionConfig()
  const { mobileOpen, openCallback, callbackOpen } = useNav()
  const location = useLocation()

  const hidden = !isMobile || mobileOpen || callbackOpen || HIDDEN_ROUTES.includes(location.pathname)

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={transition({ duration: 0.25 })}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-white/[0.08] bg-navy-deep/95 backdrop-blur-md"
        >
          <div className="page-px py-3 safe-bottom flex flex-col gap-2">
            <button type="button" onClick={openCallback} className="btn-primary w-full" aria-label="Talk to an Expert">
              Talk to an Expert
              <ArrowRight size={15} strokeWidth={1.75} />
            </button>
            <a
              href={company.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              Schedule a meeting
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
