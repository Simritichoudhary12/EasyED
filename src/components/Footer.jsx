import React from 'react';
import logo from '../../src/assets/logo-easyed-1.svg';
import socialMedia from '../../src/assets/social-media.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0C0C20] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          
          {/* Footer Logo and Info */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:w-1/3">
            <div className="flex items-center mb-8 lg:mb-0">
              <img className="w-32 h-auto mr-4" alt="Logo EasyED" src={logo} />
              <div className="text-center lg:text-left">
                <div className="text-gray-400 mb-2">© 2023 EasyED</div>
                <p className="text-gray-500">Your Learning Partner</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-12 lg:w-1/3">
            <div className="flex flex-col space-y-2 mb-8 lg:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">More</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Value</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Our Story</a>
            </div>
            <div className="flex flex-col space-y-2 mb-8 lg:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Team</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Reviews</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Blog</a>
            </div>
          </div>

          {/* Footer Contact */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Contact Us</h3>
            <p className="text-gray-300 mb-4">Got questions or feedback? We're here to help!</p>
            <a href="mailto:easyeduverse@gmail.com" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300">Email Us</a>
          </div>

          {/* Footer Social Media */}
          <div className="flex flex-col items-center lg:items-end lg:w-1/3">
            <img className="w-8 h-auto mb-4" alt="Social Media" src={socialMedia} />
            <div className="text-gray-300">All Rights Reserved</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
