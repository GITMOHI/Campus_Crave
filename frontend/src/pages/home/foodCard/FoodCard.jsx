import img from "../../../assets/Banner.jpg";
import React from "react";
import { FaStar, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const FoodCard = ({ food }) => {
  
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-110">
      {/* Food Image */}
      <img src={img} alt={food.name} className="w-full h-48 object-cover" />

    

      {/* Food Details */}
      <div className="p-4">
        <h4 className="text-sm md:text-lg lg:text-lg font-semibold text-gray-800">{food.name}</h4>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold text-sm md:text-lg lg:text-lg">{food.price}</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 text-gray-600">{food.rating}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-700 transition">
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

