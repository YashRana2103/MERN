import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">Lawyer Directory</h2>
          <p className="text-sm text-gray-400">
            Connecting industries with legal expertise.
          </p>
        </div>
        <div className="flex space-x-6">
          <NavLink
            to="../"
            className={({ isActive, isPending }) =>
              `${
                isActive
                  ? "text-gray-400 underline decoration-white"
                  : "text-white"
              } text-sm hover:text-gray-400 hover:underline hover:decoration-white`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="../industries"
            className={({ isActive, isPending }) =>
              `${
                isActive
                  ? "text-gray-400 underline decoration-white"
                  : "text-white"
              } text-sm hover:text-gray-400 hover:underline hover:decoration-white`
            }
          >
            Industries
          </NavLink>
          <NavLink
            to="../lawyers"
            className={({ isActive, isPending }) =>
              `${
                isActive
                  ? "text-gray-400 underline decoration-white"
                  : "text-white"
              } text-sm hover:text-gray-400 hover:underline hover:decoration-white`
            }
          >
            Lawyers
          </NavLink>
          <NavLink
            to="../blogs"
            className={({ isActive, isPending }) =>
              `${
                isActive
                  ? "text-gray-400 underline decoration-white"
                  : "text-white"
              } text-sm hover:text-gray-400 hover:underline hover:decoration-white`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="../forms"
            className={({ isActive, isPending }) =>
              `${
                isActive
                  ? "text-gray-400 underline decoration-white"
                  : "text-white"
              } text-sm hover:text-gray-400 hover:underline hover:decoration-white`
            }
          >
            Forms
          </NavLink>
        </div>
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          &copy; 2024 Lawyer Directory. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
