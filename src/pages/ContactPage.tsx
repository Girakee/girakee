import SEO from '../components/seo/SEO'
import ContactForm from '../components/forms/ContactForm'
import PremiumScene from '../components/animations/PremiumScene'
import OfficeLocationsSection from '../components/home/OfficeLocationsSection'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactMessaging, company } from '../data/company'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Connect with Innovation. Start Your Transformation. Contact Girakee for web, AI, cloud, and security solutions, jaw-dropping quality at unbeatable prices."
        path="/contact"
      />
      <section className="relative bg-navy-deep pt-28 sm:pt-32 md:pt-36 pb-16 page-px overflow-hidden">
        <PremiumScene scene="network" size="page" />
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow eyebrow-dark mb-4">Contact</p>
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
              <p className="text-body text-body-dark leading-relaxed mb-6 max-w-md">
                Tell us what you&apos;re building. Let&apos;s explore how AI, automation
                and engineering can transform it.
              </p>

              <div className="p-5 holographic-panel mb-8 max-w-md">
                <h2 className="text-sm font-semibold text-white mb-2">{contactMessaging.callUs.title}</h2>
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

              <div className="space-y-5 sm:space-y-6">
                <a href="mailto:connect@girakee.com" className="flex items-center gap-4 group touch-manipulation">
                  <div className="p-3 border border-white/[0.08] group-hover:border-cyan/30 transition-colors shrink-0">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/40">Email</div>
                    <div className="text-white/80 group-hover:text-cyan transition-colors break-all">connect@girakee.com</div>
                  </div>
                </a>
                <a href="tel:+919731848149" className="flex items-center gap-4 group touch-manipulation">
                  <div className="p-3 border border-white/[0.08] group-hover:border-cyan/30 transition-colors shrink-0">
                    <Phone size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Phone</div>
                    <div className="text-white/80 group-hover:text-cyan transition-colors">+91-9731848149</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-white/[0.08] shrink-0">
                    <MapPin size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Headquarters</div>
                    <div className="text-white/80">Rajajinagar, Bengaluru, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="holographic-panel p-6 sm:p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <OfficeLocationsSection />
    </>
  )
}
