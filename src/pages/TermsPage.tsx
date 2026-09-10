import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import ContentSection from '../components/ui/ContentSection'

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" description="Terms and conditions governing the use of Girakee's website and services." path="/terms" />
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="Terms and conditions governing the use of Girakee's website and services."
        showScene={false}
      />
      <ContentSection>
        <div className="max-w-3xl">
          <p className="text-white/55 leading-relaxed mb-6">
            Last updated: September 2026
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Acceptance of Terms</h3>
          <p className="text-white/55 leading-relaxed mb-6">
            By accessing and using the Girakee website, you accept and agree to be bound
            by these Terms of Service. If you do not agree, please do not use our website.
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Services</h3>
          <p className="text-white/55 leading-relaxed mb-6">
            Girakee Software Services Private Limited provides AI engineering, software
            development, and digital transformation services. Specific terms for service
            engagements are governed by individual agreements.
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Intellectual Property</h3>
          <p className="text-white/55 leading-relaxed mb-6">
            All content on this website, including text, graphics, logos, and software,
            is the property of Girakee Software Services Private Limited and is protected
            by applicable intellectual property laws.
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <p className="text-white/55 leading-relaxed">
            For questions about these terms, contact us at{' '}
            <a href="mailto:connect@girakee.com" className="text-cyan hover:underline">
              connect@girakee.com
            </a>
          </p>
        </div>
      </ContentSection>
    </>
  )
}
