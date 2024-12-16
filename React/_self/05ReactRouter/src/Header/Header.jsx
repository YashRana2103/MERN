import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#334195] text-[#F1F0E8] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `${
                  isActive ? "text-[#B3C8CF]" : "text-[#E5E1DA]"
                } hover:text-[#B3C8CF] transition-colors duration-300`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                `${
                  isActive ? "text-[#B3C8CF]" : "text-[#E5E1DA]"
                } hover:text-[#B3C8CF] transition-colors duration-300`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                `${
                  isActive ? "text-[#B3C8CF]" : "text-[#E5E1DA]"
                } hover:text-[#B3C8CF] transition-colors duration-300`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive, isPending }) =>
                `${
                  isActive ? "text-[#B3C8CF]" : "text-[#E5E1DA]"
                } hover:text-[#B3C8CF] transition-colors duration-300`
              }
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive, isPending }) =>
                `${
                  isActive ? "text-[#B3C8CF]" : "text-[#E5E1DA]"
                } hover:text-[#B3C8CF] transition-colors duration-300`
              }
            >
              Github
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hidden md:inline-block text-[#334195] bg-[#F1F0E8] hover:bg-[#E5E1DA] hover:text-[#334195] font-medium px-4 py-2 rounded-lg transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="text-[#F1F0E8] bg-[#89A8B2] hover:bg-[#B3C8CF] hover:text-[#334195] font-medium px-4 py-2 rounded-lg transition duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
