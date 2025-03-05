import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-green-600">
          <Link to="/">Foodie</Link>
        </div>
        <div className="hidden md:flex space-x-6 text-lg text-gray-800">
          <Link to="#home" className="hover:text-green-600 transition">Home</Link>
          <Link to="#menu" className="hover:text-green-600 transition">Menu</Link>
          <Link to="#about" className="hover:text-green-600 transition">About</Link>
          <Link to="#contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* Additional buttons for Login, Signup, Cart */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/login" className="text-green-600 hover:text-green-700 transition">Login</Link>
          <Link to="/signup" className="text-green-600 hover:text-green-700 transition">Sign Up</Link>
          <Link to="/cart" className="text-green-600 hover:text-green-700 transition">
            <FaShoppingCart size={20} />
          </Link>
        </div>

        <div className="md:hidden flex items-center" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={28} className="text-green-600" /> : <FaBars size={28} className="text-green-600" />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white border-t-2 border-green-600 py-4">
          <Link to="#home" className="text-lg text-green-600">Home</Link>
          <Link to="#menu" className="text-lg text-green-600">Menu</Link>
          <Link to="#about" className="text-lg text-green-600">About</Link>
          <Link to="#contact" className="text-lg text-green-600">Contact</Link>
          <Link to="/login" className="text-lg text-green-600">Login</Link>
          <Link to="/signup" className="text-lg text-green-600">Sign Up</Link>
          <Link to="/cart" className="text-lg text-green-600">
            <FaShoppingCart size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
