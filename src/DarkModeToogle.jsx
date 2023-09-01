import { useDarkMode } from "./useDarkMode"

function DarkModeToogle() {

  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌛' : '☀️'}
    </div>
  )
}

export default DarkModeToogle