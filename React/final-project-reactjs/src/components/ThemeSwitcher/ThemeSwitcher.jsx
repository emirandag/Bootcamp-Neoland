import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"


const ThemeSwitcher = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <button className="theme-button" type="button" onClick={toggleTheme}>
        {theme === 'light' ? '🌚' : '🌞'}
    </button>
  )
}

export default ThemeSwitcher