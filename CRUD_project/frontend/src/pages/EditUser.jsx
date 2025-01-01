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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //Fetch the user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/users/${id}`);
        const user = await response.data;
        // console.log(user.name);
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
      } catch (err) {
        setError("Error fetching user ", err);
        console.error("Error fetching user: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await API.put(`users/${id}`, {
        name,
        email,
        age: parseInt(age),
      });
      navigate("/");
    } catch (err) {
      setError("Error updating user ", err);
      console.error("Error updating user: ", err);
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#90C3C8] flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#1F5673] mb-4">Edit User</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}
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
              disabled={loading}
              className="w-full px-4 py-2 border border-[#759FBC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#759FBC]"
              required
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
              disabled={loading}
              className="w-full px-4 py-2 border border-[#759FBC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#759FBC]"
              required
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
              disabled={loading}
              className="w-full px-4 py-2 border border-[#759FBC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#759FBC]"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md transition ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#1F5673] text-white hover:bg-[#759FBC]"
            }`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
