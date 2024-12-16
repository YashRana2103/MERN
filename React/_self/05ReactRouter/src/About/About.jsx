import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-10">
      {/* Page Title */}
      <section className="container mx-auto text-center py-10">
        <h1 className="text-[#020887] text-5xl font-bold mb-4">About Us</h1>
        <p className="text-[#334195] text-lg mb-6">
          Our team is passionate about creating solutions that inspire and
          connect people.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto py-10 px-4 md:px-10">
        <h2 className="text-[#647AA3] text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-[#95B2B0] leading-relaxed">
          We strive to empower our community through technology and innovation,
          bringing value through our dedication, integrity, and creative
          solutions.
        </p>
      </section>

      {/* Our Team */}
      <section className="container mx-auto py-10 px-4 md:px-10">
        <h2 className="text-[#647AA3] text-3xl font-bold mb-4">
          Meet Our Team
        </h2>
        <p className="text-[#95B2B0] mb-4">
          We are a diverse group of professionals, each bringing unique
          expertise and a shared commitment to excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#E5E1DA] rounded-lg p-4 shadow-lg">
            <h3 className="text-[#020887] text-xl font-semibold">Jane Doe</h3>
            <p className="text-[#334195]">CEO & Founder</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#E5E1DA] rounded-lg p-4 shadow-lg">
            <h3 className="text-[#020887] text-xl font-semibold">John Smith</h3>
            <p className="text-[#334195]">Lead Developer</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#E5E1DA] rounded-lg p-4 shadow-lg">
            <h3 className="text-[#020887] text-xl font-semibold">
              Emily Johnson
            </h3>
            <p className="text-[#334195]">Marketing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}
