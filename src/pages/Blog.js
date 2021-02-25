import React, { useState, useEffect } from "react";
import "../styles/components/_Blog.scss";

import Formulaire from "../components/Formulaire";
import Post from "../components/Post";

const url = "http://localhost:3001/api/v1/posts";

const Blog = () => {
  const [api, setApi] = useState([]);
  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const api = await response.json();
      setApi(api);
      console.log(api);
    } catch (error) {}
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="blog">
      <h2>Blog</h2>
      <Formulaire />
      <Post api={api} />
    </div>
  );
};
export default Blog;
