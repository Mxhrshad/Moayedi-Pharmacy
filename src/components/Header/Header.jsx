export default function Header(){
    return(
        <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
        <div className="text-center text-ذمشزن">
          <h1 className="text-5xl font-bold mb-4">Welcome to Moayedi Pharmacy</h1>
          <p className="text-lg mb-6">Providing the best pharmaceutical services</p>
          <div className="space-x-4">
            <a href="#services" className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg text-white shadow-lg">Our Services</a>
            <a href="#contact" className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-lg text-white shadow-lg">Contact Us</a>
          </div>
        </div>
      </section>
    )
}