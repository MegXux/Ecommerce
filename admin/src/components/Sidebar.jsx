import React from 'react';
import { Link } from 'react-router-dom';
import add_product_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    // Sidebar container
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md p-6 space-y-4 z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
    >
      {/* Close button on mobile */}
      <button
        onClick={onClose}
        className="md:hidden text-gray-600 absolute top-4 right-4"
      >
        ✕
      </button>

      {/* Add Product */}
      <Link to="/addproduct" className="no-underline">
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 transition">
          <img src={add_product_icon} alt="Add Product" className="h-6 w-6" />
          <p className="text-gray-800 font-medium">Add Product</p>
        </div>
      </Link>

      {/* Product List */}
      <Link to="/listproduct" className="no-underline">
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 transition">
          <img src={list_product_icon} alt="Product List" className="h-6 w-6" />
          <p className="text-gray-800 font-medium">Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
