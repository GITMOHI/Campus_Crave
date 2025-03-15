import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../../../assets/Banner.jpg"; // Placeholder image

const deals = [
  { id: 1, name: "Mega Burger Combo", discount: "30%", timeLeft: 600, image: "/assets/burger.jpg" },
  { id: 2, name: "Family Pizza Pack", discount: "25%", timeLeft: 1200, image: "/assets/pizza.jpg" },
  { id: 3, name: "Sushi Delight", discount: "20%", timeLeft: 1800, image: "/assets/sushi.jpg" },
  { id: 4, name: "Healthy Salad Bowl", discount: "15%", timeLeft: 2400, image: "/assets/salad.jpg" },
];

const FeaturedDeals = () => {
  const [timers, setTimers] = useState(deals.map((deal) => deal.timeLeft));

  // Update countdown timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((time) => (time > 0 ? time - 1 : 0))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Function to format time
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <section className="mx-[4.5vw] py-12 my-32 ">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-8 flex justify-start mx-0 px-0">
      🔥 Featured Deals & Discounts
      </h2>
      <p className="text-center text-lg text-gray-700 mb-6 flex justify-start px-2">
        Limited Time Offers – Grab Your Favorite Meals at Discounted Prices!
      </p>

      <div className="flex flex-wrap justify-center gap-6 mx-0 px-0">
        {deals.map((deal, index) => (
          <motion.div
            key={deal.id}
            className="relative max-w-72 h-96 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Deal Image */}
            <img
              src={img}
              alt={deal.name}
              className="w-full h-48 object-cover"
            />

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-lg">
              {deal.discount} OFF
            </div>

            {/* Deal Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{deal.name}</h3>
              <p className="text-sm text-gray-600 mt-2">Limited Time Offer!</p>

              {/* Countdown Timer */}
              <div className="mt-4 flex justify-center items-center gap-2 text-red-600 font-bold text-lg">
                ⏳ {formatTime(timers[index])}
              </div>

              {/* Order Now Button */}
              <button className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDeals;
