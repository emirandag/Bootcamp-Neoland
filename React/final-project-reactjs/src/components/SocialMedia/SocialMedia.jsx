import './SocialMedia.css'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <button>
        <FaGithub />
      </button>
      <button>
        <FaLinkedinIn />
      </button>
      <button>
        <FaTwitter />
      </button>
    </div>
  );
};

export default SocialMedia;
