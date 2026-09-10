import { Link } from 'react-router-dom'
import { engagementModels } from '../../data/engagement'
import EditorialHeading from './shared/EditorialHeading'
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren'
import PremiumScene from '../animations/PremiumScene'

export default function EngagementSection() {
  return (
    <section className="relative section-py bg-navy-deep page-px overflow-hidden">
      <PremiumScene scene="talent" size="section" />
      <div className="relative max-w-[90rem] mx-auto z-10">
        <EditorialHeading
          label="Engagement"
          title="Choose the Right Delivery Model"
          dark
        />

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.08]">
          {engagementModels.map((model, i) => (
            <StaggerItem
              key={model.id}
              className={`${
                i < engagementModels.length - 1
                  ? 'border-b sm:border-b-0 sm:border-r border-white/[0.08]'
                  : ''
              }`}
            >
              <Link
                to="/engagement-models"
                className="group block p-6 sm:p-8 h-full border-l-2 border-l-transparent hover:border-l-cyan transition-colors duration-200 touch-manipulation holographic-panel"
              >
                <h3 className="text-base font-semibold text-white mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-body-dark leading-relaxed mb-5">
                  {model.shortDescription}
                </p>
                <ul className="space-y-2">
                  {model.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-white/40">
                      <span className="w-px h-3 bg-cyan/60 shrink-0 mt-1" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
