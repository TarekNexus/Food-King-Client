import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import FoodCard from "../Pages/FoodCard";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/foods/featured")
      .then((res) => res.json())
      .then((data) => setFeaturedFoods(data))
      .catch((error) => console.error("Error fetching featured foods:", error));
  }, []);

  return (
    <section className=" py-12 ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-red-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <h2 className="text-4xl text-center font-extrabold text-red-700 mb-6">
        Featured Foods
      </h2>
      <p className="text-gray-700 text-center mb-12 px-6 max-w-3xl mx-auto leading-relaxed">
        Browse the latest donated food items shared by kind-hearted people in
        your community. Request what you need — no one should go hungry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 w-11/12 mx-auto">
        {featuredFoods.length > 0 ? (
          featuredFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">
            No featured foods found.
          </p>
        )}
      </div>

      <div className="mt-14 text-center">
        <Link to="/AvailableFoods">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition font-semibold">
            View All Foods
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFoods;
