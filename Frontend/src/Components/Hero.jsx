import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-purple-100 px-6 md:px-16 py-12 rounded-lg shadow-lg ">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          NEW ARRIVALS ONLY
        </h1>
        <div className="flex items-center mb-4">
          <p className="text-lg font-semibold text-purple-600 mr-2 uppercase tracking-wider">new</p>
          <img src={hand_icon} alt="Hand Icon" className="w-8 h-8" />
        </div>
        <p className="text-2xl font-semibold text-gray-800 mb-1">Collections</p>
        <p className="text-xl text-gray-600">for everyone</p>
        <button className="flex items-center mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow transition duration-200">
          <span className="mr-3">Latest Collections</span>
          <img src={arrow_icon} alt="Arrow Icon" className="w-6 h-6" />
        </button>
      </div>
      {/* Right Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={hero_image}
          alt="Hero"
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;