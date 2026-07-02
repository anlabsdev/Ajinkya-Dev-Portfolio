import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { logo } from "../assets/images";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/studio', label: 'Studio' },
  { to: '/certification', label: 'Certifications' },
  { to: '/chatbot', label: 'AI Chat Agent' },
  { to: '/connect', label: 'Connect' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

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

  // over the 3D hero (home, not scrolled) links stay white; otherwise
  // the bar turns into a glass surface with normal text colors
  const overHero = isHome && !scrolled;

  const navLinkClass = ({ isActive }) => {
    const base = "relative px-1 py-1 transition-colors";
    if (overHero) {
      return `${base} drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ${
        isActive ? "text-white" : "text-white/85 hover:text-white"
      }`;
    }
    return `${base} ${
      isActive
        ? "text-primary dark:text-primary-dark"
        : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-dark"
    }`;
  };

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: "spring", stiffness: 400, damping: 40 } },
  };

  const backdropVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <>
      {overHero && (
        <div className='pointer-events-none fixed inset-x-0 top-0 z-[90] h-28 bg-gradient-to-b from-black/35 via-black/10 to-transparent sm:h-32' />
      )}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/60 bg-white/75 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/75"
            : "bg-transparent"
        }`}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 md:px-12 lg:px-10 xl:px-16'>
          <Link to='/' className='shrink-0'>
            <img
              src={logo}
              alt='logo'
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-12 w-12" : "h-16 w-16"
              }`}
            />
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors menu-button ${
              overHero ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]" : ""
            }`}
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
          <nav className='hidden items-center gap-1 whitespace-nowrap font-display text-[15px] font-medium lg:flex xl:gap-2'>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {({ isActive }) => (
                  <span className='relative inline-block px-2.5 py-1.5'>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId='nav-underline'
                        className={`absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full ${
                          overHero ? "bg-white" : "bg-primary dark:bg-primary-dark"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className='ml-2 rounded-full border border-transparent p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <FiMoon className={`h-5 w-5 ${overHero ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]" : "text-slate-700"}`} />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

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
              className="lg:hidden fixed top-0 right-0 h-full w-[300px] bg-white/95 dark:bg-card-dark/95 backdrop-blur-md shadow-2xl p-6 z-[300] mobile-menu"
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

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 font-display text-lg transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.button
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + navLinks.length * 0.05, duration: 0.35 }}
                  onClick={toggleTheme}
                  className="mt-3 flex items-center gap-3 rounded-xl px-4 py-3 font-display text-lg text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {isDarkMode ? (
                    <>
                      <FiSun className="h-5 w-5 text-yellow-400" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FiMoon className="h-5 w-5 text-slate-700" />
                      Dark Mode
                    </>
                  )}
                </motion.button>
              </div>

              {/* Footer */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-gray-500 text-center">
                  © 2026 Ajinkya Narke. All rights reserved.
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
