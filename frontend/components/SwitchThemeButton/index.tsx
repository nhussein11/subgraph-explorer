import { BsMoonStarsFill } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import { useSettingsContext } from '@/context'

export default function SwitchThemeButton() {
  const { settings, toggleTheme } = useSettingsContext()
  const isDarkMode = settings.theme === 'dark'

  function handleDarkModeToggle() {
    toggleTheme()
    document.body.classList.toggle('dark')
  }

  const buttonClassname =
    'col-end-12 col-span-2 w-16 border-2 rounded-full flex justify-center items-center\
          bg-dark-blue text-white border-white\
          dark:bg-white dark:text-dark-blue dark:border-black'

  return (
    <button onClick={handleDarkModeToggle} className={buttonClassname}>
      <span>{isDarkMode ? <BiSun /> : <BsMoonStarsFill />}</span>
    </button>
  )
}
