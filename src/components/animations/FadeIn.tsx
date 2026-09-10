import ScrollReveal from './ScrollReveal'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <ScrollReveal variant="fade" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}
