import React from 'react';
import navlogo from '../assets/nav-logo.svg';
import navProfile from '../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <img src={navlogo} alt="Logo" className="h-10 w-auto" />

      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={navProfile}
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
