import React, { useEffect, useState } from "react";
import {
  IndustriesProvider,
  LawyersProvider,
  BlogsProvider,
} from "./contexts/index";

function Functioning() {
  const [industries, setIndustries] = useState();
  const [lawyers, setLawyers] = useState();
  const [blogs, setBlogs] = useState();

  const addIndustries = (industry) => {
    setIndustries((prev) => [{ i_id: Date.now(), ...industry }, ...prev]);
  };
  const addLawyer = (lawyer) => {
    setLawyers((prev) => [{ l_id: Date.now(), ...lawyer }, ...prev]);
  };
  const addBlog = (blog) => {
    setBlogs((prev) => [{ b_id: Date.now(), ...blog }, ...prev]);
  };

  useEffect(() => {
    const industries = JSON.parse(localStorage.getItem("industries"));
    const lawyers = JSON.parse(localStorage.getItem("lawyers"));
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    if (industries && industries.length > 0) {
      setIndustries(industries);
    }
    if (lawyers && lawyers.length > 0) {
      setLawyers(lawyers);
    }
    if (blogs && blogs.length > 0) {
      setBlogs(blogs);
    }
  }, []);
}

export default Functioning;
