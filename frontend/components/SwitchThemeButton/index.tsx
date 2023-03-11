import { useState } from 'react'

export default function SwitchThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <button
      onClick={handleDarkModeToggle}
      className={`col-end-7 col-span-2 w-16 ml-10 border  border-neutral-200 rounded-lg ${
        isDarkMode ? 'bg-white text-dark-blue' : 'bg-dark-blue text-white'
      }`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
