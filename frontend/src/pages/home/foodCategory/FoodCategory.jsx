import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import img from "../../../assets/Banner.jpg";

const categories = [
  { id: 1, name: "Burgers" },
  { id: 2, name: "Pizza" },
  { id: 3, name: "Sushi" },
  { id: 4, name: "Desserts" },
  { id: 5, name: "Drinks" },
  { id: 6, name: "Healthy" },
];

const FoodCategories = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <section className="px-6 lg:px-16 py-12 bg-white relative lg:mt-14 md:mt-10 mt-7">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-8">
        Browse Food Categories
      </h2>

      <div className="flex justify-between overflow-x-scroll scrollbar-hide px-2 space-x-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex-none w-[140px] flex flex-col items-center cursor-pointer ${
              selectedCategory === category.name ? "" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)} // Click updates state
          >
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-md hover:border-4 hover:border-green-600">
              <img src={img} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategories;
