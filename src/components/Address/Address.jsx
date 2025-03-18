export default function Address({ children }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-between items-center py-16 px-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2531935893709!2d49.5851192232249!3d37.294920966376054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd90015345e33%3A0x664a977ac3bf8421!2z2K_Yp9ix2YjYrtin2YbZhyDYr9qp2KrYsSDZhdmI24zYr9uM!5e0!3m2!1sen!2sfi!4v1739534535225!5m2!1sen!2sfi"
        className="w-full md:w-1/2 h-96 border-black border-2 rounded-lg shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center mt-6 md:mt-0 md:pl-6">
        <h2 className="text-5xl font-black">آدرس ما</h2>
        <p className="text-gray-700 mt-4">رشت پل بوسار نرسیده به پل قلی پور ساختمان آماتیس</p>
      </div>
    </div>
  );
}
