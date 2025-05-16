"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'Computer Vision', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'NLP', level: 80 }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 90 }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 70 }
    ]
  }
];

export default function InteractiveSkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);
  const [isInView, setIsInView] = useState(false);

  // Reset animation when category changes
  useEffect(() => {
    setIsInView(false);
    setTimeout(() => setIsInView(true), 100);
  }, [activeCategory]);

  const currentSkills = skillCategories.find(
    cat => cat.category === activeCategory
  )?.skills || [];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            My expertise spans AI/ML and software development, with a focus on building innovative solutions that solve real-world problems.
          </p>
        </motion.div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-3 rounded-full transition ${
                activeCategory === cat.category
                  ? 'bg-white text-blue-900 font-medium'
                  : 'bg-blue-800 bg-opacity-50 text-white hover:bg-opacity-70'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.category}
            </motion.button>
          ))}
        </div>
        
        {/* Skills visualization */}
        <div className="max-w-3xl mx-auto">
          {currentSkills.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-blue-800 bg-opacity-40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: isInView ? `${skill.level}%` : 0 
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}