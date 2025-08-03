import React, { useState } from "react";
import data_product from "../Assets/data";
import Item from "./Item";
import { useEffect } from "react";

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/popularinwomen')
    .then((res) => res.json())
    .then((data) => setPopularProducts(data))
  },[])

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">Popular in Women</h1>
      <hr className="border-t-4 border-purple-500 w-32 mx-auto mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 text-xl">
        {popularProducts.map((item, i) => (
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

export default Popular;
