import { createContext, useContext, useState, type ReactNode } from 'react'

interface NavContextValue {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <NavContext.Provider value={{ mobileOpen, setMobileOpen }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavProvider')
  return ctx
}
