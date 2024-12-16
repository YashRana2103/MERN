import React from "react";
import BackBtn from "./BackBtn";

function AddLawyers() {
  return (
    <>
      <BackBtn />
      <div className="container mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
        <form action="" method="POST" enctype="multipart/form-data">
          <div className="mb-4">
            <label
              htmlFor="lawyer_name"
              className="block text-gray-700 font-semibold"
            >
              Lawyer Name
            </label>
            <input
              type="text"
              id="lawyer_name"
              name="lawyer_name"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lawyer_bio"
              className="block text-gray-700 font-semibold"
            >
              bio
            </label>
            <textarea
              id="lawyer_bio"
              name="lawyer_bio"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-semibold"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 font-semibold"
            >
              Lawyer Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
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
            name="add_lawyer"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Add Lawyer
          </button>
        </form>
      </div>
    </>
  );
}

export default AddLawyers;
