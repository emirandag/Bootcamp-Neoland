import './Navbar.css';

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-logo">Movies&TV</div>

      {user && (
        <nav className={`nav-items ${isOpen && 'open'}`}>
          <ul>
            <li>
              <NavLink to="profile">Perfil</NavLink>
            </li>
            <li>
              <NavLink to="movies">Películas</NavLink>
            </li>
            <li>
              <NavLink to="series">Series</NavLink>
            </li>
          </ul>
        </nav>
      )}
      {user && (
        <div className="nav-buttons">
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
