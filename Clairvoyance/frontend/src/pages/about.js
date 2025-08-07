const developers = [
  {
    name: "Anoushka Chaudhuri",
    github: "awkwardish",
    linkedin: "https://www.linkedin.com/in/anoushkachaudhuri/",
    email: "jaimahadevshambhu@gmail.com",
    role: "Project Lead, UI design, Text-to-speech integration, Research.",
  },
  {
    name: "Soumyajit Das",
    github: "soumyajiitdas",
    linkedin: "https://linkedin.com/in/soumyajit4119",
    email: "soumyajit302@gmail.com",
    role: "Frontend dev, UI design, Backend integration, Multilingual support.",
  },
  {
    name: "Srija Sarkar",
    github: "srijasarkar133",
    linkedin: "https://www.linkedin.com/in/srija-sarkar-210383350/",
    email: "srijasarkar133@gmail.com",
    role: "Text-to-speech and translation integration, Testing.",
  },
  {
    name: "Animesh Nandy",
    github: "ani-11-pro",
    linkedin: "https://www.linkedin.com/in/animesh-nandy-34b0a1373/",
    email: "animesh.nandy.04@gmail.com",
    role: "Research and testing compatibility of components.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-blue-500">
          About Clairvoyance 📢
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 font-style: italic dark:text-gray-300">
          "📑 The team and vision behind your AI companion..."
        </p>

        <div className="space-y-12">
          <section className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-slideIn">
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">🎯 Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Clairvoyance empowers visually impaired users by transforming images into natural,
              spoken descriptions. With AI, accessibility, and empathy at its core, the project
              brings vision to those who navigate the world by sound.
            </p>
          </section>

          <section className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-slideIn" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">🔮 Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We believe accessibility should be intelligent, beautiful, and human-first. Clairvoyance
              is the start of a world where assistive tech understands, speaks, and serves everyone.
            </p>
          </section>

          <section className="animate-slideIn" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">👩🏻‍💻 Meet the Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developers.map((dev, index) => (
                <div
                  key={dev.github}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300"
                  style={{ animation: `slideIn 0.5s ease-out forwards`, animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <img
                    src={`https://github.com/${dev.github}.png`}
                    alt={dev.name}
                    title={`GitHub: ${dev.github}`}
                    className="w-20 h-20 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-md"
                  />
                  <div>
                    <a href={`https://github.com/${dev.github}`} target="_blank" rel="noopener noreferrer">
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline">{dev.name}</p>
                    </a>
                    <p className="text-md text-gray-600 dark:text-gray-300 mb-3">{dev.role}</p>
                    <div className="flex gap-4 text-blue-500 dark:text-blue-300">
                      {dev.linkedin && dev.linkedin !== "#" && (
                        <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                      )}
                      {dev.email && (
                        <a href={`mailto:${dev.email}`} className="hover:underline">Email</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 text-center text-lg italic text-gray-600 dark:text-gray-400 animate-fadeIn" style={{ animationDelay: '1s' }}>
          Built with love, code, and a mission to make vision audible ❤️
        </div>
      </div>
    </div>
  );
}

