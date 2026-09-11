import { Outlet } from 'react-router-dom'
import { NavProvider } from '../../context/NavContext'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import FloatingCTA from '../animations/FloatingCTA'
import ParticleField from '../animations/ParticleField'
import AmbientMotion from '../animations/AmbientMotion'

export default function Layout() {
  return (
    <NavProvider>
      <ParticleField />
      <AmbientMotion />
      <Navbar />
      <PageTransition>
        <main className="mobile-main-pad">
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
      <FloatingCTA />
    </NavProvider>
  )
}
