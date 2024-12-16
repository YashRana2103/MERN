import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function Github() {
  const [data, setData] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4">
      {username ? (
        <Card
          imgUrl={data.avatar_url}
          username={username}
          followers={data.followers}
          following={data.following}
        />
      ) : (
        <div className="text-[#020887] text-center py-5 text-3xl">
          {`Enter Username in url after ../github/{here}`}
        </div>
      )}
    </div>
  );
}

export default Github;
