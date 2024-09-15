import React from 'react';
import logo from '../../src/assets/logo-easyed-1.svg';

function Navbar() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img className="h-8 w-auto" alt="Logo easyed" src={logo} />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <div className="text-white font-medium hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out">Home</div>
        <div className="text-white font-medium hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out">About</div>
        <div className="text-white font-medium hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out">Contact</div>
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-purple-700 transition duration-300 ease-in-out">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
