import { Link } from "react-router";

const FoodCard = ({ food }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{food.foodName}</h3>
      <p>
        {food.quantity} • {food.location}
      </p>
      <p className="text-sm text-gray-600">
        Expires: {new Date(food.expiredAt).toLocaleString()}
      </p>
      <p className="mt-1">{food.notes}</p>
      <Link to={`/foods/${food._id}`}>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FoodCard;
