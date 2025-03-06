import React from "react";
import FoodCard from "../foodCard/FoodCard";


// Sample food data with ratings and images
const foods = [
  { id: 1, name: "Cheese Burger", category: "Burgers", image: "/assets/burger1.jpg", price: "$5.99", rating: 4.5 },
  { id: 2, name: "Veggie Pizza", category: "Pizza", image: "/assets/pizza1.jpg", price: "$7.99", rating: 4.7 },
  { id: 3, name: "Salmon Sushi", category: "Sushi", image: "/assets/sushi1.jpg", price: "$8.99", rating: 4.8 },
  { id: 4, name: "Chocolate Cake", category: "Desserts", image: "/assets/dessert1.jpg", price: "$4.99", rating: 4.6 },
  { id: 5, name: "Fruit Juice", category: "Drinks", image: "/assets/drinks1.jpg", price: "$2.99", rating: 4.3 },
  { id: 6, name: "Green Salad", category: "Healthy", image: "/assets/salad1.jpg", price: "$6.99", rating: 4.7 },
];

const FoodSection = ({ selectedCategory }) => {
  // Filter foods based on selected category
  const filteredFoods = foods.filter((food) => food.category === selectedCategory);

  return (
    <section className="px-6 lg:px-16 py-12 bg-white lg:mt-14 md:mt-10 mt-7">
      {/* Category Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-green-600">
          Foods in {selectedCategory} Category
        </h3>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
