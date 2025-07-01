import React, { useEffect } from 'react';
import Slider from '../components/Slider';


import FoodSupportSection from '../components/FoodSupportSection';
import Service from '../components/Service';
import FeaturedFoods from '../components/featuredFoods';
import PromotionBanner from '../components/PromotionBanner';


const Home = () => {
     useEffect(() => {
        document.title = "Home | FOOD KING";
      }, []);
    return (
        <div>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <Service></Service>
            <FoodSupportSection></FoodSupportSection>
            <PromotionBanner></PromotionBanner>
           
        </div>
    );
};

export default Home;