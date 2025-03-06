import img from "../../../assets/Banner.jpg";
import React, { useState } from "react";
import { FaStar, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const FoodCard = ({ food }) => {
  const [count, setCount] = useState(0);

  // Increase item count
  const increaseCount = () => setCount(count + 1);

  // Decrease item count (only if count > 0)
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Food Image */}
      <img src={img} alt={food.name} className="w-full h-48 object-cover" />

      {/* Quantity Selector (Top Right) */}
      <div className="absolute top-3 right-3 flex items-center space-x-2 bg-white p-1 rounded-full shadow-lg">
        <button
          className={`p-2 text-green-600 bg-gray-200 rounded-full transition ${
            count === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-300"
          }`}
          onClick={decreaseCount}
          disabled={count === 0}
        >
          <FaMinus />
        </button>

        {/* Show Count Only If Greater Than 0 */}
        {count > 0 && <span className="text-lg font-semibold">{count}</span>}

        <button
          className="p-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition"
          onClick={increaseCount}
        >
          <FaPlus />
        </button>
      </div>

      {/* Food Details */}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{food.name}</h4>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold text-lg">{food.price}</span>
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

