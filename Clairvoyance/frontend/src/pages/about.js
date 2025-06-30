const developers = [
  {
    name: "Anoushka Chaudhuri",
    github: "awkwardish",
    linkedin: "https://www.linkedin.com/in/anoushkachaudhuri/",
    email: "jaimahadevshambhu@gmail.com",
    role: "Project Lead, Frontend Developer, UI Designer",
  },
  {
    name: "Soumyajit Das",
    github: "soumyajiitdas",
    linkedin: "https://linkedin.com/in/soumyajit4119",
    email: "soumyajit302@gmail.com",
    role: "gTTS Integration, Multilingual Support",
  },
  {
    name: "Animesh Nandy",
    github: "ani-11-pro",
    linkedin: "https://linkedin.com/in/animeshnandy",    // could't find his linkedin profile !!
    email: "animesh.nandy.04@gmail.com",
    role: "AI Captioning + FastAPI Integration",
  },
  {
    name: "Srija Sarkar",
    github: "srijasarkar133",
    linkedin: "https://www.linkedin.com/in/srija-sarkar-210383350/",
    email: "srijasarkar133@gmail.com",
    role: "Research & Component Testing, Debugging",
  },
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        📢 About Clairvoyance
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Clairvoyance empowers visually impaired users by transforming images into natural,
          spoken descriptions. With AI, accessibility, and empathy at its core, the project
          brings vision to those who navigate the world by sound.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔮 Our Vision</h2>
        <p className="text-lg leading-relaxed">
          We believe accessibility should be intelligent, beautiful, and human-first. Clairvoyance
          is the start of a world where assistive tech understands, speaks, and serves everyone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧑🏻‍💻 Meet the Developers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {developers.map((dev) => (
            <div
              key={dev.github}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition group"
            >
              <img
                src={`https://github.com/${dev.github}.png`}
                alt={dev.name}
                title={`GitHub: ${dev.github}`}
                className="w-16 h-16 rounded-full border border-gray-400 dark:border-gray-600"
              />
              <div>
                <p
                  className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  title="View GitHub Profile"
                >
                  <a href={`https://github.com/${dev.github}`} target="_blank" rel="noopener noreferrer">
                    {dev.name}
                  </a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{dev.role}</p>
                <div className="flex gap-3 text-sm text-blue-500 dark:text-blue-300">
                  {dev.linkedin && (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      title="LinkedIn Profile"
                    >
                      LinkedIn
                    </a>
                  )}
                  {dev.email && (
                    <a
                      href={`mailto:${dev.email}`}
                      className="hover:underline"
                      title="Send Email"
                    >
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 text-center text-lg italic text-gray-600 dark:text-gray-400">
        Built with love, code, and a mission to make vision audible 💙
      </div>
    </div>
  );
}

