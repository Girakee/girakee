import ScrollReveal from './ScrollReveal'

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function ScaleIn({ children, delay = 0, className = '' }: ScaleInProps) {
  return (
    <ScrollReveal variant="scale" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}
