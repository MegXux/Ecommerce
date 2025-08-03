import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Trash2 } from "lucide-react"; // Import dustbin icon from lucide-react

const CartItems = () => {
  const { getTotalCartAmount, getTotalCartItems, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-7 gap-4 font-semibold text-gray-700 pb-2 border-b">
        <p className="col-span-1">Products</p>
        <p className="col-span-2">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1 text-center">Total</p>
        <p className="col-span-1 text-center">Remove</p>
      </div>
      {all_product.map((e) => {
        const productId = Number(e.id);
        if (cartItems[productId] > 0) {
          return (
            <div key={productId} className="grid grid-cols-7 gap-4 items-center py-4 border-b last:border-b-0">
              <img src={e.image} alt={e.name} className="w-16 h-16 object-contain col-span-1" />
              <p className="col-span-2 text-gray-800">{e.name}</p>
              <p className="col-span-1 text-gray-600">${e.new_price}</p>
              <span className="col-span-1">
                <button className="px-3 py-1 border rounded bg-gray-100 text-gray-700 cursor-default">
                  {cartItems[productId]}
                </button>
              </span>
              {/* Total column */}
              <div className="col-span-1 flex justify-center">
                <p className="text-gray-800">${e.new_price * cartItems[productId]}</p>
              </div>
              {/* Remove column */}
              <div className="col-span-1 flex justify-center">
                <button
                  className="flex justify-center items-center"
                  onClick={() => removeFromCart(productId)}
                  aria-label="Remove item"
                >
                  <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-600 transition" />
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
        <div className="w-full md:w-1/2 bg-gray-50 rounded-lg p-6 shadow">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-2 text-gray-700">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2 text-gray-700">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-2 font-semibold text-gray-900">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-full mt-6 py-3 rounded bg-gray-800 text-white font-semibold hover:bg-gray-700 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 rounded-lg p-6 shadow">
          <p className="mb-2 text-gray-700">If you have promo code, enter it here</p>
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Enter your promo code"
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="px-4 py-2 rounded bg-gray-800 text-white font-medium hover:bg-gray-700 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
