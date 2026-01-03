import { Link, useNavigate } from "react-router-dom";
import { socialLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const handleDanceClick = () => {
    navigate('/thank-you');
  };

  return (
    <footer className='footer font-poppins relative'>
      <hr className='border-slate-200 dark:border-slate-700' />

      <div className='footer-container'>
        <div className="flex items-center gap-4">
          <p className="text-text-light dark:text-text-dark">
            © 2025 <strong>AJinkya Narke</strong>. All rights reserved.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDanceClick}
            className="dance-button bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </motion.button>
        </div>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              target='_blank'
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
