import React from "react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-10">
      {/* Page Title */}
      <section className="container mx-auto text-center py-10">
        <h1 className="text-[#020887] text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-[#334195] text-lg">
          We'd love to hear from you! Reach out for any questions or support.
        </p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto max-w-md px-4">
        <form className="bg-[#E5E1DA] p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-[#647AA3] mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-[#B3C8CF] p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#647AA3] mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-[#B3C8CF] p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#647AA3] mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-[#B3C8CF] p-2 rounded"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#89A8B2] text-white font-bold py-2 rounded hover:bg-[#647AA3] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
