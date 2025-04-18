import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import apiClient, { useApiCall } from '../utils/apiClient';
import LoadingState from '../components/LoadingState';

const Projects = () => {
  // Data states
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  // Removing the unused hoveredProject state
  
  // API states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false); // Track initial load
  const makeApiCall = useApiCall(status => {
    // Only update loading state if initial load isn't complete
    if (!initialLoadComplete) {
      setLoading(status);
    }
  });

  // Memoize the fallback project data to prevent unnecessary re-renders
  const initialProjects = useMemo(() => [
    {
      id: 1,
      title: "LinguaDex",
      description: "An AI-enhanced language learning platform with several features.",
      technologies: ["JavaScript", "HTML", "Python", "CSS", "React", "Tailwind"],
      link: "https://github.com/tahmid-chowdhury/LinguaDex",
      details: [
        "Built an AI-enhanced language learning platform with quizzes, translation, and vocab features",
        "Used Vite + React and Tailwind for responsive, accessible design"
      ]
    },
    {
      id: 2,
      title: "MangaVox",
      description: "A manga reader with character-specific AI narration using ElevenLabs API.",
      technologies: ["HTML", "JavaScript", "CSS", "ElevenLabs API"],
      link: "https://github.com/tahmid-chowdhury/MangaVox",
      details: [
        "Created a manga reader with character-specific AI narration using ElevenLabs API",
        "Implemented voice-panel sync and prioritized UI/UX"
      ]
    },
    {
      id: 3,
      title: "Invasive Species Detection System",
      description: "A real-time image classifier using YOLOv5 with high detection accuracy.",
      technologies: ["Python", "JavaScript", "YOLOv5", "Computer Vision"],
      link: "https://github.com/Kevaunjh/insect-identification",
      details: [
        "Designed a real-time image classifier using YOLOv5 with high detection accuracy",
        "Optimized inference and UI with a 4-member team"
      ]
    },
    {
      id: 4,
      title: "Tesla Stock Prediction",
      description: "An LSTM-based agent that achieved 2.6% gain in a trading simulation.",
      technologies: ["Python", "LSTM", "TensorFlow", "Data Analysis"],
      link: "https://github.com/tahmid-chowdhury/tesla-stock-prediction",
      details: [
        "Developed an LSTM-based agent that achieved 2.6% gain in a trading simulation"
      ]
    },
    {
      id: 5,
      title: "HackHive 2025",
      description: "A fitness tracker app built in <24h with real-time feedback and motivational visuals.",
      technologies: ["TypeScript", "React Native", "Mobile Development"],
      link: "https://github.com/tahmid-chowdhury/HackHive-2025",
      details: [
        "Built a fitness tracker MVP in <24h with real-time feedback and motivational visuals"
      ]
    },
    {
      id: 6,
      title: "CipherSafe",
      description: "A secure password manager with AES encryption and a user-friendly interface.",
      technologies: ["Java"],
      link: "https://github.com/tahmid-chowdhury/CipherSafe",
      details: [
        "Developed a secure password manager with AES encryption and a user-friendly interface",
        "Implemented secure storage and retrieval of sensitive data"
      ]
    },
    {
      id: 7,
      title: "NoteMe",
      description: "A multi-platform notes app with a focus on user experience and accessibility.",
      technologies: ["C++", "Dart", "Swift", "C", "HTML"],
      link: "https://github.com/tahmid-chowdhury/NoteMe",
      details: [
        "Created a multi-platform notes app with a focus on user experience and accessibility",
        "Implemented features for easy note-taking and organization"
      ]
    },
    {
      id: 8,
      title: "Number Systems Calculator",
      description: "A calculator for converting between different number systems.",
      technologies: ["Python", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/tahmid-chowdhury/Number-Systems-Calculator",
      details: [
        "Developed a calculator for converting between different number systems",
        "Implemented a user-friendly interface with real-time calculations"
      ]
    },
    {
      id: 9,
      title: "Black Jack Replay",
      description: "A blackjack game with replay functionality.",
      technologies: ["JavaScript", "Python", "HTML", "CSS"],
      link: "https://github.com/jasonmzx/Black-Jack-Replay-3700U",
      details: [
        "Created a blackjack game with replay functionality",
        "Implemented real-time game mechanics and user interactions"
      ]
    },
    {
      id: 10,
      title: "Tic-Tac-Toe",
      description: "A simple Tic-Tac-Toe game with a Minimax AI opponent.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/tahmid-chowdhury/Tic-Tac-Toe",
      details: [
        "Developed a simple Tic-Tac-Toe game with a Minimax AI opponent",
        "Implemented real-time game mechanics and user interactions"
      ]
    }
  ], []);

  // Define fetch projects function with useCallback
  const fetchProjects = useCallback(async () => {
    try {
      setError(null);
      if (!initialLoadComplete) {
        setLoading(true);
      }
      
      // Try to fetch from API first
      const { data, error } = await makeApiCall(() => 
        apiClient.get('/projects')
      );
      
      let projectsData;
      if (error) {
        console.warn('Failed to load projects from API, using fallback data:', error);
        // If API fails, use local fallback data
        projectsData = initialProjects;
      } else if (data && data.length > 0) {
        projectsData = data;
      } else {
        // If API returns empty array, use fallback data
        projectsData = initialProjects;
      }
      
      setProjects(projectsData);
      
      // Only apply filter if it's not "All"
      if (activeFilter === "All") {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(
          projectsData.filter(project => project.technologies.includes(activeFilter))
        );
      }
      
      // Mark initial load as complete
      setInitialLoadComplete(true);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError({
        message: 'Failed to load projects',
        detail: 'Please try again later'
      });
      // Use fallback on any error
      setProjects(initialProjects);
      setFilteredProjects(initialProjects);
      // Mark initial load as complete even on error
      setInitialLoadComplete(true);
    } finally {
      if (!initialLoadComplete) {
        setLoading(false);
      }
    }
  }, [makeApiCall, initialProjects, initialLoadComplete, activeFilter]);
  
  // Fetch projects on component mount or when activeFilter changes
  useEffect(() => {
    if (!initialLoadComplete) {
      // Initial load - fetch from API
      fetchProjects();
    } else {
      // Subsequent filter changes - just filter the existing projects
      if (activeFilter === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter(project => project.technologies.includes(activeFilter))
        );
      }
    }
  }, [fetchProjects, activeFilter, initialLoadComplete, projects]);

  // Fixed handleFilterClick to prevent unnecessary API calls
  const handleFilterClick = useCallback((tech) => {
    setActiveFilter(tech);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Get all unique technology tags
  const allTechnologies = ["All", ...new Set(projects.flatMap(project => project.technologies))];

  // Only show loading state on initial load
  const projectContent = (
    <>
      {/* Filter Buttons - Updated for better mobile display */}
      <motion.div 
        className="filter-container mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-2 pb-2">
          {allTechnologies.map((tech, index) => (
            <motion.button
              key={tech}
              className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
                activeFilter === tech ? 'bg-accent-primary text-bg-primary' : 'bg-bg-tertiary'
              }`}
              onClick={() => handleFilterClick(tech)}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: activeFilter === tech ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                color: 'var(--bg-primary)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="card project-card relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 15px 30px var(--shadow-color)',
              transition: { duration: 0.3 } 
            }}
          >
            {/* Removed thumbnail image */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-bg-tertiary hover:bg-accent-primary p-2 rounded-full inline-block transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="View Repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </motion.a>
            </div>
            
            <p className="mb-4 line-clamp-2 text-text-secondary">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-bg-tertiary text-xs rounded-full"
                  whileHover={{ 
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--bg-primary)',
                    scale: 1.05
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="project-details mb-4">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {project.details.map((detail, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-2">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg">No projects found with the selected technology.</p>
          <button
            className="mt-4 text-accent-primary hover:underline"
            onClick={() => handleFilterClick("All")}
          >
            Show all projects
          </button>
        </motion.div>
      )}
    </>
  );

  return (
    <section className="projects-section">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      {/* Only apply LoadingState during initial load */}
      {!initialLoadComplete ? (
        <LoadingState 
          isLoading={loading} 
          error={error}
          retryAction={fetchProjects}
        >
          {projectContent}
        </LoadingState>
      ) : (
        error ? (
          <LoadingState 
            isLoading={false} 
            error={error}
            retryAction={fetchProjects}
          />
        ) : projectContent
      )}
    </section>
  );
};

export default Projects;
