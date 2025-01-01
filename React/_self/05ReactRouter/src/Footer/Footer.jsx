import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#334195] text-[#F1F0E8] py-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Footer Links */}
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-x-6 md:space-y-0 font-medium">
          <li>
            <NavLink
              to=""
              className="text-[#E5E1DA] hover:text-[#B3C8CF] transition-colors duration-300"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-[#E5E1DA] hover:text-[#B3C8CF] transition-colors duration-300"
            >
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-[#E5E1DA] hover:text-[#B3C8CF] transition-colors duration-300"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Footer Text */}
        <div className="mt-4 md:mt-0 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
