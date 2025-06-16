import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Ilter Kemal</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Aspiring Software Engineer and ML Enthusiast
        </p>
      </section>

      {/* What I'm Working On */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Currently Working On</h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

          <div>
            <h3 className="text-base font-semibold">Turpan Uyghur Restaurant</h3>
            <p className="mt-1">
              Building a modern website with a custom booking system for my family’s restaurant.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">MarketPulse</h3>
            <p className="mt-1">
              Developing a bot that sends popular trading signals and insights directly into Discord.
            </p>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <div>
            <h3 className="text-base font-semibold">Data Science Intern at Shell</h3>
            <p className="text-sm text-gray-500">July — September 2025</p>
            <p className="mt-1">
              Applying data science and ML techniques to real-world energy challenges.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Front-End Developer for AI Training at Outlier AI</h3>
            <p className="text-sm text-gray-500">Jan 2025 — Present</p>
            <p className="mt-1">
              Contributing to large language model training by developing clean and responsive UIs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex justify-center space-x-6 text-gray-700 dark:text-gray-300 text-2xl">
          <a href="https://github.com/ikemal12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/ilter-kemal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
        href="mailto:iltar2005@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <MdEmail />
      </a>

        </div>
      </section>
    </main>
  );
}
