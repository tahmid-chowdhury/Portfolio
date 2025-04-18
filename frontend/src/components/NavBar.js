// frontend/src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold no-underline">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gradient"
          >
            Tahmid Chowdhury
          </motion.span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {['/', '/projects', '/contact'].map((path, index) => {
            const label = path === '/' ? 'About' : path.substring(1).charAt(0).toUpperCase() + path.substring(1).slice(1);
            const isActive = location.pathname === path;
            
            return (
              <motion.li
                key={path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className={`relative px-2 py-1 text-lg transition-colors ${
                    isActive ? 'text-accent-primary font-bold' : ''
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavItem"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-bg-secondary py-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-3 px-4 pb-3">
            {['/', '/projects', '/contact'].map((path) => {
              const label = path === '/' ? 'About' : path.substring(1).charAt(0).toUpperCase() + path.substring(1).slice(1);
              const isActive = location.pathname === path;
              
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`block px-3 py-2 rounded-md transition-colors ${
                      isActive ? 'text-accent-primary font-bold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
