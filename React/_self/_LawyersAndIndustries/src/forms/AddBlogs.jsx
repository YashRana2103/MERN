import React from "react";
import BackBtn from "./BackBtn";

function AddBlogs() {
  return (
    <>
      <BackBtn />
      <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
        <form action="" method="POST">
          <div className="mb-4">
            <label
              htmlFor="blog_title"
              className="block text-gray-700 font-semibold"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="blog_title"
              name="blog_title"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="blog_content"
              className="block text-gray-700 font-semibold"
            >
              Blog Content
            </label>
            <textarea
              id="blog_content"
              name="blog_content"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="lawyer_id"
              className="block text-gray-700 font-semibold"
            >
              Select Lawyer
            </label>
            <select
              id="lawyer_id"
              name="lawyer_id"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            >
              <option value="Lawyer name1">Lawyer name1</option>
              <option value="Lawyer name2">Lawyer name2</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="industry_id"
              className="block text-gray-700 font-semibold"
            >
              Industry
            </label>
            <select
              id="industry_id"
              name="industry_id"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            >
              <option value="Real Estate">Real Estate</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>
          <button
            type="submit"
            name="add_blog"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Add Blog
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBlogs;
