'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Turpan Uyghur Restaurant',
    desc: 'A responsive, full-stack website with a custom booking system for my family’s restaurant.',
    tech: ['Next.js', 'Tailwind', 'Supabase', 'Vercel'],
    img: '/previews/restaurant.png',
    github: null,
    link: 'https://turpan.vercel.app',
  },
  {
    title: 'MarketPulse',
    desc: 'A Discord bot that delivers trading signals using LSTM predictions and technical indicators.',
    tech: ['Python', 'Discord.py', 'Pandas', 'Alpaca API'],
    img: '/previews/discord.png',
    github: 'https://github.com/ikemal12/marketpulse',
    link: null,
  },
  {
    title: 'Autoencoder',
    desc: 'CNN-based autoencoder for lossy image compression.',
    tech: ['NumPy', 'Optuna', 'Matplotlib'],
    img: '/previews/autoencoder.png',
    github: 'https://github.com/ikemal12/autoencoder',
    link: null,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-300">
      <motion.div
        className="mb-12 relative text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
        >
        <a
            href="/"
            className="absolute left-0 text-sm font-medium text-blue-400 hover:text-white hover:scale-105 transition-transform duration-200"
        >
            ← Back to Home
        </a>
        <h1 className="text-4xl font-bold text-white">Project Gallery</h1>
        </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-[#121212] border border-neutral-800 rounded-xl overflow-hidden shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Image src={project.img} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.desc}</p>

              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-3">
                {project.tech.map((tech, j) => (
                  <span key={j} className="bg-neutral-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 mt-4 text-gray-400 text-lg">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub className="hover:text-white" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Site">
                    <FiExternalLink className="hover:text-white" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
