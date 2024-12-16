import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function Github() {
  const { username } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 text-white text-3xl text-center m-4 p-5">
      {username ? (
        <Card
          imgSrc={data.avatar_url}
          username={username}
          followers={data.followers}
        />
      ) : (
        // <h1>{data.avatar_url}</h1>
        `Enter username in Search bar after ../github/ `
      )}
    </div>
  );
}

export default Github;
