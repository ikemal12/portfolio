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
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-300">
      {/* Header */}
      <motion.section
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">Ilter Kemal</h1>
        <p className="text-xl text-gray-400">
          Aspiring Software Engineer and ML Enthusiast
        </p>
      </motion.section>

      {/* Currently Working On */}
      <motion.section
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
      >
        <h2 className="text-xl font-semibold text-gray-200 mb-6 uppercase tracking-wide">
          Currently Working On
        </h2>
        <div className="space-y-6">
          {[{
            title: 'Turpan Uyghur Restaurant',
            desc: 'Building a modern website with a custom booking system for my family’s restaurant.',
            link: 'https://turpan.vercel.app',
            icon: '/icons/restaurant.png',
          }, {
            title: 'MarketPulse',
            desc: 'Developing a bot that sends popular trading signals and insights directly into Discord.',
            link: 'https://github.com/ikemal12/marketpulse',
            icon: '/icons/discord.png',
          }].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#121212] p-4 rounded-xl border border-neutral-800"
            >
              <div className="flex items-center space-x-3">
                <Image src={project.icon} alt="logo" width={20} height={20} className="rounded-sm" />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">
                  {project.title}
                </a>
              </div>
              <p className="mt-2 text-sm text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
          <motion.div
            className="pt-4 text-right"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={2}
          >
            <a
  href="/projects"
  className="inline-block mt-2 rounded px-4 py-2 bg-[#1E293B] text-white text-sm font-medium hover:bg-[#334155] transition-colors duration-200"
>
  View all projects →
</a>

          </motion.div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={3}
      >
        <h2 className="text-xl font-semibold text-gray-200 mb-6 uppercase tracking-wide">
          Experience
        </h2>
        <div className="space-y-6">
          {[{
            title: 'Data Science Intern at Shell',
            date: 'July — September 2025',
            desc: 'Applying data science and ML techniques to real-world energy challenges.',
            icon: '/icons/shell.png',
          }, {
            title: 'Front-End Developer for AI Training at Outlier AI',
            date: 'Jan 2025 — Present',
            desc: 'Contributing to large language model training by developing clean and responsive UIs.',
            icon: '/icons/outlier.png',
          }].map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#121212] p-4 rounded-xl border border-neutral-800"
            >
              <div className="flex items-center space-x-3">
                <Image src={exp.icon} alt="logo" width={20} height={20} className="rounded-sm" />
                <h3 className="text-white font-medium">{exp.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
              <p className="mt-2 text-sm text-gray-400">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={4}
      >
        <h2 className="text-xl font-semibold text-gray-200 mb-6 uppercase tracking-wide">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-6 text-2xl text-gray-400">
          {[{
            href: 'https://github.com/ikemal12',
            label: 'GitHub',
            icon: <FiGithub />,
          }, {
            href: 'https://linkedin.com/in/ilter-kemal',
            label: 'LinkedIn',
            icon: <FaLinkedin />,
          }, {
            href: 'mailto:iltar2005@gmail.com',
            label: 'Email',
            icon: <MdEmail />,
          }].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ scale: 1.2, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
