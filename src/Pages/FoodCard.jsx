import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // fixed typo from "motion/react" to "framer-motion"

const FoodCard = ({ food }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border rounded-lg shadow hover:shadow-md transition flex flex-col  bg-white/20 backdrop-blur-sm"
    >
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-40 object-cover rounded-t"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold">{food.foodName}</h3>
        <p>Location: {food.location}</p>
        <p>Expire Date: {new Date(food.expiredAt).toLocaleString()}</p>
        <p className="mt-1 text-sm text-gray-600 flex-grow">{food.notes}</p>

        <div className="mt-auto flex justify-start">
          <Link to={`/foods/${food._id}`}>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
