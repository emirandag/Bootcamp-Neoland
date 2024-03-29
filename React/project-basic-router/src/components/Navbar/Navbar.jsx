import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="listado">Listado</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar