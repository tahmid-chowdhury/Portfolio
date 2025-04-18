// frontend/src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

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
        {/* Header Section */}
        <motion.div variants={itemVariants} className="card">
          <h1>Tahmid Chowdhury</h1>
          <p className="text-lg">Software Engineer</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-bg-tertiary rounded-full text-sm">
              Ajax, ON
            </span>
            <span className="inline-block px-3 py-1 bg-bg-tertiary rounded-full text-sm">
              +1 (647) 608-4394
            </span>
            <span className="inline-block px-3 py-1 bg-bg-tertiary rounded-full text-sm">
              <a href="mailto:tahmid.s.chowdhury@gmail.com">
                tahmid.s.chowdhury@gmail.com
              </a>
            </span>
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
