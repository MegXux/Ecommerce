import React, { useContext, useState } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import {ShopContext} from "../Context/ShopContext";

const SIZES = ["XS", "S", "M", "L", "XL"];

const ProductDetails = (props) => {
  const { product } = props;
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useContext(ShopContext)

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    // Add to cart logic here
    alert(`Added ${product.name} (Size: ${selectedSize}, Qty: ${quantity}) to cart!`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-4 max-w-7xl mx-auto my-10">
      {/* Left: Images */}
      <div className="flex flex-col md:w-1/2 gap-4">
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <img
              key={idx}
              src={product.image}
              alt={`Product thumbnail ${idx + 1}`}
              className="w-16 h-16 object-cover rounded-lg border hover:ring-2 hover:ring-purple-400 transition"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <img
            className="w-72 h-72 object-cover rounded-xl shadow"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      {/* Right: Details */}
      <div className="flex flex-col md:w-1/2 gap-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-2">  
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" className="w-6 h-6" />
          ))}
          <img src={star_dull_icon} alt="star" className="w-6 h-6" />
          <span className="ml-2 text-gray-600 text-sm font-medium">(4.9)</span>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-lg text-gray-400 line-through font-medium">
            ${product.old_price}
          </span>
          <span className="text-2xl text-purple-700 font-bold">
            ${product.new_price}
          </span>
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 font-semibold mb-2">Select Size: </span>
          <div className="flex gap-3">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`px-4 py-2 rounded-lg border font-semibold transition ${
                  selectedSize === size
                    ? "bg-purple-600 text-white border-purple-700"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-purple-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <label className="text-gray-700 font-semibold" htmlFor="quantity">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-16 px-2 py-1 border rounded-lg text-center focus:ring-2 focus:ring-purple-400" 
          />
        </div>
        <div className="flex items-center gap-4">
            <p className="text-gray-700 font-semibold">Category: {product.category}</p>
        </div>
        <button
          onClick={() => {addToCart(product.id)}}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl shadow transition text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
