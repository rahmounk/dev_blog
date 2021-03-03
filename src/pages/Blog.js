import React, { useState, useEffect } from "react";
import "../styles/components/_Blog.scss";
import Formulaire from "../components/Formulaire";
import Post from "../components/Post";
import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";

const Blog = () => {
    const [api, setApi] = useState([]);
    const fetchApi = async () => {
        try {
            const response = await axios.get(url);
            setApi(response.data);
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