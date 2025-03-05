import React from 'react';
import Banner from './banner/Banner';
import Restaurants from './restaurants/Restaurants';
import FoodCategories from './foodCategory/FoodCategory';
import FoodSection from './foodItems/Foods';

const Home = () => {
    return (
        <div className='ml-[4.5vw] mr-[4.5vw]'>
            
            <Banner/>
            <Restaurants/>
            <FoodCategories/>
            <FoodSection/>
            
        </div>
    );
};

export default Home;