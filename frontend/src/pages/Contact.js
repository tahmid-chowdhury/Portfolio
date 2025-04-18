import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import axios from 'axios'; // Uncomment when backend is ready

const Contact = () => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "",
    message: "" 
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Uncomment when backend API is ready
      // await axios.post('/api/contact', form);
      
      setStatus({ 
        submitting: false, 
        success: "Thank you for your message! I'll get back to you soon.",
        error: null
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: null }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        success: null,
        error: "Sorry, something went wrong. Please try again later."
      });
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Info */}
        <motion.div variants={itemVariants} className="contact-info">
          <div className="card">
            <h2 className="mb-4">Contact Information</h2>
            
            <div className="mb-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-bg-tertiary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Email</h3>
                  <motion.a 
                    href="mailto:tahmid.s.chowdhury@gmail.com" 
                    className="text-accent-primary"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    tahmid.s.chowdhury@gmail.com
                  </motion.a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-bg-tertiary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Phone</h3>
                  <motion.a 
                    href="tel:+16476084394" 
                    className="text-accent-primary"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    +1 (647) 608-4394
                  </motion.a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-bg-tertiary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Location</h3>
                  <p className="text-text-primary">Ajax, ON, Canada</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3 className="mb-3 text-lg">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/in/tahmid-c" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-bg-tertiary hover:bg-accent-primary transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://github.com/tahmid-chowdhury" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-bg-tertiary hover:bg-accent-primary transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <div className="card">
            <h2 className="mb-4">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <motion.div
                  initial={{ borderColor: 'var(--border-color)' }}
                  animate={{ 
                    borderColor: focusedField === 'name' ? 'var(--accent-primary)' : 'var(--border-color)',
                    boxShadow: focusedField === 'name' ? '0 0 0 2px rgba(100, 255, 218, 0.2)' : 'none'
                  }}
                  className="relative rounded-md overflow-hidden"
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <motion.div
                  initial={{ borderColor: 'var(--border-color)' }}
                  animate={{ 
                    borderColor: focusedField === 'email' ? 'var(--accent-primary)' : 'var(--border-color)',
                    boxShadow: focusedField === 'email' ? '0 0 0 2px rgba(100, 255, 218, 0.2)' : 'none'
                  }}
                  className="relative rounded-md overflow-hidden"
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <motion.div
                  initial={{ borderColor: 'var(--border-color)' }}
                  animate={{ 
                    borderColor: focusedField === 'subject' ? 'var(--accent-primary)' : 'var(--border-color)',
                    boxShadow: focusedField === 'subject' ? '0 0 0 2px rgba(100, 255, 218, 0.2)' : 'none'
                  }}
                  className="relative rounded-md overflow-hidden"
                >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full"
                    placeholder="How can I help you?"
                  />
                  {focusedField === 'subject' && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <motion.div
                  initial={{ borderColor: 'var(--border-color)' }}
                  animate={{ 
                    borderColor: focusedField === 'message' ? 'var(--accent-primary)' : 'var(--border-color)',
                    boxShadow: focusedField === 'message' ? '0 0 0 2px rgba(100, 255, 218, 0.2)' : 'none'
                  }}
                  className="relative rounded-md overflow-hidden"
                >
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full"
                    rows="5"
                    placeholder="Your message here..."
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>
              
              {status.error && (
                <motion.div 
                  className="mb-4 p-3 bg-red-500 bg-opacity-10 border border-red-500 rounded text-red-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {status.error}
                </motion.div>
              )}
              
              {status.success && (
                <motion.div 
                  className="mb-4 p-3 bg-green-500 bg-opacity-10 border border-green-500 rounded text-green-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {status.success}
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={status.submitting}
                className={`w-full flex justify-center items-center ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={!status.submitting ? { scale: 1.03 } : {}}
                whileTap={!status.submitting ? { scale: 0.97 } : {}}
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
