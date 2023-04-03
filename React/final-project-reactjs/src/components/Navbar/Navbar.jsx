import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>Movies&TV</div>
        <nav className='nav-items'>
            <ul>
                <li><NavLink to='profile'>Perfil</NavLink></li>
                <li><NavLink to='movies'>Películas</NavLink></li>
                <li><NavLink to='series'>Series</NavLink></li>
            </ul>
        </nav>
        <div className='nav-buttons'>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar