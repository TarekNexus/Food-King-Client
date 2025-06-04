import React from "react";

const featuredFoods = [
  {
    name: "Red Onion",
    image: "/images/red-onion.png",
    quantity: "3 kg available",
    rating: 4,
  },
  {
    name: "Organic Cabbage",
    image: "/images/organic-cabbage.png",
    quantity: "2 heads left",
    rating: 5,
    isNew: true,
  },
  {
    name: "Organic Cucumber",
    image: "/images/organic-cucumber.png",
    quantity: "10 pcs available",
    rating: 4,
  },
  {
    name: "Organic Carrot",
    image: "/images/organic-carrot.png",
    quantity: "5 kg available",
    rating: 5,
  },
  {
    name: "Organic Peach",
    image: "/images/organic-peach.png",
    quantity: "Box of 12",
    rating: 4,
    isNew: true,
  },
  {
    name: "Fresh Lettuce",
    image: "/images/fresh-lettuce.png",
    quantity: "5 heads left",
    rating: 5,
  },
];

const FeaturedFoods = () => {
  return (
    <section className="bg-red-50 py-12 text-center">
      <h2 className="text-3xl font-bold text-red-700 mb-3">Featured Foods</h2>
      <p className="text-gray-600 mb-10 px-4 max-w-xl mx-auto">
        Browse the latest donated food items shared by kind-hearted people in
        your community. Request what you need — no one should go hungry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 w-11/12 mx-auto">
        {featuredFoods.map((food, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition relative"
          >
            {food.isNew && (
              <span className="bg-red-200 text-xs text-red-800 px-2 py-1 rounded absolute top-2 left-2 font-semibold">
                NEW
              </span>
            )}
            <img
              src={food.image}
              alt={food.name}
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <h3 className="font-semibold text-lg mb-1">{food.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{food.quantity}</p>
            <div className="text-yellow-500 mb-3 text-sm">
              {"★".repeat(food.rating) + "☆".repeat(5 - food.rating)}
            </div>
            <button className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 text-sm font-medium transition">
              Request This Food 🍽️
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/available-foods"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-semibold"
        >
          Show All
        </a>
      </div>
    </section>
  );
};

export default FeaturedFoods;
