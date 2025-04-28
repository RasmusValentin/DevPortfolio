import React, { useState } from 'react';
import { BackgroundBeams } from './components/ui/background-beams';
import profilePic from './assets/valle.png';
import arrowIcon from './assets/arrow.png';

// Technology logos (place these files in src/assets/logos/)
import reactLogo from './assets/logos/React.png';
import tsLogo from './assets/logos/TypeScript.png';
import jsLogo from './assets/logos/JavaScript.png';
import tailwindLogo from './assets/logos/Tailwind CSS.png';
import htmlLogo from './assets/logos/HTML5.png';
import cssLogo from './assets/logos/CSS3.png';
import gitLogo from './assets/logos/Git.png';
import viteLogo from './assets/logos/Vite.js.png';
import nodeLogo from './assets/logos/Node.js.png';
import figmaLogo from './assets/logos/Figma.png';
import bitbucketLogo from './assets/logos/bitBucket.png';
import jiraLogo from './assets/logos/Jira.png';
import muiLogo from './assets/logos/Material UI.png';
import storybookLogo from './assets/logos/Storybook.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'TailwindCSS',
    'HTML',
    'CSS',
    'Git',
    'Vite',
    'Node.js',
    'Figma',
    'Bitbucket',
    'Jira',
    'Material UI',
    'Storybook',
  ];

  const skillLogos: Record<string, string> = {
    React: reactLogo,
    TypeScript: tsLogo,
    JavaScript: jsLogo,
    TailwindCSS: tailwindLogo,
    HTML: htmlLogo,
    CSS: cssLogo,
    Git: gitLogo,
    Vite: viteLogo,
    'Node.js': nodeLogo,
    Figma: figmaLogo,
    Bitbucket: bitbucketLogo,
    Jira: jiraLogo,
    'Material UI': muiLogo,
    Storybook: storybookLogo,
  };

  return (
    <div className='relative flex min-h-screen flex-col text-white'>
      <BackgroundBeams className='fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 bg-fixed' />

      {/* Navbar */}
      <header className='z-10'>
        <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-20'>
          <h1 className='text-xl font-bold'>Rasmus Valentin</h1>
        </div>
      </header>

      {/* Hero Section & Content */}
      <main className='z-10 w-full flex-grow'>
        <div className='mx-auto w-full max-w-[1440px] px-4 py-12'>
          {/* Hero Card */}
          <div className='relative mx-auto w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-16 shadow-lg backdrop-blur-[4px] transition-all duration-300 ease-in-out hover:border-white/50 dark:border-gray-500/20 dark:bg-gray-800/30 dark:hover:border-gray-300/30'>
            <div className='flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between'>
              {/* Text side */}
              <div className='flex-1 text-center md:text-left'>
                <h2 className='mb-6 text-7xl font-bold'>
                  Hello! I’m Rasmus :)
                </h2>
                <p className='mx-auto mb-10 max-w-xl text-lg text-gray-300 md:mx-0'>
                  I’m a Medialogy Master’s student graduating in summer 2025,
                  with a passion for front-end development and design. I
                  specialize in creating clean, responsive and user-friendly
                  interfaces. With a strong foundation in both technical
                  implementation and creative design, I strive to bridge gaps
                  between aesthetics and functionality.
                </p>
              </div>

              {/* Image side */}
              <div className='flex flex-1 justify-center md:justify-end'>
                <div className='group relative h-100 w-72 overflow-hidden rounded-3xl border border-white/20 bg-white/3 shadow-lg backdrop-blur-[4px] transition-all duration-300 ease-in-out hover:border-white/30 dark:border-gray-500/20 dark:hover:border-gray-300/30'>
                  <img
                    src={profilePic}
                    alt='Rasmus Valentin'
                    className='h-full w-full object-cover brightness-125 contrast-110 grayscale filter transition duration-300 ease-in-out group-hover:filter-none'
                  />
                  <span className='absolute inset-x-0 top-1 flex -rotate-[5deg] transform items-center justify-center text-xl font-bold text-white opacity-0 transition-opacity duration-300 ease-in-out select-none group-hover:opacity-100'>
                    That’s me!
                    <img
                      src={arrowIcon}
                      alt='→'
                      className='h-15 w-15 translate-y-6 -rotate-[20deg] transform contrast-125 invert filter transition duration-300 ease-in-out'
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Call-to-Action (aligned left on md+) */}
            <div className='flex flex-col items-center gap-4 md:flex-row md:justify-start'>
              <button
                onClick={() => setIsModalOpen(true)}
                className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm text-white transition-all duration-300 hover:border-white/30 hover:bg-gray-700'
              >
                Let&apos;s get in touch!
              </button>
              <span className='flex items-center text-sm font-medium whitespace-nowrap text-green-500'>
                <span className='mr-4 inline-block h-2 w-2 rounded-full bg-green-500' />
                Open to New Opportunities
              </span>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className='fixed inset-0 z-50 flex items-center justify-center'>
              <div className='relative flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-8 md:flex-row dark:bg-gray-800'>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800'
                >
                  &times;
                </button>
                <div className='flex-1'>
                  <h4 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
                    Contact Me
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Email:{' '}
                    <a
                      href='mailto:your.email@example.com'
                      className='underline'
                    >
                      your.email@example.com
                    </a>
                  </p>
                  <p className='mt-2 text-gray-700 dark:text-gray-300'>
                    LinkedIn:{' '}
                    <a
                      href='https://linkedin.com/in/yourprofile'
                      target='_blank'
                      className='underline'
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className='mx-auto w-full max-w-4xl px-4 py-16 text-center'>
            <h3 className='mb-4 text-3xl font-semibold text-white'>
              Want to know more?
            </h3>
            <p className='mx-auto max-w-2xl text-gray-300'>
              Please have a look at the following sections to learn more about
              my skills and experience!
            </p>
          </div>

          {/* Skills and Projects */}
          <div className='flex flex-col items-center gap-8'>
            {/* Skills Card */}
            <div className='w-full max-w-4xl transform rounded-3xl border border-white/20 bg-white/10 p-12 text-left shadow-lg backdrop-blur-[4px] transition-all duration-300 ease-in-out hover:scale-102 hover:border-white/30 dark:border-gray-500/20 dark:bg-gray-800/30 dark:hover:border-gray-300/30'>
              <h3 className='mb-4 text-2xl font-semibold text-white'>Skills</h3>
              <p className='mb-6 text-gray-300'>
                Here are some of the technologies and tools I work with:
              </p>
              <div className='flex flex-wrap justify-evenly gap-3'>
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className='group rainbow-ring relative rounded-full'
                  >
                    <span className='relative z-10 flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-sm text-white transition-all duration-300 group-hover:bg-gray-700'>
                      <img
                        src={skillLogos[skill]}
                        alt={`${skill} logo`}
                        className='h-4 w-4'
                      />
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder Projects */}
            <div className='w-full max-w-4xl transform rounded-3xl border border-white/20 bg-white/10 p-12 text-left shadow-lg backdrop-blur-[4px] transition-all duration-300 ease-in-out hover:scale-102 hover:border-white/30 dark:border-gray-500/20 dark:bg-gray-800/30 dark:hover:border-gray-300/30'>
              <h3 className='mb-2 text-xl font-semibold'>Placeholder 2</h3>
              <p className='text-gray-300'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                condimentum velit, et egestas nulla. Integer porta erat sed
                dolor vestibulum venenatis. Aenean sed pharetra lectus, ut
                accumsan dolor. Aenean sed leo sem.
              </p>
            </div>
            <div className='w-full max-w-4xl transform rounded-3xl border border-white/20 bg-white/10 p-12 text-left shadow-lg backdrop-blur-[4px] transition-all duration-300 ease-in-out hover:scale-102 hover:border-white/30 dark:border-gray-500/20 dark:bg-gray-800/30 dark:hover:border-gray-300/30'>
              <h3 className='mb-2 text-xl font-semibold'>Placeholder 3</h3>
              <p className='text-gray-300'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                condimentum velit, et egestas nulla. Integer porta erat sed
                dolor vestibulum venenatis.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='z-10 bg-gray-950'>
        <div className='mx-auto w-full max-w-[1440px] px-4 py-4 text-center text-sm text-gray-400'>
          © {new Date().getFullYear()} Rasmus Valentin. Powered by Coffee ☕.
        </div>
      </footer>
    </div>
  );
}

export default App;
