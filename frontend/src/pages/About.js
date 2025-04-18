import React from 'react';
import { motion } from 'framer-motion';
// Using direct URL instead of import
const profileImgUrl = 'https://avatars.githubusercontent.com/u/32552650';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header Section with Profile Picture */}
        <motion.div variants={itemVariants} className="card">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="profile-image-container flex-shrink-0 mx-auto md:mx-0">
              <motion.div 
                className="profile-image-wrapper rounded-full overflow-hidden w-48 h-48 border-4 border-accent-primary"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImgUrl} 
                  alt="Tahmid Chowdhury" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            <div className="text-center md:text-left">
              <h1>Tahmid Chowdhury</h1>
              <p className="text-lg">Software Engineer</p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                <span className="inline-block px-3 py-1 bg-bg-tertiary rounded-full text-sm">
                  Ajax, ON
                </span>
                <span className="inline-block px-3 py-1 bg-bg-tertiary rounded-full text-sm">
                  <a href="tel:+16476084394">
                    +1 (647) 608-4394
                  </a>
                </span>
                <span className="inline-block px-3 py-1 bg-bg-tertiary rounded-full text-sm">
                  <a href="mailto:tahmid.s.chowdhury@gmail.com">
                    tahmid.s.chowdhury@gmail.com
                  </a>
                </span>
              </div>
              
              {/* Social Links */}
              <div className="social-links flex mt-4 gap-3 justify-center md:justify-start">
                <motion.a 
                  href="https://www.linkedin.com/in/tahmid-c" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-2 rounded-full bg-bg-tertiary hover:bg-accent-primary transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://github.com/tahmid-chowdhury" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-2 rounded-full bg-bg-tertiary hover:bg-accent-primary transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>
                <motion.a 
                  href="mailto:tahmid.s.chowdhury@gmail.com"
                  className="social-icon p-2 rounded-full bg-bg-tertiary hover:bg-accent-primary transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9-2-2-2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div variants={itemVariants} className="card">
          <h2>Summary</h2>
          <p>
            New grad Software Engineer with a Bachelor's degree in Engineering and proficiency in 
            Python, JavaScript, and Java. Passionate about solving real-world problems through 
            full-stack solutions. Proven track record in leadership, AI development, and scalable 
            applications.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants} className="card">
          <h2>Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start flex-wrap">
              <h3>Team Lead</h3>
              <span className="text-text-secondary">Mar 2025</span>
            </div>
            <p className="text-accent-primary mb-2">Wouessi Digital • Remote</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Directed a 30-developer team to build the Tender Discovery Platform (TDP) for streamlining procurement access.</li>
              <li>Led development of AI modules: lead generation, NLP-driven capability assessment, and ML benchmarking.</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-start flex-wrap">
              <h3>Instructor</h3>
              <span className="text-text-secondary">Jul 2024 – Sept 2024</span>
            </div>
            <p className="text-accent-primary mb-2">Kurius • Remote</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Taught HTML, CSS, and JavaScript; provided personalized feedback in an inclusive learning environment.</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start flex-wrap">
              <h3>Coding Camp Counsellor</h3>
              <span className="text-text-secondary">Jun – Aug 2024</span>
            </div>
            <p className="text-accent-primary mb-2">Tamil Nadu Multicultural Association of Canada • Remote</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivered beginner coding lessons and adapted content to various learning styles.</li>
            </ul>
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div variants={itemVariants} className="card">
          <h2>Education</h2>
          
          <div>
            <div className="flex justify-between items-start flex-wrap">
              <h3>Bachelor of Engineering in Software Engineering</h3>
              <span className="text-text-secondary">Sept 2021 – Apr 2025</span>
            </div>
            <p className="text-accent-primary mb-2">Ontario Tech University</p>
            <p><strong>Honours:</strong> President's Honours List 2024–2025</p>
          </div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div variants={itemVariants} className="card">
          <h2>Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg mb-2">Technical Skills</h3>
              
              <div className="mb-3">
                <p className="font-semibold">Languages</p>
                <p>Python, JavaScript, Java, TypeScript, HTML, CSS, C++</p>
              </div>
              
              <div className="mb-3">
                <p className="font-semibold">Frameworks/Tools</p>
                <p>React.js, Node.js, Express, TailwindCSS, Bootstrap, JUnit, Git, GitHub, React Native</p>
              </div>
              
              <div className="mb-3">
                <p className="font-semibold">Databases</p>
                <p>MongoDB, MySQL, PostgreSQL, SQLite, DynamoDB, Redis</p>
              </div>
              
              <div>
                <p className="font-semibold">Cloud/DevOps</p>
                <p>AWS, Docker, Jenkins, Kubernetes</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-2">Other Technical Skills</h3>
              <p>REST APIs, Hugging Face, TensorFlow, Scikit-learn, Agile methods, Algorithms & Data Structures</p>
              
              <h3 className="text-lg mb-2 mt-4">Soft Skills</h3>
              <p>Problem-solving, Attention to detail, Time management, Teamwork, Communication, Adaptability</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
