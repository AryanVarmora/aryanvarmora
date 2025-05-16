"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold">
              Aryan Varmora
            </Link>
          </motion.div>
          
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex space-x-6 mt-4 sm:mt-0">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Aryan Varmora. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="https://github.com/AryanVarmora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}