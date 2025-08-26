import React, { useEffect, useState } from "react";
import cross_icon from "../assets/cross_icon.png";

const ProductList = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const resp = await fetch("http://localhost:3000/allproducts");
      const data = await resp.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch('http://localhost:3000/remove-product',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id:id})
    });
    await fetchInfo();
  }

  return (
    <>
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto sm:ml-0 lg:ml-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          All Products List
        </h1>

        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-2 bg-blue-100 font-semibold text-blue-900 p-4 rounded-t-md shadow-sm text-sm">
          <p className="col-span-2 text-center">Product</p>
          <p className="col-span-2 text-center">Title</p>
          <p className="col-span-2 text-center">Old Price</p>
          <p className="col-span-2 text-center">New Price</p>
          <p className="col-span-3 text-center">Category</p>
          <p className="col-span-1 text-center">Remove</p>
        </div>

        {/* Product Rows */}
        <div className="bg-white shadow-md rounded-b-md divide-y divide-gray-200">
          {allproducts.map((product, index) => (
            <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 p-4 items-center text-sm sm:text-base hover:bg-gray-50 transition"
            >
              {/* Image */}
              <div className="col-span-2 flex justify-center md:justify-center">
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                  
                  />
              </div>

              {/* Name */}
              <div className="col-span-2 text-center md:text-left">
                {product.name}
              </div>

              {/* Old Price */}
              <div className="col-span-2 text-center text-red-500 line-through">
                ₹{product.old_price}
              </div>

              {/* New Price */}
              <div className="col-span-2 text-center text-green-600 font-bold">
                ₹{product.new_price}
              </div>

              {/* Category */}
              <div className="col-span-3 text-center text-gray-600">
                {product.category}
              </div>

              {/* Remove Button */}
              <div className="col-span-1 flex justify-center">
                <button className="p-1 hover:bg-red-100 rounded-full">
                  <img
                  onClick={() => remove_product(product.id)}
                    src={cross_icon}
                    alt="Remove"
                    className="w-5 h-5 cursor-pointer"
                    />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
};

export default ProductList;
