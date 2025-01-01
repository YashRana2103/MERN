import React from "react";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4 py-10">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-[#020887] text-5xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-[#334195] text-lg mb-6">
            Discover amazing content and features that will help you achieve
            your goals. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Repellat tenetur voluptatum, itaque labore est ratione
            provident sint dolore doloribus non vel alias, porro tempora!
            Repellendus voluptatibus at ipsam voluptate aspernatur.
          </p>
          <button className="bg-[#647AA3] text-white font-bold py-2 px-6 rounded hover:bg-[#95B2B0] transition duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/400"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
