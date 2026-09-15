import { motion } from 'framer-motion'
import { HeroBackdrop, CYAN_BRIGHT, PulseDot } from './hero-scenes/shared'

interface IllustratedPhotoSceneProps {
  src: string
  label: string
  caption: string
  loop: boolean
  framed?: boolean
}

export default function IllustratedPhotoScene({
  src,
  label,
  caption,
  loop,
  framed = true,
}: IllustratedPhotoSceneProps) {
  const visual = (
    <>
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040c16] via-transparent to-[#040c16]/45 pointer-events-none" />
      <svg viewBox="0 0 480 300" className="absolute inset-0 w-full h-full pointer-events-none">
        {loop && (
          <>
            <motion.line
              x1="0"
              x2="480"
              y1="40"
              y2="40"
              stroke={CYAN_BRIGHT}
              strokeWidth="1.5"
              opacity="0.5"
              filter="url(#hs-glow)"
              animate={{ y1: [28, 272, 28], y2: [28, 272, 28] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'linear' }}
            />
            <motion.rect
              x="0"
              y="0"
              width="480"
              height="18"
              fill="url(#hs-cyan)"
              opacity="0.08"
              animate={{ y: [20, 260, 20] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'linear' }}
            />
          </>
        )}
        <PulseDot cx={420} cy={64} loop={loop} />
        <PulseDot cx={58} cy={228} loop={loop} delay={0.6} />
        <text x="240" y="286" fill="rgba(255,255,255,0.5)" fontSize="7" textAnchor="middle" fontFamily="monospace">
          {caption}
        </text>
      </svg>
    </>
  )

  if (!framed) {
    return <div className="relative w-full h-full overflow-hidden bg-[#040c16]">{visual}</div>
  }

  return <HeroBackdrop label={label}>{visual}</HeroBackdrop>
}
