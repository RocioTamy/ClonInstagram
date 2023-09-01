
import './App.css'
import DarkModeToggle from './DarkModeToogle';
import Sign from './Sign';
import { useDarkMode } from './useDarkMode';




function App() {

  const [darkMode] = useDarkMode()
 
  return (
  < div className={`app theme-${darkMode ? 'dark' : 'light'}`}>
    <div>
      <h1>Instagram</h1>
      <DarkModeToggle/>
      <img src="./../public/logo.svg" alt="logo IG" />
    </div>
    <Sign/>
    </div>
   );
  }
  


export default App
