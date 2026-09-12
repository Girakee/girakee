import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import GirakeeLogo from '../ui/GirakeeLogo'
import { company, offices, socialLinks } from '../../data/company'
import { motion, AnimatePresence } from 'framer-motion'

const footerColumns = {
  'Engineering & Services': [
    { label: 'Core Software Engineering', path: '/services' },
    { label: 'Applied AI & Computer Vision', path: '/ai-engineering' },
    { label: 'Cloud Architecture & DevOps', path: '/cloud-devops' },
    { label: 'Zero-Trust Cybersecurity', path: '/cybersecurity' },
    { label: 'QA Automation & Testing', path: '/software-testing' },
    { label: 'Workforce Solutions & Pods', path: '/manpower-solutions' },
    { label: 'Corporate Tech Enablement', path: '/training' },
  ],
  'Proprietary Products & Labs': [
    { label: 'Rozgar.ai (Intelligent HR Tech)', path: '/products/rozgar-ai' },
    { label: 'Intelligent Vision QA (CAD/Drawing Engine)', path: '/intelligent-qa' },
    { label: 'Girakee Talent Incubation Lab', path: '/on-job-training' },
  ],
  'Company & Careers': [
    { label: 'About Girakee', path: '/about' },
    { label: 'Leadership & Engineering Culture', path: '/about' },
    { label: 'Case Studies & Client Work', path: '/solutions' },
    { label: 'Engineering Careers', path: '/careers' },
    { label: 'Graduate Residency Program (OJT)', path: '/on-job-training' },
    { label: 'Contact & Discovery Sessions', path: '/contact' },
  ],
  'Governance & Legal': [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Information Security & Compliance', path: '/cybersecurity' },
    { label: 'Whistleblower & Ethical Conduct', path: '/terms' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-4 pb-6 md:pb-0 border-b border-white/[0.06] md:border-0">
            <div className="mb-6">
              <GirakeeLogo variant="light" size="md" asLink={false} />
            </div>
            <p className="text-sm text-cyan/60 mb-2">{company.tagline}</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              Enterprise engineering and AI from Bengaluru, delivered globally.
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
              <div className="space-y-2 pt-2">
                <p className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-2">Global Hubs</p>
                {offices.map((office) => (
                  <p key={office.city} className="flex items-start gap-3 text-white/45">
                    <MapPin size={15} strokeWidth={1.5} className="text-white/30 shrink-0 mt-0.5" />
                    <span>
                      <span className="text-white/60">{office.city}, {office.country}:</span>{' '}
                      {office.footerDetail}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
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
            &copy; {new Date().getFullYear()} Girakee Software Services Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors py-1 inline-flex items-center gap-2"
                aria-label={social.label}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
                </svg>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
