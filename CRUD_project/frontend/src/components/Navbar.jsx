import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1F5673] text-[#B9B8D3] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                ` font-semibold ${
                  isActive ? `text-[#90C3C8]` : `text-[#B9B8D3]`
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={({ isActive, isPending }) =>
                ` font-semibold ${
                  isActive ? `text-[#90C3C8]` : `text-[#B9B8D3]`
                }`
              }
            >
              Create User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
