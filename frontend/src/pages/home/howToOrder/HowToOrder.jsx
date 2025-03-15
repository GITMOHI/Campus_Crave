import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaShoppingCart, FaSmile } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Choose Your Favorite Food",
    description: "Explore a variety of delicious meals and select your favorite. 🍔",
    icon: <FaUtensils className="text-6xl text-green-500" />,
  },
  {
    id: 2,
    title: "Add to Cart",
    description: "Add your selected food items to the cart and checkout. 🛒",
    icon: <FaShoppingCart className="text-6xl text-green-500" />,
  },
  {
    id: 3,
    title: "Enjoy Your Meal",
    description: "Relax and enjoy freshly prepared meals delivered to your door. 🚀",
    icon: <FaSmile className="text-6xl text-green-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 lg:px-16 py-16  my-32 text-center relative overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-green-700 mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 How It Works
      </motion.h2>

      {/* Background Design */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-green-300 rounded-full opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </div>

      {/* Step Cards with Animation */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative group w-72 h-80"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Card with Flip Effect */}
            <motion.div
              className="w-full h-full bg-white shadow-xl rounded-xl flex flex-col items-center justify-center px-6 py-8 text-gray-800 transition-transform duration-500 transform group-hover:rotate-y-180"
              whileHover={{ scale: 1.05 }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {step.icon}
                <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              </div>

              {/* Back Side (Hidden Initially) */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-green-600 text-white rounded-xl px-6 py-8 rotate-y-180 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <p className="text-lg font-light">{step.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Curved Progress Line */}
      {/* <motion.div
        className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-700 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      /> */}
    </section>
  );
};

export default HowItWorks;
