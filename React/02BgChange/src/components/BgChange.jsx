import React, { useState } from "react";

const BgChange = () => {
  const [color, setColor] = useState("#404040");
  const defaultStyle = { backgroundColor: "#222222", color: "white" };
  return (
    <div
      className="w-full h-screen flex flex-col justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
          <button
            id="red"
            className="outline px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("red")}
            style={{
              color: "#222222",
              outlineColor: "red",
            }}
          >
            Red
          </button>
          <button
            id="green"
            className="outline px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("green")}
            style={{
              color: "#222222",
              outlineColor: "green",
            }}
          >
            Green
          </button>
          <button
            id="blue"
            className="outline px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("blue")}
            style={{
              color: "#222222",
              outlineColor: "blue",
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChange;
