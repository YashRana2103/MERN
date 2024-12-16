import React from "react";
import "./Card.css"; // Make sure to create this CSS file

export default function Card({
  imgUrl,
  name,
  gender,
  location,
  email,
  dob,
  phone,
  fetchUser,
  loading,
}) {
  return (
    <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-sm">
      <img
        src={imgUrl}
        alt="User photo"
        className="rounded-full w-32 h-32 mb-4"
      />
      <h2 className="text-[#020887] text-2xl font-bold mb-2">{name}</h2>
      <p className="text-[#334195] text-lg mb-2">Gender: {gender}</p>
      <p className="text-[#334195] text-lg mb-2">Date of Birth: {dob}</p>
      <p className="text-[#334195] text-lg mb-2">Location: {location}</p>
      <p className="text-[#334195] text-lg mb-2">Email: {email}</p>
      <p className="text-[#334195] text-lg mb-4">Phone: {phone}</p>
      <button
        onClick={fetchUser}
        disabled={loading}
        className="bg-[#647AA3] text-white font-bold py-2 px-6 rounded hover:bg-[#95B2B0] transition duration-300"
        style={{
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? <div className="loader"></div> : "Generate New"}
      </button>
    </div>
  );
}
