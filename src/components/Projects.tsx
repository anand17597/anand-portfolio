import { lazy } from "react";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Removed ArrowRight import as it's no longer used

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  // Removed link property as it's no longer used
}

const projects: Project[] = [
  {
    title: "Nexus Innovations",
    description: "Developed a robust e-commerce platform with real-time inventory management and secure payment gateways.",
    image: "https://images.unsplash.com/photo-1556740738-b67664c51483?auto=format&fit=crop&w=1600&q=90",
    technologies: ["React.js", "Node.js", "MySQL"],
  },
  {
    title: "Aura Solutions",
    description: "Built a dynamic content management system (CMS) allowing seamless content creation and publishing.",
    image: "https://images.unsplash.com/photo-1542831371-29b01017dfc4?auto=format&fit=crop&w=1600&q=90",
    technologies: ["PHP", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Zenith Labs",
    description: "Created a real-time chat application using Socket.io for instant messaging, ensuring low-latency communication.",
    image: "https://images.unsplash.com/photo-1526374965328-7f66d4052efc?auto=format&fit=crop&w=1600&q=90",
    technologies: ["Next.js", "Socket.io", "Node.js"],
  },
  {
    title: "Stellar Dynamics",
    description: "Designed and implemented a data visualization dashboard for business analytics. Focused on interactive charts.",
    image: "https://images.unsplash.com/photo-1551288259-cd1072041183?auto=format&fit=crop&w=1600&q=90",
    technologies: ["HTML", "CSS", "JavaScript", "D3.js"],
  },
  {
    title: "Quantum Connect",
    description: "Developed a secure user authentication system with multi-factor authentication and role-based access control.",
    image: "https://images.unsplash.com/photo-1516110833961-787cd03816bb?auto=format&fit=crop&w=1600&q=90",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Evolve Innovations",
    description: "Crafted a mobile-first responsive landing page for a new product launch, focusing on conversion optimization.",
    image: "https://images.unsplash.com/photo-1528642474498-1af0c57f3144?auto=format&fit=crop&w=1600&q=90",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Synergy Hub",
    description: "Developed a collaborative project management tool with real-time updates and task tracking.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90",
    technologies: ["Vue.js", "Firebase", "SCSS"],
  },
  {
    title: "Cognito AI",
    description: "Created an AI-powered virtual assistant with natural language processing capabilities.",
    image: "https://images.unsplash.com/photo-1507238691740-b52a2cebd18f?auto=format&fit=crop&w=1600&q=90",
    technologies: ["Python", "Flask", "TensorFlow"],
  },
  {
    title: "CloudVault",
    description: "Built a secure, scalable cloud storage solution with file sharing and version control.",
    image: "https://images.unsplash.com/photo-1497215729169-ec81c4f0f07c?auto=format&fit=crop&w=1600&q=90",
    technologies: ["AWS S3", "Lambda", "React"],
  },
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          My Recent Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Showcasing a selection of my work across various technologies and domains.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90')}
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Removed "View Details" button */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;