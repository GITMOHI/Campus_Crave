import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import bannerImage from "../../../assets/Banner2.png"; // Ensure correct path

const Banner = () => {
  return (
    
      <section className="relative h-[80vh] lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 ">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-green-600">
          Fast & Fresh Food Delivery
        </h1>
        <p className="text-lg lg:text-xl mt-4 text-gray-700 max-w-lg">
          Order from your favorite restaurants and get delicious food delivered at your doorstep.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium">
          Order Now
        </button>
      </div>

      {/* Right Side - Image with Motion */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 overflow-hidden">
        <motion.img
          src={bannerImage}
          alt="Food Delivery"
          className="w-[300px] lg:w-[400px] h-auto object-contain"
          initial={{ x: "15vw", opacity: 0 }} // Start 15vw to the right
          animate={{ x: "0vw", opacity: 1 }} // Move to its normal position
          transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
        />
      </div>
    </section>
  );
};

export default Banner;
