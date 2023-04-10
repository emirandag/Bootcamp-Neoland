import './SocialMedia.css'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className="social-media">
      
        <Link to='https://github.com/emirandag' target='_blank'><button><FaGithub /></button></Link>
      
      
        <Link to='https://www.linkedin.com/in/eduardomirandagoya/' target='_blank'><button><FaLinkedinIn /></button></Link>
      
      
        <Link to='https://twitter.com/eduluchomg' target='_blank'><button><FaTwitter /></button></Link>
      
    </div>
  );
};

export default SocialMedia;
