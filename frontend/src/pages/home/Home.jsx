import React, { useState } from "react";
import Banner from "./banner/Banner";
import Restaurants from "./restaurants/Restaurants";
import FoodCategories from "./foodCategory/FoodCategory";
import FoodSection from "./foodItems/Foods";
import HotItems from "./hotItems/HotItems";
import FeaturedDeals from "./offers/Offers";
import Testimonials from "./testimonials/Testimonials";
import HowItWorks from "./howToOrder/HowToOrder";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Burgers");

  return (
    <div className="relative bg-gradient-to-r from-green-50 to-white overflow-hidden">
      {/* Blurred Background Circles */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-green-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="ml-[4.5vw] mr-[4.5vw] relative z-10">
        <Banner />
        <Restaurants />
        <FoodCategories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <FoodSection selectedCategory={selectedCategory} />
        <HotItems />
        <FeaturedDeals />
        <HowItWorks />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
