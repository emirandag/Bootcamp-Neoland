import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = ({ data }) => {

  return (
    <nav className="navbar">
      <ul>
        <NavLink to="">Sobre Mi</NavLink>
        <NavLink to="education" >Educación</NavLink>
        <NavLink to="experience">Experiencia</NavLink>
        <NavLink to="language">Idiomas</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar