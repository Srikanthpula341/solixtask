// components/Header.tsx
import { FC } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <h1 className="text-xl font-bold">Logoipsum</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-500">
            Menu 1
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500">
            Menu 2
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500">
            Menu 3
          </a>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-red-500">
              More <FaChevronDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 3
              </a>
            </div>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-700">
            <FaBars size={24} />
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
            Login/Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
