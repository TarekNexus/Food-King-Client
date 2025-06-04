import { useEffect, useState } from "react";
import { useParams } from "react-router";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/foods/${id}`)
      .then(res => res.json())
      .then(data => setFood(data));
  }, [id]);

  if (!food) return <p className="p-4 text-red-600">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-red-50 shadow-md rounded-lg border border-red-200">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-64 object-cover rounded mb-6 border border-red-300"
      />

      <h2 className="text-3xl font-bold text-red-700 mb-2">{food.foodName}</h2>
      <p className="text-lg mb-1 text-red-800"><strong>Quantity:</strong> {food.quantity}</p>
      <p className="text-lg mb-1 text-red-800"><strong>Location:</strong> {food.location}</p>
      <p className="text-lg mb-1 text-red-800">
        <strong>Expires At:</strong> {new Date(food.expiredAt).toLocaleString()}
      </p>
      <p className="text-lg mb-1 text-red-800"><strong>Status:</strong> {food.status}</p>

      <p className="text-md mt-3 mb-1 text-gray-800">
        <strong className="text-red-600">Notes:</strong> {food.notes}
      </p>
      {food.additionalNotes && (
        <p className="text-sm text-gray-600 mb-4">
          <strong className="text-red-500">Additional Notes:</strong> {food.additionalNotes}
        </p>
      )}

      <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-4">
        <img
          src={food.donorImage}
          alt={food.donorName}
          className="w-16 h-16 rounded-full object-cover border-2 border-red-300"
        />
        <div>
          <p className="font-semibold text-red-700">{food.donorName}</p>
          <p className="text-sm text-gray-600">{food.donorEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
