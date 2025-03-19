import { motion } from "framer-motion";

export default function Header() {
  return (
      <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center px-4 md:px-8"
      >
          <div className="text-center max-w-2xl mx-auto">
              <motion.h1 
                  initial={{ scale: 0.9 }} 
                  animate={{ scale: 1 }} 
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug md:leading-normal"
              >
                  Welcome to Moayedi Pharmacy
              </motion.h1>
              <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-sm sm:text-base md:text-lg mb-4 md:mb-6"
              >
                  Providing the best pharmaceutical services
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.a 
                      href="#services" 
                      whileHover={{ scale: 1.1 }} 
                      className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg text-white shadow-lg text-sm sm:text-base"
                  >
                      Our Services
                  </motion.a>
                  <motion.a 
                      href="#contact" 
                      whileHover={{ scale: 1.1 }} 
                      className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-lg text-white shadow-lg text-sm sm:text-base"
                  >
                      Contact Us
                  </motion.a>
              </div>
          </div>
      </motion.section>
  );
}
