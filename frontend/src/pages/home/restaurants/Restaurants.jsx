import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../../../assets/carbon.png";
import img1 from "../../../assets/mama.png"

const restaurants = [
  { id: 1, name: "Pizza Palace", image: img },
  { id: 2, name: "Burger King", image: img1 },
  { id: 3, name: "Sushi Express", image: img},
  { id: 4, name: "Taco Bell", image: img1},
  { id: 5, name: "Pasta Place", image: img },
  { id: 6, name: "Salad Bar", image: img1},
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
    <section className="px-6 lg:px-16 py-12  lg:mt-14 md:mt-10 mt-7">
      <h2 className="text-2xl lg:text-3xl font-bold text-green-600 text-center border-l-8 rounded-lg pl-2 border-green-600 flex justify-start mb-16">
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
              className="relative flex items-center flex-shrink-0  overflow-hidden p-5 text-center transition-transform transform  w-[50vw] lg:w-[15vw] "
              
            >
              {/* Restaurant Image */}
              <div className="relative w-full   hover:scale-125  ">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              

              
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantSection;
