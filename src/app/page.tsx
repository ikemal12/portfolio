'use client';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <motion.section
        className="relative max-w-5xl mx-auto px-6 pt-20 pb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div 
          className="relative z-10 bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-light text-slate-100 leading-relaxed">
                  Hi, I&apos;m <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Ilter</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed">
                  Software Developer
                </p>
                <p className="text-xl md:text-2xl font-light text-blue-200 italic leading-relaxed">
                  Building intelligent systems, one line at a time.
                </p>
              </div>

              <motion.div
                className="flex lg:flex-col gap-4 lg:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[{
                  href: 'https://github.com/ikemal12',
                  icon: <FiGithub />,
                  label: 'GitHub'
                }, {
                  href: 'https://linkedin.com/in/ilter-kemal',
                  icon: <FaLinkedin />,
                  label: 'LinkedIn'
                }, {
                  href: 'mailto:iltar2005@gmail.com',
                  icon: <MdEmail />,
                  label: 'Email'
                }].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.4, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-600/50 hover:border-blue-400/50 rounded-xl text-slate-300 hover:text-blue-200 transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m a Computer Science student at the University of Bath with a passion for 
                <span className="text-blue-300 font-medium"> machine learning</span> and 
                <span className="text-purple-300 font-medium"> high-performance computing</span>. 
                I recently spent my summer at Shell as a data science intern, where I worked on a 
                federated learning framework to enable collaborative training within an edge computing system - 
                an experience that has sparked my current interest in understanding the fundamentals of deep learning.
                I have also had previous experience within student teams developing routing algorithms in C++ and 
                computer vision models in Python. My coding projects vary greatly from a full-stack restaurant booking site
                which I built with Next.js and Supabase, to a high-performance NES emulator written in Rust which I am currently working on.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="projects"
        className="max-w-6xl mx-auto px-6 pb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={2}
      >
        <motion.div
          className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-purple-200 mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Autoencoder',
              desc: 'CNN-based model for lossy image compression.',
              tech: ['Python', 'PyTorch', 'Optuna'],
              img: '/previews/autoencoder.png',
              link: 'https://github.com/ikemal12/autoencoder',
            }, {
              title: 'NES Emulator',
              desc: 'High-performance emulator for the Nintendo Entertainment System.',
              tech: ['Rust', 'WebAssembly'],
              img: '/previews/nes.png',
              link: 'https://github.com/ikemal12/nes-emu',
            }, {
              title: 'Turpan Uyghur Restaurant',
              desc: 'A responsive, full-stack website with a custom booking system.',
              tech: ['Next.js', 'TypeScript', 'Supabase'],
              img: '/previews/restaurant.png',
              link: 'https://turpan.vercel.app',
            }, {
              title: 'FastConv',
              desc: 'CUDA-accelerated CNN inference engine.',
              tech: ['C++', 'CUDA'],
              img: '/previews/cuda.jpg',
              link: 'https://github.com/ikemal12/fast-conv',
            }, {
              title: 'MarketPulse',
              desc: 'A Discord bot that delivers trading signals using LSTM predictions.',
              tech: ['Python','Pytorch', 'Pandas'],
              img: '/previews/discord.png',
              link: 'https://github.com/ikemal12/marketpulse',
            }, {
              title: 'Stack Trace Analyzer',
              desc: 'A smart error diagnosis and recommendation engine for Python developers.',
              tech: ['LangChain', 'FastAPI', 'Ollama'],
              img: '/previews/stacktrace-analyzer.png',
              link: 'https://github.com/ikemal12/stacktrace-analyzer',
            }, {
              title: 'Encode AI Hack 2025',
              desc: 'Smart AI assistant for personalised money tips and investment plans.',
              tech: ['Python', 'Portia AI SDK'],
              img: '/previews/financial-assistant.png',
              link: 'https://github.com/ikemal12/encode-ai-hack-2025',
            }, {
              title: 'CHIP-8',
              desc: 'Emulator for the CHIP-8 virtual machine, supporting 35+ games.',
              tech: ['C++', 'SDL2'],
              img: '/previews/emulator.png',
              link: 'https://github.com/ikemal12/CHIP-8',
            }, {
              title: 'UberLand Go',
              desc: 'Multi-modal routing webapp developed as part of the Uber Global Hackathon.',
              tech: ['Flask', 'Google Maps', 'Tfl Unified API'],
              img: '/previews/transport.png',
              link: 'https://github.com/ikemal12/UberLand-Go',
            }, {
              title: 'Pathfinding Visualizer',
              desc: 'Interactive pathfinding algorithm visualizer built with p5.js.',
              tech: ['JavaScript', 'p5.js'],
              img: '/previews/pathfinder.png',
              link: 'https://ikemal12.github.io/pathfinding-visualizer/',
            }].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1, duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl border border-slate-600/50 overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-white mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 group-hover:text-slate-200 transition-colors">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-semibold bg-slate-700/60 text-slate-300 rounded-full border border-slate-600/50 group-hover:border-blue-400/50 group-hover:text-blue-200 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 w-8 h-8 bg-slate-800/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.span
                      className="text-slate-300 text-sm"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                      ↗
                    </motion.span>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>


    <footer className="w-full py-6 mt-12 text-center text-xs text-slate-500 bg-transparent">
      <span>&copy; {new Date().getFullYear()} Made by Ilter Kemal</span>
    </footer>
  </main>
  );
}
