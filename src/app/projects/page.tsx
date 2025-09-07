'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Autoencoder',
    desc: 'CNN-based model for lossy image compression.',
    tech: ['Python', 'PyTorch', 'Optuna'],
    img: '/previews/autoencoder.png',
    github: 'https://github.com/ikemal12/autoencoder',
    link: null,
  },
  {
    title: 'NES Emulator',
    desc: 'High-performance emulator for the Nintendo Entertainment System.',
    tech: ['Rust', 'WebAssembly'],
    img: '/previews/nes.png',
    github: null,
    link: 'https://github.com/ikemal12/nes-emu',
  },
  {
    title: 'Turpan Uyghur Restaurant',
    desc: 'A responsive, full-stack website with a custom booking system.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    img: '/previews/restaurant.png',
    github: null,
    link: 'https://turpan.vercel.app',
  },
  {
    title: 'FastConv',
    desc: 'CUDA-accelerated CNN inference engine.',
    tech: ['C++', 'CUDA'],
    img: '/previews/cuda.jpg',
    github: null,
    link: 'https://github.com/ikemal12/fast-conv',
  },
  {
    title: 'MarketPulse',
    desc: 'A Discord bot that delivers trading signals using LSTM predictions.',
    tech: ['Python','Pytorch', 'Pandas'],
    img: '/previews/discord.png',
    github: 'https://github.com/ikemal12/marketpulse',
    link: null,
  },
  {
    title: 'Stack Trace Analyzer',
    desc: 'A smart error diagnosis and recommendation engine for Python developers.',
    tech: ['LangChain', 'FastAPI', 'Ollama', 'Faiss', 'Streamlit'],
    img: '/previews/stacktrace-analyzer.png',
    github: 'https://github.com/ikemal12/stacktrace-analyzer',
    link: null,
  },
  {
    title: 'Encode AI Hack 2025',
    desc: 'Smart AI assistant for personalised money tips and investment plans.',
    tech: ['Python', 'Portia AI SDK'],
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
    desc: 'Multi-modal routing webapp developed as part of the Uber Global Hackathon.',
    tech: ['Flask', 'Google Maps', 'Tfl Unified API'],
    img: '/previews/transport.png',
    github: 'https://github.com/ikemal12/UberLand-Go',
    link: null,
  },
  {
    title: 'Pathfinding Visualizer',
    desc: 'Interactive pathfinding algorithm visualizer built with p5.js.',
    tech: ['JavaScript', 'p5.js'],
    img: '/previews/pathfinder.png',
    github: 'https://ikemal12.github.io/pathfinding-visualizer/',
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
        className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        <h1 className="text-4xl font-bold text-white">Project Gallery</h1>
        <Link
          href="/"
          className="inline-block text-white text-sm font-medium hover:underline hover:text-gray-300 transition-colors duration-200"
        >
          ← Back to Home
        </Link>
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
