"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function EnhancedHero() {
  // State to track if we're in the browser
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize windowSize with default values
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800
  });
  
  // Set up after component mounts on the client
  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Optional: handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements - only render when mounted */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500 rounded-full opacity-10"
              initial={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                scale: 0,
              }}
              animate={{
                x: [null, Math.random() * windowSize.width],
                y: [null, Math.random() * windowSize.height],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="block">Hi, I'm Aryan</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                AI/ML Engineer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Building intelligent solutions and elegant software that solves real-world problems with a focus on computer vision and deep learning.
            </p>
            
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/AryanVarmora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-3xl transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-3xl transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-3xl transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 rounded-full font-medium transition transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 md:mt-0 md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-2 bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="absolute inset-2 rounded-full bg-blue-800 flex items-center justify-center overflow-hidden">
                {/* When you have a photo, replace this with an Image component */}
                <span className="text-7xl font-bold text-white">AV</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}