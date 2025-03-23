import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white py-12 px-6 md:px-8">
      <motion.div
        className="w-full flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">تماس با ما</h3>
          <p className="text-gray-500 mt-4 text-base md:text-lg">013-32115618</p>
        </div>

        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">آدرس</h3>
          <p className="text-gray-500 mt-4 text-base md:text-lg">
            رشت پل بوسار نرسیده به پل قلی پور ساختمان آماتیس
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">شبکه‌های اجتماعی</h3>
          <div className="flex mt-4 space-x-reverse space-x-6">
            <a href="instagram.com/drmoayedi_pharmacy" className="text-gray-500 text-base md:text-lg hover:text-gray-700">
              Instagram
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm md:text-lg text-gray-500">
        © 2025 .داروخانه دکتر مویدی. کلیه حقوق محفوظ است
      </div>
    </footer>
  );
}
