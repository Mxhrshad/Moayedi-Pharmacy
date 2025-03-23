import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Description from "../Description/Description";

export default function Header() {
  return (
    <>
    <motion.section
      id="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col justify-center items-center text-center"
    >

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-6 bg-opacity-50 rounded-lg max-w-[90%] lg:max-w-[60%]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          به داروخانه دکتر مویدی خوش آمدید
        </h1>
        <p className="text-sm sm:text-base md:text-lg  mb-6 leading-relaxed">
          فراهم کننده بهترین خدمات دارویی
        </p>

        <div className="flex flex-wrap justify-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="services"
            smooth={true}
            duration={800}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer w-full sm:w-auto"
          >
            خدمات ما
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer w-full sm:w-auto"
          >
            ارتباط با ما
          </Link>
        </div>
      </motion.div>
    </motion.section>
    <Description />
    </>
  );
}
