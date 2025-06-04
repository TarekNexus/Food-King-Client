import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.append("searchTerm", searchTerm);
    if (sortOrder) params.append("sortOrder", sortOrder);

    fetch(`http://localhost:4000/foods?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        // Only keep foods with status "available"
        setFoods(data.filter((food) => food.status === "available"));
      });
  }, [searchTerm, sortOrder]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Foods</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by food name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        >
          <option value="">Sort by Expiry (optional)</option>
          <option value="asc">Expire Date Soon</option>{" "}
          {/* earliest expiry first */}
          <option value="desc">Expire Date Late</option>{" "}
          {/* latest expiry first */}
        </select>
      </div>

      {foods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No foods found.</p>
      )}
    </div>
  );
};

export default AvailableFoods;
