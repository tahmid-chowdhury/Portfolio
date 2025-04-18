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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)'
      }}
    >
      {theme === 'dark' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1V3"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21V23"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.22 4.22L5.64 5.64"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.36 18.36L19.78 19.78"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 12H3"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12H23"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.22 19.78L5.64 18.36"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.36 5.64L19.78 4.22"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7479 21.1181 10.0795 20.7461C8.41106 20.3741 6.8781 19.5345 5.67516 18.3276C4.47222 17.1207 3.63736 15.5832 3.27065 13.9119C2.90394 12.2406 3.0204 10.5006 3.60706 8.89335C4.19371 7.28615 5.22748 5.88097 6.58357 4.84063C7.93965 3.8003 9.56538 3.16714 11.267 3.015C10.1427 4.54582 9.70228 6.45167 10.0469 8.29926C10.3915 10.1468 11.4905 11.7844 13.0632 12.7782C14.6359 13.772 16.5307 14.0377 18.2949 13.5122C20.0592 12.9868 21.5196 11.8122 22.328 10.2587C22.3579 10.2905 21 12.79 21 12.79Z"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle;