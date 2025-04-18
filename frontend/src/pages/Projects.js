import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import axios from 'axios'; // Uncomment when connecting to backend API
// import { useEffect } from 'react'; // Uncomment when backend API is ready

const Projects = () => {
  // Replace with API call when backend is connected
  const initialProjects = [
    {
      id: 1,
      title: "LinguaDex",
      description: "An AI-enhanced language learning platform with quizzes, translation, and vocabulary features.",
      technologies: ["JavaScript", "HTML", "Python", "CSS", "React", "Tailwind"],
      link: "https://github.com/tahmid-chowdhury/LinguaDex",
      image: "https://via.placeholder.com/600x340/1a1a1a/64ffda?text=LinguaDex",
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
      image: "https://via.placeholder.com/600x340/1a1a1a/64ffda?text=MangaVox",
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
      image: "https://via.placeholder.com/600x340/1a1a1a/64ffda?text=Species+Detection",
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
      image: "https://via.placeholder.com/600x340/1a1a1a/64ffda?text=Tesla+Stock+Prediction",
      details: [
        "Developed an LSTM-based agent that achieved 2.6% gain in a trading simulation"
      ]
    },
    {
      id: 5,
      title: "HackHive 2025",
      description: "A fitness tracker MVP built in <24h with real-time feedback and motivational visuals.",
      technologies: ["TypeScript", "React Native", "Mobile Development"],
      link: "https://github.com/tahmid-chowdhury/HackHive-2025",
      image: "https://via.placeholder.com/600x340/1a1a1a/64ffda?text=HackHive+2025",
      details: [
        "Built a fitness tracker MVP in <24h with real-time feedback and motivational visuals"
      ]
    },
    {
      id: 6,
      title: "Other Projects",
      description: "Collection of smaller projects including CipherSafe, NoteMe, Calculator, and more.",
      technologies: ["Java", "C++", "Dart", "Swift", "Python", "JavaScript"],
      link: "https://github.com/tahmid-chowdhury",
      image: "https://via.placeholder.com/600x340/1a1a1a/64ffda?text=Other+Projects",
      details: [
        "CipherSafe: Password manager (Java)",
        "NoteMe: Multilang notes app (C++, Dart, Swift)",
        "Calculator: Base converter (Python, JS)",
        "Blackjack: Multiplayer with replay (JS, Python)",
        "Tic-Tac-Toe: Minimax AI game (JS)"
      ]
    }
  ];

  const [projects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");

  // Uncomment when backend API is ready
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axios.get('/api/projects');
  //       setProjects(response.data);
  //       setFilteredProjects(response.data);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  // Get all unique technology tags
  const allTechnologies = ["All", ...new Set(projects.flatMap(project => project.technologies))];

  const handleFilterClick = (tech) => {
    setActiveFilter(tech);
    
    if (tech === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.technologies.includes(tech)
      ));
    }
  };

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

  return (
    <section className="projects-section">
      <h1>Projects</h1>

      {/* Filter Buttons */}
      <div className="filter-container mb-8 overflow-x-auto pb-2">
        <div className="flex space-x-2 mb-2">
          {allTechnologies.slice(0, Math.min(8, allTechnologies.length)).map(tech => (
            <button
              key={tech}
              className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
                activeFilter === tech ? 'bg-accent-primary text-bg-primary' : 'bg-bg-tertiary'
              }`}
              onClick={() => handleFilterClick(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        {allTechnologies.length > 8 && (
          <div className="flex space-x-2">
            {allTechnologies.slice(8).map(tech => (
              <button
                key={tech}
                className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
                  activeFilter === tech ? 'bg-accent-primary text-bg-primary' : 'bg-bg-tertiary'
                }`}
                onClick={() => handleFilterClick(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        )}
      </div>

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
            className="card project-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            {project.image && (
              <div className="project-image mb-4 overflow-hidden rounded-md">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            <h3 className="text-xl mb-2">{project.title}</h3>
            <p className="mb-4 line-clamp-2">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-bg-tertiary text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-bg-tertiary text-xs rounded-full">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div className="project-details mb-4">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-accent-primary hover:text-accent-secondary transition-colors"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg">No projects found with the selected technology.</p>
          <button
            className="mt-4 text-accent-primary"
            onClick={() => handleFilterClick("All")}
          >
            Show all projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
