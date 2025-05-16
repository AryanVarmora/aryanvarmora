"use client";

import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Java', 'SQL'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'Deep Learning', 'NLP'] },
  { category: 'Web Development', items: ['React', 'Next.js', 'Node.js', 'HTML/CSS'] },
  { category: 'DevOps & Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With expertise in AI/ML and software development, I bring a diverse set of skills to tackle complex problems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-900">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="mr-2 text-blue-500">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}