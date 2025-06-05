import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:4000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  const handleRequest = async () => {
    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      foodImage: food.foodImage,
      donorEmail: food.donorEmail,
      donorName: food.donorName,
      userEmail: user?.email,
      requestDate: new Date().toISOString(),
      pickupLocation: food.location,
      expiredAt: food.expiredAt,
      additionalNotes,
    };

    await fetch("http://localhost:4000/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    await fetch(`http://localhost:4000/foods/${food._id}`, {
      method: "PATCH",
    });

    setShowModal(false);

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Request submitted successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  };

  if (!food) return <Loading></Loading>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-red-50 shadow-md rounded-lg border border-red-200">
      {/* Food Info */}
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-64 object-cover rounded mb-6 border border-red-300"
      />
      <h2 className="text-3xl font-bold text-red-700 mb-2">{food.foodName}</h2>
      <p className="text-lg text-red-800">
        <strong>Quantity:</strong> {food.quantity}
      </p>
      <p className="text-lg text-red-800">
        <strong>Location:</strong> {food.location}
      </p>
      <p className="text-lg text-red-800">
        <strong>Expires At:</strong> {new Date(food.expiredAt).toLocaleString()}
      </p>
      <p className="text-lg text-red-800">
        <strong>Status:</strong> {food.status}
      </p>

      <p className="text-md mt-3 text-gray-800">
        <strong className="text-red-600">Notes:</strong> {food.notes}
      </p>
      {food.additionalNotes && (
        <p className="text-sm text-gray-600">
          <strong className="text-red-500">Additional Notes:</strong>{" "}
          {food.additionalNotes}
        </p>
      )}

      {/* Donor Info */}
      <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-4">
        <img
        referrerPolicy="no-referrer"
          src={food.donorImage}
          alt={food.donorName}
          className="w-16 h-16 rounded-full object-cover border-2 border-red-300"
        />
        <div>
          <p className="font-semibold text-red-700">{food.donorName}</p>
          <p className="text-sm text-gray-600">{food.donorEmail}</p>
        </div>
      </div>

      {/* Request Button */}
      {food.status === "available" && (
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
        >
          Request
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg border">
            <h3 className="text-xl font-bold mb-4 text-center text-red-700">
              Request Food
            </h3>
            <div className="space-y-2 text-sm">
              <div className="w-full mb-4">
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="w-full h-40 object-cover rounded-md mx-auto"
                />
              </div>
              <p>
                <strong>Food Name:</strong> {food.foodName}
              </p>
              <p>
                <strong>Food ID:</strong> {food._id}
              </p>
              <p>
                <strong>Donor Name:</strong> {food.donorName}
              </p>
              <p>
                <strong>Donor Email:</strong> {food.donorEmail}
              </p>
              <p>
                <strong>Your Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Request Date:</strong> {new Date().toLocaleString()}
              </p>
              <p>
                <strong>Pickup Location:</strong> {food.location}
              </p>
              <p>
                <strong>Expire Date:</strong>{" "}
                {new Date(food.expiredAt).toLocaleString()}
              </p>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className="w-full p-2 border rounded"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleRequest}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirm Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
