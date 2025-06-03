import React from "react";
import leftImage from "../assets/n-l.png";
import rightImage from "../assets/r-l.png";

const Newsletter = () => {
  return (
    <div className="relative mt-8 mb-8">
      {/* Radial background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative w-11/12  mx-auto py-16 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Left Image - hidden on small devices */}
        <img
          src={leftImage}
          alt="Vegetables Left"
          className="hidden md:block absolute left-0 bottom-0 w-40 md:w-52 lg:w-80"
        />

        {/* Right Image - hidden on small devices */}
        <img
          src={rightImage}
          alt="Pizza Right"
          className="hidden md:block absolute right-0 bottom-0 w-40 md:w-52 lg:w-80"
        />

        <h2 className="text-red-600 text-xl sm:text-2xl font-semibold z-10">Newsletter</h2>
        <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mt-2 z-10">
          Get <span className="text-red-500">10%</span> off your order!
        </h3>
        <p className="text-gray-500 mt-2 mb-6 text-sm sm:text-base z-10 max-w-md">
          Enter your email and receive a 10% discount on your next order!
        </p>

        {/* Responsive Form */}
        <form className="w-full max-w-lg z-10 flex flex-col sm:flex-row gap-3 sm:gap-0 items-stretch">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-md sm:rounded-l-none sm:rounded-r-md hover:from-red-700 hover:to-red-600 transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
