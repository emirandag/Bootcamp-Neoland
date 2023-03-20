import './Footer.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer'>
        <h3>Desarrollado por emirandag</h3>
        <div className='social-icons'>
            <BsGithub />
            <BsLinkedin />
        </div>
    </footer>
  )
}

export default Footer