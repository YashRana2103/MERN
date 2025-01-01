import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users: ", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/users/${id}`);
      console.log("User deleted!");
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#90C3C8] flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-[#1F5673] mb-6">User List</h1>
      <div className="w-full max-w-3xl">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white p-4 rounded-md shadow-md mb-4 flex flex-grow justify-between items-center"
          >
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#1F5673]">{user.name}</h3>
              <p className="text-sm text-[#463730]">Email: {user.email}</p>
              <p className="text-sm text-[#463730]">Age: {user.age}</p>
            </div>
            <div className="flex-initial px-2">
              <button
                className="bg-[#1F5673] text-white py-2 px-4 rounded-md hover:bg-[#759FBC] transition"
                onClick={() => navigate(`/edit/${user._id}`)}
              >
                Edit
              </button>
            </div>
            <div className="flex-initial px-2">
              <button
                className="bg-[#731f1f] text-white py-2 px-4 flex-auto rounded-md hover:bg-[#bc7575] transition"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
