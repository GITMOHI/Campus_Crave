import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t-2 border-green-600">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-600">About Us</h3>
            <p className="text-gray-600 text-sm">
              We are committed to delivering the best food from top local restaurants straight to your door.
              Enjoy the best meals at your convenience with just a click.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-600">Quick Links</h3>
            <ul>
              <li><a href="#home" className="text-gray-600 hover:text-green-600 transition">Home</a></li>
              <li><a href="#menu" className="text-gray-600 hover:text-green-600 transition">Menu</a></li>
              <li><a href="#restaurants" className="text-gray-600 hover:text-green-600 transition">Restaurants</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-green-600 transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-green-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-600">Contact</h3>
            <ul>
              <li className="text-gray-600 text-sm">Phone: (123) 456-7890</li>
              <li className="text-gray-600 text-sm">Email: contact@foodie.com</li>
              <li className="text-gray-600 text-sm">Address: 123 Foodie St, City, Country</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-600">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-green-600 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-green-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-green-600 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-green-600 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center border-t border-gray-300 pt-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Foodie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
