import React from "react";
import "./styles/components/_App.scss";

import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Single from "./pages/Single";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/blog/:title" component={Single} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
}

export default App;
