import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutUs() {
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

    const section = document.getElementById("aboutus-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const aboutus = [  
    {title: "قیمت به صرفه", description: "ما داروها و محصولات بهداشتی را با قیمت‌های مناسب عرضه می‌کنیم",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-14 md:h-14 mb-4" viewBox="0 0 24 24"><g fill="none" stroke="#00bba7" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"/></g></svg>)},  
    {title: "راحتی", description: "با دسترسی آسان به خدمات و ما، تجربه خرید راحتی داشته باشید",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-14 md:h-14 mb-4" viewBox="0 0 24 24"><g fill="none" stroke="#00bba7" stroke-width="1.5"><path d="M6.886 18h9.647c.617 0 .926 0 1.202-.039c1.126-.158 2.1-.785 2.624-1.69c.129-.222.226-.483.421-1.006l1.12-3C22.315 11.15 21.387 10 20.073 10c-.81 0-1.534.453-1.81 1.134l-1 2.466c-.195.478-.292.717-.476.883q-.152.137-.349.219c-.238.098-.522.098-1.091.098h-6.98c-.293 0-.44 0-.57-.027a1.2 1.2 0 0 1-.74-.463c-.072-.1-.122-.224-.222-.47l-1.098-2.706c-.276-.68-1-1.134-1.81-1.134c-1.314 0-2.242 1.15-1.827 2.264l1.303 3.493l.039.102c.497 1.265 1.823 2.12 3.323 2.14z"/><path d="M6 12V8.571c0-2.155 0-3.232.703-3.902S8.537 4 10.8 4h2.4c2.263 0 3.394 0 4.097.67c.703.668.703 1.745.703 3.9V12"/><path stroke-linecap="round" d="M18 20v-2M6 20v-1.333"/></g></svg>)},  
    {title: "محصولات با کیفیت", description: "ما محصولات با بالاترین کیفیت را برای سلامت شما انتخاب کرده‌ایم",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-14 md:h-14 mb-4" viewBox="0 0 24 24"><g fill="none" stroke="#00bba7" stroke-linecap="round" stroke-width="1.5"><path d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"/><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/></g></svg>)},  
    {title: "پشتیبانی تخصصی", description: "تیم ما آماده است تا شما را در انتخاب صحیح کمک کند",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-14 md:h-14 mb-4" viewBox="0 0 24 24"><g fill="none" stroke="#00bba7" stroke-width="1.5"><path d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845z"/><path d="M14 4s-.225 1.168-1.529 2.471S10 8 10 8"/><path stroke-linecap="round" d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"/><rect width="3" height="8" x="2" y="14" rx="1.5"/></g></svg>)},  
];

return (
  <motion.div
    id="aboutus-section"
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="w-full h-full flex justify-center items-center flex-col py-20 px-4 md:px-8"
  >
    <div className="pb-16 text-center">
      <h2 className="font-bold text-4xl md:text-5xl">درباره ما</h2>
      <p className="mt-6 text-base md:text-lg">
        درباره‌ی ما و خدماتی که ارائه می‌دهیم، بیشتر بدانید
      </p>
    </div>

    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {aboutus.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center p-6 md:p-8 bg-teal-100 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {item.icon}
          <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 mb-2 md:mb-4">
            {item.title}
          </h3>
          <p className="text-teal-800 text-base md:text-lg text-center">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
}