import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import EditorialHeading from './shared/EditorialHeading'
import DrawingValidationAnimation from '../animations/DrawingValidationAnimation'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { useNav } from '../../context/NavContext'

const checklist = [
  'Multimodal Document Ingestion (CAD, Vector PDF, High-Res Schematics)',
  'Computer Vision Object Detection (YOLO / OpenCV Core)',
  'High-Precision Optical Character Recognition (OCR)',
  'Dimensional & Tolerance Geometric Extraction',
  'Deterministic Rule Validation & Compliance Engine',
  'Automated Pass / Fail Audit Verification',
]

export default function DrawingValidationSection() {
  const [activePhase, setActivePhase] = useState(0)
  const { shouldAnimate } = useMotionConfig()
  const { openCallback } = useNav()

  return (
    <section className="relative section-py bg-navy-deep page-px overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(8,175,199,0.06)_0%,transparent_55%)] pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <EditorialHeading
              label="Proprietary Deep Tech"
              title="Automated Drawing & Schematic Validation"
              subtitle="Enterprise-grade computer vision, high-precision OCR, and deterministic rule engines engineered for automated inspection of complex engineering blueprints, CAD schematics, and regulatory documents."
              dark
            />

            <div className="space-y-0 mt-6">
              {checklist.map((step, i) => {
                const isActive = i === activePhase
                const isComplete = i < activePhase

                return (
                  <motion.div
                    key={step}
                    className={`flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0 transition-colors duration-300 ${
                      isActive ? 'bg-cyan/[0.04] -mx-4 px-4' : ''
                    }`}
                    animate={isActive && shouldAnimate ? { x: [0, 4, 0] } : { x: 0 }}
                    transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
                  >
                    <span
                      className={`flex items-center justify-center w-7 h-7 text-[10px] font-mono border shrink-0 mt-0.5 transition-colors duration-300 ${
                        isActive
                          ? 'border-cyan text-cyan bg-cyan/10'
                          : isComplete
                            ? 'border-green-500/40 text-green-400 bg-green-500/10'
                            : 'border-white/10 text-white/30'
                      }`}
                    >
                      {isComplete ? <Check size={12} strokeWidth={2} /> : String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-sm font-medium leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-white' : isComplete ? 'text-white/55' : 'text-white/40'
                      }`}
                    >
                      {step}
                    </span>
                    {isActive && shouldAnimate && (
                      <motion.span
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>

            <button type="button" onClick={openCallback} className="btn-primary mt-8 inline-flex">
              Request a Technical Demo
              <ArrowRight size={15} strokeWidth={1.75} />
            </button>
          </div>

          <div className="relative">
            <div className="relative bg-[#050d18] border border-cyan/20 overflow-hidden holographic-panel shadow-[0_0_60px_rgba(8,175,199,0.08)]">
              <DrawingValidationAnimation onPhaseChange={setActivePhase} />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-cyan/10 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
