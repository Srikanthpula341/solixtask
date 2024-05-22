
import { FC } from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Logoipsum</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-red-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-red-500">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-red-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">About us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Leadership
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  How it works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Success stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Tutorials
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Our products</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Menu 1
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Menu 1
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Menu 1
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Menu 1
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-gray-600">
          &copy; 2013-2024 Copyright. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
