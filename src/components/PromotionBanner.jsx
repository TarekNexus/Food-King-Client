import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import promoImage from "../assets/food-1.avif"; // Add your image

const PromotionBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-11/12 mx-auto bg-gradient-to-br from-red-600 to-red-400 py-12 px-4 md:px-16 lg:px-28 text-white flex flex-col-reverse md:flex-row items-center justify-between gap-8 rounded-2xl shadow-lg my-12"
    >
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Don't Waste, Donate!
        </h2>
        <p className="text-lg sm:text-xl mb-6 text-white/90">
          Join <span className="font-bold">FoodKing</span> and help reduce food
          waste by sharing your extra meals with those in need. It's fast, easy,
          and impactful.
        </p>
        <Link to="/AddFood">
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Share Now
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="w-full max-w-sm">
        <img
          src={promoImage}
          alt="Donate food"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </div>
    </motion.section>
  );
};

export default PromotionBanner;
