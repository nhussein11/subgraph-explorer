import { createContext, useContext, useState } from 'react'

interface IContextProps {
  settings: {
    theme: string
  }
  toggleTheme: () => void
}

type SettingsContextProps = {
  children: React.ReactNode
}

export const SettingsContext = createContext({} as IContextProps)

export const useSettingsContext = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }: SettingsContextProps) => {
  const [settings, setSettings] = useState({ theme: 'dark' })

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
