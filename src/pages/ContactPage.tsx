import SEO from '../components/seo/SEO'
import ContactForm from '../components/forms/ContactForm'
import PremiumScene from '../components/animations/PremiumScene'
import OfficeLocationsSection from '../components/home/OfficeLocationsSection'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { contactMessaging, company } from '../data/company'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Initiate your engineering engagement with Girakee. Talk directly with an architect in Bengaluru for software, pods, talent, and Rozgar.ai."
        path="/contact"
      />
      <section className="relative bg-navy-deep pt-28 sm:pt-32 md:pt-36 pb-16 page-px overflow-hidden">
        <PremiumScene scene="network" size="page" />
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow eyebrow-dark mb-4">Global Inquiries & Engagement</p>
          <h1 className="editorial-display text-[clamp(2rem,6vw,3.5rem)] text-white mb-6">
            {contactMessaging.headline}
          </h1>
          <p className="text-body text-body-dark max-w-2xl leading-relaxed">
            {contactMessaging.description}
          </p>
        </div>
      </section>

      <section className="relative bg-navy-dark py-12 sm:py-16 md:py-20 page-px">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="eyebrow eyebrow-dark mb-4">Direct Channels</p>
              <h2 className="editorial-display text-2xl sm:text-3xl text-white mb-3">
                Talk Directly with an Architect
              </h2>
              <p className="text-body text-body-dark leading-relaxed mb-8 max-w-md">
                Skip generic sales queues. Connect directly with our engineering and delivery leadership.
              </p>

              <div className="p-5 holographic-panel mb-4 max-w-md">
                <h3 className="text-sm font-semibold text-white mb-2">{contactMessaging.callUs.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed mb-4">
                  {contactMessaging.callUs.description}
                </p>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="text-cyan font-medium hover:text-cyan-bright transition-colors"
                >
                  {company.phone}
                </a>
              </div>

              <div className="p-5 holographic-panel mb-4 max-w-md">
                <h3 className="text-sm font-semibold text-white mb-2">
                  Schedule an Architectural Discovery Session
                </h3>
                <p className="text-xs text-white/45 leading-relaxed mb-4">
                  Book a 30-minute consultation with engineering leadership.
                </p>
                <a
                  href={company.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan font-medium hover:text-cyan-bright transition-colors"
                >
                  Book a 30-Min Consultation
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="p-5 holographic-panel mb-4 max-w-md space-y-4">
                <h3 className="text-sm font-semibold text-white">Corporate Correspondence</h3>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 group">
                  <Mail size={16} className="text-cyan mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-xs text-white/40">General & Business</span>
                    <span className="text-white/80 group-hover:text-cyan transition-colors break-all">
                      {company.email}
                    </span>
                  </span>
                </a>
                <a href={`mailto:${company.enterpriseEmail}`} className="flex items-start gap-3 group">
                  <Mail size={16} className="text-cyan mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-xs text-white/40">Enterprise & RFP</span>
                    <span className="text-white/80 group-hover:text-cyan transition-colors break-all">
                      {company.enterpriseEmail}
                    </span>
                  </span>
                </a>
                <a href={`tel:${company.phoneTel}`} className="flex items-start gap-3 group">
                  <Phone size={16} className="text-cyan mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-xs text-white/40">Hotline</span>
                    <span className="text-white/80 group-hover:text-cyan transition-colors">{company.phone}</span>
                  </span>
                </a>
              </div>

              <div className="p-5 holographic-panel max-w-md">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-cyan mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">Headquarters</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Girakee Software Services Private Limited
                      <br />
                      Rajajinagar, Bengaluru, Karnataka 560010, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="holographic-panel p-6 sm:p-8 md:p-10">
              <h2 className="editorial-display text-2xl text-white mb-2">Tell Us About Your Project</h2>
              <p className="text-sm text-white/45 mb-8 leading-relaxed">
                Share your technical scope, hiring timeline, or capability requirements.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <OfficeLocationsSection />
    </>
  )
}
