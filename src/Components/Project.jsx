import { ExternalLink, Github } from "lucide-react";
import React from "react";
import projImg1 from "../assets/img/netflix-clone.png";
import projImg2 from "../assets/img/music-academy.jpg";
import projImg3 from "../assets/img/Weather.png";

const Project = () => {
  const projects = [
    {
      title: "Netflix-web",
      description:
        "This project, titled Netflix-Web, is a web application built on React and utilizes Vite to facilitate rapid development, alongside ESLint to ensure high code quality. It acts as a foundational framework for constructing an interface reminiscent of Netflix, although the repository mainly comprises the structural and configuration files necessary for establishing a contemporary front-end environment.",
      image: projImg1, // Store the image path
      featured: true,
      links: {
        github: "https://github.com/dikshavishwakarma03/Netflix-Web",
      },
    },
    {
      title: "Music-Academy",
      description:
        "The Music Academy project is a web application designed to provide a platform for music learning and teaching. The application likely incorporates features that allow users to explore various music courses and educational content. It's built with web technologies that might include JavaScript frameworks like React or Next.js, focusing on delivering a seamless and engaging user experience.",
      image: projImg2,
      links: {
        github: "https://github.com/dikshavishwakarma03/Music-Academy",
      },
    },
    {
      title: "Weather App",
      description:
        "The Weather App is a simple React-based application designed to display current weather conditions. Users can search for weather information in different cities and view data like temperature, humidity, and wind speed. It uses the OpenWeatherMap API to fetch real-time data. The project is a great example of using external APIs to build interactive web apps.",
      image: projImg3,
      links: {
        github: "https://github.com/dikshavishwakarma03/weather-app",
      },
    },
  ];


  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-12 bg-[rgb(10,25,47)]  min-h-screen"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl lg:text-4xl lg:ml-12 font-semibold text-teal-400 mb-16 text-center md:text-left hover:underline">
        03. Some Things I've Built
      </h2>

      <div className="space-y-16 md:space-y-24 lg:px-16">
        {projects.map((project, index) => (
          <div key={project.title} className="relative text-md">
            {/* Project Card */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative group">
                <div className="absolute inset-0 bg-teal-400/10 group-hover:bg-transparent transition-all duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:opacity-80"
                />
              </div>

              {/* Content Section */}
              <div
                className={`w-full md:w-2/5 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {project.featured && (
                  <p className="text-teal-400 text-sm mb-2">Featured Project</p>
                )}
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  {project.title}
                </h3>
                <div className="bg-[rgb(17,34,64)] p-6 rounded-lg shadow-lg mb-6">
                  <p className="text-slate-400">{project.description}</p>
                </div>

                {/* Links */}
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  {Object.keys(project.links).map((link) => (
                    <a
                      key={link}
                      href={project.links[link]}
                      className="text-slate-400 hover:text-teal-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link === "github" ? (
                        <Github size={20} />
                      ) : (
                        <ExternalLink size={20} />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/dikshavishwakarma03?tab=repositories"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-teal-300 text-teal-300 blueShadow duration-200 rounded hover:bg-teal-300/10 transition-colors"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Project;
