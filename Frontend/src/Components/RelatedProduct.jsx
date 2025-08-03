import React from "react";
import data_product from "../assets/all_product.js";
import Item from "./Item";

const RelatedProduct = (props) => {
  const filteredProducts = data_product.filter(
    (item) => item.category === props.category
  );
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight text-center">
        Related Products
      </h1>
      <hr className="border-t-2 border-purple-300 w-24 mx-auto mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
