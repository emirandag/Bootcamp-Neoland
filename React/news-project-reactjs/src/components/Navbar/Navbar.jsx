import './Navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'


const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="news">Noticias</NavLink>
        </li>
        {!localStorage.getItem('user') && (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        )}
        
        {localStorage.getItem('user') && (
          <>
            <li>
              <NavLink to="news/sports">Deportes</NavLink>
            </li>
            <li>
              <NavLink to="news/economy">Economía</NavLink>
            </li>
            <li>
              <NavLink to="news/technology">Tecnología</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => logout()}>Logout</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar