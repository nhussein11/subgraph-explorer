// components/DarkModeButton.js

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
      className={`px-4 py-2 border border-black-700 rounded-lg ${
        isDarkMode ? 'bg-white text-dark-blue' : 'bg-dark-blue text-white'
      }`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
