import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4 py-10">
      {/* 404 Message */}
      <h1 className="text-[#020887] text-6xl font-bold mb-4">404</h1>
      <p className="text-[#334195] text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink
        to="/"
        className="bg-[#647AA3] text-white font-bold py-2 px-6 rounded hover:bg-[#95B2B0] transition duration-300"
      >
        Go Back Home
      </NavLink>
    </div>
  );
}
