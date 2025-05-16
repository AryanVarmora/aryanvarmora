"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Aryan Varmora
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 font-semibold mb-6">
            AI/ML Engineer & Software Developer
          </h2>
          <p className="text-lg mb-8">
            Specialized in computer vision and deep learning. Building intelligent solutions and elegant software that solves real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-900 rounded-lg font-medium transition"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-80 w-80 mx-auto">
            {/* Placeholder if you don't have an image yet */}
            <div className="absolute inset-0 rounded-full bg-blue-800 flex items-center justify-center">
              <span className="text-5xl font-bold">AV</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}