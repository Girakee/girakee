import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ManpowerPage from './pages/ManpowerPage'
import SolutionsPage from './pages/SolutionsPage'
import IndustriesPage from './pages/IndustriesPage'
import TechnologyPage from './pages/TechnologyPage'
import EngagementModelsPage from './pages/EngagementModelsPage'
import TrainingPage from './pages/TrainingPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductsPage from './pages/ProductsPage'
import DigitalEmployeePlatformPage from './pages/DigitalEmployeePlatformPage'
import IndustryPackPage from './pages/IndustryPackPage'
import RozgarAiPage from './pages/RozgarAiPage'
import ServiceLandingPage from './components/sections/ServiceLandingPage'
import { serviceRoutes } from './data/serviceRoutes'
import { legacyRedirects } from './data/legacyRedirects'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/engineering" element={<ServicesPage />} />
        <Route path="services/workforce" element={<ManpowerPage />} />
        <Route path="services/enablement" element={<TrainingPage />} />
        {serviceRoutes.map(({ path, serviceId, seoTitle, seoDescription }) => (
          <Route
            key={path}
            path={path.replace(/^\//, '')}
            element={
              <ServiceLandingPage
                serviceId={serviceId}
                seoTitle={seoTitle}
                seoDescription={seoDescription}
              />
            }
          />
        ))}
        {legacyRedirects.map(({ from, to }) => (
          <Route key={from} path={from.replace(/^\//, '')} element={<Navigate to={to} replace />} />
        ))}
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/digital-employees" element={<DigitalEmployeePlatformPage />} />
        <Route path="products/digital-employees/it-software" element={<Navigate to="/products/digital-employees" replace />} />
        <Route path="products/digital-employees/cybersecurity" element={<Navigate to="/products/digital-employees" replace />} />
        <Route path="products/digital-employees/:industryId" element={<IndustryPackPage />} />
        <Route path="products/rozgar-ai" element={<RozgarAiPage />} />
        <Route path="products/drawing-validation" element={<Navigate to="/products" replace />} />
        <Route path="products/visual-inspection" element={<Navigate to="/products" replace />} />
        <Route path="products/document-intelligence" element={<Navigate to="/products" replace />} />
        <Route path="products/process-automation" element={<Navigate to="/products" replace />} />
        <Route path="products/quality-engine" element={<Navigate to="/products" replace />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="engagement-models" element={<EngagementModelsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
