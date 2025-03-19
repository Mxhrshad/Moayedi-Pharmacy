import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="w-full h-full flex justify-center items-center flex-col py-20 px-4 md:px-8"
    >
      <div className="pb-16 text-center">
        <h2 className="font-bold text-4xl md:text-5xl">About Us</h2>
        <p className="mt-6 text-base md:text-lg">Discover who we are and what we offer.</p>
      </div>

      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Affordable Pricing", "Convenience", "Quality Products", "Expert Support"].map((title, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 md:p-8 bg-teal-100 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 md:w-14 md:h-14 text-teal-500 mb-4 md:mb-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 mb-2 md:mb-4">{title}</h3>
            <p className="text-teal-800 text-base md:text-lg">{`Description for ${title}`}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
