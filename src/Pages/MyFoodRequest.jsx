import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";


const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/requests?email=${user.email}`)
        .then(res => res.json())
        .then(data => setRequests(data));
    }
  }, [user?.email]);

  if (!user) return <p className="p-4 text-center text-gray-600">Loading user info...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">My Food Requests</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-600">You haven’t requested any food yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-red-200">
            <thead className="bg-red-100">
              <tr>
                <th className="py-2 px-4 border">Food</th>
                <th className="py-2 px-4 border">Donor Name</th>
                <th className="py-2 px-4 border">Pickup Location</th>
                <th className="py-2 px-4 border">Expire Date</th>
                <th className="py-2 px-4 border">Request Date</th>
               
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="text-center hover:bg-red-50 transition">
                  <td className="py-2 px-4 border">
                      {req.foodName}
                  </td>
                  <td className="py-2 px-4 border">{req.donorName}</td>
                  <td className="py-2 px-4 border">{req.pickupLocation}</td>
                  <td className="py-2 px-4 border">{new Date(req.expiredAt).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border">{new Date(req.requestDate).toLocaleString()}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
