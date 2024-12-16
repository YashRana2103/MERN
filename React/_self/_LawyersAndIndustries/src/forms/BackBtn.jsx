import React from "react";
import { Link, NavLink } from "react-router-dom";

function BackBtn() {
  return (
    <div className="container mx-auto mt-6 p-4">
      <NavLink
        to="../"
        className="bg-gray-600 text-white py-2 px-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
      >
        &larr; Go back
      </NavLink>
    </div>
  );
}

export default BackBtn;
