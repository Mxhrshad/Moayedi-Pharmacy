import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Address({ children }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("address-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <motion.div
      id="address-section"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col md:flex-row justify-between items-center bg-[#7f9169] py-16 px-4 md:px-8"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2531935893709!2d49.5851192232249!3d37.294920966376054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd90015345e33%3A0x664a977ac3bf8421!2z2K_Yp9ix2YjYrtin2YbZhyDYr9qp2KrYsSDZhdmI24zYr9uM!5e0!3m2!1sen!2sfi!4v1739534535225!5m2!1sen!2sfi"
        className="w-full md:w-1/2 h-70 md:h-96 border-teal-700 border-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center mt-8 md:mt-0 md:pl-8">
        <h2 className="text-4xl md:text-5xl font-black text-white">آدرس ما</h2>
        <p className="text-teal-200 mt-4 md:mt-6 text-base md:text-lg">
          رشت پل بوسار نرسیده به پل قلی پور ساختمان آماتیس
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-teal-500 text-white font-semibold text-base md:text-lg rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
        >
          <a href="https://maps.app.goo.gl/iDS5TtKZytHZkqx78">مشاهده در گوگل مپ</a>
        </motion.button>
      </div>
    </motion.div>
  );
}
