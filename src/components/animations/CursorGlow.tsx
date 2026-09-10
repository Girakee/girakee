import { useEffect, useState } from 'react'
import { useMotionConfig } from '../../hooks/useMotionConfig'

export default function CursorGlow() {
  const { shouldParallax } = useMotionConfig()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!shouldParallax) return

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [shouldParallax])

  if (!shouldParallax) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute w-80 h-80 rounded-full will-change-transform"
        style={{
          left: pos.x - 160,
          top: pos.y - 160,
          background: 'radial-gradient(circle, rgba(8,175,199,0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
