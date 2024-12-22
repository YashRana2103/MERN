import React, { useEffect, useState } from "react";
import API from "../api";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-theme-light min-h-screen">
      <h1 className="text-3xl font-bold text-theme-dark mb-4">Users</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user._id}
            className="bg-theme-secondary text-theme-light p-4 rounded-md shadow-md"
          >
            <p className="text-lg font-semibold">{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
