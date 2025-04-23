import { BackgroundBeams } from "./components/ui/background-beams";
import profilePic from "./assets/valle.png";
import arrowIcon from "./assets/arrow.png";

// Technology logos (place these files in src/assets/logos/)
import reactLogo from "./assets/logos/React.png";
import tsLogo from "./assets/logos/TypeScript.png";
import jsLogo from "./assets/logos/JavaScript.png";
import tailwindLogo from "./assets/logos/Tailwind CSS.png";
import htmlLogo from "./assets/logos/HTML5.png";
import cssLogo from "./assets/logos/CSS3.png";
import gitLogo from "./assets/logos/Git.png";
import viteLogo from "./assets/logos/Vite.js.png";
import nodeLogo from "./assets/logos/Node.js.png";
import figmaLogo from "./assets/logos/Figma.png";
import bitbucketLogo from "./assets/logos/bitBucket.png";
import jiraLogo from "./assets/logos/Jira.png";
import muiLogo from "./assets/logos/Material UI.png";
import storybookLogo from "./assets/logos/Storybook.png";

function App() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Git",
    "Vite",
    "Node.js",
    "Figma",
    "Bitbucket",
    "Jira",
    "Material UI",
    "Storybook",
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
    "Node.js": nodeLogo,
    Figma: figmaLogo,
    Bitbucket: bitbucketLogo,
    Jira: jiraLogo,
    "Material UI": muiLogo,
    Storybook: storybookLogo,
  };

  return (
    <div className="relative flex flex-col min-h-screen text-white">
      <BackgroundBeams className="fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 bg-fixed" />

      {/* Navbar */}
      <header className="z-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-20 flex justify-between items-center">
          <h1 className="text-xl font-bold">Rasmus Valentin</h1>
        </div>
      </header>

      {/* Hero Section & Content */}
      <main className="z-10 flex-grow w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-12">
          {/* Hero Card */}
          <div
            className="
            w-full max-w-4xl mx-auto p-16 rounded-3xl
            bg-white/10 dark:bg-gray-800/30 backdrop-blur-[4px]
            border border-white/20 dark:border-gray-500/20
            shadow-lg
            transform transition-all ease-in-out duration-300
            hover:scale-102 hover:border-white/30 dark:hover:border-gray-300/30
          "
          >
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-7xl font-bold mb-6">
                  Hello! I’m Rasmus :)
                </h2>
                <p className="text-lg mb-10 max-w-xl mx-auto md:mx-0 text-gray-300">
                  I’m a Medialogy Master’s student graduating in summer 2025,
                  with a passion for front-end development and design. I
                  specialize in creating clean, responsive and user-friendly
                  interfaces. With a strong foundation in both technical
                  implementation and creative design, I strive to bridge gaps
                  between aesthetics and functionality.
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                {/* Image side */}
                <div className="flex-1 flex justify-center md:justify-end">
                  <div
                    className="
                    group relative w-72 h-100 rounded-3xl
                    bg-white/3 border border-white/20 dark:border-gray-500/20
                    backdrop-blur-[4px] shadow-lg overflow-hidden
                    transform transition-all ease-in-out duration-300
                   hover:border-white/30 dark:hover:border-gray-300/30
                  "
                  >
                    <img
                      src={profilePic}
                      alt="Rasmus Valentin"
                      className="
                        w-full h-full object-cover
                        filter grayscale brightness-125 contrast-110
                        group-hover:filter-none
                        transition ease-in-out duration-300
                      "
                    />
                    <span
                      className="
                      absolute inset-x-0 top-1 flex items-center justify-center
                      text-white text-xl font-bold select-none
                      transform -rotate-[5deg]
                      opacity-0 group-hover:opacity-100
                      transition-opacity ease-in-out duration-300
                    "
                    >
                      That’s me!
                      <img
                        src={arrowIcon}
                        alt="→"
                        className="
                          w-15 h-15
                          transform -rotate-[20deg]
                          filter invert translate-y-6 contrast-125
                          transition ease-in-out duration-300
                        "
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Want to know more?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Please have a look at the following sections to learn more about
              my skills and experience!
            </p>
          </div>

          {/* Skills and Projects */}
          <div className="flex flex-col items-center gap-8">
            {/* Skills Card */}
            <div
              className="
              w-full max-w-4xl p-12 rounded-3xl
              bg-white/10 dark:bg-gray-800/30 backdrop-blur-[4px]
              border border-white/20 dark:border-gray-500/20
              shadow-lg text-left
              transform transition-all ease-in-out duration-300
              hover:scale-102 hover:border-white/30 dark:hover:border-gray-300/30
            "
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
              <p className="text-gray-300 mb-6">
                Here are some of the technologies and tools I work with:
              </p>
              <div className="flex flex-wrap justify-evenly gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="relative group rainbow-ring rounded-full"
                  >
                    <span className="relative z-10 flex items-center bg-gray-800 text-sm text-white px-4 py-2 rounded-full gap-2 transition-all duration-300 group-hover:bg-gray-700">
                      <img
                        src={skillLogos[skill]}
                        alt={`${skill} logo`}
                        className="w-4 h-4"
                      />
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder Projects */}
            <div
              className="
              w-full max-w-4xl p-12 rounded-3xl
              bg-white/10 dark:bg-gray-800/30 backdrop-blur-[4px]
              border border-white/20 dark:border-gray-500/20
              shadow-lg text-left
              transform transition-all ease-in-out duration-300
              hover:scale-102 hover:border-white/30 dark:hover:border-gray-300/30
            "
            >
              <h3 className="text-xl font-semibold mb-2">Placeholder 2</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                condimentum velit, et egestas nulla. Integer porta erat sed
                dolor vestibulum venenatis. Aenean sed pharetra lectus, ut
                accumsan dolor. Aenean sed leo sem.
              </p>
            </div>
            <div
              className="
              w-full max-w-4xl p-12 rounded-3xl
              bg-white/10 dark:bg-gray-800/30 backdrop-blur-[4px]
              border border-white/20 dark:border-gray-500/20
              shadow-lg text-left
              transform transition-all ease-in-out duration-300
              hover:scale-102 hover:border-white/30 dark:hover:border-gray-300/30
            "
            >
              <h3 className="text-xl font-semibold mb-2">Placeholder 3</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                condimentum velit, et egestas nulla. Integer porta erat sed
                dolor vestibulum venenatis.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 bg-gray-950">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Rasmus Valentin. Powered by Coffee ☕.
        </div>
      </footer>
    </div>
  );
}

export default App;
