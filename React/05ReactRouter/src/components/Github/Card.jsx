import React from "react";

function Card({ imgSrc, username, followers }) {
  return (
    <div>
      <figure className="bg-gray-600 rounded-xl p-8 ">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={imgSrc}
          alt=""
          width="300"
          height="300"
        />
        <div className="pt-6 space-y-4">
          <h1>{username}</h1>
          <p className="text-2xl py-2">{followers} Followers</p>
        </div>
      </figure>
    </div>
  );
}

export default Card;
