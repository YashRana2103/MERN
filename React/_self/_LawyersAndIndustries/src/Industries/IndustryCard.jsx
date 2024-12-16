import React from "react";

function IndustryCard({ i_name, i_desc }) {
  return (
    <div className="container mx-auto mt-8 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">{i_name}</h2>
          <p className="mt-2 text-gray-600">{i_desc}</p>
          {/* <a
            href="lawyers.php?industry_id=<?php echo $row['industry_id'] ?>"
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            View Lawyers
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
