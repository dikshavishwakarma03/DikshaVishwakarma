import { motion } from "framer-motion";
import React from "react";
import image from "../assets/img/profie.jpg"

const AboutMe = () => {
  const backgroundVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div
      className="bg-[rgb(10,25,47)] min-h-screen pt-24 px-6 lg:px-12 flex flex-col lg:flex-row"
      id="aboutMe"
    >
      {/* Left Side Text Section */}
      <div className="lg:mr-12 lg:w-2/3 lg:ml-28 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(100,255,218)] hover:underline mb-4"
        >
          01. About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[rgb(136,146,176)] text-lg sm:text-xl lg:text-2xl mb-4"
        >
          Hello everyone! My name is Diksha and I enjoy creating things that
          live on the internet. My interest in web development started back in
          2021 when I was doing my bachelor's — then I attended a bootcamp at
          DevTown where they taught so many things about web development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[rgb(136,146,176)] text-lg sm:text-xl lg:text-2xl mb-4"
        >
          Fast forward to today, I started my journey as web developer in 2024,
          and I started learning new technologies like React.js, Next.js, and
          Java, specializing in both front-end and back-end web development. I
          enjoy creating user-friendly web applications using React.js, with a
          recent focus on mastering TailwindCSS for efficient and stylish
          designs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-[rgb(136,146,176)] text-lg sm:text-xl lg:text-2xl mb-4"
        >
          Here are a few technologies I’ve been working with recently:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[rgb(136,146,176)] space-y-2"
        >
          <div className="flex gap-32">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="text-[rgb(100,255,218)]"
            >
              {">"} HTML
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="text-[rgb(100,255,218)]"
            >
            {">"}CSS
            </a>
          </div>

          <div className="flex gap-20">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="text-[rgb(100,255,218)]"
            >
              {">"} JAVASCRIPT
            </a>
            <a
              href="https://legacy.reactjs.org/docs/getting-started.html"
              className="text-[rgb(100,255,218)]"
            >
               {">"} REACTJS
            </a>
          </div>

          <div className="flex gap-32">
            <a
              href="https://docs.oracle.com/en/java/"
              className="text-[rgb(100,255,218)]"
            >
               {">"} JAVA
            </a>
            <a
              href="https://dev.mysql.com/doc/"
              className="text-[rgb(100,255,218)]"
            >
               {">"} SQL
            </a>
          </div>

          <div className="flex gap-28">
            <a
              href="https://nextjs.org/docs"
              className="text-[rgb(100,255,218)]"
            >
               {">"} NEXTJS
            </a>
            <a
              href="https://www.typescriptlang.org/docs/"
              className="text-[rgb(100,255,218)]"
            >
               {">"} TypeScript
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side Image Section */}
      <div className="lg:w-1/3 flex items-center justify-center mt-10 lg:-mt-64">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-64 h-64 sm:w-80 sm:h-80 bg-[rgb(100,255,218)] hover:opacity-20 rounded-lg flex items-center justify-center overflow-hidden"
        >
           <img
            src={image} // Corrected to use the imported image variable
            alt="Profile image"
            className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
