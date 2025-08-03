import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8 max-w-7xl mx-auto">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-6 py-2 text-base font-semibold focus:outline-none transition ${
            activeTab === "description"
              ? "border-b-2 border-purple-600 text-purple-700"
              : "text-gray-500 hover:text-purple-600"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-6 py-2 text-base font-semibold focus:outline-none transition ${
            activeTab === "reviews"
              ? "border-b-2 border-purple-600 text-purple-700"
              : "text-gray-500 hover:text-purple-600"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "description" && (
          <div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Product Details</h2>
            <p className="text-gray-700 leading-relaxed">
              Discover the perfect blend of style and comfort with our latest collection. Crafted from premium materials, this product is designed to offer a flattering fit and lasting durability. Whether you're dressing up for a special occasion or keeping it casual, you'll love the attention to detail and versatile design. Enjoy all-day comfort and timeless elegance with this must-have addition to your wardrobe.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Customer Reviews</h2>
            <p className="text-gray-500 italic">No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;