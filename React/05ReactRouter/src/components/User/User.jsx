import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      {userid ? `User: ${userid}` : `User`}
    </div>
  );
}
