import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

const EditUser = () => {
  const { id } = useParams();
  // console.log(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  //Fetch the user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get(`/users/${id}`);
        const user = await response.data;
        // console.log(user.name);
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
      } catch (err) {
        console.error("Error fetching user: ", err);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`users/${id}`, {
        name,
        email,
        age: parseInt(age),
      });
      navigate("/");
    } catch (err) {
      console.error("Error updating user: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#90C3C8] flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#1F5673] mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#463730] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-[#759FBC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#759FBC]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#463730] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#759FBC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#759FBC]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-[#463730] mb-2"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border border-[#759FBC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#759FBC]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1F5673] text-white py-2 px-4 rounded-md hover:bg-[#759FBC] transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
