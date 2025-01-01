import React, { useState } from "react";
import BackBtn from "./BackBtn";
import { useIndustries } from "../contexts";

function AddIndustries() {
  const [industryName, setIndustryName] = useState("");
  const [industryDesc, setIndustryDesc] = useState("");
  const { addIndustries } = useIndustries();

  const add = (e) => {
    e.preventDefault();
    if (!industryName || !industryDesc) return;

    const newIndustry = {
      i_id: Date.now(),
      i_name: industryName,
      i_desc: industryDesc,
    };

    // Add new industry and update localStorage
    addIndustries(newIndustry);

    // Reset form inputs
    setIndustryName("");
    setIndustryDesc("");
  };

  return (
    <>
      <BackBtn />
      <div className="container mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
        <form onSubmit={add}>
          <div className="mb-4">
            <label
              htmlFor="industry_name"
              className="block text-gray-700 font-semibold"
            >
              Industry Name
            </label>
            <input
              type="text"
              id="industry_name"
              name="industry_name"
              placeholder="Enter Industry name"
              value={industryName}
              onChange={(e) => setIndustryName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Industry description"
              value={industryDesc}
              onChange={(e) => setIndustryDesc(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>
          <button
            type="submit"
            name="add_industry"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Add Industry
          </button>
        </form>
      </div>
    </>
  );
}

export default AddIndustries;
