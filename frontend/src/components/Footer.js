import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tahmid-c', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/tahmid-chowdhury', icon: 'github' },
    { name: 'Email', url: 'mailto:tahmid.s.chowdhury@gmail.com', icon: 'mail' }
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case 'mail':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-bg-secondary py-8 border-t border-border-color relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-2">
              <motion.span
                className="text-lg font-bold mr-2"
                whileHover={{ scale: 1.05, color: 'var(--accent-primary)' }}
              >
                Tahmid Chowdhury
              </motion.span>
              <span className="text-xs bg-bg-tertiary px-2 py-1 rounded-full text-text-secondary">Portfolio</span>
            </div>
            <p className="text-sm text-text-secondary">
              © {currentYear} All rights reserved
            </p>
            <p className="text-sm text-text-secondary mt-1">
              <span className="inline-block mr-2">Ajax, ON</span>
              <span>•</span>
              <motion.a 
                href="tel:+16476084394"
                className="inline-block mx-2"
                whileHover={{ color: 'var(--accent-primary)' }}
              >
                +1 (647) 608-4394
              </motion.a>
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-text-secondary mb-2">Connect with me</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={link.name}
                  whileHover={{ y: -3, color: 'var(--accent-primary)' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.1 + 0.3
                    }
                  }}
                >
                  <div className="social-icon">
                    {renderIcon(link.icon)}
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.p 
              className="text-xs text-text-secondary mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1 }}
            >
              Built with React & Framer Motion
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;