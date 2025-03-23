import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesSection() {
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

    const section = document.getElementById("services");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      title: "مشاوره تخصصی دارویی",
      description: "راهنمایی تخصصی استفاده از دارو",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-14 md:h-14 mb-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#00bba7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h2M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm8 7h6m-4-5h4"
          />
        </svg>
      ),
    },
    {
      title: "فروش مکمل‌های غذایی",
      description: "انواع مکمل‌های غذایی با کیفیت بالا",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-14 md:h-14 mb-4"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#00bba7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="m7.05 11.293l4.243-4.243a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-4.243 4.243a2 2 0 0 1-2.828 0L7.05 14.12a2 2 0 0 1 0-2.828zm9.193-2.121l3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.667a1.5 1.5 0 0 0-2.44.47L14.122 7.05" />
            <path d="M9.172 16.243L8.4 19.329a1.5 1.5 0 0 1-2.516.697L3.667 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248" />
          </g>
        </svg>
      ),
    },
    {
      title: "فراهم کننده داروهای کمیاب",
      description: "سفارش و موجود کردن داروهای کمیاب",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-14 md:h-14 mb-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#00bba7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 18h15.293c1.02 0 1.972-.503 2.536-1.34L22 13H3.521zM14 8l-1-2m-6.893 6.675L7.491 8h8l2.675 4.598"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="py-16 px-6 md:px-8 bg-primary"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          خدمات ما
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white flex flex-col items-center rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-teal-500 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
