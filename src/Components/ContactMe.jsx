import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Check } from "lucide-react";

const ContactMe = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, message });
    setSubmitted(true); 
    setTimeout(() => {
      setIsOpen(false); 
    }, 2000); 
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 px-8 rounded-2xl max-w-md relative mx-4 py-12 shadow-2xl border border-gray-700"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </motion.button>

            {/* Modal Content */}
            <div className="text-center">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center space-y-4 text-white"
                  >
                    <Check size={64} className="text-green-500" />
                    <h2 className="text-2xl font-bold">
                      Thank you for reaching out!
                    </h2>
                    <p className="text-gray-400">
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h1 className="text-3xl font-bold mb-4 text-white">
                      Contact Me
                    </h1>
                    <p className="text-gray-400 text-sm mb-6">
                      I am here to help with any questions regarding my services,
                      programs, or events.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="rounded-lg border-2 border-gray-700 focus:border-teal-500 w-full p-3 bg-gray-800 placeholder:text-gray-500 text-white transition-all"
                        required
                      />

                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="rounded-lg border-2 border-gray-700 focus:border-teal-500 w-full p-3 bg-gray-800 placeholder:text-gray-500 text-white transition-all"
                        rows={5}
                        required
                      />

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-all"
                      >
                        <Send size={20} className="mr-2" /> Send Message
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactMe;