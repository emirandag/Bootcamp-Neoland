import { useState, useEffect, useCallback } from "react"
import ThemeContext from "./ThemeContext"


export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(
        () => (localStorage.getItem('theme')) || 'dark'
    )

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <ThemeContext.Provider value={{
        theme, 
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider