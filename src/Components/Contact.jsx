import { useState } from "react";
import ContactMe from "./ContactMe";
import { motion } from "framer-motion";




const RainAnimation = () => {
  return (
    <div className="rain-container">
      {[...Array(100)].map((_, index) => (
        <motion.div
          key={index}
          className="raindrop"
          initial={{ 
            y: -50, 
            x: Math.random() * window.innerWidth,
            opacity: Math.random()
          }}
          animate={{ 
            y: window.innerHeight + 50,
            x: `calc(${Math.random() * window.innerWidth}px + ${Math.random() * 50 - 25}px)`,
            opacity: [1, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 1 + 1,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};


const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); 



  return (
    <div className="bg-[rgb(10,25,47)] text-gray-300 pb-6  min-h-screen" id="contact">
      <div className="pt-24 text-center">
      <div 
      className="relativemax-w-full text-gray-300 pb-6 pt-3 min-h-screen overflow-hidden" 
      id="contact"
    >
      {/* Rainy Background */}
      <RainAnimation />

      <div className="relative z-10 pt-24 text-center">
      <div className="text-center sm:text-left lg:ml-12 sm:px-8 lg:px-20">
  <motion.p 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="text-teal-300 text-3xl sm:text-4xl lg:text-5xl mt-8 sm:mt-10 lg:mt-12 hover:underline"
  >
    04. Contact Me
  </motion.p>
</div>


        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-gray-200 mb-8 mt-24"
        >
          Get In Touch
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-12 text-2xl"
        >
          Although I'm currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I'll
          try my best to get back to you!
        </motion.p>

        {/* Say Hello Button */}
        <div className="text-center">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsPopupOpen(true);
            }}
            className="inline-block px-8 py-4 border border-teal-300 text-teal-300 blueShadow duration-200 rounded hover:bg-teal-300/10 transition-colors"
          >
            Say Hello
          </motion.a>

          {/* Popup Modal */}
          {isPopupOpen && (
            <ContactMe isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
          )}

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hover:text-teal-300  mt-32"
          >
            Designed & Built by Diksha Vishwakarma
          </motion.p>
        </div>
      </div>

      {/* Global Styles for Raindrop Animation */}
      <style jsx global>{`
        .rain-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .raindrop {
          position: absolute;
          width: 2px;
          height: 20px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
        }
      `}</style>
    </div>

      </div>
    </div>
  );
};

export default Contact;








