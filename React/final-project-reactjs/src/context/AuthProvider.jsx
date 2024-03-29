import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {

    const ID = window.localStorage.getItem('user');
    return ID ? ID : null;
  });
  const navigate = useNavigate();

  const login = (data) => {
    console.log(data.user);
    setUser(data);

    localStorage.setItem('user', data.user);

    const favorites = localStorage.getItem(`${data.user}-Favorites`)
    const userFavorites = JSON.parse(favorites);
    
    // console.log(favorites);
    // console.log(userFavorites);

    userFavorites === null && localStorage.setItem(`${data.user}-Favorites`, JSON.stringify([])) 
    

    navigate('/profile');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
