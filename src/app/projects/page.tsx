'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
  {
    title: 'Encode AI Hack 2025',
    desc: 'Smart AI assistant for personalised money tips, debt fixes, and investment plans.',
    tech: ['Python', 'Portia AI SDK', 'OpenAI API'],
    img: '/previews/financial-assistant.png',
    github: 'https://github.com/ikemal12/encode-ai-hack-2025',
    link: null,
  },
  {
    title: 'CHIP-8',
    desc: 'Emulator for the CHIP-8 virtual machine, supporting 35+ games.',
    tech: ['C++', 'SDL2'],
    img: '/previews/emulator.png',
    github: 'https://github.com/ikemal12/CHIP-8',
    link: null,
  },
  {
    title: 'UberLand Go',
    desc: 'Transport routing webapp developed as part of the Uber Global Hackathon',
    tech: ['Flask', 'Google Maps', 'Tfl Unified API'],
    img: '/previews/transport.png',
    github: 'https://github.com/ikemal12/UberLand-Go',
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
        <Link
            href="/"
            className="absolute left-0 text-sm font-medium text-blue-400 hover:text-white hover:scale-105 transition-transform duration-200"
        >
            ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-white">Project Gallery</h1>
        </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => {
          const targetUrl = project.link || project.github;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={targetUrl || "#"} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#121212] border border-neutral-800 rounded-xl overflow-hidden shadow cursor-pointer hover:bg-[#1e1e1e] transition">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
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
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
