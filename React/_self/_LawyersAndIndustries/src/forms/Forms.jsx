import React from "react";
import { NavLink } from "react-router-dom";

function Forms() {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Manage Data
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavLink
            to="add_industries"
            className={() =>
              `flex items-center justify-center bg-blue-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200`
            }
          >
            Add Industry
          </NavLink>
          <NavLink
            to="add_lawyers"
            className={() =>
              `flex items-center justify-center bg-green-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-200`
            }
          >
            Add Lawyer
          </NavLink>
          <NavLink
            to="add_blogs"
            className={() =>
              `flex items-center justify-center bg-purple-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-200`
            }
          >
            Add Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Forms;
