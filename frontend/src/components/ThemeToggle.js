import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: theme === 'dark' 
          ? '0 0 15px rgba(100, 255, 218, 0.5)' 
          : '0 0 15px rgba(0, 122, 204, 0.5)'  // Blue glow for light mode
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: 'var(--bg-secondary)',
        border: '2px solid var(--accent-primary)',
        boxShadow: theme === 'dark' 
          ? '0 0 10px rgba(100, 255, 218, 0.3)' 
          : '0 0 10px rgba(0, 122, 204, 0.4)',  // Blue glow for light mode
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        style={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {theme === 'dark' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.path
              d="M12 1V3"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
            <motion.path
              d="M12 21V23"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            />
            <motion.path
              d="M4.22 4.22L5.64 5.64"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            />
            <motion.path
              d="M18.36 18.36L19.78 19.78"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.45 }}
            />
            <motion.path
              d="M1 12H3"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            />
            <motion.path
              d="M21 12H23"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.55 }}
            />
            <motion.path
              d="M4.22 19.78L5.64 18.36"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            />
            <motion.path
              d="M18.36 5.64L19.78 4.22"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.65 }}
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7479 21.1181 10.0795 20.7461C8.41106 20.3741 6.8781 19.5345 5.67516 18.3276C4.47222 17.1207 3.63736 15.5832 3.27065 13.9119C2.90394 12.2406 3.0204 10.5006 3.60706 8.89335C4.19371 7.28615 5.22748 5.88097 6.58357 4.84063C7.93965 3.8003 9.56283 3.16709 11.264 3.01416C9.97931 4.50899 9.3329 6.43033 9.46622 8.39051C9.59954 10.3507 10.4983 12.1753 11.9807 13.4935C13.4632 14.8116 15.4206 15.5205 17.4242 15.4599C19.4277 15.3993 21.3347 14.5735 22.736 13.1501C22.2646 13.078 21.7931 12.9556 21.336 12.7832C21.224 12.7832 21 12.79 21 12.79Z"
              fill="none"
              stroke="var(--accent-primary)"  // Using accent-primary instead of hard-coded color
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;