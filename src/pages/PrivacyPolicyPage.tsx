import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import ContentSection from '../components/ui/ContentSection'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Girakee Software Services privacy policy. How we collect, use, and protect your information." path="/privacy-policy" />
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How Girakee Software Services Private Limited collects, uses, and protects your information."
        showScene={false}
      />
      <ContentSection>
        <div className="max-w-3xl prose prose-sm">
          <p className="text-white/55 leading-relaxed mb-6">
            Last updated: September 2026
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Information We Collect</h3>
          <p className="text-white/55 leading-relaxed mb-6">
            We collect information you provide directly, such as your name, email address,
            company name, and message content when you contact us through our website or
            email.
          </p>
          <h3 className="text-xl font-bold text-white mb-4">How We Use Your Information</h3>
          <p className="text-white/55 leading-relaxed mb-6">
            We use the information we collect to respond to your inquiries, provide our
            services, and improve our website and offerings. We do not sell your personal
            information to third parties.
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Data Security</h3>
          <p className="text-white/55 leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your
            personal information against unauthorized access, alteration, or destruction.
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <p className="text-white/55 leading-relaxed">
            For questions about this privacy policy, contact us at{' '}
            <a href="mailto:connect@girakee.com" className="text-cyan hover:underline">
              connect@girakee.com
            </a>
          </p>
        </div>
      </ContentSection>
    </>
  )
}
