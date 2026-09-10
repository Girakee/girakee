interface ContentSectionProps {
  children: React.ReactNode
  dark?: boolean
  className?: string
}

export default function ContentSection({ children, dark = true, className = '' }: ContentSectionProps) {
  return (
    <section
      className={`section-py page-px ${dark ? 'bg-navy-dark text-white' : 'bg-navy-dark text-white'} ${className}`}
    >
      {children}
    </section>
  )
}
