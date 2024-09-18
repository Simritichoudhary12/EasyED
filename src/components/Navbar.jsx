import React, { useState } from 'react';
import logo from '../../src/assets/logo-easyed-1.svg';
import EduPlatforms from './EduPlatforms'; // Import EduPlatforms component

function Navbar() {
  // State to track visibility of the contact section
  const [showContact, setShowContact] = useState(false);
  // State to track visibility of the EduPlatforms section
  const [showEduPlatforms, setShowEduPlatforms] = useState(false);

  // Function to toggle visibility of the contact section
  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  // Function to toggle visibility of the EduPlatforms section
  const handleAboutClick = () => {
    setShowEduPlatforms(!showEduPlatforms);
  };

  // Function to scroll to the top of the page
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-8 py-4 bg-transparent backdrop-blur-lg z-50 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-8 w-auto" alt="Logo easyed" src={logo} />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <div
            className="text-white font-medium hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out"
            onClick={handleHomeClick}
          >
            Home
          </div>
          <div
            className="text-white font-medium hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out"
            onClick={handleAboutClick}
          >
            About
          </div>
          <div
            className="text-white font-medium hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out"
            onClick={handleContactClick}
          >
            Contact
          </div>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-purple-700 transition duration-300 ease-in-out">
            Login
          </button>
        </div>
      </nav>

      {/* Conditionally render the EduPlatforms section with sliding effect */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex justify-center items-center transform transition-transform duration-500 ease-in-out ${
          showEduPlatforms ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="relative bg-[#0C0C20] text-white p-12 rounded-lg shadow-lg max-w-4xl w-full">
          <EduPlatforms />
          <button
            className="absolute top-4 right-4 bg-transparent text-white text-2xl font-bold focus:outline-none"
            onClick={handleAboutClick}
          >
            &times; {/* This is the 'X' button */}
          </button>
        </div>
      </div>

      {/* Conditionally render the contact section with smooth transitions */}
      {showContact && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex justify-center items-center transform transition-transform duration-500 ease-in-out ${
            showContact ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl max-w-md w-full text-center space-y-6">
            <h2 className="text-3xl font-extrabold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-1 text-blue-300">Email</h3>
                <p className="text-lg text-gray-300">easyeduverse@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-1 text-blue-300">Phone</h3>
                <p className="text-lg text-gray-300">123-456-7890</p>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
              onClick={handleContactClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
