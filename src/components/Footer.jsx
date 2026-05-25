import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className='footer relative font-poppins'>
      <hr className='border-slate-200 dark:border-slate-700' />

      <div className='footer-container'>
        <div className='flex items-center gap-4'>
          <p className='text-text-light dark:text-text-dark'>
            © 2025 <strong>Ajinkya Narke</strong>. All rights reserved.
          </p>

          <motion.button
            whileHover={{ scale: 1.08, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/thank-you")}
            className='rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2 shadow-lg transition-all duration-300 hover:shadow-xl'
            aria-label='Open thank you animation'
          >
            <svg
              className='h-6 w-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </motion.button>
        </div>

        <div className='flex items-center justify-center gap-3'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target={link.link.startsWith("http") ? "_blank" : undefined}
              rel={link.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className='transition-opacity hover:opacity-80'
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='h-6 w-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
