import React from 'react';
import { motion } from 'framer-motion';

const LoadingState = ({ 
  isLoading, 
  error, 
  children, 
  loadingFallback,
  retryAction = null,
  fullPage = false
}) => {
  // If there's an error, show error state
  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`error-container p-6 rounded-lg ${fullPage ? 'min-h-[60vh] flex items-center justify-center' : ''}`}
      >
        <div className="text-center bg-bg-secondary p-5 rounded-lg border border-red-500 shadow-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-red-500 mx-auto mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          
          <h3 className="text-xl font-semibold mb-2">Oops! Something went wrong</h3>
          <p className="text-text-secondary mb-4">{error.message || 'Failed to load data'}</p>
          
          {error.detail && (
            <p className="text-sm text-text-secondary mb-4 max-w-md mx-auto">
              {error.detail}
            </p>
          )}
          
          {retryAction && (
            <motion.button 
              onClick={retryAction}
              className="px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  }

  // If loading, show loading state
  if (isLoading) {
    if (loadingFallback) {
      return loadingFallback;
    }
    
    return (
      <div className={`loading-container ${fullPage ? 'min-h-[60vh] flex items-center justify-center' : 'py-8'}`}>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              className="animate-spin mx-auto h-10 w-10 text-accent-primary" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <p className="mt-4 text-text-secondary">Loading...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  // If not loading and no error, render children
  return children;
};

export default LoadingState;