"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// This would ideally come from your data files or CMS
const projects = [
  {
    id: 1,
    title: 'Image Caption Generator',
    description: 'Deep learning model that generates descriptive captions for images using attention mechanisms. Achieved 82% BLEU score.',
    tags: ['Computer Vision', 'Deep Learning', 'PyTorch', 'NLP'],
    imageUrl: '/images/placeholder-project.jpg',
    githubUrl: 'https://github.com/AryanVarmora/project-name',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'WildEye',
    description: 'Wildlife monitoring system using computer vision to detect and classify species. 92% classification accuracy.',
    tags: ['TensorFlow', 'Computer Vision', 'REST API', 'Real-time Processing'],
    imageUrl: '/images/placeholder-project.jpg',
    githubUrl: 'https://github.com/AryanVarmora/project-name',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'PrognosticEngine',
    description: 'Predictive analytics platform for healthcare data, forecasting patient outcomes with 88% accuracy.',
    tags: ['Machine Learning', 'Data Analytics', 'Healthcare', 'Python'],
    imageUrl: '/images/placeholder-project.jpg',
    githubUrl: 'https://github.com/AryanVarmora/project-name',
    demoUrl: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my work in AI/ML and software development that demonstrates my technical expertise and problem-solving abilities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 w-full relative bg-gray-200">
                {/* Placeholder if you don't have images yet */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900">
                  <span className="text-white text-lg font-medium">{project.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}