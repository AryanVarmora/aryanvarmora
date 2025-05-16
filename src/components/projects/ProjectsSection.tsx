"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

// Enhanced project data with better metadata
const projects = [
  {
    id: 1,
    title: 'Image Caption Generator',
    description: 'Deep learning model that generates descriptive captions for images using attention mechanisms. Achieved 82% BLEU score.',
    longDescription: 'This project utilized a CNN-LSTM architecture with an attention mechanism to generate accurate image captions. I implemented the model using PyTorch and trained it on the MS COCO dataset, achieving state-of-the-art results.',
    tags: ['Computer Vision', 'Deep Learning', 'PyTorch', 'NLP'],
    category: 'AI/ML',
    imageUrl: '/images/placeholder-project.jpg',
    githubUrl: 'https://github.com/AryanVarmora/Image-Caption-Generator',
    // demoUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'WildEye',
    description: 'Wildlife monitoring system using computer vision to detect and classify species. 92% classification accuracy.',
    longDescription: 'WildEye is a real-time wildlife monitoring system that uses computer vision to detect and classify animal species in their natural habitat. It employs a custom-trained YOLO model for object detection and a ResNet50 classifier for species identification.',
    tags: ['TensorFlow', 'Computer Vision', 'REST API', 'Real-time Processing'],
    category: 'AI/ML',
    imageUrl: '/images/placeholder-project.jpg',
    githubUrl: 'https://github.com/AryanVarmora/WildEye',
    // demoUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'PrognosticEngine',
    description: 'Predictive analytics platform for healthcare data, forecasting patient outcomes with 88% accuracy.',
    longDescription: 'PrognosticEngine is a predictive analytics platform designed for healthcare providers to forecast patient outcomes and recommend interventions. It uses a combination of machine learning algorithms including random forests and gradient boosting.',
    tags: ['Machine Learning', 'Data Analytics', 'Healthcare', 'Python'],
    category: 'Data Science',
    imageUrl: '/images/placeholder-project.jpg',
    githubUrl: 'https://github.com/AryanVarmora/PrognosticEngine',
    // demoUrl: '#',
    featured: true
  }
];

// All possible categories for filtering
const categories = ['All', 'AI/ML', 'Data Science', 'Web Development', 'Mobile Apps'];

export default function EnhancedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my work in AI/ML and software development that demonstrates my technical expertise and problem-solving abilities.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div 
                  className="h-48 w-full relative group cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  {/* Project image or placeholder */}
                  <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
                    <span className="text-white text-xl font-medium">{project.title}</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaSearch className="text-white text-3xl" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                    >
                      <FaGithub /> Code
                    </a>
                    {/* <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Project modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div 
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold mb-4">{activeProject.title}</h2>
                  
                  <div className="h-64 md:h-80 bg-gray-200 rounded-lg mb-6">
                    {/* Project image would go here */}
                    <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white">
                      Project Screenshot
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6">{activeProject.longDescription}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={activeProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2"
                    >
                      <FaGithub /> View Code
                    </a>
                    {/* <a 
                      href={activeProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}