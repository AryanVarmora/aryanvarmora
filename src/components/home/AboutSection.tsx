"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaMedal } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Profile image placeholder - replace with your actual image */}
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-800 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">AV</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-lg border-8 border-blue-500 -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-lg bg-indigo-500 opacity-20 -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              I'm an AI/ML Engineer and Software Developer passionate about building intelligent solutions that solve real-world problems. With expertise in computer vision and deep learning, I create systems that can see, understand, and interpret the world around us.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Currently pursuing my M.S. in Computer Science at Fordham University, I combine theoretical knowledge with practical implementation to deliver robust AI solutions with measurable impact.
            </p>
            
            {/* Timeline */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-blue-200">
              <div className="relative pl-8">
                <FaGraduationCap className="absolute left-0 top-1 w-5 h-5 p-1 bg-blue-600 text-white rounded-full" />
                <h3 className="font-bold">M.S. in Computer Science</h3>
                <p className="text-gray-600">Fordham University, 2022-Present</p>
              </div>
              
              <div className="relative pl-8">
                <FaBriefcase className="absolute left-0 top-1 w-5 h-5 p-1 bg-blue-600 text-white rounded-full" />
                <h3 className="font-bold">AI/ML Engineer</h3>
                <p className="text-gray-600">Neev Infosoft, 2021-2022</p>
              </div>
              
              <div className="relative pl-8">
                <FaGraduationCap className="absolute left-0 top-1 w-5 h-5 p-1 bg-blue-600 text-white rounded-full" />
                <h3 className="font-bold">B.S. in Computer Science</h3>
                <p className="text-gray-600">Previous University, 2017-2021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}