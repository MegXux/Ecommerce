import React from "react";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-blue-100 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={footer_logo} alt="TrencShop Logo" className="w-32 mb-2" />
          <p className="text-xl font-bold text-purple-700">TrencShop</p>
        </div>
        {/* Links */}
        <ul className="flex flex-wrap gap-6 text-gray-700 font-medium text-lg justify-center">
          <li className="hover:text-purple-600 cursor-pointer transition">Company</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Products</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Offices</li>
          <li className="hover:text-purple-600 cursor-pointer transition">About</li>
          <li className="hover:text-purple-600 cursor-pointer transition">Contact</li>
        </ul>
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Instagram">
            <img src={instagram_icon} alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href="#" aria-label="Pinterest">
            <img src={pinterest_icon} alt="Pinterest" className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img src={whatsapp_icon} alt="WhatsApp" className="w-8 h-8 hover:scale-110 transition" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>All Rights Reserved &copy; TrencShop</p>
      </div>
    </footer>
  );
};
export default Footer;
