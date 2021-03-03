import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/v1/posts";

const Single = () => {
    const [single, setSingle] = useState({});
    const match = useRouteMatch();
    const getSingle = async () => {
        const res = await axios.get(`${apiUrl}/${match.params.title}`);
        setSingle(res.data);
        console.log(res.data);
    };
    useEffect(() => {
        getSingle();
    }, []);
    return (

        <div className="container-single">
            <h1>hs</h1>
        </div>
    );
};

export default Single;
