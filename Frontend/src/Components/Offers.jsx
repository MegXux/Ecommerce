import React from "react";
import exclusive_image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg shadow-lg my-12">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Exclusive Offers
        </h1>
        <p className="text-lg font-semibold text-purple-600 mb-6 uppercase tracking-wider">
          ONLY ON BEST SELLER PRODUCTS
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow transition duration-200">
          Check Now
        </button>
      </div>
      {/* Right Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={exclusive_image}
          alt="Exclusive Offer"
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Offers;