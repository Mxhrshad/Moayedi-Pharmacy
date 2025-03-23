import { motion } from "framer-motion";
import logo from "../../assets/pictures/logo.png";
import { useEffect, useState } from "react";

export default function Description() {
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

    const section = document.getElementById("description");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="description"
      className="relative w-full h-screen flex justify-center items-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row items-center justify-center w-full h-full"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-1/2 h-auto flex justify-center items-center mb-6 lg:mb-0"
        >
          <motion.img
            src={logo}
            alt="Pharmacy Logo"
            className="w-4/5 lg:w-3/5 object-contain"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="sm:4/5 w-4/5 lg:w-1/2 max-w-screen-sm bg-opacity-50 backdrop-blur-lg shadow-xl rounded-lg p-6 sm:p-10 flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-lg sm:text-base md:text-xl leading-relaxed text-white">
              داروخانه دکتر مویدی با سال‌ها تجربه و تخصص، یکی از بهترین ارائه‌دهندگان خدمات دارویی و بهداشتی
              در سطح منطقه می‌باشد. ما مفتخریم که در کنار تیمی از داروسازان و کارشناسان مجرب، به شما عزیزان خدمات
              متنوعی همچون مشاوره دارویی، تهیه و تأمین داروهای کمیاب و محصولات بهداشتی و درمانی با کیفیت را ارائه
              می‌دهیم. هدف ما فراهم کردن تجربه‌ای ساده و مطمئن از خرید و استفاده از داروها و محصولات مرتبط می‌باشد
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
