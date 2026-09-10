import { motion } from 'framer-motion'
import { useMotionConfig } from '../../hooks/useMotionConfig'
import { slideUpSubtle } from '../../animations/variants'
import { pickVariants } from '../../animations/motionConfig'

interface TextRevealProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  mode?: 'words' | 'lines'
}

export default function TextReveal({
  text,
  className = '',
  as = 'h2',
  mode = 'words',
}: TextRevealProps) {
  const { reduced, wordStagger, viewport, shouldAnimate } = useMotionConfig()
  const Tag = motion[as]

  if (reduced || !shouldAnimate) {
    return <Tag className={className}>{text}</Tag>
  }

  if (mode === 'lines') {
    const lines = text.split('. ').filter(Boolean)
    return (
      <Tag className={className} aria-label={text}>
        {lines.map((line, i) => (
          <motion.span
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={pickVariants(false, slideUpSubtle)}
            transition={{ delay: i * 0.12 }}
            className="block"
          >
            {line}{i < lines.length - 1 ? '.' : ''}
          </motion.span>
        ))}
      </Tag>
    )
  }

  const words = text.split(' ')
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: i * wordStagger, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
