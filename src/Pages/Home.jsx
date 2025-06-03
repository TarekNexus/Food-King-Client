import React from 'react';
import Slider from '../components/Slider';
import Delivery from '../components/Delivery';
import Newsletter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Delivery></Delivery>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;