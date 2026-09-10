import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import GirakeeLogo from '../ui/GirakeeLogo'
import { company, offices } from '../../data/company'
import { motion, AnimatePresence } from 'framer-motion'

const footerColumns = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Internship', path: '/internship' },
    { label: 'Training', path: '/training' },
    { label: 'Contact', path: '/contact' },
    { label: 'Engagement Models', path: '/engagement-models' },
  ],
  Services: [
    { label: 'Web & Mobile Development', path: '/web-mobile-development' },
    { label: 'AI & Machine Learning', path: '/ai-engineering' },
    { label: 'Computer Vision', path: '/computer-vision' },
    { label: 'Cloud & DevOps', path: '/cloud-devops' },
    { label: 'Cybersecurity', path: '/cybersecurity' },
    { label: 'UI/UX Design', path: '/ui-ux-design' },
    { label: 'Testing & QA', path: '/software-testing' },
    { label: 'Intelligent QA', path: '/intelligent-qa' },
    { label: 'Data Analytics & BI', path: '/data-analytics' },
    { label: 'Talent Outsourcing', path: '/talent-outsourcing' },
  ],
  Solutions: [
    { label: 'Solutions Overview', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Drawing Validation', path: '/solutions' },
    { label: 'AI Automation', path: '/ai-engineering' },
  ],
  Resources: [
    { label: 'Technology', path: '/technology' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
}

function FooterAccordion({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 touch-manipulation"
        aria-expanded={open}
      >
        <h4 className="eyebrow eyebrow-dark text-[0.625rem]">{title}</h4>
        <ChevronDown
          size={15}
          strokeWidth={1.5}
          className={`text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden space-y-2.5 pb-4"
          >
            {links.map((link) => (
              <li key={link.path + link.label}>
                <Link
                  to={link.path}
                  className="text-sm text-white/40 hover:text-white/80 transition-colors block py-0.5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white border-t border-white/[0.06]">
      <div className="max-w-[90rem] mx-auto page-px pt-14 md:pt-20 pb-8 md:pb-10 safe-bottom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-2 pb-6 md:pb-0 border-b border-white/[0.06] md:border-0">
            <div className="mb-6">
              <GirakeeLogo variant="light" size="md" asLink={false} />
            </div>
            <p className="text-sm text-cyan/60 mb-2">{company.tagline}</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              AI engineering and digital transformation from Bengaluru, delivered globally.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:connect@girakee.com" className="flex items-center gap-3 text-white/45 hover:text-white transition-colors break-all">
                <Mail size={15} strokeWidth={1.5} className="text-white/30 shrink-0" />
                connect@girakee.com
              </a>
              <a href="tel:+919731848149" className="flex items-center gap-3 text-white/45 hover:text-white transition-colors">
                <Phone size={15} strokeWidth={1.5} className="text-white/30 shrink-0" />
                +91-9731848149
              </a>
              <div className="space-y-2">
                {offices.map((office) => (
                  <p key={office.city} className="flex items-start gap-3 text-white/45">
                    <MapPin size={15} strokeWidth={1.5} className="text-white/30 shrink-0 mt-0.5" />
                    <span>
                      {office.city}, {office.country}
                      {office.status === 'launching' && (
                        <span className="text-white/30"> (Launching Soon)</span>
                      )}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <div className="hidden md:block">
                <h4 className="eyebrow eyebrow-dark text-[0.625rem] mb-5">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.path + link.label}>
                      <Link to={link.path} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:hidden">
                <FooterAccordion title={title} links={links} />
              </div>
            </div>
          ))}
        </div>

        <div className="section-rule-dark mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/25">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Girakee Software Services Private Limited
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white/50 transition-colors py-1">Privacy</Link>
            <Link to="/terms" className="hover:text-white/50 transition-colors py-1">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
