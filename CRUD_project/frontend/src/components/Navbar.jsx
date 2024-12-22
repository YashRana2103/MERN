import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1F5673] text-[#B9B8D3] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-[#B9B8D3] hover:text-[#90C3C8] font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="text-[#B9B8D3] hover:text-[#90C3C8] font-semibold"
            >
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
