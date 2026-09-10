import ScrollReveal from './ScrollReveal'

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  subtle?: boolean
}

export default function SlideUp({ children, delay = 0, className = '', subtle = true }: SlideUpProps) {
  return (
    <ScrollReveal
      variant={subtle ? 'slideUpSubtle' : 'slideUp'}
      delay={delay}
      className={className}
    >
      {children}
    </ScrollReveal>
  )
}
