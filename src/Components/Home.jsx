import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Front End Developer", "ReactJs Developer", "Java Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <main className="relative pt-12 ">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br 
        from-[rgb(10,25,47)] 
        via-[rgb(20,40,70)] 
        to-[rgb(15,35,60)] 
        bg-size-400 
        animate-gradient-move"
      />
      {/* Overlay with subtle particles/grid effect */}
      <div
        className="absolute inset-0 z-10 opacity-20 bg-grid-pattern"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,255,218,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,255,218,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
      <section className="relative z-20 pt-32 pb-4 min-h-screen" id="home">
        <div className="text-3xl pt-7 text-start px-6  lg:ml-64 lg:mb-52 lg:mt-10 lg:pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgb(100,255,218)] text-xl lg:mr-14 pb-2"
          >
            Hii, My Name Is
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[rgb(204,214,246)] text-5xl sm:text-6xl lg:text-7xl lg:mr-14 pt-3 pb-4"
          >
            Diksha Vishwakarma.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[rgb(136,146,176)] text-4xl sm:text-5xl lg:text-7xl"
          >
            I Build Things For The Web.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-[rgb(136,146,176)] text-lg sm:text-xl lg:mt-6 lg:mb-8"
          >
            I&apos;m a software Engineer Specializing in developing websites.<br />
            I&apos;m a
            <span className="text-teal-300 ml-2">{text}</span>
            <Cursor cursorStyle="|" cursorColor="rgb(100,255,218)" />
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-md text-teal-300 border border-solid border-teal-300 hover:bg-teal-300/10 blueShadow duration-200 mt-5 mb-5"
          >
            <a
              href="https://drive.google.com/file/d/1s_IwY51x3usGdTP8oVSRMvtK4bF70v69/view?usp=drive_link"
              target="blank"
            >
              Resume
            </a>
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Home;
