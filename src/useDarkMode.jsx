import { createContext, useContext, useState } from "react"

const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  )
}
