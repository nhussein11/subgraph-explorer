import { createContext, useContext, useState } from 'react'

interface ContextProps {
  settings: {
    theme: string
  }
  toggleTheme: () => void
}

type SettingsContextProps = {
  children: React.ReactNode
}

export const SettingsContext = createContext({} as ContextProps)

export const useSettingsContext = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }: SettingsContextProps) => {
  const [settings, setSettings] = useState({ theme: 'light' })

  const toggleTheme = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light'
    setSettings({ theme: newTheme })
  }

  return (
    <SettingsContext.Provider value={{ settings, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  )
}
