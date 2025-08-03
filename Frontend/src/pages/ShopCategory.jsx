import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    // Filter products by category
    const filteredProducts = all_product.filter(
        (item) => item.category === props.category
    );

    // For sort dropdown arrow animation
    const [sortOpen, setSortOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pb-10">
            {/* Banner */}
            <div className="relative w-full h-56 md:h-80 lg:h-[28rem] flex items-center justify-center mb-10 overflow-hidden">
                <img
                    src={props.banner}
                    alt="Category Banner"
                    className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
            </div>

            {/* Sort and Info Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 mb-6">
                <p className="text-lg md:text-xl font-semibold text-gray-700 mb-2 md:mb-0">
                    <span className="text-gray-700">
                        {filteredProducts.length === 0 ? (
                            <span>No items found</span>
                        ) : (
                            <span>
                                Showing <span className="font-semibold text-indigo-600">1</span>
                                -
                                <span className="font-semibold text-indigo-600">{Math.min(12, filteredProducts.length)}</span>
                                &nbsp;of&nbsp;
                                <span className="font-semibold">{filteredProducts.length}</span> items
                            </span>
                        )}
                    </span>
                </p>
                <div
                    className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow border border-gray-200 hover:shadow-md transition cursor-pointer relative"
                    onClick={() => setSortOpen((prev) => !prev)}
                >
                    <span className="text-gray-600 text-sm font-medium">Sort By</span>
                    {/* Amazon/Flipkart style arrow */}
                    <span
                        className={`flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 transition
                        ${sortOpen ? "rotate-180" : "rotate-0"} duration-200`}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                        >
                            <path
                                d="M5.5 8L10 12L14.5 8"
                                stroke="#374151"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    {/* Example dropdown (not functional, just for arrow demo) */}
                    {sortOpen && (
                        <div className="absolute top-full left-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow z-10">
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Price: Low to High</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Price: High to Low</div>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Newest First</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-6xl mx-auto px-4">
                {/* Make product size big: fewer columns, larger min-h, more padding, larger gap */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                className="w-full min-h-[340px] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition text-lg"
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500 text-lg py-16">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <p className="border border-gray-300 rounded-full px-4 py-2 text-gray-500 text-lg">Explore more</p>
            </div>
        </div>
    );
};

export default ShopCategory;