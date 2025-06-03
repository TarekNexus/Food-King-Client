import React from 'react';
import { Truck, ShoppingCart, Home } from 'lucide-react';
import deliveryman from "../assets/delivery.png";

const Delivery = () => {
  return (
    <div className="bg-gradient-to-br from-[#FEE2E2] to-[#DC2626] py-12 px-4 sm:px-6">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center w-11/12 max-w-7xl mx-auto">
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <img
            src={deliveryman}
            alt="Delivery Man"
            className="w-64 sm:w-80 md:w-[400px] lg:w-[450px]"
          />
        </div>

        {/* Right Side: Text and Features */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1F2937]">
            YOUR <span className="text-red-600">FAVORITE FOOD</span>,<br />
            ON THE WAY!
          </h1>
          <p className="mt-4 text-gray-900 text-sm sm:text-base md:text-lg">
            From mouth-watering street snacks to elegant gourmet meals, our food website brings you a world of flavors under one roof. Whether you crave something spicy, sweet, or savory — we have the perfect dish to satisfy every taste and craving.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-red-300 p-4 rounded-xl flex flex-col items-center text-center text-red-700 shadow-md">
              <Truck className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">DELIVERY IN 30 MINUTES</p>
            </div>
            <div className="bg-white border border-red-300 p-4 rounded-xl flex flex-col items-center text-center text-red-700 shadow-md">
              <ShoppingCart className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">FREE SHIPPING FROM $75</p>
            </div>
            <div className="bg-white border border-red-300 p-4 rounded-xl flex flex-col items-center text-center text-red-700 shadow-md">
              <Home className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">DELIVERY ON YOUR DOORSTEP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
