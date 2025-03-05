import React, { useState } from "react";
import img from "../../../assets/Banner.jpg"
// Sample categories
const categories = [
  { id: 1, name: "Burgers" },
  { id: 2, name: "Pizza" },
  { id: 3, name: "Sushi" },
  { id: 4, name: "Desserts" },
  { id: 5, name: "Drinks" },
  { id: 6, name: "Healthy" },
];

// Sample foods data, each food belongs to a category
const foods = [
  { id: 1, name: "Cheese Burger", category: "Burgers", image: "/assets/burger1.jpg", price: "$5.99" },
  { id: 2, name: "Veggie Pizza", category: "Pizza", image: "/assets/pizza1.jpg", price: "$7.99" },
  { id: 3, name: "Salmon Sushi", category: "Sushi", image: "/assets/sushi1.jpg", price: "$8.99" },
  { id: 4, name: "Chocolate Cake", category: "Desserts", image: "/assets/dessert1.jpg", price: "$4.99" },
  { id: 5, name: "Fruit Juice", category: "Drinks", image: "/assets/drinks1.jpg", price: "$2.99" },
  { id: 6, name: "Green Salad", category: "Healthy", image: "/assets/salad1.jpg", price: "$6.99" },
];

const FoodSection = () => {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("Burgers");

  // Filter foods based on the selected category
  const filteredFoods = foods.filter(food => food.category === selectedCategory);

  return (
    <section className="px-6 lg:px-16 py-12 bg-gray-50">
      {/* Category Selection */}
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-8">
        Select a Category to View Foods
      </h2>

      <div className="flex justify-center space-x-6 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`text-lg font-medium px-6 py-2 rounded-lg ${
              selectedCategory === category.name
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-green-700`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Selected Category Name */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-green-600">
          Foods in {selectedCategory} Category
        </h3>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFoods.map(food => (
          <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img} alt={food.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{food.name}</h4>
              <p className="text-green-600 font-medium">{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
