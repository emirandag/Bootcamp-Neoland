import './Footer.css'
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Footer = () => {
  return (
    <footer className='footer'>
        <h3>Desarrollado por emirandag</h3>
        <div className='social-icons'>
            <button className='socials github'>
            <Link to='https://github.com/emirandag' target='_blank'>
                <BsGithub />
            </Link>
            </button>
            

            <button className='socials linkedin'>
            <Link to='https://www.linkedin.com/in/eduardomirandagoya/' target='_blank'>
                <BsLinkedin className='' />
            </Link> 
            </button>
            {/* <div className='socials'>
            <Link to='https://www.linkedin.com/in/eduardomirandagoya/' >
                <BsInstagram />
            </Link>
            </div>
             */}
            
            
        </div>
    </footer>
  )
}

export default Footer