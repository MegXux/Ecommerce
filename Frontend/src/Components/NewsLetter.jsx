import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg shadow-lg my-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Subscribe to get special offers, discounts and more!
      </p>
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
        />
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-r-full shadow transition duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;