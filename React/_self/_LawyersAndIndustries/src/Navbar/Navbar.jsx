import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="../" className={() => "text-white text-2xl font-bold"}>
          Lawyer Directory
        </NavLink>
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="../"
            className={({ isActive, isPending }) =>
              `${isActive ? "text-gray-800" : "text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="../industries"
            className={({ isActive, isPending }) =>
              `${isActive ? "text-gray-800" : "text-white"}`
            }
          >
            Industries
          </NavLink>
          <NavLink
            to="../lawyers"
            className={({ isActive, isPending }) =>
              `${isActive ? "text-gray-800" : "text-white"}`
            }
          >
            Lawyers
          </NavLink>
          <NavLink
            to="../blogs"
            className={({ isActive, isPending }) =>
              `${isActive ? "text-gray-800" : "text-white"}`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="../forms"
            className={({ isActive, isPending }) =>
              `${isActive ? "text-gray-800" : "text-white"}`
            }
          >
            Forms
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
