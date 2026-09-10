import { useEffect, useState } from 'react'

export function useMousePosition(enabled = true) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [enabled])

  return position
}
