import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams(); // Extract userid from the URL params
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userid) {
      fetchUser(); // Fetch user data only if userid is not present
    }
  }, [userid]);

  function fetchUser() {
    setLoading(true);
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      });
  }

  // Format the date of birth
  const formattedDob = data
    ? new Date(data.dob.date).toLocaleDateString("en-GB")
    : "";

  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4">
      {userid ? (
        <p>User ID: {userid}</p>
      ) : data ? (
        <Card
          imgUrl={data.picture.large}
          name={`${data.name.first} ${data.name.last}`}
          gender={data.gender}
          location={`${data.location.state}, ${data.location.country}`}
          email={data.email}
          dob={formattedDob}
          phone={data.phone}
          fetchUser={fetchUser}
          loading={loading}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User;
