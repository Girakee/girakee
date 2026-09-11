import { createContext, useContext, useState, type ReactNode } from 'react'

interface NavContextValue {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  callbackOpen: boolean
  openCallback: () => void
  closeCallback: () => void
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [callbackOpen, setCallbackOpen] = useState(false)

  const openCallback = () => {
    setMobileOpen(false)
    setCallbackOpen(true)
  }

  const closeCallback = () => setCallbackOpen(false)

  return (
    <NavContext.Provider
      value={{ mobileOpen, setMobileOpen, callbackOpen, openCallback, closeCallback }}
    >
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavProvider')
  return ctx
}
