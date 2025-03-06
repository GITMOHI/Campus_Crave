import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../../../assets/Banner.jpg";

const restaurants = [
  { id: 1, name: "Pizza Palace", image: "/assets/pizza1.jpg" },
  { id: 2, name: "Burger King", image: "/assets/burger1.jpg" },
  { id: 3, name: "Sushi Express", image: "/assets/sushi1.jpg" },
  { id: 4, name: "Taco Bell", image: "/assets/taco1.jpg" },
  { id: 5, name: "Pasta Place", image: "/assets/pasta1.jpg" },
  { id: 6, name: "Salad Bar", image: "/assets/salad1.jpg" },
];

const duplicatedRestaurants = [...restaurants, ...restaurants];

const RestaurantSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Enable scrolling with mouse wheel/touchpad
  useEffect(() => {
    const handleScroll = (event) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += event.deltaY * 2; // Adjust scroll speed
      }
    };
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <section className="px-6 lg:px-16 py-12 bg-white lg:mt-14 md:mt-10 mt-7">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-8">
        Choose Your Favorite Restaurant
      </h2>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-auto whitespace-nowrap custom-scroll"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex space-x-10"
          animate={isHovered ? { x: 0 } : { x: ["0%", "-100%"] }}
          transition={{
            repeat: isHovered ? 0 : Infinity, // Stops animation on hover
            duration: 20,
            ease: "linear",
          }}
        >
          {duplicatedRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 bg-white shadow-xl rounded-2xl overflow-hidden p-5 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
              style={{ width: "250px", height: "320px" }}
            >
              {/* Restaurant Image */}
              <div className="relative w-full h-48">
                <img
                  src={img}
                  alt={restaurant.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Restaurant Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {restaurant.name}
              </h3>

              {/* Explore Button */}
              <button className="mt-3 px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300">
                Explore
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantSection;
