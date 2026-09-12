import SEO from '../components/seo/SEO'
import Hero from '../components/home/Hero'
import CapabilityTicker from '../components/home/CapabilityTicker'
import DigitalTransformationSection from '../components/home/DigitalTransformationSection'
import IntroSection from '../components/home/IntroSection'
import CompanyPromiseSection from '../components/home/CompanyPromiseSection'
import AIEngineeringSection from '../components/home/AIEngineeringSection'
import DrawingValidationSection from '../components/home/DrawingValidationSection'
import HowAIWorksSection from '../components/home/HowAIWorksSection'
import RobotAutomationSection from '../components/home/RobotAutomationSection'
import ServiceShowcaseSection from '../components/home/ServiceShowcaseSection'
import WhyGirakeeSection from '../components/home/WhyGirakeeSection'
import TechnologyEcosystemSection from '../components/home/TechnologyEcosystemSection'
import EngagementSection from '../components/home/EngagementSection'
import GlobalDeliverySection from '../components/home/GlobalDeliverySection'
import OfficeLocationsSection from '../components/home/OfficeLocationsSection'
import InternshipPromoSection from '../components/home/InternshipPromoSection'
import FinalCTASection from '../components/home/FinalCTASection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Digital Transformation & Enterprise Software Engineering"
        description="Architecting scalable web systems, enterprise cloud platforms, and production-grade AI solutions. Girakee delivers end-to-end engineering excellence from Bengaluru to clients across the Middle East, EU, UK, and US."
        path="/"
      />
      <Hero />
      <CapabilityTicker />
      <DigitalTransformationSection />
      <IntroSection />
      <CompanyPromiseSection />
      <ServiceShowcaseSection />
      <AIEngineeringSection />
      <DrawingValidationSection />
      <HowAIWorksSection />
      <RobotAutomationSection />
      <WhyGirakeeSection />
      <TechnologyEcosystemSection />
      <EngagementSection />
      <GlobalDeliverySection />
      <OfficeLocationsSection />
      <InternshipPromoSection />
      <FinalCTASection />
    </>
  )
}
