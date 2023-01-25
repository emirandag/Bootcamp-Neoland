import './Header.css'
import NavBar from "../Navbar/Navbar"
import Title from "../Title/Title"

const Header = () => {
  return (
    <header className='header'>
        <Title text="Title" />
        <NavBar />
    </header>
  )
}

export default Header