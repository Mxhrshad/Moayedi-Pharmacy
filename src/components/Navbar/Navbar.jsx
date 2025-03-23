import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/pictures/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary w-full fixed z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-white text-lg font-bold flex items-center">
            داروخانه دکتر مویدی
            <img className="w-20 h-20" src={Logo} alt="" />    
        </div>


        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`absolute top-16 left-0 w-full bg-primary md:static md:bg-transparent md:flex md:items-center md:justify-end md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:max-h-full md:opacity-100 overflow-hidden`}
        >
          <ul className="flex flex-col md:flex-row-reverse md:items-center md:space-x-8">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="block py-2 px-4 text-white hover:text-teal-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                offset={-70}
                className="block py-2 px-4 text-white hover:text-teal-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className="block py-2 px-4 text-white hover:text-teal-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                خدمات ما
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="block py-2 px-4 text-white hover:text-teal-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
