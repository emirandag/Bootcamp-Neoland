import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(() => {
        const savedUser = window.localStorage.getItem('user')
        return savedUser
    })

    const login = (data) => {
        setUser(data)
        localStorage.setItem('user', data)
        navigate('/news/sports')
    }

  return <AuthContext.Provider value={{user, login}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}