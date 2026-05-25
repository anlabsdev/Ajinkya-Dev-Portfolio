import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { logo } from "../assets/images";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('.menu-button');
      
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target) && !menuButton?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/projects', label: 'Projects' },
    { to: '/studio', label: 'Studio' },
    { to: '/certification', label: 'Certifications' },
    { to: '/about', label: 'About' },
    { to: '/chatbot', label: 'AI Chat Agent' },
    { to: '/connect', label: 'Connect' },
    { to: '/contact', label: 'Contact' }
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <header className='header relative z-[100]'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-16 h-16 sm:w-18 sm:h-18 object-contain' />
        </Link>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors menu-button"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.div>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex text-lg gap-7 font-medium'>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <FiSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                isActive 
                  ? "text-primary dark:text-primary-dark" 
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] lg:hidden z-[200]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white/95 dark:bg-card-dark/95 backdrop-blur-md shadow-2xl p-6 z-[300] mobile-menu"
            >
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.95 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={toggleTheme}
                  className="text-lg hover:text-primary dark:hover:text-primary-dark transition-colors flex items-center gap-2"
                >
                  {isDarkMode ? (
                    <>
                      <FiSun className="w-5 h-5 text-yellow-500" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FiMoon className="w-5 h-5 text-gray-700" />
                      Dark Mode
                    </>
                  )}
                </button>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      isActive 
                        ? "text-primary dark:text-primary-dark" 
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Footer */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-gray-500 text-center">
                  © 2025 Ajinkya Narke. All rights reserved.
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
