import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(() => {
        // const savedUser = window.localStorage.getItem('user')
        // return savedUser
        const ID = window.localStorage.getItem("user");
        return ID ? ID : null;
    })
    const navigate = useNavigate()

    const login = (data) => {
        setUser(data)
        localStorage.setItem('user', data)
        navigate('/news')
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}