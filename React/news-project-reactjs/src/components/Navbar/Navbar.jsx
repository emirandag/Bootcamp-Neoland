import './Navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
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
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar