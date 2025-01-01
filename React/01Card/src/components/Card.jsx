import React, { useEffect, useState } from "react";

const Card = ({ username = " noUser ", post = " Staff Engineer " }) => {
  // const [imgUrl, setImgUrl] = useState("https://picsum.photos/300/300");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImgUrl(`https://picsum.photos/300/300?random=${Date.now()}`);
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={`https://picsum.photos/300/300?random=${Date.now()}`}
          alt=""
          width="300"
          height="300"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <h1>{username}</h1>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
