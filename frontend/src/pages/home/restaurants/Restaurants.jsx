import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for navigation
import img from "../../../assets/Banner.jpg"

// Sample Restaurants data
const restaurants = [
  { id: 1, name: "Pizza Palace", image: "/assets/pizza1.jpg" },
  { id: 2, name: "Burger King", image: "/assets/burger1.jpg" },
  { id: 3, name: "Sushi Express", image: "/assets/sushi1.jpg" },
  { id: 4, name: "Taco Bell", image: "/assets/taco1.jpg" },
  { id: 5, name: "Pasta Place", image: "/assets/pasta1.jpg" },
  { id: 6, name: "Salad Bar", image: "/assets/salad1.jpg" },
];

const RestaurantSection = () => {
  return (
    <section className="px-6 lg:px-16 py-12 bg-white">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-8">
        Choose Your Favorite Restaurant
      </h2>

      {/* Horizontal Scrolling and Motion Section */}
      <div
        className="relative overflow-hidden"
        style={{ width: "100%" }}
      >
        {/* Container for continuous motion */}
        <div className="flex space-x-8 animate-marquee">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="relative flex-shrink-0 group"
              style={{ width: "200px", height: "200px" }}
            >
              {/* Image of Restaurant */}
              <img
                src={img}
                alt={restaurant.name}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* Restaurant Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                {restaurant.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
