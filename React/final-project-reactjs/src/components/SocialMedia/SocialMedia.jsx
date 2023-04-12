import './SocialMedia.css'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className="social-media">
      
        <Link data-testid='github-link' to='https://github.com/emirandag' target='_blank'><button id='github-button'><FaGithub /></button></Link>
      
      
        <Link data-testid='linkedin-link' to='https://www.linkedin.com/in/eduardomirandagoya/' target='_blank'><button id='linkedin-button'><FaLinkedinIn /></button></Link>
      
       
        <Link data-testid='twitter-link' to='https://twitter.com/eduluchomg' target='_blank'><button data-testid='twitter-button'><FaTwitter /></button></Link>
        {/* <button data-testid='twitter-button'><FaTwitter /></button> */}
        
      {/* <button id='github-button'><FaGithub /></button>
      
      <button id='linkedin-button'>Linkedin</button>
  
      <button data-testid='twitter-button'><FaTwitter /></button> */}

      {/* <Link data-testid='twitter-link' to='https://twitter.com/eduluchomg' target='_blank'>Twitter</Link> */}
      {/* <a data-testid='twitter-link' href='https://twitter.com/eduluchomg' target='_blank'>Twitter</a> */}
      
    </div>
  );
};

export default SocialMedia;
