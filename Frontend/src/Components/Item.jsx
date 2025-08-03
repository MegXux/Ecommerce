import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 p-4 flex flex-col items-center group cursor-pointer">
      <div className="w-full flex justify-center">
        <Link to={`/product/${props.id}`}>
        <img
        onClick={() => window.scrollTo(0,0)}
          src={props.image}
          alt={props.name}
          className="w-52 h-52 object-contain mb-4 rounded-md group-hover:scale-105 transition-transform duration-200"
        />
        </Link>
      </div>
      <p className="text-lg font-semibold text-gray-800 mb-2 text-center">{props.name}</p>
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold text-purple-600">${props.new_price}</span>
        <span className="text-base text-gray-400 line-through">${props.old_price}</span>
      </div>
    </div>
  );
};

export default Item;