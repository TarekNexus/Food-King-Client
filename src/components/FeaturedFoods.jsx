import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/foods/featured")
      .then((res) => res.json())
      .then((data) => setFeaturedFoods(data))
      .catch((error) => console.error("Error fetching featured foods:", error));
  }, []);

  return (
    <section className="bg-red-50 py-12 text-center">
      <h2 className="text-4xl font-extrabold text-red-700 mb-6">
        Featured Foods
      </h2>
      <p className="text-gray-700 mb-12 px-6 max-w-3xl mx-auto leading-relaxed">
        Browse the latest donated food items shared by kind-hearted people in
        your community. Request what you need — no one should go hungry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 w-11/12 mx-auto">
        {featuredFoods.length > 0 ? (
          featuredFoods.map((food, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 relative flex flex-col items-center"
            >
              {food.isNew && (
                <span className="absolute top-4 left-4 bg-red-300 text-red-900 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  NEW
                </span>
              )}
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-32 h-32 object-contain mb-6"
              />
              <h3 className="font-bold text-xl text-red-700 mb-2">
                {food.foodName}
              </h3>
              <p className="text-gray-600 mb-6">
                {food.quantity} pcs available
              </p>
              <Link to={`/foods/${food._id}`}>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition font-semibold">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">
            No featured foods found.
          </p>
        )}
      </div>

      <div className="mt-14">
        <Link to="/AvailableFoods">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFoods;
