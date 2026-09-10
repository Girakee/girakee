import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
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
import ServiceLandingPage from './components/sections/ServiceLandingPage'
import { serviceRoutes } from './data/serviceRoutes'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
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
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="engagement-models" element={<EngagementModelsPage />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="internship" element={<TrainingPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
