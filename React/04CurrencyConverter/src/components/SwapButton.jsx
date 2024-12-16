import React from "react";

export default function SwapButton({ onSwap }) {
  return (
    <div className="flex justify-center -my-2">
      <button
        onClick={onSwap}
        className="bg-blue-500 dark:bg-blue-600 text-white p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
      >
        ⇅
      </button>
    </div>
  );
}
