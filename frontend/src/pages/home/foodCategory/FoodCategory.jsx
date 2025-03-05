import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation
import img from "../../../assets/Banner.jpg"
const categories = [
  { id: 1, name: "Burgers", image: "/assets/burger.jpg" },
  { id: 2, name: "Pizza", image: "/assets/pizza.jpg" },
  { id: 3, name: "Sushi", image: "/assets/sushi.jpg" },
  { id: 4, name: "Desserts", image: "/assets/dessert.jpg" },
  { id: 5, name: "Drinks", image: "/assets/drinks.jpg" },
  { id: 6, name: "Healthy", image: "/assets/healthy.jpg" },
];

const FoodCategories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 lg:px-16 py-12 bg-gray-50 relative">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-8">
        Browse Food Categories
      </h2>

      {/* Scrollable Food Categories Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Scrollable Category List */}
        <div
          ref={scrollRef}
          className="flex justify-center mx-auto overflow-x-scroll scrollbar-hide scroll-smooth px-2"
        >
          {categories.map((category) => (
            <div key={category.id} className="flex-none w-[140px] flex flex-col items-center">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-md border-4 border-green-600">
                <img src={img} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700"
          onClick={() => scroll("right")}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FoodCategories;
