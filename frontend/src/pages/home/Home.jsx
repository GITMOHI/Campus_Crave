import React, { useState } from 'react';
import Banner from './banner/Banner';
import Restaurants from './restaurants/Restaurants';
import FoodCategories from './foodCategory/FoodCategory';
import FoodSection from './foodItems/Foods';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Burgers"); // Move state here

    return (
        <div className='ml-[4.5vw] mr-[4.5vw]'>
            <Banner />
            <Restaurants />
            <FoodCategories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            <FoodSection selectedCategory={selectedCategory} />
        </div>
    );
};

export default Home;
