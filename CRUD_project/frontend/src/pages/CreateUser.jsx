import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import CreateUserForm from "../components/CreateUserForm";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("users", {
        name,
        email,
        age: parseInt(age),
      });
      navigate("/");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <CreateUserForm
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      age={age}
      setAge={setAge}
    />
  );
};

export default CreateUser;
