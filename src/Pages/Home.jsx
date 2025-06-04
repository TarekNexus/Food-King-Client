import React from 'react';
import Slider from '../components/Slider';


import FoodSupportSection from '../components/FoodSupportSection';
import Service from '../components/Service';
import FeaturedFoods from '../components/featuredFoods';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <Service></Service>
            <FoodSupportSection></FoodSupportSection>
        </div>
    );
};

export default Home;